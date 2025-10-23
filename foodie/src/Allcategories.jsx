import React, { useEffect, useState } from 'react'
import { BiSolidLeftArrowCircle,BiSolidRightArrowCircle } from "react-icons/bi";


function Allcategories() {
    const [categories,setCategory]= useState([]);
    const fetchCategory = async()=>{
        const response = await fetch("");
        const data = await response.json();
        setCategory(data);
    }

    useEffect(
        () =>{
            fetchCategory("www.themealdb.com/api/json/v1/1/list.php?c=list");
        },[]
    )
  return (
    <>
     <div className='max-w-[1200px] mx-auto'>
        <div className='flex my-5 justify-between items-center'>
    <div className='flex'>
    <div  className='cursor-pointer flex justify-center items-center w-[30px] h-[30px]
      bg-amber-50 rounded-full mx-2'>
        <BiSolidLeftArrowCircle />
      </div>
          <div  className='cursor-pointer flex justify-center items-center w-[30px] h-[30px]
      bg-amber-50 rounded-full mx-2'>
        <BiSolidRighttArrowCircle />
      </div>
    </div>
    <div className='flex'>
      {
        categories.map(
          (cat,index)=>{
            <Card 
            key={cat.id} 
            className="flex flex-col justify-center items-center bg-white shadow-md rounded-xl w-32 h-32 cursor-pointer hover:scale-105 hover:shadow-lg transition-transform duration-300"
          >
            <div className="text-4xl text-green-600 mb-2">
              {cat.strMealThumb}
            </div>
            <h2 className="text-base font-semibold text-gray-800">{cat.strCategory}</h2>
            <h2 className="text-base font-semibold text-gray-800">{cat.strArea}</h2>
          </Card>

          }
        )
      }
    </div>
        </div>
    </div> 
    </>
   
  )
}

export default Allcategories