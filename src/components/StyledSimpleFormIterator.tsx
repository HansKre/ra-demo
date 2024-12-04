import React, { ComponentProps } from "react";
import { SimpleFormIterator } from "react-admin";
import { warningColor, wqBackground } from "../styles/theme";

type Props = ComponentProps<typeof SimpleFormIterator> & {
  addPrefix: string;
  children: React.ReactNode;
};

export const StyledSimpleFormIterator = ({
  addPrefix,
  children,
  ...rest
}: Props) => {
  return (
    <SimpleFormIterator
      {...rest}
      sx={{
        "& .RaSimpleFormIterator-action": {
          visibility: "visible",
          display: "flex",
          alignItems: "center",
        },
        "& .MuiIconButton-root > svg": {
          height: "1.2em",
          width: "1.2em",
        },
        "& .MuiIconButton-colorPrimary:not(.Mui-disabled)": {
          color: wqBackground,
        },
        "& .MuiIconButton-colorWarning:not(.Mui-disabled)": {
          color: warningColor,
        },
        "& .MuiFormHelperText-root": {
          visibility: "hidden",
          display: "none",
        },
        "& .RaSimpleFormIterator-line": {
          borderBottom: "unset",
          marginBottom: "0.75rem",
        },
        "& .RaSimpleFormIterator-add > button": {
          borderRadius: "4px",
        },
        "& .RaSimpleFormIterator-add > button::after": {
          content: `"${addPrefix} Hinzufügen"`,
          paddingLeft: "0.5rem",
        },
      }}
      disableClear
    >
      {children}
    </SimpleFormIterator>
  );
};
