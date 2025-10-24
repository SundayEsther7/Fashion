import SectionWrapper from "../common/SectionWrapper";

export default function CTA() {
  return (
    <SectionWrapper className="relative w-full h-[490px] bg-[url('https://images.unsplash.com/photo-1521334884684-d80222895322?auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center">
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Content */}
      <div className="relative z-10 max-w-[1240px] mx-auto h-full flex flex-col justify-center items-center text-center px-4 text-white gap-6">
        <div >
          <h2 className="text-4xl md:text-5xl font-semibold leading-[1.35]">
            Get more discount<br />off your order
          </h2>
          <p className="text-lg font-normal opacity-90">
            Join our newsletter and receive special promo offers instantly.
          </p>

          
        </div>
      </div>
    </SectionWrapper>
  );
}
