import Image from 'next/image';
import Stamp from './Stamp';

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
      <g className="concept-annotation" fill="var(--copper)">
        <rect
          x="230"
          y="145"
          width="112"
          height="42"
          rx="1"
          fill="var(--surface)"
          stroke="var(--line)"
        />
        <text
          x="242"
          y="163"
          fill="var(--muted)"
          fontFamily="var(--font-sans)"
          fontWeight="500"
          fontSize="10"
          letterSpacing=".8"
        >
          POSITION
        </text>
        <text
          x="242"
          y="178"
          fill="var(--ink)"
          fontFamily="var(--font-sans)"
          fontWeight="500"
          fontSize="11"
          letterSpacing=".6"
        >
          POOL A
        </text>
      </g>
      <g
        fill="var(--muted)"
        fontFamily="var(--font-sans)"
        fontWeight="500"
        fontSize="10"
        letterSpacing="1.2"
      >
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
      <g
        fill="var(--muted)"
        fontFamily="var(--font-sans)"
        fontWeight="500"
        fontSize="10"
        letterSpacing="1.2"
      >
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
        <div className="section-head section-head-split">
          <div>
            <p className="section-label">Work</p>
            <h2 className="section-title">Work, and the ideas around it.</h2>
          </div>
          <p className="section-intro" lang="id">
            Satu proyek publik. Dua studi konsep. Setiap label jujur soal
            statusnya.
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
                alt="Coin artwork for the Shitcoin Documentary project"
                width={400}
                height={400}
                sizes="(max-width: 640px) 78vw, (max-width: 860px) 46vw, 280px"
              />
            </div>
          </div>
          <div className="feature-body">
            <Stamp tone="pine">Public project</Stamp>
            <h3>Shitcoin Documentary</h3>
            <p lang="id">
              Riset dan dokumentasi open source yang melacak sebuah meme token
              dari launch sampai dampaknya. Repo publiknya bisa dibaca langsung.
            </p>
            <ul className="tags" aria-label="Project topics">
              <li>Research</li>
              <li>Documentation</li>
              <li>Open source</li>
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

        <p className="work-note" lang="id">
          Repo publik dan build log ada di{' '}
          <a
            className="text-link"
            href="https://github.com/agungkrishna-code"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
            <span aria-hidden="true">&#8599;</span>
            <span className="sr-only"> (opens in a new tab)</span>
          </a>
          .
        </p>

        <div className="concept-head">
          <p className="concept-label">Concept studies</p>
          <p lang="id">Sengaja belum di-ship.</p>
        </div>

        <div className="concept-grid">
          <article className="concept">
            <div className="concept-visual">
              <DefiConcept />
            </div>
            <div className="concept-body">
              <Stamp tone="copper">Concept</Stamp>
              <h3>DeFi Dashboard</h3>
              <p lang="id">
                Tampilan untuk membaca posisi likuiditas dan aktivitas pool.
                Masih konsep, belum ada demo publik.
              </p>
            </div>
          </article>

          <article className="concept">
            <div className="concept-visual">
              <NftConcept />
            </div>
            <div className="concept-body">
              <Stamp tone="copper">Concept</Stamp>
              <h3>NFT Minting dApp</h3>
              <p lang="id">
                Alur minting yang ringkas, langkahnya jelas, dan wallet
                state-nya mudah dibaca. Masih di tahap sketsa.
              </p>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}