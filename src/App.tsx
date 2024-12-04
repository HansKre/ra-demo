import PostIcon from "@mui/icons-material/Book";
import { lazy } from "react";
import { Admin, CustomRoutes, Resource } from "react-admin";
import { Navigate, Route } from "react-router-dom";
import { appName } from "./constants";
import { Layout } from "./layout";
import { authProvider, dataProvider, i18nProvider } from "./providers";
import { theme } from "./styles";

const ProjectsEdit = lazy(() =>
  import("./components/ProjectsEdit").then((module) => ({
    default: module.ProjectsEdit,
  })),
);

export const App = () => (
  <Admin
    title={appName}
    layout={Layout}
    theme={theme}
    dataProvider={dataProvider}
    authProvider={authProvider}
    i18nProvider={i18nProvider}
  >
    <Resource name="projects" edit={ProjectsEdit} icon={PostIcon} />
    <CustomRoutes>
      <Route path="*" element={<Navigate to="/projects" replace />} />
    </CustomRoutes>
  </Admin>
);
