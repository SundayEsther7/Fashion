import SectionWrapper from "../common/SectionWrapper";
import Card from "../common/Card";
import Pagination from "../common/Pagination";

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
    <SectionWrapper className="relative py-24 px-6 md:px-12 mb-20">
      <div className="hover:scale-105 transition-transform duration-300 p-2 shadow-sm relative rounded-[16px] border-[rgba(16,38,55,0.1)] text-center border w-full max-w-[600px] mx-auto mb-12">
        <h2 className="text-[40px] font-semibold text-[#23262F]">
          All Product
        </h2>
        <p className="text-[16px] text-[#23262F] opacity-80 mt-3 leading-relaxed">
          The products we provide only for you as our service are selected from
          the best products with number 1 quality in the world.
        </p>
      </div>

      {/* Cards grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-[1240px] mx-auto px-4">
        {products.map((product, index) => (
          <Card key={index} {...product} />
        ))}
      </div>
      <Pagination />
    </SectionWrapper>
  );
}
