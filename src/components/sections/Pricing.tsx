const plans = [
  {
    name: 'Core',
    price: '14 900 kr',
    monthly: null,
    popular: false,
    features: ['Sajt som konverterar (4–6 sidor)', 'Google Business Profile setup', 'Lokal SEO-grund', 'Professionell copy skriven åt dig', '30 dagars support efter lansering', 'Uppstart via formulär och mail', 'Mobiloptimerad och snabb'],
  },
  {
    name: 'Pro',
    price: '22 900 kr',
    monthly: null,
    popular: true,
    features: ['Allt i Core', 'Extra sidor (upp till 8)', 'Google Ads-landningssida', 'Djupgående lokal SEO', 'Utökad copy och branschanpassning', 'Prioriterad support', 'Analys av konkurrenters sajter'],
  },
  {
    name: 'Pro + Drift',
    price: '22 900 kr',
    monthly: '+ 1 490 kr/mån',
    popular: false,
    features: ['Allt i Pro', 'Löpande underhåll', 'Månadsvis innehållsuppdatering', 'Teknisk support utan tidsgräns', 'Prioritet vid nya funktioner', 'Månadsrapport om prestanda', 'Du slipper tänka på det'],
  },
]

export default function Pricing() {
  return (
    <section id="pricing" className="border-t border-white/[0.06]" style={{ background: '#080d18' }}>
      <div className="max-w-5xl mx-auto px-6 py-24">
        <p className="font-sans text-[10px] tracking-[0.22em] uppercase text-white/30 mb-4">
          Priser
        </p>
        <h2 className="font-serif italic text-white/90 mb-3" style={{ fontSize: 'clamp(28px, 3.5vw, 48px)' }}>
          Prislogiken är enkel.
        </h2>
        <p className="font-sans text-white/45 text-base leading-relaxed mb-16" style={{ maxWidth: '520px' }}>
          En ny kund = 8 000–15 000 kr för ett typiskt hantverksjobb. Din sajt behöver
          generera ett enda jobb för att betala sig. De flesta av våra kunder får det inom 30 dagar.
        </p>
        <div className="grid gap-5 md:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className="rounded-2xl p-8 flex flex-col relative"
              style={{
                background: plan.popular ? 'rgba(168,196,232,0.10)' : 'rgba(255,255,255,0.04)',
                border: plan.popular ? '1px solid rgba(168,196,232,0.28)' : '1px solid rgba(255,255,255,0.08)',
              }}
            >
              {plan.popular && (
                <span
                  className="absolute -top-3 right-5 font-sans text-[10px] font-bold tracking-wider"
                  style={{ background: '#a8c4e8', color: '#080d18', padding: '4px 12px', borderRadius: '999px' }}
                >
                  Mest populär
                </span>
              )}
              <h3 className="font-sans font-semibold text-white/85 text-lg mb-3">{plan.name}</h3>
              <p className="font-serif italic mb-1" style={{ fontSize: '30px', color: plan.popular ? '#a8c4e8' : 'rgba(255,255,255,0.85)' }}>
                {plan.price}
              </p>
              {plan.monthly && (
                <p className="font-sans text-white/35 text-xs mb-6">{plan.monthly}</p>
              )}
              <div className={`flex flex-col gap-3 mb-8 ${plan.monthly ? '' : 'mt-5'}`}>
                {plan.features.map((f) => (
                  <div key={f} className="flex gap-3 items-start">
                    <span className="text-[#a8c4e8] text-xs mt-0.5 flex-shrink-0">✓</span>
                    <span className="font-sans text-white/50 text-sm leading-snug">{f}</span>
                  </div>
                ))}
              </div>
              <a
                href="mailto:hej@dalboviken.se"
                className="mt-auto block text-center rounded-full py-3 font-sans font-semibold text-sm transition-all duration-200"
                style={{
                  background: plan.popular ? '#a8c4e8' : 'rgba(255,255,255,0.08)',
                  color: plan.popular ? '#080d18' : 'rgba(255,255,255,0.75)',
                  border: plan.popular ? 'none' : '1px solid rgba(255,255,255,0.12)',
                  textDecoration: 'none',
                }}
              >
                Kom igång
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
