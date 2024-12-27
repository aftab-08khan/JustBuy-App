import { useNavigation } from "@react-navigation/core";
import React, { useEffect, useState } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import TypeWriter from "react-native-typewriter";
import Logo from "../assets/icon.png";
const HomeHeader = () => {
  const navigation = useNavigation();
  const [messageInterval, setMessageInterval] = useState(0);
  const messages = [
    "Shoes",
    "Men's Jeans",
    "Shirts",
    "T-Shirts",
    "Luxury Products",
  ];
  const icons = [
    { name: "notifications-outline", size: 24, color: "black" },
    { name: "search-outline", size: 24, color: "black" },
    { name: "person-outline", size: 24, color: "black" },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setMessageInterval((prev) => (prev + 1) % messages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <View style={styles.header}>
      <View style={styles.headerTop}>
        <View style={styles.headerLeft}>
          <Image style={styles.logo} source={Logo}></Image>
        </View>
        <View style={styles.headerRight}>
          {icons.map((icon, i) => (
            <TouchableOpacity key={i}>
              <Ionicons
                style={styles.icon}
                name={icon.name}
                size={icon.size}
                color={icon.color}
              />
            </TouchableOpacity>
          ))}
        </View>
      </View>

      <View style={styles.searchSectionContainer}>
        <TouchableOpacity onPress={() => navigation.navigate("SearchScreen")}>
          <View style={styles.searchSection}>
            <View style={styles.searchLeft}>
              <Ionicons name="search" size={24} style={styles.searchIcon} />
              <TypeWriter typing={1} style={styles.searchInput}>
                Search for {messages[messageInterval]}
              </TypeWriter>
            </View>

            <View style={styles.searchRight}>
              <TouchableOpacity>
                <Ionicons
                  name="camera-outline"
                  size={24}
                  style={styles.searchIcon}
                />
              </TouchableOpacity>
              <TouchableOpacity>
                <Ionicons
                  name="mic-outline"
                  size={24}
                  style={styles.searchIcon}
                />
              </TouchableOpacity>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HomeHeader;

const styles = StyleSheet.create({
  header: {
    // flex: 1,
    paddingVertical: 18,
    paddingHorizontal: 8,
    backgroundColor: "#fff",
  },
  headerTop: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  headerLeft: {
    flex: 1,
  },
  headerRight: {
    flexDirection: "row",
    alignItems: "center",
  },
  icon: {
    marginHorizontal: 10,
  },
  logo: {
    width: 140,
    height: 40,
    marginLeft: -16,
    // backgroundColor: "red",
  },
  searchSection: {
    flexDirection: "row",
    backgroundColor: "#f6f6f6",
    padding: 10,
    borderRadius: 30,
    elevation: 6,
    shadowColor: "#cbb18d",
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.4,
    shadowRadius: 2,
    justifyContent: "space-between",
    marginTop: 8,
  },
  searchIcon: {
    marginRight: 10,
  },
  searchLeft: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
  },
  searchInput: {
    fontSize: 15,
    color: "#000",
  },
  searchRight: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
  },
});
