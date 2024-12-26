import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Image,
  TouchableOpacity,
} from "react-native";
import CategoryItem from "./CategoryItem.js";
const SkeletonLoader = () => {
  return (
    <View style={styles.sectionContainer}>
      <View style={styles.skeletonHeading} />

      <View style={styles.categoryList}>
        {[1, 2, 3, 4, 5].map((_, idx) => (
          <TouchableOpacity key={idx} style={styles.item}>
            <View style={styles.skeletonImageContainer}>
              <View style={styles.skeletonImage} />
            </View>
            <View style={styles.skeletonCategoryName} />
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const SingleCategoriesList = ({ categoriesTitle }) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  let endpoint = categoriesTitle || "trending";

  useEffect(() => {
    const fetchSingleCategories = async () => {
      if (!endpoint) {
        setLoading(false);
        return;
      }

      try {
        const response = await fetch(
          `https://aftab-08khan.github.io/JustBuyApi/${endpoint}.json`
        );

        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error("Error fetching categories:", error);
      } finally {
        setTimeout(() => {
          setLoading(false);
        }, 1000);
      }
    };

    setLoading(true);
    fetchSingleCategories();
  }, [endpoint]);

  if (loading) {
    return (
      <View style={styles.container}>
        <FlatList
          data={[1, 2, 3, 4, 5]}
          renderItem={() => <SkeletonLoader />}
          keyExtractor={(item) => item.toString()}
          // style={styles.skeletonContainer}
        />
      </View>
    );
  }

  if (!data?.[endpoint]) {
    return (
      <View style={styles.container}>
        <Text>No data found for {categoriesTitle}</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={data[endpoint]}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.sectionContainer}>
            <Text style={styles.heading}>{item.heading}</Text>
            <View style={styles.categoryList}>
              {item.categories?.map((category, idx) => (
                <CategoryItem key={idx} category={category} />
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
    paddingTop: 0,
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
  skeletonHeading: {
    width: "60%",
    height: 18,
    backgroundColor: "#e0e0e0",
    marginBottom: 10,
    borderRadius: 4,
  },
  skeletonItem: {
    marginVertical: 10,
    alignItems: "center",
  },
  skeletonImageContainer: {
    width: 80,
    height: 80,
    backgroundColor: "#e0e0e0",
    borderRadius: 50,
    overflow: "hidden",
  },
  skeletonImage: {
    width: "100%",
    height: "100%",
    backgroundColor: "#e0e0e0",
    borderRadius: 50,
  },
  skeletonCategoryName: {
    width: 60,
    height: 12,
    marginTop: 10,
    backgroundColor: "#e0e0e0",
    borderRadius: 4,
  },
});

export default SingleCategoriesList;
