const STYLE = `
@keyframes drift1 { 0%,100%{transform:translate(0,0)} 50%{transform:translate(65px,-8px)} }
@keyframes drift2 { 0%,100%{transform:translate(0,0)} 50%{transform:translate(50px,6px)} }
@keyframes drift3 { 0%,100%{transform:translate(0,0)} 50%{transform:translate(80px,-5px)} }
@keyframes drift4 { 0%,100%{transform:translate(0,0)} 50%{transform:translate(45px,8px)} }
`

interface CloudConfig {
  left: string
  top: string
  width: number
  opacity: number
  anim: string
  blur: number
}

const CLOUD_CONFIGS: CloudConfig[] = [
  { left: '-5%', top: '72%', width: 320, opacity: 0.32, blur: 10, anim: 'drift1 22s 0s  ease-in-out infinite' },
  { left: '20%', top: '76%', width: 360, opacity: 0.28, blur: 12, anim: 'drift2 26s 4s  ease-in-out infinite' },
  { left: '50%', top: '70%', width: 300, opacity: 0.30, blur: 10, anim: 'drift3 20s 8s  ease-in-out infinite' },
  { left: '72%', top: '74%', width: 280, opacity: 0.26, blur: 11, anim: 'drift4 24s 6s  ease-in-out infinite' },
  { left: '5%',  top: '82%', width: 340, opacity: 0.22, blur: 14, anim: 'drift1 28s 12s ease-in-out infinite' },
  { left: '40%', top: '80%', width: 310, opacity: 0.24, blur: 12, anim: 'drift2 22s 16s ease-in-out infinite' },
]

function Cloud({ idx, left, top, width, opacity, anim, blur }: CloudConfig & { idx: number }) {
  const w = width
  const h = Math.round(w * 0.52)
  const id = `cf${idx}`

  return (
    <div style={{ position: 'absolute', left, top, animation: anim }}>
      <svg width={w} height={h} viewBox={`0 0 ${w} ${h}`} overflow="visible">
        <defs>
          <filter id={id} x="-5%" y="-5%" width="110%" height="110%">
            <feGaussianBlur stdDeviation={blur} />
          </filter>
        </defs>
        <g filter={`url(#${id})`} opacity={opacity}>
          {/* flat base */}
          <ellipse cx={w * 0.50} cy={h * 0.80} rx={w * 0.46} ry={h * 0.22} fill="rgba(245,250,255,0.90)" />
          {/* puffs left to right, ascending then descending */}
          <circle cx={w * 0.18} cy={h * 0.62} r={w * 0.10} fill="rgba(242,248,255,0.88)" />
          <circle cx={w * 0.33} cy={h * 0.44} r={w * 0.14} fill="rgba(246,252,255,0.92)" />
          <circle cx={w * 0.51} cy={h * 0.30} r={w * 0.17} fill="rgba(250,254,255,0.96)" />
          <circle cx={w * 0.68} cy={h * 0.40} r={w * 0.13} fill="rgba(244,250,255,0.90)" />
          <circle cx={w * 0.81} cy={h * 0.55} r={w * 0.10} fill="rgba(241,247,255,0.86)" />
        </g>
      </svg>
    </div>
  )
}

export default function Clouds() {
  return (
    <div style={{ position: 'absolute', inset: 0, zIndex: 6, pointerEvents: 'none' }}>
      <style>{STYLE}</style>
      {CLOUD_CONFIGS.map((cfg, i) => (
        <Cloud key={i} idx={i} {...cfg} />
      ))}
    </div>
  )
}
