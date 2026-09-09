<script setup lang="ts">
import { Building2, CalendarCheck, CheckCircle2, Clock3, MapPin, MessageCircle, Phone } from 'lucide-vue-next'

const { t, tm, locale } = useI18n()

const serviceOptions = computed(() => tm('booking.services') as string[])
const submitted = ref(false)
const form = reactive({
  name: '',
  phone: '',
  service: '',
  date: '',
  message: '',
})

watch(serviceOptions, (options) => {
  if (!options.length) return
  if (!form.service || !options.includes(form.service)) {
    form.service = options[0] ?? ''
  }
}, { immediate: true })

const whatsappUrl = computed(() => {
  const lines = [
    t('booking.whatsappIntro'),
    `${t('booking.whatsappName')} : ${form.name}`,
    `${t('booking.whatsappPhone')} : ${form.phone}`,
    `${t('booking.whatsappService')} : ${form.service}`,
    form.date ? `${t('booking.whatsappDate')} : ${form.date}` : '',
    form.message ? `${t('booking.whatsappNote')} : ${form.message}` : '',
  ].filter(Boolean)
  return `https://wa.me/237695195832?text=${encodeURIComponent(lines.join('\n'))}`
})

const hoursLines = computed(() => t('booking.hoursValue').split('\n'))

function submitBooking() {
  submitted.value = true
  nextTick(() => document.querySelector<HTMLElement>('#confirmation')?.focus())
}

watch(locale, () => {
  submitted.value = false
})
</script>

<template>
  <section id="rendez-vous" class="section booking-section">
    <div class="container booking-grid">
      <div class="booking-form-wrap" data-reveal>
        <p class="eyebrow"><CalendarCheck :size="18" aria-hidden="true" /> {{ t('booking.eyebrow') }}</p>
        <h2>{{ t('booking.title') }}</h2>
        <p>{{ t('booking.lead') }}</p>

        <form class="booking-form" @submit.prevent="submitBooking">
          <div class="field-row">
            <label>{{ t('booking.name') }}
              <input v-model.trim="form.name" name="name" autocomplete="name" :placeholder="t('booking.namePlaceholder')" required>
            </label>
            <label>{{ t('booking.phone') }}
              <input v-model.trim="form.phone" name="phone" type="tel" autocomplete="tel" inputmode="tel" :placeholder="t('booking.phonePlaceholder')" required>
            </label>
          </div>
          <div class="field-row">
            <label>{{ t('booking.service') }}
              <select v-model="form.service" name="service">
                <option v-for="option in serviceOptions" :key="option" :value="option">{{ option }}</option>
              </select>
            </label>
            <label>{{ t('booking.date') }}
              <input v-model="form.date" name="date" type="date">
            </label>
          </div>
          <label>{{ t('booking.message') }}
            <textarea v-model.trim="form.message" name="message" rows="3" :placeholder="t('booking.messagePlaceholder')" />
          </label>
          <button class="button button--gold" type="submit">
            <MessageCircle :size="19" aria-hidden="true" />
            {{ t('booking.submit') }}
          </button>
        </form>

        <div v-if="submitted" id="confirmation" class="confirmation" role="status" tabindex="-1">
          <CheckCircle2 :size="24" aria-hidden="true" />
          <span><strong>{{ t('booking.readyTitle') }}</strong> {{ t('booking.readyBody') }}</span>
          <a :href="whatsappUrl" target="_blank" rel="noopener">{{ t('booking.sendWhatsapp') }}</a>
        </div>
      </div>

      <aside class="contact-column" :aria-label="t('booking.contactAria')">
        <div class="contact-card" data-reveal>
          <div class="contact-title"><span><Building2 :size="25" aria-hidden="true" /></span><div><h3>Empire Audition</h3><p>{{ t('booking.centerLabel') }}</p></div></div>
          <address>
            <p><MapPin aria-hidden="true" /><span><strong>{{ t('booking.address') }}</strong>{{ t('booking.addressValue') }}</span></p>
            <p><Phone aria-hidden="true" /><span><strong>{{ t('booking.phoneLabel') }}</strong><a href="tel:+237695195832">+237 695 195 832</a><br><a href="tel:+237691138048">+237 691 138 048</a></span></p>
            <p><Clock3 aria-hidden="true" /><span><strong>{{ t('booking.hours') }}</strong><template v-for="(line, index) in hoursLines" :key="line">{{ line }}<br v-if="index < hoursLines.length - 1"></template></span></p>
          </address>
          <a class="button button--teal" href="https://wa.me/237695195832" target="_blank" rel="noopener"><MessageCircle :size="19" aria-hidden="true" /> {{ t('booking.chatWhatsapp') }}</a>
        </div>
        <a class="map-card" href="https://maps.google.com/?q=Kotto+Briquiny+Douala+Cameroun" target="_blank" rel="noopener" data-reveal>
          <img
            src="/images/carte-kotto-512.webp"
            srcset="/images/carte-kotto-384.webp 384w, /images/carte-kotto-512.webp 512w"
            sizes="(max-width: 960px) calc(100vw - 32px), 32vw"
            :alt="t('booking.mapAlt')"
            width="512"
            height="512"
            loading="lazy"
            decoding="async"
          >
          <span><MapPin :size="19" aria-hidden="true" /> {{ t('booking.directions') }}</span>
        </a>
      </aside>
    </div>
  </section>
</template>
