// GreenLight.jsx — The signature product moment
const GreenLight = ({ onDone }) => {
  const [phase, setPhase] = React.useState('processing'); // processing → ready
  
  React.useEffect(() => {
    const t = setTimeout(() => setPhase('ready'), 2200);
    return () => clearTimeout(t);
  }, []);

  const isReady = phase === 'ready';

  return (
    <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '32px 24px', textAlign: 'center' }}>
      {/* The green light orb */}
      <div style={{ position: 'relative', marginBottom: 32 }}>
        {/* Outer glow ring */}
        {isReady && (
          <div style={{
            position: 'absolute', inset: -16, borderRadius: '50%',
            border: '2px solid rgba(29,158,117,0.3)',
            animation: 'pulse-ring 2s ease-out infinite'
          }}></div>
        )}
        {/* Main circle */}
        <div style={{
          width: 120, height: 120, borderRadius: '50%',
          background: isReady ? 'rgba(29,158,117,0.15)' : 'rgba(127,119,221,0.1)',
          border: `2px solid ${isReady ? '#1D9E75' : 'rgba(127,119,221,0.4)'}`,
          boxShadow: isReady ? '0 0 48px rgba(29,158,117,0.35)' : '0 0 32px rgba(127,119,221,0.2)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          transition: 'all 0.8s ease'
        }}>
          {isReady ? (
            <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
              <circle cx="24" cy="24" r="18" fill="rgba(29,158,117,0.2)"/>
              <path d="M15 24l7 7 11-11" stroke="#1D9E75" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          ) : (
            <div style={{ width: 36, height: 36, border: '3px solid rgba(127,119,221,0.2)', borderTopColor: '#7F77DD', borderRadius: '50%', animation: 'spin 0.9s linear infinite' }}></div>
          )}
        </div>
      </div>

      {/* Status text */}
      <div style={{ marginBottom: 8 }}>
        <div style={{ fontFamily: 'DM Mono, monospace', fontSize: 11, textTransform: 'uppercase', letterSpacing: '0.1em', color: isReady ? '#1D9E75' : '#7F77DD', marginBottom: 12, transition: 'color 0.5s' }}>
          {isReady ? 'All checks passed' : 'Scanning documents…'}
        </div>
        <h2 style={{ fontSize: 26, fontWeight: 700, letterSpacing: '-0.4px', lineHeight: 1.2, color: '#fff', marginBottom: 12, transition: 'opacity 0.5s' }}>
          {isReady ? 'Green light.' : 'Verifying your\napplication…'}
        </h2>
        <p style={{ fontSize: 14.5, color: '#9995b3', lineHeight: 1.65, maxWidth: 280, margin: '0 auto' }}>
          {isReady
            ? 'Every document in your H-1B application has passed AI verification. You\'re ready to submit.'
            : 'Our AI is checking each document against the latest USCIS requirements.'
          }
        </p>
      </div>

      {/* Document breakdown */}
      {isReady && (
        <div style={{ width: '100%', background: '#231f3a', border: '1px solid rgba(29,158,117,0.2)', borderRadius: 16, padding: '16px 20px', marginTop: 24, marginBottom: 28 }}>
          {['Passport (all pages)', 'I-797 Approval Notice', 'DS-160 Confirmation', 'Passport photo', 'Employment offer letter'].map((doc, i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 10, paddingVertical: 4, padding: '5px 0', borderBottom: i < 4 ? '1px solid rgba(127,119,221,0.08)' : 'none' }}>
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" style={{ flexShrink: 0 }}><circle cx="7" cy="7" r="6" stroke="#1D9E75" strokeWidth="1.2"/><path d="M4.5 7l2 2 3-3" stroke="#1D9E75" strokeWidth="1.2" strokeLinecap="round"/></svg>
              <span style={{ flex: 1, fontSize: 12.5, color: '#fff', textAlign: 'left' }}>{doc}</span>
              <span style={{ fontFamily: 'DM Mono, monospace', fontSize: 10, color: '#1D9E75' }}>Pass</span>
            </div>
          ))}
        </div>
      )}

      {isReady && (
        <button onClick={onDone} style={{
          width: '100%', fontFamily: 'DM Sans, sans-serif', fontSize: 15, fontWeight: 600,
          padding: '14px', borderRadius: 999, background: '#1D9E75', color: '#fff', border: 'none', cursor: 'pointer',
          boxShadow: '0 4px 24px rgba(29,158,117,0.3)'
        }}>Download verified summary</button>
      )}
    </div>
  );
};

Object.assign(window, { GreenLight });
