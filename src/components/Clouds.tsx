import { useEffect, useRef } from 'react'

interface CloudConfig {
  x: number
  y: number
  width: number
  height: number
  blur: number
  opacity: number
  durationMs: number
  delayMs: number
  driftX: number
  driftY: number
}

const CLOUDS: CloudConfig[] = [
  { x: 0,    y: 380, width: 750,  height: 230, blur: 40, opacity: 0.45, durationMs: 10000, delayMs: 0,    driftX: 260, driftY: -20 },
  { x: 250,  y: 420, width: 820,  height: 255, blur: 50, opacity: 0.40, durationMs: 13000, delayMs: 2000, driftX: 210, driftY:  18 },
  { x: 600,  y: 370, width: 680,  height: 210, blur: 44, opacity: 0.42, durationMs: 11000, delayMs: 1000, driftX: 230, driftY: -26 },
  { x: 850,  y: 435, width: 600,  height: 185, blur: 38, opacity: 0.38, durationMs: 14000, delayMs: 4000, driftX: 180, driftY:  20 },
  { x: 50,   y: 465, width: 780,  height: 240, blur: 58, opacity: 0.36, durationMs: 12000, delayMs: 3000, driftX: 270, driftY: -16 },
  { x: 400,  y: 495, width: 700,  height: 215, blur: 48, opacity: 0.33, durationMs: 15000, delayMs: 5000, driftX: 200, driftY:  24 },
  { x: 950,  y: 395, width: 520,  height: 162, blur: 36, opacity: 0.40, durationMs: 9000,  delayMs: 2000, driftX: 165, driftY: -14 },
  { x: 150,  y: 510, width: 640,  height: 198, blur: 54, opacity: 0.30, durationMs: 16000, delayMs: 6000, driftX: 240, driftY:  18 },
]

function Cloud({ x, y, width, height, blur, opacity, durationMs, delayMs, driftX, driftY }: CloudConfig) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const keyframes = [
      { transform: 'translate(0px, 0px) scale(1)',                        opacity },
      { transform: `translate(${driftX}px, ${driftY}px) scale(1.07)`,    opacity: Math.min(opacity * 1.35, 0.9) },
      { transform: 'translate(0px, 0px) scale(1)',                        opacity },
    ]

    const anim = el.animate(keyframes, {
      duration: durationMs,
      delay: delayMs,
      iterations: Infinity,
      easing: 'ease-in-out',
      fill: 'forwards',
    })

    return () => anim.cancel()
  }, [driftX, driftY, durationMs, delayMs, opacity])

  return (
    <div
      ref={ref}
      style={{
        position: 'absolute',
        left: x,
        top: y,
        width,
        height,
        borderRadius: '50%',
        background: 'radial-gradient(ellipse at center, rgba(210,228,255,1) 0%, rgba(190,215,252,0.6) 55%, transparent 100%)',
        filter: `blur(${blur}px)`,
        opacity,
        pointerEvents: 'none',
        willChange: 'transform, opacity',
      }}
    />
  )
}

export default function Clouds() {
  return (
    <div
      style={{
        position: 'absolute',
        inset: 0,
        zIndex: 6,
        pointerEvents: 'none',
      }}
    >
      {CLOUDS.map((cloud, i) => (
        <Cloud key={i} {...cloud} />
      ))}
    </div>
  )
}
