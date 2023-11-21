import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const Onboarding4 = () => {
  return (
    <View style={styles.onboarding4}>
      <Image
        style={[styles.onboarding4Child, styles.onboarding4Position]}
        contentFit="cover"
        source={require("../assets/ellipse-2.png")}
      />
      <Image
        style={[styles.onboarding4Item, styles.onboarding4Position]}
        contentFit="cover"
        source={require("../assets/group-4.png")}
      />
      <Image
        style={styles.grandmaPana1Icon}
        contentFit="cover"
        source={require("../assets/grandmapana-1.png")}
      />
      <Text style={[styles.thGinGii, styles.btUTypo]}>
        Thư giãn, giải trí, và nâng cao sức khỏe
      </Text>
      <View style={styles.button}>
        <View style={styles.buttonChild} />
        <Text style={[styles.btU, styles.btUTypo]}>Hát ngay</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  onboarding4Position: {
    display: "none",
    position: "absolute",
  },
  btUTypo: {
    alignItems: "center",
    display: "flex",
    color: Color.mainBlue,
    fontFamily: FontFamily.bold,
    fontWeight: "700",
    position: "absolute",
  },
  onboarding4Child: {
    top: 1449,
    left: 146,
    width: 719,
    height: 720,
  },
  onboarding4Item: {
    height: "43.36%",
    width: "35.29%",
    top: "53.63%",
    right: "61.12%",
    bottom: "3.02%",
    left: "3.6%",
    maxWidth: "100%",
    maxHeight: "100%",
    opacity: 0.5,
    overflow: "hidden",
  },
  grandmaPana1Icon: {
    top: 63,
    left: -659,
    width: 592,
    height: 543,
    position: "absolute",
  },
  thGinGii: {
    top: 1056,
    left: 278,
    fontSize: FontSize.size_41xl,
    lineHeight: 72,
    textAlign: "left",
    width: 397,
    transform: [
      {
        rotate: "90deg",
      },
    ],
  },
  buttonChild: {
    height: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    borderRadius: Border.br_xl,
    backgroundColor: Color.mainYellow,
    position: "absolute",
    width: "100%",
  },
  btU: {
    height: "71.25%",
    width: "57.35%",
    top: "15%",
    left: "21.33%",
    fontSize: FontSize.size_11xl,
    lineHeight: 36,
    textAlign: "center",
    justifyContent: "center",
  },
  button: {
    top: 970,
    left: 534,
    width: 226,
    height: 72,
    position: "absolute",
    transform: [
      {
        rotate: "90deg",
      },
    ],
  },
  onboarding4: {
    backgroundColor: Color.colorFloralwhite,
    flex: 1,
    height: 1194,
    transform: [
      {
        rotate: "90deg",
      },
    ],
    overflow: "hidden",
    width: "100%",
  },
});

export default Onboarding4;
