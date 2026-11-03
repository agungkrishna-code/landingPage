// app/sitemap.js — single-page portfolio
export default function sitemap() {
  const base = 'https://agungkrishnananda.vercel.app';
  return [{ url: base, lastModified: new Date(), changeFrequency: 'monthly', priority: 1 }];
}