import React, { useState, useEffect, useRef } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Animated,
  Platform,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import * as Notifications from "expo-notifications";
import { useNavigation } from "@react-navigation/native";
import SkeletonLoader from "./SkeletonLoader";

const ProductCard = ({ product, isLoading }) => {
  const imagesArray = product.images.split(" ~ ");
  const [activeWishlist, setActiveWishlist] = useState(false);

  const scaleAnim = useRef(new Animated.Value(1)).current;
  const navigation = useNavigation();
  useEffect(() => {
    const requestPermissions = async () => {
      const { status } = await Notifications.requestPermissionsAsync();
      if (status !== "granted") {
        alert("Notification permission not granted");
      }
    };

    requestPermissions();
  }, []);

  const handleWishlist = async () => {
    Animated.sequence([
      Animated.timing(scaleAnim, {
        toValue: 1.5,
        duration: 200,
        useNativeDriver: true,
      }),
      Animated.timing(scaleAnim, {
        toValue: 1,
        duration: 200,
        useNativeDriver: true,
      }),
    ]).start();

    setActiveWishlist((prev) => !prev);
    Notifications.setNotificationHandler({
      handleNotification: async () => ({
        shouldShowAlert: true,
        shouldPlaySound: true,
        shouldSetBadge: false,
      }),
    });
    Notifications.scheduleNotificationAsync({
      content: {
        title: !activeWishlist ? "Added to Wishlist" : "Removed from Wishlist",
        body: `${product.name} is now ${
          activeWishlist ? "in" : "out of"
        } your wishlist.`,
        sound: true,
        ios: {
          icon: require("../assets/icon.png"),
        },
        android: {
          icon: require("../assets/icon.png"),
          color: "#8a765a",
        },
      },
      trigger: null,
    });
  };
  useEffect(() => {
    setTimeout(() => {
      if (isLoading) {
        return <SkeletonLoader />;
      }
    }, 1000);
  }, []);
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={() => navigation.navigate("SingleProductScreen", { product })}
    >
      <View style={styles.productContainer}>
        <View
          style={{
            borderWidth: 1,
            borderColor: "#888",
            borderRadius: 8,
            overflow: "hidden",
          }}
        >
          <Image source={{ uri: imagesArray[0] }} style={styles.productImage} />
        </View>
        <View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Text style={styles.productBrand}>{product.brand}</Text>
            <View style={styles.iconWrapper}>
              <TouchableOpacity activeOpacity={0.2} onPress={handleWishlist}>
                <Animated.View style={{ transform: [{ scale: scaleAnim }] }}>
                  {activeWishlist === true ? (
                    <Ionicons name="heart" size={20} color={"red"} />
                  ) : (
                    <Ionicons
                      name="heart-outline"
                      size={20}
                      color={"#4f4333"}
                    />
                  )}
                </Animated.View>
              </TouchableOpacity>
            </View>
          </View>
          <Text
            style={styles.productName}
            numberOfLines={2}
            ellipsizeMode="tail"
          >
            {product.name}
          </Text>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Text style={styles.productPrice}>₹{product.price}</Text>
            <Text style={styles.productGender}>{product.gender}</Text>
          </View>
          {product.in_stock ? (
            <Text style={styles.inStock}>In Stock</Text>
          ) : (
            <Text style={styles.outOfStock}>Out of Stock</Text>
          )}
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  productContainer: {
    flex: 1,
    borderRadius: 8,
    marginBottom: 12,
  },
  productImage: {
    width: "100%",
    height: Dimensions.get("window").width / 1.8,
  },
  productName: {
    fontSize: 10,
    color: "#555",
  },
  productPrice: {
    marginTop: 8,
    fontSize: 14,
    color: "#2a251f",
    fontWeight: "700",
  },
  productGender: {
    marginTop: 8,
    fontSize: 14,
    color: "#9e8666",
    letterSpacing: 0.6,
    fontWeight: "700",
    marginRight: 4,
  },
  productBrand: {
    fontSize: 16,
    fontWeight: "bold",
    marginVertical: 5,
  },
  inStock: {
    fontSize: 12,
    color: "green",
    marginTop: 5,
  },
  outOfStock: {
    fontSize: 12,
    color: "red",
    marginTop: 5,
  },
  iconWrapper: {
    paddingRight: 10,
  },
});

export default ProductCard;
