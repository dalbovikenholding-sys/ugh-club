const plans = [
  {
    name: 'Core',
    price: '14 900 kr',
    monthly: null,
    popular: false,
    features: [
      'Sajt som konverterar (4–6 sidor)',
      'Google Business Profile setup',
      'Lokal SEO-grund',
      'Professionell copy skriven åt dig',
      '30 dagars support efter lansering',
      'Uppstart via formulär och mail',
      'Mobiloptimerad och snabb',
    ],
  },
  {
    name: 'Pro',
    price: '22 900 kr',
    monthly: null,
    popular: true,
    features: [
      'Allt i Core',
      'Extra sidor (upp till 8)',
      'Google Ads-landningssida',
      'Djupgående lokal SEO',
      'Utökad copy och branschanpassning',
      'Prioriterad support',
      'Analys av konkurrenters sajter',
    ],
  },
  {
    name: 'Pro + Drift',
    price: '22 900 kr',
    monthly: '+ 1 490 kr/mån',
    popular: false,
    features: [
      'Allt i Pro',
      'Löpande underhåll',
      'Månadsvis innehållsuppdatering',
      'Teknisk support utan tidsgräns',
      'Prioritet vid nya funktioner',
      'Månadsrapport om prestanda',
      'Du slipper tänka på det',
    ],
  },
]

export default function Pricing() {
  return (
    <section id="pricing" style={{ background: '#0c1220', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '80px 24px' }}>
        <p style={{ fontSize: '10px', letterSpacing: '0.2em', color: 'rgba(255,255,255,0.35)', textTransform: 'uppercase', marginBottom: '16px' }}>
          Priser
        </p>
        <h2 style={{ fontSize: 'clamp(26px, 3vw, 42px)', fontWeight: 700, color: 'rgba(255,255,255,0.92)', marginBottom: '14px' }}>
          Prislogiken är enkel.
        </h2>
        <p style={{ fontSize: '16px', color: 'rgba(255,255,255,0.50)', maxWidth: '560px', lineHeight: 1.65, marginBottom: '56px' }}>
          En ny kund = 8 000–15 000 kr för ett typiskt hantverksjobb. Din sajt behöver
          generera ett enda jobb för att betala sig. De flesta av våra kunder får det inom 30 dagar.
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px', alignItems: 'start' }}>
          {plans.map((plan) => (
            <div key={plan.name} style={{
              background: plan.popular ? 'rgba(168,196,232,0.12)' : 'rgba(255,255,255,0.04)',
              border: plan.popular ? '1px solid rgba(168,196,232,0.30)' : '1px solid rgba(255,255,255,0.08)',
              borderRadius: '20px', padding: '32px', position: 'relative',
            }}>
              {plan.popular && (
                <span style={{
                  position: 'absolute', top: '-12px', right: '20px',
                  background: '#a8c4e8', color: '#080d18',
                  fontSize: '10px', fontWeight: 700, padding: '4px 12px', borderRadius: '999px',
                  letterSpacing: '0.05em',
                }}>
                  Mest populär
                </span>
              )}
              <h3 style={{ fontSize: '18px', fontWeight: 600, color: 'rgba(255,255,255,0.90)', marginBottom: '12px' }}>{plan.name}</h3>
              <div style={{ fontSize: '32px', fontWeight: 700, color: plan.popular ? '#a8c4e8' : 'rgba(255,255,255,0.88)', marginBottom: '4px' }}>
                {plan.price}
              </div>
              {plan.monthly && (
                <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.40)', marginBottom: '24px' }}>{plan.monthly}</p>
              )}
              <div style={{ marginTop: plan.monthly ? '0' : '24px', display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '28px' }}>
                {plan.features.map((f) => (
                  <div key={f} style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                    <span style={{ color: '#a8c4e8', fontSize: '12px', marginTop: '2px', flexShrink: 0 }}>✓</span>
                    <span style={{ fontSize: '13px', color: 'rgba(255,255,255,0.55)', lineHeight: 1.5 }}>{f}</span>
                  </div>
                ))}
              </div>
              <a href="mailto:hej@dalboviken.se" style={{
                display: 'block', textAlign: 'center',
                background: plan.popular ? '#a8c4e8' : 'rgba(255,255,255,0.08)',
                color: plan.popular ? '#080d18' : 'rgba(255,255,255,0.80)',
                borderRadius: '999px', padding: '12px',
                fontSize: '13px', fontWeight: 600, textDecoration: 'none',
              }}>
                Kom igång
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
