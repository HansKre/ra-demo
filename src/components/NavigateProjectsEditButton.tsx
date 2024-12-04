import ContentCreate from "@mui/icons-material/Create";
import { Button } from "@mui/material";
import { useRedirect } from "react-admin";

type Props = {
  projectId: string | null;
};

export const NavigateProjectsEditButton = ({ projectId }: Props) => {
  const redirect = useRedirect();

  const handleClick = () => {
    if (!projectId) return;
    redirect(`/projects/${projectId}`);
  };

  return (
    <Button
      startIcon={<ContentCreate />}
      onClick={handleClick}
      disabled={!projectId}
    >
      Project config
    </Button>
  );
};
