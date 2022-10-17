import React from "react";

import { ThemeProvider as UiThemeProvider } from "@mui/material/styles";
import { theme } from "./styles/theme";
import { BrowserRouter } from "react-router-dom";
import Router from "./Router";
import { CryptocurrencyContentProvider } from "./context/ContentContext";
import Header from "./components/Header";
import "./styles/Global.module.css";
function App() {
  return (
    <UiThemeProvider theme={theme}>
      <CryptocurrencyContentProvider>
        <BrowserRouter>
          <Header />

          <Router />
        </BrowserRouter>
      </CryptocurrencyContentProvider>
    </UiThemeProvider>
  );
}

export default App;
