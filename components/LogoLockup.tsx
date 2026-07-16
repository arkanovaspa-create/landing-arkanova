import Image from "next/image";

const LOGO_SRC = "/images/logo-arkanova-transparente.png";

type LogoLockupProps = {
  inverse?: boolean;
  compact?: boolean;
};

export function LogoLockup({ inverse = false, compact = false }: LogoLockupProps) {
  return (
    <span className="flex min-w-0 items-center gap-3">
      <span className={`relative shrink-0 ${compact ? "h-12 w-14" : "h-16 w-[76px] sm:h-[72px] sm:w-[84px]"}`}>
        <Image
          src={LOGO_SRC}
          alt="Arkanova SpA"
          fill
          sizes={compact ? "56px" : "(min-width: 640px) 84px, 76px"}
          className="object-contain"
          priority={!compact}
        />
      </span>
      <span className="hidden min-w-0 leading-tight sm:block">
        <span className={`hidden text-xs font-medium sm:block ${inverse ? "text-white/70" : "text-slate-500"}`}>Remodelación Integral</span>
      </span>
    </span>
  );
}
