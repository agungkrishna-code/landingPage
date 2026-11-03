import './globals.css';

export const metadata = {
  metadataBase: new URL('https://agungkrishnananda.vercel.app'),
  title: { default: 'Krishna | Web & Blockchain Developer', template: '%s | Krishna' },
  description: 'Portfolio of Krishna, a junior web and blockchain developer building modern decentralized experiences with Next.js, Solidity, and dApps.',
  keywords: ['Krishna', 'blockchain developer', 'web developer', 'Solidity', 'Next.js', 'dApp', 'portfolio'],
  authors: [{ name: 'Krishna' }],
  creator: 'Krishna',
  robots: { index: true, follow: true },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'Krishna Portfolio',
    title: 'Krishna | Web & Blockchain Developer',
    description: 'Modern web and blockchain portfolio: Next.js frontends wired to smart contracts.',
  },
  twitter: { card: 'summary_large_image', title: 'Krishna | Web & Blockchain Developer', description: 'Modern web and blockchain portfolio.' },
};

export const viewport = { themeColor: [{ media: '(prefers-color-scheme: light)', color: '#f7f7fb' }, { media: '(prefers-color-scheme: dark)', color: '#0d0c14' }] };

export default function RootLayout({ children }) {
  const themeInit = `(function(){try{var t=localStorage.getItem('kr-theme');if(t==='dark'){document.documentElement.dataset.theme='dark';}}catch(e){}})();`;
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <script dangerouslySetInnerHTML={{ __html: themeInit }} />
      </head>
      <body>{children}</body>
    </html>
  );
}

