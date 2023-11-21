import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Border, FontFamily, Color, FontSize, Padding } from "../GlobalStyles";

const ALuynTp = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.aLuynTp, styles.aLuynTpLayout]}>
      <View style={styles.frameParent}>
        <View style={[styles.rectangleWrapper, styles.carddaHatInnerFlexBox]}>
          <Image
            style={[styles.frameChild, styles.aLuynTpLayout]}
            contentFit="cover"
            source={require("../assets/rectangle-395318.png")}
          />
        </View>
        <View style={styles.frameGroup}>
          <View style={styles.thngQuVitNamParent}>
            <Text style={[styles.thngQuVit, styles.thngTypo]} numberOfLines={1}>
              Thương quá Việt Nam
            </Text>
            <Text style={[styles.quangLinh, styles.quangLinhSpaceBlock]}>
              Quang Linh
            </Text>
            <View style={[styles.frameContainer, styles.quangLinhSpaceBlock]}>
              <View style={styles.aParent}>
                <Text style={styles.aTypo}>A</Text>
                <View style={styles.aParent}>
                  <Image
                    style={styles.duotoneStar1}
                    contentFit="cover"
                    source={require("../assets/duotone--star19.png")}
                  />
                  <Image
                    style={styles.duotoneStar11}
                    contentFit="cover"
                    source={require("../assets/duotone--star110.png")}
                  />
                  <Image
                    style={styles.duotoneStar1}
                    contentFit="cover"
                    source={require("../assets/duotone--star19.png")}
                  />
                </View>
              </View>
              <View style={[styles.frameView, styles.frameParentFlexBox]}>
                <View style={styles.frameWrapperFlexBox}>
                  <View style={styles.brokenClockParent}>
                    <Image
                      style={styles.brokenClock}
                      contentFit="cover"
                      source={require("../assets/broken--clock.png")}
                    />
                    <Text style={[styles.gnNht239, styles.aTypo]}>
                      Gần nhất: 239
                    </Text>
                  </View>
                </View>
                <View
                  style={[styles.frameWrapper1, styles.frameWrapperFlexBox]}
                >
                  <View style={styles.aParent}>
                    <Image
                      style={styles.brokenClock}
                      contentFit="cover"
                      source={require("../assets/outline--location2.png")}
                    />
                    <Text
                      style={[styles.mcTiu200, styles.luynTpTypo]}
                    >{`Mục tiêu: >200`}</Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
          <Pressable
            style={[styles.luynTpWrapper, styles.wrapperParentFlexBox]}
            onPress={() => navigation.navigate("A21aPlay")}
          >
            <Text style={[styles.luynTp, styles.htLayout]}>Luyện tập</Text>
          </Pressable>
        </View>
      </View>
      <View style={styles.frameParent1}>
        <View style={[styles.giaiIuThnQuenParent, styles.frameParentFlexBox]}>
          <Text style={styles.giaiIuThn}>“Giai điệu thân quen”</Text>
          <Text style={styles.xemTtC}>Xem tất cả</Text>
        </View>
        <View style={styles.carddaHatParent}>
          <Pressable
            style={styles.carddaLayout}
            onPress={() => navigation.navigate("A1KaraDetail")}
          >
            <View style={[styles.carddaHatInner, styles.carddaHatInnerFlexBox]}>
              <Image
                style={[styles.frameChild, styles.aLuynTpLayout]}
                contentFit="cover"
                source={require("../assets/rectangle-395311.png")}
              />
            </View>
            <View style={styles.frameParent2SpaceBlock}>
              <Text
                style={[styles.thngQuVit1, styles.thngTypo]}
                numberOfLines={1}
              >
                Về đâu mái tóc người thương
              </Text>
              <Text style={[styles.quangLinh1, styles.a1Typo]}>Quang Linh</Text>
            </View>
            <View style={[styles.frameParent2, styles.frameParent2SpaceBlock]}>
              <View style={styles.aGroup}>
                <Text style={[styles.a1, styles.a1Typo]}>A</Text>
                <View style={styles.aGroup}>
                  <Image
                    style={styles.brokenCopyLayout}
                    contentFit="cover"
                    source={require("../assets/duotone--star12.png")}
                  />
                  <Image
                    style={styles.brokenCopyLayout}
                    contentFit="cover"
                    source={require("../assets/duotone--star12.png")}
                  />
                  <Image
                    style={styles.brokenCopyLayout}
                    contentFit="cover"
                    source={require("../assets/duotone--star12.png")}
                  />
                </View>
              </View>
              <View style={styles.frameWrapperFlexBox}>
                <View style={styles.aParent}>
                  <Image
                    style={[styles.brokenCopy, styles.brokenCopyLayout]}
                    contentFit="cover"
                    source={require("../assets/broken--copy.png")}
                  />
                  <Text style={[styles.text, styles.a1Typo]}>5 lượt</Text>
                </View>
              </View>
              <View style={styles.frameWrapperFlexBox}>
                <View style={styles.aParent}>
                  <Image
                    style={styles.brokenCopyLayout}
                    contentFit="cover"
                    source={require("../assets/curved--calendarclock.png")}
                  />
                  <Text style={[styles.text, styles.a1Typo]}>còn 3 ngày</Text>
                </View>
              </View>
            </View>
          </Pressable>
          <Pressable
            style={[styles.carddaHat1, styles.carddaLayout]}
            onPress={() => navigation.navigate("A1KaraDetail")}
          >
            <View style={[styles.carddaHatInner, styles.carddaHatInnerFlexBox]}>
              <Image
                style={[styles.frameChild, styles.aLuynTpLayout]}
                contentFit="cover"
                source={require("../assets/rectangle-395311.png")}
              />
            </View>
            <View style={styles.frameParent2SpaceBlock}>
              <Text
                style={[styles.thngQuVit1, styles.thngTypo]}
                numberOfLines={1}
              >
                Về đâu mái tóc người thương
              </Text>
              <Text style={[styles.quangLinh1, styles.a1Typo]}>Quang Linh</Text>
            </View>
            <View style={[styles.frameParent2, styles.frameParent2SpaceBlock]}>
              <View style={styles.aGroup}>
                <Text style={[styles.a1, styles.a1Typo]}>A</Text>
                <View style={styles.aGroup}>
                  <Image
                    style={styles.brokenCopyLayout}
                    contentFit="cover"
                    source={require("../assets/duotone--star12.png")}
                  />
                  <Image
                    style={styles.brokenCopyLayout}
                    contentFit="cover"
                    source={require("../assets/duotone--star12.png")}
                  />
                  <Image
                    style={styles.brokenCopyLayout}
                    contentFit="cover"
                    source={require("../assets/duotone--star12.png")}
                  />
                </View>
              </View>
              <View style={styles.frameWrapperFlexBox}>
                <View style={styles.aParent}>
                  <Image
                    style={[styles.brokenCopy, styles.brokenCopyLayout]}
                    contentFit="cover"
                    source={require("../assets/broken--copy.png")}
                  />
                  <Text style={[styles.text, styles.a1Typo]}>12 lượt</Text>
                </View>
              </View>
              <View style={styles.frameWrapperFlexBox}>
                <View style={styles.aParent}>
                  <Image
                    style={styles.brokenCopyLayout}
                    contentFit="cover"
                    source={require("../assets/curved--calendarclock.png")}
                  />
                  <Text style={[styles.text, styles.a1Typo]}>còn 5 ngày</Text>
                </View>
              </View>
            </View>
          </Pressable>
          <Pressable
            style={[styles.carddaHat1, styles.carddaLayout]}
            onPress={() => navigation.navigate("A1KaraDetail")}
          >
            <View style={[styles.carddaHatInner, styles.carddaHatInnerFlexBox]}>
              <Image
                style={[styles.frameChild, styles.aLuynTpLayout]}
                contentFit="cover"
                source={require("../assets/rectangle-395311.png")}
              />
            </View>
            <View style={styles.frameParent2SpaceBlock}>
              <Text
                style={[styles.thngQuVit1, styles.thngTypo]}
                numberOfLines={1}
              >
                Về đâu mái tóc người thương
              </Text>
              <Text style={[styles.quangLinh1, styles.a1Typo]}>Quang Linh</Text>
            </View>
            <View style={[styles.frameParent2, styles.frameParent2SpaceBlock]}>
              <View style={styles.aGroup}>
                <Text style={[styles.a1, styles.a1Typo]}>A</Text>
                <View style={styles.aGroup}>
                  <Image
                    style={styles.brokenCopyLayout}
                    contentFit="cover"
                    source={require("../assets/duotone--star12.png")}
                  />
                  <Image
                    style={styles.brokenCopyLayout}
                    contentFit="cover"
                    source={require("../assets/duotone--star12.png")}
                  />
                  <Image
                    style={styles.brokenCopyLayout}
                    contentFit="cover"
                    source={require("../assets/duotone--star12.png")}
                  />
                </View>
              </View>
              <View style={styles.frameWrapperFlexBox}>
                <View style={styles.aParent}>
                  <Image
                    style={[styles.brokenCopy, styles.brokenCopyLayout]}
                    contentFit="cover"
                    source={require("../assets/broken--copy.png")}
                  />
                  <Text style={[styles.text, styles.a1Typo]}>20 lượt</Text>
                </View>
              </View>
              <View style={styles.frameWrapperFlexBox}>
                <View style={styles.aParent}>
                  <Image
                    style={styles.brokenCopyLayout}
                    contentFit="cover"
                    source={require("../assets/curved--calendarclock.png")}
                  />
                  <Text style={[styles.text, styles.a1Typo]}>còn 6 ngày</Text>
                </View>
              </View>
            </View>
          </Pressable>
          <Pressable
            style={[styles.carddaHat1, styles.carddaLayout]}
            onPress={() => navigation.navigate("A1KaraDetail")}
          >
            <View style={[styles.carddaHatInner, styles.carddaHatInnerFlexBox]}>
              <Image
                style={[styles.frameChild, styles.aLuynTpLayout]}
                contentFit="cover"
                source={require("../assets/rectangle-395311.png")}
              />
            </View>
            <View style={styles.frameParent2SpaceBlock}>
              <Text
                style={[styles.thngQuVit1, styles.thngTypo]}
                numberOfLines={1}
              >
                Về đâu mái tóc người thương
              </Text>
              <Text style={[styles.quangLinh1, styles.a1Typo]}>Quang Linh</Text>
            </View>
            <View style={[styles.frameParent2, styles.frameParent2SpaceBlock]}>
              <View style={styles.aGroup}>
                <Text style={[styles.a1, styles.a1Typo]}>A</Text>
                <View style={styles.aGroup}>
                  <Image
                    style={styles.brokenCopyLayout}
                    contentFit="cover"
                    source={require("../assets/duotone--star12.png")}
                  />
                  <Image
                    style={styles.brokenCopyLayout}
                    contentFit="cover"
                    source={require("../assets/duotone--star12.png")}
                  />
                  <Image
                    style={styles.brokenCopyLayout}
                    contentFit="cover"
                    source={require("../assets/duotone--star12.png")}
                  />
                </View>
              </View>
              <View style={styles.frameWrapperFlexBox}>
                <View style={styles.aParent}>
                  <Image
                    style={[styles.brokenCopy, styles.brokenCopyLayout]}
                    contentFit="cover"
                    source={require("../assets/broken--copy.png")}
                  />
                  <Text style={[styles.text, styles.a1Typo]}>20 lượt</Text>
                </View>
              </View>
              <View style={styles.frameWrapperFlexBox}>
                <View style={styles.aParent}>
                  <Image
                    style={styles.brokenCopyLayout}
                    contentFit="cover"
                    source={require("../assets/curved--calendarclock.png")}
                  />
                  <Text style={[styles.text, styles.a1Typo]}>còn 6 ngày</Text>
                </View>
              </View>
            </View>
          </Pressable>
          <View style={[styles.carddaHat1, styles.carddaLayout]}>
            <View style={[styles.carddaHatInner, styles.carddaHatInnerFlexBox]}>
              <Image
                style={[styles.frameChild, styles.aLuynTpLayout]}
                contentFit="cover"
                source={require("../assets/rectangle-395311.png")}
              />
            </View>
            <View style={styles.frameParent2SpaceBlock}>
              <Text
                style={[styles.thngQuVit1, styles.thngTypo]}
                numberOfLines={1}
              >
                Thương quá Việt Nam
              </Text>
              <Text style={[styles.quangLinh1, styles.a1Typo]}>Quang Linh</Text>
            </View>
            <View style={[styles.frameParent2, styles.frameParent2SpaceBlock]}>
              <View style={styles.aParent}>
                <Text style={[styles.a1, styles.a1Typo]}>A</Text>
                <View style={styles.aParent}>
                  <Image
                    style={styles.brokenCopyLayout}
                    contentFit="cover"
                    source={require("../assets/duotone--star12.png")}
                  />
                  <Image
                    style={styles.brokenCopyLayout}
                    contentFit="cover"
                    source={require("../assets/duotone--star12.png")}
                  />
                  <Image
                    style={styles.brokenCopyLayout}
                    contentFit="cover"
                    source={require("../assets/duotone--star12.png")}
                  />
                </View>
              </View>
              <View style={styles.frameWrapperFlexBox}>
                <View style={styles.aParent}>
                  <Image
                    style={[styles.brokenCopy, styles.brokenCopyLayout]}
                    contentFit="cover"
                    source={require("../assets/broken--headphones2.png")}
                  />
                  <Text style={[styles.text, styles.a1Typo]}>239</Text>
                </View>
              </View>
              <View style={styles.frameWrapperFlexBox}>
                <View style={styles.aParent}>
                  <Image
                    style={styles.brokenCopyLayout}
                    contentFit="cover"
                    source={require("../assets/curved--heart2.png")}
                  />
                  <Text style={[styles.text, styles.a1Typo]}>34</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.frameParent7}>
        <View style={styles.wrapperParentFlexBox}>
          <Text style={[styles.ht, styles.htTypo]}>Đã hát</Text>
          <View style={[styles.wrapper, styles.wrapperParentFlexBox]}>
            <Text style={[styles.text10, styles.ttTypo]}>6</Text>
          </View>
          <Text style={[styles.bi, styles.htTypo]}>bài</Text>
        </View>
        <View style={[styles.xpHngParent, styles.wrapperParentFlexBox]}>
          <Text style={[styles.ht, styles.htTypo]}>Xếp hạng</Text>
          <View style={[styles.wrapper, styles.wrapperParentFlexBox]}>
            <Text style={[styles.tt, styles.ttTypo]}>TỐT</Text>
          </View>
          <Text style={[styles.bi, styles.htTypo]}>ghi nhớ</Text>
        </View>
        <View style={[styles.xpHngParent, styles.wrapperParentFlexBox]}>
          <Text style={[styles.ht, styles.htTypo]}>Chăm chỉ</Text>
          <View style={[styles.wrapper, styles.wrapperParentFlexBox]}>
            <Text style={[styles.tt, styles.ttTypo]}>4/7</Text>
          </View>
          <Text style={[styles.bi, styles.htTypo]}>ngày liên tục</Text>
        </View>
      </View>
      <View style={styles.aLuynTpChild} />
      <Text style={styles.luynTp1}>Luyện tập</Text>
      <View style={styles.navPosition}>
        <View style={[styles.navChild, styles.navPosition]} />
        <View
          style={[
            styles.curvedMenuHamburgerWrapper,
            styles.wrapperParentFlexBox,
          ]}
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
  aLuynTpLayout: {
    width: "100%",
    flex: 1,
  },
  carddaHatInnerFlexBox: {
    borderRadius: Border.br_3xs,
    overflow: "hidden",
    alignSelf: "stretch",
    flexDirection: "row",
  },
  thngTypo: {
    fontFamily: FontFamily.nold,
    textAlign: "left",
    fontWeight: "700",
    overflow: "hidden",
    alignSelf: "stretch",
  },
  quangLinhSpaceBlock: {
    marginTop: 18,
    alignSelf: "stretch",
  },
  frameParentFlexBox: {
    justifyContent: "space-between",
    flexDirection: "row",
  },
  aTypo: {
    color: Color.oran2,
    fontFamily: FontFamily.nunitoRegular,
    lineHeight: 36,
    fontSize: FontSize.size_11xl,
    textAlign: "left",
  },
  frameWrapperFlexBox: {
    justifyContent: "flex-end",
    flexDirection: "row",
  },
  luynTpTypo: {
    fontFamily: FontFamily.nunitoRegular,
    textAlign: "left",
  },
  wrapperParentFlexBox: {
    justifyContent: "center",
    alignItems: "center",
  },
  htLayout: {
    lineHeight: 48,
    fontSize: FontSize.bold_size,
  },
  a1Typo: {
    lineHeight: 29,
    fontSize: FontSize.size_5xl,
    fontFamily: FontFamily.nunitoRegular,
    textAlign: "left",
  },
  frameParent2SpaceBlock: {
    marginTop: 19,
    alignSelf: "stretch",
  },
  brokenCopyLayout: {
    height: 24,
    width: 24,
  },
  carddaLayout: {
    padding: Padding.p_sm,
    height: 420,
    width: 305,
    borderWidth: 8,
    borderColor: Color.blue2,
    borderStyle: "solid",
    borderRadius: Border.br_sm,
    backgroundColor: Color.blue2,
  },
  htTypo: {
    fontWeight: "600",
    textAlign: "center",
    fontFamily: FontFamily.sFProDisplay,
    color: Color.white,
  },
  ttTypo: {
    color: Color.black,
    fontWeight: "900",
    textAlign: "center",
    fontFamily: FontFamily.sFProDisplay,
  },
  navPosition: {
    height: 130,
    width: 157,
    top: 0,
    left: 0,
    position: "absolute",
  },
  frameChild: {
    maxWidth: "100%",
    maxHeight: "100%",
    overflow: "hidden",
    alignSelf: "stretch",
  },
  rectangleWrapper: {
    width: 300,
    overflow: "hidden",
  },
  thngQuVit: {
    color: Color.blue2,
    textAlign: "left",
    lineHeight: 60,
    fontSize: FontSize.size_31xl,
    fontFamily: FontFamily.nold,
  },
  quangLinh: {
    color: Color.oran,
    fontFamily: FontFamily.nunitoRegular,
    textAlign: "left",
    lineHeight: 36,
    fontSize: FontSize.size_11xl,
  },
  duotoneStar1: {
    width: 41,
    height: 41,
  },
  duotoneStar11: {
    width: 42,
    height: 41,
  },
  aParent: {
    alignItems: "center",
    flexDirection: "row",
  },
  brokenClock: {
    width: 31,
    height: 30,
  },
  gnNht239: {
    marginLeft: 6,
  },
  brokenClockParent: {
    opacity: 0.7,
    alignItems: "center",
    flexDirection: "row",
  },
  mcTiu200: {
    color: Color.white,
    marginLeft: 6,
    lineHeight: 36,
    fontSize: FontSize.size_11xl,
  },
  frameWrapper1: {
    height: 52,
    paddingHorizontal: Padding.p_xs,
    paddingVertical: 0,
    backgroundColor: Color.blue2,
    borderRadius: Border.br_81xl,
    alignItems: "center",
  },
  frameView: {
    marginLeft: 50,
    alignItems: "center",
    flex: 1,
  },
  frameContainer: {
    height: 55,
    flexDirection: "row",
  },
  thngQuVitNamParent: {
    alignSelf: "stretch",
  },
  luynTp: {
    color: Color.white,
    fontFamily: FontFamily.nunitoRegular,
    textAlign: "left",
  },
  luynTpWrapper: {
    borderRadius: Border.br_xl,
    paddingHorizontal: Padding.p_3xs,
    paddingVertical: Padding.p_xl,
    marginTop: 40,
    backgroundColor: Color.blue2,
    alignSelf: "stretch",
  },
  frameGroup: {
    marginLeft: 40,
    alignSelf: "stretch",
    flex: 1,
  },
  frameParent: {
    top: 131,
    paddingHorizontal: Padding.p_41xl,
    paddingVertical: Padding.p_31xl,
    flexDirection: "row",
    width: 1194,
    left: 0,
    backgroundColor: Color.yelStar,
    position: "absolute",
  },
  giaiIuThn: {
    textAlign: "center",
    fontFamily: FontFamily.sFProDisplay,
    color: Color.white,
    fontWeight: "700",
    lineHeight: 60,
    fontSize: FontSize.size_31xl,
  },
  xemTtC: {
    fontSize: FontSize.size_17xl,
    lineHeight: 43,
    color: Color.colorDarkgray_200,
    textAlign: "right",
    fontFamily: FontFamily.sFProDisplay,
    fontWeight: "700",
  },
  giaiIuThnQuenParent: {
    alignItems: "flex-end",
    alignSelf: "stretch",
  },
  carddaHatInner: {
    height: 190,
    overflow: "hidden",
  },
  thngQuVit1: {
    fontSize: FontSize.size_13xl,
    lineHeight: 38,
    height: 76,
    color: Color.white,
    textAlign: "left",
  },
  quangLinh1: {
    color: Color.colorDarkgray_100,
    marginTop: 14,
    alignSelf: "stretch",
  },
  a1: {
    color: Color.white,
  },
  aGroup: {
    display: "none",
    alignItems: "center",
    flexDirection: "row",
  },
  brokenCopy: {
    overflow: "hidden",
  },
  text: {
    color: Color.white,
    marginLeft: 6,
  },
  frameParent2: {
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
  frameParent1: {
    top: 893,
    left: 60,
    height: 624,
    position: "absolute",
  },
  ht: {
    lineHeight: 48,
    fontSize: FontSize.bold_size,
  },
  text10: {
    fontSize: FontSize.size_41xl,
    lineHeight: 72,
  },
  wrapper: {
    width: 120,
    height: 120,
    padding: Padding.p_3xs,
    marginTop: 20,
    borderRadius: Border.br_81xl,
    backgroundColor: Color.yelStar,
    justifyContent: "center",
  },
  bi: {
    marginTop: 20,
    lineHeight: 36,
    fontSize: FontSize.size_11xl,
  },
  tt: {
    fontSize: FontSize.nold_size,
    lineHeight: 58,
  },
  xpHngParent: {
    marginLeft: 200,
  },
  frameParent7: {
    top: 590,
    left: 178,
    flexDirection: "row",
    position: "absolute",
  },
  aLuynTpChild: {
    backgroundColor: Color.colorGray_100,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    height: 131,
    top: 0,
    width: 1194,
    left: 0,
    position: "absolute",
  },
  luynTp1: {
    top: 34,
    left: 207,
    fontSize: FontSize.size_45xl,
    lineHeight: 77,
    fontWeight: "800",
    fontFamily: FontFamily.sFProDisplay,
    color: Color.white,
    textAlign: "left",
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
    left: "50%",
    position: "absolute",
  },
  aLuynTp: {
    backgroundColor: Color.black,
    height: 834,
  },
});

export default ALuynTp;
