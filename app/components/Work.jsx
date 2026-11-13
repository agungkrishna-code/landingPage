import Image from 'next/image';

function DefiConcept() {
  return (
    <svg
      viewBox="0 0 640 360"
      role="img"
      aria-label="Abstract concept sketch of a liquidity curve with two position markers"
      preserveAspectRatio="xMidYMid slice"
    >
      <rect width="640" height="360" fill="var(--paper-2)" />
      <g fill="none" stroke="var(--line-strong)">
        <path d="M70 300h500M70 300V64" />
        <path d="M70 230h500" strokeDasharray="2 6" opacity=".55" />
        <path d="M70 160h500" strokeDasharray="2 6" opacity=".55" />
      </g>
      <path
        d="M70 300C196 300 214 92 570 92"
        fill="none"
        stroke="var(--pine)"
        strokeWidth="1.6"
      />
      <circle cx="250" cy="218" r="5" fill="var(--copper)" />
      <circle cx="428" cy="130" r="5" fill="var(--pine)" />
      <g stroke="var(--copper)" strokeWidth="1">
        <path d="M250 218v-58" strokeDasharray="2 4" />
        <path d="M428 130v-46" strokeDasharray="2 4" />
      </g>
      <g fill="var(--copper)">
        <rect x="230" y="145" width="112" height="42" rx="1" fill="var(--surface)" stroke="var(--line)" />
        <text
          x="242"
          y="163"
          fill="var(--muted)"
          fontFamily="var(--font-mono)"
          fontSize="10"
          letterSpacing=".8"
        >
          POSITION
        </text>
        <text
          x="242"
          y="178"
          fill="var(--ink)"
          fontFamily="var(--font-mono)"
          fontSize="11"
          letterSpacing=".6"
        >
          POOL A
        </text>
      </g>
      <g fill="var(--muted)" fontFamily="var(--font-mono)" fontSize="10" letterSpacing="1.2">
        <text x="70" y="330">LIQUIDITY</text>
        <text x="516" y="330">PRICE</text>
      </g>
      <path
        d="M548 70l14 0 0 14"
        fill="none"
        stroke="var(--line-strong)"
        strokeWidth="1.2"
      />
    </svg>
  );
}

function NftConcept() {
  const tokens = [0, 1, 2, 3, 4];

  return (
    <svg
      viewBox="0 0 640 360"
      role="img"
      aria-label="Abstract concept sketch of a token grid with one minted token"
      preserveAspectRatio="xMidYMid slice"
    >
      <rect width="640" height="360" fill="var(--paper-2)" />
      <rect
        x="66"
        y="152"
        width="46"
        height="46"
        rx="2"
        fill="var(--surface)"
        stroke="var(--line-strong)"
      />
      <path
        d="M112 175h54"
        stroke="var(--copper)"
        strokeWidth="1.2"
        strokeDasharray="3 5"
      />
      <g>
        {tokens.map((token) => {
          const x = 196 + token * 84;
          const minted = token === 2;
          return (
            <g key={token}>
              <path
                d={`M${x} 194v-44a32 32 0 0 1 64 0v44z`}
                fill={minted ? 'var(--pine)' : 'var(--surface)'}
                stroke={minted ? 'var(--pine)' : 'var(--line-strong)'}
                strokeWidth="1.2"
              />
              <circle
                cx={x + 32}
                cy="148"
                r="7"
                fill="none"
                stroke={minted ? 'var(--paper)' : 'var(--line-strong)'}
                strokeWidth="1.2"
              />
            </g>
          );
        })}
      </g>
      <path
        d="M196 216h384"
        stroke="var(--line-strong)"
        strokeWidth="1"
      />
      <g fill="var(--muted)" fontFamily="var(--font-mono)" fontSize="10" letterSpacing="1.2">
        <text x="66" y="330">TOKEN GRID</text>
        <text x="520" y="330">MINT</text>
      </g>
    </svg>
  );
}

export default function Work() {
  return (
    <section className="section work" id="work">
      <div className="wrap">
        <div className="section-head">
          <div>
            <p className="eyebrow">
              <span>04</span> Selected work
            </p>
            <h2 className="section-title">
              Work, and the ideas
              <br />
              <em>around it.</em>
            </h2>
          </div>
          <p className="section-intro">
            One public project, two concepts in progress. Nothing here pretends to
            be more finished than it is.
          </p>
        </div>

        <a
          className="feature"
          href="https://github.com/agungkrishna-code/shitcoin_source_documentary"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="feature-media">
            <div className="coin">
              <Image
                src="/imgs/shitcoin.jpeg"
                alt="Shitcoin token coin artwork"
                width={400}
                height={400}
                sizes="(max-width: 860px) 52vw, 274px"
              />
            </div>
          </div>
          <div className="feature-body">
            <p className="mono project-meta">Featured project / Open source</p>
            <h3>Shitcoin Documentary</h3>
            <p>
              Research and open-source documentation that traces a meme token from
              launch to aftermath. Contracts, sources, and notes are public.
            </p>
            <ul className="tags" aria-label="Project topics">
              <li>Research</li>
              <li>Documentation</li>
              <li>Blockchain</li>
            </ul>
            <span className="feature-cta">
              Read the repository
              <svg
                width="15"
                height="15"
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
            </span>
          </div>
        </a>

        <div className="concept-head">
          <h3 className="mono">Concept studies</h3>
          <p>Personal explorations, not shipped products.</p>
        </div>

        <div className="concept-grid">
          <article className="concept">
            <div className="concept-visual">
              <DefiConcept />
            </div>
            <div className="concept-body">
              <p className="mono">Concept / DeFi</p>
              <h3>DeFi Dashboard</h3>
              <p>
                A reading layer for liquidity positions and pool activity. Still a
                concept, with no public demo yet.
              </p>
            </div>
          </article>

          <article className="concept">
            <div className="concept-visual">
              <NftConcept />
            </div>
            <div className="concept-body">
              <p className="mono">Concept / NFT</p>
              <h3>NFT Minting dApp</h3>
              <p>
                A small minting flow built around clear steps and readable wallet
                states. Also still in the sketch stage.
              </p>
            </div>
          </article>
        </div>

        <p className="work-note">
          The build log lives on GitHub.{' '}
          <a
            className="text-link"
            href="https://github.com/agungkrishna-code"
            target="_blank"
            rel="noopener noreferrer"
          >
            Follow along
            <span aria-hidden="true">&#8599;</span>
            <span className="sr-only"> (opens in a new tab)</span>
          </a>
        </p>
      </div>
    </section>
  );
}
