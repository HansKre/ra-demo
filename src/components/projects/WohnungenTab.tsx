import { ComponentProps, lazy } from "react";
import { ArrayInput, required, TabbedForm } from "react-admin";
import { useWatch } from "react-hook-form";

const ProjectsIterator = lazy(() =>
  import("./ProjectsIterator").then((module) => ({
    default: module.ProjectsIterator,
  })),
);

type Props = Omit<ComponentProps<typeof TabbedForm.Tab>, "label">;

export const WohnungenTab = (props: Props) => {
  const apartments = useWatch({ name: "apartments" });
  return (
    <TabbedForm.Tab
      label="Apartments in Project"
      path="wohnungen"
      count={Array.isArray(apartments) ? apartments?.length : 0}
      {...props}
    >
      <ArrayInput source="apartments" label={false} validate={required()}>
        <ProjectsIterator />
      </ArrayInput>
    </TabbedForm.Tab>
  );
};
