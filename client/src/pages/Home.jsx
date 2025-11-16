import Hero from "../components/sections/Hero.jsx";
import Statistics from "../components/sections/Statistics.jsx";
import Services from "../components/sections/Services.jsx";
import Features from "../components/sections/Features.jsx";
import Highlights from "../components/sections/Highlight.jsx";
import AllProducts from "../components/sections/Products.jsx";
import Testimonials from "../components/sections/Testimonials.jsx";
import CTA from "../components/layout/CTA.jsx";

export default function Home() {
  return (
    <>
      <Hero />
      <Statistics />
      <Services />
      <Features />
      <Highlights />
      <AllProducts />
      <Testimonials />
      <CTA />
    </>
  );
}
