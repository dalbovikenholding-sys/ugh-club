const items = [
  {
    name: 'Sajt som konverterar',
    desc: '4 till 6 sidor, mobiloptimerad och snabb. Byggt för att omvandla besökare till kunder, inte för att imponera på andra webbdesigners.',
  },
  {
    name: 'Google-synlighet',
    desc: 'Google Business Profile setup och lokal SEO-grund. Kunder i ditt område hittar dig, inte konkurrenten, när de söker.',
  },
  {
    name: 'Trovärdighetspaket',
    desc: 'Professionell copy skriven åt dig. Text som bygger förtroende och svarar på kundens frågor innan de ens ringer.',
  },
  {
    name: '30 dagars trygghet',
    desc: 'Ändringar och support i 30 dagar efter lansering. Du behöver inte vara rädd för att något går fel, vi finns där.',
  },
  {
    name: 'Uppstartsformulär',
    desc: 'Du fyller i ett kort formulär om ditt företag. Vi läser igenom och återkommer med allt vi behöver. Ingen telefon, ingen slösad tid.',
  },
]

export default function Offer() {
  return (
    <section id="offer" style={{ background: '#0c1220', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '80px 24px' }}>
        <p style={{ fontSize: '10px', letterSpacing: '0.2em', color: 'rgba(255,255,255,0.35)', textTransform: 'uppercase', marginBottom: '16px' }}>
          Vad ingår
        </p>
        <h2 style={{ fontSize: 'clamp(26px, 3vw, 42px)', fontWeight: 700, color: 'rgba(255,255,255,0.92)', maxWidth: '600px', marginBottom: '52px' }}>
          Allt du behöver för att se seriös ut och ta emot kunder online.
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
          {items.map((item) => (
            <div key={item.name} style={{
              background: 'rgba(255,255,255,0.04)',
              border: '1px solid rgba(255,255,255,0.08)',
              borderRadius: '16px', padding: '28px',
            }}>
              <h3 style={{ fontSize: '15px', fontWeight: 600, color: 'rgba(255,255,255,0.88)', marginBottom: '10px' }}>{item.name}</h3>
              <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.50)', lineHeight: 1.65 }}>{item.desc}</p>
            </div>
          ))}
        </div>
        <p style={{ marginTop: '40px', paddingTop: '28px', borderTop: '1px solid rgba(255,255,255,0.08)', fontSize: '13px', color: 'rgba(255,255,255,0.35)' }}>
          <span style={{ color: 'rgba(255,255,255,0.60)', fontWeight: 500 }}>Inte inkluderat:</span> logga, fotografi, sociala medier.
        </p>
      </div>
    </section>
  )
}
