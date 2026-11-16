export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="wrap footer-inner">
        <div className="footer-brand">
          <a className="brand" href="#home">
            Krishna
          </a>
          <p>Junior web + chain developer. Interface and contract.</p>
        </div>

        <div className="footer-meta">
          <p>Built with Next.js.</p>
          <p>&copy; {year} Krishna.</p>
        </div>

        <a className="footer-top" href="#home">
          Back to top <span aria-hidden="true">&#8593;</span>
        </a>
      </div>
    </footer>
  );
}