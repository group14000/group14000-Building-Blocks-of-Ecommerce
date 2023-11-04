// Import necessary modules from the 'react' library.
import React, { createContext, useContext, useState, useEffect } from "react";

// Create an 'AuthContext' using 'createContext'.
const AuthContext = createContext();

// Define a custom hook 'useAuth' to access the 'AuthContext'.
export function useAuth() {
  return useContext(AuthContext);
}

// Define an 'AuthProvider' component that provides authentication context to its children.
export function AuthProvider({ children }) {
  // Create state variables 'user' and 'loading' using 'useState'.
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Log the current user to the console (for debugging purposes).
  console.log(user);

  // Define a 'login' function to set the user and store user credentials in localStorage.
  const login = (credentials) => {
    if (credentials.username && credentials.password) {
      setUser(credentials.username);
      localStorage.setItem("authUser", credentials.username);
    }
  };

  // Define a 'logout' function to clear the user and remove stored credentials from localStorage.
  const logout = () => {
    setUser(null);
    localStorage.removeItem("authUser");
  };

  // Use the 'useEffect' hook to check for a stored user in localStorage when the component mounts.
  useEffect(() => {
    const storedUser = localStorage.getItem("authUser");
    if (storedUser) {
      setUser(storedUser);
    }
    setLoading(false); // Set 'loading' to false after checking for the stored user.
  }, []);

  // Create a 'value' object with user-related properties and methods.
  const value = {
    user,
    login,
    logout,
  };

  // Render the 'AuthContext.Provider' component with the provided 'value'.
  return (
    <AuthContext.Provider value={value}>
      {!loading && children}{" "}
      {/* Render children only when not in a loading state. */}
    </AuthContext.Provider>
  );
}
