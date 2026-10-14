import { MapPin } from 'lucide-react'
import { useState } from 'react'
import { projectCategories, projects } from '../data/site'
import SectionTitle from './SectionTitle'

type Filter = (typeof projectCategories)[number]

export default function Projects() {
  const [filter, setFilter] = useState<Filter>('Tous')
  const visible = filter === 'Tous' ? projects : projects.filter((p) => p.category === filter)

  return (
    <section id="realisations" className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <SectionTitle
            eyebrow="Nos réalisations"
            title="Des projets concrets, sur le terrain"
            intro="Un aperçu des chantiers et installations menés par nos équipes."
          />
          <div className="reveal flex flex-wrap gap-2" role="group" aria-label="Filtrer par catégorie">
            {projectCategories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setFilter(cat)}
                aria-pressed={filter === cat}
                className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                  filter === cat
                    ? 'bg-atl text-white'
                    : 'bg-gray-100 text-graphite hover:bg-gray-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {visible.map((project) => (
            <li
              key={project.title}
              className="group relative aspect-[4/5] overflow-hidden rounded-2xl bg-atl-deep shadow-sm"
            >
              <img
                src={project.image}
                alt={project.title}
                className="h-full w-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-atl-deep via-atl-deep/30 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-5">
                <span className="inline-block rounded-full bg-gold px-3 py-1 text-xs font-semibold text-atl-deep">
                  {project.category}
                </span>
                <h3 className="mt-3 text-lg leading-snug font-bold text-white">{project.title}</h3>
                <p className="mt-1 flex items-center gap-1.5 text-sm text-white/75">
                  <MapPin className="h-4 w-4" aria-hidden="true" />
                  {project.place}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
