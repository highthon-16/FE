import { createBrowserRouter } from "react-router-dom";
import { Alarm, Accent, Complete, Goal, Home, SignIn, SignUp } from "./pages";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/signIn",
    element: <SignIn />,
  },
  {
    path: "/signUp",
    element: <SignUp />,
  },
  {
    path: "/signUp/Accent",
    element: <Accent />,
  },
  {
    path: "/signUp/Goal",
    element: <Goal />,
  },
  {
    path: "/signUp/Complete",
    element: <Complete />,
  },
  {
    path: "/alarm",
    element: <Alarm />,
  },
]);
