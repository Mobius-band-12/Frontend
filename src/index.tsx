import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { createGlobalStyle } from "styled-components";
import futuraBook from './assets/fonts/FuturaCyrillicBook.ttf'
import futuraDemi from './assets/fonts/FuturaCyrillicDemi.ttf'
import futuraMedium from './assets/fonts/FuturaCyrillicMedium.ttf'

const Global = createGlobalStyle`
  :root {
    --black-color: #2C2A29;
    --anthracite-color: #4D4D4D;
    --blue-color: #003C96;
    --white-color: #FFFFFF;
    --dark-gray-color: #A09D9D;
    --dark-blue-color: #001E64;
  }


  @font-face {
    font-family: Futura PT;
    src: url(${futuraBook}) format('truetype');
    font-weight: 400;
    font-style: normal;
  }

  @font-face {
    font-family: Futura PT;
    src: url(${futuraDemi}) format('truetype');
    font-weight: 500;
    font-style: normal;
  }

  * {
    font-family: 'Futura PT', sans-serif;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Global />
    <App />
  </React.StrictMode>
);
