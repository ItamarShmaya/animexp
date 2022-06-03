import { createContext, useState } from "react";

export const LoggedInUserContext = createContext({});

const LoggedInUserProvider = ({ children }) => {
  const [loggedInUser, setLoggedInUser] = useState({});
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(null);

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
