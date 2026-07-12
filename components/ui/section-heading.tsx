type SectionHeadingProps = {
  eyebrow: string
  title: string
  description: string
}

export function SectionHeading({ eyebrow, title, description }: SectionHeadingProps) {
  return (
    <div className="max-w-2xl space-y-3">
      <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#D62828]">{eyebrow}</p>
      <h2 className="text-3xl font-black text-slate-900 sm:text-4xl">{title}</h2>
      <p className="text-lg leading-8 text-slate-600">{description}</p>
    </div>
  )
}
