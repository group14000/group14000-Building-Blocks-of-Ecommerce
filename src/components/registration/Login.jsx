import { useState } from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom

const Login = () => {
  // State to store form data
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Retrieve stored user data from local storage
    const storedUserData = localStorage.getItem("userData");
    if (storedUserData) {
      const userData = JSON.parse(storedUserData);

      // Check if provided email and password match stored data
      if (
        formData.email === userData.email &&
        formData.password === userData.password
      ) {
        // Display success message
        alert("Login successful!");
      } else {
        // Display error message for invalid credentials
        alert("Invalid email or password. Please try again.");
      }

      // Clear input fields
      setFormData({
        email: "",
        password: "",
      });
    } else {
      // Display error message if no user data is found
      alert("No user data found. Please sign up first.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="bg-white p-8 rounded shadow-md w-full sm:w-96">
        <h2 className="text-2xl font-semibold mb-4">Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-600"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="mt-1 p-2 block w-full border rounded-md focus:outline-none focus:border-blue-500"
              required
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-600"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              className="mt-1 p-2 block w-full border rounded-md focus:outline-none focus:border-blue-500"
              required
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white p-2 rounded-md w-full hover:bg-blue-700 focus:outline-none focus:ring focus:border-blue-300"
          >
            Login
          </button>
        </form>
        {/* Hyperlink to Sign Up page */}
        <p className="mt-4 text-sm text-gray-600">
          Do not have an account?{" "}
          <Link to="/sign-up" className="text-blue-500">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
