import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

const SingleProductDetails = ({ product }) => {
  // const { product } = route.params;

  return (
    <View style={styles.container}>
      <Image
        source={{ uri: product.images.split(" ~ ")[0] }}
        style={styles.image}
      />
      <Text style={styles.title}>{product.brand}</Text>
      <Text style={styles.price}>₹{product.price}</Text>
      <Text style={styles.description}>{product.description}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#fff",
  },
  image: {
    width: "100%",
    height: 300,
    borderRadius: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginVertical: 10,
  },
  price: {
    fontSize: 18,
    color: "#555",
  },
  description: {
    fontSize: 14,
    marginTop: 10,
    color: "#777",
  },
});

export default SingleProductDetails;
