import { Box, Container, Divider, Typography } from "@mui/material";

export default function Footer() {
  return (
    <Box component="footer" sx={{ mt: 3 }}>
      <Divider variant="middle" />
      <Container maxWidth="xl" sx={{ py: 3 }}>
        <Typography variant="body2" align="center" color="text.secondary">
          © Alejandro López Almeida
        </Typography>
      </Container>
    </Box>
  );
}
