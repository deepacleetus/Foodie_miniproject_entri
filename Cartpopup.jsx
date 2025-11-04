import React from "react";
import { IoClose } from "react-icons/io5";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom"; // ✅ Add this
import Addtocartcard from "./Addtocartcard";

const CartPopup = ({ onClose }) => {
  const { cartList } = useSelector((state) => state.cart);
  const navigate = useNavigate(); // ✅ useNavigate hook

  const subtotal = cartList.reduce(
    (acc, item) => acc + item.price * item.food_quantity,
    0
  );
  const deliveryCharge = subtotal > 0 ? 40 : 0;
  const gst = subtotal * 0.05;
  const total = subtotal + gst + deliveryCharge;

  // ✅ Handle checkout click
  const handleCheckout = () => {
    const orderTime = new Date().toLocaleString(); // get date + time
    const orderData = {
      items: cartList,
      subtotal,
      deliveryCharge,
      gst,
      total,
      orderTime,
    };

    localStorage.setItem("order", JSON.stringify(orderData)); // save to localStorage
    navigate("/orders"); // go to Order page
  };

  return (
    <div
      className="fixed inset-0 flex justify-end z-50 bg-black/40"
      onClick={onClose}
    >
      <div
        className="w-[400px] h-full bg-white shadow-xl p-5 flex flex-col justify-between overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex justify-between items-center mb-4 border-b pb-2">
          <h2 className="text-xl font-semibold text-gray-700">Your Cart</h2>
          <button onClick={onClose}>
            <IoClose className="text-2xl text-gray-600 hover:text-red-500" />
          </button>
        </div>

        {/* Cart Items */}
        <div className="flex-1 overflow-y-auto">
          {cartList.length > 0 ? (
            <div className="flex flex-col gap-4">
              {cartList.map((item) => (
                <Addtocartcard key={item.id} item={item} />
              ))}
            </div>
          ) : (
            <p className="text-center text-gray-500 mt-10">
              🛒 Your cart is empty.
            </p>
          )}
        </div>

        {/* Bill Summary */}
        {cartList.length > 0 && (
          <div className="mt-6 bg-gray-50 border-t pt-4 rounded-t-lg">
            <h2 className="text-lg font-semibold text-gray-700 mb-2">
              Bill Summary
            </h2>
            <div className="flex justify-between py-1 text-gray-700 text-sm">
              <span>Subtotal</span>
              <span>₹{subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between py-1 text-gray-700 text-sm">
              <span>Delivery Charges</span>
              <span>₹{deliveryCharge.toFixed(2)}</span>
            </div>
            <div className="flex justify-between py-1 text-gray-700 text-sm">
              <span>GST (5%)</span>
              <span>₹{gst.toFixed(2)}</span>
            </div>
            <hr className="my-2" />
            <div className="flex justify-between text-base font-bold text-green-700">
              <span>Total Payable</span>
              <span>₹{total.toFixed(2)}</span>
            </div>

            <button
              onClick={handleCheckout} // ✅ navigate on click
              className="w-full mt-4 bg-green-600 text-white font-semibold py-2 rounded-lg hover:bg-green-700 transition"
            >
              Proceed to Checkout
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartPopup;
