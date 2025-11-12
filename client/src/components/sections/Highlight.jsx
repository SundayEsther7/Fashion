import SectionWrapper from "../common/SectionWrapper";
import all from "../../assets/all.jpg";

export default function Highlight() {
  return (
    <SectionWrapper className="relative py-1 m-1 px-6">
      
      {/* Background grain texture for subtle realism */}
      <div
        className="absolute inset-0 opacity-[0.07] pointer-events-none"
        style={{
          backgroundImage: "url('https://assets.codepen.io/1468070/grain.png')",
        }}
      />

      <div
        className="relative z-10 max-w-[1240px] mx-auto px-4 
        flex flex-col lg:flex-row items-center lg:items-start gap-12 lg:gap-[120px]"
      >
        {/* LEFT TEXT */}
        <div className="w-full lg:w-[45%] text-center lg:text-left">
          <span
            className="uppercase tracking-[0.15em] text-secondary text-sm font-semibold mb-3 block"
            aria-label="Section label"
          >
            Street Tested · Rider Approved
          </span>

          <h2
            className="text-[34px] md:text-[46px] font-extrabold leading-[120%] text-primary mb-[20px] tracking-tight"
          >
            Built for the Streets.
            <br />
            <span className="text-accent">Made for the Movement.</span>
          </h2>

          {/* Removed the accent underline as per teacher feedback */}

          <p
            className="text-[16px] md:text-[18px] leading-[170%] text-neutralDark/90 
            max-w-[480px] mx-auto lg:mx-0"
          >
            Designed for durability, motion, and style. Engineered by riders who
            understand speed, rhythm, and flow. Your movement deserves gear that
            keeps up — and stands out.
          </p>
        </div>

        {/* RIGHT IMAGE */}
        <div className="w-full lg:w-[50%] flex justify-center lg:justify-end">
          <div
            className="w-full max-w-[500px] rounded-[12px] overflow-hidden 
            shadow-[0_12px_26px_-6px_rgba(0,0,0,0.25)]
            border border-neutralLight hover:shadow-[0_16px_32px_-4px_rgba(0,0,0,0.3)]
            transition-shadow duration-300"
          >
            <img
              className="w-full h-full object-cover object-center"
              src={all}
              alt="Urban skating culture highlight"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
