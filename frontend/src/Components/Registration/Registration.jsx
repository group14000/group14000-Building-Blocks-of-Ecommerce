import React, { useState } from 'react';
import './LoginForm.css'; // Import your CSS file
import { useNavigate } from 'react-router-dom'; 

function RegisterForm() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleRegistration = async (e) => {
    e.preventDefault();

    const apiKey = 'AIzaSyDPICmsyhxv2pWB2005nPacWgE4cSbqBAQ'; // Replace with your actual API key
    const signUpURL = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${apiKey}`;

    try {
      const response = await fetch(signUpURL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: formData.email,
          password: formData.password,
          returnSecureToken: true,
        }),
      });

      if (response.ok) {
        // Registration successful, you can handle the success here
        const responseData = await response.json();
        console.log('Registration successful:', responseData);
        navigate('/'); 
      } else {
        // Registration failed, handle errors here
        const errorData = await response.json();
        console.error('Registration failed:', errorData);
      }
    } catch (error) {
      console.error('An error occurred:', error);
    }
  };

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
        <p>If you already have an account, <span onClick={() => navigate('/login')} className="login-link">go to the login page</span>.</p>
      </form>
    </div>
  );
}

export default RegisterForm;
