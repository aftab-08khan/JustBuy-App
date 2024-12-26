import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Image,
  StyleSheet,
  ActivityIndicator,
} from "react-native";
import FireIcon from "../assets/icons/fireIcon.png";
import { useTheme } from "../context/themeContext";

const SkeletonLoader = () => (
  <View style={styles.skeletonItem}>
    <View style={styles.skeletonImage} />
    <View style={styles.skeletonText} />
  </View>
);

const AllCategories = ({ onPress }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  // const [allCategoriesData, setAllCategoriesData] = useState([]);
  const { allCategoriesData, setAllCategoriesData, isLoading, setIsLoading } =
    useTheme();
  useEffect(() => {
    const fetchCategoriesData = async () => {
      try {
        const response = await fetch(
          "https://aftab-08khan.github.io/JustBuyApi/AllCategories.json"
        );
        const result = await response.json();
        const combinedData = [
          {
            img: require("../assets/icons/fireIcon.png"),
            title: "Trending",
            link: "trending",
          },
          ...result.AllCategories,
        ];
        setAllCategoriesData(combinedData);
      } catch (error) {
        console.error(error);
      } finally {
        setTimeout(() => {
          setIsLoading(false);
        }, 1000);
      }
    };

    fetchCategoriesData();
  }, []);

  const renderItem = ({ item, index }) => {
    const isActive = index === activeIndex;
    const isNext = index === activeIndex + 1;
    const isPrev = index === activeIndex - 1;

    return (
      <TouchableOpacity
        style={[
          styles.categoryItem,
          isActive && styles.activeStyle,
          isNext && styles.nextStyle,
          isPrev && styles.prevStyle,
        ]}
        key={index}
        onPress={() => {
          setActiveIndex(index);
          onPress(item.link);
        }}
      >
        {isActive && <View style={styles.activeBorder} />}
        <View style={styles.imageContainer}>
          {item.img === FireIcon ? (
            <Image source={item.img} style={styles.categoryImage} />
          ) : (
            <Image source={{ uri: item.img }} style={styles.categoryImage} />
          )}
        </View>
        <Text style={styles.categoryText}>{item.title}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      {isLoading ? (
        <FlatList
          data={[1, 2, 3, 4, 5, 6, 7]}
          renderItem={() => <SkeletonLoader />}
          keyExtractor={(item) => item.toString()}
        />
      ) : (
        <FlatList
          data={allCategoriesData}
          renderItem={renderItem}
          keyExtractor={(item, index) => index.toString()}
          showsVerticalScrollIndicator={false}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "28%",
    borderTopRightRadius: 4,
    overflow: "hidden",
  },
  categoryItem: {
    alignItems: "center",
    backgroundColor: "#e2d4c0",
    padding: 18,
    paddingVertical: 8,
  },
  activeStyle: {
    backgroundColor: "#fff",
    position: "relative",
  },
  activeBorder: {
    position: "absolute",
    left: 0,
    top: "16%",
    height: "60%",
    width: 8,
    backgroundColor: "#4f4333",
    borderTopRightRadius: 4,
    borderBottomRightRadius: 4,
  },
  nextStyle: {
    borderTopRightRadius: 12,
  },
  prevStyle: {
    borderBottomRightRadius: 12,
  },
  imageContainer: {
    backgroundColor: "#f6f1eb",
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 8,
    overflow: "hidden",
    width: "100%",
    height: 60,
    justifyContent: "center",
    alignItems: "center",
  },
  categoryImage: {
    width: 80,
    height: 60,
  },
  categoryText: {
    marginTop: 6,
    fontSize: 14,
    color: "#191500",
    letterSpacing: 0.2,
  },
  skeletonItem: {
    marginVertical: 10,
    alignItems: "center",
  },
  skeletonImage: {
    width: 80,
    height: 60,
    backgroundColor: "#e0e0e0",
    borderRadius: 8,
  },
  skeletonText: {
    width: 60,
    height: 12,
    marginTop: 10,
    backgroundColor: "#e0e0e0",
    borderRadius: 4,
  },
});

export default AllCategories;
