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
      text: "\u201CI always felt skating was for pros until I tried my first pair from UrbanGlide. The team helped me choose the right fit and now I skate every Sunday at Uhuru Park. Confidence unlocked!\u201D",
      image: ladyF,
      background: lady,
    },
    {
      name: "Brian 'Vox' M.",
      role: "Street Freestyle Skater",
      text: "\u201CI go hard on my skates — jumps, slides, speed, everything. UrbanGlide gear holds up. Good grip, smooth roll, and pads that actually protect. Real talk, this stuff is built for outside.\u201D",
      image: "https://randomuser.me/api/portraits/men/76.jpg",
      background: manSkating,
    },
    {
      name: "Joy & Mia",
      role: "Parent + Beginner Skater",
      text: "\u201CMy daughter wanted to learn skating and I was scared. But their staff showed us how to balance and fall safely. Now skating is our bonding activity every evening. I love that for us.\u201D",
      image: "https://randomuser.me/api/portraits/women/79.jpg",
      background: parentChild,
    },
    {
      name: "Kelvin 'Spins'",
      role: "Community Skate Crew Member",
      text: "\u201CWhat I like most is how UrbanGlide feels like a community. It’s not just gear — it's people pushing each other to learn new tricks and show up with confidence.\u201D",
      image: "https://randomuser.me/api/portraits/men/23.jpg",
      background: manPosing,
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [activeArrow, setActiveArrow] = useState("next"); // "next" is default active

  const next = () => {
    setActiveArrow("next");
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setActiveArrow("prev");
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

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
                  <div className="flex items-center gap-4 mb-6">
                    <img
                      src={testimonials[currentIndex].image}
                      className="w-16 h-16 rounded-full object-cover border-2 border-accent"
                    />
                    <div>
                      <p className="font-semibold text-primary text-xl">
                        {testimonials[currentIndex].name}
                      </p>
                      <p className="text-sm text-neutralDark/60">
                        {testimonials[currentIndex].role}
                      </p>
                    </div>
                  </div>

                  {/* THEN THE TEXT */}
                  <p className="text-neutralDark/80 text-lg leading-relaxed max-w-[500px]">
                    {testimonials[currentIndex].text}
                  </p>
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
        {/* ARROWS */}
        <div className="flex gap-4 pt-6">
          {/* PREV ARROW */}
          <button
            onClick={prev}
            className={`
      w-10 h-10 rounded-full border transition-all active:scale-95 flex items-center justify-center shadow-md
      ${
        activeArrow === "prev"
          ? "bg-accent border-accent"
          : "bg-white border-primary/20 hover:bg-accent hover:border-accent"
      }
    `}
            aria-label="Previous testimonial"
          >
            <svg
              className={`w-6 h-6 transition ${
                activeArrow === "prev" ? "text-primary" : "text-primary"
              }`}
              fill="none"
              stroke="currentColor"
              strokeWidth={2.5}
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 19.5L8.25 12l7.5-7.5"
              />
            </svg>
          </button>

          {/* NEXT ARROW */}
          <button
            onClick={next}
            className={`
      w-10 h-10 rounded-full border transition-all active:scale-95 flex items-center justify-center shadow-md
      ${
        activeArrow === "next"
          ? "bg-accent border-accent"
          : "bg-white border-primary/20 hover:bg-accent hover:border-accent"
      }
    `}
            aria-label="Next testimonial"
          >
            <svg
              className={`w-6 h-6 transition ${
                activeArrow === "next" ? "text-primary" : "text-primary"
              }`}
              fill="none"
              stroke="currentColor"
              strokeWidth={2.5}
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m8.25 4.5 7.5 7.5-7.5 7.5"
              />
            </svg>
          </button>
        </div>
      </div>
    </SectionWrapper>
  );
}
