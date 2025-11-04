import SectionWrapper from "../common/SectionWrapper";
import Card from "../common/Card";
import Pagination from "../common/Pagination";
import { useState } from "react";

import skate2 from "../../assets/skate2.jpg";
import skate3 from "../../assets/skate3.jpg";
import skate4 from "../../assets/skate4.jpg";
import skate5 from "../../assets/skate5.jpg";
import skate6 from "../../assets/skate6.jpg";
import skate7 from "../../assets/skate7.jpg";
import skate8 from "../../assets/skate8.jpg";
import skate9 from "../../assets/skate9.jpg";
import skate10 from "../../assets/skate10.jpg";
import skate11 from "../../assets/skate11.jpg";
import toeguard from "../../assets/toeguard.jpg";
import helmet from "../../assets/helmet.jpg";
import kidspads from "../../assets/kidspads.jpg";
import screwsShock from "../../assets/screwsShock.jpg";
import wheels from "../../assets/wheels.jpg";
import wheels1 from "../../assets/wheels1.jpg";
import rubberBreakstoppers from "../../assets/rubberBreakstoppers.jpg";
import rollerskateslight from "../../assets/rollerskateslight.jpg";
import rubberWheels from "../../assets/rubberWheels.jpg";
import skateGuard from "../../assets/skateGuard.jpg";
import toeGuard1 from "../../assets/toeGuard1.jpg";
import cones from "../../assets/cones.jpg";
import helmetPads from "../../assets/helmetPads.jpg";
import bag from "../../assets/bag.jpg";
import bag1 from "../../assets/bag1.jpg";
import accessory from "../../assets/accessory.jpg";
import accessory1 from "../../assets/accessory1.jpg";
import skates from "../../assets/skates.jpg";
import bag2 from "../../assets/bag2.jpg";
import buckleStrap from "../../assets/buckleStrap.jpg";

