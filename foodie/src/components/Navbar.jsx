import React from 'react'
import { MdOutlineEmojiFoodBeverage } from 'react-icons/md'
import { PiBowlFoodBold } from 'react-icons/pi'
import { BiSearchAlt2 } from 'react-icons/bi'
import { HiOutlineShoppingCart } from 'react-icons/hi'
import { BiSolidOffer } from 'react-icons/bi'

function Navbar() {
  return (
    <div className="w-full h-[100px] flex justify-between items-center px-10 bg-purple-400 shadow-md">
     
      <div className="flex items-center gap-2 cursor-pointer">
        <div className="w-[60px] h-[60px] bg-white flex justify-center items-center rounded-full shadow-sm">
          <PiBowlFoodBold className="text-3xl text-amber-600" />
        </div>
        <h1 className="text-xl font-semibold text-gray-700">FoodieHub</h1>
      </div>

     
      <form
        className="flex items-center bg-white rounded-full px-4 py-2 w-[400px] shadow-sm"
        onSubmit={(e) => e.preventDefault()}
      >
        <BiSearchAlt2 className="text-gray-500 text-xl" />
        <input
          type="text"
          placeholder="Search items..."
          className="ml-3 w-full outline-none text-gray-700"
        />
      </form>

      
      <div className="flex items-center gap-6">
       
        <button className="flex items-center gap-1 text-gray-700 hover:text-amber-600 transition">
          <BiSolidOffer className="text-xl" />
          <span className="font-medium">Offers</span>
        </button>

      
        <button className="relative text-gray-700 hover:text-amber-600 transition">
          <HiOutlineShoppingCart className="text-2xl" />
          <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full px-1">
            0
          </span>
        </button>
        

       
        <button className="text-gray-700 font-medium hover:text-amber-600 transition">
          Sign in
        </button>
      </div>
    </div>
  )
}

export default Navbar
