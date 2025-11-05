import Hero from "../components/sections/Hero";
import Services from "../components/sections/Services.jsx";
import Features from "../components/sections/Features";
import Highlights from "../components/sections/Highlight";
import Products from "../components/sections/Products";
import Testimonials from "../components/sections/Testimonials";
import CTA from "../components/layout/CTA.jsx";

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <Features />
      <Highlights />
      <Products />
      <Testimonials />
      <CTA />
    </>
  );
}
