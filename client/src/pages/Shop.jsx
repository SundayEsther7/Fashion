import Card from "../components/common/Card";
import { useState } from "react";

import skate2 from "../assets/skate2.jpg";
import skate3 from "../assets/skate3.jpg";
import skate4 from "../assets/skate4.jpg";
import skate5 from "../assets/skate5.jpg";
import skate6 from "../assets/skate6.jpg";
import skate7 from "../assets/skate7.jpg";
import skate8 from "../assets/skate8.jpg";
import skate9 from "../assets/skate9.jpg";
import skate10 from "../assets/skate10.jpg";
import skate11 from "../assets/skate11.jpg";
import toeguard from "../assets/toeguard.jpg";
import helmet from "../assets/helmet.jpg";
import kidspads from "../assets/kidspads.jpg";
import screwsShock from "../assets/screwsShock.jpg";
import wheels from "../assets/wheels.jpg";
import wheels1 from "../assets/wheels1.jpg";
import rubberBreakstoppers from "../assets/rubberBreakstoppers.jpg";
import rollerskateslight from "../assets/rollerskateslight.jpg";
import rubberWheels from "../assets/rubberWheels.jpg";
import skateGuard from "../assets/skateGuard.jpg";
import toeGuard1 from "../assets/toeGuard1.jpg";
import cones from "../assets/cones.jpg";
import helmetPads from "../assets/helmetPads.jpg";
import bag from "../assets/bag.jpg";
import bag1 from "../assets/bag1.jpg";
import accessory from "../assets/accessory.jpg";
import accessory1 from "../assets/accessory1.jpg";
import skates from "../assets/skates.jpg";
import bag2 from "../assets/bag2.jpg";
import buckleStrap from "../assets/buckleStrap.jpg";

