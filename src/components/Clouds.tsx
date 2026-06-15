const STYLE = `
@keyframes cd1 { 0%,100%{transform:translate(0,0) scale(1)} 50%{transform:translate(240px,-18px) scale(1.06)} }
@keyframes cd2 { 0%,100%{transform:translate(0,0) scale(1)} 50%{transform:translate(200px, 16px) scale(1.05)} }
@keyframes cd3 { 0%,100%{transform:translate(0,0) scale(1)} 50%{transform:translate(220px,-24px) scale(1.07)} }
@keyframes cd4 { 0%,100%{transform:translate(0,0) scale(1)} 50%{transform:translate(180px, 20px) scale(1.05)} }
`

interface C { left:string; top:string; w:string; h:string; blur:number; op:number; anim:string }

const CLOUDS: C[] = [
  { left:'-5%',  top:'42%', w:'52%', h:'24%', blur:28, op:0.55, anim:'cd1 11s 0s   ease-in-out infinite' },
  { left:'18%',  top:'46%', w:'58%', h:'27%', blur:34, op:0.50, anim:'cd2 14s 2s   ease-in-out infinite' },
  { left:'44%',  top:'40%', w:'46%', h:'22%', blur:30, op:0.52, anim:'cd3 12s 1s   ease-in-out infinite' },
  { left:'62%',  top:'47%', w:'42%', h:'20%', blur:26, op:0.48, anim:'cd4 13s 4s   ease-in-out infinite' },
  { left:'-3%',  top:'51%', w:'55%', h:'26%', blur:36, op:0.45, anim:'cd1 15s 3s   ease-in-out infinite' },
  { left:'32%',  top:'54%', w:'50%', h:'24%', blur:32, op:0.42, anim:'cd2 10s 5s   ease-in-out infinite' },
  { left:'68%',  top:'43%', w:'38%', h:'18%', blur:24, op:0.50, anim:'cd3  9s 2s   ease-in-out infinite' },
  { left:'10%',  top:'57%', w:'48%', h:'23%', blur:38, op:0.40, anim:'cd4 16s 6s   ease-in-out infinite' },
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
              background: 'radial-gradient(ellipse at center, rgba(215,232,255,1) 0%, rgba(195,218,255,0.55) 55%, transparent 100%)',
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
