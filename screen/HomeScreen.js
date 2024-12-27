import React from "react";
import {
  Image,
  Keyboard,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import HomeHeader from "../components/HomeHeader";
import CategoriesTab from "../components/CategoriesTab";
import BottomNavigation from "../components/BottomNavigation";
import { FashionData1 } from "../data/FashionData";
import SubCategoriesList from "../components/SubCategoriesList";
import HomeCarousel from "../components/HomeCarousel";
import Coupon from "../assets/posters/coupon.jpeg";
import OfferCard from "../components/OfferScreen";
import BestSellerSection from "../components/BestSellerSection";
import { useTheme } from "../context/themeContext";

const Home = () => {
  const { isLoading } = useTheme();
  const SkeletonLoader = () => {
    <View style={styles.couponImage}></View>;
  };
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.mainContent}>
          <HomeHeader />
        </View>
        <ScrollView
          style={styles.mainContent}
          showsVerticalScrollIndicator={false}
        >
          <TouchableOpacity activeOpacity={1}>
            <CategoriesTab />
            <View style={styles.subCategories}>
              <SubCategoriesList data={FashionData1} />
            </View>
            {isLoading ? (
              <SkeletonLoader />
            ) : (
              <View style={styles.couponContainer}>
                <Image source={Coupon} style={styles.couponImage} />
              </View>
            )}

            <View style={styles.carouselContainer}>
              <HomeCarousel />
            </View>
            <View style={{}}>
              <BestSellerSection />
              <BestSellerSection />
              <BestSellerSection />
            </View>
          </TouchableOpacity>
        </ScrollView>

        <View style={styles.bottomNavigation}>
          <BottomNavigation />
        </View>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
};

export default Home;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#fff",
    paddingBottom: 60, // Space for bottom navigation
  },
  mainContent: {
    paddingHorizontal: 16,
    // marginBottom: 20,
    // paddingBottom: 30,
  },
  subCategories: {
    height: 180,
    marginBottom: 6,
  },
  couponContainer: {
    // paddingHorizontal: 16,
    marginBottom: 10,
    alignItems: "center",
  },
  couponImage: {
    width: "100%",
    height: 80,
    resizeMode: "stretch",
  },
  carouselContainer: {
    paddingHorizontal: 16,
    alignItems: "center",
  },
  bottomNavigation: {
    position: "absolute",
    bottom: 0,
    width: "100%",
  },
});
