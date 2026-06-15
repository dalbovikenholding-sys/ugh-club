const STYLE = `
@keyframes cd1 { 0%,100%{transform:translate(0,0) scale(1)} 50%{transform:translate(260px,-20px) scale(1.06)} }
@keyframes cd2 { 0%,100%{transform:translate(0,0) scale(1)} 50%{transform:translate(220px, 18px) scale(1.05)} }
@keyframes cd3 { 0%,100%{transform:translate(0,0) scale(1)} 50%{transform:translate(240px,-26px) scale(1.07)} }
@keyframes cd4 { 0%,100%{transform:translate(0,0) scale(1)} 50%{transform:translate(200px, 22px) scale(1.05)} }
`

interface C { left:string; top:string; w:string; h:string; blur:number; op:number; anim:string }

const CLOUDS: C[] = [
  { left:'-8%',  top:'8%',  w:'55%', h:'22%', blur:22, op:0.72, anim:'cd1 11s 0s   ease-in-out infinite' },
  { left:'15%',  top:'13%', w:'60%', h:'25%', blur:28, op:0.65, anim:'cd2 14s 2s   ease-in-out infinite' },
  { left:'42%',  top:'6%',  w:'48%', h:'20%', blur:24, op:0.68, anim:'cd3 12s 1s   ease-in-out infinite' },
  { left:'58%',  top:'16%', w:'44%', h:'18%', blur:20, op:0.60, anim:'cd4 13s 4s   ease-in-out infinite' },
  { left:'-5%',  top:'20%', w:'50%', h:'22%', blur:30, op:0.58, anim:'cd1 15s 3s   ease-in-out infinite' },
  { left:'28%',  top:'24%', w:'52%', h:'20%', blur:26, op:0.55, anim:'cd2 10s 5s   ease-in-out infinite' },
  { left:'65%',  top:'10%', w:'40%', h:'16%', blur:18, op:0.62, anim:'cd3  9s 2s   ease-in-out infinite' },
  { left:'8%',   top:'28%', w:'45%', h:'18%', blur:32, op:0.50, anim:'cd4 16s 6s   ease-in-out infinite' },
]

export default function Clouds() {
  return (
    <>
      <style>{STYLE}</style>
      <div style={{ position:'absolute', inset:0, zIndex:6, pointerEvents:'none' }}>
        {CLOUDS.map((c, i) => (
          <div
            key={i}
            style={{
              position: 'absolute',
              left: c.left,
              top: c.top,
              width: c.w,
              height: c.h,
              borderRadius: '50%',
              background: 'radial-gradient(ellipse at center, rgba(230,242,255,1) 0%, rgba(210,228,255,0.7) 50%, transparent 100%)',
              filter: `blur(${c.blur}px)`,
              opacity: c.op,
              animation: c.anim,
            }}
          />
        ))}
      </div>
    </>
  )
}
