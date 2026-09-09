import {
  AudioWaveform,
  BatteryCharging,
  BrainCircuit,
  Ear,
  HeartHandshake,
  RefreshCw,
  ShieldCheck,
  Sparkles,
  Wrench,
} from 'lucide-vue-next'

export const services = [
  {
    icon: AudioWaveform,
    title: 'Bilan auditif complet & dépistage',
    description: 'Otoscopie, tympanométrie, audiométrie tonale et vocale en cabine insonorisée pour mesurer précisément vos seuils auditifs.',
    tone: 'teal',
  },
  {
    icon: Ear,
    title: 'Appareillage sur mesure',
    description: 'Des prothèses numériques choisies selon votre audition, votre morphologie et votre quotidien professionnel ou familial.',
    tone: 'gold',
  },
  {
    icon: Wrench,
    title: 'Réglage, réparation & entretien',
    description: 'Nettoyage par ultrasons, remplacement des filtres et recalibrage fréquentiel dans notre laboratoire à Douala.',
    tone: 'blue',
  },
  {
    icon: RefreshCw,
    title: 'Suivi personnalisé illimité',
    description: 'Nous ajustons vos réglages dans la durée et suivons l’évolution de votre audition sans précipitation.',
    tone: 'teal',
  },
  {
    icon: Sparkles,
    title: 'Soulagement des acouphènes',
    description: 'Protocoles d’habituation, thérapie sonore et masquage acoustique personnalisés pour retrouver des nuits plus sereines.',
    tone: 'gold',
  },
  {
    icon: ShieldCheck,
    title: 'Protections auditives sur mesure',
    description: 'Bouchons anatomiques pour l’industrie, la musique, la natation et les environnements sonores exigeants.',
    tone: 'blue',
  },
] as const

export const pillars = [
  {
    icon: HeartHandshake,
    title: 'Écoute humaine & empathie',
    description: 'Chaque séance respecte votre rythme, vos habitudes et votre vécu acoustique.',
  },
  {
    icon: AudioWaveform,
    title: 'Mesures haute précision',
    description: 'Des équipements audiométriques informatisés pour des réglages au décibel près.',
  },
  {
    icon: BrainCircuit,
    title: 'Technologies internationales',
    description: 'Phonak, Oticon, Signia et Starkey avec accompagnement et garantie.',
  },
  {
    icon: ShieldCheck,
    title: 'Cabinet accessible à Douala',
    description: 'À Kotto Briquiny, avec parking et accueil adapté aux seniors.',
  },
] as const

export const testimonials = [
  {
    quote: 'Grâce à Mme Kingue, j’ai redécouvert les conversations en famille sans faire répéter mes petits-enfants. Le bilan a été rassurant et l’accompagnement d’une douceur remarquable.',
    name: 'Papa Emmanuel M.',
    role: 'Cadre retraité · Bonapriso',
    initials: 'EM',
  },
  {
    quote: 'Un professionnalisme rare à Douala. Mes appareils sont invisibles et mes migraines dues à la fatigue d’écouter ont disparu.',
    name: 'Clarisse N.',
    role: 'Directrice financière · Akwa',
    initials: 'CN',
  },
  {
    quote: 'Mes acouphènes troublaient mon sommeil depuis trois ans. Le protocole personnalisé d’Empire Audition a transformé mes nuits.',
    name: 'Théodore K.',
    role: 'Enseignant · Bonamoussadi',
    initials: 'TK',
  },
] as const
