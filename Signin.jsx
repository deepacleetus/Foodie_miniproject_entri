import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

function Signin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!username || !password) {
      alert("Please fill all fields!");
      return;
    }

    const storedUser = JSON.parse(localStorage.getItem("user"));
    const adminCredentials = { username: "admin", password: "admin123" }; // ✅ Admin credentials

    // ✅ Check if admin login
    if (username === adminCredentials.username && password === adminCredentials.password) {
      alert("Admin login successful!");
      localStorage.setItem("isLoggedIn", true);
      localStorage.setItem("user", JSON.stringify(adminCredentials));
      navigate("/adminhome"); // Redirect to Admin Home page
      return;
    }

    // ✅ Check if normal user
    if (!storedUser) {
      alert("No user found! Please sign up first.");
      navigate("/signup");
      return;
    }

    if (storedUser.username === username && storedUser.password === password) {
      alert("Login successful!");
      localStorage.setItem("isLoggedIn", true);
      localStorage.setItem("user", JSON.stringify(storedUser)); // keep user info for Navbar
      navigate("/home"); // Redirect to User Home page
    } else {
      alert("Invalid credentials!");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-2xl shadow-md w-full max-w-sm">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Sign In
        </h2>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">
              Username
            </label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter your username"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-green-500 text-white py-2 rounded-lg font-semibold hover:bg-green-600 transition"
          >
            Sign In
          </button>
        </form>

        <p className="text-center text-sm text-gray-600 mt-4">
          Don’t have an account?{" "}
          <Link to="/signup" className="text-green-500 hover:underline">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Signin;