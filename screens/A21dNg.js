import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontSize, Color, FontFamily, Padding, Border } from "../GlobalStyles";

const A21dNg = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.a21dNg}>
      <View style={styles.frameParent}>
        <View style={styles.frameWrapper}>
          <View style={styles.playKtQuParent}>
            <View style={[styles.playKtQu, styles.playKtQuLayout]}>
              <Image
                style={styles.playKtQuChild}
                contentFit="cover"
                source={require("../assets/rectangle-39564.png")}
              />
              <View style={[styles.beat39549, styles.playKtQuLayout]} />
              <Image
                style={[styles.playKtQuItem, styles.frameChildPosition]}
                contentFit="cover"
                source={require("../assets/rectangle-39565.png")}
              />
              <View style={styles.gc2} />
            </View>
            <View style={styles.frameGroup}>
              <View style={styles.bnCTChtLmCaSParent}>
                <Text style={[styles.bnCT, styles.bnCTFlexBox]}>
                  Bạn có tố chất làm ca sĩ!
                </Text>
                <Text style={[styles.text, styles.textTypo]}>“</Text>
                <Text style={[styles.text1, styles.textTypo]}>“</Text>
              </View>
              <View style={styles.frameContainer}>
                <View style={styles.frameView}>
                  <View style={[styles.aWrapper, styles.wrapperFlexBox2]}>
                    <Text style={styles.a}>A</Text>
                  </View>
                  <View style={styles.duotoneStar1Parent}>
                    <Image
                      style={styles.duotoneStar1}
                      contentFit="cover"
                      source={require("../assets/duotone--star17.png")}
                    />
                    <Image
                      style={styles.duotoneStar1}
                      contentFit="cover"
                      source={require("../assets/duotone--star17.png")}
                    />
                    <Image
                      style={styles.duotoneStar1}
                      contentFit="cover"
                      source={require("../assets/duotone--star17.png")}
                    />
                  </View>
                </View>
                <View style={styles.frameParent1}>
                  <View style={styles.wrapperFlexBox1}>
                    <View style={styles.curvedHeartParent}>
                      <Image
                        style={styles.curvedHeart}
                        contentFit="cover"
                        source={require("../assets/curved--heart4.png")}
                      />
                      <Text style={[styles.text2, styles.textSpaceBlock]}>
                        40
                      </Text>
                    </View>
                  </View>
                  <View style={styles.wrapperFlexBox1}>
                    <View style={styles.curvedHeartParent}>
                      <Image
                        style={styles.curvedHeadphones}
                        contentFit="cover"
                        source={require("../assets/curved--headphones.png")}
                      />
                      <Text style={[styles.text3, styles.text3Typo]}>436</Text>
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={[styles.frameParent2, styles.no3WrapperSpaceBlock]}>
          <View style={styles.imSCaBn239ImParent}>
            <Text style={[styles.imSCa, styles.no3Layout]}>
              Điểm số của bạn: 239 điểm
            </Text>
            <Text style={[styles.xpHng3Container, styles.no3Typo]}>
              <Text style={styles.xpHng}>Xếp hạng</Text>
              <Text style={styles.text4}> 3</Text>
            </Text>
          </View>
          <View style={styles.rectangleParent}>
            <View style={[styles.frameChild, styles.frameChildPosition]} />
            <View style={[styles.frameParent3, styles.no3WrapperPosition]}>
              <View style={[styles.no3Wrapper, styles.no3WrapperPosition]}>
                <Text style={[styles.no3, styles.no3Typo]}>No 3</Text>
              </View>
              <Image
                style={styles.frameItem}
                contentFit="cover"
                source={require("../assets/rectangle-395381.png")}
              />
            </View>
          </View>
        </View>
      </View>
      <View style={styles.frameParent4}>
        <View style={[styles.htLiWrapper, styles.wrapperFlexBox]}>
          <Text style={[styles.htLi, styles.htLiTypo]}>Hát lại</Text>
        </View>
        <Pressable
          style={[styles.trVTrangChWrapper, styles.wrapperFlexBox]}
          onPress={() => navigation.navigate("HOME1")}
        >
          <Text style={[styles.trVTrang, styles.htLiTypo]}>
            Trở về Trang chủ
          </Text>
        </Pressable>
      </View>
      <View style={styles.navParent}>
        <View style={[styles.nav, styles.navPosition]}>
          <View style={[styles.navChild, styles.navPosition]} />
          <View
            style={[
              styles.curvedMenuHamburgerWrapper,
              styles.frameChildPosition,
            ]}
          >
            <Image
              style={styles.curvedMenuHamburger}
              contentFit="cover"
              source={require("../assets/curved--menuhamburger1.png")}
            />
          </View>
        </View>
        <View style={[styles.frameWrapper3, styles.frameWrapperLayout]}>
          <View style={styles.curvedChevronLeftParent}>
            <Pressable
              style={styles.curvedChevronLeft}
              onPress={() => navigation.goBack()}
            >
              <Image
                style={styles.icon}
                contentFit="cover"
                source={require("../assets/curved--chevronleft1.png")}
              />
            </Pressable>
            <View style={styles.rectangleGroup}>
              <Image
                style={styles.frameInner}
                contentFit="cover"
                source={require("../assets/rectangle-39541.png")}
              />
              <Text
                style={[styles.thngQuVit, styles.text3Typo]}
                numberOfLines={1}
              >
                Thương quá Việt Nam
              </Text>
            </View>
            <View style={[styles.frameParent5, styles.frameWrapperLayout]}>
              <View
                style={[
                  styles.duotoneMicrophoneWrapper,
                  styles.frameWrapperLayout,
                ]}
              >
                <Image
                  style={styles.duotoneMicrophone}
                  contentFit="cover"
                  source={require("../assets/duotone--microphone1.png")}
                />
              </View>
              <View style={[styles.duotoneCamWrapper, styles.wrapperFlexBox2]}>
                <Image
                  style={styles.duotoneMicrophone}
                  contentFit="cover"
                  source={require("../assets/duotone--cam1.png")}
                />
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  playKtQuLayout: {
    width: 582,
    position: "absolute",
  },
  frameChildPosition: {
    top: "50%",
    position: "absolute",
  },
  bnCTFlexBox: {
    display: "flex",
    alignItems: "center",
  },
  textTypo: {
    lineHeight: 55,
    fontSize: FontSize.size_31xl,
    textAlign: "left",
    color: Color.white,
    fontFamily: FontFamily.sFProDisplay,
    fontStyle: "italic",
    position: "absolute",
  },
  wrapperFlexBox2: {
    padding: Padding.p_3xs,
    justifyContent: "center",
    alignItems: "center",
  },
  textSpaceBlock: {
    marginLeft: 6,
    fontFamily: FontFamily.nunitoRegular,
  },
  text3Typo: {
    lineHeight: 48,
    fontSize: FontSize.black_size,
    textAlign: "left",
    color: Color.white,
  },
  no3WrapperSpaceBlock: {
    paddingVertical: Padding.p_3xs,
    paddingHorizontal: Padding.p_xl,
  },
  no3Layout: {
    lineHeight: 36,
    fontSize: FontSize.size_11xl,
    flex: 1,
  },
  no3Typo: {
    textAlign: "right",
    color: Color.white,
    fontFamily: FontFamily.sFProDisplay,
  },
  no3WrapperPosition: {
    right: 0,
    top: "50%",
    position: "absolute",
  },
  wrapperFlexBox: {
    padding: Padding.p_16xl,
    borderRadius: Border.br_2xl,
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
  },
  htLiTypo: {
    lineHeight: 44,
    fontSize: FontSize.black_size,
    textAlign: "center",
    fontWeight: "600",
    fontFamily: FontFamily.sFProDisplay,
  },
  navPosition: {
    width: 157,
    left: 0,
    top: 0,
    position: "absolute",
  },
  frameWrapperLayout: {
    borderRadius: Border.br_101xl,
    flexDirection: "row",
  },
  playKtQuChild: {
    marginLeft: -291,
    width: 738,
    height: 441,
    left: "50%",
    top: 0,
    position: "absolute",
  },
  beat39549: {
    bottom: 0,
    height: 160,
    left: 0,
  },
  playKtQuItem: {
    marginTop: -173.5,
    marginLeft: -245,
    width: 491,
    height: 491,
    left: "50%",
  },
  gc2: {
    top: 23,
    width: 75,
    height: 75,
    left: 0,
    position: "absolute",
  },
  playKtQu: {
    marginLeft: -474.5,
    shadowColor: "rgba(255, 255, 255, 0.51)",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowRadius: 15,
    elevation: 15,
    shadowOpacity: 1,
    height: 347,
    borderRadius: Border.br_11xl,
    left: "50%",
    top: 0,
    overflow: "hidden",
  },
  bnCT: {
    top: 6,
    left: 31,
    fontSize: FontSize.size_5xl,
    lineHeight: 26,
    width: 263,
    height: 93,
    textAlign: "left",
    color: Color.white,
    fontFamily: FontFamily.sFProDisplay,
    fontStyle: "italic",
    display: "flex",
    position: "absolute",
  },
  text: {
    top: 22,
    left: 8,
    width: 21,
    height: 31,
    display: "flex",
    alignItems: "center",
  },
  text1: {
    top: 64,
    left: 279,
  },
  bnCTChtLmCaSParent: {
    borderColor: Color.white,
    borderWidth: 1,
    height: 104,
    width: 316,
    borderStyle: "solid",
    borderRadius: Border.br_xl,
  },
  a: {
    fontSize: FontSize.size_41xl,
    lineHeight: 66,
    color: Color.black,
    textAlign: "center",
    fontWeight: "600",
    fontFamily: FontFamily.sFProDisplay,
  },
  aWrapper: {
    borderRadius: Border.br_4xl,
    backgroundColor: Color.lightYellow,
    width: 80,
    height: 80,
    left: 0,
    top: 0,
    position: "absolute",
  },
  duotoneStar1: {
    width: 64,
    height: 64,
  },
  duotoneStar1Parent: {
    top: 8,
    left: 87,
    flexDirection: "row",
    position: "absolute",
  },
  frameView: {
    height: 80,
    alignSelf: "stretch",
  },
  curvedHeart: {
    height: 42,
    width: 44,
  },
  text2: {
    fontSize: 44,
    lineHeight: 53,
    textAlign: "left",
    color: Color.white,
  },
  curvedHeartParent: {
    flexDirection: "row",
    alignItems: "center",
  },
  wrapperFlexBox1: {
    justifyContent: "flex-end",
    flexDirection: "row",
  },
  curvedHeadphones: {
    height: 43,
    width: 44,
    overflow: "hidden",
  },
  text3: {
    marginLeft: 6,
    fontFamily: FontFamily.nunitoRegular,
  },
  frameParent1: {
    justifyContent: "space-between",
    flexDirection: "row",
    alignSelf: "stretch",
    marginTop: 24,
    alignItems: "center",
  },
  frameContainer: {
    borderRadius: Border.br_15xl,
    height: 224,
    padding: Padding.p_xl,
    marginTop: 24,
    justifyContent: "center",
    backgroundColor: Color.lightBlue,
    width: 316,
  },
  frameGroup: {
    left: 633,
    height: 352,
    top: 0,
    position: "absolute",
  },
  playKtQuParent: {
    width: 949,
    height: 352,
  },
  frameWrapper: {
    top: 152,
    left: 123,
    alignItems: "center",
    position: "absolute",
  },
  imSCa: {
    fontWeight: "700",
    textAlign: "left",
    color: Color.white,
    fontFamily: FontFamily.sFProDisplay,
  },
  xpHng: {
    fontSize: FontSize.size_11xl,
  },
  text4: {
    fontSize: FontSize.black_size,
  },
  xpHng3Container: {
    fontWeight: "700",
  },
  imSCaBn239ImParent: {
    alignItems: "flex-end",
    justifyContent: "space-between",
    flexDirection: "row",
    alignSelf: "stretch",
  },
  frameChild: {
    marginTop: -7,
    backgroundColor: "#eeae79",
    width: 1002,
    height: 14,
    borderRadius: Border.br_11xl,
    left: 0,
  },
  no3: {
    fontWeight: "800",
    lineHeight: 36,
    fontSize: FontSize.size_11xl,
    flex: 1,
  },
  no3Wrapper: {
    marginTop: -19,
    borderTopRightRadius: Border.br_xl,
    borderBottomRightRadius: Border.br_xl,
    backgroundColor: Color.colorDarkgoldenrod,
    width: 147,
    height: 39,
    paddingVertical: Padding.p_3xs,
    paddingHorizontal: Padding.p_xl,
    justifyContent: "flex-end",
    flexDirection: "row",
    alignItems: "center",
  },
  frameItem: {
    top: 11,
    left: 11,
    borderRadius: Border.br_53xl,
    width: 66,
    height: 66,
    position: "absolute",
  },
  frameParent3: {
    marginTop: -44,
    width: 198,
    height: 88,
  },
  rectangleParent: {
    height: 88,
    alignSelf: "stretch",
  },
  frameParent2: {
    marginLeft: -539,
    top: 536,
    backgroundColor: Color.colorDarkslategray_100,
    width: 1079,
    height: 142,
    borderRadius: Border.br_xl,
    left: "50%",
    position: "absolute",
  },
  frameParent: {
    width: 1194,
    height: 853,
    left: 0,
    top: 0,
    position: "absolute",
  },
  htLi: {
    color: Color.mainYellow,
  },
  htLiWrapper: {
    backgroundColor: Color.black,
    borderColor: Color.mainYellow,
    borderWidth: 3,
    justifyContent: "center",
    borderStyle: "solid",
  },
  trVTrang: {
    color: Color.white,
    lineHeight: 44,
  },
  trVTrangChWrapper: {
    backgroundColor: Color.mainYellow,
    marginLeft: 40,
    justifyContent: "space-between",
  },
  frameParent4: {
    marginLeft: -489,
    bottom: 44,
    width: 979,
    flexDirection: "row",
    left: "50%",
    position: "absolute",
  },
  navChild: {
    height: 130,
    backgroundColor: Color.lightBlue,
  },
  curvedMenuHamburger: {
    width: 100,
    height: 100,
  },
  curvedMenuHamburgerWrapper: {
    marginTop: -54,
    marginLeft: -49.5,
    justifyContent: "center",
    left: "50%",
    alignItems: "center",
  },
  nav: {
    height: 168,
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  curvedChevronLeft: {
    width: 60,
    height: 60,
  },
  frameInner: {
    borderRadius: Border.br_3xs,
    width: 73,
    height: 73,
  },
  thngQuVit: {
    fontFamily: FontFamily.bold,
    marginLeft: 14,
    fontWeight: "700",
    overflow: "hidden",
    flex: 1,
  },
  rectangleGroup: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
  },
  duotoneMicrophone: {
    width: 70,
    height: 70,
  },
  duotoneMicrophoneWrapper: {
    backgroundColor: Color.white,
    padding: Padding.p_3xs,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "stretch",
    flex: 1,
  },
  duotoneCamWrapper: {
    borderRadius: Border.br_17xl,
    flexDirection: "row",
    alignSelf: "stretch",
    flex: 1,
  },
  frameParent5: {
    backgroundColor: Color.grey1,
    width: 218,
    alignSelf: "stretch",
  },
  curvedChevronLeftParent: {
    paddingHorizontal: 0,
    paddingVertical: Padding.p_base,
    flexDirection: "row",
    alignSelf: "stretch",
    alignItems: "center",
    flex: 1,
  },
  frameWrapper3: {
    top: 24,
    left: 243,
    backgroundColor: Color.colorDarkslategray_200,
    width: 899,
    height: 106,
    paddingHorizontal: Padding.p_11xl,
    paddingVertical: 0,
    justifyContent: "space-between",
    alignItems: "center",
    position: "absolute",
  },
  navParent: {
    width: 1195,
    height: 168,
    left: 0,
    top: 0,
    position: "absolute",
  },
  a21dNg: {
    backgroundColor: Color.colorGray_200,
    height: 855,
    overflow: "hidden",
    width: "100%",
    flex: 1,
  },
});

export default A21dNg;
