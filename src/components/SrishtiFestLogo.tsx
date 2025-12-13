import type { SVGProps } from 'react';

export const SrishtiFestLogo = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 200 50"
    {...props}
  >
    <defs>
      <linearGradient id="logo-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" style={{ stopColor: '#9400D3' }} />
        <stop offset="100%" style={{ stopColor: '#4B0082' }} />
      </linearGradient>
    </defs>
    <text
      x="50%"
      y="50%"
      dy=".35em"
      textAnchor="middle"
      fontFamily="Montserrat, sans-serif"
      fontSize="32"
      fontWeight="bold"
      fill="url(#logo-gradient)"
    >
      Srishti 2.6
    </text>
  </svg>
);
