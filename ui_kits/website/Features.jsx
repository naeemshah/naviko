// Features.jsx — 2×2 feature grid section
const Features = () => {
  const features = [
    {
      title: 'Rules that are always current',
      body: 'Immigration rules change without announcement. Naviko monitors official government sources continuously — so your checklist reflects today\'s rules, not last year\'s blog post.',
      icon: (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
          <path d="M3 5h14M3 10h10M3 15h7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
          <circle cx="16" cy="14" r="3" stroke="currentColor" strokeWidth="1.5"/>
          <path d="M18.5 16.5l1.5 1.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        </svg>
      )
    },
    {
      title: 'AI that reads your documents the way an officer does',
      body: 'Our AI doesn\'t just check that a file uploaded. It reads names, dates, formats, authorities — and cross-references them against the exact criteria for your visa type.',
      icon: (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
          <rect x="3" y="2" width="14" height="16" rx="2" stroke="currentColor" strokeWidth="1.5"/>
          <path d="M7 7h6M7 10h6M7 13h4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
          <circle cx="15" cy="15" r="4" fill="#7F77DD"/>
          <path d="M13.5 15l1 1 2-2" stroke="#fff" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    {
      title: 'A green light you can actually trust',
      body: 'Naviko\'s readiness indicator is not a progress bar. Every item on your checklist has a status. When every status is green, your application is ready.',
      icon: (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
          <circle cx="10" cy="10" r="8" stroke="currentColor" strokeWidth="1.5"/>
          <path d="M7 10l2.5 2.5L13 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    {
      title: 'Guidance you understand — not legal jargon',
      body: 'Every requirement explained in plain language. Every document has a detailed guide: what it is, why it\'s needed, what it must contain, and the most common rejection reasons.',
      icon: (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
          <path d="M10 2L4 5v5c0 4 2.67 7.27 6 8 3.33-.73 6-4 6-8V5l-6-3z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
          <path d="M7.5 10l2 2 3-3" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    }
  ];

  return (
    <section style={{ padding: '100px 0' }}>
      <div style={{ maxWidth: 1120, margin: '0 auto', padding: '0 32px' }}>
        <div style={{ fontFamily: 'DM Mono, monospace', fontSize: 11, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#7F77DD', marginBottom: 16 }}>Why Naviko works</div>
        <h2 style={{ fontSize: 'clamp(26px,3.5vw,40px)', fontWeight: 700, letterSpacing: '-0.02em', lineHeight: 1.15, marginBottom: 16 }}>Everything a $400/hour lawyer checks.<br/>For $49.</h2>
        <p style={{ fontSize: 17, color: '#9995b3', maxWidth: 560, marginBottom: 56 }}>Immigration lawyers charge for document review on simple applications — and that's exactly what AI is built for.</p>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
          {features.map((f, i) => <FeatureCard key={i} feature={f} />)}
        </div>
      </div>
    </section>
  );
};

const FeatureCard = ({ feature }) => {
  const [hovered, setHovered] = React.useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: hovered ? '#2c2750' : '#231f3a',
        border: `1px solid ${hovered ? 'rgba(127,119,221,0.32)' : 'rgba(127,119,221,0.18)'}`,
        borderRadius: 20, padding: 36,
        transform: hovered ? 'translateY(-2px)' : 'none',
        transition: 'all 0.25s', position: 'relative', overflow: 'hidden'
      }}>
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0, height: 1,
        background: 'linear-gradient(90deg, transparent, rgba(127,119,221,0.5), transparent)',
        opacity: hovered ? 1 : 0, transition: 'opacity 0.3s'
      }}></div>
      <div style={{
        width: 44, height: 44, background: 'rgba(127,119,221,0.12)', borderRadius: 12,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        marginBottom: 24, color: '#7F77DD'
      }}>{feature.icon}</div>
      <h3 style={{ fontSize: 18, fontWeight: 700, letterSpacing: '-0.3px', marginBottom: 12 }}>{feature.title}</h3>
      <p style={{ fontSize: 14.5, color: '#9995b3', lineHeight: 1.65 }}>{feature.body}</p>
    </div>
  );
};

Object.assign(window, { Features });
