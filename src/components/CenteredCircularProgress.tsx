import { CircularProgress } from "@mui/material";
import React from "react";

type Props = {
  additionalStyles?: React.CSSProperties;
};
export const CenteredCircularProgress = ({ additionalStyles }: Props) => {
  return (
    <div style={{ width: "100%", textAlign: "center", ...additionalStyles }}>
      <CircularProgress />
    </div>
  );
};
