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
  driftX: number
  driftY: number
}

function Cloud({ left, top, width, height, opacity, delay, duration, blur, driftX, driftY }: CloudProps) {
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
          'radial-gradient(ellipse at center, rgba(215,232,255,1) 0%, rgba(195,218,252,0.65) 50%, transparent 100%)',
        filter: `blur(${blur}px)`,
        mixBlendMode: 'screen',
        opacity,
      }}
      animate={{
        x: [0, driftX],
        y: [0, driftY],
        opacity: [opacity, opacity * 1.3],
        scale: [1, 1.08],
      }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        repeatType: 'mirror',
        ease: 'easeInOut',
      }}
    />
  )
}

const CLOUDS: CloudProps[] = [
  { left: '-10%', top: '46%', width: 640, height: 200, opacity: 0.40, delay: 0,   duration: 12, blur: 40, driftX: 220, driftY: -18 },
  { left: '20%',  top: '50%', width: 700, height: 215, opacity: 0.36, delay: 3,   duration: 15, blur: 50, driftX: 180, driftY:  12 },
  { left: '48%',  top: '44%', width: 560, height: 170, opacity: 0.33, delay: 1,   duration: 13, blur: 42, driftX: 200, driftY: -22 },
  { left: '62%',  top: '52%', width: 480, height: 150, opacity: 0.30, delay: 5,   duration: 16, blur: 36, driftX: 160, driftY:  16 },
  { left: '4%',   top: '56%', width: 660, height: 195, opacity: 0.28, delay: 2,   duration: 14, blur: 54, driftX: 240, driftY: -14 },
  { left: '35%',  top: '59%', width: 580, height: 175, opacity: 0.26, delay: 6,   duration: 18, blur: 46, driftX: 190, driftY:  20 },
  { left: '72%',  top: '48%', width: 420, height: 130, opacity: 0.31, delay: 4,   duration: 11, blur: 34, driftX: 150, driftY: -10 },
  { left: '-5%',  top: '62%', width: 500, height: 152, opacity: 0.24, delay: 7,   duration: 17, blur: 58, driftX: 210, driftY:  18 },
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
