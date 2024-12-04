import { AuthProvider } from "react-admin";

const mockAuthProvider: AuthProvider = {
  // called when the user attempts to log in
  login: ({ username }) => {
    if (typeof username !== "string") {
      throw new Error("username must be a string");
    }
    localStorage.setItem("username", username);
    // accept all username/password combinations
    return Promise.resolve();
  },
  // called when the user clicks on the logout button
  logout: () => {
    localStorage.removeItem("username");
    return Promise.resolve();
  },
  // called when the API returns an error
  checkError: ({ status }: { status: number }) => {
    if (status === 401 || status === 403) {
      localStorage.removeItem("username");
      return Promise.reject(new Error("Unauthorized"));
    }
    return Promise.resolve();
  },
  // called when the user navigates to a new location, to check for authentication
  checkAuth: () => {
    return localStorage.getItem("username")
      ? Promise.resolve()
      : Promise.reject(new Error("Unauthorized"));
  },
  // called when the user navigates to a new location, to check for permissions / roles
  getPermissions: () => Promise.resolve(),
};

export const authProvider = mockAuthProvider;
