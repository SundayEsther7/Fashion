import Header from "./components/layout/Header"
import Hero from "./components/section/Hero"
import Services from "./components/section/Services"
import Features from "./components/section/Features";
import Highlight from "./components/section/Highlight";
import Products from "./components/section/Products";
import Testimonials from "./components/section/Testimonials";
import CTA from "./components/layout/CTA.jsx";
import Footer from "./components/layout/Footer.jsx";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Services />
      <Features />
      <Highlight />
      <Products />
      <Testimonials />
      <CTA />
      <Footer />
    </>
  );
}

export default App;

    