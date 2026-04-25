// Nav.jsx — Naviko website navigation
const Nav = ({ onCTA }) => {
  const [scrolled, setScrolled] = React.useState(false);
  const [mobileOpen, setMobileOpen] = React.useState(false);

  React.useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', fn);
    return () => window.removeEventListener('scroll', fn);
  }, []);

  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
      background: scrolled ? 'rgba(15,14,23,0.92)' : 'rgba(15,14,23,0.7)',
      backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)',
      borderBottom: '1px solid rgba(127,119,221,0.18)',
      transition: 'background 0.3s'
    }}>
      <div style={{
        maxWidth: 1120, margin: '0 auto', padding: '0 32px',
        height: 64, display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 24
      }}>
        <a href="#" style={{ position: 'relative', display: 'inline-block', textDecoration: 'none' }}>
          <span style={{ fontSize: 20, fontWeight: 700, letterSpacing: '-0.5px', color: '#fff', fontFamily: 'DM Sans, sans-serif' }}>Naviko</span>
          <span style={{ display: 'block', position: 'absolute', bottom: -2, left: 0, right: 0, height: 2.5, background: '#7F77DD', borderRadius: 2 }}></span>
        </a>

        <ul style={{ display: 'flex', gap: 36, listStyle: 'none', margin: 0, padding: 0 }} className="nav-links-desktop">
          {['How it works', 'Pricing', 'For Consultants'].map(link => (
            <li key={link}>
              <a href={`#${link.toLowerCase().replace(/\s+/g, '-')}`} style={{
                fontSize: 14, fontWeight: 500, color: '#9995b3', textDecoration: 'none',
                transition: 'color 0.2s'
              }}
              onMouseEnter={e => e.target.style.color='#fff'}
              onMouseLeave={e => e.target.style.color='#9995b3'}
              >{link}</a>
            </li>
          ))}
        </ul>

        <button onClick={onCTA} style={{
          fontFamily: 'DM Sans, sans-serif', fontSize: 13, fontWeight: 600,
          padding: '8px 18px', borderRadius: 999, border: '1.5px solid #7F77DD',
          color: '#fff', background: 'transparent', cursor: 'pointer',
          transition: 'background 0.2s, box-shadow 0.2s', whiteSpace: 'nowrap'
        }}
        onMouseEnter={e => { e.target.style.background='rgba(127,119,221,0.12)'; e.target.style.boxShadow='0 0 18px rgba(127,119,221,0.25)'; }}
        onMouseLeave={e => { e.target.style.background='transparent'; e.target.style.boxShadow='none'; }}
        >Get early access</button>
      </div>
    </nav>
  );
};

Object.assign(window, { Nav });
