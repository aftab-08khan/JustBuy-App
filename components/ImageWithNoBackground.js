import React, { useState, useEffect } from "react";
import { View, Image, Text, StyleSheet } from "react-native";
import axios from "axios";

const ImageWithNoBackground = ({ imageUrl }) => {
  const [imageUri, setImageUri] = useState(null);
  const [processing, setProcessing] = useState(false);

  useEffect(() => {
    if (imageUrl) {
      removeBg(imageUrl);
    }
  }, [imageUrl]);

  const removeBg = async (imageUrl) => {
    setProcessing(true);
    try {
      // Create FormData to send to the remove.bg API
      const formData = new FormData();
      formData.append("image_url", imageUrl); // Pass the image URL as part of the form data

      // Send POST request to remove.bg API
      const response = await axios.post(
        "https://api.remove.bg/v1.0/removebg",
        formData,
        {
          headers: {
            "X-Api-Key": "xLVjDXY2jJv88Le3cGZiYq5n", // Replace with your API key
            "Content-Type": "multipart/form-data",
          },
          responseType: "arraybuffer",
        }
      );

      // Convert the API response to a Blob and then create a URL
      const imageBlob = new Blob([response.data], { type: "image/png" });
      const imageUrl = URL.createObjectURL(imageBlob);
      setImageUri(imageUrl); // Update the state with the image URL without background
    } catch (error) {
      console.error("Error removing background:", error);
    } finally {
      setProcessing(false);
    }
  };

  return (
    <View style={styles.container}>
      {processing && <Text>Processing...</Text>}
      {imageUri ? (
        <Image source={{ uri: imageUri }} style={styles.image} />
      ) : (
        <Image source={{ uri: imageUrl }} style={styles.image} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 10,
    marginTop: 20,
  },
});

export default ImageWithNoBackground;
