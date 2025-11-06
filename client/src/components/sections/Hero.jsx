import skate1 from "../../assets/skate1.jpg";
import SectionWrapper from "../common/SectionWrapper";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <SectionWrapper>
      <section
        className="relative h-[100vh] max-h-[1000px] flex items-center justify-center text-center bg-cover bg-center"
        style={{ backgroundImage: `url(${skate1})` }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/50"></div>

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

        {/* Stats Bar */}
        <div
          className="absolute bottom-6 left-1/2 -translate-x-1/2 
            w-[90%] max-w-[1100px] h-[130px]
            bg-white/10 backdrop-blur-md border border-white/20
            rounded-lg text-white font-saira flex justify-around items-center 
            text-center text-sm md:text-base divide-x divide-white/30"
        >
          <div className="px-4">
            <span className="text-accent text-xl font-bold">5+</span>
            <p className="text-xs opacity-80">years in the scene</p>
          </div>
          <div className="px-4">
            <span className="text-accent text-xl font-bold">3</span>
            <p className="text-xs opacity-80">skate hubs in Nairobi</p>
          </div>
          <div className="px-4">
            <span className="text-accent text-xl font-bold">12k+</span>
            <p className="text-xs opacity-80">skaters styled</p>
          </div>
          <div className="px-4">
            <span className=" text-accent text-xl font-bold">200+</span>
            <p className="text-xs opacity-80">skate gear items</p>
          </div>
        </div>
      </section>
    </SectionWrapper>
  );
}
