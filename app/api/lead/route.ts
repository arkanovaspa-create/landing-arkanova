import { NextResponse } from "next/server";

type LeadRequest = {
  name?: string;
  phone?: string;
  commune?: string;
  project_type?: string;
  description?: string;
  email?: string;
  address?: string;
  url_origen?: string;
};

const WEBHOOK_TIMEOUT_MS = 10000;

function cleanText(value: unknown) {
  return typeof value === "string" ? value.replace(/\s+/g, " ").trim() : "";
}

function cleanPhone(value: unknown) {
  return cleanText(value).replace(/[^\d+]/g, "");
}

function isValidChileanPhone(phone: string) {
  const digits = phone.replace(/\D/g, "");

  if (digits.startsWith("569") && digits.length >= 11) {
    return true;
  }

  if (digits.startsWith("56") && digits.length >= 10) {
    return true;
  }

  if (digits.startsWith("9") && digits.length >= 9) {
    return true;
  }

  return digits.length >= 8;
}

function getOriginUrl(request: Request, payloadUrl: string) {
  return payloadUrl || request.headers.get("referer") || request.headers.get("origin") || "";
}

export async function POST(request: Request) {
  try {
    const webhookUrl = process.env.APPS_SCRIPT_WEBHOOK_URL;

    if (!webhookUrl) {
      return NextResponse.json(
        { ok: false, message: "Webhook no configurado. Puedes escribirnos directamente por WhatsApp." },
        { status: 500 }
      );
    }

    const body = (await request.json()) as LeadRequest;
    const nombre = cleanText(body.name);
    const telefono = cleanPhone(body.phone);
    const comuna = cleanText(body.commune);
    const servicio = cleanText(body.project_type);
    const mensaje = cleanText(body.description);
    const email = cleanText(body.email);
    const direccion = cleanText(body.address);
    const urlOrigen = getOriginUrl(request, cleanText(body.url_origen));
    const userAgent = request.headers.get("user-agent") || "";

    if (!nombre) {
      return NextResponse.json({ ok: false, message: "El nombre es obligatorio." }, { status: 400 });
    }

    if (!telefono || !isValidChileanPhone(telefono)) {
      return NextResponse.json({ ok: false, message: "Ingresa un teléfono o WhatsApp válido." }, { status: 400 });
    }

    if (!servicio && !mensaje) {
      return NextResponse.json({ ok: false, message: "Indica el servicio o una breve descripción." }, { status: 400 });
    }

    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), WEBHOOK_TIMEOUT_MS);

    const leadPayload = {
      nombre,
      telefono,
      whatsapp: telefono,
      email,
      comuna,
      direccion,
      servicio,
      mensaje,
      origen: "Landing web",
      fuente: "arkanovaspa.cl",
      timestamp: new Date().toISOString(),
      url_origen: urlOrigen,
      user_agent: userAgent
    };

    const response = await fetch(webhookUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(leadPayload),
      signal: controller.signal
    }).finally(() => clearTimeout(timeout));

    if (!response.ok) {
      return NextResponse.json(
        { ok: false, message: "No pudimos registrar la solicitud en este momento." },
        { status: 502 }
      );
    }

    return NextResponse.json({ ok: true, message: "Lead registrado correctamente." });
  } catch (error) {
    const isAbort = error instanceof Error && error.name === "AbortError";

    return NextResponse.json(
      {
        ok: false,
        message: isAbort ? "El registro tardó demasiado en responder." : "Error inesperado al registrar la solicitud."
      },
      { status: 500 }
    );
  }
}
