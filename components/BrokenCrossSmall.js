import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View } from "react-native";

const BrokenCrossSmall = () => {
  return (
    <View style={styles.brokenCrossSmall}>
      <Image
        style={styles.shapeIcon}
        contentFit="cover"
        source={require("../assets/shape.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  shapeIcon: {
    position: "absolute",
    height: "39.58%",
    width: "39.58%",
    top: "30.42%",
    right: "30%",
    bottom: "30%",
    left: "30.42%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  brokenCrossSmall: {
    width: 24,
    height: 24,
  },
});

export default BrokenCrossSmall;
