import { Clock, Mail, MapPin, Phone, Send } from 'lucide-react'
import { useState, type FormEvent } from 'react'
import { budgets, company } from '../data/site'
import SectionTitle from './SectionTitle'

const inputClass =
  'w-full rounded-lg border border-gray-200 bg-white px-4 py-3 text-sm outline-none transition placeholder:text-gray-400 focus:border-atl-light focus:ring-2 focus:ring-atl-light/20'

const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(company.address)}`

export default function Contact() {
  const [sent, setSent] = useState(false)

  // Pas de back-end pour l'instant : on prépare un e-mail dans la messagerie du visiteur.
  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const data = new FormData(e.currentTarget)
    const get = (key: string) => String(data.get(key) ?? '').trim()

    const subject = `Demande de devis – ${get('societe') || get('nom')}`
    const body = [
      `Nom : ${get('nom')}`,
      `Société : ${get('societe') || '—'}`,
      `Téléphone : ${get('telephone')}`,
      `E-mail : ${get('email')}`,
      `Budget estimatif : ${get('budget') || '—'}`,
      '',
      'Projet :',
      get('projet'),
    ].join('\n')

    window.location.href = `mailto:${company.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    setSent(true)
  }

  const details = [
    { icon: MapPin, label: 'Adresse', value: company.address, href: mapsUrl },
    { icon: Phone, label: 'Téléphone', value: company.phone },
    { icon: Mail, label: 'E-mail', value: company.email, href: `mailto:${company.email}` },
    { icon: Clock, label: 'Horaires', value: company.hours },
  ]

  return (
    <section id="contact" className="bg-gray-50 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <SectionTitle
              eyebrow="Contact"
              title="Parlons de votre projet"
              intro="Décrivez-nous votre besoin : nos équipes reviennent vers vous rapidement avec une proposition adaptée."
            />

            <ul className="reveal mt-10 grid gap-5">
              {details.map(({ icon: Icon, label, value, href }) => (
                <li key={label} className="flex gap-4">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-atl text-gold">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-graphite/60">
                      {label}
                    </p>
                    {href ? (
                      <a
                        href={href}
                        className="font-medium text-atl hover:text-atl-light"
                        {...(href.startsWith('http') ? { target: '_blank', rel: 'noreferrer' } : {})}
                      >
                        {value}
                      </a>
                    ) : (
                      <p className="font-medium">{value}</p>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <form
            onSubmit={handleSubmit}
            className="reveal rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-100 sm:p-10 lg:col-span-3"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="grid gap-2 text-sm font-medium">
                Nom complet *
                <input name="nom" required autoComplete="name" className={inputClass} placeholder="Votre nom" />
              </label>
              <label className="grid gap-2 text-sm font-medium">
                Société
                <input
                  name="societe"
                  autoComplete="organization"
                  className={inputClass}
                  placeholder="Nom de l'entreprise"
                />
              </label>
              <label className="grid gap-2 text-sm font-medium">
                Téléphone *
                <input
                  name="telephone"
                  type="tel"
                  required
                  autoComplete="tel"
                  pattern="[+0-9 ()\-]{8,20}"
                  title="Numéro de téléphone (chiffres, espaces, +)"
                  className={inputClass}
                  placeholder="+227 ..."
                />
              </label>
              <label className="grid gap-2 text-sm font-medium">
                E-mail *
                <input
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  className={inputClass}
                  placeholder="vous@exemple.com"
                />
              </label>
              <label className="grid gap-2 text-sm font-medium sm:col-span-2">
                Budget estimatif
                <select name="budget" className={inputClass} defaultValue="">
                  <option value="" disabled>
                    Sélectionnez une fourchette
                  </option>
                  {budgets.map((b) => (
                    <option key={b}>{b}</option>
                  ))}
                </select>
              </label>
              <label className="grid gap-2 text-sm font-medium sm:col-span-2">
                Votre projet *
                <textarea
                  name="projet"
                  required
                  minLength={10}
                  rows={5}
                  className={inputClass}
                  placeholder="Type de travaux, localisation, délais..."
                />
              </label>
            </div>

            <button
              type="submit"
              className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full bg-atl px-8 py-4 font-semibold text-white transition hover:bg-atl-light sm:w-auto"
            >
              <Send className="h-5 w-5" aria-hidden="true" />
              Envoyer ma demande
            </button>

            <p className="mt-4 text-xs text-graphite/60" role="status">
              {sent
                ? `Votre messagerie s'est ouverte avec la demande pré-remplie. Si rien ne s'est passé, écrivez-nous à ${company.email}.`
                : 'En envoyant ce formulaire, votre messagerie s’ouvrira avec votre demande pré-remplie.'}
            </p>
          </form>
        </div>
      </div>
    </section>
  )
}
