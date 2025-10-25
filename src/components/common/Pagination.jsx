import { useState } from "react";

export default function Pagination({
  totalItems = 40,
  itemsPerPage = 8,
  onPageChange,
}) {
  // number of pages
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  // current page state
  const [currentPage, setCurrentPage] = useState(1);

  // functions to handle next/prev
  const goToNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
      onPageChange?.(currentPage + 1);
    }
  };

  const goToPrev = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
      onPageChange?.(currentPage - 1);
    }
  };

  // render
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
      <button
        onClick={goToPrev}
        disabled={currentPage === 1}
        className={`w-[50px] h-[50px] rounded-full bg-white shadow-md flex items-center justify-center transition ${
          currentPage === 1
            ? "opacity-40 cursor-not-allowed"
            : "hover:scale-105"
        }`}
      >
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
        {Array.from({ length: totalPages }).map((_, index) => (
          <span
            key={index}
            onClick={() => {
              setCurrentPage(index + 1);
              onPageChange?.(index + 1);
            }}
            className={`w-2.5 h-2.5 rounded-full cursor-pointer transition ${
              currentPage === index + 1
                ? "bg-[#23262F]"
                : "border border-[#23262F] hover:bg-[#23262F]/40"
            }`}
          ></span>
        ))}
      </div>

      {/* Right arrow */}
      <button
        onClick={goToNext}
        disabled={currentPage === totalPages}
        className={`w-[50px] h-[50px] rounded-full bg-white shadow-md flex items-center justify-center transition ${
          currentPage === totalPages
            ? "opacity-40 cursor-not-allowed"
            : "hover:scale-105"
        }`}
      >
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
