import { Box, Container, Divider, Typography } from "@mui/material";

export default function Footer() {
  return (
    <Box component="footer">
      <Divider variant="middle" />
      <Container maxWidth="xl" sx={{ py: 3 }}>
        <Typography align="center" color="text.secondary">
          © Alejandro López Almeida
        </Typography>
      </Container>
    </Box>
  );
}
