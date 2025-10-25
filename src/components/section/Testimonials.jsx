//Responsive
import { useState } from "react";
import SectionWrapper from "../common/SectionWrapper";

export default function Testimonials() {
  // Step 1: All testimonials data
  const testimonials = [
    {
      name: "Josh Smith",
      role: "Manager of The New York Times",
      text: "Furniture Power is a trusted brand loved by many customers. Our quality craftsmanship and attention to detail make every piece stand out in your home.",
      image: "https://randomuser.me/api/portraits/men/44.jpg",
      background:
        "https://images.unsplash.com/photo-1521334884684-d80222895322?auto=format&fit=crop&w=1920&q=80",
    },
    {
      name: "Sarah Johnson",
      role: "Interior Designer at HomeArt",
      text: "The furniture perfectly matches my studio’s aesthetic. I’ll definitely recommend it to my clients.",
      image: "https://randomuser.me/api/portraits/women/47.jpg",
      background:
        "https://images.unsplash.com/photo-1523413651479-597eb2da0ad6?auto=format&fit=crop&w=1920&q=80",
    },
    {
      name: "Daniel Kim",
      role: "Architect at DesignLab",
      text: "Impressed with both the quality and the service. The designs are functional, beautiful, and well-crafted.",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
      background:
        "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1920&q=80",
    },
  ];

  // Step 2: Active testimonial index
  const [currentIndex, setCurrentIndex] = useState(0);

   // Step 3: Navigation functions
  const handleChange = (dir) => {
    setCurrentIndex((prev) => {
      if (dir === "next") return (prev + 1) % testimonials.length;
      else return (prev - 1 + testimonials.length) % testimonials.length;
    });
  };

  // Step 4: Render
  return (
    <SectionWrapper className="relative py-24 px-6 md:px-12 bg-white overflow-hidden">
      <div className="max-w-[1240px] mx-auto flex flex-col-reverse lg:flex-row items-center gap-12">

        {/* LEFT SIDE: Sliding Text */}
        <div className="relative w-full lg:w-1/2 h-[420px] overflow-hidden">
          {testimonials.map((t, index) => (
            <div
              key={index}
              className={`absolute top-0 left-0 w-full transition-transform duration-500 ${
                index === currentIndex
                  ? "translate-x-0 opacity-100"
                  : index < currentIndex
                  ? "-translate-x-full opacity-0"
                  : "translate-x-full opacity-0"
              }`}
            >
              <h2 className="text-4xl font-semibold text-[#23262F] mb-4">
                What People Are Saying
              </h2>
              <p className="text-lg text-[#23262F]/80 leading-relaxed">
                {t.text}
              </p>

              <div className="flex items-center gap-4 mt-8">
                <img
                  src={t.image}
                  alt={t.name}
                  className="w-20 h-20 rounded-full object-cover"
                />
                <div>
                  <p className="text-lg font-semibold text-[#23262F]">
                    {t.name}
                  </p>
                  <p className="text-sm text-[#23262F]/60">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* RIGHT SIDE: Sliding Images */}
        <div className="relative w-full lg:w-1/2 h-[340px] overflow-hidden rounded-md">
          {testimonials.map((t, index) => (
            <img
              key={index}
              src={t.background}
              alt="Testimonial Visual"
              className={`absolute top-0 left-0 w-full h-full object-cover rounded-md transition-transform duration-500 ${
                index === currentIndex
                  ? "translate-x-0 opacity-100"
                  : index < currentIndex
                  ? "-translate-x-full opacity-0"
                  : "translate-x-full opacity-0"
              }`}
            />
          ))}
        </div>
      </div>

      {/* NAVIGATION */}
      <div className="flex justify-center mt-8 gap-4">
        <button
          onClick={() => handleChange("prev")}
          className="w-12 h-12 flex items-center justify-center rounded-full bg-white shadow-md border hover:bg-gray-50 transition"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 19.5 8.25 12l7.5-7.5"
            />
          </svg>
        </button>

        <button
          onClick={() => handleChange("next")}
          className="w-12 h-12 flex items-center justify-center rounded-full bg-[#286F6C] shadow-md hover:opacity-90 transition"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="#ffffff"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m8.25 4.5 7.5 7.5-7.5 7.5"
            />
          </svg>
        </button>
      </div>

      {/* DOTS */}
      <div className="flex justify-center mt-6 gap-3">
        {testimonials.map((_, i) => (
          <span
            key={i}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              i === currentIndex
                ? "bg-[#23262F]"
                : "border border-[#23262F]"
            }`}
          ></span>
        ))}
      </div>
    </SectionWrapper>
  );
}
