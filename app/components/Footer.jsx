const LINKS = [
  { href: '#about', label: 'About' },
  { href: '#services', label: 'Services' },
  { href: '#work', label: 'Work' },
  { href: '#contact', label: 'Contact' },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="wrap footer-grid">
        <div className="footer-brand">
          <a className="brand" href="#home">
            stayfoolish<span aria-hidden="true">.</span>
          </a>
          <p>
            Web and blockchain developer. Building in public, one contract at a
            time.
          </p>
        </div>

        <nav className="footer-nav" aria-label="Footer">
          <p className="mono">Index</p>
          <ul>
            {LINKS.map((link) => (
              <li key={link.href}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="footer-meta">
          <p className="mono">Colophon</p>
          <p>Next.js, Instrument Serif, IBM Plex.</p>
          <a className="footer-top" href="#home">
            Back to top <span aria-hidden="true">&#8593;</span>
          </a>
        </div>
      </div>

      <div className="wrap footer-bottom">
        <p>
          &copy; {year} Krishna. All rights reserved.
        </p>
        <p>Designed and built by Krishna.</p>
      </div>
    </footer>
  );
}
