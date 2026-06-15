import { motion } from 'framer-motion'
import { useState } from 'react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <motion.nav
      className="absolute top-0 left-0 right-0 z-50 flex items-center justify-between px-9 py-7"
      initial={{ opacity: 0, y: -8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: 'easeOut', delay: 0.2 }}
    >
      <span className="text-white font-serif text-xs tracking-[0.3em] uppercase select-none">
        UGH
      </span>

      <button
        onClick={() => setOpen(v => !v)}
        className="flex items-center gap-2.5 text-white/75 hover:text-white transition-opacity duration-300 group"
      >
        <span className="text-[10px] tracking-[0.25em] uppercase font-light">Menu</span>
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
  )
}
