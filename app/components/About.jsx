const principles = [
  {
    key: 'Flow',
    title: 'Read the flow first.',
    text: 'Baca produk, user path, dan interaksi on-chain sebelum menulis satu baris UI.',
  },
  {
    key: 'Contract',
    title: 'Keep the contract small.',
    text: 'Contract Solidity yang kecil lebih mudah di-review, biaya deploy-nya lebih murah, dan lebih aman dipakai.',
  },
  {
    key: 'Ship',
    title: 'Finish the interface.',
    text: 'Label jelas, error yang berguna, dan layout yang tetap waras di 390px maupun 1440px.',
  },
];

const toolkit = ['Next.js', 'React', 'Solidity', 'EVM', 'dApps', 'REST APIs'];

export default function About() {
  return (
    <section className="section about" id="about">
      <div className="wrap about-grid">
        <div className="about-body">
          <p className="section-label about-label">About</p>

          <h2 className="section-title">
            Junior, and <em>careful</em> by habit.
          </h2>

          <p className="lead" lang="id">
            Saya developer junior yang bekerja di antara dua hal: interface
            Next.js dan contract Solidity yang harus bisa diprediksi.
          </p>
          <p lang="id">
            Sebagian besar kerja saya justru bagian yang tidak glamor: membaca
            alur, mengecilkan contract, menulis test, merapikan pesan error di
            wallet. Saya ingin belajar dari orang yang benar-benar ship.
          </p>

          <ul className="rules">
            {principles.map((item) => (
              <li key={item.key}>
                <span className="rule-key">{item.key}</span>
                <div>
                  <h3>{item.title}</h3>
                  <p lang="id">{item.text}</p>
                </div>
              </li>
            ))}
          </ul>

          <div className="toolkit">
            <p className="small-label">Working with</p>
            <ul className="tags">
              {toolkit.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="about-actions">
            <a
              className="btn btn-ghost btn-sm"
              href="/krishna-cv.pdf"
              download="Krishna-CV-2026.pdf"
            >
              Download CV
              <span className="sr-only"> (PDF)</span>
            </a>
            <a
              className="text-link"
              href="https://github.com/agungkrishna-code"
              target="_blank"
              rel="noopener noreferrer"
            >
              Read the code
              <span aria-hidden="true">&#8599;</span>
              <span className="sr-only"> (opens in a new tab)</span>
            </a>
          </div>
        </div>

        <div className="about-rail">
          <dl className="fact-list">
            <div>
              <dt>Open to</dt>
              <dd lang="id">Freelance, posisi junior, kolaborasi.</dd>
            </div>
            <div>
              <dt>Focus</dt>
              <dd lang="id">Next.js, Solidity, on-chain UX.</dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  );
}