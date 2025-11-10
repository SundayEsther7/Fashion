import skate1 from "../../assets/skate1.jpg";
import SectionWrapper from "../common/SectionWrapper";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <SectionWrapper className="">
      <section
        className="relative h-[100vh] max-h-[1000px] flex items-center justify-center text-center bg-cover bg-center"
        style={{ backgroundImage: `url(${skate1})` }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/50"></div>

{/* White gradient */}
        <div className="absolute inset-x-0 bottom-0 h-10 bg-gradient-to-t from-white to-transparent pointer-events-none"></div>

        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-20 text-white px-6"
        >
          <h1 className="text-5xl md:text-6xl font-extrabold mb-4 font-saira">
            Roll Your Own Style.
          </h1>

          <p className="text-lg md:text-xl mb-8 opacity-90 max-w-[580px] mx-auto font-saira">
            Built for the streets — where motion meets style.
          </p>

          <Link to="/register" className="bg-accent text-primary font-bold px-12 py-4 rounded-lg hover:bg-accent/80 transition font-saira">
            Get Started
          </Link>
        </motion.div>

        </section>
    </SectionWrapper>
  );
}
