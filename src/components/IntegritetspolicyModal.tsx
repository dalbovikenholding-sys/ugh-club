import { useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface Props {
  open: boolean
  onClose: () => void
}

export default function IntegritetspolicyModal({ open, onClose }: Props) {
  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose() }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [open, onClose])

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            className="fixed inset-0 z-[100]"
            style={{ background: 'rgba(4,8,20,0.80)', backdropFilter: 'blur(8px)', WebkitBackdropFilter: 'blur(8px)' }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />
          <motion.div
            className="fixed inset-0 z-[101] flex items-center justify-center px-4 py-8"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 16 }}
            transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <div
              className="relative w-full overflow-y-auto"
              style={{
                maxWidth: '560px',
                maxHeight: '80vh',
                background: 'rgba(10,16,36,0.97)',
                border: '1px solid rgba(255,255,255,0.10)',
                borderRadius: '20px',
                padding: '40px',
              }}
            >
              <button
                onClick={onClose}
                className="absolute top-5 right-5 font-sans text-white/35 hover:text-white/80 transition-colors"
                style={{ fontSize: '20px', lineHeight: 1, background: 'none', border: 'none', cursor: 'pointer' }}
                aria-label="Stäng"
              >
                ×
              </button>

              <p className="font-sans text-[10px] tracking-[0.22em] uppercase text-white/30 mb-3">Juridik</p>
              <h2 className="font-serif italic text-white/90 mb-1" style={{ fontSize: '28px' }}>Integritetspolicy</h2>
              <p className="font-sans text-white/25 text-xs mb-8">Senast uppdaterad: juni 2026</p>

              <div className="flex flex-col gap-6 font-sans text-white/55 text-sm leading-relaxed">
                <div>
                  <h3 className="font-semibold text-white/80 mb-2">Personuppgiftsansvarig</h3>
                  <p>Dalboviken Holding AB, org.nr 559582-8152, Luleå.<br />
                  Kontakt: <a href="mailto:hej@dalboviken.se" className="text-[#a8c4e8]" style={{ textDecoration: 'none' }}>hej@dalboviken.se</a></p>
                </div>

                <div>
                  <h3 className="font-semibold text-white/80 mb-2">Vilka uppgifter samlar vi in?</h3>
                  <p>Vi samlar in din e-postadress när du skickar en förfrågan via webbplatsen.</p>
                </div>

                <div>
                  <h3 className="font-semibold text-white/80 mb-2">Varför behandlar vi dina uppgifter?</h3>
                  <p>Din e-postadress används uteslutande för att besvara din förfrågan och skicka offert. Rättslig grund: berättigat intresse (GDPR art. 6.1 f).</p>
                </div>

                <div>
                  <h3 className="font-semibold text-white/80 mb-2">Hur länge sparas uppgifterna?</h3>
                  <p>Uppgifterna sparas så länge det är nödvändigt för att hantera din förfrågan, normalt högst 12 månader.</p>
                </div>

                <div>
                  <h3 className="font-semibold text-white/80 mb-2">Dina rättigheter</h3>
                  <p>Du har rätt att begära tillgång till, rättelse eller radering av dina personuppgifter. Kontakta oss på <a href="mailto:hej@dalboviken.se" className="text-[#a8c4e8]" style={{ textDecoration: 'none' }}>hej@dalboviken.se</a>.</p>
                </div>

                <div>
                  <h3 className="font-semibold text-white/80 mb-2">Klagomål</h3>
                  <p>Om du anser att vi behandlar dina uppgifter i strid med dataskyddslagstiftningen har du rätt att klaga hos Integritetsskyddsmyndigheten, <a href="https://www.imy.se" target="_blank" rel="noopener noreferrer" className="text-[#a8c4e8]" style={{ textDecoration: 'none' }}>imy.se</a>.</p>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
