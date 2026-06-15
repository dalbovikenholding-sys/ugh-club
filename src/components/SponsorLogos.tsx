import { motion } from 'framer-motion'

export default function SponsorLogos() {
  return (
    <motion.div
      className="absolute bottom-9 right-9 flex flex-col items-end gap-2.5 z-20"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.2, duration: 1.2 }}
    >
      <p className="text-white/30 text-[9px] tracking-[0.22em] uppercase font-light">
        Sponsored By
      </p>
      <div className="flex items-center gap-6">
        <span className="text-white/55 text-sm font-bold italic tracking-tight" style={{ fontFamily: 'Georgia, serif' }}>
          Forbes
        </span>

        <div className="flex items-center gap-1.5">
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="6" height="6" fill="rgba(255,255,255,0.5)" />
            <rect x="8" width="6" height="6" fill="rgba(255,255,255,0.5)" />
            <rect y="8" width="6" height="6" fill="rgba(255,255,255,0.5)" />
            <rect x="8" y="8" width="6" height="6" fill="rgba(255,255,255,0.5)" />
          </svg>
          <span className="text-white/55 text-sm font-bold tracking-wide">TNW</span>
        </div>

        <div className="flex items-center gap-1.5">
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6 0L7.5 4.5L12 6L7.5 7.5L6 12L4.5 7.5L0 6L4.5 4.5L6 0Z" fill="rgba(255,255,255,0.5)" />
          </svg>
          <span className="text-white/55 text-sm font-bold tracking-wide">BRUGS</span>
        </div>
      </div>
    </motion.div>
  )
}
