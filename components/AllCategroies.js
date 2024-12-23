import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Image,
  StyleSheet,
} from "react-native";
import FireIcon from "../assets/icons/fireIcon.png"; // Local asset example

const AllCategories = ({ onPress }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [allCategoriesData, setAllCategoriesData] = useState([]);

  useEffect(() => {
    const fetchCategoriesData = async () => {
      try {
        const response = await fetch(
          "https://aftab-08khan.github.io/JustBuyApi/AllCategories.json"
        );
        const result = await response.json();
        setAllCategoriesData([
          { img: FireIcon, title: "Trending", link: "trending" },
          ...result.AllCategories,
        ]);
      } catch (error) {
        console.error(error);
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
          return [setActiveIndex(index), onPress(item.link)];
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
      <FlatList
        data={allCategoriesData}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
        showsVerticalScrollIndicator={false}
      />
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
    // marginBottom: -10,
  },
  categoryText: {
    marginTop: 6,
    fontSize: 14,
    color: "#191500",
    letterSpacing: 1,
  },
});

export default AllCategories;
