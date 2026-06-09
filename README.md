# Arkanova Landing

Landing page de captacion para Arkanova | Remodelacion Integral.

La version actual esta aprobada para publicacion y esta enfocada en:

- Electricidad y remodelacion integral.
- Casas, departamentos y oficinas.
- Santiago y Region Metropolitana.
- Agenda de visita tecnica por WhatsApp.
- Captacion desde Instagram, Google y WhatsApp.

No incluye Supabase, panel admin ni login.

## Stack

- Next.js App Router
- TypeScript
- Tailwind CSS
- Lucide React
- Preparado para Vercel

## Requisitos

- Node.js LTS
- npm

## Instalacion local

```bash
npm install
```

## Variables de entorno

Copia `.env.example` como `.env.local` y ajusta los valores si corresponde.

```bash
NEXT_PUBLIC_WHATSAPP_NUMBER=569XXXXXXXX
NEXT_PUBLIC_INSTAGRAM_URL=https://www.instagram.com/arkanova_cl/
```

Valores usados por fallback en el codigo:

- WhatsApp: `56937882951`
- Instagram: `https://www.instagram.com/arkanova_cl/`

Importante: no subir `.env.local` a GitHub. Ya esta incluido en `.gitignore`.

## Desarrollo

```bash
npm run dev
```

El sitio queda disponible en:

```bash
http://localhost:3000
```

## Validacion antes de publicar

```bash
npm run typecheck
npm run build
```

## Produccion local

Despues de compilar:

```bash
npm run build
npm run start
```

## Publicar en GitHub

Desde la carpeta del proyecto:

```bash
git init
git add .
git commit -m "Publicar landing Arkanova"
git branch -M main
git remote add origin https://github.com/TU-USUARIO/TU-REPO.git
git push -u origin main
```

Antes de hacer `git add .`, confirma que `.env.local`, `.next`, `node_modules` y `.vercel` no se incluyan.

## Publicar en Vercel

1. Entra a Vercel e importa el repositorio desde GitHub.
2. Framework Preset: Next.js.
3. Build Command: `npm run build`.
4. Install Command: `npm install`.
5. Output Directory: dejar vacio.
6. Agrega variables de entorno:
   - `NEXT_PUBLIC_WHATSAPP_NUMBER`
   - `NEXT_PUBLIC_INSTAGRAM_URL`
7. Ejecuta Deploy.

## Archivos principales

- `app/page.tsx`: pagina principal.
- `app/layout.tsx`: metadata SEO y layout base.
- `components/LandingPage.tsx`: secciones de la landing.
- `components/LeadForm.tsx`: formulario de captacion con salida a WhatsApp.
- `components/Container.tsx`: contenedor reutilizable.
- `components/SectionHeading.tsx`: encabezados de seccion.
- `lib/constants.ts`: variables publicas y opciones del formulario.
- `lib/whatsapp.ts`: helpers para generar enlaces de WhatsApp.
- `public/images/logo-arkanova.jpeg`: logo oficial.
- `public/images/arkanova-hero.png`: imagen principal del hero.
