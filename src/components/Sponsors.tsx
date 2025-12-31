import Image from 'next/image';

const sponsors = [
  { name: 's1', filename: 's1.png' },
  { name: 's2', filename: 's2.png' },
  { name: 's3', filename: 's3.webp' },
  { name: 's4', filename: 's4.png' },
  { name: 's5', filename: 's5.png' },
  { name: 's6', filename: 's6.png' },
  { name: 's7', filename: 's7.png' },
];

const allSponsors = [...sponsors, ...sponsors];

export function Sponsors() {
  return (
    <section id="sponsors" className="py-24">
      <div className="container mx-auto px-4">
        <h2 className="text-sm tracking-widest uppercase text-center mb-12 text-foreground/50">
          Our Sponsors
        </h2>
        <div className="relative overflow-hidden">
          <div className="flex w-max animate-[marquee_30s_linear_infinite]">
            {allSponsors.map((sponsor, index) => (
              <div key={index} className="w-48 h-12 flex items-center justify-center mx-8">
                <Image
                  src={`/images/${sponsor.filename}`}
                  alt={sponsor.name}
                  width={140}
                  height={40}
                  className="h-full w-auto object-contain transition-all duration-300"
                />
              </div>
            ))}
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-background" />
        </div>
      </div>
    </section>
  );
}
