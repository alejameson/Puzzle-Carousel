import React from "react";
import { ImageBackground, StyleSheet, Text, View, ErrorBundary } from "react-native";
import PuzzleCarousel from "./Components/PuzzleCarousel/PuzzleCarousel";

const image = { uri: "https://64.media.tumblr.com/4314efc0e52d5dcb5b6bdea9e171369f/49b6e0828fdef078-64/s1280x1920/7e5ae84e0112782edaed463647e9a555a16713c5.jpg" };

export default function App () { 
  return (
  <ImageBackground source={image} resizeMode="cover" style={styles.image}>
    <View style={styles.container}>
        <Text style={styles.text}>Puzzle Challenge</Text>
        <PuzzleCarousel />
    </View>
  </ImageBackground>
);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems:"center",
  },
  image: {
    flex: 1,
    justifyContent: "center"
  },
  text: {
    position: "relative",
    top: 100,
    marginBottom: -50,
    fontSize: 20,
    fontWeight: "bold"
  }
});
