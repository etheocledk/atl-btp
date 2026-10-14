import { ArrowRight, Building2, Check, Radio, Zap } from 'lucide-react'
import { services, type ServiceKey } from '../data/site'
import SectionTitle from './SectionTitle'

const icons: Record<ServiceKey, typeof Building2> = {
  btp: Building2,
  energie: Zap,
  telecoms: Radio,
}

export default function Services() {
  return (
    <section id="services" className="bg-gray-50 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionTitle
          eyebrow="Nos services"
          title="Trois métiers, une seule exigence : la performance"
          intro="De la construction d'ouvrages à la connectivité, nous couvrons l'ensemble de la chaîne des infrastructures modernes."
          center
        />

        <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = icons[service.key]
            return (
              <article
                key={service.key}
                className="reveal group flex flex-col overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-gray-100 transition hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={service.image}
                    alt=""
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-atl-deep/80 to-transparent" />
                  <div className="absolute bottom-4 left-5 flex items-center gap-3">
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-gold text-atl-deep">
                      <Icon className="h-6 w-6" aria-hidden="true" />
                    </span>
                    <h3 className="text-2xl font-extrabold text-white">{service.title}</h3>
                  </div>
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <p className="text-graphite/75">{service.intro}</p>
                  <ul className="mt-5 grid flex-1 content-start gap-2.5">
                    {service.items.map((item) => (
                      <li key={item} className="flex items-start gap-2.5 text-sm font-medium">
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-atl-light" aria-hidden="true" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <a
                    href="#contact"
                    className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-atl hover:text-atl-light"
                  >
                    Parler de votre projet
                    <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                  </a>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
