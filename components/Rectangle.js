import * as React from "react";
import { StyleSheet, View } from "react-native";

const Rectangle = () => {
  return <View style={styles.rectangleView} />;
};

const styles = StyleSheet.create({
  rectangleView: {
    backgroundColor: "#d9d9d9",
    width: 172,
    height: 17,
  },
});

export default Rectangle;
