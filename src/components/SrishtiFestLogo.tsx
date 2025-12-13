import Image from 'next/image';

export const SrishtiFestLogo = ({ className }: { className?: string }) => (
  <div className={`relative ${className}`}>
    <Image
      src="/logo.png"
      alt="Srishti 2.6 Logo"
      fill
      sizes="(max-width: 768px) 16rem, 24rem"
      priority
    />
  </div>
);
