import { Stack, Typography } from "@mui/material";
import { getTranslations } from "next-intl/server";
import Pagination from "./components/pagination";

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const t = await getTranslations("pokedex.page");
  return (
    <Stack spacing={2} useFlexGap>
      <Typography component="h1" variant="h3">
        {t("heading")}
      </Typography>
      <Pagination />
      {children}
    </Stack>
  );
}
