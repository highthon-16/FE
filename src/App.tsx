import { ThemeProvider } from "@emotion/react";
import { theme, GlobalStyles } from "./themes";
import { RouterProvider } from "react-router-dom";
import { router } from "./router";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <RouterProvider router={router} />
      <Toaster />
    </ThemeProvider>
  );
}

export default App;
