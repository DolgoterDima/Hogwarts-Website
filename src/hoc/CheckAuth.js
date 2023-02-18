import React from "react";
import { Location, Navigate, useLocation } from "react-router-dom";

const CheckAuth = ({ children }) => {
  /*children - any page component*/
  const location = useLocation();
  const auth = false;

  if (!auth) {
    /* if you are not auth redirect to login page */
    return <Navigate to="/login" state={{ fromPage: location }} />;
  }
  return children;
};

export default CheckAuth;
