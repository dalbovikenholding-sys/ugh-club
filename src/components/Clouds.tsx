import { motion } from 'framer-motion'

interface CloudProps {
  left: string
  top: string
  width: number
  height: number
  opacity: number
  delay: number
  duration: number
  blur: number
  driftX?: number
}

function Cloud({ left, top, width, height, opacity, delay, duration, blur, driftX = 70 }: CloudProps) {
  return (
    <motion.div
      className="absolute pointer-events-none"
      style={{
        left,
        top,
        width,
        height,
        borderRadius: '50%',
        background:
          'radial-gradient(ellipse at center, rgba(215,232,255,1) 0%, rgba(195,220,250,0.7) 45%, transparent 100%)',
        filter: `blur(${blur}px)`,
        mixBlendMode: 'screen',
        opacity,
      }}
      animate={{
        x: [0, driftX, driftX * 0.3, driftX * 0.8, 0],
        y: [0, -10, 5, -7, 0],
        opacity: [opacity, opacity * 1.22, opacity * 0.88, opacity * 1.1, opacity],
        scale: [1, 1.06, 0.97, 1.04, 1],
      }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        ease: 'easeInOut',
        times: [0, 0.3, 0.55, 0.78, 1],
      }}
    />
  )
}

const CLOUDS: CloudProps[] = [
  { left: '-12%', top: '46%', width: 640, height: 200, opacity: 0.42, delay: 0,  duration: 26, blur: 40, driftX: 90 },
  { left: '18%',  top: '50%', width: 720, height: 220, opacity: 0.38, delay: 6,  duration: 32, blur: 52, driftX: 70 },
  { left: '48%',  top: '44%', width: 580, height: 175, opacity: 0.35, delay: 2,  duration: 29, blur: 44, driftX: 60 },
  { left: '63%',  top: '52%', width: 500, height: 155, opacity: 0.32, delay: 9,  duration: 35, blur: 38, driftX: 80 },
  { left: '2%',   top: '56%', width: 680, height: 195, opacity: 0.30, delay: 13, duration: 30, blur: 56, driftX: 65 },
  { left: '33%',  top: '58%', width: 600, height: 180, opacity: 0.28, delay: 4,  duration: 28, blur: 48, driftX: 75 },
  { left: '72%',  top: '48%', width: 440, height: 135, opacity: 0.33, delay: 8,  duration: 33, blur: 36, driftX: 55 },
  { left: '-5%',  top: '62%', width: 520, height: 155, opacity: 0.25, delay: 16, duration: 38, blur: 60, driftX: 85 },
]

export default function Clouds() {
  return (
    <div
      className="absolute inset-0 pointer-events-none overflow-hidden"
      style={{ zIndex: 6 }}
    >
      {CLOUDS.map((cloud, i) => (
        <Cloud key={i} {...cloud} />
      ))}
    </div>
  )
}
