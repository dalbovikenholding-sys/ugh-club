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
    <section style={{ background: '#080d18', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '80px 24px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '60px', alignItems: 'center' }}>
          <div>
            <p style={{ fontSize: '10px', letterSpacing: '0.2em', color: 'rgba(255,255,255,0.35)', textTransform: 'uppercase', marginBottom: '16px' }}>
              Varför oss
            </p>
            <h2 style={{ fontSize: 'clamp(26px, 3vw, 42px)', fontWeight: 700, color: 'rgba(255,255,255,0.92)', marginBottom: '20px' }}>
              En webbyrå som förstår lokala företag.
            </h2>
            <p style={{ fontSize: '16px', color: 'rgba(255,255,255,0.50)', lineHeight: 1.7, marginBottom: '28px' }}>
              Vi bygger hemsidor för hantverkare och lokala företag i Norrbotten.
              Vi vet vad dina kunder söker efter och hur din sajt ska kommunicera
              för att generera jobb, inte bara visningar.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {benefits.map((b) => (
                <div key={b} style={{
                  display: 'flex', alignItems: 'center', gap: '12px',
                  background: 'rgba(255,255,255,0.04)',
                  border: '1px solid rgba(255,255,255,0.08)',
                  borderRadius: '12px', padding: '14px 18px',
                }}>
                  <span style={{ color: '#a8c4e8', fontSize: '14px' }}>✓</span>
                  <span style={{ fontSize: '14px', color: 'rgba(255,255,255,0.75)' }}>{b}</span>
                </div>
              ))}
            </div>
          </div>

          <div style={{
            background: 'rgba(255,255,255,0.05)',
            border: '1px solid rgba(255,255,255,0.10)',
            borderRadius: '24px', padding: '36px',
          }}>
            <p style={{ fontSize: '10px', letterSpacing: '0.2em', color: 'rgba(255,255,255,0.35)', textTransform: 'uppercase', marginBottom: '12px' }}>
              Vad ingår
            </p>
            <div style={{ fontSize: 'clamp(52px, 6vw, 72px)', fontWeight: 700, color: '#a8c4e8', lineHeight: 1, marginBottom: '6px' }}>
              Allt.
            </div>
            <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.40)', marginBottom: '28px' }}>
              Från idé till publicerad sajt på 7 dagar
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {included.map((item) => (
                <div key={item} style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <span style={{ color: '#a8c4e8', fontSize: '13px' }}>→</span>
                  <span style={{ fontSize: '14px', color: 'rgba(255,255,255,0.65)' }}>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
