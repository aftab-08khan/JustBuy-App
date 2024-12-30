import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient"; // Add expo-linear-gradient for gradients

const OfferCard = ({ rate }) => {
  return (
    <TouchableOpacity style={styles.cardContainer} activeOpacity={0.8}>
      <LinearGradient
        colors={["#dccbb3", "#d6bfa7", "#544a3f"]}
        style={styles.gradientBackground}
      >
        <Text style={styles.rateText}>Under</Text>
        <Text style={styles.rateAmount}>₹{rate}</Text>
      </LinearGradient>
    </TouchableOpacity>
  );
};

export default OfferCard;

const styles = StyleSheet.create({
  cardContainer: {
    width: "30%",
    height: 120,
    borderRadius: 10,
    overflow: "hidden",
    // margin: 10,
    elevation: 8, // Adds a subtle shadow
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
  },
  gradientBackground: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
  },
  rateText: {
    fontSize: 24,
    color: "#4F4333",
    fontWeight: "bold",
    textTransform: "uppercase",
    marginBottom: 4,
    textShadowColor: "#00000022",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
  rateAmount: {
    fontSize: 24,
    color: "#faf8f5",
    fontWeight: "bold",
    textShadowColor: "#544a3f",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 4,
  },
});
