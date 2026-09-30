import { createBrowserRouter, Navigate } from "react-router-dom";

import ErrorBoundary from "../components/ErrorBoundary";
import Dashboard from "../modules/auth/pages/dashboard";
import Login from "../modules/auth/pages/login";
import Profile from "../modules/auth/pages/profile";
import Register from "../modules/auth/pages/register";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="/register" replace />,
    errorElement: <ErrorBoundary />,
  },
  {
    path: "/register",
    element: <Register />,
    errorElement: <ErrorBoundary />,
  },
  {
    path: "/login",
    element: <Login />,
    errorElement: <ErrorBoundary />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
    errorElement: <ErrorBoundary />,
  },
  {
    path: "/profile",
    element: <Profile />,
    errorElement: <ErrorBoundary />,
  },
]);

export default router;