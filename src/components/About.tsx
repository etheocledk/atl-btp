import { CheckCircle2 } from 'lucide-react'
import { pillars, stats, values } from '../data/site'
import Counter from './Counter'
import SectionTitle from './SectionTitle'

export default function About() {
  return (
    <section id="a-propos" className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="reveal relative">
            <img
              src="/images/equipe-chantier.jpg"
              alt="Équipe d'ingénieurs et de techniciens sur un chantier"
              className="aspect-[4/3] w-full rounded-2xl object-cover shadow-xl"
              loading="lazy"
            />
            <div className="absolute -right-2 -bottom-6 rounded-2xl bg-atl p-6 text-white shadow-xl sm:-right-6">
              <p className="font-display text-4xl font-extrabold text-gold">
                <Counter value={stats[3].value} suffix=" ans" />
              </p>
              <p className="mt-1 text-sm text-white/80">d'expertise terrain</p>
            </div>
          </div>

          <div>
            <SectionTitle
              eyebrow="À propos"
              title="Un partenaire technique fiable pour vos grands projets"
              intro="ATL BTP – Énergies & Télécoms est une entreprise basée à Niamey, spécialisée dans le BTP, les infrastructures énergétiques et les télécommunications. Nous accompagnons les acteurs publics et privés, des études à la mise en service."
            />

            <div className="mt-8 grid gap-5 sm:grid-cols-3">
              {pillars.map((p) => (
                <div key={p.title} className="reveal rounded-xl border border-gray-100 bg-gray-50 p-5">
                  <h3 className="font-bold text-atl">{p.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-graphite/75">{p.text}</p>
                </div>
              ))}
            </div>

            <ul className="reveal mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3">
              {values.map((v) => (
                <li key={v} className="flex items-center gap-2 text-sm font-medium">
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-gold" aria-hidden="true" />
                  {v}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <dl className="reveal mt-20 grid grid-cols-2 gap-px overflow-hidden rounded-2xl bg-atl/10 lg:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="flex flex-col-reverse bg-white p-6 text-center sm:p-8">
              <dt className="mt-2 text-sm text-graphite/70">{s.label}</dt>
              <dd className="font-display text-3xl font-extrabold text-atl sm:text-4xl">
                <Counter value={s.value} prefix={s.prefix} suffix={s.suffix} />
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
