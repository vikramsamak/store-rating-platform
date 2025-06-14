import { createBrowserRouter } from "react-router-dom";
import { DashboardLayout } from "./layouts";
import { ErrorPage, LandingPage, SigninPage, SignupPage } from "./pages";

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
