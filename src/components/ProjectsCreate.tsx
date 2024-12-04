import { Paper, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { Create } from "react-admin";
import { Routes } from "../constants";
import { getDefaultBemusterungsartikelKatalog } from "../providers/utils";
import { VoidActions } from "./actions";
import { BackButton } from "./BackButton";
import { ProjectsCreateForm } from "./projects/ProjectsCreateForm";
import { editCreateContainerStyles } from "./styles";

export const ProjectsCreate = () => {
  const [defaultValues, defaultValuesSet] = useState<unknown>();

  useEffect(() => {
    getDefaultBemusterungsartikelKatalog()
      .then((katalog) => {
        defaultValuesSet({
          bemusterungs_artikel: katalog,
        });
      })
      .catch((error) => {
        console.error(error);
        throw new Error("Bemusterungskatalog konnte nicht geladen werden");
      });
  }, []);

  const isLoading = !defaultValues;

  return (
    <>
      <BackButton ancestor={Routes.projects} alwaysToAncestor />
      {isLoading ? (
        <Paper sx={{ mt: "1rem", p: "1.5rem 2rem" }}>
          <Typography variant="subtitle1">
            Bemusterungskatalog wird geladen ...
          </Typography>
        </Paper>
      ) : (
        <Create actions={<VoidActions />} sx={editCreateContainerStyles}>
          <ProjectsCreateForm defaultValues={defaultValues} />
        </Create>
      )}
    </>
  );
};
