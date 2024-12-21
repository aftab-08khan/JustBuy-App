import { useNavigation } from "@react-navigation/native";
import React from "react";
import { TouchableOpacity, View, StyleSheet } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

const CartAndWishList = ({
  title,
  iconColor,
  onCartPress,
  onHeartPress,
  iconSize,
}) => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      {title === "Categories" ? (
        ""
      ) : (
        <View style={styles.iconWrapper}>
          <TouchableOpacity onPress={() => navigation.navigate("SearchScreen")}>
            <Ionicons name="search-outline" size={iconSize} color={iconColor} />
          </TouchableOpacity>
        </View>
      )}

      <View style={styles.iconWrapper}>
        <TouchableOpacity onPress={() => navigation.navigate("WishListScreen")}>
          <Ionicons name="heart-outline" size={iconSize} color={iconColor} />
        </TouchableOpacity>
      </View>

      <View style={styles.iconWrapper}>
        <TouchableOpacity onPress={() => navigation.navigate("CartScreen")}>
          <Ionicons name="cart-outline" size={iconSize} color={iconColor} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
    padding: 10,
  },
  iconWrapper: {
    marginLeft: 12,
  },
});

export default CartAndWishList;
