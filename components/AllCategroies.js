import React from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Image,
  StyleSheet,
} from "react-native";
import { FashionData1, FashionData2 } from "../data/FashionData";

const AllCategories = () => {
  const newArray = [...FashionData1, ...FashionData2]; // Combine the two data arrays

  // Render each category item
  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.categoryItem}>
      {/* Display Image if exists in the data */}
      <View
        style={{
          backgroundColor: "#f6f1eb",
          paddingHorizontal: 16,
          paddingVertical: 10,
          borderRadius: 8,
          overflow: "hidden",
        }}
      >
        <Image source={item.image} style={styles.categoryImage} />
      </View>

      {/* Category Name */}
      <Text style={styles.categoryText}>{item.title}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={newArray}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
        showsVerticalScrollIndicator={false} // Hide the scroll indicator
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "30%",
    backgroundColor: "#e2d4c0",
    padding: 10,
    borderTopRightRadius: 12,
  },
  categoryItem: {
    alignItems: "center",
    // padding: 10,

    marginBottom: 16,
    borderRadius: 8,
  },
  categoryImage: {
    width: 36,
    height: 60,
    marginBottom: -18,
  },
  categoryText: {
    marginTop: 6,
    fontSize: 14,
    color: "#191500", // Text color
    letterSpacing: 1,
  },
});

export default AllCategories;
