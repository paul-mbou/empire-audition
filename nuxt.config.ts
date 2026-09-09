export default defineNuxtConfig({
  compatibilityDate: '2026-09-09',
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  app: {
    head: {
      htmlAttrs: { lang: 'fr' },
      viewport: 'width=device-width, initial-scale=1, viewport-fit=cover',
      link: [
        { rel: 'icon', type: 'image/webp', href: '/images/logo-96.webp' },
        {
          rel: 'preload',
          as: 'image',
          href: '/images/audiologiste-patient-1152.webp',
          imagesrcset: '/images/audiologiste-patient-640.webp 640w, /images/audiologiste-patient-960.webp 960w, /images/audiologiste-patient-1152.webp 1152w',
          imagesizes: '(max-width: 680px) calc(100vw - 32px), (max-width: 960px) 576px, 40vw',
          fetchpriority: 'high',
        },
      ],
    },
  },
  nitro: {
    prerender: {
      routes: ['/'],
      crawlLinks: true,
    },
  },
  routeRules: {
    '/': { prerender: true },
  },
  typescript: {
    strict: true,
    typeCheck: true,
  },
})
