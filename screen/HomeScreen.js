import React from "react";
import {
  Image,
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
import { FashionData1, FashionData2 } from "../data/FashionData";
import SubCategoriesList from "../components/SubCategoriesList";
import HomeCarousel from "../components/HomeCarousel";
import Coupon from "../assets/coupon.jpg";

const Home = () => {
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
        <View style={{ flex: 1, paddingHorizontal: 16 }}>
          <HomeHeader />
          <CategoriesTab />
          <View style={{ height: 180, marginBottom: 16 }}>
            <SubCategoriesList data={FashionData1} />
            <SubCategoriesList data={FashionData2} />
          </View>
        </View>

        {/* Coupon Section */}
        {/* <View style={styles.couponContainer}>
          <Image source={Coupon} style={styles.couponImage} />
        </View> */}

        {/* Carousel Section */}
        {/* <View style={{ marginBottom: 16 }}> */}
        <HomeCarousel />
        {/* </View> */}

        {/* Bottom Navigation */}
        <View style={styles.bottomNavigation}>
          <BottomNavigation />
        </View>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
};

export default Home;

const styles = StyleSheet.create({
  couponContainer: {
    // paddingHorizontal: 16,
    marginBottom: 16,
    // alignItems: "center",
  },
  couponImage: {
    width: "100%",
    height: 100,
    resizeMode: "contain",
    borderRadius: 8,
  },
  bottomNavigation: {
    position: "absolute",
    bottom: 0,
    width: "100%",
  },
});
