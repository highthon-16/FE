import { ThemeProvider } from "@emotion/react";
import { theme, GlobalStyles } from "./themes";
import { Header } from "./components";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Header />
    </ThemeProvider>
  );
}

export default App;
