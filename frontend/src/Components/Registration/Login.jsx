import React, { useState } from 'react';
import './LoginForm.css'; // Import your CSS file
import { useNavigate } from 'react-router-dom'; 
import { useAuth } from '../../store/auth-context';

function LoginForm() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const navigate = useNavigate();
  const {login} = useAuth(); 

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    const apiKey = 'AIzaSyDPICmsyhxv2pWB2005nPacWgE4cSbqBAQ'; // Replace with your actual API key
    const signInURL = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${apiKey}`;

    try {
      const response = await fetch(signInURL, {
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
        // Login successful, you can handle the success here
        const responseData = await response.json();
        console.log('Login successful:', responseData);
        navigate('/'); // Navigate to the home page upon successful login
        login({
            username: formData.email,
            password: formData.password,
          });
      } else {
        // Login failed, handle errors here
        const errorData = await response.json();
        console.error('Login failed:', errorData);
      }
    } catch (error) {
      console.error('An error occurred:', error);
    }
  };

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

export default LoginForm;
