<script setup lang="ts">
import {
  ArrowRight,
  BatteryCharging,
  Bluetooth,
  Check,
  Clock3,
  Ear,
  GraduationCap,
  HeartHandshake,
  MapPin,
  ShieldCheck,
  Sparkles,
  Star,
} from 'lucide-vue-next'
import { pillarMeta, serviceMeta, testimonialMeta } from '~/data/content'

const { t, tm, rt } = useI18n()

type TextItem = { title: unknown, description: unknown }
type ReviewItem = { quote: unknown, name: unknown, role: unknown }

function resolveTextItems(key: string) {
  return (tm(key) as TextItem[]).map(item => ({
    title: rt(item.title as never),
    description: rt(item.description as never),
  }))
}

function resolveReviewItems(key: string) {
  return (tm(key) as ReviewItem[]).map(item => ({
    quote: rt(item.quote as never),
    name: rt(item.name as never),
    role: rt(item.role as never),
  }))
}

const serviceItems = computed(() => resolveTextItems('services.items'))
const pillarItems = computed(() => resolveTextItems('science.pillars'))
const reviewItems = computed(() => resolveReviewItems('testimonials.items'))
</script>

<template>
  <div>
    <section class="offer-wrap" aria-labelledby="offre-title">
      <div class="container">
        <div class="offer" data-reveal>
          <div>
            <p class="offer-kicker"><span>{{ t('offer.kicker') }}</span><Clock3 :size="16" aria-hidden="true" /> {{ t('offer.limited') }}</p>
            <h2 id="offre-title">{{ t('offer.titleBefore') }} <strong>10 000 FCFA</strong> <del>15 000 FCFA</del></h2>
            <p>{{ t('offer.body') }}</p>
          </div>
          <a class="button button--gold" href="#rendez-vous">{{ t('offer.cta') }} <ArrowRight :size="19" aria-hidden="true" /></a>
        </div>
      </div>
    </section>

    <section id="services" class="section">
      <div class="container">
        <header class="section-heading" data-reveal>
          <p class="eyebrow">{{ t('services.eyebrow') }}</p>
          <h2>{{ t('services.title') }}</h2>
          <p>{{ t('services.lead') }}</p>
        </header>
        <div class="service-grid">
          <article
            v-for="(meta, index) in serviceMeta"
            :key="serviceItems[index]?.title ?? index"
            class="service-card"
            :style="{ '--delay': `${index * 60}ms` }"
            data-reveal
          >
            <span class="service-icon" :class="`service-icon--${meta.tone}`"><component :is="meta.icon" :size="27" aria-hidden="true" /></span>
            <h3>{{ serviceItems[index]?.title }}</h3>
            <p>{{ serviceItems[index]?.description }}</p>
            <a href="#rendez-vous" :aria-label="t('services.bookFor', { title: serviceItems[index]?.title ?? '' })">{{ t('services.book') }} <ArrowRight :size="17" aria-hidden="true" /></a>
          </article>
        </div>
      </div>
    </section>

    <section id="cabinet" class="section section--tinted">
      <div class="container">
        <dl class="metrics" data-reveal>
          <div><dt>{{ t('metrics.yearsValue') }}</dt><dd>{{ t('metrics.years') }}</dd></div>
          <div><dt>{{ t('metrics.patientsValue') }}</dt><dd>{{ t('metrics.patients') }}</dd></div>
          <div><dt>{{ t('metrics.satisfactionValue') }}</dt><dd>{{ t('metrics.satisfaction') }}</dd></div>
          <div><dt>{{ t('metrics.lifetimeValue') }}</dt><dd>{{ t('metrics.lifetime') }}</dd></div>
        </dl>
        <div class="science-grid">
          <div class="science-copy" data-reveal>
            <p class="eyebrow">{{ t('science.eyebrow') }}</p>
            <h2>{{ t('science.title') }}</h2>
            <p>{{ t('science.body') }}</p>
            <div class="certification"><ShieldCheck :size="26" aria-hidden="true" /><span><strong>{{ t('science.certTitle') }}</strong><small>{{ t('science.certSmall') }}</small></span></div>
          </div>
          <div class="pillar-grid">
            <article
              v-for="(meta, index) in pillarMeta"
              :key="pillarItems[index]?.title ?? index"
              :style="{ '--delay': `${index * 70}ms` }"
              data-reveal
            >
              <component :is="meta.icon" :size="22" aria-hidden="true" />
              <h3>{{ pillarItems[index]?.title }}</h3>
              <p>{{ pillarItems[index]?.description }}</p>
            </article>
          </div>
        </div>
      </div>
    </section>

    <section id="appareils" class="section">
      <div class="container technology-grid">
        <div class="technology-visual" data-reveal>
          <img
            src="/images/appareils-auditifs-1536.webp"
            srcset="/images/appareils-auditifs-384.webp 384w, /images/appareils-auditifs-512.webp 512w, /images/appareils-auditifs-1536.webp 1536w"
            sizes="(max-width: 960px) calc(100vw - 48px), 50vw"
            :alt="t('tech.imageAlt')"
            width="1536"
            height="864"
            loading="lazy"
            decoding="async"
          >
          <div class="technology-badge"><BatteryCharging :size="23" aria-hidden="true" /><span><strong>{{ t('tech.badgeTitle') }}</strong><small>{{ t('tech.badgeSmall') }}</small></span><Bluetooth :size="20" aria-label="Bluetooth" /></div>
        </div>
        <div class="technology-copy" data-reveal>
          <p class="eyebrow">{{ t('tech.eyebrow') }}</p>
          <h2>{{ t('tech.title') }}</h2>
          <p>{{ t('tech.body') }}</p>
          <ul class="feature-list">
            <li><Ear aria-hidden="true" /><span><strong>{{ t('tech.feature1') }}</strong><small>{{ t('tech.feature1Small') }}</small></span></li>
            <li><BatteryCharging aria-hidden="true" /><span><strong>{{ t('tech.feature2') }}</strong><small>{{ t('tech.feature2Small') }}</small></span></li>
            <li><Sparkles aria-hidden="true" /><span><strong>{{ t('tech.feature3') }}</strong><small>{{ t('tech.feature3Small') }}</small></span></li>
          </ul>
          <a class="button button--navy" href="#rendez-vous">{{ t('tech.cta') }} <ArrowRight :size="19" aria-hidden="true" /></a>
        </div>
      </div>
    </section>

    <section class="section section--tinted">
      <div class="container">
        <article class="expert-card">
          <div class="expert-portrait" data-reveal>
            <img
              src="/images/edith-clinique-640.webp"
              srcset="/images/edith-clinique-640.webp 640w, /images/edith-clinique-1280.webp 1280w"
              sizes="(max-width: 960px) calc(100vw - 52px), 38vw"
              :alt="t('expert.imageAlt')"
              width="1280"
              height="1280"
              loading="lazy"
              decoding="async"
            >
          </div>
          <div class="expert-copy" data-reveal>
            <p class="eyebrow">{{ t('expert.eyebrow') }}</p>
            <h2>Edith Kingue</h2>
            <p class="expert-role">{{ t('expert.role') }}</p>
            <blockquote>« {{ t('expert.quote') }} »</blockquote>
            <p>{{ t('expert.body') }}</p>
            <ul class="credentials">
              <li><GraduationCap aria-hidden="true" /> {{ t('expert.cred1') }}</li>
              <li><HeartHandshake aria-hidden="true" /> {{ t('expert.cred2') }}</li>
              <li><Check aria-hidden="true" /> {{ t('expert.cred3') }}</li>
              <li><MapPin aria-hidden="true" /> {{ t('expert.cred4') }}</li>
            </ul>
          </div>
        </article>
      </div>
    </section>

    <section id="temoignages" class="section">
      <div class="container">
        <header class="section-heading" data-reveal>
          <p class="eyebrow">{{ t('testimonials.eyebrow') }}</p>
          <h2>{{ t('testimonials.title') }}</h2>
          <p>{{ t('testimonials.lead') }}</p>
        </header>
        <div class="testimonial-grid">
          <figure
            v-for="(meta, index) in testimonialMeta"
            :key="reviewItems[index]?.name ?? index"
            :style="{ '--delay': `${index * 70}ms` }"
            data-reveal
          >
            <div class="stars" :aria-label="t('testimonials.starsAria')"><Star v-for="star in 5" :key="star" :size="18" fill="currentColor" aria-hidden="true" /></div>
            <blockquote>« {{ reviewItems[index]?.quote }} »</blockquote>
            <figcaption>
              <span>{{ meta.initials }}</span>
              <span><strong>{{ reviewItems[index]?.name }}</strong><small>{{ reviewItems[index]?.role }}</small></span>
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  </div>
</template>
