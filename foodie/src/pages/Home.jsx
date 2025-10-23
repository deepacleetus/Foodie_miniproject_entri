import React from 'react'
import Navbar from '../components/Navbar'
import Categories from '../Categories'
import Card from 'react-bootstrap/Card'

import { Link } from 'react-router-dom'


function Home() {
  return (
    <>
      <Navbar />
      <div className="flex flex-wrap justify-center items-center gap-6 w-full p-5">
        {Categories.map((item) => (
         
          <Card 
            key={item.id} 
            className="flex flex-col justify-center items-center bg-white shadow-md rounded-xl w-32 h-32 cursor-pointer hover:scale-105 hover:shadow-lg transition-transform duration-300"
          >
            <div className="text-4xl text-green-600 mb-2">
              {item.image}
            </div>
           
            <h2 className="text-base font-semibold text-gray-800">{item.name}</h2>
          </Card>
         
        ))}
      </div>
    </>
  )
}

export default Home
