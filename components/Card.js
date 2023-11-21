import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text } from "react-native";
import { Padding, Border, Color, FontFamily, FontSize } from "../GlobalStyles";

const Card = () => {
  return (
    <View style={styles.card}>
      <View style={[styles.property1gi, styles.property1giSpaceBlock]}>
        <View style={[styles.property1giInner, styles.frameChildFlexBox]}>
          <Image
            style={[styles.frameChild, styles.frameChildFlexBox]}
            contentFit="cover"
            source={require("../assets/rectangle-395311.png")}
          />
        </View>
        <View style={styles.parentSpaceBlock}>
          <Text style={[styles.quaCuGi, styles.quaCuGiTypo]} numberOfLines={1}>
            Qua cầu gió bay
          </Text>
          <Text style={[styles.quangLinh, styles.imTypo]}>Quang Linh</Text>
        </View>
        <View style={[styles.frameParent, styles.parentSpaceBlock]}>
          <View style={styles.frameWrapper}>
            <View style={styles.curvedMicrophoneParent}>
              <Image
                style={styles.curvedMicrophoneLayout}
                contentFit="cover"
                source={require("../assets/curved--microphone.png")}
              />
              <Text style={[styles.text, styles.aTypo]}>20093</Text>
            </View>
          </View>
          <View style={styles.frameWrapper}>
            <View style={styles.curvedMicrophoneParent}>
              <Image
                style={styles.curvedMicrophoneLayout}
                contentFit="cover"
                source={require("../assets/curved--heart2.png")}
              />
              <Text style={[styles.text, styles.aTypo]}>599</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={[styles.property1Ht, styles.property1giSpaceBlock]}>
        <View style={[styles.property1giInner, styles.frameChildFlexBox]}>
          <Image
            style={[styles.frameChild, styles.frameChildFlexBox]}
            contentFit="cover"
            source={require("../assets/rectangle-395311.png")}
          />
        </View>
        <View style={styles.parentSpaceBlock}>
          <Text style={[styles.quaCuGi, styles.quaCuGiTypo]} numberOfLines={1}>
            Thương quá Việt Nam
          </Text>
          <Text style={[styles.quangLinh, styles.imTypo]}>Quang Linh</Text>
        </View>
        <View style={[styles.frameParent, styles.parentSpaceBlock]}>
          <View style={styles.curvedMicrophoneParent}>
            <Text style={styles.aTypo}>A</Text>
            <View style={styles.curvedMicrophoneParent}>
              <Image
                style={styles.curvedMicrophoneLayout}
                contentFit="cover"
                source={require("../assets/duotone--star12.png")}
              />
              <Image
                style={styles.curvedMicrophoneLayout}
                contentFit="cover"
                source={require("../assets/duotone--star12.png")}
              />
              <Image
                style={styles.curvedMicrophoneLayout}
                contentFit="cover"
                source={require("../assets/duotone--star12.png")}
              />
            </View>
          </View>
          <View style={styles.frameWrapper}>
            <View style={styles.curvedMicrophoneParent}>
              <Image
                style={[styles.brokenHeadphones, styles.curvedMicrophoneLayout]}
                contentFit="cover"
                source={require("../assets/broken--headphones2.png")}
              />
              <Text style={[styles.text, styles.aTypo]}>239</Text>
            </View>
          </View>
          <View style={styles.frameWrapper}>
            <View style={styles.curvedMicrophoneParent}>
              <Image
                style={styles.curvedMicrophoneLayout}
                contentFit="cover"
                source={require("../assets/curved--heart2.png")}
              />
              <Text style={[styles.text, styles.aTypo]}>34</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={[styles.property1musicType, styles.property1musicLayout1]}>
        <Image
          style={[
            styles.property1musicTypeChild,
            styles.cchMngWrapperPosition1,
          ]}
          contentFit="cover"
          source={require("../assets/rectangle-8.png")}
        />
        <View style={styles.property1musicTypeItem} />
        <View style={[styles.cchMngWrapper, styles.cchMngWrapperPosition1]}>
          <Text style={[styles.cchMng, styles.cchMngFlexBox]}>Cách mạng</Text>
        </View>
      </View>
      <View style={[styles.property1songCa, styles.property1giSpaceBlock]}>
        <View style={[styles.property1giInner, styles.frameChildFlexBox]}>
          <Image
            style={[styles.frameChild, styles.frameChildFlexBox]}
            contentFit="cover"
            source={require("../assets/rectangle-39531.png")}
          />
        </View>
        <View style={styles.parentSpaceBlock}>
          <Text style={[styles.thanhHng, styles.quaCuGiTypo]} numberOfLines={1}>
            Thanh Hằng
          </Text>
          <Text style={[styles.im, styles.imTypo]}>13467 điểm</Text>
        </View>
        <View style={[styles.frameParent, styles.parentSpaceBlock]}>
          <View style={styles.curvedMicrophoneParent}>
            <Text style={styles.aTypo}>A</Text>
            <View style={styles.curvedMicrophoneParent}>
              <Image
                style={styles.curvedMicrophoneLayout}
                contentFit="cover"
                source={require("../assets/duotone--star12.png")}
              />
              <Image
                style={styles.curvedMicrophoneLayout}
                contentFit="cover"
                source={require("../assets/duotone--star12.png")}
              />
              <Image
                style={styles.curvedMicrophoneLayout}
                contentFit="cover"
                source={require("../assets/duotone--star12.png")}
              />
            </View>
          </View>
          <View style={styles.frameWrapper}>
            <View style={styles.curvedMicrophoneParent}>
              <Image
                style={[styles.brokenHeadphones, styles.curvedMicrophoneLayout]}
                contentFit="cover"
                source={require("../assets/broken--headphones2.png")}
              />
              <Text style={[styles.text, styles.aTypo]}>1200</Text>
            </View>
          </View>
          <View style={styles.frameWrapper}>
            <View style={styles.curvedMicrophoneParent}>
              <Image
                style={styles.curvedMicrophoneLayout}
                contentFit="cover"
                source={require("../assets/curved--heart2.png")}
              />
              <Text style={[styles.text, styles.aTypo]}>77</Text>
            </View>
          </View>
        </View>
        <View style={styles.songCaWrapper}>
          <Text style={[styles.songCa, styles.cchMngFlexBox]} numberOfLines={2}>
            Song ca
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  property1giSpaceBlock: {
    padding: Padding.p_sm,
    borderRadius: Border.br_sm,
    position: "absolute",
  },
  frameChildFlexBox: {
    alignSelf: "stretch",
    overflow: "hidden",
  },
  quaCuGiTypo: {
    textAlign: "left",
    color: Color.white,
    fontFamily: FontFamily.nold,
    fontWeight: "700",
    alignSelf: "stretch",
    overflow: "hidden",
  },
  imTypo: {
    marginTop: 14,
    fontFamily: FontFamily.nunitoRegular,
    lineHeight: 29,
    fontSize: FontSize.size_5xl,
    textAlign: "left",
    alignSelf: "stretch",
  },
  parentSpaceBlock: {
    marginTop: 19,
    alignSelf: "stretch",
  },
  aTypo: {
    fontFamily: FontFamily.nunitoRegular,
    lineHeight: 29,
    fontSize: FontSize.size_5xl,
    textAlign: "left",
    color: Color.white,
  },
  curvedMicrophoneLayout: {
    height: 24,
    width: 24,
  },
  property1musicLayout1: {
    height: 290,
    width: 290,
    borderRadius: Border.br_xl,
  },
  cchMngWrapperPosition1: {
    left: "50%",
    position: "absolute",
  },
  cchMngFlexBox: {
    textAlign: "center",
    color: Color.white,
  },
  frameChild: {
    maxWidth: "100%",
    maxHeight: "100%",
    width: "100%",
    flex: 1,
  },
  property1giInner: {
    borderRadius: Border.br_3xs,
    height: 190,
    flexDirection: "row",
  },
  quaCuGi: {
    height: 76,
    lineHeight: 38,
    fontSize: FontSize.size_13xl,
    textAlign: "left",
  },
  quangLinh: {
    color: Color.colorDarkgray_100,
  },
  text: {
    marginLeft: 6,
  },
  curvedMicrophoneParent: {
    alignItems: "center",
    flexDirection: "row",
  },
  frameWrapper: {
    justifyContent: "flex-end",
    flexDirection: "row",
  },
  frameParent: {
    justifyContent: "space-between",
    flexDirection: "row",
  },
  property1gi: {
    left: 345,
    backgroundColor: Color.colorGray_100,
    height: 404,
    width: 289,
    padding: Padding.p_sm,
    borderRadius: Border.br_sm,
    top: 34,
  },
  brokenHeadphones: {
    overflow: "hidden",
  },
  property1Ht: {
    top: 26,
    left: 12,
    backgroundColor: Color.colorMidnightblue,
    borderStyle: "solid",
    borderColor: Color.colorNavy,
    borderWidth: 8,
    width: 305,
    height: 420,
    padding: Padding.p_sm,
    borderRadius: Border.br_sm,
  },
  property1musicTypeChild: {
    marginLeft: -435,
    bottom: 0,
    height: 290,
    width: 290,
    borderRadius: Border.br_xl,
  },
  property1musicTypeItem: {
    top: 4,
    left: 415,
    backgroundColor: Color.colorSlateblue,
    width: 436,
    height: 221,
    transform: [
      {
        rotate: "90deg",
      },
    ],
    position: "absolute",
  },
  cchMng: {
    fontSize: FontSize.bold_size,
    lineHeight: 48,
    fontWeight: "900",
    fontFamily: FontFamily.nunitoBlack,
    width: 212,
    transform: [
      {
        rotate: "90deg",
      },
    ],
    flex: 1,
  },
  cchMngWrapper: {
    marginLeft: 49,
    bottom: 29,
    height: 232,
    justifyContent: "center",
    paddingLeft: Padding.p_3xs,
    paddingTop: Padding.p_3xs,
    paddingRight: Padding.p_19xl,
    paddingBottom: Padding.p_3xs,
    alignItems: "center",
  },
  property1musicType: {
    left: 1285,
    transform: [
      {
        rotate: "90deg",
      },
    ],
    top: 34,
    height: 290,
    width: 290,
    position: "absolute",
    overflow: "hidden",
  },
  thanhHng: {
    fontSize: FontSize.size_16xl,
    lineHeight: 42,
  },
  im: {
    color: Color.white,
    marginTop: 14,
  },
  songCa: {
    fontFamily: FontFamily.nold,
    fontWeight: "700",
    textAlign: "center",
    lineHeight: 38,
    fontSize: FontSize.size_13xl,
    alignSelf: "stretch",
    overflow: "hidden",
  },
  songCaWrapper: {
    backgroundColor: Color.blue2,
    paddingHorizontal: 0,
    paddingVertical: Padding.p_base,
    borderRadius: Border.br_xl,
    marginTop: 19,
    alignSelf: "stretch",
  },
  property1songCa: {
    left: 670,
    backgroundColor: Color.pink,
    width: 289,
    padding: Padding.p_sm,
    borderRadius: Border.br_sm,
    top: 34,
  },
  card: {
    borderRadius: Border.br_8xs,
    borderStyle: "dashed",
    borderColor: Color.colorBlueviolet,
    borderWidth: 1,
    width: 1321,
    height: 563,
    overflow: "hidden",
  },
});

export default Card;
