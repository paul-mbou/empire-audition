<script setup lang="ts">
import { Clock3, MapPin, Phone, ShieldCheck } from 'lucide-vue-next'
</script>

<template>
  <footer class="site-footer">
    <div class="container footer-grid">
      <div class="footer-about">
        <a class="brand brand--footer" href="#accueil" aria-label="Empire Audition, retour à l’accueil">
          <img
            src="/images/logo-96.webp"
            srcset="/images/logo-96.webp 96w, /images/logo-192.webp 192w"
            sizes="54px"
            alt=""
            width="54"
            height="54"
            loading="lazy"
            decoding="async"
          >
          <span class="brand-copy"><strong>Empire Audition</strong><small>Audiologie clinique · Douala</small></span>
        </a>
        <p>Bilans auditifs, appareils discrets, rééducation et suivi personnalisé au cœur de Douala.</p>
        <span class="footer-trust"><ShieldCheck :size="18" aria-hidden="true" /> Centre audiologique spécialisé</span>
      </div>
      <div>
        <h2>Votre audition</h2>
        <nav aria-label="Navigation du pied de page">
          <a href="#services">Bilan auditif complet</a>
          <a href="#appareils">Appareils auditifs</a>
          <a href="#cabinet">Notre accompagnement</a>
          <a href="#temoignages">Avis des patients</a>
        </nav>
      </div>
      <div>
        <h2>Le cabinet</h2>
        <ul class="footer-contact">
          <li><MapPin aria-hidden="true" /> Kotto Briquiny, Douala</li>
          <li><Clock3 aria-hidden="true" /> Lun–Ven 8h30–18h · Sam 9h–14h</li>
          <li><Phone aria-hidden="true" /> <a href="tel:+237695195832">+237 695 195 832</a></li>
        </ul>
      </div>
      <div>
        <h2>Besoin d’aide ?</h2>
        <p>Un doute sur votre audition ou un appareil à régler ? Notre équipe vous répond.</p>
        <a class="button button--teal" href="#rendez-vous">Demander conseil</a>
      </div>
    </div>
    <div class="container footer-bottom">
      <p>© {{ new Date().getFullYear() }} Empire Audition Douala. Tous droits réservés.</p>
      <p>Informations de santé à visée informative — seul un examen clinique permet un diagnostic.</p>
    </div>
  </footer>
</template>
