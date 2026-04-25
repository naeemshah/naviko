// Pricing.jsx — Pricing section
const Pricing = ({ onCTA }) => {
  return (
    <section style={{ padding: '100px 0' }}>
      <div style={{ maxWidth: 1120, margin: '0 auto', padding: '0 32px' }}>
        <div style={{ textAlign: 'center', marginBottom: 56 }}>
          <div style={{ fontFamily: 'DM Mono, monospace', fontSize: 11, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#7F77DD', marginBottom: 16 }}>Pricing</div>
          <h2 style={{ fontSize: 'clamp(26px,3.5vw,42px)', fontWeight: 700, letterSpacing: '-0.02em', lineHeight: 1.1, marginBottom: 16 }}>Transparent pricing.<br/>No retainer. No surprises.</h2>
          <p style={{ fontSize: 17, color: '#9995b3', maxWidth: 480, margin: '0 auto' }}>Immigration lawyers charge $3,000–$8,000 for document review. Naviko charges $49. The checklist is free.</p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20, maxWidth: 760, margin: '0 auto' }}>
          <PricingCard
            tier="Starter" price="Free" cadence="No credit card required"
            desc="Understand exactly what you need before you gather anything."
            features={[
              { text: 'Complete document checklist for your visa type', included: true },
              { text: 'Plain-language explanation of every requirement', included: true },
              { text: 'Tap-to-learn detail on every checklist item', included: true },
              { text: 'US and Canada visa coverage', included: true },
              { text: 'AI document scan', included: false },
              { text: 'Green-light confirmation', included: false },
            ]}
            btnLabel="Start free" btnStyle="ghost" onCTA={onCTA}
          />
          <PricingCard
            tier="Verified" price="$49" cadence="per application · one-time"
            desc="AI verification so you submit knowing every document is correct."
            features={[
              { text: 'Everything in Starter', included: true },
              { text: 'AI scan of every uploaded document', included: true },
              { text: 'Expiry date detection and alerts', included: true },
              { text: 'Photo & biometric specification check', included: true },
              { text: 'Name consistency cross-check', included: true },
              { text: 'Green-light readiness confirmation', included: true },
            ]}
            btnLabel="Get verified for $49" btnStyle="primary" isPro onCTA={onCTA}
          />
        </div>
        <p style={{ textAlign: 'center', fontSize: 12.5, color: '#9995b3', maxWidth: 580, margin: '32px auto 0', lineHeight: 1.7, opacity: 0.8 }}>
          Naviko is not a law firm and does not provide legal advice. AI guidance is not a substitute for professional legal counsel.
        </p>
      </div>
    </section>
  );
};

const PricingCard = ({ tier, price, cadence, desc, features, btnLabel, btnStyle, isPro, onCTA }) => {
  const [hovered, setHovered] = React.useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: '#231f3a',
        border: isPro ? '1px solid #7F77DD' : '1px solid rgba(127,119,221,0.18)',
        borderRadius: 20, padding: 40, position: 'relative',
        boxShadow: isPro ? '0 0 40px rgba(127,119,221,0.15)' : 'none',
        transform: hovered ? 'translateY(-3px)' : 'none',
        transition: 'transform 0.2s'
      }}>
      {isPro && (
        <div style={{
          position: 'absolute', top: -13, left: '50%', transform: 'translateX(-50%)',
          fontSize: 11, fontWeight: 700, fontFamily: 'DM Mono, monospace',
          color: '#0f0e17', background: '#7F77DD', borderRadius: 999,
          padding: '4px 14px', letterSpacing: '0.06em', textTransform: 'uppercase', whiteSpace: 'nowrap'
        }}>Most popular</div>
      )}
      <div style={{ fontFamily: 'DM Mono, monospace', fontSize: 12, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em', color: isPro ? '#7F77DD' : '#9995b3', marginBottom: 12 }}>{tier}</div>
      <div style={{ fontSize: 38, fontWeight: 700, letterSpacing: '-1.5px', marginBottom: 6 }}>
        {price === 'Free' ? 'Free' : <><sup style={{ fontSize: 18, verticalAlign: 'super', fontWeight: 600 }}>$</sup>49</>}
      </div>
      <div style={{ fontSize: 13, color: '#9995b3', marginBottom: 24 }}>{cadence}</div>
      <p style={{ fontSize: 13.5, color: '#9995b3', marginBottom: 28, lineHeight: 1.6 }}>{desc}</p>
      <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: 12, marginBottom: 32 }}>
        {features.map((f, i) => (
          <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 10, fontSize: 13.5, color: f.included ? '#fff' : '#9995b3', lineHeight: 1.5 }}>
            {f.included ? (
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" style={{ flexShrink: 0, marginTop: 2 }}><circle cx="8" cy="8" r="7" stroke="#1D9E75" strokeWidth="1.3"/><path d="M5 8l2.5 2.5L11 5.5" stroke="#1D9E75" strokeWidth="1.3" strokeLinecap="round"/></svg>
            ) : (
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" style={{ flexShrink: 0, marginTop: 2 }}><circle cx="8" cy="8" r="7" stroke="#9995b3" strokeWidth="1.3" strokeDasharray="2 2"/></svg>
            )}
            {f.text}
          </li>
        ))}
      </ul>
      <button onClick={onCTA} style={{
        width: '100%', fontFamily: 'DM Sans, sans-serif', fontSize: 14, fontWeight: 600,
        padding: '12px', borderRadius: 999, cursor: 'pointer',
        background: btnStyle === 'primary' ? '#7F77DD' : 'transparent',
        color: btnStyle === 'primary' ? '#fff' : '#9995b3',
        border: btnStyle === 'primary' ? 'none' : '1.5px solid rgba(127,119,221,0.25)'
      }}>{btnLabel}</button>
    </div>
  );
};

Object.assign(window, { Pricing });
