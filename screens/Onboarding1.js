import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Border, FontSize, FontFamily, Color } from "../GlobalStyles";

const Onboarding1 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.onboarding1}>
      <Text style={styles.snChiM}>Sân chơi âm nhạc cho người cao tuổi</Text>
      <View style={[styles.button, styles.buttonLayout]}>
        <View style={[styles.buttonChild, styles.buttonPosition]} />
        <Text style={[styles.btU, styles.btUTypo]}>Tiếp</Text>
      </View>
      <Pressable
        style={[styles.button1, styles.buttonLayout]}
        onPress={() => navigation.navigate("Frame")}
      >
        <View style={[styles.buttonItem, styles.buttonPosition]} />
        <Text style={[styles.btU1, styles.btUTypo]}>Trở lại</Text>
      </Pressable>
      <Image
        style={styles.activeElderlyPeopleCuate1}
        contentFit="cover"
        source={require("../assets/active-elderly-peoplecuate-1.png")}
      />
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
    fontFamily: FontFamily.bold,
    fontWeight: "700",
    position: "absolute",
  },
  snChiM: {
    top: 570,
    left: 263,
    fontSize: FontSize.size_51xl,
    lineHeight: 84,
    textAlign: "left",
    width: 487,
    alignItems: "center",
    display: "flex",
    fontFamily: FontFamily.bold,
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
  activeElderlyPeopleCuate1: {
    top: 167,
    left: -1096,
    width: 499,
    height: 445,
    position: "absolute",
  },
  onboarding1: {
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

export default Onboarding1;
