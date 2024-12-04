import PeopleIcon from "@mui/icons-material/People";
// import SettingsIcon from "@mui/icons-material/Settings";
import {
  AppBar,
  Box,
  ListItemIcon,
  ListItemText,
  MenuItem,
  Tab,
  Tabs,
  Toolbar,
  Typography,
} from "@mui/material";
import grey from "@mui/material/colors/grey";
import {
  LoadingIndicator,
  Logout,
  usePermissions,
  UserMenu,
  useUserMenu,
} from "react-admin";
import { Link, useLocation } from "react-router-dom";
import { appName, Routes } from "../constants";

const TITLE = appName;

export const Header = () => {
  const location = useLocation();
  const { permissions } = usePermissions();

  const tablabel = "Administration";

  return (
    <Box
      component="nav"
      sx={{
        width: "100%",
        position: "fixed",
        zIndex: 999,
      }}
    >
      <AppBar position="static" color="primary">
        <Toolbar variant="dense">
          <Box flex={1} display="flex" justifyContent="space-between">
            <Box
              display="flex"
              alignItems="center"
              component={Link}
              to={Routes.projects}
              sx={{
                color: "inherit",
                textDecoration: "inherit",
              }}
              gap={1.5}
            >
              <Typography component="span" variant="h6">
                {TITLE}
              </Typography>
            </Box>
            <Box>
              <Tabs
                value={Routes.projects}
                aria-label="Navigation Tabs"
                indicatorColor="secondary"
                textColor="inherit"
              >
                <Tab
                  label={tablabel}
                  component={Link}
                  // stay at current location and don't navigate
                  to={location}
                  value={Routes.projects}
                />
              </Tabs>
            </Box>
            <Box
              display="flex"
              alignItems="center"
              sx={{
                gap: "1rem",
                "& .MuiButton-text": {
                  backgroundColor: grey[600],
                  color: "white",
                  "&:hover": { backgroundColor: grey[500] },
                },
              }}
            >
              <LoadingIndicator />
              <UserMenu>
                {/* <ConfigurationMenu /> */}
                {permissions === "admin" && <UsersMenu />}
                <Logout />
              </UserMenu>
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

const UsersMenu = () => {
  const { onClose } = useUserMenu() ?? {};
  return (
    <MenuItem component={Link} to="/sales" onClick={onClose}>
      <ListItemIcon>
        <PeopleIcon fontSize="small" />
      </ListItemIcon>
      <ListItemText>Users</ListItemText>
    </MenuItem>
  );
};
