export function useReveal() {
  let observer: IntersectionObserver | undefined

  function reveal(element: Element) {
    element.classList.add('is-visible')
    observer?.unobserve(element)
  }

  function setup() {
    observer?.disconnect()

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const elements = document.querySelectorAll<HTMLElement>('[data-reveal]:not(.is-visible)')

    if (reduceMotion || !('IntersectionObserver' in window)) {
      document.querySelectorAll<HTMLElement>('[data-reveal]').forEach(reveal)
      return
    }

    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return
          reveal(entry.target)
        })
      },
      { threshold: 0.08, rootMargin: '0px 0px -24px 0px' },
    )

    elements.forEach((element) => {
      const rect = element.getBoundingClientRect()
      const alreadyInView = rect.top < window.innerHeight && rect.bottom > 0
      if (alreadyInView) reveal(element)
      else observer?.observe(element)
    })
  }

  onMounted(() => {
    setup()
  })

  const route = useRoute()
  watch(() => route.fullPath, async () => {
    await nextTick()
    requestAnimationFrame(setup)
  })

  onBeforeUnmount(() => observer?.disconnect())
}
