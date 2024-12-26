import React from "react";
import { TouchableOpacity, View, Text, Image, StyleSheet } from "react-native";

const CategoryItem = ({ category, key, type }) => {
  return (
    <TouchableOpacity
      style={[type === "double" ? styles.item1 : styles.item2]}
      key={key}
    >
      <View
        style={[
          styles.imageView,
          type === "double"
            ? { width: 60, height: 60 }
            : { width: 80, height: 80 },
        ]}
      >
        <Image
          source={
            category.img
              ? { uri: category.img }
              : category.image
              ? { uri: category.image }
              : category.image || category.img
          }
          style={styles.image}
        />
      </View>
      <Text
        style={[category.category ? styles.categoryName : styles.categoryTitle]}
      >
        {type === "double" ? category.title : category.category}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  item1: {
    marginRight: 10,
    alignItems: "center",
    marginBottom: 15,
    justifyContent: "flex-start",
  },
  item2: {
    width: "30%",
    padding: 8,
    // alignItems: "center",
    marginBottom: 15,
  },
  imageView: {
    width: 80,
    height: 80,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#d6c2a6",
    borderRadius: 50,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  categoryName: {
    fontSize: 12,
    fontWeight: "bold",
    textAlign: "center",
    letterSpacing: 0.4,
    marginTop: 8,
  },
  categoryTitle: {
    fontSize: 12,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 8,
  },
});

export default CategoryItem;
