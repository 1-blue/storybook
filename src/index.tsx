import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";

// global-setting
import { GlobalStyle } from "@src/shared/global";
import theme from "@src/shared/theme";

// page component
import App from "@src/components/App";

const container = document.getElementById("root");
const root = createRoot(container!);

root.render(
  <>
    <ThemeProvider theme={theme}>
      <GlobalStyle />

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  </>
);
