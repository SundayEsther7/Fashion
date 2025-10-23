import SectionWrapper from "../common/SectionWrapper";

export default function Highlight() {
  return (
    <SectionWrapper className="relative py-24 px-6 md:px-12">
      <div className="max-w-[1240px] mx-auto flex flex-col-reverse gap-12 items-center lg:flex-row lg:items-start">
        
        {/* Content on the left */}
        <div className="w-full lg:w-1/2 lg:text-left">
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
        
        {/* Image on the right*/}
        <div className="absolute bottom-0 left-0 w-full h-64 md:h-96 overflow-hidden flex justify-end lg:static lg:w-1/2 lg:h-auto lg:flex-none">
          <div className="relative w-[598px] h-[399px] bg-[#EAEEF3] rounded-[6px] overflow-hidden">
            <img
              className="w-full h-full object-cover object-center"
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80"
              alt="Best furniture"
            />
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
// The alignment is wrong, remember to fix that later
