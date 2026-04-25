// Checklist.jsx — Visa selector + document checklist screen
const VISA_TYPES = ['US H-1B Work Visa', 'US F-1 Student Visa', 'Canada Express Entry', 'Canada Work Permit', 'Canada Study Permit'];

const H1B_CHECKLIST = [
  { id: 1, name: 'Passport (all pages)', status: 'pass' },
  { id: 2, name: 'I-797 Approval Notice', status: 'pass' },
  { id: 3, name: 'DS-160 Confirmation', status: 'fail', fixNote: 'Signature page missing' },
  { id: 4, name: 'Passport photo', status: 'fail', fixNote: 'Photo dimensions: 650×650px required' },
  { id: 5, name: 'Employment offer letter', status: 'missing' },
  { id: 6, name: 'Bank statements (3 months)', status: 'missing' },
  { id: 7, name: 'Educational credentials', status: 'missing' },
];

const statusConfig = {
  pass:    { bg: 'rgba(29,158,117,0.12)',  border: 'rgba(29,158,117,0.25)',  color: '#1D9E75', label: 'Pass' },
  fail:    { bg: 'rgba(239,68,68,0.12)',   border: 'rgba(239,68,68,0.25)',   color: '#f87171', label: 'Fix This' },
  missing: { bg: 'rgba(153,149,179,0.08)', border: 'rgba(153,149,179,0.15)', color: '#9995b3', label: 'Missing' },
};

const CheckIcon = ({ status }) => {
  if (status === 'pass') return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><circle cx="9" cy="9" r="8" fill="rgba(29,158,117,0.15)" stroke="#1D9E75" strokeWidth="1.3"/><path d="M6 9l2.5 2.5 4-4" stroke="#1D9E75" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/></svg>
  );
  if (status === 'fail') return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><circle cx="9" cy="9" r="8" fill="rgba(239,68,68,0.12)" stroke="#f87171" strokeWidth="1.3"/><path d="M6.5 6.5l5 5M11.5 6.5l-5 5" stroke="#f87171" strokeWidth="1.4" strokeLinecap="round"/></svg>
  );
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><circle cx="9" cy="9" r="8" stroke="#9995b3" strokeWidth="1.3" strokeDasharray="2.5 2.5"/></svg>
  );
};

const ChecklistItem = ({ item, expanded, onClick }) => {
  const cfg = statusConfig[item.status];
  return (
    <div onClick={onClick} style={{
      background: '#231f3a', border: `1px solid rgba(127,119,221,0.12)`,
      borderRadius: 12, padding: '12px 14px', cursor: 'pointer',
      transition: 'border-color 0.2s, background 0.2s',
    }}
    onMouseEnter={e => e.currentTarget.style.borderColor='rgba(127,119,221,0.28)'}
    onMouseLeave={e => e.currentTarget.style.borderColor='rgba(127,119,221,0.12)'}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
        <CheckIcon status={item.status} />
        <span style={{ flex: 1, fontSize: 14, fontWeight: 500, color: '#fff' }}>{item.name}</span>
        <span style={{
          fontFamily: 'DM Mono, monospace', fontSize: 10, fontWeight: 600,
          padding: '2px 8px', borderRadius: 999,
          background: cfg.bg, color: cfg.color, border: `1px solid ${cfg.border}`
        }}>{cfg.label}</span>
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" style={{ transform: expanded ? 'rotate(90deg)' : 'none', transition: 'transform 0.2s', flexShrink: 0 }}><path d="M5 3l4 4-4 4" stroke="#9995b3" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/></svg>
      </div>
      {expanded && item.fixNote && (
        <div style={{ marginTop: 10, paddingTop: 10, borderTop: '1px solid rgba(127,119,221,0.1)', fontSize: 12.5, color: '#f87171', lineHeight: 1.5 }}>
          ⚠ {item.fixNote}
        </div>
      )}
      {expanded && item.status === 'missing' && (
        <div style={{ marginTop: 10, paddingTop: 10, borderTop: '1px solid rgba(127,119,221,0.1)', fontSize: 12.5, color: '#9995b3', lineHeight: 1.5 }}>
          Tap to learn what this document needs to contain and where to get it.
        </div>
      )}
    </div>
  );
};

const Checklist = ({ onNext }) => {
  const [visa, setVisa] = React.useState('US H-1B Work Visa');
  const [expanded, setExpanded] = React.useState(null);
  const passCount = H1B_CHECKLIST.filter(i => i.status === 'pass').length;

  return (
    <div style={{ flex: 1, overflowY: 'auto', padding: '20px 16px 32px' }}>
      {/* Visa selector */}
      <div style={{ marginBottom: 20 }}>
        <div style={{ fontSize: 11, fontFamily: 'DM Mono, monospace', color: '#7F77DD', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 8 }}>Visa type</div>
        <select value={visa} onChange={e => setVisa(e.target.value)} style={{
          width: '100%', background: '#231f3a', border: '1.5px solid rgba(127,119,221,0.25)',
          borderRadius: 12, padding: '11px 14px', fontFamily: 'DM Sans, sans-serif',
          fontSize: 14, color: '#fff', outline: 'none', appearance: 'none',
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12' fill='none'%3E%3Cpath d='M3 4.5l3 3 3-3' stroke='%239995b3' stroke-width='1.3' stroke-linecap='round'/%3E%3C/svg%3E")`,
          backgroundRepeat: 'no-repeat', backgroundPosition: 'right 14px center'
        }}>
          {VISA_TYPES.map(v => <option key={v} value={v}>{v}</option>)}
        </select>
      </div>

      {/* Progress summary */}
      <div style={{ background: '#231f3a', border: '1px solid rgba(127,119,221,0.15)', borderRadius: 14, padding: '14px 16px', marginBottom: 16, display: 'flex', alignItems: 'center', gap: 14 }}>
        <div style={{ flex: 1 }}>
          <div style={{ fontSize: 13, fontWeight: 600, color: '#fff', marginBottom: 6 }}>{passCount} of {H1B_CHECKLIST.length} documents ready</div>
          <div style={{ height: 4, background: 'rgba(127,119,221,0.12)', borderRadius: 2 }}>
            <div style={{ height: '100%', width: `${(passCount/H1B_CHECKLIST.length)*100}%`, background: '#7F77DD', borderRadius: 2, transition: 'width 0.4s' }}></div>
          </div>
        </div>
        <div style={{ fontFamily: 'DM Mono, monospace', fontSize: 13, color: '#7F77DD', fontWeight: 600 }}>{Math.round((passCount/H1B_CHECKLIST.length)*100)}%</div>
      </div>

      {/* Items */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 8, marginBottom: 24 }}>
        {H1B_CHECKLIST.map(item => (
          <ChecklistItem key={item.id} item={item} expanded={expanded === item.id}
            onClick={() => setExpanded(expanded === item.id ? null : item.id)} />
        ))}
      </div>

      <button onClick={onNext} style={{
        width: '100%', fontFamily: 'DM Sans, sans-serif', fontSize: 15, fontWeight: 600,
        padding: '14px', borderRadius: 999, background: '#7F77DD', color: '#fff', border: 'none', cursor: 'pointer'
      }}>Upload documents →</button>
    </div>
  );
};

Object.assign(window, { Checklist });
