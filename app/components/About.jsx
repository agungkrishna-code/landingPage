const principles = [
  {
    number: '01',
    title: 'Understand the flow first.',
    text: 'Read the product, the user path, and the chain interactions before writing a line of UI.',
  },
  {
    number: '02',
    title: 'Keep the contract small and tested.',
    text: 'Smaller Solidity surfaces are easier to review, cheaper to deploy, and safer to live with.',
  },
  {
    number: '03',
    title: 'Ship an interface people can finish.',
    text: 'Clear labels, useful error states, and a layout that behaves at 390px as well as 1440px.',
  },
];

const toolkit = ['Next.js', 'React', 'Solidity', 'EVM', 'dApps', 'REST APIs'];

export default function About() {
  return (
    <section className="section about" id="about">
      <div className="wrap about-grid">
        <div className="about-head">
          <p className="eyebrow">
            <span>02</span> About
          </p>
          <h2 className="section-title">
            Junior by title.
            <br />
            <em>Careful</em> by habit.
          </h2>
          <p className="about-note mono">Krishna / Web + Chain</p>

          <div className="about-facts">
            <div>
              <p className="mono">Open to</p>
              <p>Freelance, junior roles, and collaborations.</p>
            </div>
            <div>
              <p className="mono">Focus</p>
              <p>Next.js interfaces, Solidity contracts, and on-chain UX.</p>
            </div>
          </div>
        </div>

        <div className="about-body">
          <p className="lead">
            I am a junior blockchain developer exploring how decentralized systems
            can change finance, supply chains, and the everyday web.
          </p>
          <p>
            My work sits between two worlds: clean Next.js frontends and Solidity
            contracts that need to be predictable. I like the unglamorous parts,
            from writing tests to tightening the copy on a wallet flow. I am looking
            for freelance work, a junior role, or a collaboration where I can learn
            from people who ship.
          </p>

          <ol className="principles">
            {principles.map((item) => (
              <li key={item.number}>
                <span className="mono principle-num">{item.number}</span>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              </li>
            ))}
          </ol>

          <div className="toolkit">
            <p className="mono toolkit-label">Working with</p>
            <ul>
              {toolkit.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="about-actions">
            <a
              className="btn btn-ghost"
              href="mailto:agungkrishnananda@gmail.com?subject=CV%20request"
            >
              Request my CV
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
      </div>
    </section>
  );
}
