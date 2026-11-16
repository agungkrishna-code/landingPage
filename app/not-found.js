import Link from 'next/link';

export const metadata = {
  title: 'Page not found',
};

export default function NotFound() {
  return (
    <main className="status-page" id="main" tabIndex={-1}>
      <div className="status-card">
        <Link className="status-brand" href="/">
          Krishna
        </Link>
        <p className="status-kicker">Error 404</p>
        <h1>This block is empty.</h1>
        <p lang="id">
          Halaman yang kamu cari tidak ada, atau sudah pindah.
        </p>
        <div className="status-actions">
          <Link className="btn btn-primary" href="/">
            Back to the homepage
          </Link>
          <a className="btn btn-ghost" href="mailto:agungkrishnananda@gmail.com">
            Report a broken link
          </a>
        </div>
      </div>
    </main>
  );
}