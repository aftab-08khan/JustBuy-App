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
const SubCategoriesList = ({ data }) => {
  // const Data = data;

  const renderItem = ({ item }) => (
    <TouchableOpacity>
      <View style={styles.itemContainer}>
        <View style={styles.imageContainer}>
          <LinearGradient
            colors={["#9e8666", "#d1b999", "#ede3d8", "#f9f6f2"]}
            start={{ x: 0, y: 1 }}
            end={{ x: 0, y: 0 }}
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
        data={data}
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
    marginTop: 8,
    paddingHorizontal: 10,
  },
  itemContainer: {
    marginRight: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  imageContainer: {
    width: 60,
    height: 60,
    justifyContent: "center",
    alignItems: "center",
  },
  itemImage: {
    width: 40,
    marginTop: 20,
    height: 80,
  },
  itemTitle: {
    fontSize: 12,
    fontWeight: 500,
    textAlign: "center",
  },
  gradient: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    borderBottomRightRadius: 6,
    borderBottomLeftRadius: 6,
  },
});

export default SubCategoriesList;
