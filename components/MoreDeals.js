import React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { useTheme } from "../context/themeContext";
import SingleProduct from "./ProductCard";
import ProductCard from "./ProductCard";

const MoreDeals = () => {
  const { moreDealsProducts } = useTheme();

  const renderItem = ({ item }) => {
    return (
      <View style={styles.itemContainer}>
        <ProductCard
          product={item}
          isLoading={!moreDealsProducts}
          key={item.brand}
        />
      </View>
    );
  };

  return (
    <View style={{ flex: 1, marginVertical: 30 }}>
      <Text style={styles.heading}>Explore More Deals</Text>

      <FlatList
        data={moreDealsProducts?._j?.slice(0, 200) || []}
        numColumns={2}
        keyExtractor={(item) => item.sku.toString()}
        renderItem={renderItem}
      />
    </View>
  );
};

export default MoreDeals;

const styles = StyleSheet.create({
  itemContainer: {
    flex: 1,
    margin: 5,
  },
  heading: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#2a2a2a",
    textAlign: "center",
    marginVertical: 15,
    textTransform: "uppercase",
    letterSpacing: 1,
  },
});
