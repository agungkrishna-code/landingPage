import Image from 'next/image';

export default function Hero() {
  return (
    <header className="hero" id="home">
      <div className="wrap hero-grid">
        <div className="hero-copy">
          <p className="hero-kicker">Junior web + chain developer</p>

          <h1 className="hero-title">
            I build the interface and the contract <em>behind it.</em>
          </h1>

          <p className="hero-sub" lang="id">
            Saya Krishna, developer junior. Saya bangun interface Next.js dan
            contract Solidity di baliknya. Fokus saya: label yang jelas, pesan
            error yang berguna, dan layout yang tetap rapi di 390px.
          </p>

          <div className="hero-actions">
            <a
              className="btn btn-primary"
              href="mailto:agungkrishnananda@gmail.com?subject=Hello%20Krishna"
            >
              Email Krishna
            </a>
            <a className="text-link" href="#work">
              See the work
            </a>
          </div>
        </div>

        <figure className="portrait-plate">
          <div className="portrait-image">
            <Image
              src="/imgs/profile-removebg-preview.png"
              alt="Krishna wearing a Balinese udeng"
              width={400}
              height={440}
              priority
              sizes="(max-width: 860px) 82vw, 420px"
            />
          </div>
          <figcaption lang="id">
            Krishna, dengan udeng. Foto apa adanya, bukan headshot studio.
          </figcaption>
        </figure>
      </div>

      <div className="wrap hero-rail">
        <span>Balinese-Indonesian</span>
        <span>Interface + contract</span>
        <span>Open to work</span>
      </div>
    </header>
  );
}