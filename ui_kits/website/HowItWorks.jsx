// HowItWorks.jsx — 3-step process section
const HowItWorks = () => {
  const steps = [
    {
      num: '01', tag: 'Dynamic checklist generated',
      title: 'Pick your visa. Get your exact checklist.',
      body: 'Tell Naviko which visa you\'re applying for. In seconds, you get a precise, plain-language checklist built from the latest USCIS and IRCC rules — not a generic template. Tap any item to understand what it requires and what the most common mistakes are.'
    },
    {
      num: '02', tag: 'AI scans for compliance',
      title: 'Upload your documents. Let AI do the checking.',
      body: 'Upload your passport, bank statements, employment letter, photos, transcripts. Our AI reads every file and checks it against the exact specification for your visa type. Every document gets a clear result: Pass, Fix This, or Missing — with an explanation you can act on.'
    },
    {
      num: '03', tag: 'Submit with confidence',
      title: 'Get your green light. Submit with confidence.',
      body: 'When every document passes — and only then — Naviko gives you a verified green light. A document-by-document confirmation that your application meets the requirements as of today.'
    }
  ];

  return (
    <section style={{ background: '#1a1730', padding: '100px 0' }}>
      <div style={{ maxWidth: 1120, margin: '0 auto', padding: '0 32px' }}>
        <div style={{ textAlign: 'center', marginBottom: 64 }}>
          <div style={{ fontFamily: 'DM Mono, monospace', fontSize: 11, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#7F77DD', marginBottom: 16 }}>The process</div>
          <h2 style={{ fontSize: 'clamp(28px,4vw,42px)', fontWeight: 700, letterSpacing: '-0.02em', lineHeight: 1.15, marginBottom: 16 }}>From panic to prepared —<br/>in three steps</h2>
          <p style={{ fontSize: 17, color: '#9995b3', maxWidth: 480, margin: '0 auto' }}>Most applicants spend weeks collecting documents with no idea if they're correct. Naviko compresses that into minutes.</p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 2 }}>
          {steps.map((step, i) => (
            <StepCard key={i} step={step} isFirst={i===0} isLast={i===2} />
          ))}
        </div>
      </div>
    </section>
  );
};

const StepCard = ({ step, isFirst, isLast }) => {
  const [hovered, setHovered] = React.useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: hovered ? '#2c2750' : '#231f3a',
        padding: '40px 32px',
        borderRadius: isFirst ? '20px 0 0 20px' : isLast ? '0 20px 20px 0' : 0,
        transition: 'background 0.2s'
      }}>
      <div style={{
        width: 40, height: 40, borderRadius: '50%', background: '#0f0e17',
        border: '1.5px solid rgba(127,119,221,0.25)', display: 'flex', alignItems: 'center',
        justifyContent: 'center', fontFamily: 'DM Mono, monospace', fontSize: 13,
        fontWeight: 700, color: '#7F77DD', marginBottom: 28
      }}>{step.num}</div>
      <h3 style={{ fontSize: 18, fontWeight: 700, letterSpacing: '-0.3px', marginBottom: 12 }}>{step.title}</h3>
      <p style={{ fontSize: 14, color: '#9995b3', lineHeight: 1.65 }}>{step.body}</p>
      <span style={{
        display: 'inline-block', marginTop: 20, fontSize: 11, fontFamily: 'DM Mono, monospace',
        color: '#1D9E75', background: 'rgba(29,158,117,0.12)', borderRadius: 999, padding: '3px 10px'
      }}>{step.tag}</span>
    </div>
  );
};

Object.assign(window, { HowItWorks });
