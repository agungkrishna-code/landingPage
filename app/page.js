import Navbar from './components/Navbar';
import Reveal from './components/Reveal';
import Image from 'next/image';
const services = [
  { icon: '/imgs/pencil-case.svg', title: 'Web Development', desc: 'Modern responsive websites with Next.js and React.' },
  { icon: '/imgs/responsive.svg', title: 'Smart Contracts', desc: 'Solidity contracts, testing, and deployment pipelines.' },
  { icon: '/imgs/toolbox.svg', title: 'dApp Integration', desc: 'Wallets and on-chain UX that feels like web2.' },
  { icon: '/imgs/analytics.svg', title: 'API and Backend', desc: 'REST APIs and dashboards for blockchain data.' },
];
const portfolio = [
  { img: '/imgs/shitcoin.jpeg', title: 'Shitcoin Documentary', desc: 'Research and open-source docs', href: 'https://github.com/agungkrishna-code/shitcoin_source_documentary' },
  { img: '/imgs/folio-2.jpg', title: 'DeFi Dashboard', desc: 'Concept, coming soon', href: '#' },
  { img: '/imgs/folio-3.jpg', title: 'NFT Minting dApp', desc: 'Concept, coming soon', href: '#' },
];
export default function Page() {
  return (<main>
    <Navbar />
    <header id="home" className="hero"><div className="cx hgrid">
      <Reveal><div>
        <span className="badge"><span className="dot" />Available for freelance and collab</span>
        <h1 className="ht">Hi, I am <span className="grad">Krishna</span><br />Web and Blockchain Developer</h1>
        <p className="hsub">Junior builder focused on decentralized systems, from finance to supply chain. Clean Next.js frontends wired to smart contracts.</p>
        <div className="hcta"><a className="btn bp" href="#portfolio">View Work</a><a className="btn bg" href="#about">About Me</a></div>
      </div></Reveal>
    </div></header>
    <section className="sec" id="about"><div className="cx">
      <Reveal><p className="eyebrow">Who am I</p><h2 className="st">About Me</h2></Reveal>
      <div className="agrid"><Reveal><div className="hph"><Image src="/imgs/profile-removebg-preview.png" alt="Krishna portrait" width={400} height={440} /></div></Reveal>
      <Reveal><div><p className="muted">Hi! I am a junior blockchain developer passionate about decentralized systems, exploring how blockchain can revolutionize finance, supply chain, and beyond.</p>
      <div className="stats"><div><b>10+</b><span className="muted">Projects</span></div><div><b>3</b><span className="muted">EVM chains</span></div><div><b>100%</b><span className="muted">Open source</span></div></div>
      <a className="btn bp" href="mailto:agungkrishnananda@gmail.com?subject=CV%20Request">Request CV</a></div></Reveal></div>
    </div></section>
    <section className="sec" id="service"><div className="cx">
      <Reveal><p className="eyebrow">What I do</p><h2 className="st">Services</h2></Reveal>
      <div className="gcards">{services.map((s) => <Reveal key={s.title}><div className="cs"><Image src={s.icon} alt={`${s.title} icon`} width={44} height={44} /><h3>{s.title}</h3><p>{s.desc}</p></div></Reveal>)}</div>
    </div></section>
    <section className="sec" id="portfolio"><div className="cx">
      <Reveal><p className="eyebrow">What I did</p><h2 className="st">Portfolio</h2></Reveal>
      <div className="gport">{portfolio.map((p) => <a key={p.title} href={p.href} className="pc" target={p.href.startsWith('http') ? '_blank' : undefined} rel="noreferrer" aria-label={p.title}><Image src={p.img} alt={p.title} width={400} height={250} /><span className="po"><h3>{p.title}</h3><p>{p.desc}</p></span></a>)}</div>
    </div></section>
    <footer className="fmod"><div className="cx frow">
      <p>Copyright {new Date().getFullYear()} agungkrishnananda</p>
      <div className="soc">
        <a href="https://www.instagram.com/agungkrishnananda" aria-label="Instagram">
          <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
        </a>
        <a href="https://github.com/agungkrishna-code" aria-label="GitHub">
          <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true"><path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.55 0-.27-.01-1.17-.02-2.12-3.2.7-3.88-1.36-3.88-1.36-.52-1.33-1.28-1.68-1.28-1.68-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.03 1.76 2.7 1.25 3.35.96.1-.75.4-1.25.72-1.54-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.28 1.18-3.09-.12-.29-.51-1.46.11-3.05 0 0 .96-.31 3.15 1.18a10.9 10.9 0 0 1 5.74 0c2.19-1.49 3.15-1.18 3.15-1.18.62 1.59.23 2.76.11 3.05.74.81 1.18 1.83 1.18 3.09 0 4.42-2.7 5.4-5.27 5.68.41.36.78 1.06.78 2.14 0 1.55-.01 2.79-.01 3.17 0 .31.21.67.8.55A11.5 11.5 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5z"/></svg>
        </a>
        <a href="https://www.linkedin.com/in/dewa-gede-agung-krishnananda-sudewa-790433223/" aria-label="LinkedIn">
          <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true"><path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45z"/></svg>
        </a>
      </div>
    </div></footer>
  </main>);
}
