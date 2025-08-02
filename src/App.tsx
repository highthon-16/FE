import { Goal } from "./pages/signUp/Goal";
import { ThemeProvider } from "@emotion/react";
import { theme, GlobalStyles } from "./themes";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Goal />
    </ThemeProvider>
  );
}

export default App;
