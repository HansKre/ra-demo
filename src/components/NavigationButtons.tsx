import { Routes } from "../constants";
import { BackButton } from "./BackButton";
import { NavigateProjectsEditButton } from "./NavigateProjectsEditButton";

type Props = {
  projectId: string | null;
};
export const NavigationButtons = ({ projectId }: Props) => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "flex-end",
        justifyContent: "space-between",
      }}
    >
      <BackButton ancestor={`${Routes.projects}/${projectId}/show`} />
      <NavigateProjectsEditButton projectId={projectId} />
    </div>
  );
};
