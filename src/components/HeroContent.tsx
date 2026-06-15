import { motion } from 'framer-motion'
import ContactForm from './ContactForm'

export default function HeroContent() {
  return (
    <motion.div
      className="absolute bottom-0 left-0 right-0 z-20 pb-12 px-6 sm:right-auto sm:pb-24 sm:pl-16 sm:pr-0"
      style={{ maxWidth: '720px' }}
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.1, ease: [0.25, 0.1, 0.25, 1], delay: 0.4 }}
    >
      <p className="text-white/40 font-sans mb-4" style={{ fontSize: 'clamp(9px, 0.7vw, 11px)', letterSpacing: '0.22em', textTransform: 'uppercase' }}>
        Synlig på 7 dagar · Luleå / Norrbotten
      </p>

      <h1
        className="text-white font-sans font-black leading-[1.05] tracking-[-0.02em] mb-1"
        style={{ fontSize: 'clamp(28px, 3.8vw, 60px)' }}
      >
        <span className="block">Din hemsida och</span>
        <span className="block">Google-närvaro, live på 7 dagar.</span>
      </h1>

      <p
        className="font-serif italic text-white leading-tight mb-4"
        style={{ fontSize: 'clamp(28px, 3.6vw, 56px)', fontWeight: 600 }}
      >
        Dalboviken Media.
      </p>

      <p
        className="mb-8 leading-relaxed"
        style={{
          color: 'rgba(255,255,255,0.45)',
          fontSize: 'clamp(12px, 1vw, 16px)',
          maxWidth: '380px',
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
