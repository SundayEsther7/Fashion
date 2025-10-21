export default function Hero() {
  return (
    <section
      className="relative mx-auto w-[1440px] h-[1000px] flex items-center justify-center text-center bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1521334884684-d80222895322?auto=format&fit=crop&w=1920&q=80')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Content */}
      <div className="relative z-10 text-white px-6">
        <h1 className="text-5xl md:text-6xl font-bold mb-4">
          Effortless Fashion for Every Day
        </h1>
        <p className="text-lg md:text-xl mb-8">
          Discover timeless style that fits your life.
        </p>
        <button className="bg-accent text-neutral-dark font-semibold px-6 py-3 rounded-lg hover:bg-yellow-400 transition">
          Shop Now
        </button>
      </div>
    </section>
  );
}
