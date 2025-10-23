import React from 'react'
import { MdOutlineEmojiFoodBeverage } from 'react-icons/md';
import { PiBowlFoodBold } from 'react-icons/pi';
import { BiSearchAlt2 } from 'react-icons/bi';
import { HiOutlineShoppingCart } from 'react-icons/hi';
import { BiSolidOffer } from "react-icons/bi";

function Navbar() {
  return (
    <div className='w-full h-[100px] flex justify-between items-center px-8 bg-slate-200'>
        <div className='w-[60px] h-[60px] bg-white flex justify-center items-center cursor-pointer'>
            <PiBowlFoodBold/>
        </div>
        <form action className="flex items-center bg-white rounded-full px-4 py-2 w-[400px] shadow-sm"
>
        <BiSearchAlt2/>
        <input type="text" placeholder='search items..' className="ml-3 grow outline-none"/>
        
        </form>
         <button type="button" className="ml-3 text-gray-600 relative cursor-pointer">
        <HiOutlineShoppingCart />
         <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full px-1">0</span>
        </button>
       <button type="button" className="ml-3 text-gray-600 relative cursor-pointer">
        Sigin

        </button>
        <button type="button" className="ml-3 text-gray-600 relative cursor-pointer">
      <BiSolidOffer />
        offers
        </button>



    </div>
  )
}

export default Navbar 