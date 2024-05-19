import { Container } from "@mui/material";

interface MainProps {
  children?: React.ReactNode;
}

export default function Main({ children }: MainProps) {
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
