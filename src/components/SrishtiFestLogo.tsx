export const SrishtiFestLogo = ({ className }: { className?: string }) => (
  <div className={`relative ${className}`}>
    <svg
      viewBox="0 0 800 120"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-auto"
      aria-labelledby="srishti-logo-title"
    >
      <title id="srishti-logo-title">Srishti 2.6 Logo</title>
      <defs>
        <linearGradient id="logo-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" style={{ stopColor: 'hsl(var(--primary))', stopOpacity: 1 }} />
          <stop offset="50%" style={{ stopColor: 'hsl(var(--accent))', stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: 'hsl(var(--primary))', stopOpacity: 1 }} />
        </linearGradient>
      </defs>
      <text
        x="50%"
        y="50%"
        dy=".35em"
        textAnchor="middle"
        className="font-headline font-bold"
        style={{
          fontSize: '90px',
          fill: 'url(#logo-gradient)',
          textShadow: '0 2px 10px hsla(var(--primary), 0.5)',
        }}
      >
        SRISHTI 2.6
      </text>
    </svg>
  </div>
);
