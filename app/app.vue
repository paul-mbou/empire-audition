<script setup lang="ts">
import '@fontsource-variable/inter'
import '@fontsource-variable/plus-jakarta-sans'
import { useI18n } from 'vue-i18n'

useReveal()

const { t, locale } = useI18n()
const siteUrl = 'https://empireaudition.cm'

const title = computed(() => t('seo.title'))
const description = computed(() => t('seo.description'))
const canonical = computed(() => locale.value === 'en' ? `${siteUrl}/en` : siteUrl)
const ogLocale = computed(() => locale.value === 'en' ? 'en_CM' : 'fr_CM')

useSeoMeta({
  title,
  description,
  ogTitle: title,
  ogDescription: description,
  ogType: 'website',
  ogLocale,
  ogUrl: canonical,
  ogImage: `${siteUrl}/images/audiologiste-patient-1152.webp`,
  ogImageAlt: () => t('seo.ogImageAlt'),
  twitterCard: 'summary_large_image',
  twitterTitle: title,
  twitterDescription: description,
  twitterImage: `${siteUrl}/images/audiologiste-patient-1152.webp`,
  robots: 'index, follow, max-image-preview:large',
})

useHead(() => ({
  htmlAttrs: { lang: locale.value === 'en' ? 'en' : 'fr' },
  link: [
    { rel: 'canonical', href: canonical.value },
    { rel: 'alternate', hreflang: 'fr', href: siteUrl },
    { rel: 'alternate', hreflang: 'en', href: `${siteUrl}/en` },
    { rel: 'alternate', hreflang: 'x-default', href: siteUrl },
  ],
  meta: [
    { name: 'geo.region', content: 'CM-LT' },
    { name: 'geo.placename', content: 'Douala' },
    { name: 'theme-color', content: '#071a2e' },
  ],
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': ['MedicalBusiness', 'LocalBusiness'],
        name: 'Empire Audition Douala',
        description: description.value,
        image: `${siteUrl}/images/audiologiste-patient-1152.webp`,
        telephone: '+237695195832',
        priceRange: '₣₣',
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'Kotto, rue des Pavés, Briquiny',
          addressLocality: 'Douala',
          addressCountry: 'CM',
        },
        areaServed: ['Douala', 'Littoral', 'Cameroon'],
        openingHoursSpecification: [
          { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'], opens: '08:30', closes: '18:00' },
          { '@type': 'OpeningHoursSpecification', dayOfWeek: 'Saturday', opens: '09:00', closes: '14:00' },
        ],
        medicalSpecialty: 'Audiology',
        url: canonical.value,
        inLanguage: locale.value === 'en' ? 'en' : 'fr',
      }),
    },
  ],
}))
</script>

<template>
  <div>
    <a class="skip-link" href="#contenu">{{ t('skipToContent') }}</a>
    <SiteHeader />
    <main id="contenu">
      <NuxtPage />
    </main>
    <SiteFooter />
  </div>
</template>
