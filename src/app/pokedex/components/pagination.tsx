"use client";
import { useQueryParams } from "@/app/hooks/use-query-params";
import { toInt } from "@/app/lib/to-int";
import { NavigateBefore, NavigateNext } from "@mui/icons-material";
import { Box, Button } from "@mui/material";
import { useTranslations } from "next-intl";
import { initialLimit, initialOffset } from "../lib/constants";
import { SearchParams } from "../lib/types";

export default function Pagination() {
  const [query, setQuery] = useQueryParams<SearchParams>();
  const t = useTranslations("pokedex.pagination");

  const limit = toInt(query.limit ?? initialLimit);
  const offset = toInt(query.offset ?? initialOffset);
  const isFirstPage = (offset: number): boolean => offset === 0;

  const handlePreviousClick = () => {
    const newOffset = offset - limit;
    setQuery(
      isFirstPage(newOffset)
        ? {}
        : { limit: limit.toString(), offset: newOffset.toString() },
    );
  };

  const handleNextClick = () => {
    const newOffset = offset + limit;
    setQuery({ limit: limit.toString(), offset: newOffset.toString() });
  };

  return (
    <Box sx={{ display: "flex", justifyContent: "space-between" }}>
      <Button
        variant="outlined"
        color="inherit"
        startIcon={<NavigateBefore />}
        onClick={handlePreviousClick}
        disabled={isFirstPage(offset)}
      >
        {t("previous")}
      </Button>
      <Button
        variant="outlined"
        color="inherit"
        endIcon={<NavigateNext />}
        onClick={handleNextClick}
      >
        {t("next")}
      </Button>
    </Box>
  );
}
