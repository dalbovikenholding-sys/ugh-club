const benefits = [
  'Hemsida färdig på 7 dagar, inte 7 veckor',
  'Fast pris utan dolda kostnader',
  'Lokalt i Luleå, vi känner marknaden',
]

const included = [
  'Professionell hemsida med skriven copy',
  'SEO-optimerad från dag ett',
  'Google Business konfigurerad',
  'Publicerad inom 7 dagar efter beställning',
]

export default function Solution() {
  return (
    <section className="border-t border-white/[0.06]" style={{ background: 'rgba(8,13,24,0.60)' }}>
      <div className="max-w-5xl mx-auto px-6 py-24">
        <div className="grid gap-16 lg:grid-cols-2 items-center">
          <div>
            <p className="font-sans text-[10px] tracking-[0.22em] uppercase text-white/30 mb-4">
              Varför oss
            </p>
            <h2 className="font-serif italic text-white/90 mb-5" style={{ fontSize: 'clamp(28px, 3.5vw, 48px)' }}>
              En webbyrå som förstår lokala företag.
            </h2>
            <p className="font-sans text-white/50 text-base leading-relaxed mb-8">
              Vi bygger hemsidor för hantverkare och lokala företag i Norrbotten.
              Vi vet vad dina kunder söker efter och hur din sajt ska kommunicera
              för att generera jobb, inte bara visningar.
            </p>
            <div className="flex flex-col gap-3">
              {benefits.map((b) => (
                <div
                  key={b}
                  className="flex items-center gap-3 rounded-xl px-5 py-4"
                  style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}
                >
                  <span className="text-[#a8c4e8] text-sm flex-shrink-0">✓</span>
                  <span className="font-sans text-white/70 text-sm">{b}</span>
                </div>
              ))}
            </div>
          </div>

          <div
            className="rounded-3xl p-9"
            style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.10)' }}
          >
            <p className="font-sans text-[10px] tracking-[0.22em] uppercase text-white/30 mb-3">
              Vad ingår
            </p>
            <p className="font-serif italic text-[#a8c4e8] leading-none mb-2" style={{ fontSize: 'clamp(52px, 6vw, 72px)' }}>
              Allt.
            </p>
            <p className="font-sans text-white/35 text-sm mb-8">
              Från idé till publicerad sajt på 7 dagar
            </p>
            <div className="flex flex-col gap-4">
              {included.map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <span className="text-[#a8c4e8] text-sm flex-shrink-0">→</span>
                  <span className="font-sans text-white/60 text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
