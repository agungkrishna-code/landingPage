import { ImageResponse } from 'next/og';

export const alt = 'Krishna, junior web and blockchain developer';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          width: '100%',
          height: '100%',
          padding: '64px 72px',
          background: '#f3eddf',
          color: '#141c17',
        }}
      >
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            fontSize: 20,
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            color: '#0e5544',
          }}
        >
          <span>Krishna / Portfolio 2026</span>
          <span>Web + Chain</span>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', maxWidth: 940 }}>
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              fontFamily: 'Georgia, serif',
              fontSize: 78,
              letterSpacing: '-0.02em',
              lineHeight: 1.03,
            }}
          >
            I build the interface and the contract{' '}
            <span style={{ color: '#0e5544', fontStyle: 'italic' }}>
              behind it.
            </span>
          </div>
          <div
            style={{
              display: 'flex',
              marginTop: 26,
              color: '#5c645b',
              fontSize: 24,
            }}
          >
            Junior developer. Next.js interfaces, Solidity contracts.
          </div>
        </div>

        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            paddingTop: 22,
            borderTop: '1px solid rgba(20, 28, 23, 0.24)',
            color: '#5c645b',
            fontSize: 20,
          }}
        >
          <span>agungkrishnananda.vercel.app</span>
          <span>Open to work</span>
        </div>
      </div>
    ),
    { ...size }
  );
}