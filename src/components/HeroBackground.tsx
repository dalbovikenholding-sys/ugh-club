import { motion, MotionValue, useSpring, useTransform } from 'framer-motion'
import Birds from './Birds'

interface Props {
  mouseX: MotionValue<number>
  mouseY: MotionValue<number>
}

function MistLayer({ x, y, width, opacity, delay, duration }: {
  x: string; y: string; width: number; opacity: number; delay: number; duration: number
}) {
  return (
    <motion.div
      className="absolute rounded-full pointer-events-none"
      style={{
        left: x,
        top: y,
        width,
        height: width / 3.5,
        background: 'rgba(210, 230, 245, 1)',
        filter: 'blur(55px)',
        opacity,
      }}
      animate={{
        x: [0, 80, 20, 60, 0],
        opacity: [opacity, opacity * 1.3, opacity * 0.85, opacity * 1.15, opacity],
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

const MIST_LAYERS = [
  { x: '-8%',  y: '54%', width: 480, opacity: 0.22, delay: 0,  duration: 30 },
  { x: '15%',  y: '57%', width: 560, opacity: 0.18, delay: 6,  duration: 36 },
  { x: '45%',  y: '52%', width: 420, opacity: 0.20, delay: 2,  duration: 28 },
  { x: '65%',  y: '56%', width: 500, opacity: 0.17, delay: 9,  duration: 33 },
  { x: '30%',  y: '60%', width: 620, opacity: 0.15, delay: 4,  duration: 40 },
  { x: '-5%',  y: '62%', width: 380, opacity: 0.16, delay: 14, duration: 26 },
  { x: '75%',  y: '50%', width: 340, opacity: 0.14, delay: 7,  duration: 31 },
  { x: '20%',  y: '48%', width: 300, opacity: 0.12, delay: 11, duration: 34 },
]

export default function HeroBackground({ mouseX, mouseY }: Props) {
  const springConfig = { stiffness: 35, damping: 18 }

  const bgX = useSpring(useTransform(mouseX, [0, 1], [-18, 18]), springConfig)
  const bgY = useSpring(useTransform(mouseY, [0, 1], [-9, 9]), springConfig)

  const fgX = useSpring(useTransform(mouseX, [0, 1], [-6, 6]), springConfig)
  const fgY = useSpring(useTransform(mouseY, [0, 1], [-3, 3]), springConfig)

  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Background image with parallax */}
      <motion.div
        className="absolute"
        style={{
          inset: '-6%',
          x: bgX,
          y: bgY,
        }}
      >
        <div
          className="w-full h-full bg-cover bg-no-repeat"
          style={{
            backgroundImage: 'url(/mountain.png)',
            backgroundPosition: 'center center',
            filter: 'brightness(0.82) contrast(1.05) saturate(0.9)',
          }}
        />
      </motion.div>

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

      {/* Mist/fog layers with parallax */}
      <motion.div className="absolute inset-0" style={{ x: fgX, y: fgY }}>
        {MIST_LAYERS.map((layer, i) => (
          <MistLayer key={i} {...layer} />
        ))}
      </motion.div>

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
