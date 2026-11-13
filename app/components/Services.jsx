function ServiceIcon({ name }) {
  const common = {
    width: 22,
    height: 22,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 1.5,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    'aria-hidden': true,
  };

  if (name === 'web') {
    return (
      <svg {...common}>
        <rect x="3" y="4" width="18" height="16" rx="2" />
        <path d="M3 9h18M7 6.5h.01M10 6.5h.01" />
        <path d="M8 13l2 2-2 2M13 17h3" />
      </svg>
    );
  }

  if (name === 'contract') {
    return (
      <svg {...common}>
        <path d="M7 3h7l4 4v14H7z" />
        <path d="M14 3v4h4M10 12h5M10 16h5" />
        <path d="M4 7v13h9" opacity=".45" />
      </svg>
    );
  }

  if (name === 'wallet') {
    return (
      <svg {...common}>
        <path d="M4 7a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2z" />
        <path d="M4 8h16M15 13h4v4h-4a2 2 0 0 1 0-4z" />
      </svg>
    );
  }

  return (
    <svg {...common}>
      <ellipse cx="12" cy="5.5" rx="7" ry="3" />
      <path d="M5 5.5v6c0 1.66 3.13 3 7 3s7-1.34 7-3v-6" />
      <path d="M5 11.5v6c0 1.66 3.13 3 7 3s7-1.34 7-3v-6" />
    </svg>
  );
}

const services = [
  {
    number: '01',
    title: 'Web Development',
    description:
      'Modern responsive websites built with Next.js and React, from the first layout to deployment.',
    tags: ['Next.js', 'React', 'CSS'],
    icon: 'web',
  },
  {
    number: '02',
    title: 'Smart Contracts',
    description:
      'Solidity contracts with tests and a deployment path you can follow, not a black box.',
    tags: ['Solidity', 'EVM', 'Testing'],
    icon: 'contract',
  },
  {
    number: '03',
    title: 'dApp Integration',
    description:
      'Wallet connection and on-chain flows that feel like ordinary web UX, including the error states.',
    tags: ['Wallets', 'dApps', 'UX'],
    icon: 'wallet',
  },
  {
    number: '04',
    title: 'API & Backend',
    description:
      'REST APIs and dashboards for reading blockchain data without the guesswork.',
    tags: ['REST', 'Dashboards', 'Data'],
    icon: 'server',
  },
];

export default function Services() {
  return (
    <section className="section services" id="services">
      <div className="wrap">
        <div className="section-head">
          <div>
            <p className="eyebrow">
              <span>03</span> Services
            </p>
            <h2 className="section-title">
              What I can take
              <br />
              <em>off your plate.</em>
            </h2>
          </div>
          <p className="section-intro">
            Four ways I can help, whether you need a landing page, a contract, or
            the wiring between them.
          </p>
        </div>

        <ul className="service-list">
          {services.map((service) => (
            <li className="service-row" key={service.number}>
              <span className="service-num mono">{service.number}</span>
              <div className="service-main">
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
              <ul className="tags service-tags" aria-label={`${service.title} tools`}>
                {service.tags.map((tag) => (
                  <li key={tag}>{tag}</li>
                ))}
              </ul>
              <span className="service-icon">
                <ServiceIcon name={service.icon} />
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
