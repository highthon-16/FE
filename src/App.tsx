import { ThemeProvider } from "@emotion/react";
import { theme, GlobalStyles } from "./themes";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
    </ThemeProvider>
  );
}

export default App;
