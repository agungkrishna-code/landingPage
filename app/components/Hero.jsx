import Image from 'next/image';

export default function Hero() {
  const year = new Date().getFullYear();

  return (
    <header className="hero" id="home">
      <div className="wrap hero-grid">
        <div className="hero-copy">
          <p className="eyebrow">
            <span>01</span> Web &amp; blockchain developer
          </p>

          <h1 className="hero-title">
            I build the interface
            <br />
            and the contract <em>behind it.</em>
          </h1>

          <p className="hero-sub">
            I am Krishna, a junior developer working across Next.js interfaces and
            Solidity contracts. I care about readable code, honest UX, and products
            that still work on a phone.
          </p>

          <div className="hero-actions">
            <a className="btn btn-primary" href="#work">
              See selected work
            </a>
            <a
              className="btn btn-ghost"
              href="mailto:agungkrishnananda@gmail.com?subject=Project%20inquiry"
            >
              Email Krishna
            </a>
          </div>

          <dl className="hero-facts" aria-label="Quick facts">
            <div>
              <dt className="fact-label">Projects</dt>
              <dd className="fact-num">10+</dd>
            </div>
            <div>
              <dt className="fact-label">EVM chains</dt>
              <dd className="fact-num">3</dd>
            </div>
            <div>
              <dt className="fact-label">Open source</dt>
              <dd className="fact-num">100%</dd>
            </div>
          </dl>
        </div>

        <div className="hero-visual">
          <div className="portrait-frame">
            <div className="portrait-arch">
              <Image
                className="portrait-img"
                src="/imgs/profile-removebg-preview.png"
                alt="Krishna wearing a Balinese udeng"
                width={400}
                height={440}
                priority
                sizes="(max-width: 860px) 78vw, 430px"
              />
            </div>
            <p className="portrait-badge">
              <span className="status-dot" aria-hidden="true" />
              Open for freelance and collaboration
            </p>
          </div>
          <p className="portrait-meta mono" aria-hidden="true">
            <span>Next.js</span>
            <span>Solidity</span>
            <span>EVM</span>
          </p>
        </div>
      </div>

      <div className="wrap hero-foot mono">
        <span>Portfolio / {year}</span>
        <a className="scroll-cue" href="#about">
          Scroll to read <span aria-hidden="true">&#8595;</span>
        </a>
      </div>
    </header>
  );
}
