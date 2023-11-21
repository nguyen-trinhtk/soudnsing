import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Padding, Color, Border, FontSize, FontFamily } from "../GlobalStyles";

const BOTNAVKARASCREEN = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.botNavKaraScreen}>
      <View style={styles.namehatVoiTypedonCaSta}>
        <View style={styles.namehatLayout}>
          <View style={[styles.frameWrapper, styles.frameWrapperPosition]}>
            <Image
              style={styles.frameChild}
              contentFit="cover"
              source={require("../assets/frame-1111.png")}
            />
          </View>
        </View>
        <View style={styles.frameParent}>
          <View style={styles.frameLayout1}>
            <Image
              style={styles.frameItem}
              contentFit="cover"
              source={require("../assets/group-53862.png")}
            />
          </View>
          <Text style={styles.nCa}>Đơn ca</Text>
        </View>
        <View
          style={[styles.namehatVoiTypedonCaStaChild, styles.namehatLayout]}
        >
          <View style={[styles.frameWrapper, styles.frameWrapperPosition]}>
            <Image
              style={styles.frameChild}
              contentFit="cover"
              source={require("../assets/frame-1121.png")}
            />
          </View>
        </View>
      </View>
      <View style={[styles.namehatVoiTypesongCaSt, styles.namehatPosition]}>
        <View style={styles.frameGroup}>
          <View style={styles.frameLayout1}>
            <Image
              style={styles.frameItem}
              contentFit="cover"
              source={require("../assets/group-53863.png")}
            />
          </View>
          <Text style={styles.nCa}>Song ca</Text>
        </View>
        <View
          style={[styles.namehatVoiTypedonCaStaChild, styles.namehatLayout]}
        >
          <View style={[styles.frameWrapper, styles.frameWrapperPosition]}>
            <Image
              style={styles.frameChild}
              contentFit="cover"
              source={require("../assets/frame-1112.png")}
            />
          </View>
        </View>
        <View
          style={[styles.namehatVoiTypedonCaStaChild, styles.namehatLayout]}
        >
          <View style={[styles.frameWrapper, styles.frameWrapperPosition]}>
            <Image
              style={styles.frameChild}
              contentFit="cover"
              source={require("../assets/frame-1121.png")}
            />
          </View>
        </View>
      </View>
      <View style={[styles.namehatVoiTypegiaoLuuS, styles.namehatPosition]}>
        <View style={styles.namehatLayout}>
          <View style={[styles.frameWrapper, styles.frameWrapperPosition]}>
            <Image
              style={styles.frameChild}
              contentFit="cover"
              source={require("../assets/frame-1111.png")}
            />
          </View>
        </View>
        <View
          style={[styles.namehatVoiTypedonCaStaChild, styles.namehatLayout]}
        >
          <View style={[styles.frameWrapper, styles.frameWrapperPosition]}>
            <Image
              style={styles.frameChild}
              contentFit="cover"
              source={require("../assets/frame-1112.png")}
            />
          </View>
        </View>
        <View style={styles.frameParent1}>
          <View style={styles.frameLayout1}>
            <Image
              style={styles.frameItem}
              contentFit="cover"
              source={require("../assets/group-53864.png")}
            />
          </View>
          <Text style={styles.nCa}>Giao lưu</Text>
        </View>
      </View>
      <View
        style={[styles.namebackgroundTypeotherS, styles.namebackgroundFlexBox]}
      >
        <View style={styles.namebackgroundInnerShadowBox}>
          <View style={[styles.instanceParent, styles.frameWrapperPosition]}>
            <View style={[styles.rectangleWrapper, styles.rectangleLayout]}>
              <Image
                style={[styles.instanceChild, styles.childLayout]}
                contentFit="cover"
                source={require("../assets/rectangle-395599.png")}
              />
            </View>
            <View style={styles.backgroundLayout}>
              <Image
                style={[styles.backgroundChild, styles.wrapperPosition]}
                contentFit="cover"
                source={require("../assets/rectangle-3955910.png")}
              />
            </View>
            <View style={styles.backgroundLayout}>
              <Image
                style={[styles.backgroundChild, styles.wrapperPosition]}
                contentFit="cover"
                source={require("../assets/rectangle-395592.png")}
              />
            </View>
            <View style={styles.backgroundLayout}>
              <Image
                style={[styles.backgroundChild, styles.wrapperPosition]}
                contentFit="cover"
                source={require("../assets/rectangle-395593.png")}
              />
            </View>
            <View style={styles.backgroundLayout}>
              <Image
                style={[styles.backgroundChild, styles.wrapperPosition]}
                contentFit="cover"
                source={require("../assets/rectangle-395594.png")}
              />
            </View>
            <View style={styles.backgroundLayout}>
              <Image
                style={[styles.backgroundChild, styles.wrapperPosition]}
                contentFit="cover"
                source={require("../assets/rectangle-395595.png")}
              />
            </View>
            <View style={styles.backgroundLayout}>
              <Image
                style={[styles.backgroundChild, styles.wrapperPosition]}
                contentFit="cover"
                source={require("../assets/rectangle-395596.png")}
              />
            </View>
            <View style={styles.backgroundLayout}>
              <Image
                style={[styles.backgroundChild, styles.wrapperPosition]}
                contentFit="cover"
                source={require("../assets/rectangle-395597.png")}
              />
            </View>
          </View>
        </View>
        <View style={styles.frameLayout}>
          <View style={styles.rectangleParent}>
            <View style={styles.groupLayout} />
            <Image
              style={styles.groupItem}
              contentFit="cover"
              source={require("../assets/group-53871.png")}
            />
          </View>
        </View>
      </View>
      <View
        style={[styles.namebackgroundTypeback1, styles.namebackgroundFlexBox]}
      >
        <View style={styles.namebackgroundInnerShadowBox}>
          <View style={[styles.instanceParent, styles.frameWrapperPosition]}>
            <View style={styles.rectangleLayout}>
              <Pressable
                style={styles.wrapperPosition}
                onPress={() => navigation.navigate("A22VidBack")}
              >
                <Image
                  style={styles.icon}
                  contentFit="cover"
                  source={require("../assets/rectangle-39559.png")}
                />
              </Pressable>
            </View>
            <View style={[styles.background7, styles.backgroundLayout]}>
              <Image
                style={[styles.instanceChild, styles.childLayout]}
                contentFit="cover"
                source={require("../assets/rectangle-395591.png")}
              />
            </View>
            <View style={styles.backgroundLayout}>
              <Image
                style={[styles.backgroundChild, styles.wrapperPosition]}
                contentFit="cover"
                source={require("../assets/rectangle-395592.png")}
              />
            </View>
            <View style={styles.backgroundLayout}>
              <Image
                style={[styles.backgroundChild, styles.wrapperPosition]}
                contentFit="cover"
                source={require("../assets/rectangle-395593.png")}
              />
            </View>
            <View style={styles.backgroundLayout}>
              <Image
                style={[styles.backgroundChild, styles.wrapperPosition]}
                contentFit="cover"
                source={require("../assets/rectangle-395594.png")}
              />
            </View>
            <View style={styles.backgroundLayout}>
              <Image
                style={[styles.backgroundChild, styles.wrapperPosition]}
                contentFit="cover"
                source={require("../assets/rectangle-395595.png")}
              />
            </View>
            <View style={styles.backgroundLayout}>
              <Image
                style={[styles.backgroundChild, styles.wrapperPosition]}
                contentFit="cover"
                source={require("../assets/rectangle-395596.png")}
              />
            </View>
            <View style={styles.backgroundLayout}>
              <Image
                style={[styles.backgroundChild, styles.wrapperPosition]}
                contentFit="cover"
                source={require("../assets/rectangle-395597.png")}
              />
            </View>
          </View>
        </View>
        <View style={styles.frameLayout}>
          <View style={styles.rectangleParent}>
            <View style={styles.groupLayout} />
            <Image
              style={styles.groupItem}
              contentFit="cover"
              source={require("../assets/group-53871.png")}
            />
          </View>
        </View>
      </View>
      <View
        style={[styles.namebackgroundTypeback2, styles.namebackgroundFlexBox]}
      >
        <View style={styles.namebackgroundInnerShadowBox}>
          <View style={[styles.instanceParent, styles.frameWrapperPosition]}>
            <Pressable
              style={styles.rectangleLayout}
              onPress={() => navigation.navigate("A22VidBack")}
            >
              <Image
                style={[styles.backgroundChild, styles.wrapperPosition]}
                contentFit="cover"
                source={require("../assets/rectangle-39559.png")}
              />
            </Pressable>
            <Pressable
              style={styles.backgroundLayout}
              onPress={() => navigation.navigate("A22VidBack1")}
            >
              <Image
                style={[styles.backgroundChild, styles.wrapperPosition]}
                contentFit="cover"
                source={require("../assets/rectangle-3955910.png")}
              />
            </Pressable>
            <View style={[styles.background7, styles.backgroundLayout]}>
              <Image
                style={[styles.instanceChild, styles.childLayout]}
                contentFit="cover"
                source={require("../assets/rectangle-3955911.png")}
              />
            </View>
            <View style={styles.backgroundLayout}>
              <Image
                style={[styles.backgroundChild, styles.wrapperPosition]}
                contentFit="cover"
                source={require("../assets/rectangle-395593.png")}
              />
            </View>
            <View style={styles.backgroundLayout}>
              <Image
                style={[styles.backgroundChild, styles.wrapperPosition]}
                contentFit="cover"
                source={require("../assets/rectangle-395594.png")}
              />
            </View>
            <View style={styles.backgroundLayout}>
              <Image
                style={[styles.backgroundChild, styles.wrapperPosition]}
                contentFit="cover"
                source={require("../assets/rectangle-395595.png")}
              />
            </View>
            <View style={styles.backgroundLayout}>
              <Image
                style={[styles.backgroundChild, styles.wrapperPosition]}
                contentFit="cover"
                source={require("../assets/rectangle-395596.png")}
              />
            </View>
            <View style={styles.backgroundLayout}>
              <Image
                style={[styles.backgroundChild, styles.wrapperPosition]}
                contentFit="cover"
                source={require("../assets/rectangle-395597.png")}
              />
            </View>
          </View>
        </View>
        <View style={styles.frameLayout}>
          <View style={styles.rectangleParent}>
            <View style={styles.groupLayout} />
            <Image
              style={styles.groupItem}
              contentFit="cover"
              source={require("../assets/group-53871.png")}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  frameWrapperPosition: {
    left: 0,
    alignItems: "center",
    position: "absolute",
  },
  namehatLayout: {
    height: 178,
    width: 120,
  },
  namehatPosition: {
    paddingBottom: Padding.p_11xl,
    paddingTop: Padding.p_11xl,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    width: 1194,
    left: "50%",
    marginLeft: -625.5,
    position: "absolute",
  },
  namebackgroundFlexBox: {
    backgroundColor: Color.black,
    paddingVertical: Padding.p_11xl,
    paddingHorizontal: Padding.p_241xl,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    width: 1194,
    left: "50%",
    position: "absolute",
  },
  rectangleLayout: {
    height: 187,
    width: 187,
  },
  childLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    borderRadius: Border.br_xl,
    overflow: "hidden",
  },
  wrapperPosition: {
    left: "0%",
    bottom: "0%",
    right: "0%",
    top: "0%",
    width: "100%",
    height: "100%",
    position: "absolute",
  },
  backgroundLayout: {
    marginLeft: 30,
    height: 187,
    width: 187,
  },
  frameChild: {
    borderRadius: Border.br_164xl,
    height: 120,
    width: 120,
    overflow: "hidden",
  },
  frameWrapper: {
    top: 0,
    justifyContent: "flex-end",
  },
  frameItem: {
    width: 148,
    height: 148,
  },
  frameLayout1: {
    transform: [
      {
        rotate: "180deg",
      },
    ],
    height: 160,
    width: 160,
    borderWidth: 6,
    borderColor: Color.white,
    borderStyle: "solid",
    backgroundColor: Color.blue2,
    borderRadius: Border.br_181xl,
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
  nCa: {
    fontSize: FontSize.size_41xl,
    lineHeight: 125,
    fontWeight: "800",
    fontFamily: FontFamily.sFProDisplay,
    color: Color.white,
    textAlign: "center",
    marginTop: 36,
  },
  frameParent: {
    width: 228,
    marginLeft: 60,
    alignItems: "center",
  },
  namehatVoiTypedonCaStaChild: {
    marginLeft: 60,
  },
  namehatVoiTypedonCaSta: {
    bottom: 2030,
    paddingVertical: Padding.p_11xl,
    paddingHorizontal: Padding.p_241xl,
    width: 1194,
    left: "50%",
    marginLeft: -625.5,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    position: "absolute",
  },
  frameGroup: {
    alignItems: "center",
  },
  namehatVoiTypesongCaSt: {
    bottom: 1678,
    paddingLeft: Padding.p_401xl,
    paddingRight: Padding.p_41xl,
  },
  frameParent1: {
    marginLeft: 60,
    alignItems: "center",
  },
  namehatVoiTypegiaoLuuS: {
    bottom: 1326,
    paddingLeft: Padding.p_41xl,
    paddingRight: Padding.p_401xl,
  },
  instanceChild: {
    height: "95.72%",
    width: "95.72%",
    top: "2.14%",
    right: "2.14%",
    bottom: "2.14%",
    left: "2.14%",
    position: "absolute",
  },
  rectangleWrapper: {
    borderRadius: Border.br_xl,
  },
  backgroundChild: {
    maxHeight: "100%",
    maxWidth: "100%",
    borderRadius: Border.br_xl,
    overflow: "hidden",
  },
  instanceParent: {
    marginTop: -103,
    top: "50%",
    padding: Padding.p_3xs,
    justifyContent: "center",
    flexDirection: "row",
    left: 0,
  },
  namebackgroundInnerShadowBox: {
    height: 226,
    width: 896,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
  },
  groupLayout: {
    borderWidth: 10,
    borderRadius: Border.br_62xl,
    left: 166,
    bottom: 0,
    height: 166,
    width: 166,
    transform: [
      {
        rotate: "180deg",
      },
    ],
    borderColor: Color.white,
    borderStyle: "solid",
    position: "absolute",
  },
  groupItem: {
    top: 28,
    left: -138,
    width: 110,
    height: 110,
    position: "absolute",
  },
  rectangleParent: {
    alignSelf: "stretch",
    flex: 1,
  },
  frameLayout: {
    height: 166,
    width: 166,
    transform: [
      {
        rotate: "180deg",
      },
    ],
    borderRadius: Border.br_181xl,
    marginLeft: 60,
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
  namebackgroundTypeotherS: {
    marginLeft: -619.5,
    bottom: 913,
  },
  icon: {
    width: "100%",
    height: "100%",
    maxHeight: "100%",
    maxWidth: "100%",
    borderRadius: Border.br_xl,
    overflow: "hidden",
  },
  background7: {
    borderRadius: Border.br_xl,
  },
  namebackgroundTypeback1: {
    marginLeft: -621.5,
    bottom: 529,
  },
  namebackgroundTypeback2: {
    marginLeft: -613.5,
    bottom: 177,
  },
  botNavKaraScreen: {
    borderRadius: Border.br_8xs,
    borderStyle: "dashed",
    borderColor: Color.colorBlueviolet,
    borderWidth: 1,
    width: 1291,
    height: 2381,
    overflow: "hidden",
  },
});

export default BOTNAVKARASCREEN;
