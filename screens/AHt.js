import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Padding, Border } from "../GlobalStyles";

const AHt = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.aHt, styles.aHtLayout]}>
      <View style={[styles.frameParent, styles.frameParentPosition]}>
        <View style={[styles.htParent, styles.htParentFlexBox]}>
          <Text style={[styles.ht, styles.htTypo]}>Đã hát</Text>
          <Text style={styles.xemTtC}>Xem tất cả</Text>
        </View>
        <View style={styles.carddaHatParent}>
          <Pressable
            style={styles.carddaLayout}
            onPress={() => navigation.navigate("A1KaraDetail")}
          >
            <View style={styles.carddaHatInner}>
              <Image
                style={[styles.frameChild, styles.aHtLayout]}
                contentFit="cover"
                source={require("../assets/rectangle-395311.png")}
              />
            </View>
            <View style={styles.frameGroupSpaceBlock}>
              <Text
                style={[styles.thngQuVit, styles.conNgTnhTypo]}
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
                style={[styles.frameChild, styles.aHtLayout]}
                contentFit="cover"
                source={require("../assets/rectangle-395318.png")}
              />
            </View>
            <View style={styles.frameGroupSpaceBlock}>
              <Text
                style={[styles.thngQuVit, styles.conNgTnhTypo]}
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
                style={[styles.frameChild, styles.aHtLayout]}
                contentFit="cover"
                source={require("../assets/rectangle-395319.png")}
              />
            </View>
            <View style={styles.frameGroupSpaceBlock}>
              <Text
                style={[styles.thngQuVit, styles.conNgTnhTypo]}
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
          <Text style={[styles.ht, styles.htTypo]}>Gợi ý cho bạn</Text>
          <Text style={styles.xemTtC}>Xem tất cả</Text>
        </View>
        <View style={styles.carddaHatParent}>
          <View style={styles.frameParentLayout}>
            <View style={styles.carddaHatInner}>
              <Image
                style={[styles.frameChild, styles.aHtLayout]}
                contentFit="cover"
                source={require("../assets/rectangle-3953110.png")}
              />
            </View>
            <View style={styles.frameGroupSpaceBlock}>
              <Text style={styles.conNgTnhTypo} numberOfLines={2}>
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
                style={[styles.frameChild, styles.aHtLayout]}
                contentFit="cover"
                source={require("../assets/rectangle-3953111.png")}
              />
            </View>
            <View style={styles.frameGroupSpaceBlock}>
              <Text style={styles.conNgTnhTypo} numberOfLines={2}>
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
                style={[styles.frameChild, styles.aHtLayout]}
                contentFit="cover"
                source={require("../assets/rectangle-3953112.png")}
              />
            </View>
            <View style={styles.frameGroupSpaceBlock}>
              <Text style={styles.conNgTnhTypo} numberOfLines={2}>
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
          <Text style={[styles.ht, styles.htTypo]}>Thể loại</Text>
          <Text style={styles.xemTtC}>Xem tất cả</Text>
        </View>
        <View style={styles.carddaHatParent}>
          <View style={styles.cardLayout}>
            <Image
              style={[styles.cardChild, styles.cardChildPosition]}
              contentFit="cover"
              source={require("../assets/rectangle-8.png")}
            />
            <View style={[styles.cardItem, styles.cardPosition]} />
            <View style={[styles.cchMngWrapper, styles.cchMngWrapperFlexBox]}>
              <Text style={styles.cchTypo}>Cách mạng</Text>
            </View>
          </View>
          <View style={[styles.card1, styles.cardLayout]}>
            <Image
              style={[styles.cardChild, styles.cardChildPosition]}
              contentFit="cover"
              source={require("../assets/rectangle-83.png")}
            />
            <View style={[styles.rectangleView, styles.cardPosition]} />
            <View style={[styles.cchMngWrapper, styles.cchMngWrapperFlexBox]}>
              <Text style={styles.cchTypo}>Trữ tình</Text>
            </View>
          </View>
          <View style={[styles.card2, styles.cardLayout]}>
            <Image
              style={[styles.cardChild, styles.cardChildPosition]}
              contentFit="cover"
              source={require("../assets/rectangle-84.png")}
            />
            <View style={[styles.cardChild2, styles.cardPosition]} />
            <View style={[styles.cchMngWrapper, styles.cchMngWrapperFlexBox]}>
              <Text style={styles.cchTypo}>Vọng cổ</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={[styles.aHtChild, styles.childPosition]} />
      <Text style={[styles.ht1, styles.htTypo]}>HÁT</Text>
      <View style={[styles.nav, styles.childPosition]}>
        <Image
          style={[styles.nav, styles.childPosition]}
          contentFit="cover"
          source={require("../assets/rectangle-395141.png")}
        />
        <View style={styles.frameParent11}>
          <View style={styles.rectangleParent}>
            <View style={[styles.frameChild3, styles.frameLayout]} />
            <Image
              style={[styles.image2Icon, styles.cardChildPosition]}
              contentFit="cover"
              source={require("../assets/image-2.png")}
            />
          </View>
          <Image
            style={[styles.frameIcon, styles.frameLayout]}
            contentFit="cover"
            source={require("../assets/frame-71.png")}
          />
          <Pressable
            style={[styles.curvedHome1Parent, styles.cchMngWrapperFlexBox]}
            onPress={() => navigation.navigate("HOME1")}
          >
            <Image
              style={styles.frameLayout}
              contentFit="cover"
              source={require("../assets/curved--home13.png")}
            />
            <Image
              style={styles.ellipseIconLayout}
              contentFit="cover"
              source={require("../assets/ellipse-3.png")}
            />
          </Pressable>
          <View style={[styles.curvedHome1Parent, styles.cchMngWrapperFlexBox]}>
            <Image
              style={styles.frameLayout}
              contentFit="cover"
              source={require("../assets/curved--search1.png")}
            />
            <Image
              style={styles.ellipseIconLayout}
              contentFit="cover"
              source={require("../assets/ellipse-3.png")}
            />
          </View>
          <View style={[styles.curvedHome1Parent, styles.cchMngWrapperFlexBox]}>
            <Image
              style={[styles.speakerHngDn, styles.frameLayout]}
              contentFit="cover"
              source={require("../assets/speaker-hng-dn2.png")}
            />
            <Image
              style={[styles.frameChild5, styles.ellipseIconLayout]}
              contentFit="cover"
              source={require("../assets/ellipse-31.png")}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  aHtLayout: {
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
  htTypo: {
    textAlign: "center",
    color: Color.white,
    fontFamily: FontFamily.sFProDisplay,
  },
  conNgTnhTypo: {
    textAlign: "left",
    fontFamily: FontFamily.bold,
    lineHeight: 38,
    fontSize: FontSize.size_13xl,
    overflow: "hidden",
    color: Color.white,
    fontWeight: "700",
    alignSelf: "stretch",
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
    backgroundColor: Color.colorMidnightblue,
    borderRadius: Border.br_sm,
    borderStyle: "solid",
  },
  frameParentLayout: {
    width: 289,
    backgroundColor: Color.colorGray_100,
    padding: Padding.p_sm,
    borderRadius: Border.br_sm,
  },
  cardChildPosition: {
    left: "50%",
    position: "absolute",
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
  cchMngWrapperFlexBox: {
    justifyContent: "center",
    alignItems: "center",
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
  childPosition: {
    left: 0,
    top: 0,
    position: "absolute",
  },
  frameLayout: {
    height: 100,
    width: 100,
  },
  ellipseIconLayout: {
    height: 22,
    width: 22,
  },
  ht: {
    fontSize: FontSize.size_31xl,
    lineHeight: 60,
    fontWeight: "700",
    textAlign: "center",
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
  frameParent6: {
    marginLeft: 44,
  },
  frameParent2: {
    top: 770,
  },
  cardChild: {
    marginLeft: -145,
    bottom: -290,
    height: 290,
    width: 290,
    borderRadius: Border.br_xl,
    left: "50%",
  },
  cardItem: {
    backgroundColor: "#e9142a",
  },
  cchTypo: {
    width: 212,
    color: Color.black,
    fontFamily: FontFamily.black,
    fontWeight: "900",
    lineHeight: 48,
    fontSize: FontSize.black_size,
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
    left: "50%",
    position: "absolute",
  },
  rectangleView: {
    backgroundColor: "#c87d55",
  },
  card1: {
    marginLeft: 44,
  },
  cardChild2: {
    backgroundColor: "#fec762",
  },
  card2: {
    marginLeft: 44,
  },
  frameParent10: {
    top: 1334,
    width: 955,
    height: 515,
  },
  aHtChild: {
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
    backgroundColor: Color.colorGray_100,
    top: 0,
  },
  ht1: {
    top: 54,
    left: 208,
    fontSize: 64,
    lineHeight: 77,
    fontWeight: "800",
    position: "absolute",
  },
  nav: {
    width: 157,
    height: 855,
  },
  frameChild3: {
    borderRadius: Border.br_116xl,
    backgroundColor: Color.white,
    borderColor: Color.white,
    borderWidth: 4,
    left: 0,
    top: 0,
    position: "absolute",
    borderStyle: "solid",
    height: 100,
  },
  image2Icon: {
    marginTop: -49,
    marginLeft: -23,
    top: "50%",
    width: 45,
    height: 77,
  },
  rectangleParent: {
    borderRadius: Border.br_107xl,
    height: 120,
    width: 100,
    overflow: "hidden",
  },
  frameIcon: {
    marginTop: 44,
  },
  curvedHome1Parent: {
    marginTop: 44,
  },
  speakerHngDn: {
    borderRadius: Border.br_219xl,
  },
  frameChild5: {
    display: "none",
  },
  frameParent11: {
    top: 52,
    left: 28,
    alignItems: "center",
    position: "absolute",
  },
  aHt: {
    backgroundColor: Color.black,
    height: 834,
  },
});

export default AHt;
