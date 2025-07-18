import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme.tsx";
import { BrowserRouter as Router } from "react-router-dom";

createRoot(document.getElementById("root")!).render(
  <ThemeProvider theme={theme}>
    <Router>
      <CssBaseline />
      <App />
    </Router>
  </ThemeProvider>
);
