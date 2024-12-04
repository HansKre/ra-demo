import { lazy, memo } from "react";
import { TabbedForm, useEditController } from "react-admin";
import { FormToolbar } from "./FormToolbar";

const BemusterungsArtikelTab = lazy(() =>
  import("./BemusterungsArtikelTab").then((module) => ({
    default: module.BemusterungsArtikelTab,
  })),
);

const WohnungenTab = lazy(() =>
  import("./WohnungenTab").then((module) => ({
    default: module.WohnungenTab,
  })),
);
const ProjectTab = lazy(() =>
  import("./ProjectTab").then((module) => ({
    default: module.ProjectTab,
  })),
);

const ProjectsEditForm_ = () => {
  const { isFetching, isLoading } = useEditController();
  const isLoadingOrFetching = isLoading || isFetching;

  return (
    <TabbedForm
      mode="onBlur"
      reValidateMode="onBlur"
      validate={() => {
        // disable the default beforeSubmit-validation since it yields false results after reordering / deleting apartments and hence prevents saving
        return {};
      }}
      sx={{
        "& .MuiTab-root.Mui-selected": {
          color: "currentcolor",
        },
      }}
      warnWhenUnsavedChanges
      toolbar={<FormToolbar showDeleteButton={true} />}
      // hacky hack to avoid showing while loading, but still needs to be in DOM for loading to start
      style={{
        visibility: isLoadingOrFetching ? "hidden" : undefined,
        display: isLoadingOrFetching ? "none" : undefined,
      }}
    >
      <ProjectTab />
      <WohnungenTab />
      <BemusterungsArtikelTab />
    </TabbedForm>
  );
};

export const ProjectsEditForm = memo(ProjectsEditForm_);
