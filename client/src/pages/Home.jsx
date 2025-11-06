import Hero from "../components/sections/Hero";
import Services from "../components/sections/Services.jsx";
import Features from "../components/sections/Features";
import Highlights from "../components/sections/Highlight";
import AllProducts from "../components/sections/Products.jsx";
import Testimonials from "../components/sections/Testimonials";
import CTA from "../components/layout/CTA.jsx";

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <Features />
      <Highlights />
      <AllProducts />
      <Testimonials />
      <CTA />
    </>
  );
}
