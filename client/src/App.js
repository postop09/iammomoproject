import { ThemeProvider } from "styled-components";
import GlobalStyle from "./GlobalStyle";
import theme from "./theme";
import AppRoutes from "./Routes";


function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
        <AppRoutes />
    </ThemeProvider>
  );
}

export default App;
