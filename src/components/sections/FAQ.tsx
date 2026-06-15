import { useState } from 'react'

const groups = [
  {
    label: 'Pris och leverans',
    faqs: [
      { question: 'Vad kostar en hemsida hos Dalboviken Media?', answer: 'Vi har tre paket: Core (14 900 kr), Pro (22 900 kr) och Pro+Drift (22 900 kr + 1 490 kr/mån). Alla priser är fasta utan dolda tilläggsavgifter. Du betalar efter godkänd leverans.' },
      { question: 'Hur kan ni leverera en hemsida på 7 dagar?', answer: 'Vi arbetar med ett beprövat system och AI-verktyg för copy och design. Du fyller i ett kort formulär, vi tar det därifrån. Inga möten, inga långa revideringsrundor. Det som tar veckor hos en vanlig byrå tar oss dagar.' },
      { question: 'Betalar jag om jag inte är nöjd?', answer: 'Nej. Du godkänner sajten innan betalning sker. Levererar vi inte det vi lovat betalar du ingenting.' },
    ],
  },
  {
    label: 'Om tjänsten',
    faqs: [
      { question: 'Vad ingår i priset?', answer: 'Hemsida med 4 till 8 sidor beroende på paket, professionell copy skriven åt dig, Google Business Profile-setup, lokal SEO-grund och mobiloptimering. Core och Pro inkluderar 30 dagars support. Pro+Drift inkluderar löpande underhåll och månadsrapport.' },
      { question: 'Äger jag sajten när den är klar?', answer: 'Ja, fullt ut. Domän, kod och allt innehåll är ditt från dag ett. Vi låser inte in dig i något abonnemang om du inte väljer Pro+Drift-paketet.' },
      { question: 'Ingår webbhotell och hosting?', answer: 'Sajten driftas på Vercel, ett av världens snabbaste CDN-nätverk. I Pro+Drift-paketet ingår hosting utan extrakostnad. Väljer du Core eller Pro hjälper vi dig med överlämning till valfritt webbhotell.' },
      { question: 'Vad ingår inte?', answer: 'Logotyp, fotografi och löpande hantering av sociala medier ingår inte i grundpaketen. Har du det redan är det perfekt. Behöver du det kan vi hjälpa dig vidare.' },
    ],
  },
  {
    label: 'Tekniskt och praktiskt',
    faqs: [
      { question: 'Behöver jag vara teknisk?', answer: 'Nej. Du skickar in uppgifter om ditt företag via formulär och vi bygger allt. Du behöver inte förstå hur sajter fungerar. Det är vår sak.' },
      { question: 'Vad behöver jag ha klart innan vi börjar?', answer: 'Inget måste vara klart. Har du bilder, texter eller logotyp tar vi med det. Har du det inte löser vi det ändå. Formuläret leder dig igenom allt vi behöver.' },
      { question: 'Vad är Google Business Profile och behöver jag det?', answer: 'Google Business Profile är din kostnadsfria profil på Google Maps och i sökresultaten. Den är avgörande för lokala företag: kunder söker "rörmokare Luleå" och hittar dig direkt. Vi sätter upp och optimerar den åt dig.' },
    ],
  },
  {
    label: 'Synlighet och SEO',
    faqs: [
      { question: 'Hur snabbt syns jag på Google?', answer: 'Google indexerar nya sidor inom 1 till 4 veckor. Med lokal SEO-grund och optimerad Google Business Profile syns du snabbare i lokala sökresultat. De flesta av våra kunder ser sina första sökklick inom 30 dagar.' },
      { question: 'Vad är skillnaden mot en vanlig webbyrå?', answer: 'Byråer fakturerar per timme, kräver långa möten och levererar efter 8 till 12 veckor. Vi arbetar med fasta priser, formulärbaserad onboarding och AI-assisterad produktion. Snabbare leverans till ett tydligare pris.' },
      { question: 'Jobbar ni bara med företag i Luleå?', answer: 'Vi fokuserar på Norrbotten och norra Sverige men tar uppdrag från hela landet. Lokal förståelse är vår styrka: vi vet hur hantverkare och tjänsteföretag i norr kommunicerar och vill uppfattas.' },
    ],
  },
]

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false)
  return (
    <div style={{ borderBottom: '1px solid rgba(255,255,255,0.07)' }}>
      <button
        onClick={() => setOpen(v => !v)}
        style={{
          width: '100%', textAlign: 'left', padding: '20px 0',
          display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '16px',
          background: 'none', border: 'none', cursor: 'pointer',
        }}
      >
        <span style={{ fontSize: '15px', fontWeight: 600, color: 'rgba(255,255,255,0.85)' }}>{question}</span>
        <span style={{
          color: 'rgba(255,255,255,0.35)', fontSize: '18px', lineHeight: 1, flexShrink: 0,
          transform: open ? 'rotate(180deg)' : 'none', transition: 'transform 0.25s',
        }}>
          ↓
        </span>
      </button>
      <div style={{
        overflow: 'hidden', maxHeight: open ? '400px' : '0',
        transition: 'max-height 0.3s ease',
      }}>
        <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.50)', lineHeight: 1.7, paddingBottom: '20px' }}>{answer}</p>
      </div>
    </div>
  )
}

export default function FAQ() {
  return (
    <section id="faq" style={{ background: '#080d18', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
      <div style={{ maxWidth: '760px', margin: '0 auto', padding: '80px 24px' }}>
        <div style={{ textAlign: 'center', marginBottom: '56px' }}>
          <p style={{ fontSize: '10px', letterSpacing: '0.2em', color: 'rgba(255,255,255,0.35)', textTransform: 'uppercase', marginBottom: '16px' }}>
            Vanliga frågor
          </p>
          <h2 style={{ fontSize: 'clamp(26px, 3vw, 42px)', fontWeight: 700, color: 'rgba(255,255,255,0.92)', marginBottom: '12px' }}>
            Har du frågor?
          </h2>
          <p style={{ fontSize: '15px', color: 'rgba(255,255,255,0.45)' }}>
            Hittar du inte svar här? Maila oss på{' '}
            <a href="mailto:hej@dalboviken.se" style={{ color: '#a8c4e8', textDecoration: 'none' }}>
              hej@dalboviken.se
            </a>
          </p>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
          {groups.map((group) => (
            <div key={group.label}>
              <p style={{ fontSize: '10px', letterSpacing: '0.18em', color: 'rgba(255,255,255,0.25)', textTransform: 'uppercase', marginBottom: '4px' }}>
                {group.label}
              </p>
              <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: '16px', padding: '0 24px' }}>
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
