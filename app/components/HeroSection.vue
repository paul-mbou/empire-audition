<script setup lang="ts">
import { AudioWaveform, CalendarDays, CheckCircle2, Ear, EyeOff, MapPin } from 'lucide-vue-next'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
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
          {{ t('hero.eyebrow') }}
        </p>
        <h1>{{ t('hero.title') }} <em>{{ t('hero.titleEm') }}</em></h1>
        <p class="hero-lead">
          {{ t('hero.lead') }}
        </p>

        <div class="hero-actions">
          <a class="button button--gold" href="#rendez-vous">
            <CalendarDays :size="20" aria-hidden="true" />
            {{ t('hero.ctaBook') }}
          </a>
          <a class="button button--glass" href="#services">
            <AudioWaveform :size="20" aria-hidden="true" />
            {{ t('hero.ctaScreening') }}
          </a>
        </div>

        <ul class="trust-list" :aria-label="t('hero.trustAria')">
          <li>
            <CheckCircle2 aria-hidden="true" />
            <span><strong>{{ t('hero.trust30') }}</strong><small>{{ t('hero.trust30Small') }}</small></span>
          </li>
          <li>
            <Ear aria-hidden="true" />
            <span><strong>{{ t('hero.trustCustom') }}</strong><small>{{ t('hero.trustCustomSmall') }}</small></span>
          </li>
          <li>
            <EyeOff aria-hidden="true" />
            <span><strong>{{ t('hero.trustDiscrete') }}</strong><small>{{ t('hero.trustDiscreteSmall') }}</small></span>
          </li>
        </ul>
      </div>

      <div class="hero-visual">
        <div class="hero-image-wrap">
          <img
            src="/images/audiologiste-patient-1152.webp"
            srcset="/images/audiologiste-patient-640.webp 640w, /images/audiologiste-patient-960.webp 960w, /images/audiologiste-patient-1152.webp 1152w"
            sizes="(max-width: 680px) calc(100vw - 32px), (max-width: 960px) 576px, 40vw"
            :alt="t('hero.imageAlt')"
            width="1152"
            height="864"
            fetchpriority="high"
            decoding="async"
          >
          <div class="clinic-badge">
            <span class="clinic-icon"><MapPin :size="20" aria-hidden="true" /></span>
            <span><strong>{{ t('hero.badgeTitle') }}</strong><small>{{ t('hero.badgePlace') }}</small></span>
            <span class="open-badge">{{ t('hero.open') }}</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
