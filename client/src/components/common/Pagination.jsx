export default function Pagination({
  totalItems = 40,
  itemsPerPage = 8,
  currentPage = 1,
  onPageChange,
}) {
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const goToPrev = () => {
    if (currentPage > 1) onPageChange?.(currentPage - 1);
  };

  const goToNext = () => {
    if (currentPage < totalPages) onPageChange?.(currentPage + 1);
  };

  return (
    <div className="w-full max-w-[270px] mx-auto mt-12 flex items-center justify-between gap-8">

      {/* Left Arrow */}
      <button
        onClick={goToPrev}
        disabled={currentPage === 1}
        className={`
          w-[50px] h-[50px] rounded-full bg-white shadow-md flex items-center justify-center
          transition-all duration-300
          ${currentPage === 1 
            ? "opacity-40 cursor-not-allowed"
            : "hover:scale-110 hover:shadow-[0_0_10px_#70E000]"
          }
        `}
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" 
          viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6 text-primary">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5"/>
        </svg>
      </button>

      {/* Dots */}
      <div className="flex items-center gap-3">
        {Array.from({ length: totalPages }).map((_, index) => {
          const isActive = currentPage === index + 1;
          return (
            <span
              key={index}
              onClick={() => onPageChange?.(index + 1)}
              className={`
                w-3 h-3 rounded-full cursor-pointer transition-all duration-300
                ${isActive
                  ? "bg-accent shadow-[0_0_6px_#70E000]"
                  : "border border-primary hover:bg-primary/30"
                }
              `}
            />
          );
        })}
      </div>

      {/* Right Arrow */}
      <button
        onClick={goToNext}
        disabled={currentPage === totalPages}
        className={`
          w-[50px] h-[50px] rounded-full bg-white shadow-md flex items-center justify-center
          transition-all duration-300
          ${currentPage === totalPages
            ? "opacity-40 cursor-not-allowed"
            : "hover:scale-110 hover:shadow-[0_0_10px_#70E000]"
          }
        `}
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none"
          viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6 text-primary">
          <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5"/>
        </svg>
      </button>

    </div>
  );
}
