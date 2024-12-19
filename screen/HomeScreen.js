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

const Home = () => {
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
        <View style={{ flex: 1, paddingHorizontal: 16 }}>
          <HomeHeader />
          <CategoriesTab />
        </View>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
};

export default Home;
const styles = StyleSheet.create({});
