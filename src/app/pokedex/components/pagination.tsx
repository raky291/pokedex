"use client";
import { useQueryParams } from "@/app/hooks/use-query-params";
import { isNil } from "@/app/lib/is-nil";
import { toInt } from "@/app/lib/to-int";
import { NavigateBefore, NavigateNext } from "@mui/icons-material";
import { Box, Button } from "@mui/material";
import { useTranslations } from "next-intl";
import { NamedAPIResourceList } from "../services/types";

export default function Pagination({ data }: { data: NamedAPIResourceList }) {
  const defaultValues = { limit: "20", offset: "0" };
  const [query, setQuery] = useQueryParams(defaultValues);
  const t = useTranslations("pokedex.pagination");

  const hasNoPrevious = isNil(data.previous);
  const hasNoNext = isNil(data.next);

  const handleNavigatePrevious = () => {
    const newOffset = toInt(query.offset) - toInt(query.limit);
    setQuery((prevQuery) => ({ ...prevQuery, offset: newOffset.toString() }));
  };

  const handleNavigateNext = () => {
    const newOffset = toInt(query.offset) + toInt(query.limit);
    setQuery((prevQuery) => ({ ...prevQuery, offset: newOffset.toString() }));
  };

  return (
    <Box sx={{ display: "flex", justifyContent: "space-between" }}>
      <Button
        variant="outlined"
        color="inherit"
        startIcon={<NavigateBefore />}
        onClick={handleNavigatePrevious}
        disabled={hasNoPrevious}
      >
        {t("previous")}
      </Button>
      <Button
        variant="outlined"
        color="inherit"
        endIcon={<NavigateNext />}
        onClick={handleNavigateNext}
        disabled={hasNoNext}
      >
        {t("next")}
      </Button>
    </Box>
  );
}
