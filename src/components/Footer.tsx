import { Mail, MapPin, Phone } from 'lucide-react'
import { company, navLinks, services } from '../data/site'
import Logo from './Logo'

const year = new Date().getFullYear()
const footerLinks = navLinks.filter((l) =>
  ['#a-propos', '#services', '#realisations', '#contact'].includes(l.href),
)

export default function Footer() {
  return (
    <footer className="bg-atl-deep text-white/70">
      <div className="h-1 bg-gradient-to-r from-atl-light via-gold to-atl-light" />
      <div className="mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 lg:grid-cols-[minmax(0,2fr)_minmax(0,3fr)] lg:gap-24 lg:px-8">
        <div className="max-w-sm">
          <Logo light />
          <p className="mt-5 text-sm leading-relaxed">
            Des infrastructures fiables pour un futur connecté. BTP, énergies et télécoms au service
            des acteurs publics et privés.
          </p>
          <p className="mt-4 font-display text-sm font-semibold text-gold">{company.tagline}</p>
        </div>

        <div className="grid gap-10 sm:grid-cols-3">
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-white">Navigation</h3>
            <ul className="mt-5 grid gap-2.5 text-sm">
              {footerLinks.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="hover:text-gold">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-white">Expertises</h3>
            <ul className="mt-5 grid gap-2.5 text-sm">
              {services.map((s) => (
                <li key={s.key}>
                  <a href="#services" className="hover:text-gold">
                    {s.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-white">Contact</h3>
            <ul className="mt-5 grid gap-3 text-sm">
              <li className="flex gap-3">
                <MapPin className="h-5 w-5 shrink-0 text-gold" aria-hidden="true" />
                {company.city}
              </li>
              <li className="flex gap-3">
                <Phone className="h-5 w-5 shrink-0 text-gold" aria-hidden="true" />
                {company.phone}
              </li>
              <li className="flex gap-3">
                <Mail className="h-5 w-5 shrink-0 text-gold" aria-hidden="true" />
                <a href={`mailto:${company.email}`} className="hover:text-gold">
                  {company.email}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 py-6 text-xs sm:px-6 lg:px-8">
          <p>
            © {year} {company.fullName}. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  )
}
