import { Box, CssBaseline, ThemeProvider } from "@mui/material";
import { Outlet } from "react-router-dom";
import { useAppSelector } from "../../../store/hooks";
import { selectMode } from "../../../store/slices/appSlice";
import { getTheme } from "../../../theme/theme";
import Footer from "../../templates/Footer/Footer";
import Header from "../../templates/Header/Header";
import Main from "../../templates/Main/Main";

export default function Root() {
  const mode = useAppSelector(selectMode);
  return (
    <ThemeProvider theme={getTheme(mode)}>
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
