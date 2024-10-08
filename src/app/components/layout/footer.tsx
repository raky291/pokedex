import { Box, Container, Divider, Typography } from "@mui/material";
import { useTranslations } from "next-intl";

export default function Footer() {
  const t = useTranslations("app.footer");
  return (
    <Box component="footer">
      <Divider variant="middle" />
      <Container maxWidth="xl" sx={{ py: 3 }}>
        <Typography color="text.secondary" textAlign="center">
          {t("copyright")}
        </Typography>
      </Container>
    </Box>
  );
}
