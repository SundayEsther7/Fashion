import SectionWrapper from "../common/SectionWrapper";
import Card from "../common/Card";

export default function AllProducts() {
 
  const products = [
  {
    name: "Lamp",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
    price: "$75.00",
    oldPrice: "$82.00",
  },
  {
    name: "Bath",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
    price: "$75.00",
    oldPrice: "$82.00",
  },
]

  return (
    <SectionWrapper className="py-20 bg-white">
      <div className="text-center max-w-[600px] mx-auto mb-12">
        <h2 className="text-[40px] font-semibold text-[#23262F]">All Product</h2>
        <p className="text-[16px] text-[#23262F] opacity-80 mt-3 leading-relaxed">
          The products we provide only for you as our service are selected from
          the best products with number 1 quality in the world.
        </p>
      </div>

      
    </SectionWrapper>
  );
}
