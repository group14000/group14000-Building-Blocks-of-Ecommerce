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

    // Define your API key and authentication URL (Replace with your actual API key).
    const apiKey = "AIzaSyDPICmsyhxv2pWB2005nPacWgE4cSbqBAQ";
    const signInURL = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${apiKey}`;

    try {
      // Send a POST request to the authentication URL with user data.
      const response = await fetch(signInURL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: formData.email,
          password: formData.password,
          returnSecureToken: true,
        }),
      });

      if (response.ok) {
        // Login was successful, handle success and navigate to the home page.
        const responseData = await response.json();
        console.log("Login successful:", responseData);
        navigate("/");
        login({
          username: formData.email,
          password: formData.password,
        });
      } else {
        // Login failed, handle errors.
        const errorData = await response.json();
        console.error("Login failed:", errorData);
      }
    } catch (error) {
      // Handle any unexpected errors.
      console.error("An error occurred:", error);
    }
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
      </form>
    </div>
  );
}

// Export the 'LoginForm' component as the default export.
export default LoginForm;
