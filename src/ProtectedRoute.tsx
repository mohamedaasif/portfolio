import { Navigate, Outlet } from "react-router-dom";

export const ProtectedRoute = () => {
  const token = sessionStorage.getItem("authToken");
  return token ? <Outlet /> : <Navigate to="/login" replace />;
};

export const PublicRoute = () => {
  const token = sessionStorage.getItem("authToken");
  return !token ? <Outlet /> : <Navigate to="/dashboard" replace />;
};
