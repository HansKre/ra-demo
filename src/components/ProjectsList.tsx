import {
  Datagrid,
  List,
  Loading,
  TextField,
  TextInput,
  useListContext,
} from "react-admin";
import { ChipCountField } from "../fields";
import { tableStyles } from "./styles";

const projectFilters = [
  <TextInput key={0} source="q" label="Suchen" alwaysOn />,
];

const ProjectListDataGrid = () => {
  const { isLoading, isFetching } = useListContext();

  if (isLoading || isFetching) {
    return (
      <Loading
        sx={{
          paddingTop: "2rem",
          paddingBottom: "2rem",
          "& .MuiTypography-h5": {
            marginTop: "0.5rem",
          },
        }}
      />
    );
  }

  return (
    <Datagrid
      bulkActionButtons={false}
      sx={{
        ...tableStyles.base,
        padding: "1rem 1rem 0rem",
        "& tbody > .MuiTableRow-root": {
          height: "3rem",
        },
        "& .column-apartments": { textAlign: "center" },
      }}
    >
      <TextField source="name" />
      <ChipCountField source="apartments" label="Apartments" />
    </Datagrid>
  );
};

export const ProjectsList = () => (
  <List
    filters={projectFilters}
    sx={{
      pt: "4rem",
      "& .MuiToolbar-root": {
        columnGap: "2rem",
      },
    }}
  >
    <ProjectListDataGrid />
  </List>
);
