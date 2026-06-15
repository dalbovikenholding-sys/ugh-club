import { useState } from 'react'
import IntegritetspolicyModal from '../IntegritetspolicyModal'

const links = [
  { label: 'Erbjudandet',      href: '#offer' },
  { label: 'Hur det går till', href: '#process' },
  { label: 'Priser',           href: '#pricing' },
  { label: 'Vanliga frågor',   href: '#faq' },
]

export default function SiteFooter() {
  const [policyOpen, setPolicyOpen] = useState(false)

  return (
    <>
      <footer className="border-t border-white/[0.08]" style={{ background: 'rgba(8,13,24,0.88)' }}>
        <div className="max-w-5xl mx-auto px-6 py-14 grid gap-10 md:grid-cols-4">
          <div className="md:col-span-2">
            <p className="font-serif text-white/85 text-sm tracking-[0.2em] uppercase mb-3">
              DALBOVIKEN <span className="text-white/45 font-sans font-normal normal-case tracking-normal">Media</span>
            </p>
            <p className="font-sans text-white/50 text-sm leading-relaxed" style={{ maxWidth: '280px' }}>
              Lokal webbyrå i Luleå. Vi bygger hemsidor och Google-närvaro för hantverkare och lokala företag i Norrbotten.
            </p>
          </div>
          <div>
            <h4 className="font-sans font-semibold text-white/50 text-xs tracking-widest uppercase mb-4">Sajten</h4>
            <div className="flex flex-col gap-3">
              {links.map((l) => (
                <a key={l.href} href={l.href} className="font-sans text-white/50 text-sm hover:text-white/80 transition-colors" style={{ textDecoration: 'none' }}>
                  {l.label}
                </a>
              ))}
            </div>
          </div>
          <div>
            <h4 className="font-sans font-semibold text-white/50 text-xs tracking-widest uppercase mb-4">Kontakt</h4>
            <div className="flex flex-col gap-3">
              <a href="tel:+46766863274" className="font-sans text-white/50 text-sm hover:text-white/80 transition-colors" style={{ textDecoration: 'none' }}>076-686 32 74</a>
              <a href="mailto:info@dalboviken.se" className="font-sans text-white/50 text-sm hover:text-white/80 transition-colors" style={{ textDecoration: 'none' }}>info@dalboviken.se</a>
              <span className="font-sans text-white/35 text-sm">Luleå, Norrbotten</span>
            </div>
          </div>
        </div>
        <div className="border-t border-white/[0.08]">
          <div className="max-w-5xl mx-auto px-6 py-5 flex flex-wrap justify-between gap-2">
            <span className="font-sans text-white/35 text-xs">© {new Date().getFullYear()} Dalboviken Media</span>
            <button
              onClick={() => setPolicyOpen(true)}
              className="font-sans text-white/35 text-xs hover:text-white/60 transition-colors"
              style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}
            >
              Integritetspolicy
            </button>
          </div>
        </div>
      </footer>
      <IntegritetspolicyModal open={policyOpen} onClose={() => setPolicyOpen(false)} />
    </>
  )
}
