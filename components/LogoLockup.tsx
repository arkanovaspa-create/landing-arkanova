import Image from "next/image";

// Fondo ya oscuro (header/footer/drawer): logo blanco+dorado sobre transparencia.
const LOGO_FULL_SRC = "/images/logo-completo-transparente.png";
const LOGO_FULL_RATIO = 2000 / 1620;

const LOGO_ICON_SRC = "/images/icono-transparente-512.png";

type LogoLockupProps = {
  compact?: boolean;
  variant?: "full" | "icon";
};

export function LogoLockup({ compact = false, variant = "full" }: LogoLockupProps) {
  const isIcon = variant === "icon";
  const height = compact ? 48 : 64;
  const width = isIcon ? height : Math.round(height * LOGO_FULL_RATIO);

  return (
    <span className="flex min-w-0 items-center gap-3">
      <span className="relative shrink-0" style={{ height, width }}>
        <Image
          src={isIcon ? LOGO_ICON_SRC : LOGO_FULL_SRC}
          alt="Arkanova SpA"
          fill
          sizes={`${width}px`}
          className="object-contain"
          priority={!compact}
        />
      </span>
      {isIcon ? null : (
        <span className="hidden min-w-0 leading-tight sm:block">
          <span className="block text-sm font-bold uppercase tracking-wide text-white">Arkanova</span>
          <span className="block text-xs font-medium text-gold-light">Remodelación Integral</span>
        </span>
      )}
    </span>
  );
}
