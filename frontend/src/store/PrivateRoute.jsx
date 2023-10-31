import { useAuth } from "./auth-context";
import { Navigate } from 'react-router-dom';

function PrivateRoute({ element, ...props }) {
    const { user } = useAuth();
  
    return user ? element : <Navigate to="/login" />;
  }
  
  export default PrivateRoute;