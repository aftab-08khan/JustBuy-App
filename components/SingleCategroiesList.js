import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  FlatList,
  ActivityIndicator,
  StyleSheet,
  Image,
} from "react-native";

const SingleCategoriesList = ({ categoriesTitle }) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSingleCategories = async () => {
      try {
        const response = await fetch(
          `https://aftab-08khan.github.io/JustBuyApi/${categoriesTitle}.json`
        );
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error("Error fetching categories:", error);
      } finally {
        setLoading(false);
      }
    };

    if (categoriesTitle) {
      setLoading(true);
      fetchSingleCategories();
    }
  }, [categoriesTitle]);

  if (loading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  if (!data || !data[categoriesTitle]) {
    return (
      <View style={styles.container}>
        <Text>No data found for {categoriesTitle}</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={data[categoriesTitle]}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.sectionContainer}>
            <Text style={styles.heading}>{item.heading}</Text>
            <View style={styles.categoryList}>
              {item.categories?.map((category, idx) => (
                <View style={styles.item} key={idx}>
                  <View style={styles.imageView}>
                    <Image
                      source={
                        category.image
                          ? { uri: category.image }
                          : require("../assets/icons/fireIcon.png")
                      }
                      style={styles.image}
                    />
                  </View>
                  <Text style={styles.categoryName}>
                    {category.category || "Unknown"}
                  </Text>
                </View>
              ))}
            </View>
          </View>
        )}
      />
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
    marginBottom: 20,
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
  imageView: {
    width: 80,
    height: 80,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#d6c2a6",
    borderRadius: 50,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  categoryName: {
    fontSize: 12,
    fontWeight: "bold",
    textAlign: "center",
    letterSpacing: 0.4,
  },
});

export default SingleCategoriesList;
