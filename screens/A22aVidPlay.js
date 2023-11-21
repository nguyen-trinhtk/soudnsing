import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import { Padding, Color, Border, FontFamily, FontSize } from "../GlobalStyles";

const A22aVidPlay = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.a22aVidPlay}>
      <View style={styles.vidBeat} />
      <View style={[styles.huongDanThuAm, styles.huongSpaceBlock]}>
        <View style={[styles.buttonIuHngKara, styles.buttonFlexBox]}>
          <View style={styles.frame}>
            <Image
              style={[styles.groupIcon, styles.groupIconLayout]}
              contentFit="cover"
              source={require("../assets/group4.png")}
            />
            <Image
              style={[styles.vectorIcon, styles.vectorIconPosition1]}
              contentFit="cover"
              source={require("../assets/vector8.png")}
            />
            <Image
              style={[styles.vectorIcon1, styles.vectorIconPosition]}
              contentFit="cover"
              source={require("../assets/vector5.png")}
            />
            <Image
              style={[styles.groupIcon1, styles.groupIconLayout]}
              contentFit="cover"
              source={require("../assets/group7.png")}
            />
          </View>
          <View style={styles.gingCaSGcWrapper}>
            <Text style={styles.gingCaSTypo}>{`Giọng ca
sĩ gốc`}</Text>
          </View>
        </View>
        <View style={[styles.buttonIuHngKara1, styles.buttonFlexBox]}>
          <Image
            style={styles.curvedRefreshLayout}
            contentFit="cover"
            source={require("../assets/broken--hourglass3.png")}
          />
          <View style={[styles.bQuaNhcDoWrapper, styles.wrapperLayout]}>
            <Text style={[styles.bQuaNhc, styles.quaLayout]}>{`Bỏ qua
nhạc dạo`}</Text>
          </View>
        </View>
        <View style={styles.buttonIuHngKara2}>
          <Text style={styles.gingCaSTypo}>Nhấn để tiếp tục</Text>
          <View style={[styles.iuHngKaraplayoff, styles.hngBorder]}>
            <View style={[styles.iuHngKaraplayoffChild, styles.hngBorder]} />
          </View>
        </View>
        <View style={[styles.buttonIuHngKara1, styles.buttonFlexBox]}>
          <Image
            style={[styles.curvedRefresh, styles.curvedRefreshLayout]}
            contentFit="cover"
            source={require("../assets/curved--refresh2.png")}
          />
          <View style={[styles.btULiWrapper, styles.wrapperLayout]}>
            <Text style={styles.gingCaSTypo}>Bắt đầu lại</Text>
          </View>
        </View>
        <View style={[styles.buttonIuHngKara1, styles.buttonFlexBox]}>
          <Image
            style={styles.curvedRefreshLayout}
            contentFit="cover"
            source={require("../assets/curved--checkcircle2.png")}
          />
          <View style={[styles.btULiWrapper, styles.wrapperLayout]}>
            <Text style={styles.gingCaSTypo}>Kết thúc</Text>
          </View>
        </View>
      </View>
      <LinearGradient
        style={styles.vidNgi}
        locations={[0.21, 0.72]}
        colors={["#000", "rgba(0, 0, 0, 0)"]}
      />
      <View style={styles.lyricc}>
        <View style={[styles.count, styles.countBg]}>
          <View style={styles.lyricWord}>
            <Image
              style={styles.ellipseIconLayout}
              contentFit="cover"
              source={require("../assets/ellipse-42.png")}
            />
            <Text style={[styles.em, styles.emTypo]}>3</Text>
          </View>
          <View style={styles.lyricWord}>
            <Image
              style={styles.ellipseIconLayout}
              contentFit="cover"
              source={require("../assets/ellipse-42.png")}
            />
            <Text style={[styles.em, styles.emTypo]}>3</Text>
          </View>
          <View style={styles.lyricWord}>
            <Image
              style={styles.ellipseIconLayout}
              contentFit="cover"
              source={require("../assets/ellipse-42.png")}
            />
            <Text style={[styles.em, styles.emTypo]}>3</Text>
          </View>
          <View style={styles.lyricWord3}>
            <Image
              style={[styles.ellipseIcon, styles.ellipseIconLayout]}
              contentFit="cover"
              source={require("../assets/ellipse-43.png")}
            />
            <Text style={[styles.em3, styles.emTypo]}>3</Text>
          </View>
          <View style={styles.lyricWord3}>
            <Image
              style={[styles.ellipseIcon, styles.ellipseIconLayout]}
              contentFit="cover"
              source={require("../assets/ellipse-43.png")}
            />
            <Text style={[styles.em3, styles.emTypo]}>2</Text>
          </View>
          <View style={styles.lyricWord3}>
            <Image
              style={[styles.ellipseIcon, styles.ellipseIconLayout]}
              contentFit="cover"
              source={require("../assets/ellipse-43.png")}
            />
            <Text style={[styles.em3, styles.emTypo]}>1</Text>
          </View>
        </View>
        <View style={[styles.lyricWordParent, styles.lyricFlexBox]}>
          <View style={styles.lyricWord3}>
            <Image
              style={styles.ellipseIconLayout}
              contentFit="cover"
              source={require("../assets/ellipse-43.png")}
            />
            <Text style={[styles.em6, styles.emTypo]}>Em</Text>
          </View>
          <View style={styles.lyricWord3}>
            <Image
              style={styles.ellipseIconLayout}
              contentFit="cover"
              source={require("../assets/ellipse-43.png")}
            />
            <Text style={[styles.em6, styles.emTypo]}>nghe</Text>
          </View>
          <View style={styles.lyricWord3}>
            <Image
              style={styles.ellipseIconLayout}
              contentFit="cover"
              source={require("../assets/ellipse-43.png")}
            />
            <Text style={[styles.em6, styles.emTypo]}>{`gì `}</Text>
          </View>
          <View style={styles.lyricWord3}>
            <Image
              style={styles.ellipseIconLayout}
              contentFit="cover"
              source={require("../assets/ellipse-43.png")}
            />
            <Text style={[styles.em6, styles.emTypo]}>không</Text>
          </View>
          <View style={styles.lyricWord3}>
            <Image
              style={styles.ellipseIconLayout}
              contentFit="cover"
              source={require("../assets/ellipse-43.png")}
            />
            <Text style={[styles.em6, styles.emTypo]}>hỡi</Text>
          </View>
          <View style={styles.lyricWord3}>
            <Image
              style={styles.ellipseIconLayout}
              contentFit="cover"
              source={require("../assets/ellipse-43.png")}
            />
            <Text style={[styles.em6, styles.emTypo]}>em</Text>
          </View>
        </View>
        <View style={[styles.lyricWordGroup, styles.lyricFlexBox]}>
          <View style={styles.lyricWord12}>
            <Image
              style={styles.ellipseIconLayout}
              contentFit="cover"
              source={require("../assets/ellipse-43.png")}
            />
            <Text style={[styles.em6, styles.emTypo]}>Con</Text>
          </View>
          <View style={styles.lyricWord12}>
            <Image
              style={styles.ellipseIconLayout}
              contentFit="cover"
              source={require("../assets/ellipse-43.png")}
            />
            <Text style={[styles.em6, styles.emTypo]}>chim</Text>
          </View>
          <View style={styles.lyricWord12}>
            <Image
              style={styles.ellipseIconLayout}
              contentFit="cover"
              source={require("../assets/ellipse-43.png")}
            />
            <Text style={[styles.em6, styles.emTypo]}>{`nó `}</Text>
          </View>
          <View style={styles.lyricWord12}>
            <Image
              style={styles.ellipseIconLayout}
              contentFit="cover"
              source={require("../assets/ellipse-43.png")}
            />
            <Text style={[styles.em6, styles.emTypo]}>hót</Text>
          </View>
          <View style={styles.lyricWord12}>
            <Image
              style={styles.ellipseIconLayout}
              contentFit="cover"
              source={require("../assets/ellipse-43.png")}
            />
            <Text style={[styles.em6, styles.emTypo]}>vang</Text>
          </View>
          <View style={styles.lyricWord12}>
            <Image
              style={styles.ellipseIconLayout}
              contentFit="cover"
              source={require("../assets/ellipse-43.png")}
            />
            <Text style={[styles.em6, styles.emTypo]}>đầu</Text>
          </View>
          <View style={styles.lyricWord12}>
            <Image
              style={styles.ellipseIconLayout}
              contentFit="cover"
              source={require("../assets/ellipse-43.png")}
            />
            <Text style={[styles.em6, styles.emTypo]}>hè</Text>
          </View>
        </View>
      </View>
      <Pressable
        style={[styles.buttonIuHngKara5, styles.buttonIuHngKara5FlexBox]}
        onPress={() => navigation.navigate("A22VidBack")}
      >
        <View style={[styles.curvedImage1Wrapper, styles.countBg]}>
          <Image
            style={styles.curvedImage1}
            contentFit="cover"
            source={require("../assets/curved--image1.png")}
          />
        </View>
      </Pressable>
      <View style={[styles.huongDanThuAm1, styles.huongSpaceBlock]}>
        <View style={[styles.buttonIuHngKara, styles.buttonFlexBox]}>
          <View style={styles.frame}>
            <Image
              style={[styles.groupIcon, styles.groupIconLayout]}
              contentFit="cover"
              source={require("../assets/group4.png")}
            />
            <Image
              style={[styles.vectorIcon2, styles.vectorIconPosition1]}
              contentFit="cover"
              source={require("../assets/vector4.png")}
            />
            <Image
              style={[styles.vectorIcon3, styles.vectorIconPosition]}
              contentFit="cover"
              source={require("../assets/vector5.png")}
            />
            <Image
              style={[styles.groupIcon1, styles.groupIconLayout]}
              contentFit="cover"
              source={require("../assets/group7.png")}
            />
          </View>
          <View style={styles.gingCaSGcWrapper}>
            <Text style={styles.gingCaS1Typo}>{`Giọng ca
sĩ gốc`}</Text>
          </View>
        </View>
        <View style={[styles.buttonIuHngKara1, styles.buttonFlexBox]}>
          <Image
            style={styles.curvedRefreshLayout}
            contentFit="cover"
            source={require("../assets/broken--hourglass3.png")}
          />
          <View style={[styles.bQuaNhcDoWrapper, styles.wrapperLayout]}>
            <Text style={[styles.bQuaNhc1, styles.gingCaS1Typo]}>{`Bỏ qua
nhạc dạo`}</Text>
          </View>
        </View>
        <View style={styles.buttonIuHngKara2}>
          <Text style={styles.gingCaS1Typo}>Nhấn để tiếp tục</Text>
          <View style={[styles.iuHngKaraplayoff, styles.hngBorder]}>
            <View style={[styles.iuHngKaraplayoffChild, styles.hngBorder]} />
          </View>
        </View>
        <View style={[styles.buttonIuHngKara1, styles.buttonFlexBox]}>
          <Image
            style={[styles.curvedRefresh, styles.curvedRefreshLayout]}
            contentFit="cover"
            source={require("../assets/curved--refresh2.png")}
          />
          <View style={[styles.btULiWrapper, styles.wrapperLayout]}>
            <Text style={styles.gingCaS1Typo}>Bắt đầu lại</Text>
          </View>
        </View>
        <View style={[styles.buttonIuHngKara1, styles.buttonFlexBox]}>
          <Image
            style={styles.curvedRefreshLayout}
            contentFit="cover"
            source={require("../assets/curved--checkcircle2.png")}
          />
          <View style={[styles.btULiWrapper, styles.wrapperLayout]}>
            <Text style={styles.gingCaS1Typo}>Kết thúc</Text>
          </View>
        </View>
      </View>
      <View style={styles.a22aVidPlayChild} />
    </View>
  );
};

