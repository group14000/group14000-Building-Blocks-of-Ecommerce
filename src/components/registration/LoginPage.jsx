import { useState } from "react";
import { Link } from "react-router-dom";

const LoginPage = () => {
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const [isLoggedIn, setLoggedIn] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setLoginData({ ...loginData, [name]: value });
  };

  const handleLogin = (event) => {
    event.preventDefault();

    // Fetch signup data from localStorage
    const users = JSON.parse(localStorage.getItem("userSignupData")) || [];

    // Find user with matching email and password
    const loggedInUser = users.find(
      (user) =>
        user.email === loginData.email && user.password === loginData.password
    );

    if (loggedInUser) {
      // Perform login logic (e.g., redirect to dashboard)
      console.log("Login successful:", loggedInUser);
      setLoggedIn(true);

      // Display alert message for successful login
      alert("Login successful!");
    } else {
      // Display an error message for unsuccessful login
      console.error("Invalid email or password");
    }

    // Clear login form fields
    setLoginData({ email: "", password: "" });
  };

  // Placeholder function for handling signup navigation
  const handleSignupNavigation = () => {
    // Add your signup navigation logic here
    console.log("Navigate to signup page");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-4 md:p-8 rounded-lg shadow-md max-w-md w-full">
        <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6 text-indigo-700">
          {isLoggedIn ? "Logout" : "Login"}
        </h2>
        <form onSubmit={handleLogin} className="space-y-4">
          <div className="mb-2 md:mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-600"
            >
              Email:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={loginData.email}
              onChange={handleChange}
              className="mt-1 p-2 w-full border rounded-md"
              placeholder="Enter your email"
              required
            />
          </div>

          <div className="mb-2 md:mb-4">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-600"
            >
              Password:
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={loginData.password}
              onChange={handleChange}
              className="mt-1 p-2 w-full border rounded-md"
              placeholder="Enter your password"
              required
            />
          </div>

          <button
            type="submit"
            className="bg-indigo-700 text-white py-2 px-4 rounded-md hover:bg-indigo-600 focus:outline-none focus:ring focus:border-indigo-300 w-full"
          >
            {isLoggedIn ? "Logout" : "Login"}
          </button>
        </form>

        {/* Signup link */}
        <div className="mt-4 text-center text-sm">
          <p>
            New User!{" "}
            <Link
              to="/register"
              className="text-indigo-700"
              onClick={handleSignupNavigation}
            >
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
