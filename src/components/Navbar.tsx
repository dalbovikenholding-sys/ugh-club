import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'

const LINKS = [
  { num: '01', label: 'Erbjudandet',     href: '#offer' },
  { num: '02', label: 'Hur det går till', href: '#process' },
  { num: '03', label: 'Priser',           href: '#pricing' },
  { num: '04', label: 'Vanliga frågor',   href: '#faq' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <motion.nav
        className="absolute top-0 left-0 right-0 z-50 flex items-center justify-between px-9 py-7"
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: 'easeOut', delay: 0.2 }}
      >
        <span className="text-white font-serif text-xs tracking-[0.3em] uppercase select-none">
          DALBOVIKEN
        </span>

        <button
          onClick={() => setOpen(v => !v)}
          className="flex items-center gap-2.5 text-white/75 hover:text-white transition-colors duration-300 relative z-50"
        >
          <span className="text-[10px] tracking-[0.25em] uppercase font-light">
            {open ? 'Stäng' : 'Menu'}
          </span>
          <div className="flex flex-col gap-[4px] w-4">
            <span className="block h-px bg-current transition-all duration-300 origin-center"
              style={{ transform: open ? 'rotate(45deg) translateY(5px)' : 'none' }} />
            <span className="block h-px bg-current transition-all duration-300"
              style={{ opacity: open ? 0 : 1 }} />
            <span className="block h-px bg-current transition-all duration-300 origin-center"
              style={{ transform: open ? 'rotate(-45deg) translateY(-5px)' : 'none' }} />
          </div>
        </button>
      </motion.nav>

      <AnimatePresence>
        {open && (
          <motion.div
            className="absolute top-0 right-0 bottom-0 z-40 flex flex-col justify-center"
            style={{ width: 'min(320px, 45vw)' }}
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
          >
            {/* glass panel */}
            <div
              className="absolute inset-0"
              style={{
                background: 'rgba(4, 9, 22, 0.72)',
                backdropFilter: 'blur(22px)',
                WebkitBackdropFilter: 'blur(22px)',
                borderLeft: '1px solid rgba(255,255,255,0.07)',
              }}
            />

            {/* links */}
            <nav className="relative flex flex-col gap-1 px-10 py-6">
              {LINKS.map(({ num, label, href }, i) => (
                <motion.a
                  key={label}
                  href={href}
                  onClick={() => setOpen(false)}
                  className="group flex items-baseline gap-4 py-4"
                  style={{ borderBottom: '1px solid rgba(255,255,255,0.06)' }}
                  initial={{ opacity: 0, x: 24 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 16 }}
                  transition={{ duration: 0.35, delay: 0.15 + i * 0.07, ease: 'easeOut' }}
                >
                  <span
                    className="text-white/25 font-sans font-light tabular-nums group-hover:text-white/50 transition-colors duration-200"
                    style={{ fontSize: '10px', letterSpacing: '0.1em' }}
                  >
                    {num}
                  </span>
                  <span
                    className="text-white/80 font-serif italic group-hover:text-white transition-colors duration-200"
                    style={{ fontSize: 'clamp(22px, 2.8vw, 34px)', letterSpacing: '-0.01em', lineHeight: 1 }}
                  >
                    {label}
                  </span>
                </motion.a>
              ))}
            </nav>

            {/* footer */}
            <motion.p
              className="relative px-10 pb-10 text-white/20 font-sans"
              style={{ fontSize: '9px', letterSpacing: '0.18em' }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ delay: 0.45 }}
            >
              DALBOVIKEN MEDIA — LULEÅ
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
