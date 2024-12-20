import React from "react";
import {
  Alert,
  FlatList,
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { FashionData } from "../data/fashiondata";

const SubCategoriesList = () => {
  const Fashiondata = FashionData();

  const renderItem = ({ item }) => (
    <TouchableOpacity>
      <View style={styles.itemContainer}>
        <View style={styles.imageContainer}>
          <LinearGradient
            colors={["#92816e", "#ede3d8"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={styles.gradient}
          >
            <Image source={item.image} style={styles.itemImage} />
          </LinearGradient>
        </View>
        <Text style={styles.itemTitle}>{item.title}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={Fashiondata}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.contentContainer}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  contentContainer: {
    flexDirection: "row",
  },
  container: {
    flex: 1,
    marginTop: 12,
    paddingHorizontal: 10,
    backgroundColor: "#fff",
  },
  itemContainer: {
    marginRight: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  imageContainer: {
    width: 50,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  itemImage: {
    width: 50,
    height: 50,
  },
  itemTitle: {
    fontSize: 14,
    fontWeight: "bold",
    textAlign: "center",
  },
  gradient: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
});

export default SubCategoriesList;
