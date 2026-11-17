const i18nOptions = {
  locales: [
    { code: 'fr', language: 'fr-CM', name: 'Français', file: 'fr.json' },
    { code: 'en', language: 'en-CM', name: 'English', file: 'en.json' },
  ],
  defaultLocale: 'fr',
  strategy: 'prefix_except_default' as const,
  langDir: 'locales',
  detectBrowserLanguage: {
    useCookie: true,
    cookieKey: 'i18n_redirected',
    redirectOn: 'root' as const,
    fallbackLocale: 'fr',
  },
  baseUrl: 'https://empire-audition.vercel.app',
}

export default defineNuxtConfig({
  compatibilityDate: '2026-09-09',
  devtools: { enabled: true },
  modules: [['@nuxtjs/i18n', i18nOptions]],
  css: ['~/assets/css/main.css'],
  app: {
    head: {
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
    preset: 'static',
    prerender: {
      routes: ['/', '/en'],
      crawlLinks: true,
    },
  },
  routeRules: {
    '/': { prerender: true },
    '/en': { prerender: true },
  },
  typescript: {
    strict: true,
    // Build-time vue-tsc via vite-plugin-checker can race Nuxt module type
    // generation on Vercel and report false "Cannot find name useI18n" errors.
    // Run `npm run typecheck` separately after `nuxt prepare`.
    typeCheck: false,
  },
})
