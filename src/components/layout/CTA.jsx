import SectionWrapper from "../common/SectionWrapper";

export default function CTA() {
  return (
    <SectionWrapper className="relative w-full h-[490px] bg-[url('https://images.unsplash.com/photo-1521334884684-d80222895322?auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center">
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Content */}
      <div className="relative z-10 max-w-[1240px] mx-auto h-full flex flex-col justify-center lg:items-end px-6 lg:px-12">
        <div className="text-white text-center lg:text-right max-w-[558px] space-y-6">
          <h2 className="text-4xl md:text-5xl font-semibold leading-[1.35]">
            Get more discount<br />off your order
          </h2>
          <p className="text-lg font-normal opacity-90">
            Join our newsletter and receive special promo offers instantly.
          </p>

          {/* Form */}
          <div className="flex flex-col sm:flex-row items-center gap-4 mt-6">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full sm:w-[384px] h-[60px] rounded-md px-4 text-gray-800 placeholder-gray-500 focus:outline-none"
            />
            <button className="w-full sm:w-[152px] h-[60px] bg-[#23262F] text-white rounded-md font-semibold text-lg hover:bg-gray-900 transition">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
