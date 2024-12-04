import PostIcon from "@mui/icons-material/Book";
import { lazy } from "react";
import { Admin, Resource } from "react-admin";
import { appName } from "./constants";
import { Layout } from "./layout";
import { dataProvider, i18nProvider } from "./providers";
import { theme } from "./styles";

const ProjectsEdit = lazy(() =>
  import("./components/ProjectsEdit").then((module) => ({
    default: module.ProjectsEdit,
  })),
);

const ProjectsList = lazy(() =>
  import("./components/ProjectsList").then((module) => ({
    default: module.ProjectsList,
  })),
);

export const App = () => (
  <Admin
    title={appName}
    layout={Layout}
    theme={theme}
    dataProvider={dataProvider}
    i18nProvider={i18nProvider}
  >
    <Resource
      name="projects"
      list={ProjectsList}
      edit={ProjectsEdit}
      icon={PostIcon}
    />
  </Admin>
);
