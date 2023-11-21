import * as React from "react";
import { StyleSheet, View, Pressable } from "react-native";
import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import { Color, Border } from "../GlobalStyles";

const NAV = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.nav}>
      <LinearGradient
        style={[styles.namehtProperty1on, styles.property1onLayout]}
        locations={[0, 1]}
        colors={["#000", "rgba(0, 0, 0, 0)"]}
      >
        <View style={[styles.rectangleParent, styles.groupChildLayout]}>
          <View style={[styles.groupChild, styles.childPosition]} />
          <Image
            style={styles.outlineCrossSmall}
            contentFit="cover"
            source={require("../assets/outline--crosssmall.png")}
          />
        </View>
        <Image
          style={[styles.namehtProperty1onChild, styles.namehtLayout1]}
          contentFit="cover"
          source={require("../assets/rectangle-39514.png")}
        />
        <View style={styles.frameParent}>
          <View style={styles.rectangleGroup}>
            <View style={[styles.frameChild, styles.frameLayout1]} />
            <Image
              style={[styles.image2Icon, styles.iconPosition1]}
              contentFit="cover"
              source={require("../assets/image-2.png")}
            />
          </View>
          <Image
            style={[styles.frameItem, styles.frameLayout1]}
            contentFit="cover"
            source={require("../assets/frame-71.png")}
          />
          <Pressable
            style={[styles.curvedHome1Parent, styles.curvedFlexBox]}
            onPress={() => navigation.navigate("HOME1")}
          >
            <Image
              style={styles.frameLayout1}
              contentFit="cover"
              source={require("../assets/curved--home13.png")}
            />
            <Image
              style={styles.frameLayout}
              contentFit="cover"
              source={require("../assets/ellipse-3.png")}
            />
          </Pressable>
          <View style={[styles.curvedHome1Parent, styles.curvedFlexBox]}>
            <Image
              style={styles.frameLayout1}
              contentFit="cover"
              source={require("../assets/curved--search1.png")}
            />
            <Image
              style={styles.frameLayout}
              contentFit="cover"
              source={require("../assets/ellipse-3.png")}
            />
          </View>
          <View style={[styles.curvedHome1Parent, styles.curvedFlexBox]}>
            <Image
              style={[styles.speakerHngDn, styles.frameLayout1]}
              contentFit="cover"
              source={require("../assets/speaker-hng-dn2.png")}
            />
            <Image
              style={[styles.frameChild1, styles.frameLayout]}
              contentFit="cover"
              source={require("../assets/ellipse-31.png")}
            />
          </View>
        </View>
      </LinearGradient>
      <LinearGradient
        style={[styles.nameluynProperty1on, styles.property1onLayout]}
        locations={[0, 1]}
        colors={["#000", "rgba(0, 0, 0, 0)"]}
      >
        <View style={[styles.rectangleParent, styles.groupChildLayout]}>
          <View style={[styles.groupChild, styles.childPosition]} />
          <Image
            style={styles.outlineCrossSmall}
            contentFit="cover"
            source={require("../assets/outline--crosssmall.png")}
          />
        </View>
        <Image
          style={[styles.namehtProperty1onChild, styles.namehtLayout1]}
          contentFit="cover"
          source={require("../assets/rectangle-39514.png")}
        />
        <View style={styles.frameParent}>
          <View style={styles.rectangleGroup}>
            <View style={[styles.frameChild, styles.frameLayout1]} />
            <Image
              style={[styles.image3Icon, styles.iconPosition1]}
              contentFit="cover"
              source={require("../assets/image-31.png")}
            />
          </View>
          <Image
            style={[styles.frameItem, styles.frameLayout1]}
            contentFit="cover"
            source={require("../assets/frame-71.png")}
          />
          <Pressable
            style={[styles.curvedHome1Parent, styles.curvedFlexBox]}
            onPress={() => navigation.navigate("HOME1")}
          >
            <Image
              style={styles.frameLayout1}
              contentFit="cover"
              source={require("../assets/curved--home13.png")}
            />
            <Image
              style={styles.frameLayout}
              contentFit="cover"
              source={require("../assets/ellipse-3.png")}
            />
          </Pressable>
          <View style={[styles.curvedHome1Parent, styles.curvedFlexBox]}>
            <Image
              style={styles.frameLayout1}
              contentFit="cover"
              source={require("../assets/curved--search1.png")}
            />
            <Image
              style={styles.frameLayout}
              contentFit="cover"
              source={require("../assets/ellipse-3.png")}
            />
          </View>
          <View style={[styles.curvedHome1Parent, styles.curvedFlexBox]}>
            <Image
              style={[styles.speakerHngDn, styles.frameLayout1]}
              contentFit="cover"
              source={require("../assets/speaker-hng-dn2.png")}
            />
            <Image
              style={[styles.frameChild1, styles.frameLayout]}
              contentFit="cover"
              source={require("../assets/ellipse-31.png")}
            />
          </View>
        </View>
      </LinearGradient>
      <LinearGradient
        style={[styles.namegiaoLuProperty1on, styles.property1onLayout]}
        locations={[0, 1]}
        colors={["#000", "rgba(0, 0, 0, 0)"]}
      >
        <View style={[styles.rectangleParent, styles.groupChildLayout]}>
          <View style={[styles.groupChild, styles.childPosition]} />
          <Image
            style={styles.outlineCrossSmall}
            contentFit="cover"
            source={require("../assets/outline--crosssmall.png")}
          />
        </View>
        <Image
          style={[styles.namehtProperty1onChild, styles.namehtLayout1]}
          contentFit="cover"
          source={require("../assets/rectangle-39514.png")}
        />
        <View style={styles.frameParent}>
          <View style={styles.rectangleGroup}>
            <View style={[styles.frameChild, styles.frameLayout1]} />
            <Image
              style={[styles.image3Icon1, styles.iconLayout]}
              contentFit="cover"
              source={require("../assets/image-32.png")}
            />
          </View>
          <Image
            style={[styles.frameItem, styles.frameLayout1]}
            contentFit="cover"
            source={require("../assets/frame-71.png")}
          />
          <Pressable
            style={[styles.curvedHome1Parent, styles.curvedFlexBox]}
            onPress={() => navigation.navigate("HOME1")}
          >
            <Image
              style={styles.frameLayout1}
              contentFit="cover"
              source={require("../assets/curved--home13.png")}
            />
            <Image
              style={styles.frameLayout}
              contentFit="cover"
              source={require("../assets/ellipse-3.png")}
            />
          </Pressable>
          <View style={[styles.curvedHome1Parent, styles.curvedFlexBox]}>
            <Image
              style={styles.frameLayout1}
              contentFit="cover"
              source={require("../assets/curved--search1.png")}
            />
            <Image
              style={styles.frameLayout}
              contentFit="cover"
              source={require("../assets/ellipse-3.png")}
            />
          </View>
          <View style={[styles.curvedHome1Parent, styles.curvedFlexBox]}>
            <Image
              style={[styles.speakerHngDn, styles.frameLayout1]}
              contentFit="cover"
              source={require("../assets/speaker-hng-dn2.png")}
            />
            <Image
              style={[styles.frameChild1, styles.frameLayout]}
              contentFit="cover"
              source={require("../assets/ellipse-31.png")}
            />
          </View>
        </View>
      </LinearGradient>
      <View style={[styles.namehtProperty1def, styles.namehtLayout1]}>
        <Image
          style={[styles.namehtProperty1onChild, styles.namehtLayout1]}
          contentFit="cover"
          source={require("../assets/rectangle-39514.png")}
        />
        <View style={styles.frameParent}>
          <View style={styles.rectangleGroup}>
            <View style={[styles.frameChild, styles.frameLayout1]} />
            <Image
              style={[styles.image2Icon, styles.iconPosition1]}
              contentFit="cover"
              source={require("../assets/image-2.png")}
            />
          </View>
          <Image
            style={[styles.frameItem, styles.frameLayout1]}
            contentFit="cover"
            source={require("../assets/frame-71.png")}
          />
          <Pressable
            style={[styles.curvedHome1Parent, styles.curvedFlexBox]}
            onPress={() => navigation.navigate("HOME1")}
          >
            <Image
              style={styles.frameLayout1}
              contentFit="cover"
              source={require("../assets/curved--home14.png")}
            />
            <Image
              style={styles.frameLayout}
              contentFit="cover"
              source={require("../assets/ellipse-3.png")}
            />
          </Pressable>
          <View style={[styles.curvedHome1Parent, styles.curvedFlexBox]}>
            <Image
              style={styles.frameLayout1}
              contentFit="cover"
              source={require("../assets/curved--search1.png")}
            />
            <Image
              style={styles.frameLayout}
              contentFit="cover"
              source={require("../assets/ellipse-3.png")}
            />
          </View>
          <View style={[styles.curvedHome1Parent, styles.curvedFlexBox]}>
            <Image
              style={[styles.speakerHngDn, styles.frameLayout1]}
              contentFit="cover"
              source={require("../assets/speaker-hng-dn3.png")}
            />
            <Image
              style={[styles.frameChild1, styles.frameLayout]}
              contentFit="cover"
              source={require("../assets/ellipse-31.png")}
            />
          </View>
        </View>
      </View>
      <View style={[styles.nameluynProperty1def, styles.property1defPosition]}>
        <Image
          style={[styles.namehtProperty1onChild, styles.namehtLayout1]}
          contentFit="cover"
          source={require("../assets/rectangle-39514.png")}
        />
        <View style={styles.frameParent}>
          <View style={styles.rectangleGroup}>
            <View style={[styles.frameChild, styles.frameLayout1]} />
            <Image
              style={[styles.image3Icon2, styles.iconPosition]}
              contentFit="cover"
              source={require("../assets/image-33.png")}
            />
          </View>
          <Image
            style={[styles.frameItem, styles.frameLayout1]}
            contentFit="cover"
            source={require("../assets/frame-71.png")}
          />
          <Pressable
            style={[styles.curvedHome1Parent, styles.curvedFlexBox]}
            onPress={() => navigation.navigate("HOME1")}
          >
            <Image
              style={styles.frameLayout1}
              contentFit="cover"
              source={require("../assets/curved--home14.png")}
            />
            <Image
              style={styles.frameLayout}
              contentFit="cover"
              source={require("../assets/ellipse-3.png")}
            />
          </Pressable>
          <View style={[styles.curvedHome1Parent, styles.curvedFlexBox]}>
            <Image
              style={styles.frameLayout1}
              contentFit="cover"
              source={require("../assets/curved--search1.png")}
            />
            <Image
              style={styles.frameLayout}
              contentFit="cover"
              source={require("../assets/ellipse-3.png")}
            />
          </View>
          <View style={[styles.curvedHome1Parent, styles.curvedFlexBox]}>
            <Image
              style={[styles.speakerHngDn, styles.frameLayout1]}
              contentFit="cover"
              source={require("../assets/speaker-hng-dn3.png")}
            />
            <Image
              style={[styles.frameChild1, styles.frameLayout]}
              contentFit="cover"
              source={require("../assets/ellipse-31.png")}
            />
          </View>
        </View>
      </View>
      <View
        style={[styles.namegiaoLuProperty1def, styles.property1defPosition]}
      >
        <Image
          style={[styles.namehtProperty1onChild, styles.namehtLayout1]}
          contentFit="cover"
          source={require("../assets/rectangle-39514.png")}
        />
        <View style={styles.frameParent}>
          <View style={styles.rectangleGroup}>
            <View style={[styles.frameChild, styles.frameLayout1]} />
            <Image
              style={[styles.image4Icon, styles.iconPosition]}
              contentFit="cover"
              source={require("../assets/image-32.png")}
            />
          </View>
          <Image
            style={[styles.frameItem, styles.frameLayout1]}
            contentFit="cover"
            source={require("../assets/frame-71.png")}
          />
          <Pressable
            style={[styles.curvedHome1Parent, styles.curvedFlexBox]}
            onPress={() => navigation.navigate("HOME1")}
          >
            <Image
              style={styles.frameLayout1}
              contentFit="cover"
              source={require("../assets/curved--home14.png")}
            />
            <Image
              style={styles.frameLayout}
              contentFit="cover"
              source={require("../assets/ellipse-3.png")}
            />
          </Pressable>
          <View style={[styles.curvedHome1Parent, styles.curvedFlexBox]}>
            <Image
              style={styles.frameLayout1}
              contentFit="cover"
              source={require("../assets/curved--search1.png")}
            />
            <Image
              style={styles.frameLayout}
              contentFit="cover"
              source={require("../assets/ellipse-3.png")}
            />
          </View>
          <View style={[styles.curvedHome1Parent, styles.curvedFlexBox]}>
            <Image
              style={[styles.speakerHngDn, styles.frameLayout1]}
              contentFit="cover"
              source={require("../assets/speaker-hng-dn3.png")}
            />
            <Image
              style={[styles.frameChild1, styles.frameLayout]}
              contentFit="cover"
              source={require("../assets/ellipse-31.png")}
            />
          </View>
        </View>
      </View>
      <View style={[styles.namehtProperty1off, styles.namehtLayout]}>
        <View
          style={[
            styles.namehtProperty1offChild,
            styles.property1offChildPosition,
          ]}
        />
        <View style={[styles.curvedMenuHamburgerWrapper, styles.curvedFlexBox]}>
          <Image
            style={styles.frameLayout1}
            contentFit="cover"
            source={require("../assets/curved--menuhamburger1.png")}
          />
        </View>
      </View>
      <View style={[styles.nameluynProperty1off, styles.namehtLayout]}>
        <View
          style={[
            styles.namehtProperty1offChild,
            styles.property1offChildPosition,
          ]}
        />
        <View style={[styles.curvedMenuHamburgerWrapper, styles.curvedFlexBox]}>
          <Image
            style={styles.frameLayout1}
            contentFit="cover"
            source={require("../assets/curved--menuhamburger1.png")}
          />
        </View>
      </View>
      <View style={[styles.namegiaoLuProperty1off, styles.namegiaoLayout1]}>
        <View
          style={[styles.namegiaoLuProperty1offChild, styles.namegiaoLayout1]}
        />
        <View style={[styles.curvedMenuHamburgerWrapper, styles.curvedFlexBox]}>
          <Image
            style={styles.frameLayout1}
            contentFit="cover"
            source={require("../assets/curved--menuhamburger1.png")}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  property1onLayout: {
    backgroundColor: Color.lNBLACK,
    height: 855,
    width: 1194,
    left: 20,
    position: "absolute",
    overflow: "hidden",
  },
  groupChildLayout: {
    width: 150,
    height: 67,
    position: "absolute",
  },
  childPosition: {
    left: 0,
    top: 0,
  },
  namehtLayout1: {
    width: 157,
    height: 855,
    position: "absolute",
  },
  frameLayout1: {
    height: 100,
    width: 100,
  },
  iconPosition1: {
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  curvedFlexBox: {
    justifyContent: "center",
    alignItems: "center",
  },
  frameLayout: {
    height: 22,
    width: 22,
  },
  iconLayout: {
    width: 56,
    height: 67,
  },
  property1defPosition: {
    left: 1408,
    width: 157,
    height: 855,
    position: "absolute",
  },
  iconPosition: {
    marginTop: -47,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  namehtLayout: {
    height: 130,
    width: 157,
    position: "absolute",
  },
  property1offChildPosition: {
    backgroundColor: Color.blue2,
    left: 0,
    top: 0,
  },
  namegiaoLayout1: {
    height: 168,
    width: 157,
    position: "absolute",
  },
  groupChild: {
    borderRadius: Border.br_110xl,
    backgroundColor: Color.colorGray_700,
    height: 67,
    width: 150,
    position: "absolute",
  },
  outlineCrossSmall: {
    top: 15,
    left: 100,
    borderRadius: Border.br_36xl,
    width: 39,
    height: 39,
    position: "absolute",
  },
  rectangleParent: {
    top: 44,
    left: 76,
    height: 67,
  },
  namehtProperty1onChild: {
    left: 0,
    top: 0,
  },
  frameChild: {
    borderRadius: Border.br_116xl,
    backgroundColor: Color.white,
    borderStyle: "solid",
    borderColor: Color.white,
    borderWidth: 4,
    left: 0,
    top: 0,
    position: "absolute",
  },
  image2Icon: {
    marginTop: -49,
    marginLeft: -23,
    width: 45,
    height: 77,
  },
  rectangleGroup: {
    borderRadius: Border.br_107xl,
    height: 120,
    width: 100,
    overflow: "hidden",
  },
  frameItem: {
    marginTop: 44,
  },
  curvedHome1Parent: {
    marginTop: 44,
  },
  speakerHngDn: {
    borderRadius: Border.br_219xl,
  },
  frameChild1: {
    display: "none",
  },
  frameParent: {
    top: 52,
    left: 28,
    alignItems: "center",
    position: "absolute",
  },
  namehtProperty1on: {
    top: 20,
  },
  image3Icon: {
    marginTop: -41,
    marginLeft: -36,
    width: 78,
    height: 67,
  },
  nameluynProperty1on: {
    top: 1232,
  },
  image3Icon1: {
    marginTop: -44,
    marginLeft: -30,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  namegiaoLuProperty1on: {
    top: 2360,
  },
  namehtProperty1def: {
    top: 35,
    left: 1407,
  },
  image3Icon2: {
    marginLeft: -35,
    width: 85,
    height: 73,
  },
  nameluynProperty1def: {
    top: 1232,
  },
  image4Icon: {
    marginLeft: -33,
    width: 56,
    height: 67,
  },
  namegiaoLuProperty1def: {
    top: 2360,
  },
  namehtProperty1offChild: {
    height: 130,
    width: 157,
    position: "absolute",
  },
  curvedMenuHamburgerWrapper: {
    marginTop: -54,
    marginLeft: -49.5,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  namehtProperty1off: {
    top: 896,
    height: 130,
    left: 20,
  },
  nameluynProperty1off: {
    left: 1399,
    top: 896,
    height: 130,
  },
  namegiaoLuProperty1offChild: {
    backgroundColor: Color.blue2,
    left: 0,
    top: 0,
  },
  namegiaoLuProperty1off: {
    left: 1734,
    top: 2360,
  },
  nav: {
    borderRadius: Border.br_8xs,
    borderStyle: "dashed",
    borderColor: Color.colorBlueviolet,
    borderWidth: 1,
    width: 3625,
    height: 4244,
    overflow: "hidden",
  },
});

export default NAV;
