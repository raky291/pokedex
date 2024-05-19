import { Container } from "@mui/material";

interface ContentProps {
  children?: React.ReactNode;
}

export default function Content({ children }: ContentProps) {
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
