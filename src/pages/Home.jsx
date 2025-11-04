import Hero from "../components/sections/Hero";
import Features from "../components/sections/Features";
import Highlights from "../components/sections/Highlight";
import Products from "../components/sections/Products";
import Testimonials from "../components/sections/Testimonials";
import CTA from "../components/layout/CTA.jsx";

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <Highlights />
      <Products />
      <Testimonials />
      <CTA />
    </>
  );
}
