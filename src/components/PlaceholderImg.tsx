import ImageIcon from "@mui/icons-material/Image";
import { Grid } from "@mui/material";

const PlaceHolderIcon = () => (
  <ImageIcon sx={{ fontSize: "68px", color: "darkgray" }} />
);

type Props = {
  withGrid?: boolean;
};

export const PlaceholderImg = ({ withGrid = false }: Props) => {
  if (withGrid) {
    return (
      <Grid item xs={2} sx={placeholderGridStyles}>
        <PlaceHolderIcon />
      </Grid>
    );
  }

  return <PlaceHolderIcon />;
};

export const placeholderGridStyles = { textAlign: "center" };
