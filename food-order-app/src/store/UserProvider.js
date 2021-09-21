import React, { useState } from "react";
import UserContext from "./UserContext";

const defaultUserState = {
  info: {},
  isLoggedIn: false,
};

const UserProvider = (props) => {
  const [userState, setUserState] = useState(defaultUserState);
  const logOut = () => setUserState(defaultUserState);
  const userContext = {
    info: userState.info,
    isLoggedIn: userState.isLoggedIn,
    logOut,
  };
  return (
    <UserContext.Provider value={userContext}>
      {props.children}
    </UserContext.Provider>
  );
};

export default UserProvider;
