// AppNav.jsx — Mobile app navigation bar with progress
const AppNav = ({ step, totalSteps, onBack, title }) => {
  const steps = ['Checklist', 'Upload', 'Verify', 'Green Light'];
  return (
    <div style={{ background: 'rgba(15,14,23,0.95)', backdropFilter: 'blur(20px)', borderBottom: '1px solid rgba(127,119,221,0.12)', padding: '0 16px' }}>
      <div style={{ height: 52, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        {onBack ? (
          <button onClick={onBack} style={{ background: 'transparent', border: 'none', cursor: 'pointer', color: '#7F77DD', padding: '8px 0', display: 'flex', alignItems: 'center', gap: 4, fontSize: 14, fontFamily: 'DM Sans, sans-serif', fontWeight: 500 }}>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M10 3L5 8l5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
            Back
          </button>
        ) : (
          <div style={{ position: 'relative', display: 'inline-block' }}>
            <span style={{ fontSize: 16, fontWeight: 700, color: '#fff', letterSpacing: '-0.3px' }}>Naviko</span>
            <span style={{ display: 'block', position: 'absolute', bottom: -1, left: 0, right: 0, height: 2, background: '#7F77DD', borderRadius: 2 }}></span>
          </div>
        )}
        <span style={{ fontSize: 15, fontWeight: 600, color: '#fff' }}>{title}</span>
        <div style={{ fontFamily: 'DM Mono, monospace', fontSize: 11, color: '#9995b3' }}>{step}/{totalSteps}</div>
      </div>
      {/* Progress bar */}
      <div style={{ height: 2, background: 'rgba(127,119,221,0.12)', marginBottom: 0, borderRadius: 1 }}>
        <div style={{ height: '100%', background: step === totalSteps ? '#1D9E75' : '#7F77DD', borderRadius: 1, width: `${(step / totalSteps) * 100}%`, transition: 'width 0.4s ease, background 0.4s ease' }}></div>
      </div>
    </div>
  );
};

Object.assign(window, { AppNav });
