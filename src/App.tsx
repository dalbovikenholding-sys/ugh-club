import { useEffect } from 'react'
import { useMotionValue } from 'framer-motion'
import Navbar from './components/Navbar'
import HeroBackground from './components/HeroBackground'
import HeroContent from './components/HeroContent'
import SponsorLogos from './components/SponsorLogos'
import BorderFrame from './components/BorderFrame'
import FilmGrain from './components/FilmGrain'

export default function App() {
  const mouseX = useMotionValue(0.5)
  const mouseY = useMotionValue(0.5)

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      mouseX.set(e.clientX / window.innerWidth)
      mouseY.set(e.clientY / window.innerHeight)
    }
    window.addEventListener('mousemove', onMove)
    return () => window.removeEventListener('mousemove', onMove)
  }, [mouseX, mouseY])

  return (
    <div className="relative w-full h-screen overflow-hidden" style={{ background: '#080d18' }}>
      <HeroBackground mouseX={mouseX} mouseY={mouseY} />
      <FilmGrain />
      <BorderFrame />
      <Navbar />
      <HeroContent />
      <SponsorLogos />
    </div>
  )
}