export default function AllProducts() {
  //  Sample product data
  const products = [
   
 {
      name: "Adult Inline Skates",
      image: skate7,
      price: "KES8000.00",
      oldPrice: "KES10000.00",
    },
    
    {
      name: "Adult Skates - Blue/Red",
      image: skate2,
      price: "KES4500.00",
      oldPrice: "KES5500.00",
    },
    {
      name: "Roller Skates - Blue/Red",
      image: skate3,
      price: "KES8900.00",
      oldPrice: "KES10000.00",
    },
    {
      name: "Speed Roller Skates",
      image: skate4,
      price: "KES7000.00",
      oldPrice: "KES8000.00",
    },
    {
      name: "Inline Skate - Green",
      image: skate5,
      price: "KES7000.00",
      oldPrice: "KES8000.00",
    },
    {
      name: "Three Wheel Skates",
      image: skate6,
      price: "KES10000.00",
      oldPrice: "KES8000.00",
    },
    {
      name: "LED Colored Wheels",
      image: wheels,
      price: "KES2000.00",
      oldPrice: "KES3200.00",
    },
    {
      name: "Adult Helmet and Pads",
      image: helmetPads,
      price: "KES5000.00",
      oldPrice: "KES8000.00",
    },
    {
      name: "Buckle Strap",
      image: buckleStrap,
      price: "KES2000.00",
      oldPrice: "KES3000.00",
    },
    {
      name: "Kids Skates - Blue/Red",
      image: skate8,
      price: "KES6000.00",
      oldPrice: "KES8000.00",
    },
    {
      name: "Skate Guard",
      image: skateGuard,
      price: "KES600.00",
      oldPrice: "KES1200.00",
    },
    {
      name: "Roller Skates",
      image: skate9,
      price: "KES8000.00",
      oldPrice: "KES10000.00",
    },
    {
      name: "Speed Inline Skates",
      image: skate10,
      price: "KES8000.00",
      oldPrice: "KES10000.00",
    },
    {
      name: "Rainbow Toe Guard",
      image: toeGuard1,
      price: "KES2000.00",
      oldPrice: "KES3400.00",
    },
    {
      name: "Skates Bag - Leather",
      image: bag,
      price: "KES4000.00",
      oldPrice: "KES6000.00",
    },
    {
      name: "Skating Accessories - Cones",
      image: cones,
      price: "KES3000.00",
      oldPrice: "KES4000.00",
    },
    {
      name: "Skating Bag - Print",
      image: bag1,
      price: "KES2000.00",
      oldPrice: "KES3800.00",
    },
    {
      name: "All accessories",
      image: accessory,
      price: "KES12000.00",
      oldPrice: "KES16000.00",
    },
    {
      name: "Three WHeel Blades",
      image: skates,
      price: "KES7000.00",
      oldPrice: "KES10000.00",
    },
    {
      name: "Skating bag",
      image: bag2,
      price: "KES2500.00",
      oldPrice: "KES3500.00",
    },
    {
      name: "Accessories - Black",
      image: accessory1,
      price: "KES8000.00",
      oldPrice: "KES10000.00",
    },
    {
      name: "Adult Inline Skates",
      image: skate11,
      price: "KES8000.00",
      oldPrice: "KES10000.00",
    },
    {
      name: "Wheels",
      image: wheels1,
      price: "KES1500.00",
      oldPrice: "KES2000.00",
    },
    {
      name: "Toe guard",
      image: toeguard,
      price: "KES2000.00",
      oldPrice: "KES3000.00",
    },
    {
      name: "Screws Shock",
      image: screwsShock,
      price: "KES25000.00",
      oldPrice: "KES3000.00",
    },
    {
      name: "Helmet",
      image: helmet,
      price: "KES3000.00",
      oldPrice: "KES5000.00",
    },
    {
      name: "Kids Pads",
      image: kidspads,
     price: "KES2500.00",
      oldPrice: "KES3000.00",
    },
    {
      name: "Inline Skate",
      image: skate8,
      price: "KES2500.00",
      oldPrice: "KES2500.00",
    },
    {
      name: "Wheels - All Colors",
      image: wheels1,
      price: "KES2500.00",
      oldPrice: "KES2500.00",
    },
    {
      name: "Rubber Break Stoppers",
      image: rubberBreakstoppers,
      price: "KES2500.00",
      oldPrice: "KES2500.00",
    },
    {
      name: "Roller Skates Light",
      image: rollerskateslight,
      price: "KES2000.00",
      oldPrice: "KES2500.00",
    },
    {
      name: "Rubber Wheels - Black",
      image: rubberWheels,
      price: "kES3500.00",
      oldPrice: "KES4000.00",
    },
  ];

  // 1.  Pagination setup
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8; // products per page

  //2. calculate visible products
  const start = (currentPage - 1) * itemsPerPage; // starting index
  const end = start + itemsPerPage; // ending index
  const visibleProducts = products.slice(start, end); // products for current page

  //3. render
  return (
    <SectionWrapper className="relative py-24 px-6 md:px-12 mb-20">
      {/* Header */}
      <div className="hover:scale-105 transition-transform duration-300 p-2 shadow-sm relative rounded-[16px] border-[rgba(16,38,55,0.1)] text-center border w-full max-w-[600px] mx-auto mb-12">
        <h2 className="text-[40px] font-semibold text-[#23262F]">
          All Products
        </h2>
        <p className="text-[16px] text-[#23262F] opacity-80 mt-3 leading-relaxed">
          Explore our full lineup of gear—curated for performance, comfort and a
        look that never blends in.
        </p>
      </div>

      {/* Cards grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-[1240px] mx-auto px-4">
        {visibleProducts.map((product, index) => (
          <Card key={index} {...product} />
        ))}
      </div>

      {/* Pagination component */}
      <Pagination
        totalItems={products.length} // total products
        itemsPerPage={itemsPerPage} // products per page
        currentPage={currentPage} // current active page
        onPageChange={setCurrentPage} // updates parent state
      />
    </SectionWrapper>
  );
}
