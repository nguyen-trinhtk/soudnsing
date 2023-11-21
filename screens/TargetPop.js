import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import { FontFamily, FontSize, Color, Padding, Border } from "../GlobalStyles";

const TargetPop = () => {
  return (
    <View style={styles.targetPop}>
      <Text style={[styles.mcTiuIm, styles.imTypo]}>
        Mục tiêu điểm số bạn cần giữ vững:
      </Text>
      <View style={styles.frameParent}>
        <View style={styles.parentFlexBox}>
          <Text style={[styles.a, styles.aTypo]}>A</Text>
          <View style={[styles.duotoneStar1Parent, styles.parentFlexBox]}>
            <Image
              style={styles.duotoneStar1}
              contentFit="cover"
              source={require("../assets/duotone--star17.png")}
            />
            <Image
              style={styles.duotoneStar11}
              contentFit="cover"
              source={require("../assets/duotone--star18.png")}
            />
            <Image
              style={styles.duotoneStar1}
              contentFit="cover"
              source={require("../assets/duotone--star17.png")}
            />
          </View>
        </View>
        <Text style={[styles.im, styles.aTypo]}>{`>200 điểm`}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  imTypo: {
    textAlign: "center",
    fontFamily: FontFamily.sFProDisplay,
  },
  aTypo: {
    fontWeight: "900",
    fontSize: FontSize.size_61xl,
  },
  parentFlexBox: {
    flexDirection: "row",
    alignItems: "center",
  },
  mcTiuIm: {
    fontSize: FontSize.bold_size,
    lineHeight: 44,
    fontWeight: "600",
    color: Color.white,
  },
  a: {
    lineHeight: 96,
    fontFamily: FontFamily.nunitoBlack,
    textAlign: "left",
    color: Color.white,
  },
  duotoneStar1: {
    width: 86,
    height: 86,
  },
  duotoneStar11: {
    width: 88,
    height: 86,
  },
  duotoneStar1Parent: {
    marginLeft: 17,
  },
  im: {
    lineHeight: 88,
    color: Color.yelStar,
    marginTop: 12,
    textAlign: "center",
    fontFamily: FontFamily.sFProDisplay,
  },
  frameParent: {
    alignSelf: "stretch",
    backgroundColor: Color.black,
    paddingHorizontal: 152,
    paddingTop: Padding.p_xl,
    paddingBottom: 58,
    marginTop: 47,
    alignItems: "center",
  },
  targetPop: {
    borderRadius: Border.br_11xl,
    backgroundColor: Color.blue2,
    shadowColor: "rgba(255, 255, 255, 0.17)",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowRadius: 24,
    elevation: 24,
    shadowOpacity: 1,
    flex: 1,
    width: "100%",
    overflow: "hidden",
    justifyContent: "flex-end",
    paddingTop: Padding.p_21xl,
    alignItems: "center",
  },
});

export default TargetPop;
