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
import { pillars, services, testimonials } from '~/data/content'
</script>

<template>
  <div>
    <section class="offer-wrap" aria-labelledby="offre-title">
      <div class="container">
        <div class="offer" data-reveal>
          <div>
            <p class="offer-kicker"><span>Offre découverte</span><Clock3 :size="16" aria-hidden="true" /> Places limitées</p>
            <h2 id="offre-title">Bilan auditif complet à <strong>10 000 FCFA</strong> <del>15 000 FCFA</del></h2>
            <p>Otoscopie vidéo, audiométrie tonale et vocale, diagnostic personnalisé et conseils d’adaptation avec Edith Kingue.</p>
          </div>
          <a class="button button--gold" href="#rendez-vous">Profiter de l’offre <ArrowRight :size="19" aria-hidden="true" /></a>
        </div>
      </div>
    </section>

    <section id="services" class="section">
      <div class="container">
        <header class="section-heading" data-reveal>
          <p class="eyebrow">Excellence clinique</p>
          <h2>Nos services audiologiques spécialisés</h2>
          <p>Des solutions médicales et technologiques pour préserver, restaurer et améliorer votre capital auditif.</p>
        </header>
        <div class="service-grid">
          <article v-for="(service, index) in services" :key="service.title" class="service-card" :style="{ '--delay': `${index * 60}ms` }" data-reveal>
            <span class="service-icon" :class="`service-icon--${service.tone}`"><component :is="service.icon" :size="27" aria-hidden="true" /></span>
            <h3>{{ service.title }}</h3>
            <p>{{ service.description }}</p>
            <a href="#rendez-vous" :aria-label="`Prendre rendez-vous pour ${service.title}`">Prendre rendez-vous <ArrowRight :size="17" aria-hidden="true" /></a>
          </article>
        </div>
      </div>
    </section>

    <section id="cabinet" class="section section--tinted">
      <div class="container">
        <dl class="metrics" data-reveal>
          <div><dt>+08 ans</dt><dd>d’expertise clinique</dd></div>
          <div><dt>+1 500</dt><dd>patients accompagnés</dd></div>
          <div><dt>98,6%</dt><dd>de satisfaction</dd></div>
          <div><dt>À vie</dt><dd>suivi des réglages</dd></div>
        </dl>
        <div class="science-grid">
          <div class="science-copy" data-reveal>
            <p class="eyebrow">Pourquoi nous choisir</p>
            <h2>La rigueur scientifique, avec l’empathie humaine</h2>
            <p>La baisse auditive isole progressivement. Notre vocation est de restaurer votre sérénité avec des mesures précises, une technologie discrète et une écoute sincère.</p>
            <div class="certification"><ShieldCheck :size="26" aria-hidden="true" /><span><strong>Centre audiologique spécialisé</strong><small>Protocoles ORL et accompagnement personnalisé</small></span></div>
          </div>
          <div class="pillar-grid">
            <article v-for="(pillar, index) in pillars" :key="pillar.title" :style="{ '--delay': `${index * 70}ms` }" data-reveal>
              <component :is="pillar.icon" :size="22" aria-hidden="true" />
              <h3>{{ pillar.title }}</h3>
              <p>{{ pillar.description }}</p>
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
            alt="Appareils auditifs rechargeables et discrets au cabinet Empire Audition"
            width="1536"
            height="864"
            loading="lazy"
            decoding="async"
          >
          <div class="technology-badge"><BatteryCharging :size="23" aria-hidden="true" /><span><strong>Plus de 30 h d’autonomie</strong><small>Recharge rapide par induction</small></span><Bluetooth :size="20" aria-label="Bluetooth" /></div>
        </div>
        <div class="technology-copy" data-reveal>
          <p class="eyebrow">Technologies auditives</p>
          <h2>L’excellence acoustique, presque imperceptible</h2>
          <p>Les appareils récents séparent les voix du bruit ambiant et s’adaptent automatiquement à votre environnement.</p>
          <ul class="feature-list">
            <li><Ear aria-hidden="true" /><span><strong>Intra-auriculaires invisibles</strong><small>Moulés au millimètre près pour une discrétion totale.</small></span></li>
            <li><BatteryCharging aria-hidden="true" /><span><strong>Micro-contours rechargeables</strong><small>Une journée complète d’écoute sans manipuler de piles.</small></span></li>
            <li><Sparkles aria-hidden="true" /><span><strong>Filtration intelligente</strong><small>Voix plus nettes au restaurant, en réunion ou dans la circulation.</small></span></li>
          </ul>
          <a class="button button--navy" href="#rendez-vous">Demander un essai gratuit <ArrowRight :size="19" aria-hidden="true" /></a>
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
              alt="Edith Kingue en blouse d’audioprothésiste présentant un appareil auditif dans son cabinet"
              width="1280"
              height="1280"
              loading="lazy"
              decoding="async"
            >
          </div>
          <div class="expert-copy" data-reveal>
            <p class="eyebrow">Direction clinique</p>
            <h2>Edith Kingue</h2>
            <p class="expert-role">Audioprothésiste générale & CEO d’Empire Audition</p>
            <blockquote>« Bien entendre n’est pas un luxe. C’est le lien sensoriel qui nous unit à ceux que nous aimons. »</blockquote>
            <p>Edith Kingue met son expertise et sa sensibilité au service de la santé auditive à Douala, avec une réhabilitation progressive où le confort du patient compte autant que la précision acoustique.</p>
            <ul class="credentials">
              <li><GraduationCap aria-hidden="true" /> Technicienne en audition</li>
              <li><HeartHandshake aria-hidden="true" /> Accompagnement des familles</li>
              <li><Check aria-hidden="true" /> Spécialiste de la rééducation auditive</li>
              <li><MapPin aria-hidden="true" /> Consultations à Kotto, Douala</li>
            </ul>
          </div>
        </article>
      </div>
    </section>

    <section id="temoignages" class="section">
      <div class="container">
        <header class="section-heading" data-reveal>
          <p class="eyebrow">Expériences patients</p>
          <h2>Ils ont retrouvé la joie d’écouter</h2>
          <p>Des parcours de patients accompagnés avec précision, patience et bienveillance à Douala.</p>
        </header>
        <div class="testimonial-grid">
          <figure v-for="(review, index) in testimonials" :key="review.name" :style="{ '--delay': `${index * 70}ms` }" data-reveal>
            <div class="stars" aria-label="5 étoiles"><Star v-for="star in 5" :key="star" :size="18" fill="currentColor" aria-hidden="true" /></div>
            <blockquote>« {{ review.quote }} »</blockquote>
            <figcaption><span>{{ review.initials }}</span><span><strong>{{ review.name }}</strong><small>{{ review.role }}</small></span></figcaption>
          </figure>
        </div>
      </div>
    </section>
  </div>
</template>
