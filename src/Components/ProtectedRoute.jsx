import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

const ProtectedRoute = () => {
  const { isLoggedIn, user } = useSelector((state) => state.user);

  console.log("user: ", user);
  console.log("isLogged: ", isLoggedIn);
  if (!user || !user.isLoggedIn) {
    return <Navigate to="/login" replace />;
  }

  return <Outlet />;
};

export default ProtectedRoute;
