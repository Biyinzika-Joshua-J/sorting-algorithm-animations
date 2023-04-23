import logo from "./logo.svg";
import "./App.css";
import './theme.css'
import { Route, Routes } from "react-router-dom";
import { Home, About } from "./pages";
import { Navbar, Footer, ToggleColorButton } from "./components";
import { ThemeProvider, createTheme } from "@mui/material";
import { useSelector } from "react-redux";
import { useState } from "react";
import Error from "./components/alerts/Error";
import Info from "./components/alerts/Info";

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
      action: {
        disabledBackground: "#F0F0F0",
        disabled: "#000",
        disabledOpacity: "1",
      },
    },
  });

  const NavbarColors = {
    chill: "#5F264A",
    breeze: "#2A2F4F",
  };

 

  const themeMode = useSelector((state) => state.theme.mode);

  

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <div className={`${themeMode}`}>
          <Navbar color={NavbarColors[themeMode]} />
          <div className={`themeContainer`}>
            <div className="container">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
              </Routes>
              <ToggleColorButton />
            </div>
          </div>
          <Footer />
        </div>
        <Error textPrimary={'The array is already sorted.'} textSecondary={'try generating a new one'}/>
        <Info textPrimary={'Please select a sorting algorithm'} textSecondary={'in order to sort'}/>
      </ThemeProvider>
    </div>
  );
}

export default App;
