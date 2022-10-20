import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { AppProvider } from "./providers";
import GlobalStyle from "./styles/global";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <AppProvider>
      <GlobalStyle />
      <App />
    </AppProvider>
  </React.StrictMode>
);
