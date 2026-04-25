// Hero.jsx — Naviko website hero section
const Hero = ({ onCTA }) => {
  return (
    <section style={{
      padding: '180px 0 120px', textAlign: 'center',
      position: 'relative', overflow: 'hidden'
    }}>
      {/* ambient glow */}
      <div style={{
        position: 'absolute', top: -200, left: '50%', transform: 'translateX(-50%)',
        width: 800, height: 800, pointerEvents: 'none',
        background: 'radial-gradient(ellipse, rgba(127,119,221,0.13) 0%, transparent 70%)'
      }}></div>

      <div style={{ position: 'relative', zIndex: 1 }}>
        <div style={{
          display: 'inline-flex', alignItems: 'center', gap: 8,
          fontSize: 12, fontWeight: 600, fontFamily: 'DM Mono, monospace',
          color: '#7F77DD', background: 'rgba(127,119,221,0.12)',
          border: '1px solid rgba(127,119,221,0.25)', borderRadius: 999,
          padding: '5px 14px', marginBottom: 36, letterSpacing: '0.04em', textTransform: 'uppercase'
        }}>
          <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#7F77DD', animation: 'pulse 2s ease-in-out infinite' }}></span>
          Now in early access
        </div>

        <h1 style={{
          fontSize: 'clamp(40px, 6vw, 78px)', fontWeight: 700, lineHeight: 1.05,
          letterSpacing: '-0.025em', marginBottom: 24, color: '#fff'
        }}>
          Immigrants pay $5,000<br />in lawyer fees.<br />
          <span style={{
            background: 'linear-gradient(135deg, #7F77DD 0%, #a49fe8 100%)',
            WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text'
          }}>Then still get rejected.</span>
        </h1>

        <p style={{
          fontSize: 'clamp(16px, 2vw, 19px)', color: '#9995b3',
          maxWidth: 560, margin: '0 auto 48px', lineHeight: 1.65
        }}>
          Most rejections happen because of a missing signature, a wrong photo size, or an expired document — not because you didn't qualify. Naviko's AI catches every fixable error before you submit. For $49. Not $5,000.
        </p>

        <div style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap', marginBottom: 48 }}>
          <button onClick={onCTA} style={{
            fontFamily: 'DM Sans, sans-serif', fontSize: 15, fontWeight: 600,
            padding: '13px 28px', borderRadius: 999, background: '#7F77DD',
            color: '#fff', border: 'none', cursor: 'pointer',
            transition: 'opacity 0.2s, box-shadow 0.2s, transform 0.15s'
          }}
          onMouseEnter={e => { e.currentTarget.style.opacity='0.9'; e.currentTarget.style.boxShadow='0 4px 28px rgba(127,119,221,0.4)'; e.currentTarget.style.transform='translateY(-1px)'; }}
          onMouseLeave={e => { e.currentTarget.style.opacity='1'; e.currentTarget.style.boxShadow='none'; e.currentTarget.style.transform='none'; }}
          >Check my documents free</button>
          <button style={{
            fontFamily: 'DM Sans, sans-serif', fontSize: 15, fontWeight: 600,
            padding: '13px 28px', borderRadius: 999, background: 'transparent',
            color: '#9995b3', border: '1.5px solid rgba(127,119,221,0.18)', cursor: 'pointer',
            transition: 'color 0.2s, border-color 0.2s, transform 0.15s'
          }}
          onMouseEnter={e => { e.currentTarget.style.color='#fff'; e.currentTarget.style.borderColor='rgba(127,119,221,0.5)'; e.currentTarget.style.transform='translateY(-1px)'; }}
          onMouseLeave={e => { e.currentTarget.style.color='#9995b3'; e.currentTarget.style.borderColor='rgba(127,119,221,0.18)'; e.currentTarget.style.transform='none'; }}
          >Watch how it works</button>
        </div>

        <div style={{ display: 'flex', gap: 24, justifyContent: 'center', flexWrap: 'wrap' }}>
          {[
            { icon: '✓', text: 'Free to start' },
            { icon: '⊘', text: '30% of applications rejected for fixable errors' },
            { icon: '⊞', text: 'US & Canada visa coverage' },
          ].map(({ icon, text }) => (
            <div key={text} style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 12.5, color: '#9995b3', fontWeight: 500 }}>
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <circle cx="7" cy="7" r="6" stroke="#1D9E75" strokeWidth="1.5"/>
                <path d="M4.5 7l2 2 3-3" stroke="#1D9E75" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              {text}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

Object.assign(window, { Hero });
