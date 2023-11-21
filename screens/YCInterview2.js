import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Color, Padding, FontFamily, Border, FontSize } from "../GlobalStyles";

const YCInterview2 = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.ycInterview2, styles.frameParentLayout]}>
      <View style={styles.ycInterview2Child} />
      <Image
        style={styles.ycInterview2Item}
        contentFit="cover"
        source={require("../assets/ellipse-2.png")}
      />
      <Image
        style={styles.ycInterview2Inner}
        contentFit="cover"
        source={require("../assets/group-4.png")}
      />
      <View style={[styles.voiceParent, styles.parentPosition]}>
        <View style={[styles.voice, styles.voiceFlexBox]}>
          <View style={styles.voiceInner}>
            <Image
              style={[styles.frameChild, styles.frameChildLayout]}
              contentFit="cover"
              source={require("../assets/rectangle-811.png")}
            />
          </View>
          <Text style={styles.gingTypo}>Giọng Nữ</Text>
        </View>
        <View style={[styles.voice1, styles.voiceFlexBox]}>
          <View style={styles.voiceInner}>
            <Image
              style={[styles.frameChild, styles.frameChildLayout]}
              contentFit="cover"
              source={require("../assets/rectangle-812.png")}
            />
          </View>
          <Text style={styles.gingTypo}>Giọng Nam</Text>
        </View>
      </View>
      <View style={styles.frame}>
        <View style={[styles.frameParent, styles.parentPosition]}>
          <Pressable
            style={styles.frameGroup}
            onPress={() => navigation.navigate("YCInterviewDefault")}
          >
            <View style={[styles.speakerWrapper, styles.lmLiParentBorder]}>
              <View style={[styles.speaker, styles.speakerLayout]}>
                <View style={[styles.ellipseParent, styles.speakerLayout]}>
                  <Image
                    style={[styles.groupChild, styles.groupPosition]}
                    contentFit="cover"
                    source={require("../assets/ellipse-11.png")}
                  />
                  <View
                    style={[
                      styles.curvedChevronRightWrapper,
                      styles.curvedWrapperPosition,
                    ]}
                  >
                    <Image
                      style={styles.frameChildLayout}
                      contentFit="cover"
                      source={require("../assets/curved--chevronright2.png")}
                    />
                  </View>
                </View>
              </View>
            </View>
            <View style={[styles.cuTipWrapper, styles.lmLiParentSpaceBlock]}>
              <Text style={[styles.cuTip, styles.lmLiTypo]}>Câu tiếp</Text>
            </View>
          </Pressable>
          <View style={[styles.lmLiParent, styles.lmLiParentSpaceBlock]}>
            <Text style={[styles.lmLi, styles.lmLiTypo]}>Làm lại</Text>
            <View style={[styles.ellipseParent, styles.speakerLayout]}>
              <Image
                style={[styles.groupItem, styles.groupPosition]}
                contentFit="cover"
                source={require("../assets/ellipse-12.png")}
              />
              <View
                style={[
                  styles.curvedRefreshWrapper,
                  styles.curvedWrapperPosition,
                ]}
              >
                <Image
                  style={styles.frameChildLayout}
                  contentFit="cover"
                  source={require("../assets/curved--refresh5.png")}
                />
              </View>
            </View>
          </View>
        </View>
      </View>
      <Text style={styles.gingCaBn}>Giọng của bạn</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  frameParentLayout: {
    height: 1194,
    backgroundColor: Color.lightBlue,
  },
  parentPosition: {
    left: "50%",
    position: "absolute",
  },
  voiceFlexBox: {
    alignItems: "center",
    flexDirection: "row",
  },
  frameChildLayout: {
    alignSelf: "stretch",
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
    width: "100%",
    flex: 1,
  },
  lmLiParentBorder: {
    justifyContent: "space-between",
    borderColor: Color.white,
    borderStyle: "solid",
    backgroundColor: Color.lightBlue,
  },
  speakerLayout: {
    width: 90,
    height: 90,
  },
  groupPosition: {
    top: "50%",
    left: "50%",
    position: "absolute",
  },
  curvedWrapperPosition: {
    height: 86,
    width: 86,
    left: 2,
    top: 2,
    padding: Padding.p_3xs,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    position: "absolute",
  },
  lmLiParentSpaceBlock: {
    paddingBottom: Padding.p_xs,
    paddingTop: Padding.p_xs,
    alignItems: "center",
    flexDirection: "row",
    transform: [
      {
        rotate: "90deg",
      },
    ],
  },
  lmLiTypo: {
    fontFamily: FontFamily.nunitoRegular,
    textAlign: "center",
  },
  ycInterview2Child: {
    marginLeft: -417,
    backgroundColor: Color.colorFloralwhite,
    borderColor: Color.black,
    width: 799,
    borderWidth: 3,
    borderStyle: "solid",
    left: "50%",
    top: 0,
    position: "absolute",
    height: 1194,
  },
  ycInterview2Item: {
    top: 1449,
    left: 146,
    width: 719,
    height: 720,
    display: "none",
    position: "absolute",
  },
  ycInterview2Inner: {
    height: "43.36%",
    width: "35.29%",
    top: "53.63%",
    right: "61.12%",
    bottom: "3.02%",
    left: "3.6%",
    opacity: 0.5,
    maxHeight: "100%",
    maxWidth: "100%",
    display: "none",
    position: "absolute",
    overflow: "hidden",
  },
  frameChild: {
    borderRadius: Border.br_xl,
  },
  voiceInner: {
    padding: Padding.p_3xs,
    justifyContent: "center",
    alignSelf: "stretch",
    alignItems: "center",
    flex: 1,
  },
  gingTypo: {
    marginLeft: 21,
    width: 254,
    color: Color.black,
    lineHeight: 48,
    fontSize: FontSize.black_size,
    textAlign: "center",
    fontFamily: FontFamily.bold,
    fontWeight: "700",
    alignSelf: "stretch",
    transform: [
      {
        rotate: "90deg",
      },
    ],
  },
  voice: {
    height: 254,
    width: 322,
    alignItems: "center",
    flexDirection: "row",
  },
  voice1: {
    marginTop: 100,
    height: 254,
    width: 322,
    alignItems: "center",
    flexDirection: "row",
  },
  voiceParent: {
    marginLeft: -204.5,
    top: 273,
  },
  groupChild: {
    marginTop: -45,
    marginLeft: -45,
    height: 90,
    width: 90,
  },
  curvedChevronRightWrapper: {
    borderTopRightRadius: Border.br_101xl,
    borderBottomRightRadius: Border.br_101xl,
  },
  ellipseParent: {
    height: 90,
  },
  speaker: {
    paddingHorizontal: Padding.p_base,
    paddingVertical: Padding.p_xs,
    height: 90,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    transform: [
      {
        rotate: "90deg",
      },
    ],
  },
  speakerWrapper: {
    height: 96,
    borderRadius: Border.br_101xl,
    borderWidth: 3,
  },
  cuTip: {
    fontSize: FontSize.size_27xl,
    lineHeight: 55,
    color: Color.lightBlue,
  },
  cuTipWrapper: {
    borderTopLeftRadius: Border.br_219xl,
    borderBottomLeftRadius: Border.br_219xl,
    paddingLeft: Padding.p_24xl,
    paddingRight: Padding.p_11xl,
    marginTop: 7,
    height: 90,
    backgroundColor: Color.white,
    justifyContent: "center",
    overflow: "hidden",
  },
  frameGroup: {
    borderColor: Color.white,
    backgroundColor: Color.white,
    borderRadius: Border.br_101xl,
    alignItems: "center",
    borderWidth: 3,
    borderStyle: "solid",
    overflow: "hidden",
  },
  lmLi: {
    fontSize: FontSize.nold_size,
    lineHeight: 58,
    color: Color.white,
    flex: 1,
    fontFamily: FontFamily.nunitoRegular,
  },
  groupItem: {
    marginTop: -52,
    marginLeft: -52,
    width: 104,
    height: 104,
  },
  curvedRefreshWrapper: {
    borderColor: Color.lightBlue,
    backgroundColor: Color.white,
    borderRadius: Border.br_101xl,
    borderWidth: 3,
    borderStyle: "solid",
    width: 86,
    left: 2,
    top: 2,
  },
  lmLiParent: {
    borderRadius: Border.br_219xl,
    borderWidth: 4,
    width: 349,
    height: 98,
    paddingLeft: Padding.p_11xl,
    marginTop: 61,
    justifyContent: "space-between",
    borderColor: Color.white,
    borderStyle: "solid",
    backgroundColor: Color.lightBlue,
  },
  frameParent: {
    marginLeft: -85,
    bottom: 0,
    borderTopLeftRadius: Border.br_61xl,
    borderBottomLeftRadius: Border.br_61xl,
    paddingHorizontal: Padding.p_21xl,
    paddingVertical: Padding.p_41xl,
    justifyContent: "center",
    height: 1194,
    backgroundColor: Color.lightBlue,
    left: "50%",
  },
  frame: {
    left: 664,
    borderTopLeftRadius: Border.br_xl,
    borderBottomLeftRadius: Border.br_xl,
    width: 170,
    top: 0,
    position: "absolute",
    height: 1194,
  },
  gingCaBn: {
    top: 961,
    left: 71,
    fontSize: FontSize.size_51xl,
    lineHeight: 84,
    color: Color.mainBlue,
    display: "flex",
    width: 728,
    textAlign: "center",
    fontFamily: FontFamily.bold,
    fontWeight: "700",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    transform: [
      {
        rotate: "90deg",
      },
    ],
  },
  ycInterview2: {
    transform: [
      {
        rotate: "90deg",
      },
    ],
    overflow: "hidden",
    width: "100%",
    height: 1194,
    flex: 1,
    backgroundColor: Color.lightBlue,
  },
});

export default YCInterview2;
