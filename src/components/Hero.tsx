import { ArrowRight, ChevronDown, Radio, Sun, Building2 } from 'lucide-react'
import { company } from '../data/site'

const highlights = [
  { icon: Building2, label: 'BTP & Génie civil' },
  { icon: Sun, label: 'Énergies & Solaire' },
  { icon: Radio, label: 'Télécoms & Fibre' },
]

export default function Hero() {
  return (
    <section id="accueil" className="relative flex min-h-[100svh] items-center overflow-hidden bg-atl-deep">
      <img
        src="/images/hero.jpg"
        alt=""
        className="absolute inset-0 h-full w-full object-cover"
        fetchPriority="high"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-atl-deep via-atl-deep/85 to-atl/40" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-atl-deep/80 to-transparent" />

      <div className="relative mx-auto w-full max-w-7xl px-4 pt-28 pb-24 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-gold">
            <span className="h-1.5 w-1.5 rounded-full bg-gold" />
            {company.city}
          </p>
          <h1 className="text-4xl leading-tight font-extrabold text-white sm:text-5xl lg:text-6xl">
            ATL BTP
            <span className="block text-gold">Énergies & Télécoms</span>
          </h1>
          <p className="mt-6 font-display text-xl font-semibold text-white/90 sm:text-2xl">
            {company.tagline}
          </p>
          <p className="mt-4 max-w-2xl text-base text-white/75 sm:text-lg">
            Nous concevons, construisons et maintenons les infrastructures qui font avancer
            l'Afrique : bâtiments, réseaux électriques, énergie solaire et réseaux de
            télécommunications.
          </p>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-gold px-7 py-3.5 font-semibold text-atl-deep transition hover:bg-gold-dark"
            >
              Demander un devis <ArrowRight className="h-5 w-5" />
            </a>
            <a
              href="#realisations"
              className="inline-flex items-center justify-center rounded-full border border-white/40 px-7 py-3.5 font-semibold text-white transition hover:border-white hover:bg-white/10"
            >
              Nos réalisations
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-full px-7 py-3.5 font-semibold text-white/90 underline-offset-4 transition hover:text-gold hover:underline"
            >
              Nous contacter
            </a>
          </div>
        </div>

        <ul className="mt-16 grid max-w-3xl grid-cols-1 gap-3 sm:grid-cols-3">
          {highlights.map(({ icon: Icon, label }) => (
            <li
              key={label}
              className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-medium text-white backdrop-blur"
            >
              <Icon className="h-5 w-5 text-gold" aria-hidden="true" />
              {label}
            </li>
          ))}
        </ul>
      </div>

      <a
        href="#a-propos"
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 text-white/70 hover:text-gold sm:block"
        aria-label="Défiler vers la section À propos"
      >
        <ChevronDown className="h-8 w-8 animate-bounce" />
      </a>
    </section>
  )
}
