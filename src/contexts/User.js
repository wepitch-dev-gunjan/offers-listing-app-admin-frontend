import { createContext, useEffect, useState } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const storedToken = localStorage.getItem("token");
  const [user, setUser] = useState({
    loggedIn: false,
    token: "",
  });
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    console.log(storedToken);
    if (!user.loggedIn)
      setUser({
        loggedIn: !!storedToken,
        token: storedToken,
      });
  }, []);
  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
        loggedIn,
        setLoggedIn,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
