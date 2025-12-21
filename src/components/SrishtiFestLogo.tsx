import Image from "next/image";

export const SrishtiFestLogo = ({ className }: { className?: string }) => (
  <div className={`relative ${className} w-full md:w-2/3 lg:w-1/2 h-24 md:h-32`}>
    <Image
      src="/logo.png"
      alt="Srishti 2.6 Logo"
      fill
      sizes="(max-width: 768px) 50vw, 33vw"
      className="object-contain"
      priority
    />
  </div>
);
