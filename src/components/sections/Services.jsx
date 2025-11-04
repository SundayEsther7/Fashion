import SectionWrapper from "../common/SectionWrapper";
export default function Services() {
  return (
    <SectionWrapper className="py-20">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center max-w-[1240px] mx-auto">

        {/* Left: Image */}
        <div className="rounded-[10px] overflow-hidden shadow-md">
          <img
            src="https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=800&q=80"
            alt="Furniture design workspace"
            className="w-full max-w-[554px] max-h-[443px] object-cover"
          />
        </div>
      <div>
        <h2 className="text-4xl font-bold text-center text-primary mb-12">
          We Create your home more aesthetic?
        </h2>
        {/* put them in their own span */}
        <p>
          Furniture power is a software as services for multipurpose business
          management system.
        </p>
        <p>
          <b><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
</svg>

            Valuation Services</b>
          Sometimes features require a short description. This can be detailed
          description
        </p>
        <p>
          <b><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
</svg>
 Development of Furniture Models</b> <br />
          Sometimes features require a short description. This can be detailed
          description
        </p>
      </div>
    </div></SectionWrapper>
  );
}
