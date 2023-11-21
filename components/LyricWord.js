import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";
import { Padding, FontFamily, FontSize, Color, Border } from "../GlobalStyles";

const LyricWord = () => {
  return (
    <View style={styles.lyricWord}>
      <View style={[styles.wordonProperty1on, styles.wordonPosition]}>
        <Image
          style={styles.wordonProperty1onChild}
          contentFit="cover"
          source={require("../assets/ellipse-41.png")}
        />
        <Text style={[styles.em, styles.emTypo5]}>Em</Text>
      </View>
      <View style={[styles.wordonProperty1off, styles.wordonPosition]}>
        <Image
          style={styles.wordonProperty1onChild}
          contentFit="cover"
          source={require("../assets/ellipse-43.png")}
        />
        <Text style={[styles.em1, styles.emTypo5]}>Em</Text>
      </View>
      <View style={[styles.wordoffProperty1off, styles.wordonPosition]}>
        <Image
          style={styles.wordonProperty1onChild}
          contentFit="cover"
          source={require("../assets/ellipse-43.png")}
        />
        <Text style={[styles.em, styles.emTypo5]}>Em</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wordonPosition: {
    padding: Padding.p_3xs,
    alignItems: "center",
    left: 20,
    position: "absolute",
  },
  emTypo5: {
    marginTop: 32,
    textAlign: "center",
    fontFamily: FontFamily.sFProDisplay,
    fontWeight: "800",
    lineHeight: 104,
    fontSize: FontSize.size_31xl,
  },
  wordonProperty1onChild: {
    width: 33,
    height: 33,
  },
  em: {
    color: Color.oran2,
  },
  wordonProperty1on: {
    top: 12,
  },
  em1: {
    color: Color.white,
  },
  wordonProperty1off: {
    top: 204,
    opacity: 0.5,
  },
  wordoffProperty1off: {
    top: 396,
  },
  lyricWord: {
    borderRadius: Border.br_8xs,
    borderStyle: "dashed",
    borderColor: Color.colorBlueviolet,
    borderWidth: 1,
    width: 167,
    height: 596,
    overflow: "hidden",
  },
});

export default LyricWord;
