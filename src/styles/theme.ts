import blue from "@mui/material/colors/blue";
import red from "@mui/material/colors/red";
import { defaultTheme } from "react-admin";

export const wqBackground = "#4D4D4D";
const buttonBorder = "none";
export const warningColor = red[900];

export const theme = {
  ...defaultTheme,
  typography: {
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Arial",
      "sans-serif",
    ].join(","),
  },
  components: {
    ...defaultTheme.components,
    MuiAppBar: {
      styleOverrides: {
        colorPrimary: {
          backgroundColor: wqBackground,
        },
      },
    },
    MuiTabs: {
      styleOverrides: {
        indicator: {
          backgroundColor: "lightgrey",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          color: wqBackground,
          border: buttonBorder,
          "&:hover": {
            border: buttonBorder,
            backgroundColor: "lightgrey",
          },
        },
        containedPrimary: {
          backgroundColor: blue[700],
          color: "white",
          "&:hover": {
            backgroundColor: blue[500],
          },
        },
        textError: {
          backgroundColor: warningColor,
          color: "white",
          "&:hover": {
            backgroundColor: red[700],
          },
        },
      },
    },
    MuiFilledInput: {
      styleOverrides: {
        root: {
          "&:before": {
            borderBottom: "unset",
          },
          "&:after": {
            borderBottom: `2px solid ${wqBackground}`,
          },
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          "&.Mui-focused": {
            color: wqBackground,
          },
        },
      },
    },
    MuiCircularProgress: {
      styleOverrides: {
        root: {
          color: wqBackground,
        },
      },
    },
  },
};
