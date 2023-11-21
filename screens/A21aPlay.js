import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, FontSize, Border, Color, Padding } from "../GlobalStyles";

const A21aPlay = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.a21aPlay}>
      <View style={[styles.frameParent, styles.nhpParentLayout]}>
        <View style={[styles.nhpParent, styles.nhpParentLayout]}>
          <View style={[styles.nhp, styles.nhpParentLayout]} />
          <View style={styles.im} />
        </View>
        <View style={[styles.frameGroup, styles.nhpParentLayout]}>
          <View style={styles.beat39549Parent}>
            <View style={styles.beat39549} />
            <View style={styles.gc2} />
          </View>
          <View style={styles.buttonIuHngKaraParent}>
            <Pressable
              style={[styles.buttonIuHngKara, styles.buttonFlexBox]}
              onPress={() => navigation.navigate("A21bGc")}
            >
              <View style={styles.frame}>
                <Image
                  style={[styles.groupIcon, styles.groupIconLayout]}
                  contentFit="cover"
                  source={require("../assets/group4.png")}
                />
                <Image
                  style={[styles.vectorIcon, styles.groupIconLayout]}
                  contentFit="cover"
                  source={require("../assets/vector2.png")}
                />
                <Image
                  style={[styles.vectorIcon1, styles.groupIconLayout]}
                  contentFit="cover"
                  source={require("../assets/vector3.png")}
                />
                <Image
                  style={[styles.groupIcon1, styles.groupIconLayout]}
                  contentFit="cover"
                  source={require("../assets/group2.png")}
                />
              </View>
              <View style={[styles.gingCaSGcWrapper, styles.wrapperSpaceBlock]}>
                <Text style={[styles.gingCaS, styles.nhnTipTypo]}>{`Giọng ca
sĩ gốc`}</Text>
              </View>
            </Pressable>
            <View style={[styles.buttonIuHngKara1, styles.buttonFlexBox]}>
              <Image
                style={styles.curvedRefreshLayout}
                contentFit="cover"
                source={require("../assets/broken--hourglass3.png")}
              />
              <View style={styles.bQuaNhcDoWrapper}>
                <Text style={[styles.bQuaNhc, styles.bQuaNhcFlexBox]}>{`Bỏ qua
nhạc dạo`}</Text>
              </View>
            </View>
            <View style={styles.buttonIuHngKara2}>
              <Text style={[styles.nhnTip, styles.nhnTipTypo]}>
                Nhấn để tiếp tục
              </Text>
              <View style={[styles.iuHngKaraplayoff, styles.hngBorder]}>
                <View
                  style={[styles.iuHngKaraplayoffChild, styles.hngBorder]}
                />
              </View>
            </View>
            <View style={[styles.buttonIuHngKara3, styles.buttonFlexBox]}>
              <Image
                style={[styles.curvedRefresh, styles.curvedRefreshLayout]}
                contentFit="cover"
                source={require("../assets/curved--refresh2.png")}
              />
              <View style={[styles.btULiWrapper, styles.bQuaNhcFlexBox]}>
                <Text style={[styles.gingCaS, styles.nhnTipTypo]}>
                  Bắt đầu lại
                </Text>
              </View>
            </View>
            <View style={[styles.buttonIuHngKara4, styles.buttonFlexBox]}>
              <Image
                style={styles.curvedRefreshLayout}
                contentFit="cover"
                source={require("../assets/curved--checkcircle2.png")}
              />
              <View style={[styles.btULiWrapper, styles.bQuaNhcFlexBox]}>
                <Text style={[styles.gingCaS, styles.nhnTipTypo]}>
                  Kết thúc
                </Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  nhpParentLayout: {
    width: 1194,
    position: "absolute",
  },
  buttonFlexBox: {
    justifyContent: "flex-end",
    width: 138,
    top: 50,
    alignItems: "center",
    position: "absolute",
  },
  groupIconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  wrapperSpaceBlock: {
    marginTop: 10,
    flexDirection: "row",
  },
  nhnTipTypo: {
    textAlign: "center",
    fontFamily: FontFamily.sFProDisplay,
    fontWeight: "600",
    lineHeight: 33,
    fontSize: FontSize.size_11xl,
  },
  bQuaNhcFlexBox: {
    justifyContent: "center",
    height: 54,
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
  nhp: {
    top: 54,
    height: 295,
    left: 0,
  },
  im: {
    left: 201,
    width: 791,
    height: 114,
    top: 0,
    position: "absolute",
  },
  nhpParent: {
    top: 11,
    height: 349,
    left: 0,
  },
  beat39549: {
    height: 279,
    width: 1012,
    left: 0,
    top: 0,
    position: "absolute",
  },
  gc2: {
    top: 102,
    left: 33,
    width: 75,
    height: 75,
    position: "absolute",
  },
  beat39549Parent: {
    height: 239,
    width: 1012,
  },
  groupIcon: {
    zIndex: 0,
    alignSelf: "stretch",
    flex: 1,
    width: "100%",
  },
  vectorIcon: {
    height: "28.82%",
    width: "27.76%",
    top: "17.5%",
    right: "55.13%",
    bottom: "53.68%",
    left: "17.11%",
    zIndex: 1,
    position: "absolute",
  },
  vectorIcon1: {
    height: "30.39%",
    width: "31.32%",
    top: "53.03%",
    right: "16.84%",
    bottom: "16.58%",
    left: "51.84%",
    zIndex: 2,
    position: "absolute",
  },
  groupIcon1: {
    height: "35.13%",
    width: "35.13%",
    top: "32.5%",
    right: "32.37%",
    bottom: "32.37%",
    left: "32.5%",
    zIndex: 3,
    position: "absolute",
  },
  frame: {
    width: 76,
    height: 76,
    flexDirection: "row",
    alignItems: "center",
  },
  gingCaS: {
    color: Color.white,
    textAlign: "center",
    fontFamily: FontFamily.sFProDisplay,
    fontWeight: "600",
    lineHeight: 33,
    fontSize: FontSize.size_11xl,
  },
  gingCaSGcWrapper: {
    alignItems: "center",
  },
  buttonIuHngKara: {
    height: 144,
    left: 0,
  },
  bQuaNhc: {
    display: "flex",
    width: 122,
    textAlign: "center",
    fontFamily: FontFamily.sFProDisplay,
    fontWeight: "600",
    lineHeight: 33,
    fontSize: FontSize.size_11xl,
    color: Color.white,
    alignItems: "center",
  },
  bQuaNhcDoWrapper: {
    height: 54,
    marginTop: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  buttonIuHngKara1: {
    left: 194,
  },
  nhnTip: {
    color: Color.colorGray_600,
    textAlign: "center",
    fontFamily: FontFamily.sFProDisplay,
    fontWeight: "600",
    lineHeight: 33,
    fontSize: FontSize.size_11xl,
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
  buttonIuHngKara2: {
    top: -21,
    left: 389,
    alignItems: "center",
    position: "absolute",
  },
  curvedRefresh: {
    overflow: "hidden",
  },
  btULiWrapper: {
    marginTop: 10,
    flexDirection: "row",
  },
  buttonIuHngKara3: {
    left: 662,
  },
  buttonIuHngKara4: {
    left: 856,
  },
  buttonIuHngKaraParent: {
    width: 994,
    height: 194,
  },
  frameGroup: {
    marginLeft: -597,
    bottom: 0,
    left: "50%",
    paddingBottom: Padding.p_41xl,
    alignItems: "center",
  },
  frameParent: {
    height: 853,
    left: 0,
    top: 0,
  },
  a21aPlay: {
    backgroundColor: Color.colorGray_200,
    height: 855,
    overflow: "hidden",
    width: "100%",
    flex: 1,
  },
});

export default A21aPlay;
