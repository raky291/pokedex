import { AppBar, Button, Container, Toolbar } from "@mui/material";
import { useTranslations } from "next-intl";

export default function Header() {
  const t = useTranslations("app.header");
  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Button color="inherit">{t("pokedex")}</Button>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
