import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ThemeProvider } from "styled-components";
import { Global } from "./components/Global.styled.js";

const dark = {
  color: "gray",
};

ReactDOM.createRoot(document.getElementById("root")).render(
  <ThemeProvider theme={dark}>
    <Global />
    <App />
  </ThemeProvider>
);
