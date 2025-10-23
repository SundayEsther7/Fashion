// Responsive 🥳🥳🥳
//Could get better though

import SectionWrapper from "../common/SectionWrapper";
export default function Hero() {
  return (
    <SectionWrapper>
      <section
        className="relative h-[100vh]  max-h-[1000px] flex items-center justify-center text-center bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1521334884684-d80222895322?auto=format&fit=crop&w=1920&q=80')",
        }}
      >
        {/* Overlay for readability */}
        <div className="absolute inset-0 bg-black/40"></div>

        {/* Content */}
        <div className="relative z-10 text-white px-6">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            Effortless Fashion for Every Day
          </h1>
          <p className="text-lg md:text-xl mb-8">
            Discover timeless style that fits your life.
          </p>
          <button className="bg-accent text-neutral-dark font-semibold px-[80px] py-[16px] gap-[10px] rounded-[10px] bg-[#e2e2e266] backdrop-blur-[30px] hover:bg-[#e2e2e290] transition bg-black-200">
            Shop Now
          </button>
        </div>

        <div>
          <div
            className="z-10 bg-green-400 backdrop-blur-sm w-full max-w-[1240px] px-8 h-[180px] rounded-[10px] absolute bottom-[20px] left-1/2 transform -translate-x-1/2
      flex justify-between items-center gap-5 gap-y-3 text-sm md:text-base
       text-neutral-dark text-[16px] font-bold tracking-wide divide-x divide-white/60 "
          >
            <span>
              7 <br />
              years of experience
            </span>
            <span>
              2 <br /> opened in the country
            </span>
            <span>
              10k+ <br /> furniture sold
            </span>
            <span>
              260+ <br /> variant furniture
            </span>
          </div>
        </div>
      </section>
    </SectionWrapper>
  );
}
