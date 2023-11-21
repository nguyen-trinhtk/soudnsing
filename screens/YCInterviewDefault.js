import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Color, Padding, Border, FontFamily, FontSize } from "../GlobalStyles";

const YCInterviewDefault = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.ycInterviewDefault, styles.frameGroupLayout]}>
      <View style={styles.ycInterviewDefaultChild} />
      <Image
        style={[styles.ycInterviewDefaultItem, styles.interviewPosition]}
        contentFit="cover"
        source={require("../assets/ellipse-2.png")}
      />
      <Image
        style={[
          styles.ycInterviewDefaultInner,
          styles.curvedChevronRightLayout,
        ]}
        contentFit="cover"
        source={require("../assets/group-4.png")}
      />
      <View style={[styles.frameParent, styles.framePosition]}>
        <View style={[styles.instanceParent, styles.instancePosition]}>
          <View style={styles.musicTypeLayout}>
            <Image
              style={styles.instanceChild}
              contentFit="cover"
              source={require("../assets/rectangle-85.png")}
            />
            <View style={[styles.cchMngWrapper, styles.wrapperSpaceBlock]}>
              <Text style={[styles.cchMng, styles.cchFlexBox]}>{`Vọng
cổ`}</Text>
            </View>
            <View style={[styles.aWrapper, styles.speakerFlexBox]}>
              <Text style={styles.aTypo}>3</Text>
            </View>
          </View>
          <View style={[styles.musicType, styles.musicTypeLayout]}>
            <Image
              style={styles.instanceChild}
              contentFit="cover"
              source={require("../assets/rectangle-86.png")}
            />
            <View style={[styles.cchMngWrapper, styles.wrapperSpaceBlock]}>
              <Text style={[styles.cchMng1, styles.cchFlexBox]}>{`Trữ
tình`}</Text>
            </View>
            <View style={[styles.aWrapper, styles.speakerFlexBox]}>
              <Text style={styles.aTypo}>2</Text>
            </View>
          </View>
          <View style={[styles.musicType, styles.musicTypeLayout]}>
            <Image
              style={styles.instanceChild}
              contentFit="cover"
              source={require("../assets/rectangle-87.png")}
            />
            <View style={[styles.cchMngWrapper, styles.wrapperSpaceBlock]}>
              <Text style={[styles.cchMng2, styles.cchFlexBox]}>{`Cách
mạng`}</Text>
            </View>
            <View style={[styles.aWrapper, styles.speakerFlexBox]}>
              <Text style={styles.aTypo}>1</Text>
            </View>
          </View>
        </View>
        <View style={[styles.instanceGroup, styles.instancePosition]}>
          <View style={styles.musicTypeLayout}>
            <Image
              style={styles.instanceChild}
              contentFit="cover"
              source={require("../assets/rectangle-88.png")}
            />
            <View style={[styles.cchMngWrapper, styles.wrapperSpaceBlock]}>
              <Text style={[styles.cchMng3, styles.cchFlexBox]}>{`Nước
ngoài`}</Text>
            </View>
            <View style={[styles.aWrapper, styles.speakerFlexBox]}>
              <Text style={styles.aTypo}>6</Text>
            </View>
          </View>
          <View style={[styles.musicType, styles.musicTypeLayout]}>
            <Image
              style={styles.instanceChild}
              contentFit="cover"
              source={require("../assets/rectangle-89.png")}
            />
            <View style={[styles.cchMngWrapper, styles.wrapperSpaceBlock]}>
              <Text style={[styles.cchMng4, styles.cchFlexBox]}>Bolero</Text>
            </View>
            <View style={[styles.aWrapper, styles.speakerFlexBox]}>
              <Text style={styles.aTypo}>5</Text>
            </View>
          </View>
          <View style={[styles.musicType, styles.musicTypeLayout]}>
            <Image
              style={styles.instanceChild}
              contentFit="cover"
              source={require("../assets/rectangle-810.png")}
            />
            <View style={[styles.cchMngWrapper, styles.wrapperSpaceBlock]}>
              <Text style={[styles.cchMng5, styles.cchFlexBox]}>{`Quê
hương`}</Text>
            </View>
            <View style={[styles.aWrapper, styles.speakerFlexBox]}>
              <Text style={styles.aTypo}>4</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={[styles.frameGroup, styles.framePosition]}>
        <Pressable
          style={styles.frameContainer}
          onPress={() => navigation.navigate("HOME1")}
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
                    style={[
                      styles.curvedChevronRight,
                      styles.curvedChevronRightLayout,
                    ]}
                    contentFit="cover"
                    source={require("../assets/curved--chevronright1.png")}
                  />
                </View>
              </View>
            </View>
          </View>
          <View style={[styles.cuTipWrapper, styles.lmLiParentSpaceBlock]}>
            <Text style={[styles.cuTip, styles.lmLiTypo]}>Câu tiếp</Text>
          </View>
        </Pressable>
        <Pressable
          style={[styles.lmLiParent, styles.lmLiParentSpaceBlock]}
          onPress={() => navigation.navigate("YCInterview1")}
        >
          <Text style={[styles.lmLi, styles.lmLiTypo]}>Làm lại</Text>
          <View style={[styles.ellipseParent, styles.speakerLayout]}>
            <Image
              style={[styles.groupItem, styles.groupPosition]}
              contentFit="cover"
              source={require("../assets/ellipse-1.png")}
            />
            <View
              style={[
                styles.curvedRefreshWrapper,
                styles.curvedWrapperPosition,
              ]}
            >
              <Image
                style={[
                  styles.curvedChevronRight,
                  styles.curvedChevronRightLayout,
                ]}
                contentFit="cover"
                source={require("../assets/curved--refresh41.png")}
              />
            </View>
          </View>
        </Pressable>
      </View>
      <Text style={[styles.dngNhcYu, styles.cchFlexBox]}>
        Dòng nhạc yêu thích
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  frameGroupLayout: {
    height: 1194,
    backgroundColor: Color.lightBlue,
  },
  interviewPosition: {
    display: "none",
    position: "absolute",
  },
  curvedChevronRightLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  framePosition: {
    left: "50%",
    position: "absolute",
  },
  instancePosition: {
    top: 10,
    left: "50%",
    position: "absolute",
  },
  wrapperSpaceBlock: {
    padding: Padding.p_3xs,
    position: "absolute",
  },
  cchFlexBox: {
    textAlign: "center",
    transform: [
      {
        rotate: "90deg",
      },
    ],
  },
  speakerFlexBox: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  musicTypeLayout: {
    height: 254,
    width: 180,
    borderRadius: Border.br_xl,
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
    flexDirection: "row",
    padding: Padding.p_3xs,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
  },
  lmLiParentSpaceBlock: {
    paddingBottom: Padding.p_xs,
    paddingTop: Padding.p_xs,
    flexDirection: "row",
    alignItems: "center",
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
  ycInterviewDefaultChild: {
    marginLeft: -417,
    backgroundColor: Color.colorFloralwhite,
    width: 799,
    borderWidth: 3,
    top: 0,
    borderColor: Color.black,
    borderStyle: "solid",
    left: "50%",
    position: "absolute",
    height: 1194,
  },
  ycInterviewDefaultItem: {
    top: 1449,
    left: 146,
    width: 719,
    height: 720,
  },
  ycInterviewDefaultInner: {
    height: "43.36%",
    width: "35.29%",
    top: "53.63%",
    right: "61.12%",
    bottom: "3.02%",
    left: "3.6%",
    opacity: 0.5,
    display: "none",
    position: "absolute",
  },
  instanceChild: {
    top: -10,
    left: -190,
    width: 200,
    height: 200,
    borderRadius: Border.br_xl,
    position: "absolute",
  },
  cchMng: {
    color: Color.colorFloralwhite,
    fontFamily: FontFamily.nunitoMedium,
    fontWeight: "500",
    lineHeight: 48,
    fontSize: FontSize.bold_size,
    textAlign: "center",
  },
  cchMngWrapper: {
    left: 0,
    height: 180,
    justifyContent: "center",
    alignItems: "center",
    width: 180,
    padding: Padding.p_3xs,
    top: 0,
  },
  aTypo: {
    color: Color.black,
    lineHeight: 38,
    fontSize: FontSize.size_13xl,
    textAlign: "center",
    fontFamily: FontFamily.nunitoMedium,
    fontWeight: "500",
    transform: [
      {
        rotate: "90deg",
      },
    ],
  },
  aWrapper: {
    top: 204,
    left: 50,
    borderRadius: Border.br_57xl,
    borderWidth: 2,
    width: 50,
    height: 50,
    padding: Padding.p_3xs,
    position: "absolute",
    borderColor: Color.black,
    flexDirection: "row",
    borderStyle: "solid",
  },
  cchMng1: {
    color: Color.colorFloralwhite,
    fontFamily: FontFamily.nunitoMedium,
    fontWeight: "500",
    lineHeight: 48,
    fontSize: FontSize.bold_size,
    textAlign: "center",
  },
  musicType: {
    marginTop: 50,
  },
  cchMng2: {
    color: Color.colorFloralwhite,
    fontFamily: FontFamily.nunitoMedium,
    fontWeight: "500",
    lineHeight: 48,
    fontSize: FontSize.bold_size,
    textAlign: "center",
  },
  instanceParent: {
    marginLeft: -205,
  },
  cchMng3: {
    color: Color.colorFloralwhite,
    fontFamily: FontFamily.nunitoMedium,
    fontWeight: "500",
    lineHeight: 48,
    fontSize: FontSize.bold_size,
    textAlign: "center",
  },
  cchMng4: {
    color: Color.colorFloralwhite,
    fontFamily: FontFamily.nunitoMedium,
    fontWeight: "500",
    lineHeight: 48,
    fontSize: FontSize.bold_size,
    textAlign: "center",
  },
  cchMng5: {
    color: Color.colorFloralwhite,
    fontFamily: FontFamily.nunitoMedium,
    fontWeight: "500",
    lineHeight: 48,
    fontSize: FontSize.bold_size,
    textAlign: "center",
  },
  instanceGroup: {
    marginLeft: 25,
  },
  frameParent: {
    marginLeft: -232,
    top: 198,
    width: 431,
    height: 872,
  },
  groupChild: {
    marginTop: -45,
    marginLeft: -45,
    height: 90,
    width: 90,
  },
  curvedChevronRight: {
    alignSelf: "stretch",
    width: "100%",
    flex: 1,
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
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
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
  frameContainer: {
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
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
  frameGroup: {
    marginLeft: 247,
    bottom: 0,
    borderTopLeftRadius: Border.br_61xl,
    borderBottomLeftRadius: Border.br_61xl,
    paddingHorizontal: Padding.p_21xl,
    paddingVertical: Padding.p_41xl,
    justifyContent: "center",
    height: 1194,
    backgroundColor: Color.lightBlue,
  },
  dngNhcYu: {
    top: 961,
    left: 68,
    fontSize: FontSize.size_51xl,
    lineHeight: 84,
    fontWeight: "700",
    fontFamily: FontFamily.nold,
    color: Color.mainBlue,
    display: "flex",
    width: 728,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    position: "absolute",
  },
  ycInterviewDefault: {
    transform: [
      {
        rotate: "90deg",
      },
    ],
    overflow: "hidden",
    width: "100%",
    flex: 1,
  },
});

export default YCInterviewDefault;
