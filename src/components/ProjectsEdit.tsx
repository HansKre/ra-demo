import { LinearProgress } from "@mui/material";
import { useQueryClient } from "@tanstack/react-query";
import { lazy, Suspense } from "react";
import { Edit, useEditController } from "react-admin";
import { Routes } from "../constants";
import { VoidActions } from "./actions";
import { BackButton } from "./BackButton";
import { editCreateContainerStyles } from "./styles";

const ProjectsEditForm = lazy(() =>
  import("./projects/ProjectsEditForm").then((module) => ({
    default: module.ProjectsEditForm,
  })),
);

export const ProjectsEdit = () => {
  const queryClient = useQueryClient();
  const { isFetching, isLoading } = useEditController();
  const isLoadingOrFetching = isLoading || isFetching;
  return (
    <>
      <BackButton ancestor={Routes.projects} />

      <Edit
        actions={<VoidActions />}
        sx={editCreateContainerStyles}
        redirect={false}
        mutationMode="pessimistic"
        mutationOptions={{
          onSuccess: () => {
            void queryClient.invalidateQueries();
          },
        }}
      >
        {isLoadingOrFetching && <LinearProgress color="success" />}
        <Suspense fallback={<LinearProgress color="success" />}>
          <ProjectsEditForm />
        </Suspense>
      </Edit>
    </>
  );
};
