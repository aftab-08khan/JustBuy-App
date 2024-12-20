import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  StyleSheet,
} from "react-native";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

const BottomNavigation = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const handleNavigationTab = (index) => {
    setActiveIndex(index);
  };

  const navigationItems = [
    { id: "1", title: "Home", icon: "home" },
    { id: "2", title: "Luxury", icon: "star" },
    { id: "3", title: "Bag", icon: "shopping-bag" },
    { id: "4", title: "Sales", icon: "local-offer" },
  ];

  const renderItem = ({ item, index }) => {
    const active = index === activeIndex;
    return (
      <TouchableOpacity
        key={index}
        style={[styles.navButton, active && styles.activeTab]}
        onPress={() => handleNavigationTab(index)}
      >
        <MaterialIcons name={item.icon} size={24} color="#544a3f" />
        <Text style={styles.navText}>{item.title}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={navigationItems}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.navList}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f3eee6",

    paddingBottom: 24,
  },
  navList: {
    justifyContent: "space-around",
    flexGrow: 1,
  },
  navButton: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 14,
  },
  navText: {
    // marginTop: 5,
    fontSize: 12,
    color: "#555",
  },
  activeTab: {
    borderTopColor: "#806c00",
    borderTopWidth: 2,
  },
});

export default BottomNavigation;
