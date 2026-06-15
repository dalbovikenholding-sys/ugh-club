import Navbar from './components/Navbar'
import HeroBackground from './components/HeroBackground'
import Mist from './components/Mist'
import HeroContent from './components/HeroContent'
import BorderFrame from './components/BorderFrame'
import FilmGrain from './components/FilmGrain'

export default function App() {
  return (
    <div className="relative w-full h-screen overflow-hidden" style={{ background: '#080d18' }}>
      <HeroBackground />
      <Mist />
      <FilmGrain />
      <BorderFrame />
      <Navbar />
      <HeroContent />
    </div>
  )
}
