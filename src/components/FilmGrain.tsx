export default function FilmGrain() {
  return (
    <div className="fixed inset-0 pointer-events-none z-50" style={{ opacity: 0.055, mixBlendMode: 'overlay' }}>
      <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <filter id="grain-noise">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.65"
            numOctaves="3"
            stitchTiles="stitch"
          >
            <animate attributeName="seed" from="0" to="100" dur="0.35s" repeatCount="indefinite" />
          </feTurbulence>
          <feColorMatrix type="saturate" values="0" />
        </filter>
        <rect width="100%" height="100%" filter="url(#grain-noise)" />
      </svg>
    </div>
  )
}
