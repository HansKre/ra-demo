export const tableStyles = {
  base: {
    "& .MuiTableHead-root > .MuiTableRow-head > .MuiTableCell-root": {
      height: "3rem",
    },
    "& tbody > tr:last-of-type > td": {
      borderBottom: "none",
    },
    "& table": {
      marginBottom: "1.5rem",
    },
  },
};

export const editCreateContainerStyles = {
  marginTop: "1rem",
  marginBottom: "2rem",
  "& .MuiCardContent-root": {
    padding: "1rem 1.5rem",
  },
  "& .MuiFormHelperText-root": {
    visibility: "hidden",
    display: "none",
  },
  "& .MuiToolbar-root.MuiToolbar-gutters.MuiToolbar-regular": {
    "& button": {
      minWidth: "140px",
    },
  },
};

const border = "1px solid rgba(224, 224, 224, 1)";
export const buttonStyles = {
  bordered: {
    border,
    "&:hover": {
      border,
    },
  },
};

export const accentColor = "rgb(224, 138,90)";
