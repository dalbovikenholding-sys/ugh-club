import { motion } from 'framer-motion'
import ContactForm from './ContactForm'

export default function HeroContent() {
  return (
    <motion.div
      className="absolute bottom-0 left-0 right-0 z-20 pb-12 px-6 sm:right-auto sm:pb-16 sm:pl-12 sm:pr-0"
      style={{ maxWidth: '600px' }}
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.1, ease: [0.25, 0.1, 0.25, 1], delay: 0.4 }}
    >
      <p className="text-white/40 font-sans mb-3" style={{ fontSize: '10px', letterSpacing: '0.22em', textTransform: 'uppercase' }}>
        Synlig på 7 dagar · Luleå / Norrbotten
      </p>

      <h1
        className="text-white font-sans font-black leading-[1.05] tracking-[-0.02em] mb-1"
        style={{ fontSize: 'clamp(24px, 2.8vw, 48px)' }}
      >
        <span className="block">Din hemsida och</span>
        <span className="block">Google-närvaro, live på 7 dagar.</span>
      </h1>

      <p
        className="font-serif italic text-white leading-tight mb-3"
        style={{ fontSize: 'clamp(24px, 2.8vw, 42px)', fontWeight: 600 }}
      >
        Dalboviken Media.
      </p>

      <p
        className="mb-6 leading-relaxed"
        style={{
          color: 'rgba(255,255,255,0.45)',
          fontSize: '11px',
          maxWidth: '320px',
          letterSpacing: '0.01em',
        }}
      >
        Vi bygger hemsidan, skriver copy och sätter upp Google Business.
        Fast pris, ingen telefon, inga möten.
      </p>

      <ContactForm />
    </motion.div>
  )
}
