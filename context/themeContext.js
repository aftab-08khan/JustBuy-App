import React, { createContext, useContext, useEffect, useState } from "react";
const Theme = createContext();
export const useTheme = () => useContext(Theme);
export const ThemeContext = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [allCategoriesData, setAllCategoriesData] = useState(null);
  const [moreDealsProducts, setMoreDealsProducts] = useState(null);
  const [endpoint, setEndpoint] = useState("fashion");

  useEffect(() => {
    const fetchProductData = async () => {
      try {
        const response = await fetch(
          "https://aftab-08khan.github.io/JustBuyApi/products.json"
        );
        const result = response.json();
        setMoreDealsProducts(result);
      } catch (error) {
        console.log(error, "Error");
      }
    };
    fetchProductData();
  }, []);
  return (
    <Theme.Provider
      value={{
        allCategoriesData,
        setAllCategoriesData,
        isLoading,
        setIsLoading,
        moreDealsProducts,
        endpoint,
        setEndpoint,
      }}
    >
      {children}
    </Theme.Provider>
  );
};
