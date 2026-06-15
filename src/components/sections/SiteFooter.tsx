const links = [
  { label: 'Erbjudandet',      href: '#offer' },
  { label: 'Hur det går till', href: '#process' },
  { label: 'Priser',           href: '#pricing' },
  { label: 'Vanliga frågor',   href: '#faq' },
]

export default function SiteFooter() {
  return (
    <footer className="border-t border-white/[0.06]" style={{ background: 'rgba(8,13,24,0.82)' }}>
      <div className="max-w-5xl mx-auto px-6 py-14 grid gap-10 md:grid-cols-4">
        <div className="md:col-span-2">
          <p className="font-serif text-white/80 text-sm tracking-[0.2em] uppercase mb-3">
            DALBOVIKEN <span className="text-white/35 font-sans font-normal normal-case tracking-normal">Media</span>
          </p>
          <p className="font-sans text-white/35 text-sm leading-relaxed" style={{ maxWidth: '280px' }}>
            Lokal webbyrå i Luleå. Vi bygger hemsidor och Google-närvaro för hantverkare och lokala företag i Norrbotten.
          </p>
        </div>
        <div>
          <h4 className="font-sans font-semibold text-white/40 text-xs tracking-widest uppercase mb-4">Sajten</h4>
          <div className="flex flex-col gap-3">
            {links.map((l) => (
              <a key={l.href} href={l.href} className="font-sans text-white/35 text-sm hover:text-white/70 transition-colors" style={{ textDecoration: 'none' }}>
                {l.label}
              </a>
            ))}
          </div>
        </div>
        <div>
          <h4 className="font-sans font-semibold text-white/40 text-xs tracking-widest uppercase mb-4">Kontakt</h4>
          <div className="flex flex-col gap-3">
            <a href="tel:+46766863274" className="font-sans text-white/35 text-sm hover:text-white/70 transition-colors" style={{ textDecoration: 'none' }}>076-686 32 74</a>
            <a href="mailto:hej@dalboviken.se" className="font-sans text-white/35 text-sm hover:text-white/70 transition-colors" style={{ textDecoration: 'none' }}>hej@dalboviken.se</a>
            <span className="font-sans text-white/20 text-sm">Luleå, Norrbotten</span>
          </div>
        </div>
      </div>
      <div className="border-t border-white/[0.06]">
        <div className="max-w-5xl mx-auto px-6 py-5 flex flex-wrap justify-between gap-2">
          <span className="font-sans text-white/20 text-xs">© 2026 Dalboviken Media</span>
          <a href="mailto:hej@dalboviken.se?subject=Integritetspolicy" className="font-sans text-white/20 text-xs hover:text-white/50 transition-colors" style={{ textDecoration: 'none' }}>Integritetspolicy</a>
        </div>
      </div>
    </footer>
  )
}
