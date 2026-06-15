export default function SiteCTA() {
  return (
    <section className="border-t border-white/[0.06]" style={{ background: 'rgba(8,13,24,0.70)' }}>
      <div className="max-w-5xl mx-auto px-6 py-24">
        <div
          className="rounded-3xl p-12 md:p-16 relative overflow-hidden"
          style={{
            background: 'rgba(168,196,232,0.07)',
            border: '1px solid rgba(168,196,232,0.16)',
          }}
        >
          <div
            className="absolute inset-0 pointer-events-none"
            style={{ background: 'radial-gradient(700px 350px at 80% -10%, rgba(168,196,232,0.07), transparent 60%)' }}
          />
          <div className="relative" style={{ maxWidth: '520px' }}>
            <h2 className="font-serif italic text-white/90 mb-4" style={{ fontSize: 'clamp(26px, 3.5vw, 46px)' }}>
              Redo att få en hemsida som faktiskt jobbar för dig?
            </h2>
            <p className="font-sans text-white/45 text-base leading-relaxed mb-8">
              Maila oss så hör vi av oss inom 24 timmar med en offert. Inga förpliktelser.
            </p>
            <a
              href="mailto:info@dalboviken.se?subject=F%C3%B6rfr%C3%A5gan%20%E2%80%93%20Dalboviken%20Media"
              className="inline-flex items-center gap-2 font-sans font-semibold text-sm rounded-full"
              style={{
                background: '#a8c4e8', color: '#080d18',
                padding: '14px 28px', textDecoration: 'none',
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
