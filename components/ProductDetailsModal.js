import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Modal,
  Animated,
  ScrollView,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import MegaDeal from "../assets/megaDeal.jpg"; // Path to your image
import BankOffers from "./BankOffers";

const { width, height } = Dimensions.get("window");

const ProductDetailsModal = ({
  visible,
  onClose,
  product,
  finalPrice,
  discount,
  extraOff,
}) => {
  const modalHeight = height / 2;
  const [fadeAnim] = useState(new Animated.Value(0)); // For fade-in effect
  const [slideAnim] = useState(new Animated.Value(modalHeight)); // For slide-up effect

  useEffect(() => {
    if (visible) {
      Animated.parallel([
        Animated.timing(fadeAnim, {
          toValue: 1,
          duration: 300,
          useNativeDriver: true,
        }),
        Animated.timing(slideAnim, {
          toValue: 0,
          duration: 300,
          useNativeDriver: true,
        }),
      ]).start();
    } else {
      Animated.parallel([
        Animated.timing(fadeAnim, {
          toValue: 0,
          duration: 300,
          useNativeDriver: true,
        }),
        Animated.timing(slideAnim, {
          toValue: modalHeight,
          duration: 300,
          useNativeDriver: true,
        }),
      ]).start();
    }
  }, [visible, fadeAnim, slideAnim, modalHeight]);

  if (!visible) return null;

  return (
    <Modal transparent visible={visible} animationType="fade">
      <TouchableOpacity style={styles.overlay} activeOpacity={1}>
        <Animated.View
          style={[
            styles.modalContent,
            {
              opacity: fadeAnim,
              transform: [{ translateY: slideAnim }],
              height: modalHeight,
            },
          ]}
        >
          <TouchableOpacity style={styles.closeButton} onPress={onClose}>
            <Ionicons name="close-circle" size={30} color="black" />
          </TouchableOpacity>

          <View style={styles.megaDealsSection}>
            <Image source={MegaDeal} style={styles.megaDealImage} />
            <View
              style={{ flexDirection: "row", alignItems: "center", gap: 8 }}
            >
              <Text style={styles.megaDealPrice}>Get at ₹{finalPrice}</Text>
              <Text style={styles.discountText}>
                Extra ₹{Math.floor(discount - finalPrice)} Off
              </Text>
            </View>
          </View>
          <ScrollView>
            <TouchableOpacity activeOpacity={0.9}>
              <BankOffers />
            </TouchableOpacity>
          </ScrollView>
        </Animated.View>
      </TouchableOpacity>
    </Modal>
  );
};

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    backgroundColor: "white",
    width: width,
    borderRadius: 20,
    padding: 20,
    position: "absolute",
    bottom: 0,
    paddingTop: 0,
  },
  closeButton: {
    position: "absolute",
    top: 10,
    right: 10,
  },
  megaDealsSection: {
    alignItems: "center",
    // marginVertical: 20,
    marginTop: -50,
  },
  megaDealImage: {
    width: 150,
    height: 100,
    borderRadius: 8,
  },
  megaDealPrice: {
    fontSize: 18,
    fontWeight: "bold",
    // marginVertical: 10,
  },
  discountText: {
    backgroundColor: "#228B22",
    padding: 6,
    borderRadius: 6,
    color: "#fff",
  },
  priceSection: {
    alignItems: "center",
    // marginVertical: 20,
  },
  discountPrice: {
    fontSize: 18,
    fontWeight: "bold",
    textDecorationLine: "line-through",
  },
  finalPrice: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#E63946",
  },
  bankOffersSection: {
    marginTop: 20,
  },
  bankOfferTitle: {
    fontSize: 18,
    fontWeight: "bold",
  },
  bankOfferText: {
    fontSize: 16,
    marginVertical: 5,
  },
});

export default ProductDetailsModal;
