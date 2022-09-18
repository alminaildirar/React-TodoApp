import React from "react";
import { Navigate } from "react-router";
import { useTodo } from "../context/appContext";

const PrivateRoute = ({ children }) => {
  const { user } = useTodo();

  return user ? children : <Navigate to="/login" />;
};
export default PrivateRoute;
