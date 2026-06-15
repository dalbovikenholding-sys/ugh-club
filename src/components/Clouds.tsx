import { motion } from 'framer-motion'

interface CloudProps {
  x: number
  y: number
  width: number
  height: number
  blur: number
  opacity: number
  delay: number
  duration: number
  driftX: number
  driftY: number
}

function Cloud({ x, y, width, height, blur, opacity, delay, duration, driftX, driftY }: CloudProps) {
  return (
    <motion.div
      style={{
        position: 'absolute',
        left: x,
        top: y,
        width,
        height,
        borderRadius: '50%',
        background: 'rgba(200, 220, 255, 1)',
        filter: `blur(${blur}px)`,
        opacity,
        pointerEvents: 'none',
      }}
      animate={{
        x: [0, driftX, 0],
        y: [0, driftY, 0],
        opacity: [opacity, opacity * 1.4, opacity],
      }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
    />
  )
}

const CLOUDS: CloudProps[] = [
  { x: -80,  y: 390, width: 700, height: 220, blur: 45, opacity: 0.18, delay: 0,  duration: 10, driftX: 250, driftY: -20 },
  { x: 200,  y: 420, width: 800, height: 250, blur: 55, opacity: 0.15, delay: 2,  duration: 13, driftX: 200, driftY:  15 },
  { x: 550,  y: 380, width: 650, height: 200, blur: 48, opacity: 0.16, delay: 1,  duration: 11, driftX: 220, driftY: -25 },
  { x: 800,  y: 430, width: 580, height: 180, blur: 40, opacity: 0.14, delay: 4,  duration: 14, driftX: 180, driftY:  18 },
  { x: -50,  y: 460, width: 750, height: 230, blur: 60, opacity: 0.13, delay: 3,  duration: 12, driftX: 260, driftY: -15 },
  { x: 350,  y: 490, width: 680, height: 210, blur: 50, opacity: 0.12, delay: 5,  duration: 15, driftX: 190, driftY:  22 },
  { x: 900,  y: 400, width: 500, height: 160, blur: 38, opacity: 0.15, delay: 2,  duration: 9,  driftX: 160, driftY: -12 },
  { x: 100,  y: 500, width: 620, height: 190, blur: 52, opacity: 0.11, delay: 6,  duration: 16, driftX: 230, driftY:  16 },
]

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
