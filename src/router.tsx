import { createBrowserRouter } from "react-router-dom";
import { Accent, Complete, Goal, Home, MyPage, SignIn, SignUp } from "./pages";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/my",
    element: <MyPage />,
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
