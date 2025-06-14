import { createBrowserRouter } from "react-router-dom";
import LandingPage from "./pages/Landing";
import SigninPage from "./pages/Signin";
import SignupPage from "./pages/Signup";
import DashboardLayout from "./layouts/DashboardLayout";
import ErrorPage from "./pages/ErrorPage";

//Routes
export const routes = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
    errorElement: <ErrorPage />,
  },

  {
    path: "/login",
    element: <SigninPage />,
    errorElement: <ErrorPage />,
  },

  {
    path: "/signup",
    element: <SignupPage />,
    errorElement: <ErrorPage />,
  },

  {
    path: "/dashboard",
    element: <DashboardLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <div>Dashboard Home</div>,
        errorElement: <ErrorPage />,
      },
    ],
  },
]);
