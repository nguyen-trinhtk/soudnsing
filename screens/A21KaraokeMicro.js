import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Padding, Color, Border, FontSize, FontFamily } from "../GlobalStyles";

const A21KaraokeMicro = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.a21KaraokeMicro}>
      <LinearGradient
        style={[styles.a21KaraokeMicroChild, styles.botNavKaraScreenLayout]}
        locations={[0, 1]}
        colors={["rgba(0, 0, 0, 0)", "#0b0505"]}
      />
      <View
        style={[styles.a21KaraokeMicroItem, styles.curvedChevronLeftLayout]}
      />
      <View style={[styles.botNavKaraScreen, styles.frameFlexBox]}>
        <View style={styles.botLayout}>
          <View style={styles.frameWrapper}>
            <Image
              style={styles.frameChild}
              contentFit="cover"
              source={require("../assets/frame-111.png")}
            />
          </View>
        </View>
        <Pressable
          style={styles.frameParent}
          onPress={() => navigation.navigate("A21HngDn")}
        >
          <View style={[styles.frame, styles.frameFlexBox]}>
            <Image
              style={styles.frameItem}
              contentFit="cover"
              source={require("../assets/group-53861.png")}
            />
          </View>
          <Text style={styles.nCa}>Đơn ca</Text>
        </Pressable>
        <View style={[styles.botNavKaraScreenChild, styles.botLayout]}>
          <View style={styles.frameWrapper}>
            <Image
              style={styles.frameChild}
              contentFit="cover"
              source={require("../assets/frame-112.png")}
            />
          </View>
        </View>
      </View>
      <View style={[styles.rectangleParent, styles.rectanglePosition]}>
        <Image
          style={[styles.rectangleIcon, styles.rectanglePosition]}
          contentFit="cover"
          source={require("../assets/rectangle-395501.png")}
        />
        <View style={[styles.nav, styles.navPosition]}>
          <View style={[styles.navChild, styles.navPosition]} />
          <View
            style={[styles.curvedMenuHamburgerWrapper, styles.frameFlexBox]}
          >
            <Image
              style={styles.curvedMenuHamburger}
              contentFit="cover"
              source={require("../assets/curved--menuhamburger1.png")}
            />
          </View>
        </View>
        <View style={styles.frameView}>
          <View
            style={[styles.curvedChevronLeftParent, styles.frameGroupFlexBox]}
          >
            <Pressable
              style={styles.curvedChevronLeftLayout}
              onPress={() => navigation.navigate("A1KaraDetail")}
            >
              <Image
                style={styles.icon}
                contentFit="cover"
                source={require("../assets/curved--chevronleft1.png")}
              />
            </Pressable>
            <View style={styles.rectangleGroup}>
              <Image
                style={styles.frameChild1}
                contentFit="cover"
                source={require("../assets/rectangle-39541.png")}
              />
              <Text style={styles.thngQuVit} numberOfLines={1}>
                Thương quá Việt Nam
              </Text>
            </View>
            <Pressable
              style={[styles.frameGroup, styles.frameGroupFlexBox]}
              onPress={() => navigation.navigate("A22KaraokeVideo")}
            >
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
            </Pressable>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  botNavKaraScreenLayout: {
    width: 1194,
    bottom: 0,
  },
  curvedChevronLeftLayout: {
    height: 60,
    width: 60,
  },
  frameFlexBox: {
    justifyContent: "center",
    alignItems: "center",
  },
  botLayout: {
    height: 178,
    width: 120,
  },
  rectanglePosition: {
    width: 1195,
    top: 0,
    left: 0,
    position: "absolute",
  },
  navPosition: {
    width: 157,
    top: 0,
    left: 0,
    position: "absolute",
  },
  frameGroupFlexBox: {
    alignSelf: "stretch",
    flexDirection: "row",
  },
  duotoneWrapperFlexBox: {
    padding: Padding.p_3xs,
    alignSelf: "stretch",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    flex: 1,
  },
  a21KaraokeMicroChild: {
    display: "none",
    backgroundColor: Color.lNBLACK,
    left: 0,
    width: 1194,
    bottom: 0,
    position: "absolute",
    height: 855,
  },
  a21KaraokeMicroItem: {
    top: 693,
    left: 1007,
    backgroundColor: Color.black,
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
    top: 0,
    alignItems: "center",
    left: 0,
    position: "absolute",
  },
  frameItem: {
    width: 148,
    height: 148,
  },
  frame: {
    borderRadius: Border.br_181xl,
    backgroundColor: Color.blue2,
    borderStyle: "solid",
    borderColor: Color.white,
    borderWidth: 6,
    width: 160,
    height: 160,
    transform: [
      {
        rotate: "180deg",
      },
    ],
    overflow: "hidden",
  },
  nCa: {
    fontSize: FontSize.size_41xl,
    lineHeight: 125,
    fontWeight: "800",
    fontFamily: FontFamily.sFProDisplay,
    textAlign: "center",
    marginTop: 36,
    color: Color.white,
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
    paddingHorizontal: Padding.p_241xl,
    paddingVertical: Padding.p_11xl,
    flexDirection: "row",
    left: "50%",
    justifyContent: "center",
    position: "absolute",
    width: 1194,
    bottom: 0,
  },
  rectangleIcon: {
    height: 536,
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
    left: "50%",
    justifyContent: "center",
    position: "absolute",
  },
  nav: {
    height: 168,
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  frameChild1: {
    borderRadius: Border.br_3xs,
    width: 73,
    height: 73,
  },
  thngQuVit: {
    fontSize: FontSize.bold_size,
    lineHeight: 48,
    fontWeight: "700",
    fontFamily: FontFamily.nold,
    textAlign: "left",
    marginLeft: 14,
    color: Color.white,
    overflow: "hidden",
    flex: 1,
  },
  rectangleGroup: {
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
  frameGroup: {
    backgroundColor: Color.grey1,
    width: 218,
    borderRadius: Border.br_101xl,
  },
  curvedChevronLeftParent: {
    paddingHorizontal: 0,
    paddingVertical: Padding.p_base,
    alignItems: "center",
    flex: 1,
  },
  frameView: {
    top: 24,
    left: 243,
    backgroundColor: Color.grey4,
    width: 899,
    height: 106,
    justifyContent: "space-between",
    paddingHorizontal: Padding.p_11xl,
    paddingVertical: 0,
    borderRadius: Border.br_101xl,
    alignItems: "center",
    flexDirection: "row",
    position: "absolute",
  },
  rectangleParent: {
    height: 168,
  },
  a21KaraokeMicro: {
    backgroundColor: Color.colorGray_200,
    overflow: "hidden",
    height: 855,
    width: "100%",
    flex: 1,
  },
});

export default A21KaraokeMicro;
