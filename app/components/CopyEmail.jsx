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

  return (
    <div className="copy-email">
      <button type="button" className="btn btn-outline-light" onClick={copy}>
        Copy email
      </button>
      <span className="copy-status" role="status" aria-live="polite" lang="id">
        {status === 'copying' && 'Menyalin...'}
        {status === 'copied' && 'Email disalin.'}
        {status === 'error' && 'Gagal menyalin. Pakai alamat email di atas.'}
      </span>
    </div>
  );
}
