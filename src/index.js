import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import {BrowserRouter} from "react-router-dom";
import {AuthContextProvider} from "./components/AuthContext"
import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <AuthContextProvider>
    <BrowserRouter>
    <App />
    </BrowserRouter>
    </AuthContextProvider>
  </StrictMode>
);
