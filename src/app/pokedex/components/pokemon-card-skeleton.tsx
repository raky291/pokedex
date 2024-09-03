import { Box, Card, CardContent, Skeleton, Stack } from "@mui/material";

export default function PokemonCardSkeleton() {
  return (
    <Card>
      <Box sx={{ aspectRatio: "1 / 1" }}>
        <Skeleton variant="rectangular" width="100%" height="100%" />
      </Box>
      <CardContent>
        <Stack spacing={1}>
          <Skeleton variant="rounded" width={60} height={20} />
          <Skeleton variant="rounded" width={120} height={32} />
          <Skeleton variant="rounded" width={200} height={32} />
        </Stack>
      </CardContent>
    </Card>
  );
}
