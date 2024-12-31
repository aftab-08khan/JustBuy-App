import React, { useRef, useState } from "react";
import {
  View,
  Text,
  Dimensions,
  Image,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import Carousel from "react-native-reanimated-carousel";
import CartAndWishList from "./CartAndWishList";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
import MegaDeal from "../assets/megaDeal.jpg";
import ProductDetailsModal from "./ProductDetailsModal";
import CarouselModal from "./CarouselModal";
const SingleProductDetails = ({ product }) => {
  // const { width } = Dimensions.get("window");
  const [isModalVisible, setIsModalVisible] = useState(false);
  const handleDetailsPress = () => {
    setIsModalVisible(true);
  };

  const handleCloseModal = () => {
    setIsModalVisible(false);
  };
  const carouselData = product.images.split(" ~ ").map((image, index) => ({
    id: index,
    image,
    text: product.brand,
  }));
  const calculateDiscount = (price) => {
    if (price >= 5000) {
      return price * 0.5;
    } else if (price > 4000) {
      return price * 0.6;
    } else if (price > 3000) {
      return price * 0.65;
    } else if (price > 2000) {
      return price * 0.7;
    } else if (price > 1000) {
      return price * 0.75;
    } else if (price > 800) {
      return price * 0.8;
    } else if (price > 500) {
      return price * 0.85;
    } else if (price > 300) {
      return price * 0.9;
    }
    return price;
  };
  const discount = calculateDiscount(product.price);
  const extraOff =
    discount > 5000
      ? Math.round(Math.random(20) * 1000)
      : discount > 2000
      ? Math.round(Math.random(20) * 500)
      : discount > 1000
      ? Math.round(Math.random(20) * 300)
      : discount > 500
      ? Math.round(Math.random(20) * 200)
      : Math.round(Math.random(20) * 100);
  const finalPrice = Math.floor(discount - extraOff);
  return (
    <View style={styles.container}>
      {/* Header */}

      {/* <TouchableOpacity activeOpacity={0.8}> */}
      {/* <Carousel
        loop
        width={width}
        height={width / 0.7}
        autoPlay={false}
        data={carouselData}
        scrollAnimationDuration={1000}
        renderItem={({ item }) => (
          <View style={styles.posterContainer}>
            <Image source={{ uri: item.image }} style={styles.posterImage} />
            <Text style={styles.overlayText}>{item.text}</Text>
          </View>
        )}
      /> */}
      {/* </TouchableOpacity> */}
      <CarouselModal carouselData={carouselData} />
      <View style={styles.content}>
        <Text style={styles.title}>{product.brand}</Text>
        <View style={{ flexDirection: "row", gap: 14, alignItems: "center" }}>
          <Text style={styles.price}>MRP ₹{product.price}</Text>
          <View style={{ flexDirection: "row", alignItems: "center", gap: 12 }}>
            <Text style={styles.discountPrice}>₹{Math.floor(discount)}</Text>
            <LinearGradient
              colors={["#4f4333", "#8a765a", "#c5a880"]}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
              style={styles.gradientContainer}
            >
              <Text style={styles.discountPercent}>
                {(((product.price - discount) / product.price) * 100).toFixed(
                  0
                )}
                % OFF
              </Text>
            </LinearGradient>
          </View>
        </View>

        <Text style={styles.description} numberOfLines={3} ellipsizeMode="tail">
          {product.description}
        </Text>
        <View style={styles.megaDeal}>
          <View
            style={{
              paddingHorizontal: 12,
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <View
              style={{ flexDirection: "row", alignItems: "center", gap: 10 }}
            >
              <Image source={MegaDeal} style={{ width: 50, height: 50 }} />
              <Text
                style={{
                  fontSize: 18,
                  letterSpacing: 0.4,
                  fontWeight: 700,
                  color: "#3b3226",
                }}
              >
                Get at ₹{finalPrice}
              </Text>
            </View>
            <View
              style={{
                backgroundColor: "#228B22",
                padding: 6,
                borderRadius: 6,
              }}
            >
              <Text
                style={{
                  color: "#fff",
                  fontWeight: 500,
                  fontSize: 12,
                }}
              >
                Extra ₹{Math.floor(discount - finalPrice)} Off
              </Text>
            </View>
          </View>

          <View style={styles.bankOffer}>
            <Text>
              With <Ionicons name="home-outline" size={14} /> Bank Offer
            </Text>
            <TouchableOpacity
              onPress={handleDetailsPress}
              activeOpacity={0.8}
              style={{
                flexDirection: "row",
                alignItems: "center",
                gap: 8,
              }}
            >
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: 600,
                  color: "#3b3226",
                }}
              >
                Details
              </Text>
              <Ionicons name="chevron-forward-outline" size={16} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <ProductDetailsModal
        visible={isModalVisible}
        onClose={handleCloseModal}
        product={product}
        finalPrice={finalPrice}
        discount={discount}
        extraOff={extraOff}
        image={MegaDeal}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },

  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#3f372f",
    letterSpacing: 1,
  },
  posterContainer: {
    // flex: 1,
    // justifyContent: "center",
    // alignItems: "center",
    // backgroundColor: "red",
  },
  posterImage: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
    objectFit: "fill",
    overflow: "hidden",
    borderBottomLeftRadius: 18,
    borderBottomRightRadius: 18,
  },
  overlayText: {
    position: "absolute",
    bottom: 20,
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
    backgroundColor: "#4f4333",
    padding: 10,
    borderRadius: 8,
    textAlign: "center",
    left: 10,
  },
  content: {
    paddingHorizontal: 18,
    paddingVertical: 10,
  },
  price: {
    fontSize: 16,
    color: "#555",
    textDecorationLine: "line-through",
  },
  discountPrice: {
    fontSize: 18,
    letterSpacing: 0.4,
    fontWeight: 700,
    color: "#3b3226",
  },
  description: {
    fontSize: 14,
    marginTop: 10,
    color: "#777",
  },
  discountPercent: {
    fontSize: 14,
    fontWeight: 600,
    color: "#eee5d9",
    letterSpacing: 0.4,
  },
  gradientContainer: {
    borderTopLeftRadius: 6,
    borderBottomLeftRadius: 6,
    borderTopRightRadius: 0,
    borderBottomRightRadius: 16,
    overflow: "hidden",
    paddingHorizontal: 6,
    paddingVertical: 4,
  },
  megaDeal: {
    marginTop: 20,
    paddingVertical: 2,
    backgroundColor: "#e8dccc",
    borderRadius: 16,
    paddingBottom: 0,
    overflow: "hidden",
    borderColor: "#4f4333",
    borderWidth: 0.4,
  },
  bankOffer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#f9f6f2",
    paddingHorizontal: 12,
    paddingVertical: 10,
    borderTopLeftRadius: 14,
    borderTopRightRadius: 14,
    borderTopColor: "#4f4333",
    borderTopWidth: 0.4,
    borderLeftColor: "#4f4333",
    borderLeftWidth: 0.4,
    borderRightColor: "#4f4333",
    borderRightWidth: 0.4,
  },
});

export default SingleProductDetails;
