// Contenu statique du site. Les valeurs marquées « à compléter » sont des
// espaces réservés en attendant les informations officielles d'ATL BTP.

export const company = {
  name: 'ATL BTP',
  fullName: 'ATL BTP – Énergies & Télécoms',
  tagline: 'Performance et innovation sans frontières',
  city: 'Niamey – Niger',
  address: 'Niamey, Niger', // à compléter
  phone: '+227 XX XX XX XX', // à compléter
  email: 'contact@atlbtp.com',
  whatsapp: '', // numéro international sans « + » ni espaces, ex. 22790000000
  hours: 'Lun – Ven : 8h00 – 18h00 · Sam : 9h00 – 13h00',
}

export const navLinks = [
  { href: '#accueil', label: 'Accueil' },
  { href: '#a-propos', label: 'À propos' },
  { href: '#services', label: 'Services' },
  { href: '#realisations', label: 'Réalisations' },
  { href: '#innovation', label: 'Innovation' },
  { href: '#partenaires', label: 'Partenaires' },
  { href: '#contact', label: 'Contact' },
]

// Chiffres provisoires, à remplacer par les vrais.
export const stats = [
  { value: 120, prefix: '+', suffix: '', label: 'Projets réalisés' },
  { value: 80, prefix: '+', suffix: '', label: 'Ingénieurs & techniciens' },
  { value: 6, prefix: '', suffix: '', label: 'Pays couverts' },
  { value: 10, prefix: '', suffix: ' ans', label: "D'expérience" },
]

export const pillars = [
  {
    title: 'Vision',
    text: "Devenir un acteur de référence des infrastructures modernes en Afrique de l'Ouest, au service d'un développement durable et connecté.",
  },
  {
    title: 'Mission',
    text: 'Concevoir, construire et maintenir des infrastructures fiables : bâtiments, réseaux électriques et réseaux de télécommunications.',
  },
  {
    title: 'Expertise',
    text: 'Des équipes pluridisciplinaires — ingénieurs, techniciens, conducteurs de travaux — maîtrisant chaque étape, des études à la mise en service.',
  },
]

export const values = ['Innovation', 'Fiabilité', 'Excellence', 'Performance', 'Modernité', 'Robustesse']

export type ServiceKey = 'btp' | 'energie' | 'telecoms'

export const services: {
  key: ServiceKey
  title: string
  intro: string
  image: string
  items: string[]
}[] = [
  {
    key: 'btp',
    title: 'BTP',
    intro: 'Des ouvrages solides, livrés dans les délais et dans le respect des normes.',
    image: '/images/btp.jpg',
    items: ['Génie civil', 'Construction', 'Réhabilitation', 'Infrastructures publiques'],
  },
  {
    key: 'energie',
    title: 'Énergies',
    intro: 'Une énergie fiable et durable pour les sites industriels, publics et privés.',
    image: '/images/energie.jpg',
    items: ['Électricité industrielle', 'Solaire', 'Groupes électrogènes', 'Réseaux électriques'],
  },
  {
    key: 'telecoms',
    title: 'Télécoms',
    intro: 'Des réseaux performants et sécurisés pour connecter les hommes et les entreprises.',
    image: '/images/telecoms.jpg',
    items: [
      'Fibre optique',
      'Réseaux IP',
      'Télécommunications',
      'Datacenter',
      'Vidéosurveillance',
      "Contrôle d'accès",
    ],
  },
]

export const projectCategories = ['Tous', 'Énergie', 'Télécoms', 'BTP', 'Smart Infrastructure'] as const
export type ProjectCategory = Exclude<(typeof projectCategories)[number], 'Tous'>

// Réalisations d'exemple, à remplacer par les vrais projets.
export const projects: { title: string; place: string; category: ProjectCategory; image: string }[] = [
  { title: 'Centrale solaire photovoltaïque', place: 'Région de Tillabéri', category: 'Énergie', image: '/images/centrale-solaire.jpg' },
  { title: 'Déploiement de fibre optique', place: 'Niamey', category: 'Télécoms', image: '/images/reseau-ip.jpg' },
  { title: 'Construction de bâtiment administratif', place: 'Niamey', category: 'BTP', image: '/images/equipe-chantier.jpg' },
  { title: 'Salle serveurs & datacenter', place: 'Niamey', category: 'Smart Infrastructure', image: '/images/datacenter.jpg' },
  { title: 'Électrification de site industriel', place: 'Agadez', category: 'Énergie', image: '/images/industriel.jpg' },
  { title: 'Études & ingénierie de réseau', place: 'Maradi', category: 'BTP', image: '/images/etudes.jpg' },
  { title: 'Alimentation solaire de bâtiment public', place: 'Dosso', category: 'Énergie', image: '/images/solaire-site.jpg' },
  { title: 'Vidéosurveillance & contrôle d’accès', place: 'Zinder', category: 'Smart Infrastructure', image: '/images/iot.jpg' },
]

export const innovations = [
  { title: 'Solutions intelligentes', text: 'Supervision à distance des installations électriques et télécoms.' },
  { title: 'IoT', text: 'Capteurs connectés pour la maintenance prédictive et le suivi énergétique.' },
  { title: 'Smart city', text: 'Éclairage public intelligent, vidéoprotection et réseaux urbains.' },
  { title: 'Cybersécurité', text: 'Réseaux sécurisés, segmentation et protection des infrastructures critiques.' },
  { title: 'IA & automatisation', text: 'Automatisation des sites techniques et analyse des données d’exploitation.' },
]

export const partners = [
  { name: 'Huawei', logo: '/images/partenaires/huawei.svg' },
  { name: 'Hikvision', logo: '/images/partenaires/hikvision.svg' },
  { name: 'Hanwha Vision', logo: '/images/partenaires/hanwha-vision.svg' },
  { name: 'Dell Technologies', logo: '/images/partenaires/dell-technologies.svg' },
  { name: 'Grandstream', logo: '/images/partenaires/grandstream.svg' },
  { name: 'Dahua Technology', logo: '/images/partenaires/dahua.svg' },
]

export const budgets = [
  'Moins de 10 M FCFA',
  '10 à 50 M FCFA',
  '50 à 200 M FCFA',
  'Plus de 200 M FCFA',
  'À définir',
]
