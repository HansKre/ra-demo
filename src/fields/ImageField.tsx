import { Typography } from "@mui/material";

type Props = {
  url: string | undefined;
  alt: string;
};

export const ImageField = ({ url, alt }: Props) => {
  return url ? (
    <img src={url} alt={alt} style={{ width: "auto", height: "218px" }} />
  ) : (
    <Typography>Kein Bild vorhanden</Typography>
  );
};
