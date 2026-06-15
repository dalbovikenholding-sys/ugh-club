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
    <section style={{ background: '#0c1220', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '80px 24px' }}>
        <p style={{ fontSize: '10px', letterSpacing: '0.2em', color: 'rgba(255,255,255,0.35)', textTransform: 'uppercase', marginBottom: '16px' }}>
          Smärtpunkter
        </p>
        <h2 style={{ fontSize: 'clamp(26px, 3vw, 42px)', fontWeight: 700, color: 'rgba(255,255,255,0.92)', marginBottom: '10px' }}>
          Känner du igen dig?
        </h2>
        <p style={{ fontSize: '17px', color: 'rgba(255,255,255,0.50)', marginBottom: '52px' }}>
          Du är bra på ditt jobb. Det räcker inte längre.
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
          {problems.map((p) => (
            <div key={p.title} style={{
              background: 'rgba(255,255,255,0.04)',
              border: '1px solid rgba(255,255,255,0.08)',
              borderRadius: '16px',
              padding: '28px',
            }}>
              <h3 style={{ fontSize: '16px', fontWeight: 600, color: 'rgba(255,255,255,0.88)', marginBottom: '10px' }}>{p.title}</h3>
              <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.50)', lineHeight: 1.65 }}>{p.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
