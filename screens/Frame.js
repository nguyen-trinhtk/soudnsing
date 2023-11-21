import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { FontFamily, FontSize, Color, Border } from "../GlobalStyles";

const Frame = () => {
  return (
    <View style={styles.view}>
      <View style={styles.musicImpactsQualityOfLife} />
      <Image
        style={styles.problemSolvingBro1}
        contentFit="cover"
        source={require("../assets/problem-solvingbro-1.png")}
      />
      <Text style={[styles.soudNSing, styles.soudNSingTypo]}>SOUD N’ SING</Text>
      <Text
        style={[styles.ngDngKaraoke, styles.soudNSingTypo]}
      >{`Ứng dụng Karaoke cho người cao tuổi
`}</Text>
      <Image
        style={styles.dementiaBro1Icon}
        contentFit="cover"
        source={require("../assets/dementiabro-1.png")}
      />
      <View style={styles.button}>
        <View style={styles.buttonChild} />
        <Text style={styles.btU}>Bắt đầu</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  soudNSingTypo: {
    height: 327,
    width: 771,
    fontFamily: FontFamily.lexendBold,
    top: 970,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    textAlign: "center",
    fontWeight: "700",
    position: "absolute",
    transform: [
      {
        rotate: "90deg",
      },
    ],
  },
  musicImpactsQualityOfLife: {
    top: 1201,
    left: 0,
    width: 1287,
    height: 859,
    position: "absolute",
    transform: [
      {
        rotate: "90deg",
      },
    ],
  },
  problemSolvingBro1: {
    top: 0,
    left: -1068,
    width: 1068,
    height: 834,
    position: "absolute",
  },
  soudNSing: {
    left: 417,
    fontSize: FontSize.size_51xl,
    lineHeight: 98,
    color: Color.mainBlue,
    height: 327,
    width: 771,
    fontFamily: FontFamily.lexendBold,
    top: 970,
  },
  ngDngKaraoke: {
    left: 507,
    fontSize: FontSize.size_16xl,
    lineHeight: 49,
    color: Color.lightBlue,
    height: 327,
    width: 771,
    fontFamily: FontFamily.lexendBold,
    top: 970,
  },
  dementiaBro1Icon: {
    top: 104,
    left: -788,
    width: 461,
    height: 418,
    position: "absolute",
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
    width: "57.36%",
    top: "15%",
    left: "21.32%",
    fontSize: FontSize.size_11xl,
    lineHeight: 36,
    fontFamily: FontFamily.bold,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    textAlign: "center",
    fontWeight: "700",
    color: Color.mainBlue,
    position: "absolute",
  },
  button: {
    top: 696,
    left: 702,
    width: 197,
    height: 80,
    position: "absolute",
    transform: [
      {
        rotate: "90deg",
      },
    ],
  },
  view: {
    backgroundColor: "#fffceb",
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

export default Frame;
