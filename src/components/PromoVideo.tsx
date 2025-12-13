export function PromoVideo() {
  return (
    <section className="bg-background py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 font-headline bg-clip-text text-transparent bg-gradient-to-r from-primary via-accent to-primary">
          Aftermovie
        </h2>
        <div className="rounded-lg overflow-hidden border-2 border-primary/20 shadow-lg shadow-primary/10">
          <video
            className="w-full h-auto"
            src="/djmp4.mp4"
            autoPlay
            loop
            muted
            playsInline
          >
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </section>
  );
}
