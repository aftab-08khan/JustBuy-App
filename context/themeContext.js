import React, { createContext, useContext, useState } from "react";
const Theme = createContext();
export const useTheme = () => useContext(Theme);
export const ThemeContext = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [allCategoriesData, setAllCategoriesData] = useState(null);
  return (
    <Theme.Provider
      value={{
        allCategoriesData,
        setAllCategoriesData,
        isLoading,
        setIsLoading,
      }}
    >
      {children}
    </Theme.Provider>
  );
};
