import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  FlatList,
  ActivityIndicator,
  StyleSheet,
  Image,
} from "react-native";
import { MenCategoriesData } from "../data/FashionData";

const SingleCategoriesList = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const shirtCategory = MenCategoriesData;

  useEffect(() => {
    if (shirtCategory) {
      setData(shirtCategory);
    }
    setLoading(false);
  }, []);

  return (
    <View style={styles.container}>
      {loading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        <FlatList
          data={data}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item, index }) => {
            return (
              <View style={styles.sectionContainer} key={index}>
                <Text style={styles.heading}>{item.heading}</Text>
                <View style={styles.categoryList}>
                  {item.categories.map((category, idx) => (
                    <View style={styles.item} key={idx}>
                      <Image
                        source={({ uri: category.image }, category.image)}
                        style={styles.image}
                      />
                      <Text style={styles.categoryName}>
                        {category.category}
                      </Text>
                    </View>
                  ))}
                </View>
              </View>
            );
          }}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#fff",
  },
  sectionContainer: {
    marginBottom: 30,
  },
  heading: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  categoryList: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "flex-start",
  },
  item: {
    width: "30%",
    padding: 8,
    alignItems: "center",
    marginBottom: 15,
  },
  image: {
    width: 50,
    height: 50,
    resizeMode: "cover",
    borderRadius: 50, // Make the image round
    marginBottom: 5,
  },
  categoryName: {
    fontSize: 12,
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default SingleCategoriesList;