const styles = StyleSheet.create({
  huongSpaceBlock: {
    paddingBottom: Padding.p_31xl,
    paddingHorizontal: Padding.p_81xl,
    justifyContent: "space-between",
    width: 1194,
    paddingTop: Padding.p_3xs,
    alignItems: "flex-end",
    flexDirection: "row",
    position: "absolute",
    overflow: "hidden",
    backgroundColor: Color.black,
  },
  buttonFlexBox: {
    width: 138,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  groupIconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  vectorIconPosition1: {
    zIndex: 1,
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  vectorIconPosition: {
    zIndex: 2,
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  wrapperLayout: {
    height: 54,
    marginTop: 10,
    flexDirection: "row",
  },
  quaLayout: {
    width: 122,
    display: "flex",
    justifyContent: "center",
    height: 54,
    alignItems: "center",
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
  countBg: {
    backgroundColor: Color.colorGray_400,
    justifyContent: "center",
  },
  emTypo: {
    marginTop: 32,
    textAlign: "center",
    fontFamily: FontFamily.sFProDisplay,
  },
  ellipseIconLayout: {
    height: 33,
    width: 33,
  },
  lyricFlexBox: {
    marginTop: 25,
    alignItems: "flex-end",
    flexDirection: "row",
    overflow: "hidden",
  },
  buttonIuHngKara5FlexBox: {
    borderRadius: Border.br_101xl,
    alignItems: "center",
    flexDirection: "row",
  },
  gingCaS1Typo: {
    fontWeight: "600",
    textAlign: "center",
    color: Color.white,
    fontFamily: FontFamily.sFProDisplay,
    lineHeight: 33,
    fontSize: FontSize.size_11xl,
  },
  vidBeat: {
    top: 590,
    left: 1007,
    width: 163,
    height: 163,
    position: "absolute",
    backgroundColor: Color.black,
  },
  groupIcon: {
    zIndex: 0,
    alignSelf: "stretch",
    flex: 1,
    width: "100%",
  },
  vectorIcon: {
    height: "20.92%",
    width: "19.87%",
    top: "21.45%",
    right: "59.08%",
    bottom: "57.63%",
    left: "21.05%",
  },
  vectorIcon1: {
    height: "22.5%",
    width: "23.42%",
    top: "56.97%",
    right: "20.79%",
    bottom: "20.53%",
    left: "55.79%",
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
    alignItems: "center",
    flexDirection: "row",
  },
  gingCaSTypo: {
    textAlign: "center",
    fontFamily: FontFamily.sFProDisplay,
    lineHeight: 33,
    fontSize: FontSize.size_11xl,
    color: Color.white,
  },
  gingCaSGcWrapper: {
    marginTop: 10,
    alignItems: "center",
    flexDirection: "row",
  },
  buttonIuHngKara: {
    height: 144,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  bQuaNhc: {
    textAlign: "center",
    fontFamily: FontFamily.sFProDisplay,
    lineHeight: 33,
    fontSize: FontSize.size_11xl,
    color: Color.white,
  },
  bQuaNhcDoWrapper: {
    alignItems: "center",
  },
  buttonIuHngKara1: {
    justifyContent: "flex-end",
    alignItems: "center",
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
    alignItems: "center",
  },
  curvedRefresh: {
    overflow: "hidden",
  },
  btULiWrapper: {
    justifyContent: "center",
  },
  huongDanThuAm: {
    right: -1165,
    top: 0,
  },
  vidNgi: {
    left: 0,
    width: 1195,
    height: 566,
    backgroundColor: "transparent",
    top: 0,
    position: "absolute",
  },
  em: {
    fontSize: FontSize.size_31xl,
    lineHeight: 104,
    color: Color.oran2,
    display: "none",
    fontWeight: "800",
    marginTop: 32,
  },
  lyricWord: {
    padding: Padding.p_3xs,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  ellipseIcon: {
    display: "none",
  },
  em3: {
    fontSize: FontSize.size_61xl,
    lineHeight: 166,
    fontWeight: "500",
    color: Color.white,
  },
  lyricWord3: {
    padding: Padding.p_3xs,
    alignItems: "center",
  },
  count: {
    opacity: 0.7,
    padding: Padding.p_3xs,
    alignItems: "flex-end",
    backgroundColor: Color.colorGray_400,
    flexDirection: "row",
  },
  em6: {
    fontSize: FontSize.size_41xl,
    lineHeight: 125,
    fontWeight: "800",
    marginTop: 32,
    color: Color.white,
  },
  lyricWordParent: {
    height: 85,
    padding: Padding.p_3xs,
    backgroundColor: Color.colorGray_400,
    justifyContent: "center",
  },
  lyricWord12: {
    opacity: 0.5,
    padding: Padding.p_3xs,
    alignItems: "center",
  },
  lyricWordGroup: {
    height: 67,
  },
  lyricc: {
    bottom: 374,
    left: 30,
    width: 1037,
    height: 330,
    paddingHorizontal: Padding.p_41xl,
    paddingVertical: 0,
    justifyContent: "flex-end",
    position: "absolute",
  },
  curvedImage1: {
    width: 82,
    height: 82,
  },
  curvedImage1Wrapper: {
    width: 100,
    height: 100,
    borderRadius: Border.br_101xl,
    alignItems: "center",
    flexDirection: "row",
  },
  buttonIuHngKara5: {
    top: 158,
    right: 33,
    paddingLeft: Padding.p_xl,
    paddingRight: Padding.p_3xs,
    paddingBottom: Padding.p_3xs,
    justifyContent: "center",
    paddingTop: Padding.p_3xs,
    borderRadius: Border.br_101xl,
    position: "absolute",
  },
  vectorIcon2: {
    height: "28.82%",
    width: "27.76%",
    top: "17.5%",
    right: "55.13%",
    bottom: "53.68%",
    left: "17.11%",
  },
  vectorIcon3: {
    height: "30.39%",
    width: "31.32%",
    top: "53.03%",
    right: "16.84%",
    bottom: "16.58%",
    left: "51.84%",
  },
  bQuaNhc1: {
    width: 122,
    display: "flex",
    justifyContent: "center",
    height: 54,
    alignItems: "center",
  },
  huongDanThuAm1: {
    marginLeft: -597,
    bottom: 0,
    left: "50%",
  },
  a22aVidPlayChild: {
    top: 498,
    left: 1134,
    width: 41,
    height: 41,
    position: "absolute",
  },
  a22aVidPlay: {
    height: 855,
    overflow: "hidden",
    width: "100%",
    flex: 1,
    backgroundColor: Color.black,
  },
});

export default A22aVidPlay;
