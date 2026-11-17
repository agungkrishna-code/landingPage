/**
 * All site copy lives here. Edit this file to change content without touching
 * layout or animation code. Indonesian passages are marked with `lang: 'id'`
 * where they are rendered, so screen readers switch voice correctly.
 */

export const site = {
  name: 'Krishna',
  fullName: 'Dewa Gede Agung Krishnananda Sudewa',
  title: 'Krishna | Junior Web & Blockchain Developer',
  description:
    'Portfolio of Krishna, a junior web and blockchain developer building Next.js interfaces and Solidity contracts for on-chain products.',
  url: 'https://agungkrishnananda.vercel.app',
  email: 'agungkrishnananda@gmail.com',
  mailto:
    'mailto:agungkrishnananda@gmail.com?subject=Hello%20Krishna',
  cv: '/krishna-cv.pdf',
  cvFilename: 'Krishna-CV-2026.pdf',
  socials: [
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
  ],
} as const;

export const nav = [
  { href: '#about', label: 'About' },
  { href: '#services', label: 'Services' },
  { href: '#work', label: 'Work' },
  { href: '#contact', label: 'Contact' },
] as const;

export const hero = {
  kicker: 'Junior web + chain developer',
  titleLead: 'I build the interface and the contract',
  titleAccent: 'behind it.',
  sub: 'Saya Krishna, developer junior. Saya bangun interface Next.js dan contract Solidity di baliknya. Fokus saya: label yang jelas, pesan error yang berguna, dan layout yang tetap rapi di 390px.',
  primary: { label: 'Email Krishna', href: site.mailto },
  secondary: { label: 'See the work', href: '#work' },
  rail: ['Balinese-Indonesian', 'Interface + contract', 'Open to work'],
  portrait: {
    alt: 'Krishna wearing a Balinese udeng',
    caption: 'Krishna, dengan udeng. Foto apa adanya, bukan headshot studio.',
  },
} as const;

export const about = {
  label: 'About',
  titleLead: 'Junior, and',
  titleAccent: 'careful',
  titleTail: 'by habit.',
  lead: 'Saya developer junior yang bekerja di antara dua hal: interface Next.js dan contract Solidity yang harus bisa diprediksi.',
  body: 'Sebagian besar kerja saya justru bagian yang tidak glamor: membaca alur, mengecilkan contract, menulis test, merapikan pesan error di wallet. Saya ingin belajar dari orang yang benar-benar ship.',
  rules: [
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
  ],
  toolkit: ['Next.js', 'React', 'Solidity', 'EVM', 'dApps', 'REST APIs'],
  facts: [
    { term: 'Open to', detail: 'Freelance, posisi junior, kolaborasi.' },
    { term: 'Focus', detail: 'Next.js, Solidity, on-chain UX.' },
  ],
  cvLabel: 'Download CV',
  githubLabel: 'Read the code',
} as const;

export const services = {
  label: 'Services',
  titleLead: 'Four ways I can',
  titleAccent: 'help.',
  intro: 'Landing page, contract, atau lapisan yang menyambungkan keduanya. Ini empat hal yang bisa saya kerjakan.',
  items: [
    {
      number: '01',
      title: 'Web development',
      description:
        'Website responsif dengan Next.js dan React, dari layout pertama sampai deploy.',
      tags: ['Next.js', 'React', 'CSS'],
      margin: 'Layout, motion, and the details that hold at 390px.',
    },
    {
      number: '02',
      title: 'Smart contracts',
      description:
        'Contract Solidity dengan test dan jalur deploy yang bisa kamu ikuti, bukan black box.',
      tags: ['Solidity', 'EVM', 'Testing'],
      margin: 'Small surface, readable tests, a deploy path you can repeat.',
    },
    {
      number: '03',
      title: 'dApp integration',
      description:
        'Wallet connection dan alur on-chain yang terasa seperti web biasa, termasuk error state-nya.',
      tags: ['Wallets', 'dApps', 'UX'],
      margin: 'Connect, sign, fail, recover. Every state written down.',
    },
    {
      number: '04',
      title: 'API & backend',
      description:
        'REST API dan dashboard untuk membaca data blockchain tanpa menebak-nebak.',
      tags: ['REST', 'Dashboards', 'Data'],
      margin: 'Data you can check, not numbers you have to trust.',
    },
  ],
  outro: {
    title: 'Something else?',
    text: 'Ceritakan produknya. Saya akan bilang terus terang kalau saya bisa membantu.',
    linkLabel: 'Email Krishna',
  },
} as const;

export const work = {
  label: 'Work',
  titleLead: 'Work, and the',
  titleAccent: 'ideas',
  titleTail: 'around it.',
  intro:
    'Satu proyek publik. Dua studi konsep. Setiap label jujur soal statusnya.',
  projects: [
    {
      kind: 'public' as const,
      stamp: 'Public project',
      number: '01',
      title: 'Shitcoin Documentary',
      description:
        'Riset dan dokumentasi open source yang melacak sebuah meme token dari launch sampai dampaknya. Repo publiknya bisa dibaca langsung.',
      tags: ['Research', 'Documentation', 'Open source'],
      href: 'https://github.com/agungkrishna-code/shitcoin_source_documentary',
      linkLabel: 'Read the repository',
      imageAlt: 'Coin artwork for the Shitcoin Documentary project',
    },
    {
      kind: 'concept' as const,
      stamp: 'Concept',
      number: '02',
      title: 'DeFi Dashboard',
      description:
        'Tampilan untuk membaca posisi likuiditas dan aktivitas pool. Masih konsep, belum ada demo publik.',
      tags: ['dApp', 'Data', 'Concept'],
      linkLabel: '',
      imageAlt:
        'Abstract concept sketch of a liquidity curve with two position markers',
    },
    {
      kind: 'concept' as const,
      stamp: 'Concept',
      number: '03',
      title: 'NFT Minting dApp',
      description:
        'Alur minting yang ringkas, langkahnya jelas, dan wallet state-nya mudah dibaca. Masih di tahap sketsa.',
      tags: ['Wallet', 'Mint flow', 'Concept'],
      linkLabel: '',
      imageAlt:
        'Abstract concept sketch of a token grid with one minted token',
    },
    {
      kind: 'cta' as const,
      stamp: 'Open source',
      number: '04',
      title: 'The code lives on GitHub.',
      description:
        'Repo publik, build log, dan kerja yang belum selesai. Kalau kamu ingin melihat caranya, mulai dari sini.',
      tags: ['Repositories', 'Build log', 'Work in progress'],
      href: 'https://github.com/agungkrishna-code',
      linkLabel: 'Open GitHub',
      imageAlt: '',
    },
  ],
  swipeHint: 'Swipe the plates',
  scrollHint: 'Scroll to move',
} as const;

export const contact = {
  label: 'Contact',
  titleLead: 'Tell me what',
  titleAccent: 'you',
  titleTail: 'are building.',
  lead: 'Saya terbuka untuk proyek freelance, posisi junior, dan kolaborasi di bidang web dan produk on-chain. Email adalah cara tercepat untuk menghubungi saya.',
  copyLabel: 'Copy email',
  copiedLabel: 'Copied',
  copyErrorLabel: 'Press Ctrl+C',
  elsewhere: 'Elsewhere',
} as const;

export const footer = {
  tagline: 'Junior web + chain developer. Interface and contract.',
  builtWith: 'Built with Astro.',
  backToTop: 'Back to top',
} as const;