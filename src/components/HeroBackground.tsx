import Birds from './Birds'

export default function HeroBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden">

      {/* Subtle cinematic darkening overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'rgba(5, 15, 35, 0.18)', mixBlendMode: 'multiply' }}
      />

      {/* Sky gradient deepener */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'linear-gradient(to bottom, rgba(10,20,50,0.2) 0%, transparent 40%)',
        }}
      />

      {/* Birds */}
      <Birds />

      {/* Cinematic vignette */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse at 52% 42%, transparent 28%, rgba(0,0,0,0.5) 75%, rgba(0,0,0,0.75) 100%)',
        }}
      />

      {/* Left content gradient for readability */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'linear-gradient(105deg, rgba(0,0,0,0.38) 0%, rgba(0,0,0,0.15) 35%, transparent 55%)',
        }}
      />

      {/* Bottom fade */}
      <div
        className="absolute bottom-0 left-0 right-0 pointer-events-none"
        style={{
          height: '35%',
          background: 'linear-gradient(to top, rgba(5,10,20,0.5) 0%, transparent 100%)',
        }}
      />
    </div>
  )
}
