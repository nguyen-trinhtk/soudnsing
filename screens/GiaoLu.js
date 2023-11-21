import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Padding, Border } from "../GlobalStyles";

const GiaoLu = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.giaoLu, styles.giaoLuLayout]}>
      <View style={[styles.frameParent, styles.frameParentPosition]}>
        <View style={[styles.htParent, styles.htParentFlexBox]}>
          <Text style={styles.ht}>Đã hát</Text>
          <Text style={styles.xemTtC}>Xem tất cả</Text>
        </View>
        <View style={styles.carddaHatParent}>
          <Pressable
            style={styles.carddaLayout}
            onPress={() => navigation.navigate("A1KaraDetail")}
          >
            <View style={styles.carddaHatInner}>
              <Image
                style={[styles.frameChild, styles.giaoLuLayout]}
                contentFit="cover"
                source={require("../assets/rectangle-395311.png")}
              />
            </View>
            <View style={styles.frameGroupSpaceBlock}>
              <Text
                style={[styles.thngQuVit, styles.giaoLu1FlexBox]}
                numberOfLines={1}
              >
                Thương quá Việt Nam
              </Text>
              <Text style={[styles.quangLinh, styles.aTypo]}>Quang Linh</Text>
            </View>
            <View style={[styles.frameGroup, styles.frameGroupSpaceBlock]}>
              <View style={styles.aParent}>
                <Text style={[styles.a, styles.aTypo]}>A</Text>
                <View style={styles.aParent}>
                  <Image
                    style={styles.duotoneStar1Layout}
                    contentFit="cover"
                    source={require("../assets/duotone--star12.png")}
                  />
                  <Image
                    style={styles.duotoneStar1Layout}
                    contentFit="cover"
                    source={require("../assets/duotone--star12.png")}
                  />
                  <Image
                    style={styles.duotoneStar1Layout}
                    contentFit="cover"
                    source={require("../assets/duotone--star12.png")}
                  />
                </View>
              </View>
              <View style={styles.frameWrapper}>
                <View style={styles.aParent}>
                  <Image
                    style={[styles.brokenHeadphones, styles.duotoneStar1Layout]}
                    contentFit="cover"
                    source={require("../assets/broken--headphones2.png")}
                  />
                  <Text style={[styles.text, styles.aTypo]}>239</Text>
                </View>
              </View>
              <View style={styles.frameWrapper}>
                <View style={styles.aParent}>
                  <Image
                    style={styles.duotoneStar1Layout}
                    contentFit="cover"
                    source={require("../assets/curved--heart2.png")}
                  />
                  <Text style={[styles.text, styles.aTypo]}>34</Text>
                </View>
              </View>
            </View>
          </Pressable>
          <View style={[styles.carddaHat1, styles.carddaLayout]}>
            <View style={styles.carddaHatInner}>
              <Image
                style={[styles.frameChild, styles.giaoLuLayout]}
                contentFit="cover"
                source={require("../assets/rectangle-3953181.png")}
              />
            </View>
            <View style={styles.frameGroupSpaceBlock}>
              <Text
                style={[styles.thngQuVit, styles.giaoLu1FlexBox]}
                numberOfLines={1}
              >
                Tình thắm duyên quê
              </Text>
              <Text style={[styles.quangLinh, styles.aTypo]}>Quang Linh</Text>
            </View>
            <View style={[styles.frameGroup, styles.frameGroupSpaceBlock]}>
              <View style={styles.aParent}>
                <Text style={[styles.a, styles.aTypo]}>A</Text>
                <View style={styles.aParent}>
                  <Image
                    style={styles.duotoneStar1Layout}
                    contentFit="cover"
                    source={require("../assets/duotone--star12.png")}
                  />
                  <Image
                    style={styles.duotoneStar1Layout}
                    contentFit="cover"
                    source={require("../assets/duotone--star12.png")}
                  />
                  <Image
                    style={styles.duotoneStar1Layout}
                    contentFit="cover"
                    source={require("../assets/duotone--star12.png")}
                  />
                </View>
              </View>
              <View style={styles.frameWrapper}>
                <View style={styles.aParent}>
                  <Image
                    style={[styles.brokenHeadphones, styles.duotoneStar1Layout]}
                    contentFit="cover"
                    source={require("../assets/broken--headphones2.png")}
                  />
                  <Text style={[styles.text, styles.aTypo]}>239</Text>
                </View>
              </View>
              <View style={styles.frameWrapper}>
                <View style={styles.aParent}>
                  <Image
                    style={styles.duotoneStar1Layout}
                    contentFit="cover"
                    source={require("../assets/curved--heart2.png")}
                  />
                  <Text style={[styles.text, styles.aTypo]}>34</Text>
                </View>
              </View>
            </View>
          </View>
          <View style={[styles.carddaHat1, styles.carddaLayout]}>
            <View style={styles.carddaHatInner}>
              <Image
                style={[styles.frameChild, styles.giaoLuLayout]}
                contentFit="cover"
                source={require("../assets/rectangle-395319.png")}
              />
            </View>
            <View style={styles.frameGroupSpaceBlock}>
              <Text
                style={[styles.thngQuVit, styles.giaoLu1FlexBox]}
                numberOfLines={1}
              >
                Đồng Tháp Quê Mình
              </Text>
              <Text style={[styles.quangLinh, styles.aTypo]}>Quang Linh</Text>
            </View>
            <View style={[styles.frameGroup, styles.frameGroupSpaceBlock]}>
              <View style={styles.aParent}>
                <Text style={[styles.a, styles.aTypo]}>A</Text>
                <View style={styles.aParent}>
                  <Image
                    style={styles.duotoneStar1Layout}
                    contentFit="cover"
                    source={require("../assets/duotone--star12.png")}
                  />
                  <Image
                    style={styles.duotoneStar1Layout}
                    contentFit="cover"
                    source={require("../assets/duotone--star12.png")}
                  />
                  <Image
                    style={styles.duotoneStar1Layout}
                    contentFit="cover"
                    source={require("../assets/duotone--star12.png")}
                  />
                </View>
              </View>
              <View style={styles.frameWrapper}>
                <View style={styles.aParent}>
                  <Image
                    style={[styles.brokenHeadphones, styles.duotoneStar1Layout]}
                    contentFit="cover"
                    source={require("../assets/broken--headphones2.png")}
                  />
                  <Text style={[styles.text, styles.aTypo]}>239</Text>
                </View>
              </View>
              <View style={styles.frameWrapper}>
                <View style={styles.aParent}>
                  <Image
                    style={styles.duotoneStar1Layout}
                    contentFit="cover"
                    source={require("../assets/curved--heart2.png")}
                  />
                  <Text style={[styles.text, styles.aTypo]}>34</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={[styles.frameParent2, styles.frameParentPosition]}>
        <View style={[styles.htParent, styles.htParentFlexBox]}>
          <Text style={styles.ht}>Gợi ý cho bạn</Text>
          <Text style={styles.xemTtC}>Xem tất cả</Text>
        </View>
        <View style={styles.carddaHatParent}>
          <View style={styles.frameParentLayout}>
            <View style={styles.carddaHatInner}>
              <Image
                style={[styles.frameChild, styles.giaoLuLayout]}
                contentFit="cover"
                source={require("../assets/rectangle-3953110.png")}
              />
            </View>
            <View style={styles.frameGroupSpaceBlock}>
              <Text
                style={[styles.conNgTnh, styles.giaoLu1FlexBox]}
                numberOfLines={2}
              >
                Con đường tình yêu
              </Text>
              <Text style={[styles.quangLinh, styles.aTypo]}>Quang Linh</Text>
            </View>
            <View style={[styles.frameGroup, styles.frameGroupSpaceBlock]}>
              <View style={styles.aParent}>
                <Text style={[styles.a, styles.aTypo]}>A</Text>
                <View style={styles.aParent}>
                  <Image
                    style={styles.duotoneStar1Layout}
                    contentFit="cover"
                    source={require("../assets/duotone--star12.png")}
                  />
                  <Image
                    style={styles.duotoneStar1Layout}
                    contentFit="cover"
                    source={require("../assets/duotone--star12.png")}
                  />
                  <Image
                    style={styles.duotoneStar1Layout}
                    contentFit="cover"
                    source={require("../assets/duotone--star12.png")}
                  />
                </View>
              </View>
              <View style={styles.frameWrapper}>
                <View style={styles.aParent}>
                  <Image
                    style={[styles.brokenHeadphones, styles.duotoneStar1Layout]}
                    contentFit="cover"
                    source={require("../assets/broken--headphones2.png")}
                  />
                  <Text style={[styles.text, styles.aTypo]}>239</Text>
                </View>
              </View>
              <View style={styles.frameWrapper}>
                <View style={styles.aParent}>
                  <Image
                    style={styles.duotoneStar1Layout}
                    contentFit="cover"
                    source={require("../assets/curved--heart2.png")}
                  />
                  <Text style={[styles.text, styles.aTypo]}>34</Text>
                </View>
              </View>
            </View>
          </View>
          <View style={[styles.frameParent6, styles.frameParentLayout]}>
            <View style={styles.carddaHatInner}>
              <Image
                style={[styles.frameChild, styles.giaoLuLayout]}
                contentFit="cover"
                source={require("../assets/rectangle-3953111.png")}
              />
            </View>
            <View style={styles.frameGroupSpaceBlock}>
              <Text
                style={[styles.conNgTnh, styles.giaoLu1FlexBox]}
                numberOfLines={2}
              >
                Tân dòng sông ly biệt
              </Text>
              <Text style={[styles.quangLinh, styles.aTypo]}>Quang Linh</Text>
            </View>
            <View style={[styles.frameGroup, styles.frameGroupSpaceBlock]}>
              <View style={styles.aParent}>
                <Text style={[styles.a, styles.aTypo]}>A</Text>
                <View style={styles.aParent}>
                  <Image
                    style={styles.duotoneStar1Layout}
                    contentFit="cover"
                    source={require("../assets/duotone--star12.png")}
                  />
                  <Image
                    style={styles.duotoneStar1Layout}
                    contentFit="cover"
                    source={require("../assets/duotone--star12.png")}
                  />
                  <Image
                    style={styles.duotoneStar1Layout}
                    contentFit="cover"
                    source={require("../assets/duotone--star12.png")}
                  />
                </View>
              </View>
              <View style={styles.frameWrapper}>
                <View style={styles.aParent}>
                  <Image
                    style={[styles.brokenHeadphones, styles.duotoneStar1Layout]}
                    contentFit="cover"
                    source={require("../assets/broken--headphones2.png")}
                  />
                  <Text style={[styles.text, styles.aTypo]}>239</Text>
                </View>
              </View>
              <View style={styles.frameWrapper}>
                <View style={styles.aParent}>
                  <Image
                    style={styles.duotoneStar1Layout}
                    contentFit="cover"
                    source={require("../assets/curved--heart2.png")}
                  />
                  <Text style={[styles.text, styles.aTypo]}>34</Text>
                </View>
              </View>
            </View>
          </View>
          <View style={[styles.frameParent6, styles.frameParentLayout]}>
            <View style={styles.carddaHatInner}>
              <Image
                style={[styles.frameChild, styles.giaoLuLayout]}
                contentFit="cover"
                source={require("../assets/rectangle-3953112.png")}
              />
            </View>
            <View style={styles.frameGroupSpaceBlock}>
              <Text
                style={[styles.conNgTnh, styles.giaoLu1FlexBox]}
                numberOfLines={2}
              >
                Thương quá Việt Nam
              </Text>
              <Text style={[styles.quangLinh, styles.aTypo]}>Quang Linh</Text>
            </View>
            <View style={[styles.frameGroup, styles.frameGroupSpaceBlock]}>
              <View style={styles.aParent}>
                <Text style={[styles.a, styles.aTypo]}>A</Text>
                <View style={styles.aParent}>
                  <Image
                    style={styles.duotoneStar1Layout}
                    contentFit="cover"
                    source={require("../assets/duotone--star12.png")}
                  />
                  <Image
                    style={styles.duotoneStar1Layout}
                    contentFit="cover"
                    source={require("../assets/duotone--star12.png")}
                  />
                  <Image
                    style={styles.duotoneStar1Layout}
                    contentFit="cover"
                    source={require("../assets/duotone--star12.png")}
                  />
                </View>
              </View>
              <View style={styles.frameWrapper}>
                <View style={styles.aParent}>
                  <Image
                    style={[styles.brokenHeadphones, styles.duotoneStar1Layout]}
                    contentFit="cover"
                    source={require("../assets/broken--headphones2.png")}
                  />
                  <Text style={[styles.text, styles.aTypo]}>239</Text>
                </View>
              </View>
              <View style={styles.frameWrapper}>
                <View style={styles.aParent}>
                  <Image
                    style={styles.duotoneStar1Layout}
                    contentFit="cover"
                    source={require("../assets/curved--heart2.png")}
                  />
                  <Text style={[styles.text, styles.aTypo]}>34</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={[styles.frameParent10, styles.frameParentPosition]}>
        <View style={[styles.htParent, styles.htParentFlexBox]}>
          <Text style={styles.ht}>Thể loại</Text>
          <Text style={styles.xemTtC}>Xem tất cả</Text>
        </View>
        <View style={styles.carddaHatParent}>
          <View style={styles.cardLayout}>
            <Image
              style={styles.cardChild}
              contentFit="cover"
              source={require("../assets/rectangle-8.png")}
            />
            <View style={[styles.cardItem, styles.cardPosition]} />
            <View style={[styles.cchMngWrapper, styles.wrapperFlexBox]}>
              <Text style={styles.cchTypo}>Cách mạng</Text>
            </View>
          </View>
          <View style={[styles.card1, styles.cardLayout]}>
            <Image
              style={styles.cardChild}
              contentFit="cover"
              source={require("../assets/rectangle-83.png")}
            />
            <View style={[styles.rectangleView, styles.cardPosition]} />
            <View style={[styles.cchMngWrapper, styles.wrapperFlexBox]}>
              <Text style={styles.cchTypo}>Trữ tình</Text>
            </View>
          </View>
          <View style={[styles.card2, styles.cardLayout]}>
            <Image
              style={styles.cardChild}
              contentFit="cover"
              source={require("../assets/rectangle-84.png")}
            />
            <View style={[styles.cardChild2, styles.cardPosition]} />
            <View style={[styles.cchMngWrapper, styles.wrapperFlexBox]}>
              <Text style={styles.cchTypo}>Vọng cổ</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.giaoLuChild} />
      <Text style={[styles.giaoLu1, styles.giaoLu1FlexBox]}>Giao lưu</Text>
      <View style={styles.navPosition}>
        <View style={[styles.navChild, styles.navPosition]} />
        <View
          style={[styles.curvedMenuHamburgerWrapper, styles.wrapperFlexBox]}
        >
          <Image
            style={styles.curvedMenuHamburger}
            contentFit="cover"
            source={require("../assets/curved--menuhamburger1.png")}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  giaoLuLayout: {
    width: "100%",
    flex: 1,
  },
  frameParentPosition: {
    left: 199,
    position: "absolute",
  },
  htParentFlexBox: {
    justifyContent: "space-between",
    flexDirection: "row",
  },
  giaoLu1FlexBox: {
    textAlign: "left",
    color: Color.white,
  },
  aTypo: {
    fontFamily: FontFamily.nunitoRegular,
    lineHeight: 29,
    fontSize: FontSize.size_5xl,
    textAlign: "left",
  },
  frameGroupSpaceBlock: {
    marginTop: 19,
    alignSelf: "stretch",
  },
  duotoneStar1Layout: {
    height: 24,
    width: 24,
  },
  carddaLayout: {
    padding: Padding.p_sm,
    height: 420,
    width: 305,
    borderWidth: 8,
    borderColor: Color.colorNavy,
    borderStyle: "solid",
    backgroundColor: Color.colorMidnightblue,
    borderRadius: Border.br_sm,
  },
  frameParentLayout: {
    width: 289,
    backgroundColor: Color.colorGray_100,
    padding: Padding.p_sm,
    borderRadius: Border.br_sm,
  },
  cardPosition: {
    height: 221,
    width: 436,
    left: 415,
    top: 4,
    transform: [
      {
        rotate: "90deg",
      },
    ],
    position: "absolute",
  },
  wrapperFlexBox: {
    justifyContent: "center",
    left: "50%",
    alignItems: "center",
    position: "absolute",
  },
  cardLayout: {
    transform: [
      {
        rotate: "90deg",
      },
    ],
    height: 290,
    width: 290,
    borderRadius: Border.br_xl,
    overflow: "hidden",
  },
  navPosition: {
    width: 157,
    height: 168,
    left: 0,
    top: 0,
    position: "absolute",
  },
  ht: {
    fontSize: FontSize.size_31xl,
    lineHeight: 60,
    textAlign: "center",
    color: Color.white,
    fontFamily: FontFamily.sFProDisplay,
    fontWeight: "700",
  },
  xemTtC: {
    fontSize: FontSize.size_17xl,
    lineHeight: 43,
    color: Color.colorDarkgray_200,
    textAlign: "right",
    fontFamily: FontFamily.sFProDisplay,
    fontWeight: "700",
  },
  htParent: {
    alignItems: "flex-end",
    alignSelf: "stretch",
  },
  frameChild: {
    maxWidth: "100%",
    maxHeight: "100%",
    overflow: "hidden",
    alignSelf: "stretch",
  },
  carddaHatInner: {
    borderRadius: Border.br_3xs,
    height: 190,
    overflow: "hidden",
    flexDirection: "row",
    alignSelf: "stretch",
  },
  thngQuVit: {
    height: 76,
    fontFamily: FontFamily.nold,
    lineHeight: 38,
    fontSize: FontSize.size_13xl,
    textAlign: "left",
    overflow: "hidden",
    fontWeight: "700",
    alignSelf: "stretch",
  },
  quangLinh: {
    color: Color.colorDarkgray_100,
    marginTop: 14,
    alignSelf: "stretch",
  },
  a: {
    color: Color.white,
    lineHeight: 29,
    fontSize: FontSize.size_5xl,
  },
  aParent: {
    alignItems: "center",
    flexDirection: "row",
  },
  brokenHeadphones: {
    overflow: "hidden",
  },
  text: {
    marginLeft: 6,
    color: Color.white,
    lineHeight: 29,
    fontSize: FontSize.size_5xl,
  },
  frameWrapper: {
    justifyContent: "flex-end",
    flexDirection: "row",
  },
  frameGroup: {
    justifyContent: "space-between",
    flexDirection: "row",
  },
  carddaHat1: {
    marginLeft: 44,
  },
  carddaHatParent: {
    marginTop: 40,
    flexDirection: "row",
  },
  frameParent: {
    top: 206,
  },
  conNgTnh: {
    fontFamily: FontFamily.nold,
    lineHeight: 38,
    fontSize: FontSize.size_13xl,
    textAlign: "left",
    overflow: "hidden",
    fontWeight: "700",
    alignSelf: "stretch",
  },
  frameParent6: {
    marginLeft: 44,
  },
  frameParent2: {
    top: 770,
  },
  cardChild: {
    marginLeft: -145,
    bottom: -290,
    left: "50%",
    height: 290,
    width: 290,
    borderRadius: Border.br_xl,
    position: "absolute",
  },
  cardItem: {
    backgroundColor: Color.colorCrimson,
  },
  cchTypo: {
    width: 212,
    color: Color.black,
    fontFamily: FontFamily.nunitoBlack,
    fontWeight: "900",
    lineHeight: 48,
    fontSize: FontSize.bold_size,
    transform: [
      {
        rotate: "90deg",
      },
    ],
    textAlign: "center",
    flex: 1,
  },
  cchMngWrapper: {
    marginLeft: 49,
    bottom: 29,
    height: 232,
    paddingLeft: Padding.p_3xs,
    paddingTop: Padding.p_3xs,
    paddingRight: Padding.p_19xl,
    paddingBottom: Padding.p_3xs,
  },
  rectangleView: {
    backgroundColor: Color.colorDarksalmon,
  },
  card1: {
    marginLeft: 44,
  },
  cardChild2: {
    backgroundColor: Color.colorGoldenrod_100,
  },
  card2: {
    marginLeft: 44,
  },
  frameParent10: {
    top: 1334,
    width: 955,
    height: 515,
  },
  giaoLuChild: {
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    width: 1194,
    height: 168,
    left: 0,
    top: 0,
    backgroundColor: Color.colorGray_100,
    position: "absolute",
  },
  giaoLu1: {
    top: 54,
    fontSize: FontSize.size_45xl,
    lineHeight: 77,
    fontWeight: "800",
    fontFamily: FontFamily.sFProDisplay,
    left: 199,
    position: "absolute",
  },
  navChild: {
    backgroundColor: Color.blue2,
  },
  curvedMenuHamburger: {
    width: 100,
    height: 100,
  },
  curvedMenuHamburgerWrapper: {
    marginTop: -54,
    marginLeft: -49.5,
    top: "50%",
  },
  giaoLu: {
    backgroundColor: Color.black,
    height: 834,
  },
});

export default GiaoLu;
