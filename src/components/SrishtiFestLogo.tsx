import Image from 'next/image';

export const SrishtiFestLogo = ({ className }: { className?: string }) => (
  <div className={`relative ${className}`}>
    <Image
      src="/logo.png"
      alt="Srishti 2.6 Logo"
      width={384}
      height={192}
      sizes="(max-width: 768px) 12rem, 16rem"
      priority
      className="w-48 md:w-64 h-auto"
    />
  </div>
);
