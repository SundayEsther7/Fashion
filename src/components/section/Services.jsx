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
          <b>✅Valuation Services</b>
          Sometimes features require a short description. This can be detailed
          description
        </p>
        <p>
          <b>✅Development of Furniture Models</b> <br />
          Sometimes features require a short description. This can be detailed
          description
        </p>
      </div>
    </div></SectionWrapper>
  );
}
