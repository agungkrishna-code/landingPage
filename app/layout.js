import './globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const metadata = {
  title: 'Krishna | Web & Blockchain Developer',
  description: 'Portfolio of Krishna, a junior web and blockchain developer building modern decentralized experiences.',
  openGraph: { title: 'Krishna | Web & Blockchain Developer', description: 'Modern web and blockchain portfolio.' },
};

export default function RootLayout({ children }) {
  const themeInit = `(function(){try{var t=localStorage.getItem('kr-theme');if(t==='dark'){document.documentElement.dataset.theme='dark';}}catch(e){}})();`;
  return (
    <html lang="en" suppressHydrationWarning className={inter.variable}>
      <head><script dangerouslySetInnerHTML={{ __html: themeInit }} /></head>
      <body>{children}</body>
    </html>
  );
}
