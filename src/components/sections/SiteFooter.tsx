const sections = [
  { label: 'Erbjudandet', href: '#offer' },
  { label: 'Hur det går till', href: '#process' },
  { label: 'Priser', href: '#pricing' },
  { label: 'Vanliga frågor', href: '#faq' },
]

export default function SiteFooter() {
  return (
    <footer style={{ background: '#080d18', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '56px 24px 32px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '40px' }}>
        <div style={{ gridColumn: 'span 2' }}>
          <div style={{ fontSize: '15px', fontWeight: 600, color: 'rgba(255,255,255,0.88)', marginBottom: '12px', fontFamily: 'serif', letterSpacing: '0.05em' }}>
            DALBOVIKEN <span style={{ color: 'rgba(255,255,255,0.40)', fontWeight: 400 }}>MEDIA</span>
          </div>
          <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.40)', lineHeight: 1.65, maxWidth: '300px' }}>
            Lokal webbyrå i Luleå. Vi bygger hemsidor och Google-närvaro för hantverkare och lokala företag i Norrbotten.
          </p>
        </div>
        <div>
          <h4 style={{ fontSize: '11px', fontWeight: 600, color: 'rgba(255,255,255,0.50)', textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: '14px' }}>Sajten</h4>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {sections.map((l) => (
              <a key={l.href} href={l.href} style={{ fontSize: '13px', color: 'rgba(255,255,255,0.40)', textDecoration: 'none' }}>{l.label}</a>
            ))}
          </div>
        </div>
        <div>
          <h4 style={{ fontSize: '11px', fontWeight: 600, color: 'rgba(255,255,255,0.50)', textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: '14px' }}>Kontakt</h4>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <a href="tel:+46766863274" style={{ fontSize: '13px', color: 'rgba(255,255,255,0.40)', textDecoration: 'none' }}>076-686 32 74</a>
            <a href="mailto:hej@dalboviken.se" style={{ fontSize: '13px', color: 'rgba(255,255,255,0.40)', textDecoration: 'none' }}>hej@dalboviken.se</a>
            <span style={{ fontSize: '13px', color: 'rgba(255,255,255,0.25)' }}>Luleå, Norrbotten</span>
          </div>
        </div>
      </div>
      <div style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '20px 24px', display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '8px' }}>
          <span style={{ fontSize: '12px', color: 'rgba(255,255,255,0.25)' }}>© 2026 Dalboviken Media</span>
          <a href="#" style={{ fontSize: '12px', color: 'rgba(255,255,255,0.25)', textDecoration: 'none' }}>Integritetspolicy</a>
        </div>
      </div>
    </footer>
  )
}
