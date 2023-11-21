import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";
import { Border, FontSize, FontFamily, Color } from "../GlobalStyles";

const Loader5 = () => {
  return (
    <View style={styles.loader}>
      <Image
        style={[styles.baseIcon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/base1.png")}
      />
      <Image
        style={styles.iconLayout}
        contentFit="cover"
        source={require("../assets/ellipse1.png")}
      />
      <Text style={styles.text}>87%</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout: {
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
    borderRadius: Border.br_17xl,
    left: "0%",
    bottom: "0%",
    right: "0%",
    top: "0%",
    width: "100%",
    height: "100%",
    position: "absolute",
  },
  baseIcon: {
    opacity: 0.2,
  },
  text: {
    height: "36.93%",
    width: "86.17%",
    top: "31.53%",
    left: "6.93%",
    fontSize: FontSize.size_55xl,
    letterSpacing: -1.5,
    lineHeight: 22,
    fontWeight: "700",
    fontFamily: FontFamily.figtreeBold,
    color: Color.green,
    textAlign: "center",
    display: "none",
    position: "absolute",
  },
  loader: {
    width: 300,
    height: 300,
  },
});

export default Loader5;
