import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { ParallaxProvider } from "react-scroll-parallax";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <BrowserRouter>
    <ParallaxProvider>
      <App />
    </ParallaxProvider>
  </BrowserRouter>,
  document.getElementById("root")
);
