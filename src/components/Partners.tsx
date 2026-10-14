import { partners } from '../data/site'
import SectionTitle from './SectionTitle'

export default function Partners() {
  return (
    <section id="partenaires" className="py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionTitle
          eyebrow="Partenaires & certifications"
          title="Nous travaillons avec les leaders technologiques"
          intro="Des équipements reconnus mondialement pour des installations durables et performantes."
          center
        />
      </div>

      {/* Bande défilante : la liste est dupliquée pour une boucle continue */}
      <div className="marquee reveal relative mt-14 overflow-hidden">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-white to-transparent sm:w-32" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-white to-transparent sm:w-32" />
        <ul className="marquee-track flex w-max items-center">
          {[...partners, ...partners].map((p, i) => (
            <li key={i} className="px-8 sm:px-12" aria-hidden={i >= partners.length}>
              <img src={p.logo} alt={p.name} className="h-12 w-36 object-contain sm:h-14 sm:w-44" loading="lazy" />
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
