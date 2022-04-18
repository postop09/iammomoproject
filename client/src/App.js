import { ThemeProvider } from "styled-components";
import GlobalStyle from "./GlobalStyle";
import Register from "./pages/Register";
import theme from "./theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Register />
    </ThemeProvider>
  );
}

export default App;
