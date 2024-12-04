import { SxProps } from "@mui/system";
import { Labeled, TextField } from "react-admin";

type Props = {
  label: string;
  value: string;
  additionalTextFieldStyles?: SxProps;
};
export const TypoStyledAsTextInput = ({
  label,
  value,
  additionalTextFieldStyles,
}: Props) => {
  return (
    <div
      style={{
        width: "100%",
        backgroundColor: "rgba(0, 0, 0, 0.06)",
        borderTopLeftRadius: "4px",
        borderTopRightRadius: "4px",
        paddingLeft: "12px",
        marginTop: "8px",
        marginBottom: "4px",
      }}
    >
      <Labeled label={label} sx={{ "& > p": { mb: "0px !important" } }}>
        <TextField
          source="value"
          record={{ value }}
          variant="body1"
          sx={additionalTextFieldStyles}
        />
      </Labeled>
    </div>
  );
};
