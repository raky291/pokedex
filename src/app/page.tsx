import { Typography } from "@mui/material";
import { useTranslations } from "next-intl";

export default function Home() {
  const t = useTranslations("home");
  return <Typography variant="h1">{t("hello")}</Typography>;
}
