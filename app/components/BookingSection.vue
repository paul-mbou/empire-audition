<script setup lang="ts">
import { Building2, CalendarCheck, CheckCircle2, Clock3, MapPin, MessageCircle, Phone } from 'lucide-vue-next'

const submitted = ref(false)
const form = reactive({
  name: '',
  phone: '',
  service: 'Bilan auditif complet – 10 000 FCFA',
  date: '',
  message: '',
})

const whatsappUrl = computed(() => {
  const lines = [
    'Bonjour Empire Audition, je souhaite prendre rendez-vous.',
    `Nom : ${form.name}`,
    `Téléphone : ${form.phone}`,
    `Prestation : ${form.service}`,
    form.date ? `Date souhaitée : ${form.date}` : '',
    form.message ? `Précision : ${form.message}` : '',
  ].filter(Boolean)
  return `https://wa.me/237695195832?text=${encodeURIComponent(lines.join('\n'))}`
})

function submitBooking() {
  submitted.value = true
  nextTick(() => document.querySelector<HTMLElement>('#confirmation')?.focus())
}
</script>

<template>
  <section id="rendez-vous" class="section booking-section">
    <div class="container booking-grid">
      <div class="booking-form-wrap" data-reveal>
        <p class="eyebrow"><CalendarCheck :size="18" aria-hidden="true" /> Réservation directe</p>
        <h2>Prendre rendez-vous au cabinet</h2>
        <p>Indiquez votre besoin. Vous pourrez transmettre votre demande directement à notre équipe sur WhatsApp.</p>

        <form class="booking-form" @submit.prevent="submitBooking">
          <div class="field-row">
            <label>Nom complet *
              <input v-model.trim="form.name" name="name" autocomplete="name" placeholder="Ex. Pierre Bella" required>
            </label>
            <label>Téléphone / WhatsApp *
              <input v-model.trim="form.phone" name="phone" type="tel" autocomplete="tel" inputmode="tel" placeholder="+237 6XX XX XX XX" required>
            </label>
          </div>
          <div class="field-row">
            <label>Prestation souhaitée
              <select v-model="form.service" name="service">
                <option>Bilan auditif complet – 10 000 FCFA</option>
                <option>Essai d’appareils auditifs – 30 jours</option>
                <option>Réglage ou entretien d’appareils</option>
                <option>Consultation acouphènes</option>
                <option>Protection auditive sur mesure</option>
              </select>
            </label>
            <label>Date souhaitée
              <input v-model="form.date" name="date" type="date">
            </label>
          </div>
          <label>Message facultatif
            <textarea v-model.trim="form.message" name="message" rows="3" placeholder="Décrivez brièvement votre gêne ou votre besoin." />
          </label>
          <button class="button button--gold" type="submit">
            <MessageCircle :size="19" aria-hidden="true" />
            Préparer ma demande
          </button>
        </form>

        <div v-if="submitted" id="confirmation" class="confirmation" role="status" tabindex="-1">
          <CheckCircle2 :size="24" aria-hidden="true" />
          <span><strong>Votre demande est prête.</strong> Vérifiez les informations puis envoyez-les à notre équipe.</span>
          <a :href="whatsappUrl" target="_blank" rel="noopener">Envoyer sur WhatsApp</a>
        </div>
      </div>

      <aside class="contact-column" aria-label="Coordonnées du cabinet">
        <div class="contact-card" data-reveal>
          <div class="contact-title"><span><Building2 :size="25" aria-hidden="true" /></span><div><h3>Empire Audition</h3><p>Centre audiologique · Douala</p></div></div>
          <address>
            <p><MapPin aria-hidden="true" /><span><strong>Adresse</strong>Kotto, rue des Pavés, Briquiny, Douala</span></p>
            <p><Phone aria-hidden="true" /><span><strong>Ligne directe</strong><a href="tel:+237695195832">+237 695 195 832</a><br><a href="tel:+237691138048">+237 691 138 048</a></span></p>
            <p><Clock3 aria-hidden="true" /><span><strong>Horaires</strong>Lun–Ven : 8h30–18h<br>Sam : 9h–14h</span></p>
          </address>
          <a class="button button--teal" href="https://wa.me/237695195832" target="_blank" rel="noopener"><MessageCircle :size="19" aria-hidden="true" /> Échanger sur WhatsApp</a>
        </div>
        <a class="map-card" href="https://maps.google.com/?q=Kotto+Briquiny+Douala+Cameroun" target="_blank" rel="noopener" data-reveal>
          <img
            src="/images/carte-kotto-512.webp"
            srcset="/images/carte-kotto-384.webp 384w, /images/carte-kotto-512.webp 512w"
            sizes="(max-width: 960px) calc(100vw - 32px), 32vw"
            alt="Plan d’accès au cabinet Empire Audition à Kotto Briquiny, Douala"
            width="512"
            height="512"
            loading="lazy"
            decoding="async"
          >
          <span><MapPin :size="19" aria-hidden="true" /> Voir l’itinéraire · Parking disponible</span>
        </a>
      </aside>
    </div>
  </section>
</template>
