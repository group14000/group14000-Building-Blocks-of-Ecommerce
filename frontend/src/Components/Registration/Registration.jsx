// Import React and 'useState' hook for creating React components and managing state.
import React, { useState } from "react";

// Import the CSS file to style the registration form.
import "./LoginForm.css";

// Import 'useNavigate' from 'react-router-dom' for programmatic navigation.
import { useNavigate } from "react-router-dom";

// Define a functional component named 'RegisterForm'.
function RegisterForm() {
  // Create a state variable 'formData' to manage the form input values for email and password.
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  // Get the 'navigate' function for programmatic navigation.
  const navigate = useNavigate();

  // Define a function 'handleChange' to update 'formData' when input values change.
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Define a function 'handleRegistration' to handle form submission.
  const handleRegistration = async (e) => {
    e.preventDefault();

    // Define your API key and registration URL (Replace with your actual API key).
    const apiKey = "AIzaSyDPICmsyhxv2pWB2005nPacWgE4cSbqBAQ";
    const signUpURL = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${apiKey}`;

    try {
      // Send a POST request to the registration URL with user data.
      const response = await fetch(signUpURL, {
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
        // Registration was successful, handle success and navigate to the home page.
        const responseData = await response.json();
        console.log("Registration successful:", responseData);
        navigate("/");
      } else {
        // Registration failed, handle errors.
        const errorData = await response.json();
        console.error("Registration failed:", errorData);
      }
    } catch (error) {
      // Handle any unexpected errors.
      console.error("An error occurred:", error);
    }
  };

  // Return the JSX for the registration form.
  return (
    <div className="login-container">
      <h2>Register</h2>
      <form onSubmit={handleRegistration}>
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

        <button type="submit">Register</button>

        <p>
          If you already have an account,{" "}
          <span onClick={() => navigate("/login")} className="login-link">
            go to the login page
          </span>
          .
        </p>
      </form>
    </div>
  );
}

// Export the 'RegisterForm' component as the default export.
export default RegisterForm;
