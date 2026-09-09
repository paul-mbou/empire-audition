<script setup lang="ts">
import '@fontsource-variable/inter'
import '@fontsource-variable/plus-jakarta-sans'

useReveal()

const title = 'Empire Audition | Audioprothésiste & Bilan Auditif'
const description = 'Cabinet d’audiologie à Douala : bilan auditif, appareils auditifs invisibles et rechargeables, acouphènes, réglage et suivi personnalisé avec Edith Kingue.'
const siteUrl = 'https://empireaudition.cm'

useSeoMeta({
  title,
  description,
  ogTitle: title,
  ogDescription: description,
  ogType: 'website',
  ogLocale: 'fr_CM',
  ogUrl: siteUrl,
  ogImage: `${siteUrl}/images/audiologiste-patient-1152.webp`,
  ogImageAlt: 'Consultation audiologique chez Empire Audition à Douala',
  twitterCard: 'summary_large_image',
  twitterTitle: title,
  twitterDescription: description,
  twitterImage: `${siteUrl}/images/audiologiste-patient-1152.webp`,
  robots: 'index, follow, max-image-preview:large',
})

useHead({
  link: [{ rel: 'canonical', href: siteUrl }],
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
        description,
        image: `${siteUrl}/images/audiologiste-patient-1152.webp`,
        telephone: '+237695195832',
        priceRange: '₣₣',
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'Kotto, rue des Pavés, Briquiny',
          addressLocality: 'Douala',
          addressCountry: 'CM',
        },
        areaServed: ['Douala', 'Littoral', 'Cameroun'],
        openingHoursSpecification: [
          { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'], opens: '08:30', closes: '18:00' },
          { '@type': 'OpeningHoursSpecification', dayOfWeek: 'Saturday', opens: '09:00', closes: '14:00' },
        ],
        medicalSpecialty: 'Audiology',
        url: siteUrl,
      }),
    },
  ],
})
</script>

<template>
  <div>
    <a class="skip-link" href="#contenu">Aller au contenu</a>
    <SiteHeader />
    <main id="contenu">
      <HeroSection />
      <ClinicalSections />
      <BookingSection />
    </main>
    <SiteFooter />
  </div>
</template>
