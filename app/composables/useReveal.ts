export function useReveal() {
  let observer: IntersectionObserver | undefined

  onMounted(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const elements = document.querySelectorAll<HTMLElement>('[data-reveal]')

    if (reduceMotion || !('IntersectionObserver' in window)) {
      elements.forEach(element => element.classList.add('is-visible'))
      return
    }

    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return
          entry.target.classList.add('is-visible')
          observer?.unobserve(entry.target)
        })
      },
      { threshold: 0.12, rootMargin: '0px 0px -48px' },
    )

    elements.forEach(element => observer?.observe(element))
  })

  onBeforeUnmount(() => observer?.disconnect())
}
