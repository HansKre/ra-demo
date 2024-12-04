import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Button } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

type Props = {
  ancestor: string;
  alwaysToAncestor?: boolean;
  sx?: React.ComponentPropsWithoutRef<typeof Button>["sx"];
};

export const BackButton = ({
  ancestor,
  alwaysToAncestor = false,
  sx,
}: Props) => {
  const navigate = useNavigate();

  const currentDomain = window.location.origin;
  const previousUrl = document.referrer;

  const handleBackClick = () => {
    if (
      !alwaysToAncestor &&
      window.history.length > 1 &&
      // navigate back only if the previous page is from the same domain
      previousUrl.startsWith(currentDomain)
    ) {
      navigate(-1); // Go back only if there is history
    } else {
      navigate(ancestor); // Otherwise, go to the ancestor directly
    }
  };

  return (
    <Button
      startIcon={<ArrowBackIcon />}
      onClick={handleBackClick}
      sx={{ marginTop: "4rem", ...sx }}
    >
      back
    </Button>
  );
};
