// Responsive 🥳🥳🥳
//The image needs th have some space on the left when responsive
import SectionWrapper from "../common/SectionWrapper";

export default function Featured() {
  const products = [
    {
      id: 1,
      name: "Chair",
      image:
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 2,
      name: "Bed",
      image:
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 3,
      name: "Cupboard",
      image:
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 4,
      name: "Lighting",
      image:
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
    },
  ];

  return (
    <SectionWrapper className="relative w-full max-w-[1440px] h-[540px] mx-auto overflow-hidden bg-white">
      {/* Left content */}
      <div className="absolute left-[100px] top-[100px] w-[245px] z-10">
        <h2 className="text-[40px] font-semibold leading-[130%] text-[#23262F] mb-6 ">
          New in store now
        </h2>
        <p className="text-[16px] font-normal leading-[170%] tracking-[0.01em] text-[#23262F] mb-[60px]">
          Get the latest items immediately with promo prices
        </p>

        {/* Check all link */}
        <div className="flex items-center gap-[10px] text-[#23262F] cursor-pointer hover:opacity-80 transition">
          <span className="underline font-medium text-[16px] leading-[160%]">
            Check All
          </span>
          <div className="w-[20px] h-[2px] bg-[#23262F]" />
        </div>
      </div>

      {/* Product cards */}
      <div className="absolute top-[70px] left-[415px] flex gap-[20px] overflow-hidden">
        {products.map((product) => (
          <div
            key={product.id}
            className="relative w-[265px] h-[400px] rounded-[5px] overflow-hidden flex-shrink-0"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover"
            />
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/40"></div>
            {/* Product name */}
            <p className="absolute bottom-[35px] left-1/2 -translate-x-1/2 text-white text-[28px] font-semibold leading-[160%] tracking-[0.01em]">
              {product.name}
            </p>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
