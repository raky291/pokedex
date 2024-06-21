import Footer from "@/components/templates/Footer";
import Header from "@/components/templates/Header";
import Main from "@/components/templates/Main";
import { useAppSelector } from "@/store/hooks";
import { selectMode } from "@/store/slices/appSlice";
import { getTheme } from "@/theme/theme";
import { Box, CssBaseline, ThemeProvider } from "@mui/material";
import { Outlet } from "react-router-dom";

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
