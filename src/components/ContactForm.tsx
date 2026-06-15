import { useState } from 'react'
import { motion } from 'framer-motion'

export default function ContactForm() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const trimmed = email.trim()
    if (!trimmed) return
    const body = encodeURIComponent(
      `Hej,\n\nJag är intresserad av era tjänster. Ni kan nå mig på: ${trimmed}\n\nMed vänlig hälsning`
    )
    window.open(
      `mailto:hej@dalboviken.se?subject=F%C3%B6rfr%C3%A5gan%20%E2%80%93%20Dalboviken%20Media&body=${body}`,
      '_blank',
      'noopener'
    )
    setSubmitted(true)
  }

  return (
    <form onSubmit={handleSubmit} style={{ maxWidth: '360px' }}>
      <motion.div
        className="flex items-center rounded-full px-4 py-2.5 gap-3"
        style={{
          background: 'rgba(5, 8, 18, 0.55)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          border: '1px solid rgba(255, 255, 255, 0.08)',
          boxShadow: '0 0 0 1px rgba(255,255,255,0.04), inset 0 1px 0 rgba(255,255,255,0.06)',
        }}
        whileHover={{
          borderColor: 'rgba(255, 255, 255, 0.15)',
          boxShadow: '0 0 20px rgba(255,255,255,0.04), 0 0 0 1px rgba(255,255,255,0.08), inset 0 1px 0 rgba(255,255,255,0.06)',
        }}
        transition={{ duration: 0.3 }}
      >
        <svg
          className="flex-shrink-0 w-4 h-4"
          style={{ color: 'rgba(255,255,255,0.4)' }}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          />
        </svg>

        {submitted ? (
          <span className="text-white/60 text-sm flex-1">Tack. Ditt mejlprogram öppnas nu.</span>
        ) : (
          <input
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            placeholder="Din e-postadress"
            required
            className="bg-transparent flex-1 min-w-0"
            style={{ color: 'rgba(255,255,255,0.85)', fontSize: '13px' }}
          />
        )}

        {!submitted && (
          <motion.button
            type="submit"
            className="flex-shrink-0 bg-white text-black font-semibold rounded-full whitespace-nowrap"
            style={{ fontSize: '12px', padding: '8px 18px', letterSpacing: '0.01em' }}
            whileHover={{ backgroundColor: '#e8e8e8', scale: 1.02 }}
            whileTap={{ scale: 0.97 }}
            transition={{ duration: 0.15 }}
          >
            Kom igång →
          </motion.button>
        )}
      </motion.div>
    </form>
  )
}
