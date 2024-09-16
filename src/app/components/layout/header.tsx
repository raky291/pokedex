import { AppBar, Button, Container, Toolbar } from "@mui/material";
import { useTranslations } from "next-intl";
import Link from "next/link";

export default function Header() {
  const t = useTranslations("app.header");
  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Button component={Link} href="/pokedex" prefetch color="inherit">
            {t("pokedex")}
          </Button>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
