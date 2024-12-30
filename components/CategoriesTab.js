import React, { useState } from "react";
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from "react-native";
import fashionIcon from "../assets/icons/fashionIcon.png";
import beautyIcon from "../assets/icons/beautyIcon.png";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/core";
import { useTheme } from "../context/themeContext";

const CategoriesTab = () => {
  const { setEndpoint } = useTheme();
  const [active, setActive] = useState(0);
  const navigation = useNavigation();
  const handleTab = (index, title) => {
    setActive(index);
    setEndpoint(title);
  };

  const CategoriesTabData = [
    {
      id: "1",
      img: fashionIcon,
      name: "Fashion",
    },
    {
      id: "2",
      img: beautyIcon,
      name: "Beauty",
    },
    {
      id: "3",
      img: fashionIcon,
      name: "Home",
    },
  ];

  const renderItem = ({ item, index }) => {
    const isActive = index === active;
    return (
      <TouchableOpacity
        activeOpacity={1}
        key={item.id}
        style={[styles.categoriesTabMain, isActive && styles.activeTab]}
        onPress={() => handleTab(index, item.name.toLowerCase())}
      >
        <Image source={item.img} style={styles.image} />
        <Text style={[styles.categoriesText, isActive && styles.activeText]}>
          {item.name}
        </Text>
      </TouchableOpacity>
    );
  };

  return (
    <View
      style={{
        flexDirection: "row",
      }}
    >
      <FlatList
        data={CategoriesTabData}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        style={styles.CategoriesList}
        contentContainerStyle={styles.categoriesRow}
      />
      <TouchableOpacity
        onPress={() =>
          navigation.navigate("CategoriesScreen", { title: "Categories" })
        }
      >
        <Ionicons
          name="grid-outline"
          size={18}
          color="#3b3226"
          style={styles.menuIcon}
        />
      </TouchableOpacity>
    </View>
  );
};

export default CategoriesTab;

const styles = StyleSheet.create({
  categoriesTabMain: {
    marginRight: 10,
    alignItems: "center",
    borderRadius: 28,
    backgroundColor: "#f1eae2",
    justifyContent: "center",
    height: 36,
    flexDirection: "row",
    paddingHorizontal: 10,
    overflow: "hidden",
    marginTop: -12,
  },
  activeTab: {
    backgroundColor: "#9e8666",
  },
  image: {
    width: 36,
    height: 36,
    // marginRight: 8,
    marginBottom: -10,
  },
  CategoriesList: {
    paddingVertical: 12,
  },
  categoriesRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  categoriesText: {
    fontSize: 14,
    color: "#27221a",
    fontWeight: "700",
  },
  activeText: {
    color: "#fff",
  },
  menuIcon: {
    borderWidth: 1,
    borderColor: "#4f4333",
    padding: 8,
    borderRadius: 36,
  },
});
