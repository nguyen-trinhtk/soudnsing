import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View } from "react-native";
import { Border, Color } from "../GlobalStyles";

const Background = () => {
  return (
    <View style={styles.background}>
      <View style={[styles.property1on, styles.property1onLayout]}>
        <Image
          style={[styles.property1onChild, styles.childLayout]}
          contentFit="cover"
          source={require("../assets/rectangle-395598.png")}
        />
      </View>
      <View style={[styles.property1off, styles.property1onLayout]}>
        <Image
          style={[styles.property1offChild, styles.childLayout]}
          contentFit="cover"
          source={require("../assets/rectangle-395594.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  property1onLayout: {
    height: 187,
    width: 187,
    position: "absolute",
  },
  childLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    borderRadius: Border.br_xl,
    position: "absolute",
    overflow: "hidden",
  },
  property1onChild: {
    height: "95.72%",
    width: "95.72%",
    top: "2.14%",
    right: "2.14%",
    bottom: "2.14%",
    left: "2.14%",
  },
  property1on: {
    top: 16,
    left: 16,
    borderRadius: Border.br_xl,
    height: 187,
    width: 187,
    position: "absolute",
  },
  property1offChild: {
    height: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
  },
  property1off: {
    top: 290,
    left: 20,
    height: 187,
    width: 187,
    position: "absolute",
  },
  background: {
    borderRadius: Border.br_8xs,
    borderStyle: "dashed",
    borderColor: Color.colorBlueviolet,
    borderWidth: 1,
    width: 219,
    height: 492,
    overflow: "hidden",
  },
});

export default Background;
