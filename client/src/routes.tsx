import { createBrowserRouter } from "react-router-dom";
import { DashboardLayout } from "./layouts";
import {
  DashboardHome,
  ErrorPage,
  LandingPage,
  NotFoundPage,
  Profile,
  SigninPage,
  SignupPage,
} from "./pages";

//Routes
export const routes = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
    errorElement: <ErrorPage isDashboard={false} />,
  },

  {
    path: "/signin",
    element: <SigninPage />,
    errorElement: <ErrorPage isDashboard={false} />,
  },

  {
    path: "/signup",
    element: <SignupPage />,
    errorElement: <ErrorPage isDashboard={false} />,
  },

  {
    path: "/dashboard",
    element: <DashboardLayout />,
    errorElement: <ErrorPage isDashboard={true} />,
    children: [
      {
        index: true,
        element: <DashboardHome />,
        errorElement: <ErrorPage isDashboard={true} />,
      },
      {
        path: "profle",
        element: <Profile />,
        errorElement: <ErrorPage isDashboard={true} />,
      },
      {
        path: "*",
        element: <NotFoundPage isDashboard={true} />,
        errorElement: <ErrorPage isDashboard={true} />,
      },
    ],
  },
]);
