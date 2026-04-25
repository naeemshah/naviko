// Footer.jsx — Naviko website footer
const Footer = () => (
  <footer style={{ background: '#0f0e17', borderTop: '1px solid rgba(127,119,221,0.18)', padding: '56px 0 40px' }}>
    <div style={{ maxWidth: 1120, margin: '0 auto', padding: '0 32px' }}>
      <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 40, flexWrap: 'wrap', marginBottom: 40 }}>
        <div style={{ maxWidth: 280 }}>
          <div style={{ position: 'relative', display: 'inline-block', marginBottom: 10 }}>
            <span style={{ fontSize: 18, fontWeight: 700, letterSpacing: '-0.5px', color: '#fff' }}>Naviko</span>
            <span style={{ display: 'block', position: 'absolute', bottom: -2, left: 0, right: 0, height: 2.5, background: '#7F77DD', borderRadius: 2 }}></span>
          </div>
          <p style={{ fontSize: 13, color: '#9995b3', marginBottom: 8, lineHeight: 1.6 }}>AI-guided immigration compliance.</p>
          <p style={{ fontSize: 11.5, color: '#9995b3', opacity: 0.65, lineHeight: 1.6 }}>Naviko is not a law firm. Nothing on this platform constitutes legal advice. For complex immigration matters, consult a licensed attorney.</p>
        </div>
        <div style={{ display: 'flex', gap: 24, flexWrap: 'wrap', paddingTop: 4 }}>
          {['Privacy Policy', 'Terms of Service', 'AI Disclaimer', 'Contact'].map(l => (
            <a key={l} href="#" style={{ fontSize: 13, color: '#9995b3', textDecoration: 'none', transition: 'color 0.2s' }}
              onMouseEnter={e => e.target.style.color='#fff'}
              onMouseLeave={e => e.target.style.color='#9995b3'}
            >{l}</a>
          ))}
        </div>
      </div>
      <div style={{ paddingTop: 28, borderTop: '1px solid rgba(127,119,221,0.12)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16, flexWrap: 'wrap' }}>
        <div style={{ fontSize: 12, color: 'rgba(153,149,179,0.6)' }}>© 2026 Naviko. All rights reserved.</div>
        <div style={{ fontFamily: 'DM Mono, monospace', fontSize: 11, color: '#9995b3', background: 'rgba(127,119,221,0.10)', border: '1px solid rgba(127,119,221,0.2)', borderRadius: 999, padding: '4px 12px', opacity: 0.8 }}>Not legal advice — AI guidance only</div>
      </div>
    </div>
  </footer>
);

Object.assign(window, { Footer });
