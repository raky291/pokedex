import { Container } from "@mui/material";

export default function Main({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Container
      component="main"
      maxWidth="xl"
      sx={{
        display: "flex",
        flexDirection: "column",
        flexGrow: 1,
        py: 3,
      }}
    >
      {children}
    </Container>
  );
}
