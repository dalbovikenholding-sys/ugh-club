import Birds from './Birds'

export default function HeroBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <Birds />
      <div
        className="absolute bottom-0 left-0 right-0 pointer-events-none"
        style={{
          height: '30%',
          background: 'linear-gradient(to top, rgba(8,13,24,0.60) 0%, transparent 100%)',
        }}
      />
    </div>
  )
}
