import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  Modal,
  StyleSheet,
  FlatList,
  Dimensions,
  SafeAreaView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import Carousel from "react-native-reanimated-carousel";

const CarouselModal = ({ carouselData }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const { width } = Dimensions.get("window");

  const handleOpenModal = (index) => {
    setCurrentIndex(index);
    setIsModalVisible(true);
  };

  const handleCloseModal = () => {
    setIsModalVisible(false);
  };

  const goToNext = () => {
    if (currentIndex < carouselData.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const goToPrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <View style={styles.container}>
      <Carousel
        loop
        width={width}
        height={width / 0.7}
        autoPlay={false}
        data={carouselData}
        scrollAnimationDuration={1000}
        renderItem={({ item, index }) => (
          <TouchableOpacity
            onPress={() => handleOpenModal(index)}
            activeOpacity={0.8}
          >
            <View style={styles.posterContainer}>
              <Image source={{ uri: item.image }} style={styles.posterImage} />
              <Text style={styles.overlayText}>{item.text}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
      <Modal visible={isModalVisible} transparent={true} animationType="slide">
        <SafeAreaView style={{ flex: 1 }}>
          <View style={styles.modalContainer}>
            <TouchableOpacity
              style={styles.closeButton}
              onPress={handleCloseModal}
            >
              <Ionicons name="close" size={30} color="#14110d" />
            </TouchableOpacity>

            <View style={styles.modalImageContainer}>
              <Image
                source={{ uri: carouselData[currentIndex].image }}
                style={styles.modalImage}
              />
            </View>

            {/* <View style={styles.navigationContainer}>
              <TouchableOpacity style={styles.navButton} onPress={goToPrev}>
                <Ionicons name="chevron-back" size={30} color="#fff" />
              </TouchableOpacity>
              <TouchableOpacity style={styles.navButton} onPress={goToNext}>
                <Ionicons name="chevron-forward" size={30} color="#fff" />
              </TouchableOpacity>
            </View> */}

            {/* Bottom Images */}
            <FlatList
              horizontal
              data={carouselData}
              renderItem={({ item, index }) => (
                <TouchableOpacity
                  style={[styles.thumbnailContainer]}
                  onPress={() => setCurrentIndex(index)}
                  key={index}
                >
                  <Image
                    source={{ uri: item.image }}
                    style={[
                      styles.thumbnailImage,
                      {
                        borderColor: currentIndex === index ? "#3b3226" : "",
                        borderWidth: currentIndex === index ? 1 : "",
                      },
                    ]}
                  />
                </TouchableOpacity>
              )}
              keyExtractor={(item, index) => index.toString()}
              contentContainerStyle={styles.thumbnailList}
            />
          </View>
        </SafeAreaView>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // padding: 10,
  },
  posterContainer: {
    borderRadius: 8,
    overflow: "hidden",
    justifyContent: "center",
    alignItems: "center",
  },
  posterImage: {
    width: "100%",
    height: 550,
    borderRadius: 8,
  },
  overlayText: {
    position: "absolute",
    bottom: 10,
    left: 10,
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
    backgroundColor: "#27221a",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 6,
  },
  modalContainer: {
    flex: 1,
    backgroundColor: "#fff",
    // justifyContent: "center",
    // alignItems: "center",
  },
  closeButton: {
    position: "absolute",
    top: 20,
    right: 20,
    zIndex: 10,
  },
  modalImageContainer: {
    width: "100%",
    height: "85%",
    // justifyContent: "center",
    // alignItems: "center",
  },
  modalImage: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
  },
  // navigationContainer: {
  //   position: "absolute",
  //   top: "50%",
  //   flexDirection: "row",
  //   justifyContent: "space-between",
  //   width: "100%",
  //   paddingHorizontal: 20,
  //   zIndex: 5,
  // },
  // navButton: {
  //   backgroundColor: "rgba(0, 0, 0, 0.5)",
  //   padding: 10,
  //   borderRadius: 50,
  // },
  thumbnailList: {
    // paddingVertical: 10,
  },
  thumbnailContainer: {
    marginHorizontal: 5,
  },
  thumbnailImage: {
    width: 80,
    height: 100,
    borderRadius: 8,
    marginBottom: 10,
    objectFit: "fill",
  },
});

export default CarouselModal;
