import { ThemeProvider } from "styled-components";
import GlobalStyle from "./GlobalStyle";
import theme from "./theme";
import Nav from "./components/MainPage/Nav";
import MainPage from "./pages/MainPage/MainPage";


function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <div>
        <Nav />
        <MainPage />
      </div>
    </ThemeProvider>
  );
}

export default App;