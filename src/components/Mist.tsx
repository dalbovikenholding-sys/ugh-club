const STYLE = `
@keyframes mist1 { 0%,100%{opacity:0.14;transform:translateX(0)}    50%{opacity:0.20;transform:translateX(30px)} }
@keyframes mist2 { 0%,100%{opacity:0.10;transform:translateX(0)}    50%{opacity:0.16;transform:translateX(-25px)} }
@keyframes mist3 { 0%,100%{opacity:0.08;transform:translateX(0)}    50%{opacity:0.13;transform:translateX(20px)} }
`

const LAYERS = [
  { bottom: '18%', height: '22%', anim: 'mist1 28s 0s ease-in-out infinite' },
  { bottom: '8%',  height: '28%', anim: 'mist2 34s 6s ease-in-out infinite' },
  { bottom: '0%',  height: '20%', anim: 'mist3 22s 3s ease-in-out infinite' },
]

export default function Mist() {
  return (
    <>
      <style>{STYLE}</style>
      <div style={{ position: 'absolute', inset: 0, zIndex: 5, pointerEvents: 'none' }}>
        {LAYERS.map((l, i) => (
          <div
            key={i}
            style={{
              position: 'absolute',
              left: '-5%',
              right: '-5%',
              bottom: l.bottom,
              height: l.height,
              background: 'linear-gradient(to top, rgba(200,218,240,0.55) 0%, rgba(210,228,248,0.25) 50%, transparent 100%)',
              filter: 'blur(18px)',
              animation: l.anim,
            }}
          />
        ))}
      </div>
    </>
  )
}
