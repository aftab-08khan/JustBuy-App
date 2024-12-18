import { useNavigation } from "@react-navigation/core";
import React from "react";
import {
  Keyboard,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import Ionicons from "react-native-vector-icons/Ionicons";

const HomeHeader = () => {
  const navigation = useNavigation();
  const icons = [
    { name: "notifications-outline", size: 24, color: "black" },
    { name: "search-outline", size: 24, color: "black" },
    { name: "person-outline", size: 24, color: "black" },
  ];

  return (
    // <SafeAreaView style={{ flex: 1 }}>
    <View style={styles.header}>
      <View style={styles.headerTop}>
        <View style={styles.headerLeft}>
          <Text style={styles.logoText}>Logo</Text>
        </View>
        <View style={styles.headerRight}>
          {icons.map((icon, i) => (
            <TouchableOpacity>
              <Ionicons
                style={styles.icon}
                name={icon.name}
                size={icon.size}
                color={icon.color}
                key={i}
              />
            </TouchableOpacity>
          ))}
        </View>
      </View>
      <View style={{ paddingHorizontal: 4 }}>
        <TouchableOpacity onPress={() => navigation.navigate("SearchScreen")}>
          <View style={styles.searchSection}>
            <TouchableOpacity
              onPress={() => navigation.navigate("SearchScreen")}
            >
              <View style={styles.searchLeft}>
                <Ionicons name="search" size="24" style={styles.searchIcon} />
                <TextInput
                  placeholder="Search for Clothes"
                  style={styles.searchInput}
                />
              </View>
            </TouchableOpacity>

            <View style={styles.searchRight}>
              <TouchableOpacity>
                <Ionicons
                  name="camera-outline"
                  size="24"
                  style={styles.searchIcon}
                />
              </TouchableOpacity>
              <TouchableOpacity>
                <Ionicons
                  name="mic-outline"
                  size="24"
                  style={styles.searchIcon}
                />
              </TouchableOpacity>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    </View>

    // </SafeAreaView>
  );
};

export default HomeHeader;

const styles = StyleSheet.create({
  header: {
    // flex: 1,
    gap: 20,
    padding: 16,
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
    // backgroundColor: "red",
    flexDirection: "row",
    alignItems: "center",
  },
  icon: {
    marginHorizontal: 10,
  },
  logoText: {
    fontSize: 18,
    fontWeight: "bold",
  },
  searchSection: {
    flexDirection: "row",
    backgroundColor: "#f6f6f6",
    padding: 16,
    borderRadius: 30,
    elevation: 6,
    shadowColor: "#c2c2c2",
    shadowOffset: 1,
    shadowOpacity: 0.4,
    shadowRadius: 2,
    justifyContent: "space-between",
  },
  searchIcon: {
    marginRight: 10,
  },
  searchInput: {
    // flex: 1,
    width: "70%",
    fontSize: 16,
    color: "#000",
  },
  searchLeft: {
    flexDirection: "row",
    alignItems: "center",
  },
  searchRight: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
  },
});
