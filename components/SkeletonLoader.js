// SkeletonLoader.js
import React from "react";
import { View, StyleSheet, Animated, Dimensions } from "react-native";

const { width } = Dimensions.get("window");

const SkeletonLoader = () => {
  return (
    <View style={styles.skeletonContainer}>
      <View style={styles.skeletonImage} />
      <View style={styles.skeletonTextWrapper}>
        <View style={styles.skeletonText} />
        <View style={styles.skeletonText} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  skeletonContainer: {
    flex: 1,
    borderRadius: 8,
    marginBottom: 12,
    backgroundColor: "#f2f2f2",
  },
  skeletonImage: {
    width: "100%",
    height: width / 1.8,
    backgroundColor: "#e0e0e0",
    borderRadius: 8,
  },
  skeletonTextWrapper: {
    marginTop: 8,
    marginLeft: 10,
  },
  skeletonText: {
    height: 10,
    width: "60%",
    backgroundColor: "#e0e0e0",
    marginBottom: 5,
    borderRadius: 5,
  },
});

export default SkeletonLoader;
