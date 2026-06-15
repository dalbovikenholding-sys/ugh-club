import { useState } from 'react'

const groups = [
  {
    label: 'Pris och leverans',
    faqs: [
      { q: 'Vad kostar en hemsida hos Dalboviken Media?', a: 'Vi har tre paket: Core (14 900 kr), Pro (22 900 kr) och Pro+Drift (22 900 kr + 1 490 kr/mån). Alla priser är fasta utan dolda tilläggsavgifter. Du betalar efter godkänd leverans.' },
      { q: 'Hur kan ni leverera en hemsida på 7 dagar?', a: 'Vi arbetar med ett beprövat system och AI-verktyg för copy och design. Du fyller i ett kort formulär, vi tar det därifrån. Inga möten, inga långa revideringsrundor.' },
      { q: 'Betalar jag om jag inte är nöjd?', a: 'Nej. Du godkänner sajten innan betalning sker. Levererar vi inte det vi lovat betalar du ingenting.' },
    ],
  },
  {
    label: 'Om tjänsten',
    faqs: [
      { q: 'Vad ingår i priset?', a: 'Hemsida med 4 till 8 sidor beroende på paket, professionell copy skriven åt dig, Google Business Profile-setup, lokal SEO-grund och mobiloptimering. Core och Pro inkluderar 30 dagars support. Pro+Drift inkluderar löpande underhåll och månadsrapport.' },
      { q: 'Äger jag sajten när den är klar?', a: 'Ja, fullt ut. Domän, kod och allt innehåll är ditt från dag ett. Vi låser inte in dig i något abonnemang om du inte väljer Pro+Drift-paketet.' },
      { q: 'Ingår webbhotell och hosting?', a: 'Sajten driftas på Vercel, ett av världens snabbaste CDN-nätverk. I Pro+Drift-paketet ingår hosting utan extrakostnad. Väljer du Core eller Pro hjälper vi dig med överlämning till valfritt webbhotell.' },
      { q: 'Vad ingår inte?', a: 'Logotyp, fotografi och löpande hantering av sociala medier ingår inte i grundpaketen.' },
    ],
  },
  {
    label: 'Tekniskt och praktiskt',
    faqs: [
      { q: 'Behöver jag vara teknisk?', a: 'Nej. Du skickar in uppgifter om ditt företag via formulär och vi bygger allt. Det är vår sak.' },
      { q: 'Vad behöver jag ha klart innan vi börjar?', a: 'Inget måste vara klart. Har du bilder, texter eller logotyp tar vi med det. Har du det inte löser vi det ändå.' },
      { q: 'Vad är Google Business Profile?', a: 'Din kostnadsfria profil på Google Maps och i sökresultaten. Avgörande för lokala företag: kunder söker "rörmokare Luleå" och hittar dig direkt. Vi sätter upp och optimerar den åt dig.' },
    ],
  },
  {
    label: 'Synlighet och SEO',
    faqs: [
      { q: 'Hur snabbt syns jag på Google?', a: 'Google indexerar nya sidor inom 1 till 4 veckor. De flesta av våra kunder ser sina första sökklick inom 30 dagar.' },
      { q: 'Vad är skillnaden mot en vanlig webbyrå?', a: 'Byråer fakturerar per timme, kräver långa möten och levererar efter 8 till 12 veckor. Vi arbetar med fasta priser och formulärbaserad onboarding. Snabbare leverans till ett tydligare pris.' },
      { q: 'Jobbar ni bara med företag i Luleå?', a: 'Vi fokuserar på Norrbotten och norra Sverige men tar uppdrag från hela landet.' },
    ],
  },
]

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="border-b border-white/[0.07] last:border-0">
      <button
        onClick={() => setOpen(v => !v)}
        className="w-full text-left py-5 flex justify-between items-center gap-4"
        style={{ background: 'none', border: 'none', cursor: 'pointer' }}
      >
        <span className="font-sans font-semibold text-white/80 text-sm">{q}</span>
        <span
          className="font-sans text-white/30 flex-shrink-0 text-base transition-transform duration-250"
          style={{ transform: open ? 'rotate(180deg)' : 'none', display: 'block' }}
        >
          ↓
        </span>
      </button>
      <div
        className="overflow-hidden transition-all duration-300"
        style={{ maxHeight: open ? '300px' : '0' }}
      >
        <p className="font-sans text-white/45 text-sm leading-relaxed pb-5">{a}</p>
      </div>
    </div>
  )
}

export default function FAQ() {
  return (
    <section id="faq" className="border-t border-white/[0.06]" style={{ background: '#0b1020' }}>
      <div className="max-w-3xl mx-auto px-6 py-24">
        <div className="text-center mb-14">
          <p className="font-sans text-[10px] tracking-[0.22em] uppercase text-white/30 mb-4">
            Vanliga frågor
          </p>
          <h2 className="font-serif italic text-white/90 mb-3" style={{ fontSize: 'clamp(28px, 3.5vw, 48px)' }}>
            Har du frågor?
          </h2>
          <p className="font-sans text-white/40 text-sm">
            Maila oss på{' '}
            <a href="mailto:hej@dalboviken.se" className="text-[#a8c4e8]" style={{ textDecoration: 'none' }}>
              hej@dalboviken.se
            </a>
          </p>
        </div>
        <div className="flex flex-col gap-8">
          {groups.map((group) => (
            <div key={group.label}>
              <p className="font-sans text-[9px] tracking-[0.2em] uppercase text-white/20 mb-3 px-1">
                {group.label}
              </p>
              <div
                className="rounded-2xl px-6 md:px-8"
                style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)' }}
              >
                {group.faqs.map((faq, i) => (
                  <FAQItem key={i} {...faq} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
