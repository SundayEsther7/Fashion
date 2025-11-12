import skaters7 from "../../assets/skaters7.jpg";
import SectionWrapper from "../common/SectionWrapper";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <SectionWrapper className="m-1 py-1 mt-0 pt-0">
      <section
        aria-label="Hero section showcasing UrbanGlide skater background"
        className="relative min-h-[90vh] md:h-[100vh] max-h-[1000px] flex flex-col items-center justify-center text-center bg-cover bg-center pb-[120px] md:pb-[140px]"
        style={{ backgroundImage: `url(${skaters7})` }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/60"></div>

        {/* White gradient at bottom */}
        <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-white to-transparent pointer-events-none"></div>

        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-20 text-white px-6 max-w-[700px]"
        >
          <h1 className="text-5xl md:text-6xl font-extrabold mb-4 leading-tight">
            Roll Your Own Style.
          </h1>

          <h2
            className="text-lg md:text-xl mb-6 opacity-90 font-semibold"
            role="heading"
            aria-level="2"
          >
            Built for the streets — where motion meets style.
          </h2>

          <p className="text-base md:text-lg mb-8 opacity-80 leading-relaxed">
            UrbanGlide is more than just gear — it’s a movement.
            Whether you’re skating the local streets or finding your flow at the park,
            our designs keep you bold, balanced, and built for speed.
            Glide with confidence, powered by community and culture.
          </p>

          <Link
            to="/register"
            aria-label="Get started with UrbanGlide"
            className="bg-accent text-primary font-bold px-12 py-4 rounded-lg hover:bg-accent/80 transition focus:outline-none focus:ring-4 focus:ring-accent/50"
          >
            Get Started
          </Link>
        </motion.div>
      </section>
    </SectionWrapper>
  );
}
