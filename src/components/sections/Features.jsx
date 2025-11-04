import { useEffect, useRef } from "react";
import SectionWrapper from "../common/SectionWrapper";
import { Link } from "react-router-dom";

import skate5 from "../../assets/skate5.jpg";
import skate2 from "../../assets/skate2.jpg";
import kidspads from "../../assets/kidspads.jpg";
import helmet from "../../assets/helmet.jpg";


export default function Features() {
  const products = [
    {
      id: 1,
      name: "Inline Skate",
      image: skate5,
    },
    {
      id: 2,
      name: "Street Grind Wheels",
      image: skate2,
    },
    {
      id: 3,
      name: "Shock-Proof Knee Pads",
      image: kidspads,
    },
    {
      id: 4,
      name: " Helmet",
      image: helmet,
    },
  ];

  const scrollRef = useRef(null);

  // leave your autoscroll code **unchanged**
  useEffect(() => {
    const container = scrollRef.current;
    let scrollAmount = 0;

    const scrollStep = () => {
      if (!container) return;
      scrollAmount += 1;
      container.scrollLeft = scrollAmount;

      if (scrollAmount >= container.scrollWidth - container.clientWidth) {
        scrollAmount = 0;
      }
    };

    const interval = setInterval(scrollStep, 30);
    return () => clearInterval(interval);
  }, []);

  return (
    <SectionWrapper className="w-full py-20 bg-white">
      <div className="max-w-[1240px] mx-auto flex flex-col lg:flex-row items-start gap-12 px-6">
        {/* LEFT TEXT */}
        <div className="w-full lg:w-[300px] flex-shrink-0">
          <h2 className="text-[42px] font-extrabold text-primary leading-tight mb-4">
            New Gear Dropping
          </h2>

          <p className="text-neutralDark text-[16px] leading-relaxed opacity-80 mb-8">
            Gear built for the streets — where motion meets style.
          </p>

          <Link
  to="/shop"
  className="flex items-center gap-2 group text-primary hover:text-accent transition font-semibold cursor-pointer"
>
  <span>Explore All</span>

  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={2}
    stroke="currentColor"
    className="w-5 h-5 transform group-hover:translate-x-1 transition"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
    />
  </svg>
</Link>
        </div>

        {/* SCROLL */}
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto overflow-y-hidden scroll-smooth py-2 no-scrollbar"
        >
          {products.concat(products).map((product) => (
            <div
              key={product.id + Math.random()}
              className="relative w-[230px] h-[350px] rounded-xl overflow-hidden flex-shrink-0 
              transition-transform duration-500 hover:scale-[1.05] group"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
              />

              {/* Subtle dark fade */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50"></div>

              {/* Product name */}
              <p className="absolute bottom-5 left-1/2 -translate-x-1/2 text-white text-[20px] font-semibold">
                {product.name}
              </p>

              {/* Accent glow on hover */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-accent transition"></div>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
