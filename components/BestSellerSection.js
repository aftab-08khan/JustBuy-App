import React, { useEffect } from "react";
import { View, StyleSheet } from "react-native";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withTiming,
} from "react-native-reanimated";
import { LinearGradient } from "expo-linear-gradient";
import OfferCard from "./OfferScreen";

const BestSellerSection = () => {
  const translateY = useSharedValue(0);

  useEffect(() => {
    translateY.value = withRepeat(withTiming(10, { duration: 1000 }), -1, true);
  }, []);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ translateY: translateY.value }],
  }));

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={["#544a3f", "#76654d", "#dccbb3"]}
        style={styles.gradientContainer}
      >
        <Animated.Text style={[styles.headerText, animatedStyle]}>
          Best Seller
        </Animated.Text>
      </LinearGradient>
      <View style={styles.cardRow}>
        <OfferCard rate={199} />
        <OfferCard rate={299} />
        <OfferCard rate={499} />
      </View>
    </View>
  );
};

export default BestSellerSection;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
  },
  gradientContainer: {
    paddingVertical: 20,
    alignItems: "center",
    borderRadius: 12,
  },
  headerText: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#f6f1eb",
    textAlign: "center",
    textTransform: "uppercase",
    textShadowColor: "#3f372f",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 4,
  },
  cardRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    // paddingHorizontal: 16,
    marginTop: 20,
  },
});
