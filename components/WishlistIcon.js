import React, { useState, useRef } from "react";
import { TouchableOpacity, Animated } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import * as Notifications from "expo-notifications";

const WishlistIcon = ({ product, size }) => {
  const [activeWishlist, setActiveWishlist] = useState(false);
  const scaleAnim = useRef(new Animated.Value(1)).current;

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

  return (
    <TouchableOpacity activeOpacity={0.2} onPress={handleWishlist}>
      <Animated.View style={{ transform: [{ scale: scaleAnim }] }}>
        {activeWishlist ? (
          <Ionicons name="heart" size={size ? size : 20} color="red" />
        ) : (
          <Ionicons
            name="heart-outline"
            size={size ? size : 20}
            color="#4f4333"
          />
        )}
      </Animated.View>
    </TouchableOpacity>
  );
};

export default WishlistIcon;
