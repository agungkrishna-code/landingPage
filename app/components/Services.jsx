const services = [
  {
    title: 'Web development',
    description:
      'Website responsif dengan Next.js dan React, dari layout pertama sampai deploy.',
    tags: ['Next.js', 'React', 'CSS'],
  },
  {
    title: 'Smart contracts',
    description:
      'Contract Solidity dengan test dan jalur deploy yang bisa kamu ikuti, bukan black box.',
    tags: ['Solidity', 'EVM', 'Testing'],
  },
  {
    title: 'dApp integration',
    description:
      'Wallet connection dan alur on-chain yang terasa seperti web biasa, termasuk error state-nya.',
    tags: ['Wallets', 'dApps', 'UX'],
  },
  {
    title: 'API & backend',
    description:
      'REST API dan dashboard untuk membaca data blockchain tanpa menebak-nebak.',
    tags: ['REST', 'Dashboards', 'Data'],
  },
];

export default function Services() {
  return (
    <section className="section services" id="services">
      <div className="wrap">
        <div className="section-head">
          <p className="section-label">Services</p>
          <h2 className="section-title">Four ways I can help.</h2>
          <p className="section-intro" lang="id">
            Landing page, contract, atau lapisan yang menyambungkan keduanya. Ini
            empat hal yang bisa saya kerjakan.
          </p>
        </div>

        <ul className="service-list">
          {services.map((service, index) => (
            <li className="service-row" key={service.title}>
              <span className="service-num">
                {String(index + 1).padStart(2, '0')}
              </span>
              <div className="service-main">
                <h3>{service.title}</h3>
                <p lang="id">{service.description}</p>
              </div>
              <ul
                className="tags service-tags"
                aria-label={`${service.title} tools`}
              >
                {service.tags.map((tag) => (
                  <li key={tag}>{tag}</li>
                ))}
              </ul>
            </li>
          ))}

          <li className="service-row service-row-ask">
            <span className="service-num">?</span>
            <div className="service-main">
              <h3>Something else?</h3>
              <p lang="id">
                Ceritakan produknya. Saya akan bilang terus terang kalau saya bisa membantu.
              </p>
            </div>
            <a
              className="text-link"
              href="mailto:agungkrishnananda@gmail.com?subject=Hello%20Krishna"
            >
              Email Krishna
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}