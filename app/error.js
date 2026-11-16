'use client';

import Link from 'next/link';

export default function Error({ reset }) {
  return (
    <main className="status-page" id="main" tabIndex={-1}>
      <div className="status-card">
        <Link className="status-brand" href="/">
          Krishna
        </Link>
        <p className="status-kicker">Unexpected error</p>
        <h1>Something broke.</h1>
        <p lang="id">
          Halaman tidak selesai dimuat. Coba lagi, atau kembali ke halaman utama.
        </p>
        <div className="status-actions">
          <button className="btn btn-primary" type="button" onClick={reset}>
            Try again
          </button>
          <Link className="btn btn-ghost" href="/">
            Back to the homepage
          </Link>
        </div>
      </div>
    </main>
  );
}