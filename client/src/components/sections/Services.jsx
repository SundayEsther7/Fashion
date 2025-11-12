import { memo } from "react";
import SectionWrapper from "../common/SectionWrapper";
import { motion } from "framer-motion";
import skate7 from "../../assets/skate7.jpg";

const Services = memo(function Services() {
  return (
    <SectionWrapper
      className="py-1 m-1 w-full"
      aria-label="UrbanGlide Services and Skate Community"
    >
      <h2 className="sr-only">UrbanGlide Skate Services</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 items-start gap-10 lg:gap-16 max-w-[1240px] mx-auto px-4 sm:px-6">
        {/* IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="rounded-[12px] overflow-hidden shadow-lg group"
        >
          <img
            src={skate7}
            alt="Urban skater gliding through a city street wearing UrbanGlide gear"
            loading="lazy"
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.05]"
          />
        </motion.div>

        {/* TEXT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="space-y-6 flex flex-col justify-start"
        >
          <h2 className="text-4xl font-bold text-primary leading-tight">
            More than skates. <br /> It’s a lifestyle on wheels.
          </h2>

          <p className="text-neutralDark/80 text-lg leading-relaxed">
            Whether you're learning, cruising, or pushing limits — we've got the gear,
            guidance, and community to support your ride.
          </p>

          <ul className="space-y-4 text-neutralDark/90" role="list">
            {/* Bullet 1 */}
            <li className="flex gap-3 items-start" role="listitem">
              <svg xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 text-accent shrink-0"
                fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75" />
                <circle cx="12" cy="12" r="9" strokeWidth="1.5" />
              </svg>
              <span>
                <strong className="text-primary">Expert Fit & Guidance</strong><br />
                We match your skate to your riding style and skill level.
              </span>
            </li>

            {/* Bullet 2 */}
            <li className="flex gap-3 items-start" role="listitem">
              <svg xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 text-accent shrink-0"
                fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75" />
                <circle cx="12" cy="12" r="9" strokeWidth="1.5" />
              </svg>
              <span>
                <strong className="text-primary">Quality Gear Only</strong><br />
                Built for comfort, durability, and real street movement.
              </span>
            </li>

            {/* Bullet 3 */}
            <li className="flex gap-3 items-start" role="listitem">
              <svg xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 text-accent shrink-0"
                fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75" />
                <circle cx="12" cy="12" r="9" strokeWidth="1.5" />
              </svg>
              <span>
                <strong className="text-primary">Community Meetups</strong><br />
                Ride together, learn together, grow together.
              </span>
            </li>
          </ul>
        </motion.div>
      </div>
    </SectionWrapper>
  );
});

export default Services;
