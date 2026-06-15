const steps = [
  { day: 'Dag 1',    title: 'Formulär och mail',                   desc: 'Du fyller i ett kort formulär om ditt företag. Vi läser igenom och återkommer med frågor via mail. Ingen telefon, ingen slösad tid.' },
  { day: 'Dag 2–5', title: 'Vi bygger, du hanterar ditt hantverk', desc: 'Vi bygger sajten, skriver copy och sätter upp Google Business. Du jobbar som vanligt.' },
  { day: 'Dag 6',   title: 'Du granskar och godkänner',            desc: 'Du ser sajten och ger feedback. Justeringar görs direkt. Inget godkänns utan att du är nöjd.' },
  { day: 'Dag 7',   title: 'Live. Google Business aktiverat.',      desc: 'Sajten är live. Google Business är aktiverat. Du är synlig.' },
  { day: 'Dag 8–37',title: '30 dagars support',                    desc: 'Har du ändringar, frågor eller behöver hjälp? Vi finns tillgängliga i 30 dagar efter lansering.' },
]

export default function Process() {
  return (
    <section id="process" style={{ background: '#080d18', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '80px 24px' }}>
        <p style={{ fontSize: '10px', letterSpacing: '0.2em', color: 'rgba(255,255,255,0.35)', textTransform: 'uppercase', marginBottom: '16px' }}>
          Så funkar det
        </p>
        <h2 style={{ fontSize: 'clamp(26px, 3vw, 42px)', fontWeight: 700, color: 'rgba(255,255,255,0.92)', marginBottom: '10px' }}>
          Från formulär till live på 7 dagar
        </h2>
        <p style={{ fontSize: '16px', color: 'rgba(255,255,255,0.45)', marginBottom: '56px' }}>Enkelt, förutsägbart och utan krångel.</p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
          {steps.map((step, i) => (
            <div key={step.title} style={{ display: 'flex', gap: '24px', paddingBottom: i < steps.length - 1 ? '36px' : '0', position: 'relative' }}>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flexShrink: 0 }}>
                <div style={{
                  width: '44px', height: '44px', borderRadius: '12px',
                  background: 'rgba(168,196,232,0.15)', border: '1px solid rgba(168,196,232,0.25)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: '#a8c4e8', fontSize: '13px', fontWeight: 600, flexShrink: 0,
                }}>
                  {i + 1}
                </div>
                {i < steps.length - 1 && (
                  <div style={{ width: '1px', flex: 1, marginTop: '8px', background: 'rgba(255,255,255,0.08)' }} />
                )}
              </div>
              <div style={{ paddingBottom: '8px' }}>
                <p style={{ fontSize: '10px', letterSpacing: '0.15em', color: '#a8c4e8', textTransform: 'uppercase', marginBottom: '4px' }}>{step.day}</p>
                <h3 style={{ fontSize: '17px', fontWeight: 600, color: 'rgba(255,255,255,0.88)', marginBottom: '8px' }}>{step.title}</h3>
                <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.50)', lineHeight: 1.65 }}>{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
