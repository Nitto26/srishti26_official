import Image from "next/image";

export const SrishtiFestLogo = ({ className }: { className?: string }) => (
  <div className={`relative ${className} w-full md:w-2/3 lg:w-1/2 h-24 md:h-32`}>
    <Image
      src="/srishti-logo.svg"
      alt="Srishti 2.6 Logo"
      fill
      className="object-contain"
    />
  </div>
);
