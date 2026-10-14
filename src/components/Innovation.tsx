import { BrainCircuit, Cpu, Lightbulb, ShieldCheck, Building } from 'lucide-react'
import { innovations } from '../data/site'
import SectionTitle from './SectionTitle'

const icons = [Lightbulb, Cpu, Building, ShieldCheck, BrainCircuit]

export default function Innovation() {
  return (
    <section id="innovation" className="relative overflow-hidden bg-atl-deep py-20 sm:py-28">
      <img
        src="/images/iot.jpg"
        alt=""
        className="absolute inset-0 h-full w-full object-cover opacity-15"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-gradient-to-br from-atl-deep via-atl-deep/95 to-atl/80" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-5 lg:gap-16">
          <div className="lg:col-span-2">
            <SectionTitle
              eyebrow="Innovation"
              title="La technologie au service du développement"
              intro="Nous intégrons les solutions numériques les plus récentes pour rendre les infrastructures plus intelligentes, plus sûres et plus économes."
              light
            />
            <img
              src="/images/cybersecurite.jpg"
              alt="Illustration de la cybersécurité des réseaux"
              className="reveal mt-10 hidden aspect-video w-full rounded-2xl object-cover shadow-2xl ring-1 ring-white/10 lg:block"
              loading="lazy"
            />
          </div>

          <ul className="grid gap-5 sm:grid-cols-2 lg:col-span-3">
            {innovations.map((item, i) => {
              const Icon = icons[i]
              return (
                <li
                  key={item.title}
                  className={`reveal rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur transition hover:border-gold/50 hover:bg-white/10 ${
                    i === innovations.length - 1 ? 'sm:col-span-2' : ''
                  }`}
                >
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-gold/15 text-gold">
                    <Icon className="h-6 w-6" aria-hidden="true" />
                  </span>
                  <h3 className="mt-4 text-lg font-bold text-white">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/70">{item.text}</p>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </section>
  )
}
