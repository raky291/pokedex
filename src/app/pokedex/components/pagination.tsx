import { toInt } from "@/app/lib/to-int";
import { withQuery } from "@/app/lib/with-query";
import { NavigateBefore, NavigateNext } from "@mui/icons-material";
import { Box, Button } from "@mui/material";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { SearchParams } from "../lib/types";

export default function Pagination({
  searchParams,
}: {
  searchParams: SearchParams;
}) {
  const defaultValues = { limit: "20", offset: "0" };
  const query = { ...defaultValues, ...searchParams };
  const t = useTranslations("pokedex.pagination");

  const isPreviousDisabled = toInt(query.offset) <= 0;
  const previousOffset = toInt(query.offset) - toInt(query.limit);
  const nextOffset = toInt(query.offset) + toInt(query.limit);

  return (
    <Box sx={{ display: "flex", justifyContent: "space-between" }}>
      <Button
        component={Link}
        href={withQuery({ ...query, offset: previousOffset.toString() })}
        variant="outlined"
        color="inherit"
        startIcon={<NavigateBefore />}
        disabled={isPreviousDisabled}
      >
        {t("previous")}
      </Button>
      <Button
        component={Link}
        href={withQuery({ ...query, offset: nextOffset.toString() })}
        variant="outlined"
        color="inherit"
        endIcon={<NavigateNext />}
      >
        {t("next")}
      </Button>
    </Box>
  );
}
