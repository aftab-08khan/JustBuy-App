import React from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  FlatList,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const SimilarProducts = ({ currentProduct, products }) => {
  const navigation = useNavigation();

  // Filter similar products
  const filterSimilarProducts = (currentProduct, products) => {
    return products?._j?.filter(
      (item) =>
        item.brand === currentProduct.brand &&
        item.gender === currentProduct.gender &&
        Math.abs(item.price - currentProduct.price) <= 3000
    );
  };

  const similarProducts = filterSimilarProducts(currentProduct, products);

  const renderProductCard = ({ item }) => (
    <TouchableOpacity
      style={styles.productCard}
      onPress={() =>
        navigation.navigate("SingleProductScreen", { product: item })
      }
    >
      {/* Product Image */}
      <Image
        source={{ uri: item.images.split(" ~ ")[0] }}
        style={styles.productImage}
        resizeMode="cover"
      />
      {/* Product Details */}
      <View style={styles.productDetails}>
        <Text style={styles.productName} numberOfLines={1}>
          {item.name}
        </Text>
        <Text style={styles.productPrice}>₹{item.price}</Text>
        <Text style={styles.productBrand}>{item.brand}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Similar Products</Text>
      {similarProducts && similarProducts.length > 0 ? (
        <FlatList
          data={similarProducts}
          renderItem={renderProductCard}
          keyExtractor={(item, index) => index.toString()}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
      ) : (
        <Text style={styles.noProductsText}>No similar products found.</Text>
      )}
    </View>
  );
};

export default SimilarProducts;

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: "#f9f9f9",
    marginTop: 16,
    borderRadius: 8,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 8,
    color: "#333",
  },
  productCard: {
    width: 160,
    padding: 8,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 8,
    marginRight: 12,
    backgroundColor: "#fff",
    alignItems: "center",
  },
  productImage: {
    width: "100%",
    height: 200,
    borderRadius: 8,
    marginBottom: 8,
  },
  productDetails: {
    alignItems: "center",
  },
  productName: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#333",
    textAlign: "center",
  },
  productPrice: {
    fontSize: 14,
    color: "#007BFF",
    marginTop: 4,
  },
  productBrand: {
    fontSize: 12,
    color: "#777",
    marginTop: 2,
    backgroundColor: "#e2d4c0",
    paddingHorizontal: 12,
    paddingVertical: 6,
  },
  noProductsText: {
    fontSize: 14,
    color: "#777",
  },
});
