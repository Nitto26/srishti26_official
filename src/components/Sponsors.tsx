import Image from 'next/image';

const sponsors = [
  { name: 'Target', logo: '/sponsors/target.svg' },
  { name: 'Walmart', logo: '/sponsors/walmart.svg' },
  { name: 'Whole Foods', logo: '/sponsors/whole-foods.svg' },
  { name: 'Gopuff', logo: '/sponsors/gopuff.svg' },
  { name: 'Sweetgreen', logo: '/sponsors/sweetgreen.svg' },
  { name: 'Erewhon', logo: '/sponsors/erewhon.svg' },
  { name: 'Spotify', logo: '/sponsors/spotify.svg' },
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
                  src={sponsor.logo}
                  alt={sponsor.name}
                  width={140}
                  height={40}
                  className="object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
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
