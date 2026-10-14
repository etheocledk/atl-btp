type Props = {
  eyebrow: string
  title: string
  intro?: string
  light?: boolean
  center?: boolean
}

export default function SectionTitle({ eyebrow, title, intro, light = false, center = false }: Props) {
  return (
    <div className={`reveal max-w-3xl ${center ? 'mx-auto text-center' : ''}`}>
      <p
        className={`mb-3 inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.25em] ${
          light ? 'text-gold' : 'text-atl-light'
        }`}
      >
        <span className="h-0.5 w-8 bg-gold" aria-hidden="true" />
        {eyebrow}
      </p>
      <h2
        className={`text-3xl leading-tight font-extrabold sm:text-4xl ${light ? 'text-white' : 'text-atl'}`}
      >
        {title}
      </h2>
      {intro && (
        <p className={`mt-4 text-base sm:text-lg ${light ? 'text-white/75' : 'text-graphite/75'}`}>
          {intro}
        </p>
      )}
    </div>
  )
}
