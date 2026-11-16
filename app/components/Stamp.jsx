export default function Stamp({ children, tone = 'ink', className = '' }) {
  return (
    <span className={`stamp stamp-${tone} ${className}`.trim()}>
      {children}
    </span>
  );
}