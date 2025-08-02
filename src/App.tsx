import { ThemeProvider } from "@emotion/react";
import { theme, GlobalStyles } from "./themes";
import { RouterProvider } from "react-router-dom";
import { router } from "./router";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
