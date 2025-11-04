import SectionWrapper from "../common/SectionWrapper";
import Card from "../common/Card";
import Pagination from "../common/Pagination";
import { useState } from "react";



export default function AllProducts() {
  // 🔹 Sample product data
  const products = [
    {
      name: "Bed",
      image:
        "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YmVkfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=500",
      price: "$75.00",
      oldPrice: "$82.00",
    },
    {
      name: "Couch",
      image:
        "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Y291Y2h8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=500",
      price: "$75.00",
      oldPrice: "$82.00",
    },
    {
      name: "Table",
      image:
        "https://images.unsplash.com/photo-1533090481720-856c6e3c1fdc?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHRhYmxlfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=500",
      price: "$75.00",
      oldPrice: "$82.00",
    },
    {
      name: "Cabinets",
      image:
        "https://images.unsplash.com/photo-1631048501619-a27088a3bb70?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGNhYmluZXRzfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=300",
      price: "$75.00",
      oldPrice: "$82.00",
    },
    {
      name: "Cupboard",
      image:
        "https://images.unsplash.com/photo-1544279772-1c0fae82e730?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTR8fGN1cGJvYXJkfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=300",
      price: "$75.00",
      oldPrice: "$82.00",
    },
    {
      name: "Bookcase",
      image:
        "https://plus.unsplash.com/premium_photo-1677517547416-a48ee5cf6c97?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Ym9vayUyMGNhc2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=300",
      price: "$75.00",
      oldPrice: "$82.00",
    },
    {
      name: "Chair",
      image:
        "https://plus.unsplash.com/premium_photo-1683133939183-edd5476e6200?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Y2hhaXJ8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=300",
      price: "$75.00",
      oldPrice: "$82.00",
    },
    {
      name: "Dining Table",
      image:
        "https://images.unsplash.com/photo-1617850687361-a07b256ff259?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGRpbmluZyUyMHRhYmxlfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=300",
      price: "$75.00",
      oldPrice: "$82.00",
    },
    {
      name: "Mirror",
      image:
        "https://plus.unsplash.com/premium_photo-1676823570845-d2dd715c9967?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTAxfHxtaXJyb3IlMjBmdXJudHVyZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=300",
      price: "$65.00",
      oldPrice: "$70.00",
    },
    {
      name: "Sofa",
      image:
        "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=800&q=80",
      price: "$120.00",
      oldPrice: "$135.00",
    },
    {
      name: "Rug",
      image:
        "https://images.unsplash.com/photo-1560185893-a55cbc8c57e8?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTB8fHJ1Z3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=300",
      price: "$85.00",
      oldPrice: "$90.00",
    },
    {
      name: "Plant",
      image:
        "https://plus.unsplash.com/premium_photo-1674237276485-f1e5af1fe878?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzd8fGhvdXNlJTIwJTIwcGxhbnR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=300",
      price: "$40.00",
      oldPrice: "$45.00",
    },
    {
      name: "Shelf",
      image:
        "https://plus.unsplash.com/premium_photo-1683120650992-ac6af6b180dd?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fHNoZWxmfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=300",
      price: "$90.00",
      oldPrice: "$100.00",
    },
    {
      name: "Chaise",
      image:
        "https://plus.unsplash.com/premium_photo-1683134274095-22a2d27c6d58?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Njh8fGNoYWlzZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=300",
      price: "$180.00",
      oldPrice: "$200.00",
    },
    {
      name: "Stool",
      image:
        "https://images.unsplash.com/photo-1545805523-45ff2b97a766?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTh8fHN0b29sfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=300",
      price: "$55.00",
      oldPrice: "$65.00",
    },
    {
      name: "Bookshelf",
      image:
        "https://plus.unsplash.com/premium_photo-1733864775808-c7c1ccbe5422?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjF8fGJvb2tzaGVsZnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=300",
      price: "$140.00",
      oldPrice: "$155.00",
    },
    {
      name: "Nightstand",
      image:
        "https://images.unsplash.com/photo-1752916140847-abae939c6c59?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fG5pZ2h0JTIwc3RhbmR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=300",
      price: "$45.00",
      oldPrice: "$50.00",
    },
    {
      name: "Vase",
      image:
        "https://images.unsplash.com/photo-1474180637685-d9bf90314e55?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODJ8fHZhc2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=300",
      price: "$30.00",
      oldPrice: "$35.00",
    },
    {
      name: "Tv Stand",
      image:
        "https://plus.unsplash.com/premium_photo-1664302386657-708e15ab9691?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjV8fHR2JTIwc3RhbmR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=300",
      price: "$70.00",
      oldPrice: "$80.00",
    },
    {
      name: "Candle",
      image:
        "https://images.unsplash.com/photo-1537948756265-406a522f1a45?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNhbmRsZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=500",
      price: "$25.00",
      oldPrice: "$30.00",
    },
  ];

  // 🔹1.  Pagination setup
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4; // products per page

  //2. calculate visible products
  const start = (currentPage - 1) * itemsPerPage;// starting index
  const end = start + itemsPerPage;// ending index
  const visibleProducts = products.slice(start, end);// products for current page
  //3. render
  return (
    <SectionWrapper className="relative py-24 px-6 md:px-12 mb-20">
      {/* Header */}
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
        {visibleProducts.map((product, index) => (
          <Card key={index} {...product} />
        ))}
      </div>

      {/* Pagination below */}
      <Pagination
        totalItems={products.length}
        itemsPerPage={itemsPerPage}
        onPageChange={setCurrentPage}
      />
    </SectionWrapper>
  );
}

//Nb;
// 1. Sample product data added
// 2. Pagination logic implemented to show 4 products per page
// 3. Pagination component integrated
//Think of more things?