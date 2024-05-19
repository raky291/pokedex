import { Box, CssBaseline, ThemeProvider } from "@mui/material";
import { Outlet } from "react-router-dom";
import { darkTheme } from "../../../theme/theme";
import Footer from "../../templates/Footer/Footer";
import Header from "../../templates/Header/Header";
import Main from "../../templates/Main/Main";

export default function Root() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          minHeight: "100vh",
        }}
      >
        <Header />
        <Main>
          <Outlet />
        </Main>
        <Footer />
      </Box>
    </ThemeProvider>
  );
}
