import { lazy, memo } from "react";
import { TabbedForm } from "react-admin";
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

type Props = {
  defaultValues?: unknown;
};

const _ProjectsCreateForm = ({ defaultValues }: Props) => {
  return (
    <TabbedForm
      mode="onBlur"
      reValidateMode="onBlur"
      sx={{
        "& .MuiTab-root.Mui-selected": {
          color: "currentcolor",
        },
      }}
      warnWhenUnsavedChanges
      defaultValues={defaultValues}
      toolbar={<FormToolbar />}
    >
      <ProjectTab />
      <WohnungenTab />
      <BemusterungsArtikelTab />
    </TabbedForm>
  );
};

export const ProjectsCreateForm = memo(_ProjectsCreateForm);
