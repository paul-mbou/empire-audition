<script setup lang="ts">
import { Clock3, MapPin, Phone, ShieldCheck } from 'lucide-vue-next'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
const localePath = useLocalePath()
const year = new Date().getFullYear()
</script>

<template>
  <footer class="site-footer">
    <div class="container footer-grid">
      <div class="footer-about">
        <NuxtLink class="brand brand--footer" :to="localePath('/')" :aria-label="t('brand.homeAria')">
          <img
            src="/images/logo-dark-96.webp"
            srcset="/images/logo-dark-96.webp 96w, /images/logo-dark-192.webp 192w"
            sizes="54px"
            alt=""
            width="54"
            height="54"
            loading="lazy"
            decoding="async"
          >
          <span class="brand-copy"><strong>Empire Audition</strong><small>{{ t('brand.tagline') }}</small></span>
        </NuxtLink>
        <p>{{ t('footer.blurb') }}</p>
        <span class="footer-trust"><ShieldCheck :size="18" aria-hidden="true" /> {{ t('footer.trust') }}</span>
      </div>
      <div>
        <h2>{{ t('footer.hearing') }}</h2>
        <nav :aria-label="t('nav.footer')">
          <a href="#services">{{ t('footer.linkScreening') }}</a>
          <a href="#appareils">{{ t('footer.linkDevices') }}</a>
          <a href="#cabinet">{{ t('footer.linkCare') }}</a>
          <a href="#temoignages">{{ t('footer.linkReviews') }}</a>
        </nav>
      </div>
      <div>
        <h2>{{ t('footer.clinic') }}</h2>
        <ul class="footer-contact">
          <li><MapPin aria-hidden="true" /> Kotto Briquiny, Douala</li>
          <li><Clock3 aria-hidden="true" /> {{ t('footer.hoursShort') }}</li>
          <li><Phone aria-hidden="true" /> <a href="tel:+237695195832">+237 695 195 832</a></li>
        </ul>
      </div>
      <div>
        <h2>{{ t('footer.help') }}</h2>
        <p>{{ t('footer.helpBody') }}</p>
        <a class="button button--teal" href="#rendez-vous">{{ t('footer.ask') }}</a>
      </div>
    </div>
    <div class="container footer-bottom">
      <p>{{ t('footer.rights', { year }) }}</p>
      <p>{{ t('footer.disclaimer') }}</p>
    </div>
  </footer>
</template>
