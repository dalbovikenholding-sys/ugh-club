import { useEffect, useRef } from 'react'

export default function ScrollBackground() {
  const ref = useRef<HTMLDivElement>(null)
  const isMobile = typeof window !== 'undefined' && window.matchMedia('(pointer: coarse)').matches

  useEffect(() => {
    if (isMobile) return
    const update = () => {
      const el = ref.current
      if (!el) return
      const max = document.documentElement.scrollHeight - window.innerHeight
      const pct = max > 0 ? (window.scrollY / max) * 100 : 0
      el.style.backgroundPositionY = `${pct}%`
    }
    window.addEventListener('scroll', update, { passive: true })
    update()
    return () => window.removeEventListener('scroll', update)
  }, [isMobile])

  return (
    <div
      ref={ref}
      aria-hidden
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 0,
        backgroundImage: 'url(/bg-panorama.jpg)',
        backgroundSize: 'cover',
        backgroundPositionX: 'center',
        backgroundPositionY: isMobile ? '18%' : '0%',
      }}
    />
  )
}
