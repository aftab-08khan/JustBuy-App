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

const Home = () => {
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
        <View style={{ flex: 1 }}>
          <HomeHeader />
        </View>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
};

export default Home;
const styles = StyleSheet.create({});
