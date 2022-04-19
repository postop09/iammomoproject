import { ThemeProvider } from "styled-components";
import GlobalStyle from "./GlobalStyle";
import AuthSelection from "./pages/AuthSelection";
import Register from "./pages/Register";
import Routes from "./Routes";
import theme from "./theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Routes />
    </ThemeProvider>
  );
}

export default App;
