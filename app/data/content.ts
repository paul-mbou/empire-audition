import {
  AudioWaveform,
  BrainCircuit,
  Ear,
  HeartHandshake,
  RefreshCw,
  ShieldCheck,
  Sparkles,
  Wrench,
} from 'lucide-vue-next'

export const serviceMeta = [
  { icon: AudioWaveform, tone: 'teal' },
  { icon: Ear, tone: 'gold' },
  { icon: Wrench, tone: 'blue' },
  { icon: RefreshCw, tone: 'teal' },
  { icon: Sparkles, tone: 'gold' },
  { icon: ShieldCheck, tone: 'blue' },
] as const

export const pillarMeta = [
  { icon: HeartHandshake },
  { icon: AudioWaveform },
  { icon: BrainCircuit },
  { icon: ShieldCheck },
] as const

export const testimonialMeta = [
  { initials: 'EM' },
  { initials: 'CN' },
  { initials: 'TK' },
] as const
