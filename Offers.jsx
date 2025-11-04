import React from "react";
import { category_offers } from "../Offer"; // Import offers data
import Navbar from "../components/Navbar"; // Reuse your existing navbar

function Offers() {
  return (
    <>
      <Navbar />
      <div className="p-8">
        <h1 className="text-3xl font-bold text-center text-purple-600 mb-8">
          Today's Special Offers 
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {category_offers.map((offer) => (
            <div
              key={offer.category}
              className="bg-white shadow-md rounded-xl p-6 flex flex-col items-center hover:shadow-lg hover:scale-105 transition-transform"
            >
              <h2 className="text-xl font-semibold text-gray-800 capitalize mb-2">
                {offer.category.replace("_", " ")}
              </h2>
              <p className="text-gray-600 text-center">{offer.type}</p>
              <span className="mt-3 bg-amber-500 text-white px-4 py-1 rounded-full text-sm font-bold">
                {offer.value} OFF
              </span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Offers;
