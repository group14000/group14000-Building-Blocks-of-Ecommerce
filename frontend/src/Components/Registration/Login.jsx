// Import React and 'useState' hook for creating React components and managing state.
import React, { useState } from "react";

// Import the CSS file to style the login form.
import "./LoginForm.css";

// Import 'useNavigate' from 'react-router-dom' for programmatic navigation and 'useAuth' from a custom context.
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../store/auth-context";

// Define a functional component named 'LoginForm'.
function LoginForm() {
  // Create a state variable 'formData' to manage the form input values for email and password.
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  // Get the 'navigate' function for programmatic navigation.
  const navigate = useNavigate();

  // Get the 'login' function from the custom auth context.
  const { login } = useAuth();

  // Define a function 'handleChange' to update 'formData' when input values change.
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Define a function 'handleLogin' to handle form submission.
  const handleLogin = async (e) => {
    e.preventDefault();

    // Your login logic here...

    // For demonstration purposes, we'll assume the login was successful.

    // Handle success and navigate to the home page.
    navigate("/");
    login({
      username: formData.email,
      password: formData.password,
    });
  };

  // Return the JSX for the login form.
  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />

        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />

        <button type="submit">Login</button>

        {/* Add login options for Google, LinkedIn, Facebook, and Twitter */}
        <div className="login-options">
          <button className="login-option" onClick={() => handleSocialLogin("Google")}>
            Login with Google
          </button>
          <button className="login-option" onClick={() => handleSocialLogin("Linkedin")}>
            Login with Linkedin
          </button>
          <button className="login-option" onClick={() => handleSocialLogin("Facebook")}>
            Login with Facebook
          </button>
          <button className="login-option" onClick={() => handleSocialLogin("Twitter")}>
            Login with Twitter
          </button>
        </div>
      </form>
    </div>
  );
}

// Export the 'LoginForm' component as the default export.
export default LoginForm;
