import SectionWrapper from "../common/SectionWrapper";

export default function Testimonials() {
  return (
    <SectionWrapper className="relative py-24 px-6 md:px-12 bg-white">
      <div className="max-w-[1240px] mx-auto flex flex-col-reverse lg:flex-row items-center gap-12">
        {/* LEFT SIDE: Text content */}
        <div className="w-full lg:w-1/2 space-y-6">
          <h2 className="text-4xl font-semibold text-primary">
            What People Are Saying
          </h2>
          <p className="text-lg text-secondary leading-relaxed">
            Furniture Power is a trusted brand loved by many customers. Our
            quality craftsmanship and attention to detail make every piece stand
            out in your home.
          </p>

          {/* Reviewer info */}
          <div className="flex items-center gap-4 mt-8">
            <img
              src="https://randomuser.me/api/portraits/men/44.jpg"
              alt="Reviewer"
              className="w-20 h-20 rounded-full object-cover"
            />
            <div>
              <p className="text-lg font-semibold text-primary">Josh Smith</p>
              <p className="text-sm text-secondary opacity-60">
                Manager of The New York Times
              </p>
            </div>
          </div>

          {/* Navigation buttons */}
          <div className="flex items-center gap-4 mt-8">
            <button className="w-12 h-12 flex items-center justify-center rounded-full bg-white shadow-md border hover:bg-gray-50 transition">
              {/* Left arrow */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 19.5 8.25 12l7.5-7.5"
                />
              </svg>
            </button>

            <button className="w-12 h-12 flex items-center justify-center rounded-full bg-[#286F6C] shadow-md hover:opacity-90 transition">
              {/* Right arrow */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="#ffffff"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m8.25 4.5 7.5 7.5-7.5 7.5"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* RIGHT SIDE: Image */}
        <div className="w-full lg:w-1/2">
          <img
            src="https://images.unsplash.com/photo-1521334884684-d80222895322?auto=format&fit=crop&w=1920&q=80"
            alt="Testimonial Visual"
            className="rounded-md w-full h-[340px] object-cover"
          />
        </div>
      </div>
    </SectionWrapper>
  );
}
