import Navbar from './components/Navbar'
import HeroBackground from './components/HeroBackground'
import Clouds from './components/Clouds'
import HeroContent from './components/HeroContent'
import SponsorLogos from './components/SponsorLogos'
import BorderFrame from './components/BorderFrame'
import FilmGrain from './components/FilmGrain'

export default function App() {
  return (
    <div className="relative w-full h-screen overflow-hidden" style={{ background: '#080d18' }}>
      <HeroBackground />
      <Clouds />
      <FilmGrain />
      <BorderFrame />
      <Navbar />
      <HeroContent />
      <SponsorLogos />
    </div>
  )
}
