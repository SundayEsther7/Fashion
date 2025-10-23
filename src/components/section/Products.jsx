import SectionWrapper from "../common/SectionWrapper";
import Card from "../common/Card";

export default function AllProducts() {
  const products = [
    {
      name: "Lamp",
      image:
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
      price: "$75.00",
      oldPrice: "$82.00",
    },
    {
      name: "Bath",
      image:
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
      price: "$75.00",
      oldPrice: "$82.00",
    },
    {
      name: "Desk",
      image:
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
      price: "$75.00",
      oldPrice: "$82.00",
    },
    {
      name: "Accessory",
      image:
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
      price: "$75.00",
      oldPrice: "$82.00",
    },
    {
      name: "Cupboard",
      image:
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
      price: "$75.00",
      oldPrice: "$82.00",
    },
    {
      name: "Bed",
      image:
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
      price: "$75.00",
      oldPrice: "$82.00",
    },
    {
      name: "Chair",
      image:
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
      price: "$75.00",
      oldPrice: "$82.00",
    },
    {
      name: "Child",
      image:
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
      price: "$75.00",
      oldPrice: "$82.00",
    },
  ];

  return (
    <SectionWrapper className="py-20 bg-white">
      <div className="hover:scale-105 transition-transform duration-300 p-2 shadow-sm relative rounded-[16px] border-[rgba(16,38,55,0.1)] text-center border w-full max-w-[600px] mx-auto mb-12">
        <h2 className="text-[40px] font-semibold text-[#23262F]">
          All Product
        </h2>
        <p className="text-[16px] text-[#23262F] opacity-80 mt-3 leading-relaxed">
          The products we provide only for you as our service are selected from
          the best products with number 1 quality in the world.
        </p>
      </div>
      {/* Make this responsive */}
      {/* Cards grid */}
      <div className="flex flex-wrap justify-center gap-8 max-w-[1240px] mx-auto">
        {products.map((product, index) => (
          <Card key={index} {...product} />
        ))}
      </div>

      
    </SectionWrapper>
  );
}
