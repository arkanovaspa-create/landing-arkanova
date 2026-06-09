type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  inverse?: boolean;
};

export function SectionHeading({ eyebrow, title, description, inverse = false }: SectionHeadingProps) {
  return (
    <div className="max-w-2xl">
      <p className="text-sm font-semibold uppercase text-gold">{eyebrow}</p>
      <h2 className={`mt-3 text-3xl font-semibold leading-tight sm:text-4xl ${inverse ? "text-white" : "text-ink"}`}>{title}</h2>
      {description ? <p className={`mt-4 text-base leading-7 ${inverse ? "text-slate-300" : "text-slate-600"}`}>{description}</p> : null}
    </div>
  );
}
