<script setup lang="ts">
import { Menu, Phone, X } from 'lucide-vue-next'

const isOpen = ref(false)
const links = [
  ['Services', '#services'],
  ['Appareils', '#appareils'],
  ['Le cabinet', '#cabinet'],
  ['Témoignages', '#temoignages'],
  ['Contact', '#rendez-vous'],
] as const

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
      <a class="brand" href="#accueil" aria-label="Empire Audition, retour à l’accueil" @click="closeMenu">
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
          <small>Audiologie clinique · Douala</small>
        </span>
      </a>

      <nav class="desktop-nav" aria-label="Navigation principale">
        <a v-for="[label, href] in links" :key="href" :href="href">{{ label }}</a>
      </nav>

      <div class="header-actions">
        <a class="header-phone" href="tel:+237695195832">
          <Phone :size="17" aria-hidden="true" />
          <span>+237 695 195 832</span>
        </a>
        <a class="button button--gold button--compact" href="#rendez-vous">Prendre rendez-vous</a>
        <button
          class="menu-toggle"
          type="button"
          :aria-expanded="isOpen"
          aria-controls="mobile-navigation"
          :aria-label="isOpen ? 'Fermer le menu' : 'Ouvrir le menu'"
          @click="isOpen = !isOpen"
        >
          <X v-if="isOpen" :size="24" aria-hidden="true" />
          <Menu v-else :size="24" aria-hidden="true" />
        </button>
      </div>
    </div>

    <Transition name="menu">
      <nav v-if="isOpen" id="mobile-navigation" class="mobile-nav" aria-label="Navigation mobile">
        <a v-for="[label, href] in links" :key="href" :href="href" @click="closeMenu">{{ label }}</a>
        <a href="tel:+237695195832" @click="closeMenu">Appeler le cabinet</a>
      </nav>
    </Transition>
  </header>
</template>
