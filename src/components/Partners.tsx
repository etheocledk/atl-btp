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

        {/* Noms en texte en attendant les logos officiels fournis par les partenaires */}
        <ul className="reveal mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {partners.map((name) => (
            <li
              key={name}
              className="flex h-24 items-center justify-center rounded-xl border border-gray-100 bg-gray-50 px-4 text-center font-display text-base font-bold text-graphite/60 grayscale transition hover:border-atl/20 hover:bg-white hover:text-atl hover:shadow-md"
            >
              {name}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
