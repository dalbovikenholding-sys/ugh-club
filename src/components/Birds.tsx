import { motion } from 'framer-motion'

interface BirdProps {
  startX: string
  startY: string
  delay: number
  size: number
  duration: number
  travelX: number
}

function Bird({ startX, startY, delay, size, duration, travelX }: BirdProps) {
  const halfSize = size / 2
  return (
    <motion.div
      className="absolute pointer-events-none"
      style={{ left: startX, top: startY }}
      initial={{ x: -size, opacity: 0 }}
      animate={{
        x: [0, travelX * 0.3, travelX * 0.6, travelX * 0.85, travelX],
        y: [0, -18, 8, -12, 4],
        opacity: [0, 0.85, 0.9, 0.8, 0],
      }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        ease: 'linear',
        times: [0, 0.2, 0.5, 0.8, 1],
      }}
    >
      <svg
        width={size}
        height={halfSize}
        viewBox="0 0 32 14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0 8 Q8 1 16 8 Q24 1 32 8"
          stroke="rgba(255,255,255,0.88)"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </motion.div>
  )
}

interface FlockProps {
  x: string
  y: string
  delay: number
  scale: number
  duration: number
  travelX: number
}

function Flock({ x, y, delay, scale, duration, travelX }: FlockProps) {
  const s = 28 * scale

  const offsets = [
    { dx: 0,      dy: 0  },
    { dx: s * 1.2, dy: -s * 0.7 },
    { dx: -s * 1.2, dy: -s * 0.6 },
    { dx: s * 2.4, dy: -s * 1.2 },
    { dx: -s * 2.4, dy: -s * 1.1 },
  ]

  return (
    <motion.div
      className="absolute pointer-events-none"
      style={{ left: x, top: y }}
      initial={{ x: 0, opacity: 0 }}
      animate={{
        x: [0, travelX * 0.25, travelX * 0.5, travelX * 0.75, travelX],
        y: [0, -25, 10, -15, 5],
        opacity: [0, 0.8, 0.85, 0.75, 0],
      }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        ease: 'linear',
        times: [0, 0.2, 0.5, 0.8, 1],
      }}
    >
      {offsets.map((o, i) => (
        <div
          key={i}
          className="absolute"
          style={{ left: o.dx, top: o.dy }}
        >
          <svg
            width={s}
            height={s / 2}
            viewBox="0 0 32 14"
            fill="none"
          >
            <path
              d="M0 8 Q8 1 16 8 Q24 1 32 8"
              stroke="rgba(255,255,255,0.82)"
              strokeWidth={2 / scale}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      ))}
    </motion.div>
  )
}

const SOLO_BIRDS: BirdProps[] = [
  { startX: '5%',  startY: '8%',  delay: 0,   size: 28, duration: 24, travelX: 700 },
  { startX: '8%',  startY: '6%',  delay: 8,   size: 22, duration: 28, travelX: 750 },
  { startX: '3%',  startY: '12%', delay: 14,  size: 18, duration: 22, travelX: 600 },
  { startX: '12%', startY: '5%',  delay: 4,   size: 24, duration: 26, travelX: 680 },
  { startX: '60%', startY: '7%',  delay: 2,   size: 16, duration: 30, travelX: 500 },
  { startX: '70%', startY: '10%', delay: 10,  size: 14, duration: 32, travelX: 450 },
  { startX: '55%', startY: '4%',  delay: 18,  size: 20, duration: 25, travelX: 550 },
  { startX: '2%',  startY: '18%', delay: 6,   size: 15, duration: 27, travelX: 640 },
  { startX: '40%', startY: '9%',  delay: 16,  size: 17, duration: 29, travelX: 580 },
]

const FLOCKS: FlockProps[] = [
  { x: '10%', y: '7%',  delay: 3,  scale: 0.7,  duration: 35, travelX: 800 },
  { x: '5%',  y: '14%', delay: 20, scale: 0.55, duration: 40, travelX: 900 },
  { x: '50%', y: '5%',  delay: 12, scale: 0.65, duration: 38, travelX: 700 },
]

export default function Birds() {
  return (
    <>
      {SOLO_BIRDS.map((bird, i) => (
        <Bird key={`b${i}`} {...bird} />
      ))}
      {FLOCKS.map((flock, i) => (
        <Flock key={`f${i}`} {...flock} />
      ))}
    </>
  )
}
