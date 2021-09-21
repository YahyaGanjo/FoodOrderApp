import React from "react";

const UserContext = React.createContext({
  info: {},
  isLoggedIn: null,
  logOut: () => {},
});

export default UserContext;
