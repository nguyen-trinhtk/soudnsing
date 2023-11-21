import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, Border, FontFamily, FontSize } from "../GlobalStyles";

const Loader11 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.loader1}>
      <View style={[styles.property11, styles.property1loaderLayout]}>
        <View style={styles.loader}>
          <Image
            style={[styles.baseIcon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/base1.png")}
          />
          <Image
            style={styles.ellipseIcon}
            contentFit="cover"
            source={require("../assets/ellipse5.png")}
          />
          <Text style={styles.text}>0%</Text>
        </View>
        <View style={[styles.wrapper, styles.wrapperFlexBox]}>
          <Text style={[styles.text1, styles.ngFlexBox]}>0%</Text>
        </View>
      </View>
      <View style={[styles.property1loader2, styles.property1loaderLayout]}>
        <View style={styles.loader}>
          <Image
            style={[styles.baseIcon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/base1.png")}
          />
          <Image
            style={[styles.ellipseIcon1, styles.ellipseIconLayout]}
            contentFit="cover"
            source={require("../assets/ellipse4.png")}
          />
          <Text style={styles.text}>9%</Text>
        </View>
        <View style={[styles.wrapper, styles.wrapperFlexBox]}>
          <Text style={[styles.text1, styles.ngFlexBox]}>10%</Text>
        </View>
      </View>
      <View style={[styles.property1loader3, styles.property1loaderLayout]}>
        <View style={styles.loader}>
          <Image
            style={[styles.baseIcon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/base1.png")}
          />
          <Image
            style={[styles.ellipseIcon2, styles.ellipseIconLayout]}
            contentFit="cover"
            source={require("../assets/ellipse3.png")}
          />
          <Text style={styles.text}>33%</Text>
        </View>
        <View style={[styles.wrapper, styles.wrapperFlexBox]}>
          <Text style={[styles.text1, styles.ngFlexBox]}>33%</Text>
        </View>
      </View>
      <View style={[styles.property1loader4, styles.property1loaderLayout]}>
        <View style={styles.loader}>
          <Image
            style={[styles.baseIcon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/base1.png")}
          />
          <Image
            style={[styles.ellipseIcon3, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/ellipse2.png")}
          />
          <Text style={styles.text}>63%</Text>
        </View>
        <View style={[styles.wrapper, styles.wrapperFlexBox]}>
          <Text style={[styles.text1, styles.ngFlexBox]}>67%</Text>
        </View>
      </View>
      <View style={[styles.property1loader5, styles.property1loaderLayout]}>
        <View style={styles.loader}>
          <Image
            style={[styles.baseIcon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/base1.png")}
          />
          <Image
            style={[styles.ellipseIcon4, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/ellipse1.png")}
          />
          <Text style={styles.text}>87%</Text>
        </View>
        <View style={[styles.wrapper, styles.wrapperFlexBox]}>
          <Text style={[styles.text1, styles.ngFlexBox]}>89%</Text>
        </View>
      </View>
      <View style={[styles.property1loader6, styles.property1loaderLayout]}>
        <Image
          style={[styles.baseIcon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/base1.png")}
        />
        <Image
          style={[styles.ellipseIcon4, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/ellipse6.png")}
        />
        <View style={[styles.wrapper, styles.wrapperFlexBox]}>
          <Text style={[styles.text1, styles.ngFlexBox]}>100%</Text>
        </View>
      </View>
      <Pressable
        style={[styles.property1loader7, styles.property1loaderLayout]}
        onPress={() => navigation.navigate("A21cKtQu")}
      >
        <Image
          style={[styles.baseIcon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/base1.png")}
        />
        <Image
          style={[styles.ellipseIcon4, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/ellipse6.png")}
        />
        <View style={[styles.duotoneCheckCircleParent, styles.wrapperFlexBox]}>
          <Image
            style={styles.duotoneCheckCircle}
            contentFit="cover"
            source={require("../assets/duotone--checkcircle.png")}
          />
          <Text style={[styles.ng, styles.ngFlexBox]}>Đã đăng</Text>
        </View>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  property1loaderLayout: {
    height: 300,
    width: 300,
    backgroundColor: Color.lightYellow,
    borderRadius: Border.br_481xl,
    left: 16,
    position: "absolute",
  },
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    borderRadius: Border.br_17xl,
    left: "0%",
    right: "0%",
    width: "100%",
    height: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  wrapperFlexBox: {
    alignItems: "center",
    position: "absolute",
  },
  ngFlexBox: {
    width: 224,
    justifyContent: "center",
    display: "flex",
    color: Color.lightBlue,
    fontFamily: FontFamily.beVietnam,
    lineHeight: 24,
    alignItems: "center",
    textAlign: "center",
    fontWeight: "700",
  },
  ellipseIconLayout: {
    bottom: "-50%",
    top: "50%",
    maxHeight: "100%",
    maxWidth: "100%",
    borderRadius: Border.br_17xl,
    width: "100%",
    height: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  baseIcon: {
    opacity: 0.2,
    bottom: "0%",
    top: "0%",
    maxHeight: "100%",
    maxWidth: "100%",
    borderRadius: Border.br_17xl,
  },
  ellipseIcon: {
    display: "none",
    maxHeight: "100%",
    maxWidth: "100%",
    borderRadius: Border.br_17xl,
    left: "0%",
    bottom: "0%",
    right: "0%",
    top: "0%",
    width: "100%",
    height: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  text: {
    height: "36.93%",
    width: "86.17%",
    top: "31.53%",
    left: "6.93%",
    fontSize: FontSize.size_55xl,
    letterSpacing: -1.5,
    lineHeight: 22,
    fontFamily: FontFamily.figtreeBold,
    color: Color.green,
    textAlign: "center",
    fontWeight: "700",
    display: "none",
    position: "absolute",
  },
  loader: {
    left: "0%",
    right: "0%",
    width: "100%",
    height: "100%",
    bottom: "0%",
    top: "0%",
    position: "absolute",
  },
  text1: {
    fontSize: FontSize.size_45xl,
  },
  wrapper: {
    marginTop: -22.5,
    marginLeft: -112,
    left: "50%",
    top: "50%",
    alignItems: "center",
  },
  property11: {
    top: 20,
  },
  ellipseIcon1: {
    right: "-87.93%",
    left: "87.93%",
  },
  property1loader2: {
    top: 410,
  },
  ellipseIcon2: {
    right: "-27.07%",
    left: "27.07%",
  },
  property1loader3: {
    top: 776,
  },
  ellipseIcon3: {
    top: "14.9%",
    bottom: "-14.9%",
  },
  property1loader4: {
    top: 1223,
  },
  ellipseIcon4: {
    bottom: "0%",
    top: "0%",
    maxHeight: "100%",
    maxWidth: "100%",
    borderRadius: Border.br_17xl,
  },
  property1loader5: {
    top: 1670,
  },
  property1loader6: {
    top: 2117,
  },
  duotoneCheckCircle: {
    width: 156,
    height: 156,
  },
  ng: {
    fontSize: FontSize.bold_size,
    marginTop: 2,
  },
  duotoneCheckCircleParent: {
    height: "62%",
    width: "74.67%",
    top: "13.33%",
    right: "12.67%",
    bottom: "24.67%",
    left: "12.67%",
  },
  property1loader7: {
    top: 2506,
  },
  loader1: {
    borderRadius: Border.br_8xs,
    backgroundColor: Color.blue,
    borderStyle: "dashed",
    borderColor: Color.colorBlueviolet,
    borderWidth: 1,
    width: 368,
    height: 2923,
    overflow: "hidden",
  },
});

export default Loader11;
