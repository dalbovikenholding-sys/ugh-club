const pillars = [
  {
    title: 'Du godkänner innan du betalar',
    desc: 'På dag 6 ser du sajten och ger feedback. Inget godkänns utan att du är nöjd. Betalning sker först efter ditt godkännande.',
  },
  {
    title: 'Fast pris, inga överraskningar',
    desc: 'Priset vi avtalar är priset du betalar. Aldrig en krona mer, oavsett hur lång tid det tar oss.',
  },
  {
    title: '30 dagars support ingår',
    desc: 'Behöver du justera något efter lansering? Vi finns tillgängliga i 30 dagar utan extra kostnad.',
  },
]

export default function Guarantee() {
  return (
    <section className="border-t border-white/[0.06]" style={{ background: 'rgba(8,13,24,0.75)' }}>
      <div className="max-w-5xl mx-auto px-6 py-24">
        <p className="font-sans text-[10px] tracking-[0.22em] uppercase text-white/40 mb-4">
          Garanti
        </p>
        <h2 className="font-serif italic text-white/95 mb-4" style={{ fontSize: 'clamp(28px, 3.5vw, 48px)', maxWidth: '560px' }}>
          Du betalar ingenting förrän du är nöjd.
        </h2>
        <p className="font-sans text-white/60 text-base leading-relaxed mb-14" style={{ maxWidth: '480px' }}>
          Vi lever på att leverera det vi lovar. Det är enkelt att garantera när man vet att man håller vad man säger.
        </p>

        <div className="grid gap-5 md:grid-cols-3">
          {pillars.map((p) => (
            <div
              key={p.title}
              className="rounded-2xl p-7"
              style={{
                background: 'rgba(168,196,232,0.06)',
                border: '1px solid rgba(168,196,232,0.18)',
              }}
            >
              <div
                className="w-8 h-8 rounded-full flex items-center justify-center mb-5 flex-shrink-0"
                style={{ background: 'rgba(168,196,232,0.15)', border: '1px solid rgba(168,196,232,0.30)' }}
              >
                <span style={{ color: '#a8c4e8', fontSize: '14px', lineHeight: 1 }}>✓</span>
              </div>
              <h3 className="font-sans font-semibold text-white/90 text-base mb-3">{p.title}</h3>
              <p className="font-sans text-white/65 text-sm leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>

        <p className="font-sans text-white/35 text-xs mt-10 pt-7 border-t border-white/[0.07]">
          Gäller alla paket. Inga undantag.
        </p>
      </div>
    </section>
  )
}
