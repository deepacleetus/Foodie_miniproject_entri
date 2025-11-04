import React, { useState, useEffect } from 'react'
import { MdOutlineEmojiFoodBeverage } from 'react-icons/md'
import { PiBowlFoodBold } from 'react-icons/pi'
import { BiSearchAlt2 } from 'react-icons/bi'
import { HiOutlineShoppingCart } from 'react-icons/hi'
import { BiSolidOffer } from 'react-icons/bi'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import CartPopup from './Cartpopup'
import { setSearchTerm } from "../redux/search"

function Navbar() {
  const [username, setUsername] = useState("")
  const [isCartOpen, setIsCartOpen] = useState(false)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { cartCount } = useSelector((state) => state.cart)

  // Get username from localStorage
  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"))
    if (storedUser && storedUser.username) {
      setUsername(storedUser.username)
    }
  }, [])

  // Search handler
  const handleSearch = (e) => {
    dispatch(setSearchTerm(e.target.value))
  }

  // Logout handler
  const handleLogout = () => {
    localStorage.removeItem("user")
    localStorage.removeItem("token")
    setUsername("") // clear username from state
    navigate("/signin")
  }

  return (
    <>
      <div className="w-full h-[100px] flex justify-between items-center px-10 bg-purple-400 shadow-md md:px-8">
        {/* Logo */}
        <div className="flex items-center gap-2 cursor-pointer">
          <div className="w-[60px] h-[60px] bg-white flex justify-center items-center rounded-full shadow-sm">
            <PiBowlFoodBold className="text-3xl text-amber-600" />
          </div>
          <h1 className="text-xl font-semibold text-gray-700">FoodieHub</h1>
        </div>

        {/* Search bar */}
        {/* Search bar */}
<form
  className="flex items-center bg-white rounded-full px-4 py-2 w-[400px] shadow-sm"
  onSubmit={(e) => e.preventDefault()}
>
  <BiSearchAlt2 className="text-gray-500 text-xl" />
  <input
    type="text"
    placeholder="Search items..."
    className="ml-3 w-full outline-none text-gray-700"
    onChange={(e) => dispatch(setSearchTerm(e.target.value))} // ✅ single handler
  />
</form>


        {/* Right section */}
        <div className="flex items-center gap-6">
          {/* Offers */}
        <Link
          to="/offers"
          className="flex items-center gap-1 text-gray-700 hover:text-amber-600 transition"
        >
          <BiSolidOffer className="text-xl" />
          <span className="font-medium">Offers</span>
        </Link>

          {/* Cart */}
          <button
            onClick={() => setIsCartOpen(true)}
            className="relative text-gray-700 hover:text-amber-600 transition"
          >
            <HiOutlineShoppingCart className="text-2xl" />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full px-1">
                {cartCount}
              </span>
            )}
          </button>

          {/* User Greeting + Logout */}
          {username ? (
            <div className="flex items-center gap-3">
              <span className="text-white font-semibold">Hi, {username} 👋</span>
              <button
                onClick={handleLogout}
                className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600 transition"
              >
                Logout
              </button>
            </div>
          ) : (
            <Link to="/signin" className="text-white font-medium">
              Sign In
            </Link>
          )}
        </div>
      </div>

      {/* Cart popup */}
      {isCartOpen && <CartPopup onClose={() => setIsCartOpen(false)} />}
    </>
  )
}

export default Navbar
