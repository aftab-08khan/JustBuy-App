import React from "react";
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import Ionicons from "react-native-vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";
import CartAndWishList from "../components/CartAndWishList";
import BottomBar from "../components/BottomBar";
import { useTheme } from "../context/themeContext";
import SimilarProducts from "../components/SimilarProducts";
import SingleProductDetails from "../components/SingleProductDetails";
const SingleProductScreen = ({ route }) => {
  const { moreDealsProducts } = useTheme();
  const { product } = route.params;
  const navigation = useNavigation();

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.backButton}
        >
          <Ionicons name="chevron-back-outline" size={24} color="#333" />
        </TouchableOpacity>

        <Text style={styles.title}>{product.brand}</Text>

        <CartAndWishList
          onHeartPress={() => console.log("Wishlist clicked!")}
          onCartPress={() => console.log("Cart clicked!")}
          iconSize={24}
          iconColor="#27221a"
        />
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        <TouchableOpacity activeOpacity={1}>
          <SingleProductDetails product={product} />
        </TouchableOpacity>

        <SimilarProducts
          currentProduct={product}
          products={moreDealsProducts}
        />
      </ScrollView>

      <BottomBar
        product={product}
        onWishlistPress={() => console.log("Wishlist added")}
        onBuyNowPress={() => console.log("Buy Now clicked")}
        onAddToBagPress={() => console.log("Added to Bag")}
      />
    </SafeAreaView>
  );
};
export default SingleProductScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  backButton: {
    padding: 8,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#3f372f",
    letterSpacing: 1,
  },

  similarProductsSection: {
    padding: 16,
    backgroundColor: "#f9f9f9",
    marginTop: 16,
    borderRadius: 8,
  },
  similarProductsTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 8,
    color: "#333",
  },
  productCard: {
    padding: 12,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 8,
    marginBottom: 8,
    backgroundColor: "#fff",
  },
  productName: {
    fontSize: 14,
    color: "#555",
  },
  productPrice: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#222",
  },
  noProductsText: {
    fontSize: 14,
    color: "#777",
  },
});
