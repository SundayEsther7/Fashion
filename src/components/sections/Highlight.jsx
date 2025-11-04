// Responsive 🥳🥳🥳


import SectionWrapper from "../common/SectionWrapper";

export default function Highlight() {
  return (
    <SectionWrapper className="bg-white py-16 md:py-20 lg:py-[96px] px-6 md:px-12">
      {/* Container: switch from column on mobile to row on large screens */}
      <div className="max-w-[1440px] mx-auto flex flex-col lg:flex-row items-center lg:items-start gap-12 lg:gap-[120px]">
        
        {/* LEFT: Text */}
        <div className="w-full lg:w-[45%] lg:pl-[100px] text-center lg:text-left">
          <h2 className="font-saira text-[32px] md:text-[40px] font-semibold leading-[130%] text-[#23262F] mb-[40px]">
            The best furniture manufacturer of your choice
          </h2>

          <p className="font-saira text-[16px] md:text-[20px] leading-[170%] text-[#23262F] max-w-[480px] mx-auto lg:mx-0">
            Furniture Power is a software-as-a-service platform for modern furniture businesses. 
            We provide a blend of aesthetics and practicality, helping you manage every aspect of 
            your furniture collection effortlessly.
          </p>
        </div>

        {/* RIGHT: Image */}
        <div className="w-full lg:w-[50%] flex justify-center lg:justify-end pr-0 lg:pr-[80px]">
          <div className="w-full max-w-[598px] h-auto bg-[#EAEEF3] rounded-[6px] overflow-hidden shadow-sm">
            <img
              className="w-full h-auto object-cover object-center"
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=80"
              alt="Best furniture"
            />
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
