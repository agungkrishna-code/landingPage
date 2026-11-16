import CopyEmail from './CopyEmail';

const socials = [
  {
    label: 'GitHub',
    href: 'https://github.com/agungkrishna-code',
    handle: 'agungkrishna-code',
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/dewa-gede-agung-krishnananda-sudewa-790433223/',
    handle: 'Krishna Sudewa',
  },
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/agungkrishnananda',
    handle: '@agungkrishnananda',
  },
];

export default function Contact() {
  return (
    <section className="contact on-dark" id="contact">
      <div className="wrap contact-grid">
        <div className="contact-main">
          <p className="section-label contact-label">Contact</p>
          <h2 className="section-title contact-title">
            Tell me what you are building.
          </h2>
          <p className="contact-lead" lang="id">
            Saya terbuka untuk proyek freelance, posisi junior, dan kolaborasi
            di bidang web dan produk on-chain. Email adalah cara tercepat untuk
            menghubungi saya.
          </p>

          <a
            className="contact-email"
            href="mailto:agungkrishnananda@gmail.com?subject=Hello%20Krishna"
          >
            agungkrishnananda@gmail.com
          </a>

          <div className="contact-actions">
            <CopyEmail />
          </div>
        </div>

        <div className="contact-side">
          <p className="section-label contact-side-label">Elsewhere</p>
          <ul className="contact-links">
            {socials.map((social) => (
              <li key={social.label}>
                <a
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span>{social.label}</span>
                  <span className="contact-handle">{social.handle}</span>
                  <svg
                    className="contact-arrow"
                    width="13"
                    height="13"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M7 17L17 7M8 7h9v9" />
                  </svg>
                  <span className="sr-only"> (opens in a new tab)</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}