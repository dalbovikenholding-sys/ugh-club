export default function SiteCTA() {
  return (
    <section style={{ background: '#0c1220', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '80px 24px' }}>
        <div style={{
          background: 'rgba(168,196,232,0.08)',
          border: '1px solid rgba(168,196,232,0.18)',
          borderRadius: '24px', padding: '64px 48px',
          position: 'relative', overflow: 'hidden',
        }}>
          <div style={{
            position: 'absolute', inset: 0, pointerEvents: 'none',
            background: 'radial-gradient(800px 400px at 80% -10%, rgba(168,196,232,0.08), transparent 60%)',
          }} />
          <div style={{ position: 'relative', maxWidth: '560px' }}>
            <h2 style={{ fontSize: 'clamp(26px, 3vw, 46px)', fontWeight: 700, color: 'rgba(255,255,255,0.92)', marginBottom: '16px', lineHeight: 1.2 }}>
              Redo att få en hemsida som faktiskt jobbar för dig?
            </h2>
            <p style={{ fontSize: '16px', color: 'rgba(255,255,255,0.55)', marginBottom: '32px', lineHeight: 1.65 }}>
              Fyll i formuläret så hör vi av oss inom 24 timmar med en offert. Inga förpliktelser.
            </p>
            <a
              href="mailto:hej@dalboviken.se"
              style={{
                display: 'inline-flex', alignItems: 'center', gap: '8px',
                background: '#a8c4e8', color: '#080d18',
                borderRadius: '999px', padding: '14px 28px',
                fontSize: '14px', fontWeight: 700, textDecoration: 'none',
              }}
            >
              Kom igång →
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
