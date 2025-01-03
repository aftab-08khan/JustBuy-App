import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import WishlistIcon from "./WishlistIcon";

const BottomBar = ({
  product,
  onWishlistPress,
  onBuyNowPress,
  onAddToBagPress,
}) => {
  return (
    <View style={styles.bottomBar}>
      <WishlistIcon product={product} size={30} />
      <View style={styles.actionsContainer}>
        <TouchableOpacity style={styles.buyNowButton} onPress={onBuyNowPress}>
          <Text style={styles.buyNowText}>Buy Now</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.addToBagButton}
          onPress={onAddToBagPress}
        >
          <Text style={styles.addToBagText}>Add to Bag</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default BottomBar;

const styles = StyleSheet.create({
  bottomBar: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    backgroundColor: "#eee5d9",
    paddingVertical: 20,
    paddingHorizontal: 16,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 10,
    paddingBottom: 34,
  },
  wishlistButton: {
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 4,
  },
  actionsContainer: {
    flexDirection: "row",
    gap: 10,
  },
  buyNowButton: {
    backgroundColor: "#fefdfc",
    paddingVertical: 10,
    paddingHorizontal: 32,
    borderRadius: 5,
    borderColor: "#bca68d",
    borderWidth: 2,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 4,
  },
  buyNowText: {
    color: "#2a251f",
    fontSize: 16,
    fontWeight: "bold",
  },
  addToBagButton: {
    backgroundColor: "#4f4333",
    paddingVertical: 10,
    paddingHorizontal: 32,
    borderRadius: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 4,
  },
  addToBagText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});
