import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Padding, Border, FontSize, FontFamily, Color } from "../GlobalStyles";

const A21HngDn = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.a21HngDn}>
      <View style={[styles.huongDanThuAm, styles.huongDanThuAmPosition]}>
        <View style={[styles.htCngGingCaSGcWrapper, styles.wrapperFlexBox]}>
          <Text style={styles.htCngGing}>{`Hát cùng
GIỌNG CA SĨ GỐC`}</Text>
        </View>
        <Pressable
          style={[styles.bQuaWrapper, styles.wrapperFlexBox]}
          onPress={() => navigation.navigate("A21KaraokeMicro")}
        >
          <Text style={styles.bQua}>Bỏ qua</Text>
        </Pressable>
        <Pressable
          style={[styles.buttonIuHngKaraParent, styles.buttonFlexBox1]}
          onPress={() => navigation.navigate("A21KaraokeMicro")}
        >
          <View style={styles.buttonIuHngKara}>
            <View style={styles.frame}>
              <Image
                style={styles.groupIcon}
                contentFit="cover"
                source={require("../assets/group21.png")}
              />
              <Image
                style={[styles.vectorIcon, styles.vectorIconLayout]}
                contentFit="cover"
                source={require("../assets/vector4.png")}
              />
              <Image
                style={[styles.vectorIcon1, styles.vectorIconLayout]}
                contentFit="cover"
                source={require("../assets/vector5.png")}
              />
              <Image
                style={[styles.groupIcon1, styles.vectorIconLayout]}
                contentFit="cover"
                source={require("../assets/group3.png")}
              />
            </View>
            <View style={styles.gingCaSGcWrapper}>
              <Text style={[styles.gingCaS, styles.btULiTypo]}>{`Giọng ca
sĩ gốc`}</Text>
            </View>
          </View>
          <View style={[styles.buttonIuHngKaraGroup, styles.buttonFlexBox1]}>
            <View style={[styles.buttonIuHngKara1, styles.buttonFlexBox]}>
              <Image
                style={styles.curvedRefreshLayout}
                contentFit="cover"
                source={require("../assets/broken--hourglass.png")}
              />
              <View style={[styles.bQuaNhcDoWrapper, styles.wrapperSpaceBlock]}>
                <Text style={styles.bQuaNhc}>{`Bỏ qua
nhạc dạo`}</Text>
              </View>
            </View>
            <View style={styles.buttonFlexBox}>
              <Text style={[styles.nhnTip, styles.btULiTypo]}>
                Nhấn để tiếp tục
              </Text>
              <View style={[styles.iuHngKaraplayoff, styles.hngBorder]}>
                <View
                  style={[styles.iuHngKaraplayoffChild, styles.hngBorder]}
                />
              </View>
            </View>
            <View style={[styles.buttonIuHngKara1, styles.buttonFlexBox]}>
              <Image
                style={[styles.curvedRefresh, styles.curvedRefreshLayout]}
                contentFit="cover"
                source={require("../assets/curved--refresh.png")}
              />
              <View style={[styles.btULiWrapper, styles.wrapperSpaceBlock]}>
                <Text style={[styles.btULi, styles.btULiTypo]}>
                  Bắt đầu lại
                </Text>
              </View>
            </View>
            <View style={[styles.buttonIuHngKara1, styles.buttonFlexBox]}>
              <Image
                style={styles.curvedRefreshLayout}
                contentFit="cover"
                source={require("../assets/curved--checkcircle.png")}
              />
              <View style={[styles.btULiWrapper, styles.wrapperSpaceBlock]}>
                <Text style={[styles.btULi, styles.btULiTypo]}>Kết thúc</Text>
              </View>
            </View>
          </View>
        </Pressable>
      </View>
      <View style={styles.navParent}>
        <View style={[styles.nav, styles.navPosition]}>
          <View style={[styles.navChild, styles.navPosition]} />
          <View
            style={[
              styles.curvedMenuHamburgerWrapper,
              styles.huongDanThuAmPosition,
            ]}
          >
            <Image
              style={styles.curvedMenuHamburger}
              contentFit="cover"
              source={require("../assets/curved--menuhamburger1.png")}
            />
          </View>
        </View>
        <View style={[styles.frameWrapper, styles.buttonFlexBox1]}>
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
            <View style={styles.rectangleParent}>
              <Image
                style={styles.frameChild}
                contentFit="cover"
                source={require("../assets/rectangle-39541.png")}
              />
              <Text style={styles.thngQuVit} numberOfLines={1}>
                Thương quá Việt Nam
              </Text>
            </View>
            <View style={styles.frameParent}>
              <View
                style={[
                  styles.duotoneMicrophoneWrapper,
                  styles.duotoneWrapperFlexBox,
                ]}
              >
                <Image
                  style={styles.duotoneMicrophone}
                  contentFit="cover"
                  source={require("../assets/duotone--microphone1.png")}
                />
              </View>
              <View
                style={[styles.duotoneCamWrapper, styles.duotoneWrapperFlexBox]}
              >
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
  huongDanThuAmPosition: {
    left: "50%",
    position: "absolute",
  },
  wrapperFlexBox: {
    padding: Padding.p_11xl,
    borderRadius: Border.br_xl,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    left: "50%",
    position: "absolute",
  },
  buttonFlexBox1: {
    justifyContent: "space-between",
    flexDirection: "row",
  },
  vectorIconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  btULiTypo: {
    lineHeight: 33,
    fontSize: FontSize.size_11xl,
    fontWeight: "600",
    textAlign: "center",
    fontFamily: FontFamily.sFProDisplay,
  },
  buttonFlexBox: {
    opacity: 0.3,
    alignItems: "center",
  },
  wrapperSpaceBlock: {
    marginTop: 10,
    height: 54,
    flexDirection: "row",
  },
  hngBorder: {
    borderWidth: 8,
    borderStyle: "solid",
    borderRadius: Border.br_101xl,
  },
  curvedRefreshLayout: {
    height: 80,
    width: 80,
  },
  navPosition: {
    width: 157,
    left: 0,
    top: 0,
    position: "absolute",
  },
  duotoneWrapperFlexBox: {
    padding: Padding.p_3xs,
    alignSelf: "stretch",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    flex: 1,
  },
  htCngGing: {
    fontSize: FontSize.size_51xl,
    lineHeight: 84,
    fontWeight: "800",
    textAlign: "center",
    fontFamily: FontFamily.sFProDisplay,
    color: Color.white,
  },
  htCngGingCaSGcWrapper: {
    marginLeft: -507,
    top: 243,
  },
  bQua: {
    color: Color.black,
    fontWeight: "600",
    lineHeight: 48,
    fontSize: FontSize.bold_size,
    textAlign: "center",
    fontFamily: FontFamily.sFProDisplay,
  },
  bQuaWrapper: {
    marginLeft: 361.5,
    top: 180,
    backgroundColor: Color.colorGray_300,
  },
  groupIcon: {
    width: 200,
    height: 199,
    zIndex: 0,
  },
  vectorIcon: {
    height: "26.87%",
    width: "25.9%",
    top: "18.37%",
    right: "56.1%",
    bottom: "54.76%",
    left: "18%",
    zIndex: 1,
  },
  vectorIcon1: {
    height: "28.59%",
    width: "29.45%",
    top: "53.9%",
    right: "17.8%",
    bottom: "17.51%",
    left: "52.75%",
    zIndex: 2,
  },
  groupIcon1: {
    height: "35.13%",
    width: "35.1%",
    top: "32.46%",
    right: "32.45%",
    bottom: "32.41%",
    left: "32.45%",
    zIndex: 3,
  },
  frame: {
    alignItems: "center",
    flexDirection: "row",
  },
  gingCaS: {
    color: Color.blue2,
  },
  gingCaSGcWrapper: {
    marginTop: 20,
    alignSelf: "stretch",
    justifyContent: "center",
    flexDirection: "row",
  },
  buttonIuHngKara: {
    borderRadius: Border.br_202xl,
    backgroundColor: Color.colorGray_500,
    width: 258,
    height: 343,
    paddingHorizontal: Padding.p_10xl,
    paddingVertical: Padding.p_11xl,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  bQuaNhc: {
    display: "flex",
    width: 122,
    height: 54,
    lineHeight: 33,
    fontSize: FontSize.size_11xl,
    fontWeight: "600",
    textAlign: "center",
    color: Color.white,
    fontFamily: FontFamily.sFProDisplay,
    justifyContent: "center",
    alignItems: "center",
  },
  bQuaNhcDoWrapper: {
    alignItems: "center",
  },
  buttonIuHngKara1: {
    width: 138,
    justifyContent: "flex-end",
  },
  nhnTip: {
    color: Color.colorGray_600,
  },
  iuHngKaraplayoffChild: {
    backgroundColor: Color.colorTomato_100,
    borderColor: Color.black,
    alignSelf: "stretch",
    flex: 1,
  },
  iuHngKaraplayoff: {
    borderColor: Color.white,
    width: 170,
    height: 170,
    marginTop: 40,
    flexDirection: "row",
  },
  curvedRefresh: {
    overflow: "hidden",
  },
  btULi: {
    color: Color.white,
    fontSize: FontSize.size_11xl,
  },
  btULiWrapper: {
    justifyContent: "center",
  },
  buttonIuHngKaraGroup: {
    width: 710,
    paddingBottom: Padding.p_11xl,
    alignItems: "flex-end",
    justifyContent: "space-between",
  },
  buttonIuHngKaraParent: {
    top: 465,
    left: 100,
    width: 994,
    alignItems: "flex-end",
    justifyContent: "space-between",
    position: "absolute",
  },
  huongDanThuAm: {
    marginLeft: -597,
    bottom: 0,
    backgroundColor: Color.colorGray_400,
    width: 1194,
    height: 853,
    overflow: "hidden",
  },
  navChild: {
    backgroundColor: Color.lightBlue,
    height: 130,
  },
  curvedMenuHamburger: {
    width: 100,
    height: 100,
  },
  curvedMenuHamburgerWrapper: {
    marginTop: -54,
    marginLeft: -49.5,
    top: "50%",
    justifyContent: "center",
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
  frameChild: {
    borderRadius: Border.br_3xs,
    width: 73,
    height: 73,
  },
  thngQuVit: {
    fontWeight: "700",
    fontFamily: FontFamily.nold,
    textAlign: "left",
    marginLeft: 14,
    lineHeight: 48,
    fontSize: FontSize.bold_size,
    color: Color.white,
    overflow: "hidden",
    flex: 1,
  },
  rectangleParent: {
    alignItems: "center",
    flexDirection: "row",
    flex: 1,
  },
  duotoneMicrophone: {
    width: 70,
    height: 70,
  },
  duotoneMicrophoneWrapper: {
    backgroundColor: Color.white,
    borderRadius: Border.br_101xl,
  },
  duotoneCamWrapper: {
    borderRadius: Border.br_17xl,
  },
  frameParent: {
    backgroundColor: Color.grey1,
    width: 218,
    borderRadius: Border.br_101xl,
    alignSelf: "stretch",
    flexDirection: "row",
  },
  curvedChevronLeftParent: {
    paddingHorizontal: 0,
    paddingVertical: Padding.p_base,
    alignSelf: "stretch",
    alignItems: "center",
    flexDirection: "row",
    flex: 1,
  },
  frameWrapper: {
    top: 24,
    left: 243,
    backgroundColor: Color.grey4,
    width: 899,
    height: 106,
    paddingHorizontal: Padding.p_11xl,
    paddingVertical: 0,
    borderRadius: Border.br_101xl,
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
  a21HngDn: {
    backgroundColor: Color.colorGray_200,
    height: 855,
    overflow: "hidden",
    width: "100%",
    flex: 1,
  },
});

export default A21HngDn;
