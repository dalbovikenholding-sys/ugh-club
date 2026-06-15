const steps = [
  { day: 'Dag 1',     title: 'Formulär och mail',                    desc: 'Du fyller i ett kort formulär om ditt företag. Vi läser igenom och återkommer med frågor via mail. Ingen telefon, ingen slösad tid.' },
  { day: 'Dag 2–5',  title: 'Vi bygger, du hanterar ditt hantverk',  desc: 'Vi bygger sajten, skriver copy och sätter upp Google Business. Du jobbar som vanligt.' },
  { day: 'Dag 6',    title: 'Du granskar och godkänner',             desc: 'Du ser sajten och ger feedback. Justeringar görs direkt. Inget godkänns utan att du är nöjd.' },
  { day: 'Dag 7',    title: 'Live. Google Business aktiverat.',       desc: 'Sajten är live. Google Business är aktiverat. Du är synlig.' },
  { day: 'Dag 8–37', title: '30 dagars support',                     desc: 'Har du ändringar, frågor eller behöver hjälp? Vi finns tillgängliga i 30 dagar efter lansering.' },
]

export default function Process() {
  return (
    <section id="process" className="border-t border-white/[0.06]" style={{ background: '#0b1020' }}>
      <div className="max-w-5xl mx-auto px-6 py-24">
        <p className="font-sans text-[10px] tracking-[0.22em] uppercase text-white/30 mb-4">
          Så funkar det
        </p>
        <h2 className="font-serif italic text-white/90 mb-2" style={{ fontSize: 'clamp(28px, 3.5vw, 48px)' }}>
          Från formulär till live på 7 dagar
        </h2>
        <p className="font-sans text-white/40 text-base mb-16">Enkelt, förutsägbart och utan krångel.</p>

        <div className="flex flex-col">
          {steps.map((step, i) => (
            <div key={step.title} className="flex gap-7" style={{ paddingBottom: i < steps.length - 1 ? '36px' : '0' }}>
              <div className="flex flex-col items-center flex-shrink-0">
                <div
                  className="flex items-center justify-center font-sans font-semibold text-[#a8c4e8] text-xs"
                  style={{
                    width: '44px', height: '44px', borderRadius: '12px', flexShrink: 0,
                    background: 'rgba(168,196,232,0.10)',
                    border: '1px solid rgba(168,196,232,0.20)',
                  }}
                >
                  {i + 1}
                </div>
                {i < steps.length - 1 && (
                  <div className="w-px flex-1 mt-2 bg-white/[0.07]" />
                )}
              </div>
              <div className="pb-2">
                <p className="font-sans text-[10px] tracking-[0.15em] uppercase text-[#a8c4e8] mb-1">{step.day}</p>
                <h3 className="font-sans font-semibold text-white/85 text-base mb-2">{step.title}</h3>
                <p className="font-sans text-white/45 text-sm leading-relaxed">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
