import { createContext, useState } from "react";

export const LoggedInUserContext = createContext({});

const LoggedInUserProvider = ({ children }) => {
  const [loggedInUser, setLoggedInUser] = useState(
    JSON.parse(localStorage.getItem("loggedInUser")) || {}
  );
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(
    JSON.parse(localStorage.getItem("loggedInUser")) ? true : false
  );

  return (
    <LoggedInUserContext.Provider
      value={{
        loggedInUser,
        setLoggedInUser,
        isUserLoggedIn,
        setIsUserLoggedIn,
      }}
    >
      {children}
    </LoggedInUserContext.Provider>
  );
};

export default LoggedInUserProvider;
