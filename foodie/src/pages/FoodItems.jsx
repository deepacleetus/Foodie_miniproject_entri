import React, { useEffect, useState } from 'react'
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button'

function FoodItems({ category }) {
  const [categories, setCategory] = useState([]);

  const fetchCategory = async () => {
    try {
      let url = "";

      if (category) {
        // Fetch by selected category
        url = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`;
      } else {
        // Fetch all meals
        url = "https://www.themealdb.com/api/json/v1/1/search.php?s=";
      }
       console.log(url);
      const response = await fetch(url);
      const data = await response.json();

      // Save meals array (handle null case)
      setCategory(data.meals || []);
    } catch (error) {
      console.error("Error fetching meals:", error);
    }
  };

  useEffect(() => {
    fetchCategory();
  }, [category]);

  return (
    <div className="max-w-[1200px] mx-auto mt-6">
      {/* Arrows */}
      <div className="flex justify-end mb-4">
        <div className="cursor-pointer flex justify-center items-center w-[30px] h-[30px] bg-amber-50 rounded-full mx-2 shadow">
          <FaArrowLeft />
        </div>
        <div className="cursor-pointer flex justify-center items-center w-[30px] h-[30px] bg-amber-50 rounded-full mx-2 shadow">
          <FaArrowRight />
        </div>
      </div>

      {/* Cards */}
      <div className="flex flex-wrap justify-center gap-4">
        {categories.length > 0 ? (
          categories.map((cat) => (
            <Card
  key={cat.idMeal}
  className="flex flex-col justify-between items-center bg-white shadow-md rounded-xl w-40 min-h-48 p-3 cursor-pointer hover:scale-105 hover:shadow-lg transition-transform duration-300"
>
  <Card.Body className="flex flex-col items-center justify-between w-full">
    {/* Food Image */}
    <img
      src={cat.strMealThumb}
      alt={cat.strMeal}
      className="w-24 h-24 rounded-full mb-2 object-cover"
    />

   
    <h2
      className="text-sm font-semibold text-gray-800 text-center mb-2 line-clamp-1 w-full"
      title={cat.strMeal} 
    >
      {cat.strMeal}
    </h2>

    
    <Button
      variant="outline-success"
      size="sm"
      className="text-xs px-3 py-1 bg-green-500"
      onClick={() => addToCart(cat)}
    >
      Add to Cart
    </Button>
  </Card.Body>
</Card>

          ))
        ) : (
          <p className="text-gray-500 text-center">No meals found.</p>
        )}
      </div>
    </div>
  );
}

export default FoodItems;
