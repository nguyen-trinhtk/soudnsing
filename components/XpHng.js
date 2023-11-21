import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import { Padding, Border, FontFamily, FontSize, Color } from "../GlobalStyles";

const XpHng = () => {
  return (
    <View style={styles.xpHng}>
      <View style={[styles.property1top, styles.parentFlexBox1]}>
        <View style={[styles.wrapper, styles.wrapperLayout]}>
          <Text style={[styles.text, styles.textTypo]}>01</Text>
        </View>
        <View style={[styles.maskGroupParent, styles.parentFlexBox]}>
          <Image
            style={styles.maskGroupIcon}
            contentFit="cover"
            source={require("../assets/mask-group.png")}
          />
          <View style={[styles.thanhHngParent, styles.parentFlexBox]}>
            <Text style={styles.thanhHng}>Thanh Hằng</Text>
            <View style={styles.frameParent}>
              <View style={styles.parentFlexBox1}>
                <Text style={styles.aTypo}>A</Text>
                <View style={styles.parentFlexBox1}>
                  <Image
                    style={styles.duotoneStar1}
                    contentFit="cover"
                    source={require("../assets/duotone--star1.png")}
                  />
                  <Image
                    style={styles.duotoneStar11Layout}
                    contentFit="cover"
                    source={require("../assets/duotone--star11.png")}
                  />
                  <Image
                    style={styles.duotoneStar1}
                    contentFit="cover"
                    source={require("../assets/duotone--star1.png")}
                  />
                </View>
              </View>
              <View style={styles.frameGroup}>
                <View style={styles.parentFlexBox1}>
                  <View style={styles.parentFlexBox1}>
                    <Image
                      style={[
                        styles.brokenHeadphones,
                        styles.duotoneStar11Layout,
                      ]}
                      contentFit="cover"
                      source={require("../assets/broken--headphones1.png")}
                    />
                    <Text style={[styles.text1, styles.aTypo]}>1200</Text>
                  </View>
                </View>
                <View style={[styles.frameContainer, styles.parentFlexBox1]}>
                  <View style={styles.parentFlexBox1}>
                    <Image
                      style={styles.duotoneStar11Layout}
                      contentFit="cover"
                      source={require("../assets/curved--heart1.png")}
                    />
                    <Text style={[styles.text1, styles.aTypo]}>77</Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={[styles.property1nor, styles.parentFlexBox1]}>
        <View style={styles.wrapperLayout}>
          <Text style={[styles.text3, styles.textTypo]}>01</Text>
        </View>
        <View style={[styles.maskGroupParent, styles.parentFlexBox]}>
          <Image
            style={styles.maskGroupIcon}
            contentFit="cover"
            source={require("../assets/mask-group.png")}
          />
          <View style={[styles.thanhHngParent, styles.parentFlexBox]}>
            <Text style={styles.thanhHng}>Thanh Hằng</Text>
            <View style={styles.frameParent}>
              <View style={styles.parentFlexBox1}>
                <Text style={styles.aTypo}>A</Text>
                <View style={styles.parentFlexBox1}>
                  <Image
                    style={styles.duotoneStar1}
                    contentFit="cover"
                    source={require("../assets/duotone--star1.png")}
                  />
                  <Image
                    style={styles.duotoneStar11Layout}
                    contentFit="cover"
                    source={require("../assets/duotone--star11.png")}
                  />
                  <Image
                    style={styles.duotoneStar1}
                    contentFit="cover"
                    source={require("../assets/duotone--star1.png")}
                  />
                </View>
              </View>
              <View style={styles.frameGroup}>
                <View style={styles.parentFlexBox1}>
                  <View style={styles.parentFlexBox1}>
                    <Image
                      style={[
                        styles.brokenHeadphones,
                        styles.duotoneStar11Layout,
                      ]}
                      contentFit="cover"
                      source={require("../assets/broken--headphones1.png")}
                    />
                    <Text style={[styles.text1, styles.aTypo]}>1200</Text>
                  </View>
                </View>
                <View style={[styles.frameContainer, styles.parentFlexBox1]}>
                  <View style={styles.parentFlexBox1}>
                    <Image
                      style={styles.duotoneStar11Layout}
                      contentFit="cover"
                      source={require("../assets/curved--heart1.png")}
                    />
                    <Text style={[styles.text1, styles.aTypo]}>77</Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  parentFlexBox1: {
    alignItems: "center",
    flexDirection: "row",
  },
  wrapperLayout: {
    padding: Padding.p_xl,
    width: 100,
    borderRadius: Border.br_101xl,
    justifyContent: "center",
    alignItems: "center",
  },
  textTypo: {
    textAlign: "center",
    fontFamily: FontFamily.sFProDisplay,
    fontWeight: "700",
    lineHeight: 60,
    fontSize: FontSize.size_31xl,
  },
  parentFlexBox: {
    flex: 1,
    alignSelf: "stretch",
  },
  duotoneStar11Layout: {
    width: 52,
    height: 52,
  },
  aTypo: {
    fontFamily: FontFamily.nunitoRegular,
    lineHeight: 48,
    fontSize: FontSize.bold_size,
    textAlign: "left",
    color: Color.white,
  },
  text: {
    color: Color.black,
  },
  wrapper: {
    backgroundColor: Color.yelStar,
  },
  maskGroupIcon: {
    maxHeight: "100%",
    width: 150,
    alignSelf: "stretch",
  },
  thanhHng: {
    textAlign: "left",
    color: Color.white,
    fontFamily: FontFamily.sFProDisplay,
    fontWeight: "700",
    lineHeight: 60,
    fontSize: FontSize.size_31xl,
  },
  duotoneStar1: {
    width: 53,
    height: 52,
  },
  brokenHeadphones: {
    overflow: "hidden",
  },
  text1: {
    marginLeft: 6,
  },
  frameContainer: {
    justifyContent: "flex-end",
    marginLeft: 60,
  },
  frameGroup: {
    flexDirection: "row",
  },
  frameParent: {
    justifyContent: "space-between",
    marginTop: 15,
    alignSelf: "stretch",
    flexDirection: "row",
  },
  thanhHngParent: {
    marginLeft: 26,
    justifyContent: "center",
    flex: 1,
  },
  maskGroupParent: {
    marginLeft: 44,
    alignItems: "center",
    flexDirection: "row",
  },
  property1top: {
    top: 20,
    height: 150,
    width: 1080,
    left: 20,
    position: "absolute",
    alignItems: "center",
  },
  text3: {
    color: Color.grey3,
  },
  property1nor: {
    top: 190,
    height: 150,
    width: 1080,
    left: 20,
    position: "absolute",
    alignItems: "center",
  },
  xpHng: {
    borderRadius: Border.br_8xs,
    borderStyle: "dashed",
    borderColor: Color.colorBlueviolet,
    borderWidth: 1,
    width: 1174,
    height: 360,
    overflow: "hidden",
  },
});

export default XpHng;
