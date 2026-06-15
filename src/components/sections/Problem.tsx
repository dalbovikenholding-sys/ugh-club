const problems = [
  {
    title: 'Osynlig online',
    text: 'Kunder googlar och hittar ingenting. Eller värre: en halvfärdig sajt som signalerar att du inte tar din verksamhet på allvar.',
  },
  {
    title: 'Förlorar på förtroende',
    text: 'Konkurrenten ser mer seriös ut. Kunden väljer honom. Du var bättre, men det spelar ingen roll om kunden aldrig ringer dig.',
  },
  {
    title: 'Inga system',
    text: 'Du är beroende av mun till mun. Det funkar, tills det inte funkar. Inte skalbart och ger dig ingen kontroll.',
  },
]

export default function Problem() {
  return (
    <section className="border-t border-white/[0.06]" style={{ background: 'rgba(8,13,24,0.70)' }}>
      <div className="max-w-5xl mx-auto px-6 py-24">
        <p className="font-sans text-[10px] tracking-[0.22em] uppercase text-white/30 mb-4">
          Smärtpunkter
        </p>
        <h2 className="font-serif italic text-white/90 mb-3" style={{ fontSize: 'clamp(28px, 3.5vw, 48px)' }}>
          Känner du igen dig?
        </h2>
        <p className="font-sans text-white/45 text-base mb-14">
          Du är bra på ditt jobb. Det räcker inte längre.
        </p>
        <div className="grid gap-5 md:grid-cols-3">
          {problems.map((p) => (
            <div
              key={p.title}
              className="rounded-2xl p-7"
              style={{
                background: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(255,255,255,0.08)',
                backdropFilter: 'blur(8px)',
              }}
            >
              <h3 className="font-sans font-semibold text-white/85 text-base mb-3">{p.title}</h3>
              <p className="font-sans text-white/45 text-sm leading-relaxed">{p.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
