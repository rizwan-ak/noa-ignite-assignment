import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "react-jss";
import MainPage from "./common/pages/MainPage";
import theme from "./common/utils/theme";
import "./index.css";

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <MainPage />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
