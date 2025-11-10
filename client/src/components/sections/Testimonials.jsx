import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import SectionWrapper from "../common/SectionWrapper";
import ladyF from "../../assets/ladyF.jpg";
import lady from "../../assets/lady.jpg";

import parentChild from "../../assets/parentChild.jpg";
import manPosing from "../../assets/manPosing.jpg";
import manSkating from "../../assets/manSkating.jpg";

export default function Testimonials() {
  const testimonials = [
  {
    name: "Lynette W.",
    role: "Casual Weekend Skater",
    text: "I always felt skating was for pros until I tried my first pair from UrbanGlide. The team helped me choose the right fit and now I skate every Sunday at Uhuru Park. Confidence unlocked!",
    image: ladyF,
    background: lady,
  },
  {
    name: "Brian 'Vox' M.",
    role: "Street Freestyle Skater",
    text: "I go hard on my skates — jumps, slides, speed, everything. UrbanGlide gear holds up. Good grip, smooth roll, and pads that actually protect. Real talk, this stuff is built for outside.",
    image: "https://randomuser.me/api/portraits/men/76.jpg",
    background: manSkating,
      },
  {
    name: "Joy & Mia",
    role: "Parent + Beginner Skater",
    text: "My daughter wanted to learn skating and I was scared. But their staff showed us how to balance and fall safely. Now skating is our bonding activity every evening. I love that for us.",
    image: "https://randomuser.me/api/portraits/women/79.jpg",
    background:parentChild,
     },
  {
    name: "Kelvin 'Spins'",
    role: "Community Skate Crew Member",
    text: "What I like most is how UrbanGlide feels like a community. It’s not just gear — it's people pushing each other to learn new tricks and show up with confidence.",
    image: "https://randomuser.me/api/portraits/men/23.jpg",
    background: manPosing,
      },
];


  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () =>
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  const prev = () =>
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <SectionWrapper className="relative py-1 m-1 px-6 md:px-12">

      <div className="max-w-[1240px] mx-auto">

        {/* SLIDER WRAPPER */}
        <div className="flex flex-col lg:flex-row items-center gap-12 relative overflow-hidden">

          

          {/* ANIMATED SLIDER CONTENT */}
          <div className="w-full overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 80 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -80 }}
                transition={{ duration: 0.3 }}
                className="flex flex-col lg:flex-row items-center gap-12"
              >
                {/* TEXT */}
                <div className="w-full lg:w-1/2">
                  <h2 className="text-4xl font-bold text-primary mb-4">
                    What People Are Saying
                  </h2>
                  <p className="text-neutralDark/80 text-lg leading-relaxed max-w-[500px]">
                    {testimonials[currentIndex].text}
                  </p>

                  <div className="flex items-center gap-4 mt-8">
                    <img
                      src={testimonials[currentIndex].image}
                      className="w-16 h-16 rounded-full object-cover border-2 border-accent"
                    />
                    <div>
                      <p className="font-semibold text-primary text-lg">
                        {testimonials[currentIndex].name}
                      </p>
                      <p className="text-sm text-neutralDark/60">
                        {testimonials[currentIndex].role}
                      </p>
                    </div>
                  </div>
                </div>

                {/* IMAGE */}
                <div className="w-full lg:w-1/2">
                  <img
                    src={testimonials[currentIndex].background}
                    className="w-full h-[340px] rounded-xl shadow-lg object-cover"
                  />
                </div>

              </motion.div>
            </AnimatePresence>


        
          </div>

        </div>
        { /* ARROWS */}
         {/* ARROWS — outside content */}
<div className="absolute left-6 bottom-0 flex gap-3 z-20">

  {/* Prev Arrow */}
  <button
    onClick={prev}
    className="w-10 h-10 border border-neutralDark rounded-full flex items-center justify-center hover:bg-neutralLight transition"
  >
    <svg className="w-6 h-6 text-neutralDark" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
    </svg>
  </button>

  {/* Next Arrow */}
  <button
    onClick={next}
    className="w-10 h-10 bg-accent rounded-full flex items-center justify-center hover:bg-accent/80 transition"
  >
    <svg className="w-6 h-6 text-neutralDark" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
    </svg>
  </button>

</div>
 

      </div>

    </SectionWrapper>
  );
}
