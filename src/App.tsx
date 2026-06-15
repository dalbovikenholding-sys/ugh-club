import Navbar from './components/Navbar'
import HeroBackground from './components/HeroBackground'
import Mist from './components/Mist'
import HeroContent from './components/HeroContent'
import BorderFrame from './components/BorderFrame'
import FilmGrain from './components/FilmGrain'
import ScrollToTop from './components/ScrollToTop'
import Problem from './components/sections/Problem'
import Solution from './components/sections/Solution'
import Offer from './components/sections/Offer'
import Process from './components/sections/Process'
import Pricing from './components/sections/Pricing'
import FAQ from './components/sections/FAQ'
import SiteCTA from './components/sections/SiteCTA'
import SiteFooter from './components/sections/SiteFooter'

export default function App() {
  return (
    <div style={{ background: '#080d18' }}>
      {/* Cinematic hero — fullscreen */}
      <div className="relative w-full h-screen overflow-hidden">
        <HeroBackground />
        <Mist />
        <FilmGrain />
        <BorderFrame />
        <Navbar />
        <HeroContent />
      </div>

      {/* Content sections */}
      <Problem />
      <Solution />
      <Offer />
      <Process />
      <Pricing />
      <FAQ />
      <SiteCTA />
      <SiteFooter />
      <ScrollToTop />
    </div>
  )
}
