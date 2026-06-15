import { motion } from 'framer-motion'

interface BirdProps {
  x: number
  y: number
  delay: number
  size: number
  duration: number
  travelX: number
}

function Bird({ x, y, delay, size, duration, travelX }: BirdProps) {
  return (
    <motion.div
      className="absolute pointer-events-none"
      style={{ left: `${x}%`, top: `${y}%` }}
      initial={{ x: 0, y: 0, opacity: 0 }}
      animate={{
        x: [0, travelX * 0.25, travelX * 0.5, travelX * 0.75, travelX],
        y: [0, -12, 6, -8, 0],
        opacity: [0, 0.6, 0.65, 0.55, 0],
      }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        ease: 'linear',
        times: [0, 0.25, 0.5, 0.75, 1],
      }}
    >
      <svg
        width={size}
        height={size / 2.2}
        viewBox="0 0 20 9"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0 5 Q5 1 10 5 Q15 1 20 5"
          stroke="rgba(200,220,240,0.75)"
          strokeWidth="1.4"
          strokeLinecap="round"
        />
      </svg>
    </motion.div>
  )
}

const BIRDS: BirdProps[] = [
  { x: 8,  y: 14, delay: 0,   size: 13, duration: 22, travelX: 280 },
  { x: 12, y: 11, delay: 3,   size: 10, duration: 25, travelX: 320 },
  { x: 6,  y: 17, delay: 7,   size: 11, duration: 20, travelX: 260 },
  { x: 18, y: 9,  delay: 1.5, size: 8,  duration: 28, travelX: 400 },
  { x: 35, y: 13, delay: 5,   size: 12, duration: 24, travelX: 300 },
  { x: 25, y: 8,  delay: 9,   size: 9,  duration: 26, travelX: 350 },
  { x: 55, y: 15, delay: 2,   size: 10, duration: 23, travelX: 280 },
  { x: 42, y: 10, delay: 6,   size: 11, duration: 21, travelX: 310 },
  { x: 65, y: 12, delay: 11,  size: 8,  duration: 27, travelX: 260 },
]

export default function Birds() {
  return (
    <>
      {BIRDS.map((bird, i) => (
        <Bird key={i} {...bird} />
      ))}
    </>
  )
}
