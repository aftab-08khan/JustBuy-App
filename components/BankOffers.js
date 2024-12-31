import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";

const BankOffers = () => {
  return (
    <View style={styles.bankOffersSection}>
      <Text style={styles.bankOfferTitle}>Bank Offers</Text>

      <View style={styles.offerContainer}>
        <Text style={styles.bankOfferText}>
          Extra 10% off on HDFC Bank cards
        </Text>
        <Text style={styles.bankOfferText}>
          Get 5% Cashback on ICICI Bank cards
        </Text>
      </View>

      <View style={styles.couponSection}>
        <Text style={styles.couponTitle}>Have a Coupon Code?</Text>
        <TextInput
          style={styles.couponInput}
          placeholder="Enter coupon code"
          placeholderTextColor="#999"
        />
        <TouchableOpacity style={styles.applyCouponButton}>
          <Text style={styles.applyCouponText}>Apply</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  bankOffersSection: {
    padding: 20,
    borderRadius: 12,
    backgroundColor: "#F4F4F4",
    marginVertical: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 5,
  },
  bankOfferTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 10,
  },
  offerContainer: {
    marginBottom: 20,
  },
  bankOfferText: {
    fontSize: 16,
    color: "#666",
    marginBottom: 8,
  },
  couponSection: {
    marginTop: 10,
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 5,
  },
  couponTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 10,
  },
  couponInput: {
    height: 45,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 8,
    paddingLeft: 10,
    fontSize: 16,
    color: "#333",
    marginBottom: 15,
  },
  applyCouponButton: {
    backgroundColor: "#F4A300",
    paddingVertical: 10,
    borderRadius: 8,
    alignItems: "center",
  },
  applyCouponText: {
    fontSize: 16,
    color: "#fff",
    fontWeight: "bold",
  },
});

export default BankOffers;
