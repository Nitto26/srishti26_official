export function PromoVideo() {
  return (
    <section className="relative w-full h-[70vh] overflow-hidden border-2 border-primary">
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src="/djmp4.mp4"
        autoPlay
        loop
        muted
        playsInline
      >
        Your browser does not support the video tag.
      </video>
      <div className="absolute inset-0 bg-black/50" />
    </section>
  );
}
