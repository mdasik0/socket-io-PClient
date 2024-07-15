import { Navigate } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const PrivateRoute = ({ children }) => {
  const login = true; // Replace this with your actual login logic

  if (login) {
    return <div>{children}</div>;
  } else {
    return <Navigate to="/sign-in" />;
  }
};

export default PrivateRoute;
