import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Padding, FontFamily, FontSize, Color, Border } from "../GlobalStyles";

const A22VidBack1 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.a22VidBack1}>
      <View style={[styles.huongDanThuAm, styles.huongDanThuAmPosition]}>
        <View style={[styles.buttonIuHngKara, styles.buttonFlexBox]}>
          <View style={styles.frame}>
            <Image
              style={[styles.groupIcon, styles.iconGroupLayout]}
              contentFit="cover"
              source={require("../assets/group4.png")}
            />
            <Image
              style={[styles.vectorIcon, styles.iconGroupLayout]}
              contentFit="cover"
              source={require("../assets/vector2.png")}
            />
            <Image
              style={[styles.vectorIcon1, styles.iconGroupLayout]}
              contentFit="cover"
              source={require("../assets/vector3.png")}
            />
            <Image
              style={[styles.groupIcon1, styles.iconGroupLayout]}
              contentFit="cover"
              source={require("../assets/group2.png")}
            />
          </View>
          <View style={[styles.gingCaSGcWrapper, styles.wrapperSpaceBlock]}>
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
          <View style={[styles.bQuaNhcDoWrapper, styles.wrapperSpaceBlock]}>
            <Text style={[styles.bQuaNhc, styles.gingCaSTypo]}>{`Bỏ qua
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
          <View style={[styles.btULiWrapper, styles.wrapperSpaceBlock]}>
            <Text style={styles.gingCaSTypo}>Bắt đầu lại</Text>
          </View>
        </View>
        <View style={[styles.buttonIuHngKara1, styles.buttonFlexBox]}>
          <Image
            style={styles.curvedRefreshLayout}
            contentFit="cover"
            source={require("../assets/curved--checkcircle2.png")}
          />
          <View style={[styles.btULiWrapper, styles.wrapperSpaceBlock]}>
            <Text style={styles.gingCaSTypo}>Kết thúc</Text>
          </View>
        </View>
      </View>
      <Image
        style={[styles.a22VidBack1Child, styles.instanceParentPosition]}
        contentFit="cover"
        source={require("../assets/rectangle-39550.png")}
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
      <View style={[styles.buttonIuHngKara5, styles.buttonIuHngKara5FlexBox]}>
        <View style={[styles.curvedImage1Wrapper, styles.countBg]}>
          <Image
            style={styles.curvedImage1}
            contentFit="cover"
            source={require("../assets/curved--image1.png")}
          />
        </View>
      </View>
      <View style={[styles.botNavKaraScreen, styles.groupChildPosition]}>
        <View style={styles.botNavKaraScreenInner}>
          <View style={[styles.instanceParent, styles.instanceParentPosition]}>
            <View style={styles.rectangleWrapper}>
              <Pressable
                style={[styles.wrapper, styles.iconLayout]}
                onPress={() => navigation.navigate("A22VidBack")}
              >
                <Image
                  style={[styles.icon, styles.iconLayout]}
                  contentFit="cover"
                  source={require("../assets/rectangle-39559.png")}
                />
              </Pressable>
            </View>
            <View style={[styles.background, styles.backgroundLayout]}>
              <Image
                style={[styles.backgroundChild, styles.iconGroupLayout]}
                contentFit="cover"
                source={require("../assets/rectangle-395591.png")}
              />
            </View>
            <View style={styles.backgroundLayout}>
              <Image
                style={[styles.backgroundItem, styles.iconLayout]}
                contentFit="cover"
                source={require("../assets/rectangle-395592.png")}
              />
            </View>
            <View style={styles.backgroundLayout}>
              <Image
                style={[styles.backgroundItem, styles.iconLayout]}
                contentFit="cover"
                source={require("../assets/rectangle-395593.png")}
              />
            </View>
            <View style={styles.backgroundLayout}>
              <Image
                style={[styles.backgroundItem, styles.iconLayout]}
                contentFit="cover"
                source={require("../assets/rectangle-395594.png")}
              />
            </View>
            <View style={styles.backgroundLayout}>
              <Image
                style={[styles.backgroundItem, styles.iconLayout]}
                contentFit="cover"
                source={require("../assets/rectangle-395595.png")}
              />
            </View>
            <View style={styles.backgroundLayout}>
              <Image
                style={[styles.backgroundItem, styles.iconLayout]}
                contentFit="cover"
                source={require("../assets/rectangle-395596.png")}
              />
            </View>
            <View style={styles.backgroundLayout}>
              <Image
                style={[styles.backgroundItem, styles.iconLayout]}
                contentFit="cover"
                source={require("../assets/rectangle-395597.png")}
              />
            </View>
          </View>
        </View>
        <View style={[styles.frame1, styles.frame1Layout]}>
          <View style={styles.groupIconFlexBox}>
            <View style={[styles.groupChild, styles.frame1Layout]} />
            <Image
              style={styles.groupItem}
              contentFit="cover"
              source={require("../assets/group-5387.png")}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  huongDanThuAmPosition: {
    paddingTop: Padding.p_3xs,
    position: "absolute",
  },
  buttonFlexBox: {
    width: 138,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  iconGroupLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  wrapperSpaceBlock: {
    marginTop: 10,
    flexDirection: "row",
  },
  gingCaSTypo: {
    textAlign: "center",
    fontFamily: FontFamily.sFProDisplay,
    lineHeight: 33,
    fontSize: FontSize.size_11xl,
    color: Color.white,
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
  instanceParentPosition: {
    left: 0,
    position: "absolute",
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
  groupChildPosition: {
    bottom: 0,
    position: "absolute",
  },
  iconLayout: {
    height: "100%",
    width: "100%",
  },
  backgroundLayout: {
    marginLeft: 30,
    height: 187,
    width: 187,
  },
  frame1Layout: {
    transform: [
      {
        rotate: "180deg",
      },
    ],
    height: 166,
    width: 166,
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
    paddingBottom: Padding.p_31xl,
    alignItems: "flex-end",
    flexDirection: "row",
    width: 1194,
    backgroundColor: Color.black,
    top: 0,
    overflow: "hidden",
  },
  a22VidBack1Child: {
    width: 1195,
    height: 566,
    top: 0,
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
    padding: Padding.p_3xs,
    opacity: 0.5,
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
    opacity: 0.5,
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
    position: "absolute",
  },
  icon: {
    borderRadius: Border.br_xl,
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  wrapper: {
    bottom: "0%",
    right: "0%",
    top: "0%",
    left: "0%",
    height: "100%",
    position: "absolute",
  },
  rectangleWrapper: {
    height: 187,
    width: 187,
  },
  backgroundChild: {
    height: "95.72%",
    width: "95.72%",
    top: "2.14%",
    right: "2.14%",
    bottom: "2.14%",
    left: "2.14%",
    borderRadius: Border.br_xl,
    position: "absolute",
  },
  background: {
    borderRadius: Border.br_xl,
  },
  backgroundItem: {
    borderRadius: Border.br_xl,
    bottom: "0%",
    right: "0%",
    top: "0%",
    left: "0%",
    height: "100%",
    position: "absolute",
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  instanceParent: {
    marginTop: -103,
    top: "50%",
    padding: Padding.p_3xs,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  botNavKaraScreenInner: {
    width: 896,
    height: 226,
  },
  groupChild: {
    left: 166,
    borderRadius: Border.br_62xl,
    borderWidth: 10,
    bottom: 0,
    position: "absolute",
    borderColor: Color.white,
    borderStyle: "solid",
    transform: [
      {
        rotate: "180deg",
      },
    ],
    height: 166,
    width: 166,
  },
  groupItem: {
    top: 28,
    left: -138,
    width: 110,
    height: 110,
    position: "absolute",
  },
  groupIconFlexBox: {
    alignSelf: "stretch",
    flex: 1,
  },
  frame1: {
    borderRadius: Border.br_181xl,
    marginLeft: 60,
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
  botNavKaraScreen: {
    marginLeft: -597,
    left: "50%",
    paddingHorizontal: Padding.p_241xl,
    paddingVertical: Padding.p_11xl,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    width: 1194,
    backgroundColor: Color.black,
  },
  a22VidBack1: {
    height: 855,
    overflow: "hidden",
    width: "100%",
    flex: 1,
    backgroundColor: Color.black,
  },
});

export default A22VidBack1;
