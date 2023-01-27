import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthContestProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(localStorage.getItem("user")) || null
  );
  const login = () => {
    setCurrentUser({
      id: 1,
      name: "Andrews Osei",
      profilePic:
        "https://media.licdn.com/dms/image/C4D03AQFiVmgBapGldg/profile-displayphoto-shrink_800_800/0/1615849381181?e=2147483647&v=beta&t=W9cb-7GNnPdTwsoYelCeOLOaRsLj9skkb8RYy91MK6s",
    });
  };

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(currentUser));
  }, [currentUser]);

  return (
    <AuthContext.Provider value={{ currentUser, login }}>
      {children}
    </AuthContext.Provider>
  );
};
