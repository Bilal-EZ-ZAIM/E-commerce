import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import { Outlet } from "react-router-dom";
import Header1 from "./components/header/Header1";
import Header2 from "./components/header/Header2";

function App() {
  const [theme, colorMode] = useMode();
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />

        <Header1 />
        <Header2 />

        <Outlet />
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
