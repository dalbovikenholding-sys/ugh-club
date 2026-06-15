export default function BorderFrame() {
  const corners = [
    { pos: 'top-0 left-0', translate: '-translate-x-1/2 -translate-y-1/2' },
    { pos: 'top-0 right-0', translate: 'translate-x-1/2 -translate-y-1/2' },
    { pos: 'bottom-0 left-0', translate: '-translate-x-1/2 translate-y-1/2' },
    { pos: 'bottom-0 right-0', translate: 'translate-x-1/2 translate-y-1/2' },
  ]

  return (
    <div className="fixed inset-5 pointer-events-none z-40 border border-white/[0.12]">
      {corners.map(({ pos, translate }, i) => (
        <div key={i} className={`absolute ${pos} ${translate} w-3 h-3`}>
          <div className="absolute top-1/2 left-0 right-0 h-px bg-white/40" style={{ transform: 'translateY(-0.5px)' }} />
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-white/40" style={{ transform: 'translateX(-0.5px)' }} />
        </div>
      ))}
    </div>
  )
}
