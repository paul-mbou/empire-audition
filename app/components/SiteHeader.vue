<script setup lang="ts">
import { Menu, Phone, X } from 'lucide-vue-next'

const { t, locale } = useI18n()
const switchLocalePath = useSwitchLocalePath()
const localePath = useLocalePath()
const isOpen = ref(false)

const links = computed(() => [
  [t('nav.services'), '#services'],
  [t('nav.devices'), '#appareils'],
  [t('nav.clinic'), '#cabinet'],
  [t('nav.testimonials'), '#temoignages'],
  [t('nav.contact'), '#rendez-vous'],
] as const)

function closeMenu() {
  isOpen.value = false
}

function onKeydown(event: KeyboardEvent) {
  if (event.key === 'Escape') closeMenu()
}

onMounted(() => window.addEventListener('keydown', onKeydown))
onBeforeUnmount(() => window.removeEventListener('keydown', onKeydown))
</script>

<template>
  <header class="site-header">
    <div class="container header-inner">
      <NuxtLink class="brand" :to="localePath('/')" :aria-label="t('brand.homeAria')" @click="closeMenu">
        <img
          src="/images/logo-96.webp"
          srcset="/images/logo-96.webp 96w, /images/logo-192.webp 192w"
          sizes="48px"
          alt=""
          width="48"
          height="48"
        >
        <span class="brand-copy">
          <strong>Empire Audition</strong>
          <small>{{ t('brand.tagline') }}</small>
        </span>
      </NuxtLink>

      <nav class="desktop-nav" :aria-label="t('nav.main')">
        <a v-for="[label, href] in links" :key="href" :href="href">{{ label }}</a>
      </nav>

      <div class="header-actions">
        <div class="lang-switch" role="group" :aria-label="t('lang.label')">
          <NuxtLink
            class="lang-switch__btn"
            :class="{ 'is-active': locale === 'fr' }"
            :to="switchLocalePath('fr')"
            :aria-label="t('lang.switchToFr')"
            :aria-current="locale === 'fr' ? 'true' : undefined"
          >
            {{ t('lang.fr') }}
          </NuxtLink>
          <NuxtLink
            class="lang-switch__btn"
            :class="{ 'is-active': locale === 'en' }"
            :to="switchLocalePath('en')"
            :aria-label="t('lang.switchToEn')"
            :aria-current="locale === 'en' ? 'true' : undefined"
          >
            {{ t('lang.en') }}
          </NuxtLink>
        </div>
        <a class="header-phone" href="tel:+237695195832">
          <Phone :size="17" aria-hidden="true" />
          <span>+237 695 195 832</span>
        </a>
        <a class="button button--gold button--compact" href="#rendez-vous">{{ t('nav.book') }}</a>
        <button
          class="menu-toggle"
          type="button"
          :aria-expanded="isOpen"
          aria-controls="mobile-navigation"
          :aria-label="isOpen ? t('nav.closeMenu') : t('nav.openMenu')"
          @click="isOpen = !isOpen"
        >
          <X v-if="isOpen" :size="24" aria-hidden="true" />
          <Menu v-else :size="24" aria-hidden="true" />
        </button>
      </div>
    </div>

    <Transition name="menu">
      <nav v-if="isOpen" id="mobile-navigation" class="mobile-nav" :aria-label="t('nav.mobile')">
        <a v-for="[label, href] in links" :key="href" :href="href" @click="closeMenu">{{ label }}</a>
        <a href="tel:+237695195832" @click="closeMenu">{{ t('nav.callClinic') }}</a>
        <div class="lang-switch lang-switch--mobile" role="group" :aria-label="t('lang.label')">
          <NuxtLink
            class="lang-switch__btn"
            :class="{ 'is-active': locale === 'fr' }"
            :to="switchLocalePath('fr')"
            @click="closeMenu"
          >
            {{ t('lang.fr') }}
          </NuxtLink>
          <NuxtLink
            class="lang-switch__btn"
            :class="{ 'is-active': locale === 'en' }"
            :to="switchLocalePath('en')"
            @click="closeMenu"
          >
            {{ t('lang.en') }}
          </NuxtLink>
        </div>
      </nav>
    </Transition>
  </header>
</template>
