import { useEffect, useRef } from 'react'

export default function useScrollReveal() {
  const ref = useRef(null)

  useEffect(() => {
    const node = ref.current
    if (!node) return undefined

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.fade-in').forEach((el) => {
              el.classList.add('visible')
            })
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    )

    observer.observe(node)
    const fallback = window.setTimeout(() => {
      node.querySelectorAll('.fade-in').forEach((el) => el.classList.add('visible'))
    }, 1400)
    return () => {
      window.clearTimeout(fallback)
      observer.disconnect()
    }
  }, [])

  return ref
}
