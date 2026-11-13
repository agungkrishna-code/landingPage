'use client';

import { useEffect, useRef, useState } from 'react';

const EMAIL = 'agungkrishnananda@gmail.com';

function legacyCopy(text) {
  const area = document.createElement('textarea');
  area.value = text;
  area.setAttribute('readonly', '');
  area.style.position = 'fixed';
  area.style.opacity = '0';
  document.body.appendChild(area);
  area.select();
  const copied = document.execCommand('copy');
  document.body.removeChild(area);

  if (!copied) throw new Error('Copy command was rejected');
}

export default function CopyEmail() {
  const [status, setStatus] = useState('idle');
  const timerRef = useRef(null);

  useEffect(() => {
    return () => {
      if (timerRef.current) window.clearTimeout(timerRef.current);
    };
  }, []);

  const copy = async () => {
    if (timerRef.current) window.clearTimeout(timerRef.current);
    setStatus('copying');

    try {
      if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(EMAIL);
      } else {
        legacyCopy(EMAIL);
      }
      setStatus('copied');
      timerRef.current = window.setTimeout(() => setStatus('idle'), 2800);
    } catch {
      setStatus('error');
    }
  };

  const label =
    status === 'copying' ? 'Copying...' : status === 'copied' ? 'Copied' : 'Copy address';

  return (
    <div className="copy-email">
      <button
        type="button"
        className="btn btn-cream"
        onClick={copy}
        disabled={status === 'copying'}
      >
        {label}
      </button>
      <span className="copy-status" role="status" aria-live="polite">
        {status === 'copied' && `${EMAIL} copied to the clipboard`}
        {status === 'error' && 'Copy failed. Use the email link.'}
      </span>
    </div>
  );
}
