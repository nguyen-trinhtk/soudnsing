import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, Border, Padding, FontSize } from "../GlobalStyles";

const A22KaraokeVideo = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.a22KaraokeVideo}>
      <View style={styles.a22KaraokeVideoChild} />
      <View style={[styles.huongDanThuAm, styles.countFlexBox]}>
        <View style={[styles.buttonIuHngKara, styles.buttonFlexBox]}>
          <View style={styles.frame}>
            <Image
              style={[styles.groupIcon, styles.groupIconLayout]}
              contentFit="cover"
              source={require("../assets/group4.png")}
            />
            <Image
              style={[styles.vectorIcon, styles.groupIconLayout]}
              contentFit="cover"
              source={require("../assets/vector4.png")}
            />
            <Image
              style={[styles.vectorIcon1, styles.groupIconLayout]}
              contentFit="cover"
              source={require("../assets/vector5.png")}
            />
            <Image
              style={[styles.groupIcon1, styles.groupIconLayout]}
              contentFit="cover"
              source={require("../assets/group5.png")}
            />
          </View>
          <View style={[styles.gingCaSGcWrapper, styles.wrapperSpaceBlock]}>
            <Text style={[styles.gingCaS, styles.em3Typo]}>{`Giọng ca
sĩ gốc`}</Text>
          </View>
        </View>
        <View style={[styles.buttonIuHngKara1, styles.buttonFlexBox]}>
          <Image
            style={styles.curvedRefreshLayout}
            contentFit="cover"
            source={require("../assets/broken--hourglass3.png")}
          />
          <View style={[styles.bQuaNhcDoWrapper, styles.wrapperSpaceBlock]}>
            <Text style={[styles.bQuaNhc, styles.em3Typo]}>{`Bỏ qua
nhạc dạo`}</Text>
          </View>
        </View>
        <View style={styles.buttonIuHngKara2}>
          <Text style={[styles.gingCaS, styles.em3Typo]}>Nhấn để tiếp tục</Text>
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
          <View style={[styles.btULiWrapper, styles.wrapperSpaceBlock]}>
            <Text style={[styles.gingCaS, styles.em3Typo]}>Bắt đầu lại</Text>
          </View>
        </View>
        <View style={[styles.buttonIuHngKara1, styles.buttonFlexBox]}>
          <Image
            style={styles.curvedRefreshLayout}
            contentFit="cover"
            source={require("../assets/curved--checkcircle2.png")}
          />
          <View style={[styles.btULiWrapper, styles.wrapperSpaceBlock]}>
            <Text style={[styles.gingCaS, styles.em3Typo]}>Kết thúc</Text>
          </View>
        </View>
      </View>
      <LinearGradient
        style={[styles.a22KaraokeVideoItem, styles.frameWrapperPosition]}
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
            <Text style={styles.em}>3</Text>
          </View>
          <View style={styles.lyricWord}>
            <Image
              style={styles.ellipseIconLayout}
              contentFit="cover"
              source={require("../assets/ellipse-42.png")}
            />
            <Text style={styles.em}>3</Text>
          </View>
          <View style={styles.lyricWord}>
            <Image
              style={styles.ellipseIconLayout}
              contentFit="cover"
              source={require("../assets/ellipse-42.png")}
            />
            <Text style={styles.em}>3</Text>
          </View>
          <View style={styles.lyricWord3}>
            <Image
              style={[styles.ellipseIcon, styles.ellipseIconLayout]}
              contentFit="cover"
              source={require("../assets/ellipse-43.png")}
            />
            <Text style={[styles.em3, styles.em3Typo]}>3</Text>
          </View>
          <View style={styles.lyricWord3}>
            <Image
              style={[styles.ellipseIcon, styles.ellipseIconLayout]}
              contentFit="cover"
              source={require("../assets/ellipse-43.png")}
            />
            <Text style={[styles.em3, styles.em3Typo]}>2</Text>
          </View>
          <View style={styles.lyricWord3}>
            <Image
              style={[styles.ellipseIcon, styles.ellipseIconLayout]}
              contentFit="cover"
              source={require("../assets/ellipse-43.png")}
            />
            <Text style={[styles.em3, styles.em3Typo]}>1</Text>
          </View>
        </View>
        <View style={[styles.lyricWordParent, styles.lyricFlexBox]}>
          <View style={styles.lyricWord3}>
            <Image
              style={styles.ellipseIconLayout}
              contentFit="cover"
              source={require("../assets/ellipse-43.png")}
            />
            <Text style={[styles.em6, styles.em6Typo]}>Em</Text>
          </View>
          <View style={styles.lyricWord3}>
            <Image
              style={styles.ellipseIconLayout}
              contentFit="cover"
              source={require("../assets/ellipse-43.png")}
            />
            <Text style={[styles.em6, styles.em6Typo]}>nghe</Text>
          </View>
          <View style={styles.lyricWord3}>
            <Image
              style={styles.ellipseIconLayout}
              contentFit="cover"
              source={require("../assets/ellipse-43.png")}
            />
            <Text style={[styles.em6, styles.em6Typo]}>{`gì `}</Text>
          </View>
          <View style={styles.lyricWord3}>
            <Image
              style={styles.ellipseIconLayout}
              contentFit="cover"
              source={require("../assets/ellipse-43.png")}
            />
            <Text style={[styles.em6, styles.em6Typo]}>không</Text>
          </View>
          <View style={styles.lyricWord3}>
            <Image
              style={styles.ellipseIconLayout}
              contentFit="cover"
              source={require("../assets/ellipse-43.png")}
            />
            <Text style={[styles.em6, styles.em6Typo]}>hỡi</Text>
          </View>
          <View style={styles.lyricWord3}>
            <Image
              style={styles.ellipseIconLayout}
              contentFit="cover"
              source={require("../assets/ellipse-43.png")}
            />
            <Text style={[styles.em6, styles.em6Typo]}>em</Text>
          </View>
        </View>
        <View style={[styles.lyricWordGroup, styles.lyricFlexBox]}>
          <View style={styles.lyricWord12}>
            <Image
              style={styles.ellipseIconLayout}
              contentFit="cover"
              source={require("../assets/ellipse-43.png")}
            />
            <Text style={[styles.em6, styles.em6Typo]}>Con</Text>
          </View>
          <View style={styles.lyricWord12}>
            <Image
              style={styles.ellipseIconLayout}
              contentFit="cover"
              source={require("../assets/ellipse-43.png")}
            />
            <Text style={[styles.em6, styles.em6Typo]}>chim</Text>
          </View>
          <View style={styles.lyricWord12}>
            <Image
              style={styles.ellipseIconLayout}
              contentFit="cover"
              source={require("../assets/ellipse-43.png")}
            />
            <Text style={[styles.em6, styles.em6Typo]}>{`nó `}</Text>
          </View>
          <View style={styles.lyricWord12}>
            <Image
              style={styles.ellipseIconLayout}
              contentFit="cover"
              source={require("../assets/ellipse-43.png")}
            />
            <Text style={[styles.em6, styles.em6Typo]}>hót</Text>
          </View>
          <View style={styles.lyricWord12}>
            <Image
              style={styles.ellipseIconLayout}
              contentFit="cover"
              source={require("../assets/ellipse-43.png")}
            />
            <Text style={[styles.em6, styles.em6Typo]}>vang</Text>
          </View>
          <View style={styles.lyricWord12}>
            <Image
              style={styles.ellipseIconLayout}
              contentFit="cover"
              source={require("../assets/ellipse-43.png")}
            />
            <Text style={[styles.em6, styles.em6Typo]}>đầu</Text>
          </View>
          <View style={styles.lyricWord12}>
            <Image
              style={styles.ellipseIconLayout}
              contentFit="cover"
              source={require("../assets/ellipse-43.png")}
            />
            <Text style={[styles.em6, styles.em6Typo]}>hè</Text>
          </View>
        </View>
      </View>
      <View style={[styles.botNavKaraScreen, styles.huongDanThuAmLayout]}>
        <View style={styles.botLayout}>
          <View style={[styles.frameWrapper, styles.frameWrapperPosition]}>
            <Image
              style={styles.frameChild}
              contentFit="cover"
              source={require("../assets/frame-111.png")}
            />
          </View>
        </View>
        <Pressable
          style={styles.frameParent}
          onPress={() => navigation.navigate("A22aVidPlay")}
        >
          <View style={styles.frame1}>
            <Image
              style={styles.frameItem}
              contentFit="cover"
              source={require("../assets/group-5386.png")}
            />
          </View>
          <Text style={[styles.nCa, styles.em6Typo]}>Đơn ca</Text>
        </Pressable>
        <View style={[styles.botNavKaraScreenChild, styles.botLayout]}>
          <View style={[styles.frameWrapper, styles.frameWrapperPosition]}>
            <Image
              style={styles.frameChild}
              contentFit="cover"
              source={require("../assets/frame-112.png")}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  countFlexBox: {
    alignItems: "flex-end",
    flexDirection: "row",
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
  wrapperSpaceBlock: {
    marginTop: 10,
    flexDirection: "row",
  },
  em3Typo: {
    textAlign: "center",
    color: Color.white,
    fontFamily: FontFamily.sFProDisplay,
  },
  hngBorder: {
    borderWidth: 8,
    borderRadius: Border.br_101xl,
    borderStyle: "solid",
  },
  curvedRefreshLayout: {
    height: 80,
    width: 80,
  },
  frameWrapperPosition: {
    left: 0,
    top: 0,
    position: "absolute",
  },
  countBg: {
    backgroundColor: Color.colorGray_400,
    padding: Padding.p_3xs,
    justifyContent: "center",
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
  em6Typo: {
    lineHeight: 125,
    fontSize: FontSize.size_41xl,
    fontWeight: "800",
    textAlign: "center",
    color: Color.white,
    fontFamily: FontFamily.sFProDisplay,
  },
  huongDanThuAmLayout: {
    width: 1194,
    position: "absolute",
  },
  botLayout: {
    height: 178,
    width: 120,
  },
  a22KaraokeVideoChild: {
    top: 693,
    left: 1007,
    width: 60,
    height: 60,
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
    zIndex: 1,
    position: "absolute",
  },
  vectorIcon1: {
    height: "22.5%",
    width: "23.42%",
    top: "56.97%",
    right: "20.79%",
    bottom: "20.53%",
    left: "55.79%",
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
    alignItems: "center",
    flexDirection: "row",
  },
  gingCaS: {
    lineHeight: 33,
    fontSize: FontSize.size_11xl,
    color: Color.white,
    fontFamily: FontFamily.sFProDisplay,
  },
  gingCaSGcWrapper: {
    alignItems: "center",
  },
  buttonIuHngKara: {
    height: 144,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  bQuaNhc: {
    display: "flex",
    width: 122,
    justifyContent: "center",
    height: 54,
    lineHeight: 33,
    fontSize: FontSize.size_11xl,
    color: Color.white,
    fontFamily: FontFamily.sFProDisplay,
    alignItems: "center",
  },
  bQuaNhcDoWrapper: {
    height: 54,
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
    width: 170,
    height: 170,
    marginTop: 40,
    borderColor: Color.white,
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
    height: 54,
  },
  huongDanThuAm: {
    right: -1165,
    justifyContent: "space-between",
    paddingHorizontal: Padding.p_81xl,
    paddingTop: Padding.p_3xs,
    paddingBottom: Padding.p_31xl,
    width: 1194,
    position: "absolute",
    top: 0,
    alignItems: "flex-end",
    overflow: "hidden",
    backgroundColor: Color.black,
  },
  a22KaraokeVideoItem: {
    width: 1195,
    height: 566,
    backgroundColor: "transparent",
  },
  em: {
    fontSize: FontSize.size_31xl,
    lineHeight: 104,
    color: Color.oran2,
    marginTop: 32,
    display: "none",
    fontWeight: "800",
    textAlign: "center",
    fontFamily: FontFamily.sFProDisplay,
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
    marginTop: 32,
  },
  lyricWord3: {
    padding: Padding.p_3xs,
    alignItems: "center",
  },
  count: {
    opacity: 0.7,
    padding: Padding.p_3xs,
    alignItems: "flex-end",
    flexDirection: "row",
  },
  em6: {
    marginTop: 32,
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
  frameChild: {
    borderRadius: Border.br_164xl,
    height: 120,
    width: 120,
    overflow: "hidden",
  },
  frameWrapper: {
    justifyContent: "flex-end",
    alignItems: "center",
  },
  frameItem: {
    width: 148,
    height: 148,
  },
  frame1: {
    borderRadius: Border.br_181xl,
    backgroundColor: Color.blue2,
    borderWidth: 6,
    width: 160,
    height: 160,
    transform: [
      {
        rotate: "180deg",
      },
    ],
    borderColor: Color.white,
    borderStyle: "solid",
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
  nCa: {
    marginTop: 36,
  },
  frameParent: {
    width: 228,
    marginLeft: 60,
    alignItems: "center",
  },
  botNavKaraScreenChild: {
    marginLeft: 60,
  },
  botNavKaraScreen: {
    marginLeft: -597,
    bottom: 0,
    left: "50%",
    paddingHorizontal: Padding.p_241xl,
    paddingVertical: Padding.p_11xl,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  a22KaraokeVideo: {
    height: 855,
    overflow: "hidden",
    width: "100%",
    flex: 1,
    backgroundColor: Color.black,
  },
});

export default A22KaraokeVideo;
