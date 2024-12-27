import React, { useEffect, useState } from "react";
import { FlatList, View, StyleSheet } from "react-native";
import { useTheme } from "../context/themeContext";
import CategoryItem from "./CategoryItem";

const SubCategoriesList = () => {
  const { allCategoriesData, setAllCategoriesData, isLoading, setIsLoading } =
    useTheme();
  const [firstHalf, setFirstHalf] = useState([]);
  const [secondHalf, setSecondHalf] = useState([]);
  // console.log(firstHalf, "first");

  useEffect(() => {
    const fetchCategoriesData = async () => {
      try {
        const response = await fetch(
          "https://aftab-08khan.github.io/JustBuyApi/fashion.json"
        );
        const result = await response.json();
        const combinedData = [
          {
            image: require("../assets/icons/fireIcon.png"),
            title: "Trending",
            link: "trending",
          },
          ...result,
        ];

        const midpoint = Math.ceil(combinedData.length / 2);

        setFirstHalf(combinedData.slice(0, midpoint));
        console.log(firstHalf[0]);

        setSecondHalf(combinedData.slice(midpoint));
      } catch (error) {
        console.error(error);
      } finally {
        setTimeout(() => {
          setIsLoading(false);
        }, 2000);
      }
    };

    fetchCategoriesData();
  }, []);

  const renderItem = ({ item, idx }) => (
    <CategoryItem
      category={item}
      key={idx}
      type={"double"}
      isLoading={isLoading}
    />
  );

  return (
    <View style={styles.container}>
      <FlatList
        key={1}
        data={firstHalf}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.contentContainer}
      />
      <FlatList
        key={2}
        data={secondHalf}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.contentContainer}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // marginTop: 8,
    paddingHorizontal: 4,
    // gap: 12,
  },
  contentContainer: {
    flexDirection: "row",
    marginBottom: 2,
    // backgroundColor: "red",
  },
});

export default SubCategoriesList;
