import SectionWrapper from "../common/SectionWrapper";

export default function Highlight() {
  return (
    <SectionWrapper className="relative bg-white py-24 px-6 md:px-12">
      <div className="max-w-[1240px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <h2 className="text-4xl font-bold text-center md:text-left text-primary mb-6">
          The best furniture Manufacturer of your Choice
        </h2>
        <p className="text-lg text-center md:text-left text-secondary mb-6">
          Furniture Power is a software-as-a-service platform for modern
          furniture businesses. We provide a blend of aesthetics and
          practicality, helping you manage every aspect of your furniture
          collection effortlessly.
        </p>
      </div>
      {/* Image */}
        <div className="absolute bottom-0 left-0 w-full h-64 md:h-96 overflow-hidden">  
            <div >
<img src="https://images.unsplash.com/photo-1616627989174-9d8e815ee2a2?auto=format&fit=crop&w=1000&q=80" alt="Best furniture s" />
            </div>
            </div>
    </SectionWrapper>
  );
}
