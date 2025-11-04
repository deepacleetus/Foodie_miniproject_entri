import React from "react";
import { food_items } from "../Food";
import { category_offers } from "../Offer"; 
import { useDispatch, useSelector } from "react-redux";
import { addTocart } from "../redux/cart";

function FoodItems({ category }) {
  const dispatch = useDispatch();
  const searchTerm = useSelector((state) => state.search.term);

  let filteredItems = food_items;

  // Filter by category
  if (category) {
    filteredItems = filteredItems.filter(
      (item) => item.food_category === category
    );
  }

  // Filter by search term
  if (searchTerm && searchTerm.trim() !== "") {
    filteredItems = filteredItems.filter((item) =>
      item.food_name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }

  // ✅ Apply category-wise offer
  const getDiscountedPrice = (item) => {
    const offer = category_offers.find(
      (o) => o.category === item.food_category
    );
    if (!offer) return item.price;

    if (offer.type === "percentage") {
      return Math.round(item.price - (item.price * offer.value) / 100);
    } else if (offer.type === "flat") {
      return Math.max(0, item.price - offer.value);
    }
    return item.price;
  };

  const getOfferLabel = (item) => {
    const offer = category_offers.find(
      (o) => o.category === item.food_category
    );
    if (!offer) return null;
    return offer.type === "percentage"
      ? `${offer.value}% OFF`
      : `₹${offer.value} OFF`;
  };

  return (
    <div className="flex flex-wrap justify-center gap-6 w-full p-5">
      {filteredItems.length > 0 ? (
        filteredItems.map((item) => {
          const discountedPrice = getDiscountedPrice(item);
          const offerLabel = getOfferLabel(item);

          return (
            <div
              key={item.id}
              className="bg-white shadow-lg rounded-xl overflow-hidden w-[250px] hover:scale-105 transition-transform duration-300"
            >
              <img
                src={item.food_image}
                alt={item.food_name}
                className="w-full h-48 object-cover"
              />
              <div className="p-3 text-center">
                <h2 className="font-semibold text-lg">{item.food_name}</h2>
                <p className="text-gray-500 capitalize">
                  {item.food_category}
                </p>

                {/* ✅ Offer and Price Display */}
                {offerLabel && (
                  <p className="text-amber-600 font-semibold">
                    {offerLabel}
                  </p>
                )}
                <div className="mt-1">
                  {offerLabel ? (
                    <>
                      <span className="line-through text-gray-400 mr-2">
                        ₹{item.price}
                      </span>
                      <span className="text-green-600 font-bold">
                        ₹{discountedPrice}
                      </span>
                    </>
                  ) : (
                    <span className="text-gray-800 font-bold">
                      ₹{item.price}
                    </span>
                  )}
                </div>

                <button
                  onClick={() =>
                    dispatch(addTocart({ ...item, price: discountedPrice }))
                  }
                  className="mt-3 bg-green-600 text-white px-4 py-1 rounded-md hover:bg-green-700 cursor-pointer"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          );
        })
      ) : (
        <p className="text-gray-500 text-lg mt-10">No food items found 😔</p>
      )}
    </div>
  );
}

export default FoodItems;
