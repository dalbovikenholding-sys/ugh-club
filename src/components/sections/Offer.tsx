const items = [
  { name: 'Sajt som konverterar',  desc: '4 till 6 sidor, mobiloptimerad och snabb. Byggt för att omvandla besökare till kunder, inte för att imponera på andra webbdesigners.' },
  { name: 'Google-synlighet',       desc: 'Google Business Profile setup och lokal SEO-grund. Kunder i ditt område hittar dig, inte konkurrenten, när de söker.' },
  { name: 'Trovärdighetspaket',     desc: 'Professionell copy skriven åt dig. Text som bygger förtroende och svarar på kundens frågor innan de ens ringer.' },
  { name: '30 dagars trygghet',     desc: 'Ändringar och support i 30 dagar efter lansering. Du behöver inte vara rädd för att något går fel, vi finns där.' },
  { name: 'Uppstartsformulär',      desc: 'Du fyller i ett kort formulär om ditt företag. Vi läser igenom och återkommer med allt vi behöver. Ingen telefon, ingen slösad tid.' },
]

export default function Offer() {
  return (
    <section id="offer" className="border-t border-white/[0.06]" style={{ background: 'rgba(8,13,24,0.80)' }}>
      <div className="max-w-5xl mx-auto px-6 py-24">
        <p className="font-sans text-[10px] tracking-[0.22em] uppercase text-white/30 mb-4">
          Vad ingår
        </p>
        <h2 className="font-serif italic text-white/90 mb-14" style={{ fontSize: 'clamp(28px, 3.5vw, 48px)', maxWidth: '560px' }}>
          Allt du behöver för att se seriös ut och ta emot kunder online.
        </h2>
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <div
              key={item.name}
              className="rounded-2xl p-7 transition-all duration-300 hover:-translate-y-1"
              style={{
                background: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(255,255,255,0.08)',
              }}
            >
              <h3 className="font-sans font-semibold text-white/85 text-base mb-3">{item.name}</h3>
              <p className="font-sans text-white/45 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
        <p className="font-sans text-white/30 text-xs mt-10 pt-7 border-t border-white/[0.07]">
          <span className="text-white/55 font-medium">Inte inkluderat:</span> logga, fotografi, sociala medier.
        </p>
      </div>
    </section>
  )
}
