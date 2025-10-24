export default function Pagination() {
// 

  return (
    <div
      className="
         lg:absolute lg:left-[585px] lg:top-[1132px]
        w-full max-w-[270px] h-[50px] mx-auto mt-12 lg:mb-12
        lg:w-[270px] lg:h-[50px] lg:mx-0 lg:mt-12
        flex items-center justify-between gap-8
      "
    >
      {/* Left arrow */}
      <button className="w-[50px] h-[50px] rounded-full bg-white shadow-md flex items-center justify-center hover:scale-105 transition">
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
 {/* Dots */}
    <div className="flex items-center gap-3">
      <span className="w-2.5 h-2.5 bg-[#23262F] rounded-full"></span>
      <span className="w-2.5 h-2.5 border border-[#23262F] rounded-full"></span>
      <span className="w-2.5 h-2.5 border border-[#23262F] rounded-full"></span>
      <span className="w-2.5 h-2.5 border border-[#23262F] rounded-full"></span>
      <span className="w-2.5 h-2.5 border border-[#23262F] rounded-full"></span>
    </div>

      {/* Right arrow */}
      <button className="w-[50px] h-[50px] rounded-full shadow-md flex items-center justify-center hover:scale-105 transition">
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
            d="m8.25 4.5 7.5 7.5-7.5 7.5"
          />
        </svg>
      </button>
    </div>
  );
}
//NB:
//Properly complete the pagination component above.
//add the pagination component to the Products.jsx file
//add more products to the products array in Products.jsx