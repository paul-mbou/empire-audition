<script setup lang="ts">
import { AudioWaveform, CalendarDays, CheckCircle2, Ear, EyeOff, MapPin } from 'lucide-vue-next'
</script>

<template>
  <section id="accueil" class="hero">
    <div class="hero-waves" aria-hidden="true">
      <svg viewBox="0 0 1440 800" preserveAspectRatio="none">
        <path d="M-100 400C200 320 400 480 720 380s480 70 880-20" />
        <path d="M-50 450c300-80 500 80 800-20s500 60 800-20" />
        <circle cx="1100" cy="385" r="170" />
        <circle cx="1100" cy="385" r="275" />
        <circle cx="1100" cy="385" r="380" />
      </svg>
    </div>

    <div class="container hero-grid">
      <div class="hero-copy">
        <p class="eyebrow eyebrow--light hero-eyebrow">
          <span class="status-dot" />
          Cabinet de référence en audiologie à Douala
        </p>
        <h1>Réentendez la vie, <em>pleinement.</em></h1>
        <p class="hero-lead">
          Bilans auditifs complets, accompagnement médical sur mesure et appareils discrets pour retrouver le plaisir d’écouter vos proches avec clarté.
        </p>

        <div class="hero-actions">
          <a class="button button--gold" href="#rendez-vous">
            <CalendarDays :size="20" aria-hidden="true" />
            Prendre rendez-vous
          </a>
          <a class="button button--glass" href="#services">
            <AudioWaveform :size="20" aria-hidden="true" />
            Faire un bilan auditif
          </a>
        </div>

        <ul class="trust-list" aria-label="Nos engagements">
          <li>
            <CheckCircle2 aria-hidden="true" />
            <span><strong>30 jours</strong><small>Essai sans engagement</small></span>
          </li>
          <li>
            <Ear aria-hidden="true" />
            <span><strong>Sur mesure</strong><small>Prise en charge clinique</small></span>
          </li>
          <li>
            <EyeOff aria-hidden="true" />
            <span><strong>Très discret</strong><small>Technologie invisible</small></span>
          </li>
        </ul>
      </div>

      <div class="hero-visual">
        <div class="hero-image-wrap">
          <img
            src="/images/audiologiste-patient-1152.webp"
            srcset="/images/audiologiste-patient-640.webp 640w, /images/audiologiste-patient-960.webp 960w, /images/audiologiste-patient-1152.webp 1152w"
            sizes="(max-width: 680px) calc(100vw - 32px), (max-width: 960px) 576px, 40vw"
            alt="Audiologiste examinant l’oreille d’un patient équipé d’un casque d’audiométrie à Douala"
            width="1152"
            height="864"
            fetchpriority="high"
            decoding="async"
          >
          <div class="clinic-badge">
            <span class="clinic-icon"><MapPin :size="20" aria-hidden="true" /></span>
            <span><strong>Consultation à Douala</strong><small>Kotto Briquiny</small></span>
            <span class="open-badge">Ouvert</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
