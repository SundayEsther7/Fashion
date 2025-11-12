import { Link } from "react-router-dom";

export default function Card({ image, name, price, oldPrice }) {
  return (
    <div
      className="
        group w-full 
        max-w-[290px] h-[380px]
        bg-white border border-neutralLight
        rounded-[16px] p-3 relative shadow-sm
        hover:shadow-lg md:hover:-translate-y-2
        transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]
        active:scale-[0.98]  // ✅ Adds tap feedback for mobile
        focus-within:ring-2 focus-within:ring-accent/60
      "
      tabIndex={0}
      aria-label={`${name}, ${price}${oldPrice ? `, previously ${oldPrice}` : ""}`}
    >
      {/* Image */}
      <div className="w-full h-[300px] rounded-[12px] overflow-hidden relative">
        <img
          src={image}
          alt={name}
          loading="lazy"
          className="
            w-full h-full object-cover rounded-[12px]
            transition-transform duration-700
            md:group-hover:scale-[1.08]  //  Only animate on desktop
            ease-[cubic-bezier(0.22,1,0.36,1)]
          "
        />

        {/* Hover Accent Glow */}
        <div className="
          absolute inset-0 rounded-[12px] border-2 border-transparent 
          md:group-hover:border-accent/70 
          md:group-hover:shadow-[0_0_20px_rgba(0,196,180,0.25)]
          transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]
        "></div>
      </div>

      {/* Product Name */}
      <h3 className="text-[18px] sm:text-[20px] font-bold text-primary mt-3 tracking-tight line-clamp-1">
        {name}
      </h3>

      {/* Price Section */}
      <div className="flex items-center gap-2 mt-1">
        <span className="text-[15px] sm:text-[16px] font-semibold text-secondary">
          {price}
        </span>
        {oldPrice && (
          <span className="text-[13px] sm:text-[14px] line-through opacity-50 text-neutralDark">
            {oldPrice}
          </span>
        )}
      </div>

      {/* Floating Add Button */}
      <Link
        to={`/product/${name.toLowerCase().replace(/\s+/g, "-")}`}
        aria-label={`View details for ${name}`}
        className="absolute bottom-[90px] right-[16px] sm:bottom-[100px] sm:right-[20px]"
      >
        <div
          className="
            bg-accent text-neutralDark 
            w-[40px] h-[40px] sm:w-[44px] sm:h-[44px] 
            rounded-full flex items-center justify-center
            cursor-pointer shadow-md
            hover:bg-accent/80 focus:bg-accent/90
            transition-transform duration-300
            md:group-hover:translate-y-[-3px]  // Gentle hover float on desktop
            active:scale-95
          "
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            className="w-5 h-5"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
          </svg>
        </div>
      </Link>
    </div>
  );
}
