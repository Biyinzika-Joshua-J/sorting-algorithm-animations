import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Home, About } from "./pages";
import { Navbar, Footer, ToggleColorButton } from "./components";
import { ThemeProvider, createTheme } from "@mui/material";
import { useSelector } from "react-redux";

function App() {
  const theme = createTheme({
    palette: {
      primary: {
        main: "#0B2447",
      },
      secondary: {
        main: "#19376D",
      },
      success: {
        main: "#576CBC",
      },
      info: {
        main: "#A5D7E8",
      },
    },
  });

  const themeMode = useSelector((state) => state.theme.mode);

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Navbar />
        <div className={`${themeMode} themeContainer`}>
          <div className="container">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
            </Routes>
            <ToggleColorButton />
          </div>
        </div>
        <Footer />
      </ThemeProvider>
    </div>
  );
}

export default App;
