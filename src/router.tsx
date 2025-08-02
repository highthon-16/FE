import { createBrowserRouter } from "react-router-dom";
import {
  Accent,
  Alarm,
  Chat,
  Complete,
  Goal,
  Home,
  Main,
  MyPage,
  SignIn,
  SignUp,
} from "./pages";
import { Header, BottomNav } from "./components";

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
  {
    element: <Header />,
    children: [
      {
        element: <BottomNav />,
        children: [
          {
            path: "/main",
            element: <Main />,
          },
          {
            path: "/myPage",
            element: <MyPage />,
          },
          {
            path: "/chat",
            element: <Chat />,
          },
        ],
      },
    ],
  },
]);
