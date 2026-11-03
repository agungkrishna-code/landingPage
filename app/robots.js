// app/robots.js — allow full crawling
export default function robots() {
  return {
    rules: [{ userAgent: '*', allow: '/' }],
    sitemap: 'https://agungkrishnananda.vercel.app/sitemap.xml',
  };
}