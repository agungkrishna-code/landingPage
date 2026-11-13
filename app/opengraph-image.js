import { ImageResponse } from 'next/og';

export const alt = 'Krishna, web and blockchain developer';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          display: 'flex',
          width: '100%',
          height: '100%',
          background: '#f4f0e6',
          color: '#131914',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            width: '76%',
            padding: '58px 48px 48px 64px',
          }}
        >
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              fontSize: 20,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: '#0e5a47',
            }}
          >
            <span>Krishna / Portfolio 2026</span>
            <span>Web + Chain</span>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                maxWidth: 760,
                fontFamily: 'Georgia, serif',
                fontSize: 76,
                letterSpacing: '-0.02em',
                lineHeight: 1.04,
              }}
            >
              I build the interface and the contract{' '}
              <span style={{ color: '#0e5a47', fontStyle: 'italic' }}>
                behind it.
              </span>
            </div>
            <div
              style={{
                display: 'flex',
                marginTop: 28,
                color: '#5b655c',
                fontSize: 24,
              }}
            >
              Junior web and blockchain developer. Next.js, Solidity, EVM.
            </div>
          </div>

          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              paddingTop: 22,
              borderTop: '1px solid rgba(19, 25, 20, 0.22)',
              color: '#5b655c',
              fontSize: 20,
            }}
          >
            <span>agungkrishnananda.vercel.app</span>
            <span>Available for collaboration</span>
          </div>
        </div>

        <div
          style={{
            display: 'flex',
            alignItems: 'flex-end',
            justifyContent: 'center',
            width: '24%',
            padding: '0 26px 44px',
            background: '#0b3a2f',
          }}
        >
          <div
            style={{
              display: 'flex',
              width: 190,
              height: 330,
              border: '1px solid #a9e0c5',
              borderRadius: '95px 95px 4px 4px',
              boxShadow: '0 0 0 12px rgba(169, 224, 197, 0.08)',
            }}
          />
        </div>
      </div>
    ),
    { ...size }
  );
}
