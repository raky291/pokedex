import { Box, CircularProgress, SxProps, Theme } from "@mui/material";

interface LoadingProps {
  sx?: SxProps<Theme>;
}

export default function Loading({ sx }: LoadingProps) {
  return (
    <Box
      sx={[
        {
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexGrow: 1,
        },
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
    >
      <CircularProgress />
    </Box>
  );
}
