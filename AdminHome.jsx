import React ,{useState } from "react";
import { useNavigate } from "react-router-dom";
import { category_offers } from "../Offer";

function AdminHome() {
  const navigate = useNavigate();
   const [offers, setOffers] = useState(category_offers);
  const [newOffer, setNewOffer] = useState({
    category: "",
    title: "",
    description: "",
    discount: "",
  });
  const handleLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("isLoggedIn");
    navigate("/signin");
  };
   const handleAddOffer = (e) => {
    e.preventDefault();
    if (!newOffer.category || !newOffer.title) return alert("Please fill all fields");

    const updatedOffers = [
      ...offers,
      { id: offers.length + 1, ...newOffer, discount: Number(newOffer.discount) },
    ];
    setOffers(updatedOffers);

    // Optional: save to localStorage (since we don’t have backend)
    localStorage.setItem("offers", JSON.stringify(updatedOffers));

    setNewOffer({ category: "", title: "", description: "", discount: "" });
    alert("Offer added successfully!");
  };


    return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6 text-purple-700">Admin Dashboard</h1>

      <form onSubmit={handleAddOffer} className="bg-white p-6 rounded-xl shadow-md w-[400px]">
        <h2 className="text-xl font-semibold mb-3">Add New Offer</h2>
        <input
          type="text"
          placeholder="Category (e.g. desserts)"
          value={newOffer.category}
          onChange={(e) => setNewOffer({ ...newOffer, category: e.target.value })}
          className="border w-full mb-2 p-2 rounded"
        />
        <input
          type="text"
          placeholder="Offer Title"
          value={newOffer.title}
          onChange={(e) => setNewOffer({ ...newOffer, title: e.target.value })}
          className="border w-full mb-2 p-2 rounded"
        />
        <input
          type="text"
          placeholder="Description"
          value={newOffer.description}
          onChange={(e) => setNewOffer({ ...newOffer, description: e.target.value })}
          className="border w-full mb-2 p-2 rounded"
        />
        <input
          type="number"
          placeholder="Discount %"
          value={newOffer.discount}
          onChange={(e) => setNewOffer({ ...newOffer, discount: e.target.value })}
          className="border w-full mb-2 p-2 rounded"
        />
        <button
          type="submit"
          className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700"
        >
          Add Offer
        </button>
      </form>

      <div className="mt-8">
        <h2 className="text-2xl font-semibold mb-4">Existing Offers</h2>
        {offers.map((offer) => (
          <div key={offer.id} className="border p-3 mb-2 rounded">
            <h3 className="font-bold">{offer.title}</h3>
            <p>{offer.description}</p>
            <p className="text-green-600">Discount: {offer.discount}%</p>
            <p className="text-gray-500 text-sm">Category: {offer.category}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AdminHome;
