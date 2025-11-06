import { Link } from "react-router-dom";

export default function Card({ image, name, price, oldPrice }) {
  return (
    <div
      className="
      group w-full 
      max-w-[290px] h-[380px]
      bg-white border border-neutralLight
      rounded-[16px] p-3 relative shadow-sm
      hover:shadow-lg hover:-translate-y-1
      transition-all duration-300
    "
    >
      {/* Image */}
      <div className="w-full h-[300px] rounded-[12px] overflow-hidden relative">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover rounded-[12px] group-hover:scale-110 transition-transform duration-500"
        />

        {/* Hover Accent Glow */}
        <div className="absolute inset-0 rounded-[12px] border-2 border-transparent group-hover:border-accent/80 transition"></div>
      </div>

      {/* Name */}
      <h3 className="text-[20px] font-bold text-primary mt-3 tracking-tight">
        {name}
      </h3>

      {/* Price */}
      <div className="flex items-center gap-2 mt-1">
        <span className="text-[16px] font-semibold text-secondary">
          {price}
        </span>

        {oldPrice && (
          <span className="text-[14px] line-through opacity-50 text-neutralDark">
            {oldPrice}
          </span>
        )}
      </div>

      {/* Add to Cart / Floating Button */}
      <Link to={`/product/${name.toLowerCase().replace(/\s+/g, "-")}`}>

  <div className="absolute bottom-[100px] right-[20px] 
    bg-accent text-neutralDark w-[36px] h-[36px] rounded-full 
    flex items-center justify-center cursor-pointer
    hover:bg-accent/80 transition">

    <svg xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 24 24" fill="none" stroke="currentColor" 
      strokeWidth={1.8} className="w-5 h-5">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
    </svg>

  </div>

</Link>

    </div>
  );
}
