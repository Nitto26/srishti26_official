import Image from 'next/image';

export const SrishtiFestLogo = ({ className }: { className?: string }) => (
  <div className={`relative ${className}`}>
    <Image
      src="/logo.png"
      alt="Srishti 2.6 Logo"
      width={384}
      height={192}
      sizes="(max-width: 768px) 16rem, 24rem"
      priority
      className="w-64 md:w-96 h-auto"
    />
  </div>
);
