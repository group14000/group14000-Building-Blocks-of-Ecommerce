// Import necessary modules and components.
import { useAuth } from "./auth-context"; // Import the 'useAuth' hook from 'auth-context'.
import { Navigate } from "react-router-dom"; // Import 'Navigate' for navigation.

// Define a functional component 'PrivateRoute' to protect routes that require authentication.
function PrivateRoute({ element, ...props }) {
  const { user } = useAuth(); // Use the 'useAuth' hook to access the user's authentication status.

  // If the user is authenticated, render the specified 'element', otherwise navigate to the login page.
  return user ? element : <Navigate to="/login" />; // Use 'Navigate' to redirect to the login page.
}

// Export the 'PrivateRoute' component as the default export.
export default PrivateRoute;
