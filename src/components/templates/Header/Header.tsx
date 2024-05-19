import { AppBar, Button, Container, Toolbar } from "@mui/material";
import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{ justifyContent: "center", gap: 1 }}>
          <Button component={NavLink} to="/" end color="inherit" sx={{ my: 2 }}>
            Pokédex
          </Button>
          <Button
            component={NavLink}
            to="/about"
            color="inherit"
            sx={{ my: 2 }}
          >
            About
          </Button>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
