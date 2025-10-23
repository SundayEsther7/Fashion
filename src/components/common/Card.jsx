export default function Card({ image, name, price, oldPrice }) {
  return (
    <div className="w-[290px] h-[380px] bg-white border border-[rgba(16,38,55,0.1)] rounded-[16px] p-2 relative shadow-sm hover:scale-105 transition-transform duration-300">
      {/* Product Image */}
      <div className="w-full h-[300px] rounded-[16px] overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover rounded-[16px]"
        />
      </div>

      {/* Product Name */}
      <h3 className="text-[24px] font-semibold text-[#23262F] mt-2">{name}</h3>

      {/* Price */}
      <div className="flex items-center gap-2 mt-1">
        <span className="text-[16px] font-medium text-[#23262F]">{price}</span>
        <span className="text-[14px] line-through opacity-50 text-[#23262F]">
          {oldPrice}
        </span>
      </div>

      {/* Plus Button (floating circle) */}
      <div className="absolute bottom-[130px] right-[25px] bg-gray-200 w-[30px] h-[30px] rounded-full flex items-center justify-center hover:bg-gray-300 cursor-pointer">
        <div className="relative w-full h-full flex justify-center items-center text-black text-[24px]">
          +
        </div>
      </div>
    </div>
  );
}
