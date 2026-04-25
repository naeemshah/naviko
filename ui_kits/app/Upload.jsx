// Upload.jsx — Document upload screen with AI scan states
const UPLOAD_DOCS = [
  { id: 1, name: 'Passport (all pages)', state: 'done', result: 'pass' },
  { id: 2, name: 'I-797 Approval Notice', state: 'done', result: 'pass' },
  { id: 3, name: 'DS-160 Confirmation', state: 'scanning', result: null },
  { id: 4, name: 'Passport photo', state: 'idle', result: null },
  { id: 5, name: 'Employment offer letter', state: 'idle', result: null },
];

const UploadRow = ({ doc }) => {
  const [dragging, setDragging] = React.useState(false);

  if (doc.state === 'done') {
    return (
      <div style={{ display: 'flex', alignItems: 'center', gap: 12, background: '#231f3a', border: `1px solid ${doc.result === 'pass' ? 'rgba(29,158,117,0.25)' : 'rgba(239,68,68,0.25)'}`, borderRadius: 12, padding: '12px 14px' }}>
        <div style={{ width: 36, height: 36, borderRadius: 8, background: doc.result === 'pass' ? 'rgba(29,158,117,0.12)' : 'rgba(239,68,68,0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
          {doc.result === 'pass'
            ? <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><circle cx="8" cy="8" r="7" stroke="#1D9E75" strokeWidth="1.3"/><path d="M5 8l2.5 2.5L11 5.5" stroke="#1D9E75" strokeWidth="1.3" strokeLinecap="round"/></svg>
            : <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><circle cx="8" cy="8" r="7" stroke="#f87171" strokeWidth="1.3"/><path d="M5.5 5.5l5 5M10.5 5.5l-5 5" stroke="#f87171" strokeWidth="1.3" strokeLinecap="round"/></svg>
          }
        </div>
        <div style={{ flex: 1 }}>
          <div style={{ fontSize: 13.5, fontWeight: 500, color: '#fff' }}>{doc.name}</div>
          <div style={{ fontSize: 11, color: doc.result === 'pass' ? '#1D9E75' : '#f87171', marginTop: 2 }}>{doc.result === 'pass' ? 'All checks passed' : 'Signature page missing'}</div>
        </div>
        <span style={{ fontFamily: 'DM Mono, monospace', fontSize: 10, fontWeight: 600, padding: '2px 8px', borderRadius: 999, background: doc.result === 'pass' ? 'rgba(29,158,117,0.12)' : 'rgba(239,68,68,0.12)', color: doc.result === 'pass' ? '#1D9E75' : '#f87171', border: `1px solid ${doc.result === 'pass' ? 'rgba(29,158,117,0.3)' : 'rgba(239,68,68,0.3)'}` }}>{doc.result === 'pass' ? 'Pass' : 'Fix This'}</span>
      </div>
    );
  }

  if (doc.state === 'scanning') {
    return (
      <div style={{ display: 'flex', alignItems: 'center', gap: 12, background: '#231f3a', border: '1px solid rgba(127,119,221,0.25)', borderRadius: 12, padding: '12px 14px' }}>
        <div style={{ width: 36, height: 36, borderRadius: 8, background: 'rgba(127,119,221,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
          <div style={{ width: 16, height: 16, border: '2px solid rgba(127,119,221,0.2)', borderTopColor: '#7F77DD', borderRadius: '50%', animation: 'spin 0.8s linear infinite' }}></div>
        </div>
        <div style={{ flex: 1 }}>
          <div style={{ fontSize: 13.5, fontWeight: 500, color: '#fff' }}>{doc.name}</div>
          <div style={{ fontSize: 11, color: '#7F77DD', marginTop: 2 }}>AI scanning…</div>
        </div>
        <span style={{ fontFamily: 'DM Mono, monospace', fontSize: 10, fontWeight: 600, padding: '2px 8px', borderRadius: 999, background: 'rgba(127,119,221,0.12)', color: '#7F77DD', border: '1px solid rgba(127,119,221,0.25)' }}>Scanning</span>
      </div>
    );
  }

  // idle — upload zone
  return (
    <div
      onDragOver={e => { e.preventDefault(); setDragging(true); }}
      onDragLeave={() => setDragging(false)}
      onDrop={() => setDragging(false)}
      style={{
        border: `2px dashed ${dragging ? '#7F77DD' : 'rgba(127,119,221,0.2)'}`,
        borderRadius: 12, padding: '14px 16px', background: dragging ? 'rgba(127,119,221,0.08)' : 'transparent',
        cursor: 'pointer', transition: 'all 0.2s', display: 'flex', alignItems: 'center', gap: 12
      }}>
      <div style={{ width: 36, height: 36, borderRadius: 8, background: 'rgba(127,119,221,0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M8 11V5M5.5 7.5L8 5l2.5 2.5" stroke="#7F77DD" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/><rect x="2" y="2" width="12" height="12" rx="3" stroke="#7F77DD" strokeWidth="1.3"/></svg>
      </div>
      <div style={{ flex: 1 }}>
        <div style={{ fontSize: 13.5, fontWeight: 500, color: '#fff' }}>{doc.name}</div>
        <div style={{ fontSize: 11, color: '#9995b3', marginTop: 2 }}>Tap to upload or drag & drop</div>
      </div>
      <span style={{ fontFamily: 'DM Mono, monospace', fontSize: 10, color: '#9995b3', padding: '2px 8px', borderRadius: 999, background: 'rgba(153,149,179,0.08)', border: '1px solid rgba(153,149,179,0.15)' }}>Missing</span>
    </div>
  );
};

const Upload = ({ onNext, onBack }) => (
  <div style={{ flex: 1, overflowY: 'auto', padding: '20px 16px 32px' }}>
    <div style={{ marginBottom: 20 }}>
      <h2 style={{ fontSize: 20, fontWeight: 700, letterSpacing: '-0.3px', marginBottom: 8 }}>Upload your documents</h2>
      <p style={{ fontSize: 14, color: '#9995b3', lineHeight: 1.6 }}>Upload each document. Our AI will scan it instantly against the H-1B requirements.</p>
    </div>

    <div style={{ display: 'flex', flexDirection: 'column', gap: 8, marginBottom: 24 }}>
      {UPLOAD_DOCS.map(doc => <UploadRow key={doc.id} doc={doc} />)}
    </div>

    <div style={{ background: '#231f3a', border: '1px solid rgba(127,119,221,0.15)', borderRadius: 14, padding: '14px 16px', marginBottom: 24, display: 'flex', gap: 12, alignItems: 'flex-start' }}>
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" style={{ flexShrink: 0, marginTop: 1 }}><circle cx="9" cy="9" r="8" stroke="#7F77DD" strokeWidth="1.3"/><path d="M9 6v4M9 12v.5" stroke="#7F77DD" strokeWidth="1.5" strokeLinecap="round"/></svg>
      <p style={{ fontSize: 12.5, color: '#9995b3', lineHeight: 1.6 }}>2 of 5 documents uploaded. DS-160 scan in progress. Upload remaining documents to proceed.</p>
    </div>

    <button onClick={onNext} style={{
      width: '100%', fontFamily: 'DM Sans, sans-serif', fontSize: 15, fontWeight: 600,
      padding: '14px', borderRadius: 999, background: 'rgba(127,119,221,0.25)', color: '#9995b3', border: 'none', cursor: 'not-allowed'
    }}>Continue to verify →</button>
    <p style={{ textAlign: 'center', fontSize: 11.5, color: '#9995b3', marginTop: 10, opacity: 0.7 }}>Upload all documents to proceed</p>
  </div>
);

Object.assign(window, { Upload });
