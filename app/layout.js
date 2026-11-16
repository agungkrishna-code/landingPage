import { IBM_Plex_Sans, Newsreader } from 'next/font/google';
import './globals.css';

const serif = Newsreader({
  subsets: ['latin'],
  weight: ['400', '500'],
  style: ['normal', 'italic'],
  variable: '--font-serif',
  display: 'swap',
});

const sans = IBM_Plex_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-sans',
  display: 'swap',
});

const siteUrl = 'https://agungkrishnananda.vercel.app';
const description =
  'Portfolio of Krishna, a junior web and blockchain developer building Next.js interfaces and Solidity contracts for on-chain products.';

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Krishna | Junior Web & Blockchain Developer',
    template: '%s | Krishna',
  },
  description,
  keywords: [
    'Krishna',
    'blockchain developer',
    'web developer',
    'Solidity',
    'Next.js',
    'React',
    'dApp',
    'smart contracts',
    'portfolio',
  ],
  authors: [{ name: 'Krishna' }],
  creator: 'Krishna',
  alternates: { canonical: '/' },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: '/',
    siteName: 'Krishna Portfolio',
    title: 'Krishna | Junior Web & Blockchain Developer',
    description,
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Krishna | Junior Web & Blockchain Developer',
    description,
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  colorScheme: 'light dark',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#f3eddf' },
    { media: '(prefers-color-scheme: dark)', color: '#0e1411' },
  ],
};

const personSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Krishna',
  alternateName: 'agungkrishnananda',
  url: siteUrl,
  jobTitle: 'Junior Web and Blockchain Developer',
  description,
  sameAs: [
    'https://github.com/agungkrishna-code',
    'https://www.linkedin.com/in/dewa-gede-agung-krishnananda-sudewa-790433223/',
    'https://www.instagram.com/agungkrishnananda',
  ],
  knowsAbout: [
    'Web development',
    'Next.js',
    'React',
    'Solidity',
    'EVM',
    'dApps',
    'REST APIs',
  ],
};

const themeInit = `(function(){try{var saved=localStorage.getItem('kr-theme');var prefersDark=window.matchMedia('(prefers-color-scheme: dark)').matches;var theme=saved==='light'||saved==='dark'?saved:(prefersDark?'dark':'light');document.documentElement.dataset.theme=theme;document.documentElement.style.colorScheme=theme;}catch(e){}})();`;

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInit }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
      </head>
      <body className={`${serif.variable} ${sans.variable}`}>
        <a className="skip-link" href="#main">
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
