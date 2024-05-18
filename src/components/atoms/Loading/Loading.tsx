import { CircularProgress, CircularProgressProps } from "@mui/material";

type LoadingProps = CircularProgressProps;

export default function Loading(props: LoadingProps) {
  return <CircularProgress {...props} />;
}