export default function Shop() {
  const products = [
    {
      name: "Adult Inline Skates",
      image: skate7,
      price: "KES8000.00",
      oldPrice: "KES10000.00",
      category: "Inline Skates",
    },

    {
      name: "Adult Skates - Blue/Red",
      image: skate2,
      price: "KES4500.00",
      oldPrice: "KES5500.00",
      category: "Inline Skates",
    },
    {
      name: "Roller Skates - Blue/Red",
      image: skate3,
      price: "KES8900.00",
      oldPrice: "KES10000.00",
      category: "Roller Skates",
    },
    {
      name: "Speed Roller Skates",
      image: skate4,
      price: "KES7000.00",
      oldPrice: "KES8000.00",
      category: "Roller Skates",
    },
    {
      name: "Inline Skate - Green",
      image: skate5,
      price: "KES7000.00",
      oldPrice: "KES8000.00",
      category: "Inline Skates",
    },
    {
      name: "Three Wheel Skates",
      image: skate6,
      price: "KES10000.00",
      oldPrice: "KES8000.00",
      category: "Inline Skates",
    },
    {
      name: "LED Colored Wheels",
      image: wheels,
      price: "KES2000.00",
      oldPrice: "KES3200.00",
      category: "Parts",
    },
    {
      name: "Adult Helmet and Pads",
      image: helmetPads,
      price: "KES5000.00",
      oldPrice: "KES8000.00",
      category: "Protective Gear",
    },
    {
      name: "Buckle Strap",
      image: buckleStrap,
      price: "KES2000.00",
      oldPrice: "KES3000.00",
      category: "Parts",
    },
    {
      name: "Kids Skates - Blue/Red",
      image: skate8,
      price: "KES6000.00",
      oldPrice: "KES8000.00",
      category: "Inline Skates",
    },
    {
      name: "Skate Guard",
      image: skateGuard,
      price: "KES600.00",
      oldPrice: "KES1200.00",
      category: "Protective Gear",
    },
    {
      name: "Roller Skates",
      image: skate9,
      price: "KES8000.00",
      oldPrice: "KES10000.00",
      category: "Roller Skates",
    },
    {
      name: "Speed Inline Skates",
      image: skate10,
      price: "KES8000.00",
      oldPrice: "KES10000.00",
      category: "Inline Skates",
    },
    {
      name: "Rainbow Toe Guard",
      image: toeGuard1,
      price: "KES2000.00",
      oldPrice: "KES3400.00",
      category: "Protective Gear",
    },
    {
      name: "Skates Bag - Leather",
      image: bag,
      price: "KES4000.00",
      oldPrice: "KES6000.00",
      category: "Accessories",
    },
    {
      name: "Skating Accessories - Cones",
      image: cones,
      price: "KES3000.00",
      oldPrice: "KES4000.00",
      category: "Accessories",
    },
    {
      name: "Skating Bag - Print",
      image: bag1,
      price: "KES2000.00",
      oldPrice: "KES3800.00",
      category: "Accessories",
    },
    {
      name: "All accessories",
      image: accessory,
      price: "KES12000.00",
      oldPrice: "KES16000.00",
      category: "Accessories",
    },
    {
      name: "Three WHeel Blades",
      image: skates,
      price: "KES7000.00",
      oldPrice: "KES10000.00",
      category: "Parts",
    },
    {
      name: "Skating bag",
      image: bag2,
      price: "KES2500.00",
      oldPrice: "KES3500.00",
      category: "Accessories",
    },
    {
      name: "Accessories - Black",
      image: accessory1,
      price: "KES8000.00",
      oldPrice: "KES10000.00",
      category: "Accessories",
    },
    {
      name: "Adult Inline Skates",
      image: skate11,
      price: "KES8000.00",
      oldPrice: "KES10000.00",
      category: "Inline Skates",
    },
    {
      name: "Wheels",
      image: wheels1,
      price: "KES1500.00",
      oldPrice: "KES2000.00",
      category: "Parts",
    },
    {
      name: "Toe guard",
      image: toeguard,
      price: "KES2000.00",
      oldPrice: "KES3000.00",
      category: "Protective Gear",
    },
    {
      name: "Screws Shock",
      image: screwsShock,
      price: "KES25000.00",
      oldPrice: "KES3000.00",
      category: "Parts",
    },
    {
      name: "Helmet",
      image: helmet,
      price: "KES3000.00",
      oldPrice: "KES5000.00",
      category: "Protective Gear",
    },
    {
      name: "Kids Pads",
      image: kidspads,
      price: "KES2500.00",
      oldPrice: "KES3000.00",
      category: "Accessories",
    },
    {
      name: "Inline Skate",
      image: skate8,
      price: "KES2500.00",
      oldPrice: "KES2500.00",
      category: "Inline Skates",
    },
    {
      name: "Wheels - All Colors",
      image: wheels1,
      price: "KES2500.00",
      oldPrice: "KES2500.00",
      category: "Parts",
    },
    {
      name: "Rubber Break Stoppers",
      image: rubberBreakstoppers,
      price: "KES2500.00",
      oldPrice: "KES2500.00",
      category: "Parts",
    },
    {
      name: "Roller Skates Light",
      image: rollerskateslight,
      price: "KES2000.00",
      oldPrice: "KES2500.00",
      category: "Accessories",
    },
    {
      name: "Rubber Wheels - Black",
      image: rubberWheels,
      price: "kES3500.00",
      oldPrice: "KES4000.00",
      category: "Parts",
    },
  ];
const [category, setCategory] = useState("All");
  const [search, setSearch] = useState("");

  // Filtering
  let filteredProducts = products;

  // Search filter (case-insensitive)
  if (search.trim() !== "") {
    filteredProducts = filteredProducts.filter((p) =>
      p.name.toLowerCase().includes(search.toLowerCase())
    );
  }

  // Category filter
  if (category !== "All") {
    filteredProducts = filteredProducts.filter((p) => p.category === category);
  }

  return (
    <div className="pt-[120px] px-6 md:px-12 max-w-[1400px] mx-auto mb-20">
      {/* Title */}
      <h1 className="text-4xl font-extrabold text-primary text-center mb-10">
        Shop UrbanGlide
      </h1>

      {/* SEARCH BAR AT TOP */}
      <div className="max-w-[500px] mx-auto mb-10">
        <input
          type="text"
          placeholder="Search products..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full px-4 py-2 border rounded-md text-sm shadow-sm focus:outline-none focus:border-accent"
        />
      </div>

      {/* CATEGORY FILTER */}
      <div className="text-center mb-10">
        <div className="flex flex-wrap justify-center gap-3 text-sm">
          {["All", "Inline Skates", "Roller Skates", "Protective Gear", "Accessories", "Parts"].map((cat) => (
            <button
              key={cat}
              onClick={() => setCategory(cat)}
              className={`px-4 py-2 rounded-full border transition ${
                category === cat
                  ? "bg-primary text-white"
                  : "border-primary text-primary hover:bg-primary/10"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* PRODUCT GRID */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((item, index) => <Card key={index} {...item} />)
        ) : (
          <div className="col-span-full text-center text-neutralDark/60 py-12">
            No products found.
          </div>
        )}
      </div>
    </div>
  );
}