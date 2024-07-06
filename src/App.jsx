import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import { Outlet } from "react-router-dom";
import Header1 from "./components/header/Header1";

function App() {
  const [theme, colorMode] = useMode();
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="App">
          <Header1 />
          <Outlet />
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
