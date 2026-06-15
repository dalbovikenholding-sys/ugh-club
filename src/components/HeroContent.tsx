import { motion } from 'framer-motion'
import EmailForm from './EmailForm'

export default function HeroContent() {
  return (
    <motion.div
      className="absolute bottom-0 left-0 z-20 pb-16 pl-12"
      style={{ maxWidth: '480px' }}
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.1, ease: [0.25, 0.1, 0.25, 1], delay: 0.4 }}
    >
      <h1
        className="text-white font-sans font-black leading-[1.05] tracking-[-0.02em] mb-1"
        style={{ fontSize: 'clamp(36px, 3.8vw, 56px)' }}
      >
        Join The Club Before<br />
        Everyone Else Does.
      </h1>

      <p
        className="font-serif italic text-white leading-tight mb-3"
        style={{ fontSize: 'clamp(28px, 2.8vw, 42px)', fontWeight: 600 }}
      >
        Ugh.
      </p>

      <p
        className="mb-6 leading-relaxed"
        style={{
          color: 'rgba(255,255,255,0.45)',
          fontSize: '11px',
          maxWidth: '300px',
          letterSpacing: '0.01em',
        }}
      >
        Want To Be The Cool Kid Of Trading? Join UGH Club And Get Access To
        The Secret Sauce Before Everyone Else. Because Let's Face It, Being
        Average Is So 2025.
      </p>

      <EmailForm />
    </motion.div>
  )
}
