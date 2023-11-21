import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View } from "react-native";
import { Border, Color } from "../GlobalStyles";

const PlayKtQu = () => {
  return (
    <View style={styles.playKtQu}>
      <View style={[styles.property1off, styles.property1onLayout]}>
        <Image
          style={[styles.property1offChild, styles.property1offPosition]}
          contentFit="cover"
          source={require("../assets/rectangle-39564.png")}
        />
        <View style={[styles.beat39549, styles.gc2Position]} />
        <Image
          style={[styles.property1offItem, styles.property1offPosition]}
          contentFit="cover"
          source={require("../assets/rectangle-39565.png")}
        />
        <View style={[styles.gc2, styles.gc2Position]} />
      </View>
      <View style={[styles.property1on, styles.property1onLayout]}>
        <Image
          style={[styles.property1offChild, styles.property1offPosition]}
          contentFit="cover"
          source={require("../assets/rectangle-39564.png")}
        />
        <View style={[styles.beat39549, styles.gc2Position]} />
        <Image
          style={[styles.property1offItem, styles.property1offPosition]}
          contentFit="cover"
          source={require("../assets/rectangle-395651.png")}
        />
        <View style={[styles.gc2, styles.gc2Position]} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  property1onLayout: {
    height: 347,
    borderRadius: Border.br_11xl,
    left: 69,
    position: "absolute",
    width: 582,
    overflow: "hidden",
  },
  property1offPosition: {
    left: "50%",
    position: "absolute",
  },
  gc2Position: {
    left: 0,
    position: "absolute",
  },
  property1offChild: {
    marginLeft: -291,
    top: 0,
    width: 738,
    height: 441,
  },
  beat39549: {
    bottom: 0,
    height: 160,
    width: 582,
    left: 0,
  },
  property1offItem: {
    marginTop: -173.5,
    marginLeft: -245,
    top: "50%",
    width: 491,
    height: 491,
  },
  gc2: {
    top: 23,
    width: 75,
    height: 75,
  },
  property1off: {
    top: 80,
    shadowColor: "rgba(255, 255, 255, 0.51)",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowRadius: 15,
    elevation: 15,
    shadowOpacity: 1,
  },
  property1on: {
    top: 444,
  },
  playKtQu: {
    borderRadius: Border.br_8xs,
    borderStyle: "dashed",
    borderColor: Color.colorBlueviolet,
    borderWidth: 1,
    width: 729,
    height: 855,
    overflow: "hidden",
  },
});

export default PlayKtQu;
