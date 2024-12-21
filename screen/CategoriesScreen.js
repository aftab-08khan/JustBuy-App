import { useNavigation, useRoute } from "@react-navigation/core";
import React from "react";
import {
  SafeAreaView,
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import CartAndWishList from "../components/CartAndWishList";
import AllCategroies from "../components/AllCategroies";

const CategoriesScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { title } = route.params;

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        {/* Back Button */}
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.backButton}
        >
          <Ionicons name="chevron-back-outline" size={24} color="#333" />
        </TouchableOpacity>

        <Text style={styles.title}>{title}</Text>

        <CartAndWishList
          title={title}
          onHeartPress={() => console.log("Wishlist clicked!")}
          onCartPress={() => console.log("Cart clicked!")}
          iconSize={24}
          iconColor="#27221a"
        />
      </View>

      <View style={styles.content}>
        <AllCategroies />
        <View style={{ width: "80%", backgroundColor: "red" }}></View>
      </View>
    </SafeAreaView>
  );
};

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
    // backgroundColor: "#f9f9f9",
    // borderBottomWidth: 1,
    // borderBottomColor: "#ddd",
  },
  backButton: {
    // padding: 8,
    // borderRadius: 50,
    // backgroundColor: "#fff",
    // shadowColor: "#000",
    // shadowOpacity: 0.1,
    // shadowOffset: { width: 0, height: 1 },
    // shadowRadius: 2,
    // elevation: 3,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#8a765a",
    flex: 1,
    textAlign: "center",
  },
  content: {
    flex: 1,
    padding: 16,
    paddingLeft: 0,
    paddingBottom: 0,
  },
});

export default CategoriesScreen;
