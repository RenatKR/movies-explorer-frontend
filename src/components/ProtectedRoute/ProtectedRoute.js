import react from "react";
import { Redirect } from "react-router-dom";

const ProtectedRoute = ({ loggedIn, children }) =>
  loggedIn ? children : <Redirect to="/" />;


export default ProtectedRoute;