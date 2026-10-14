type Props = {
  /** Version claire pour les fonds sombres */
  light?: boolean
  className?: string
}

// Logo provisoire : « A » en forme de pylône + éclair, en attendant le logo officiel.
export default function Logo({ light = false, className = '' }: Props) {
  return (
    <span className={`inline-flex items-center gap-3 ${className}`}>
      <svg viewBox="0 0 64 64" className="h-10 w-10 shrink-0" aria-hidden="true">
        <rect width="64" height="64" rx="14" fill={light ? '#ffffff' : '#003E8A'} />
        <path
          d="M32 12 L18 52 h7 l3-9 h8 l3 9 h7 Z M30 37 l2-7 2 7 Z"
          fill={light ? '#003E8A' : '#ffffff'}
          fillRule="evenodd"
        />
        <path d="M37 10 l-6 12 h5 l-3 10 9-14 h-5 l3-8 Z" fill="#F5B400" />
      </svg>
      <span className="leading-tight">
        <span
          className={`block font-display text-lg font-extrabold tracking-tight ${light ? 'text-white' : 'text-atl'}`}
        >
          ATL BTP
        </span>
        <span
          className={`block text-[0.65rem] font-medium uppercase tracking-[0.18em] ${light ? 'text-gold' : 'text-graphite/70'}`}
        >
          Énergies & Télécoms
        </span>
      </span>
    </span>
  )
}
