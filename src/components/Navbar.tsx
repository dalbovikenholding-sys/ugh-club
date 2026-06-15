import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'

const LINKS = ['Om oss', 'Tjänster', 'Portfolio', 'Kontakt']

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
          className="flex items-center gap-2.5 text-white/75 hover:text-white transition-colors duration-300"
        >
          <span className="text-[10px] tracking-[0.25em] uppercase font-light">
            {open ? 'Stäng' : 'Menu'}
          </span>
          <div className="flex flex-col gap-[4px] w-4">
            <span
              className="block h-px bg-current transition-all duration-300 origin-center"
              style={{ transform: open ? 'rotate(45deg) translateY(5px)' : 'none' }}
            />
            <span
              className="block h-px bg-current transition-all duration-300"
              style={{ opacity: open ? 0 : 1 }}
            />
            <span
              className="block h-px bg-current transition-all duration-300 origin-center"
              style={{ transform: open ? 'rotate(-45deg) translateY(-5px)' : 'none' }}
            />
          </div>
        </button>
      </motion.nav>

      <AnimatePresence>
        {open && (
          <motion.div
            className="absolute inset-0 z-40 flex flex-col items-end justify-center pr-16"
            style={{
              background: 'rgba(4, 8, 20, 0.82)',
              backdropFilter: 'blur(24px)',
              WebkitBackdropFilter: 'blur(24px)',
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35, ease: 'easeInOut' }}
          >
            <nav className="flex flex-col items-end gap-8">
              {LINKS.map((link, i) => (
                <motion.a
                  key={link}
                  href="#"
                  onClick={() => setOpen(false)}
                  className="text-white/80 hover:text-white font-serif italic"
                  style={{ fontSize: 'clamp(28px, 4vw, 52px)', letterSpacing: '-0.01em' }}
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 30 }}
                  transition={{ duration: 0.3, delay: i * 0.06, ease: 'easeOut' }}
                >
                  {link}
                </motion.a>
              ))}
            </nav>

            <motion.p
              className="absolute bottom-10 left-9 font-serif text-white/25 text-xs tracking-widest uppercase"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ delay: 0.25 }}
            >
              Dalboviken Media — Luleå
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
