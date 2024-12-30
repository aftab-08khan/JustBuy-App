import React from "react";
import { SafeAreaView, Text, View } from "react-native";
import SingleProductDetails from "../components/SingleProductDetails";

const SingleProductScreen = ({ route }) => {
  const { product } = route.params;
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <SingleProductDetails product={product} />
    </SafeAreaView>
  );
};

export default SingleProductScreen;
