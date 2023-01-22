import { Navigate } from "react-router-dom";

const AuthGaurd = ({ children }) => {
  let logged = false;

  if (!logged) {
    return <Navigate to="/auth/login" />;
  }
  
  return children;
};

export default AuthGaurd;
