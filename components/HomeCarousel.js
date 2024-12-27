import React, { useRef } from "react";
import {
  View,
  Text,
  Dimensions,
  Image,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import Carousel from "react-native-reanimated-carousel";
import Poster1 from "../assets/posters/poster1.jpg";
import Poster2 from "../assets/posters/poster2.jpg";
import Poster3 from "../assets/posters/poster3.webp";
import Poster4 from "../assets/posters/poster4.jpg";

const HomeCarousel = () => {
  const { width } = Dimensions.get("window");

  const carouselRef = useRef(null); // Reference for Carousel

  const carouselData = [
    { id: 1, image: Poster1, text: "Exclusive Offer - Shop Now!" },
    { id: 2, image: Poster2, text: "New Arrivals - Grab Yours!" },
    { id: 3, image: Poster1, text: "Best Deals - Limited Time!" },
    { id: 4, image: Poster4, text: "Trending Now - Explore More!" },
  ];

  return (
    <View style={styles.container}>
      <TouchableOpacity activeOpacity={0.8}>
        <Carousel
          ref={carouselRef}
          loop
          width={width}
          height={width / 1.5}
          autoPlay={true}
          data={carouselData}
          scrollAnimationDuration={1000}
          renderItem={({ item }) => (
            <View style={styles.posterContainer}>
              <Image source={item.image} style={styles.posterImage} />
              <Text style={styles.overlayText}>{item.text}</Text>
            </View>
          )}
        />
      </TouchableOpacity>

      {/* <View style={styles.navContainer}>
        <TouchableOpacity
          style={styles.navButton}
          onPress={() => carouselRef.current?.prev()}
        >
          <Text style={styles.navButtonText}>Prev</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.navButton}
          onPress={() => carouselRef.current?.next()}
        >
          <Text style={styles.navButtonText}>Next</Text>
        </TouchableOpacity>
      </View> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // marginTop: -32,
    backgroundColor: "#fff",
  },
  posterContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  posterImage: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  overlayText: {
    position: "absolute",
    bottom: 20,
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
    backgroundColor: "rgba(118,101,77,0.6)",
    padding: 10,
    borderRadius: 8,
    textAlign: "center",
    left: 10,
  },
  navContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    marginTop: 10,
  },
  navButton: {
    // backgroundColor: "#007bff",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  navButtonText: {
    color: "#000",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default HomeCarousel;
