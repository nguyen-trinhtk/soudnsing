import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Border, FontSize, FontFamily, Color } from "../GlobalStyles";

const Onboarding3 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.onboarding3}>
      <Image
        style={styles.dementiaCuate1Icon}
        contentFit="cover"
        source={require("../assets/dementiacuate-1.png")}
      />
      <Text style={styles.ciThinTr}>{`Cải thiện trí nhớ `}</Text>
      <View style={[styles.button, styles.buttonLayout]}>
        <View style={[styles.buttonChild, styles.buttonPosition]} />
        <Text style={[styles.btU, styles.btUTypo]}>Tiếp</Text>
      </View>
      <Pressable
        style={[styles.button1, styles.buttonLayout]}
        onPress={() => navigation.navigate("Onboarding1")}
      >
        <View style={[styles.buttonItem, styles.buttonPosition]} />
        <Text style={[styles.btU1, styles.btUTypo]}>Trở lại</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonLayout: {
    height: 80,
    width: 197,
    left: 660,
    position: "absolute",
    transform: [
      {
        rotate: "90deg",
      },
    ],
  },
  buttonPosition: {
    borderRadius: Border.br_xl,
    left: "0%",
    bottom: "0%",
    right: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
    width: "100%",
  },
  btUTypo: {
    justifyContent: "center",
    textAlign: "center",
    lineHeight: 36,
    fontSize: FontSize.size_11xl,
    left: "21.32%",
    top: "15%",
    width: "57.36%",
    height: "71.25%",
    alignItems: "center",
    display: "flex",
    fontFamily: FontFamily.nold,
    fontWeight: "700",
    position: "absolute",
  },
  dementiaCuate1Icon: {
    top: 128,
    left: -1104,
    width: 481,
    height: 465,
    position: "absolute",
  },
  ciThinTr: {
    top: 623,
    left: 333,
    fontSize: FontSize.size_51xl,
    lineHeight: 84,
    textAlign: "left",
    width: 540,
    alignItems: "center",
    display: "flex",
    fontFamily: FontFamily.nold,
    fontWeight: "700",
    color: Color.mainBlue,
    position: "absolute",
    transform: [
      {
        rotate: "90deg",
      },
    ],
  },
  buttonChild: {
    backgroundColor: Color.mainYellow,
  },
  btU: {
    color: Color.mainBlue,
    justifyContent: "center",
    textAlign: "center",
    lineHeight: 36,
    fontSize: FontSize.size_11xl,
    left: "21.32%",
    top: "15%",
    width: "57.36%",
    height: "71.25%",
  },
  button: {
    top: 280,
  },
  buttonItem: {
    borderStyle: "solid",
    borderColor: Color.mainYellow,
    borderWidth: 5,
  },
  btU1: {
    color: Color.mainYellow,
  },
  button1: {
    top: 1104,
  },
  onboarding3: {
    backgroundColor: Color.colorFloralwhite,
    flex: 1,
    height: 1194,
    overflow: "hidden",
    transform: [
      {
        rotate: "90deg",
      },
    ],
    width: "100%",
  },
});

export default Onboarding3;
