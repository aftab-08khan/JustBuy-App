import React from "react";
import {
  Keyboard,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import HomeHeader from "../components/HomeHeader";
import CategoriesTab from "../components/CategoriesTab";
import BottomNavigation from "../components/BottomNavigation";

const Home = () => {
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
        <View style={{ flex: 1, paddingHorizontal: 16 }}>
          <HomeHeader />
          <CategoriesTab />
        </View>
        <View style={styles.bottomNavigation}>
          <BottomNavigation />
        </View>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
};

export default Home;

const styles = StyleSheet.create({
  bottomNavigation: {
    position: "absolute",
    bottom: 0,
    width: "100%",
  },
});
