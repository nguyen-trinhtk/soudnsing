import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Color, FontSize, FontFamily, Border, Padding } from "../GlobalStyles";

const HOME = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.home}>
      <View style={[styles.homeChild, styles.frameParentShadowBox]} />
      <View style={styles.frameChildPosition}>
        <View style={[styles.frameChild, styles.frameChildPosition]} />
        <View style={styles.frameParent}>
          <View style={styles.frameGroup}>
            <View style={styles.curvedParentFlexBox}>
              <Image
                style={styles.curvedHome1Layout}
                contentFit="cover"
                source={require("../assets/curved--home121.png")}
              />
              <Image
                style={styles.frameLayout}
                contentFit="cover"
                source={require("../assets/ellipse-31.png")}
              />
            </View>
            <View
              style={[styles.curvedTrophyParent, styles.curvedParentFlexBox]}
            >
              <View style={styles.curvedHome1Layout}>
                <View style={styles.shapeParent}>
                  <Image
                    style={styles.shapeIcon}
                    contentFit="cover"
                    source={require("../assets/shape1.png")}
                  />
                  <View style={[styles.wrapper, styles.curvedParentFlexBox]}>
                    <Text style={[styles.text, styles.htTypo1]}>01</Text>
                  </View>
                </View>
              </View>
              <Image
                style={[styles.frameInner, styles.frameLayout]}
                contentFit="cover"
                source={require("../assets/ellipse-31.png")}
              />
            </View>
            <View
              style={[styles.curvedTrophyParent, styles.curvedParentFlexBox]}
            >
              <Image
                style={[styles.speakerHngDn, styles.curvedHome1Layout]}
                contentFit="cover"
                source={require("../assets/speaker-hng-dn11.png")}
              />
              <Image
                style={[styles.frameInner, styles.frameLayout]}
                contentFit="cover"
                source={require("../assets/ellipse-31.png")}
              />
            </View>
          </View>
          <Image
            style={styles.frameIcon}
            contentFit="cover"
            source={require("../assets/frame-66.png")}
          />
        </View>
      </View>
      <View style={styles.frameContainer}>
        <View style={styles.frameView}>
          <Pressable
            style={[styles.framePressable, styles.frameParentShadowBox]}
            onPress={() => navigation.navigate("AHt")}
          >
            <View style={[styles.frameWrapper, styles.rectangleLayout]}>
              <View style={styles.rectangleLayout}>
                <View style={[styles.rectangleView, styles.rectangleLayout]} />
                <Image
                  style={[styles.image2Icon, styles.iconPosition]}
                  contentFit="cover"
                  source={require("../assets/image-21.png")}
                />
              </View>
            </View>
            <Text style={[styles.ht, styles.htTypo]}>Hát</Text>
          </Pressable>
          <View style={[styles.frameParent1, styles.frameParentSpaceBlock]}>
            <View style={[styles.frameWrapper, styles.rectangleLayout]}>
              <View style={styles.rectangleLayout}>
                <View style={[styles.rectangleView, styles.rectangleLayout]} />
                <Image
                  style={[styles.image3Icon, styles.iconPosition]}
                  contentFit="cover"
                  source={require("../assets/image-3.png")}
                />
              </View>
            </View>
            <Text style={[styles.ht, styles.htTypo]}>Luyện tập</Text>
          </View>
          <View style={[styles.frameParent2, styles.frameParentSpaceBlock]}>
            <View style={[styles.frameWrapper, styles.rectangleLayout]}>
              <View style={styles.rectangleLayout}>
                <View style={[styles.rectangleView, styles.rectangleLayout]} />
                <Image
                  style={[styles.image4Icon, styles.iconPosition]}
                  contentFit="cover"
                  source={require("../assets/image-4.png")}
                />
              </View>
            </View>
            <Text style={[styles.ht, styles.htTypo]}>Giao lưu</Text>
          </View>
        </View>
        <View style={styles.frameParent3}>
          <View style={styles.frameParent4}>
            <View style={[styles.frameWrapper, styles.rectangleLayout]}>
              <View style={styles.rectangleLayout}>
                <View style={[styles.rectangleView, styles.rectangleLayout]} />
                <Image
                  style={[styles.image5Icon, styles.iconPosition]}
                  contentFit="cover"
                  source={require("../assets/image-5.png")}
                />
              </View>
            </View>
            <Text style={[styles.trLiu, styles.trLiuFlexBox]}>Trị liệu</Text>
          </View>
          <View style={styles.frameParentSpaceBlock}>
            <View style={[styles.frameWrapper, styles.rectangleLayout]}>
              <View style={styles.rectangleLayout}>
                <View style={[styles.rectangleView, styles.rectangleLayout]} />
                <Image
                  style={[styles.image6Icon, styles.iconPosition]}
                  contentFit="cover"
                  source={require("../assets/image-6.png")}
                />
              </View>
            </View>
            <Text style={[styles.ht, styles.htTypo]}>Cá nhân</Text>
          </View>
          <View style={styles.frameParentSpaceBlock}>
            <View style={[styles.frameWrapper, styles.rectangleLayout]}>
              <Image
                style={styles.rectangleLayout}
                contentFit="cover"
                source={require("../assets/frame-571.png")}
              />
            </View>
            <Text style={[styles.ht, styles.htTypo]}>Cài đặt</Text>
          </View>
        </View>
      </View>
      <Text style={[styles.soudNSing, styles.trLiuFlexBox]}>SOUD N’ SING</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  frameParentShadowBox: {
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
  },
  frameChildPosition: {
    width: 157,
    left: 0,
    top: 0,
    position: "absolute",
    height: 834,
  },
  curvedParentFlexBox: {
    justifyContent: "center",
    alignItems: "center",
  },
  htTypo1: {
    textAlign: "center",
    fontWeight: "700",
  },
  frameLayout: {
    height: 22,
    width: 22,
  },
  curvedHome1Layout: {
    height: 100,
    width: 100,
  },
  rectangleLayout: {
    height: 212,
    width: 212,
  },
  iconPosition: {
    top: "50%",
    left: "50%",
    position: "absolute",
  },
  htTypo: {
    marginTop: 14,
    color: Color.black,
    lineHeight: 58,
    fontSize: FontSize.nold_size,
    fontFamily: FontFamily.nold,
  },
  frameParentSpaceBlock: {
    marginLeft: 40,
    width: 288,
    alignItems: "center",
  },
  trLiuFlexBox: {
    display: "flex",
    textAlign: "center",
    fontWeight: "700",
    justifyContent: "center",
    alignItems: "center",
  },
  homeChild: {
    width: 1194,
    height: 168,
    left: 0,
    top: 0,
    position: "absolute",
    backgroundColor: Color.white,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
  },
  frameChild: {
    backgroundColor: Color.mainBlue,
  },
  shapeIcon: {
    height: "94.09%",
    width: "104.64%",
    top: "8.43%",
    right: "-1.99%",
    bottom: "-2.52%",
    left: "-2.65%",
    maxWidth: "100%",
    maxHeight: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  text: {
    fontSize: FontSize.size_mini,
    lineHeight: 15,
    color: Color.white,
    fontFamily: FontFamily.nold,
    textAlign: "center",
    fontWeight: "700",
  },
  wrapper: {
    height: "31.45%",
    top: "0%",
    right: 0,
    bottom: "68.55%",
    borderRadius: Border.br_19xl,
    backgroundColor: Color.colorRed,
    width: 25,
    padding: Padding.p_3xs,
    flexDirection: "row",
    position: "absolute",
  },
  shapeParent: {
    height: "79.5%",
    width: "75.5%",
    top: "8%",
    right: "12%",
    bottom: "12.5%",
    left: "12.5%",
    position: "absolute",
  },
  frameInner: {
    display: "none",
  },
  curvedTrophyParent: {
    marginTop: 70,
  },
  speakerHngDn: {
    borderRadius: Border.br_219xl,
  },
  frameGroup: {
    top: 199,
    left: 6,
    position: "absolute",
  },
  frameIcon: {
    top: -3,
    left: -3,
    borderRadius: Border.br_xl,
    width: 118,
    height: 118,
    position: "absolute",
    overflow: "hidden",
  },
  frameParent: {
    top: 34,
    left: 28,
    width: 112,
    height: 661,
    position: "absolute",
  },
  rectangleView: {
    borderRadius: Border.br_11xl,
    backgroundColor: Color.lightYellow,
    left: 0,
    top: 0,
    position: "absolute",
  },
  image2Icon: {
    marginTop: -106,
    marginLeft: -106,
    height: 212,
    width: 212,
  },
  frameWrapper: {
    flexDirection: "row",
    alignItems: "center",
  },
  ht: {
    textAlign: "center",
    fontWeight: "700",
    marginTop: 14,
    color: Color.black,
    lineHeight: 58,
    fontSize: FontSize.nold_size,
  },
  framePressable: {
    width: 288,
    alignItems: "center",
  },
  image3Icon: {
    marginTop: -116,
    marginLeft: -125,
    width: 249,
    height: 233,
  },
  frameParent1: {
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
  },
  image4Icon: {
    marginTop: -98,
    marginLeft: -97,
    width: 193,
    height: 197,
  },
  frameParent2: {
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
  },
  frameView: {
    flexDirection: "row",
  },
  image5Icon: {
    marginTop: -92,
    marginLeft: -94,
    width: 187,
    height: 184,
  },
  trLiu: {
    marginTop: 14,
    color: Color.black,
    lineHeight: 58,
    fontSize: FontSize.nold_size,
    fontFamily: FontFamily.nold,
    width: 288,
  },
  frameParent4: {
    width: 288,
    alignItems: "center",
  },
  image6Icon: {
    marginTop: -112,
    marginLeft: -101,
    width: 207,
    height: 224,
  },
  frameParent3: {
    marginTop: 37,
    flexDirection: "row",
  },
  frameContainer: {
    marginLeft: -392,
    top: 198,
    left: "50%",
    position: "absolute",
  },
  soudNSing: {
    top: -79,
    left: 291,
    fontSize: FontSize.size_51xl,
    lineHeight: 98,
    fontFamily: FontFamily.lexendBold,
    color: Color.mainBlue,
    width: 771,
    height: 327,
    position: "absolute",
  },
  home: {
    flex: 1,
    width: "100%",
    overflow: "hidden",
    height: 834,
    backgroundColor: Color.white,
  },
});

export default HOME;
