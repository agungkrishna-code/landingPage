'use client';

import Link from 'next/link';

export default function Error({ reset }) {
  return (
    <main className="status-page" id="main" tabIndex={-1}>
      <div className="status-card">
        <Link className="status-brand" href="/">
          stayfoolish<span aria-hidden="true">.</span>
        </Link>
        <p className="mono status-code">Unexpected error</p>
        <h1>Something broke.</h1>
        <p>
          The page could not finish loading. Try again, or go back to the homepage.
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
