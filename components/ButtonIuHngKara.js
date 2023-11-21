import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontSize, FontFamily, Padding, Color, Border } from "../GlobalStyles";

const ButtonIuHngKara = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.buttonIuHngKara}>
      <View style={[styles.namegingCsGcSizenorS, styles.sizenorFlexBox]}>
        <View style={[styles.frame, styles.frameFlexBox1]}>
          <Image
            style={styles.groupIcon}
            contentFit="cover"
            source={require("../assets/group4.png")}
          />
          <Image
            style={[styles.vectorIcon, styles.vectorIconPosition1]}
            contentFit="cover"
            source={require("../assets/vector41.png")}
          />
          <Image
            style={[styles.vectorIcon1, styles.vectorIconPosition]}
            contentFit="cover"
            source={require("../assets/vector51.png")}
          />
          <Image
            style={[styles.groupIcon1, styles.groupIconLayout]}
            contentFit="cover"
            source={require("../assets/group5.png")}
          />
        </View>
        <View style={[styles.gingCaSGcWrapper, styles.gingSpaceBlock]}>
          <Text style={[styles.gingCaS, styles.gingTypo]}>{`Giọng ca
sĩ gốc`}</Text>
        </View>
      </View>
      <View style={[styles.namegingCsGcSizebigS, styles.sizebigLayout]}>
        <View style={styles.frameFlexBox1}>
          <Image
            style={styles.groupIcon2}
            contentFit="cover"
            source={require("../assets/group21.png")}
          />
          <Image
            style={[styles.vectorIcon2, styles.vectorIconPosition1]}
            contentFit="cover"
            source={require("../assets/vector21.png")}
          />
          <Image
            style={[styles.vectorIcon3, styles.vectorIconPosition]}
            contentFit="cover"
            source={require("../assets/vector31.png")}
          />
          <Image
            style={[styles.groupIcon3, styles.groupIconLayout]}
            contentFit="cover"
            source={require("../assets/group31.png")}
          />
        </View>
        <View style={styles.gingCaSGcContainer}>
          <Text style={styles.btULiTypo}>{`Giọng ca
sĩ gốc`}</Text>
        </View>
      </View>
      <View style={[styles.namenhcDoSizebigStatu, styles.sizebigLayout]}>
        <Image
          style={styles.curvedRefreshLayout}
          contentFit="cover"
          source={require("../assets/broken--hourglass4.png")}
        />
        <View style={styles.gingCaSGcContainer}>
          <Text style={styles.btULiTypo}>{`Bỏ qua
Nhạc dạo`}</Text>
        </View>
      </View>
      <View style={[styles.namebtULiSizebigSt, styles.sizebigLayout]}>
        <Image
          style={[styles.curvedRefresh, styles.curvedRefreshLayout]}
          contentFit="cover"
          source={require("../assets/curved--refresh4.png")}
        />
        <View style={styles.gingCaSGcContainer}>
          <Text style={[styles.btULi, styles.btULiTypo]}>Bắt đầu lại</Text>
        </View>
      </View>
      <View style={[styles.namektThcSizebigStatu, styles.sizebigLayout]}>
        <Image
          style={styles.curvedRefreshLayout}
          contentFit="cover"
          source={require("../assets/curved--checkcircle3.png")}
        />
        <View style={styles.gingCaSGcContainer}>
          <Text style={[styles.btULi, styles.btULiTypo]}>Kết thúc</Text>
        </View>
      </View>
      <View style={[styles.namegingCsGcSizenorS1, styles.sizenorFlexBox]}>
        <View style={[styles.frame, styles.frameFlexBox1]}>
          <Image
            style={styles.groupIcon}
            contentFit="cover"
            source={require("../assets/group.png")}
          />
          <Image
            style={[styles.vectorIcon, styles.vectorIconPosition1]}
            contentFit="cover"
            source={require("../assets/vector7.png")}
          />
          <Image
            style={[styles.vectorIcon1, styles.vectorIconPosition]}
            contentFit="cover"
            source={require("../assets/vector11.png")}
          />
          <Image
            style={[styles.groupIcon1, styles.groupIconLayout]}
            contentFit="cover"
            source={require("../assets/group6.png")}
          />
        </View>
        <View style={[styles.gingCaSGcFrame, styles.gingSpaceBlock]}>
          <Text style={[styles.gingCaS2, styles.gingTypo]}>{`Giọng ca
sĩ gốc`}</Text>
        </View>
      </View>
      <View style={[styles.namenhcDoSizenorStatu, styles.namenhcPosition]}>
        <Image
          style={styles.curvedRefresh1Layout}
          contentFit="cover"
          source={require("../assets/broken--hourglass2.png")}
        />
        <View style={[styles.gingCaSGcFrame, styles.gingSpaceBlock]}>
          <Text style={[styles.bQuaNhc1, styles.gingTypo]}>{`Bỏ qua
nhạc dạo`}</Text>
        </View>
      </View>
      <View style={[styles.namebtULiSizenorSt, styles.sizenorFlexBox]}>
        <Image
          style={[styles.curvedRefresh1, styles.curvedRefresh1Layout]}
          contentFit="cover"
          source={require("../assets/curved--refresh3.png")}
        />
        <View style={[styles.btULiContainer, styles.gingSpaceBlock]}>
          <Text style={[styles.gingCaS, styles.gingTypo]}>Bắt đầu lại</Text>
        </View>
      </View>
      <View style={[styles.namektThcSizenorStatu, styles.sizenorFlexBox]}>
        <Image
          style={styles.curvedRefresh1Layout}
          contentFit="cover"
          source={require("../assets/curved--checkcircle2.png")}
        />
        <View style={[styles.btULiContainer, styles.gingSpaceBlock]}>
          <Text style={[styles.gingCaS, styles.gingTypo]}>Kết thúc</Text>
        </View>
      </View>
      <View style={[styles.namenhcDoSizenorStatu1, styles.namenhcPosition]}>
        <Image
          style={styles.curvedRefresh1Layout}
          contentFit="cover"
          source={require("../assets/broken--hourglass2.png")}
        />
        <View style={[styles.gingCaSGcWrapper, styles.gingSpaceBlock]}>
          <Text style={[styles.gingCaS, styles.gingTypo]}>{`Bỏ qua
nhạc dạo`}</Text>
        </View>
      </View>
      <View style={[styles.nameplaySizebigStatusof, styles.nameplayPosition1]}>
        <Text style={[styles.gingCaS, styles.gingTypo]}>Nhấn để tiếp tục</Text>
        <View style={styles.hngLayout}>
          <View style={styles.iuHngKaraplayoffChild} />
        </View>
      </View>
      <View style={[styles.nameplaySizenorStatusof, styles.nameplayPosition1]}>
        <Text style={[styles.nhnTip1, styles.gingTypo]}>Nhấn để tiếp tục</Text>
        <View style={styles.hngLayout}>
          <View style={styles.iuHngKaraplayoffChild} />
        </View>
      </View>
      <View style={[styles.nameplaySizenorStatuson, styles.nameplayPosition]}>
        <Text style={[styles.nhnTip1, styles.gingTypo]}>Nhấn để tiếp tục</Text>
        <View style={[styles.iuHngKaraplayoff2, styles.hngLayout]}>
          <View style={styles.rectangleParent}>
            <View style={[styles.groupChild, styles.groupLayout]} />
            <View style={[styles.groupItem, styles.groupLayout]} />
          </View>
        </View>
      </View>
      <View style={[styles.nameplaySizebigStatuson, styles.nameplayPosition]}>
        <Text style={[styles.nhnTip1, styles.gingTypo]}>Nhấn để tiếp tục</Text>
        <View style={[styles.iuHngKaraplayoff2, styles.hngLayout]}>
          <View style={styles.rectangleParent}>
            <View style={[styles.groupChild, styles.groupLayout]} />
            <View style={[styles.groupItem, styles.groupLayout]} />
          </View>
        </View>
      </View>
      <View
        style={[styles.namebackgroundSizenorSta, styles.namebackgroundPosition]}
      >
        <Text style={styles.phngNn}>Phông nền</Text>
        <View style={[styles.curvedImage1Wrapper, styles.curvedLayout]}>
          <Image
            style={styles.curvedImage1}
            contentFit="cover"
            source={require("../assets/curved--image1.png")}
          />
        </View>
      </View>
      <View
        style={[
          styles.namebackgroundSizenorSta1,
          styles.namebackgroundPosition,
        ]}
      >
        <View style={styles.curvedLayout}>
          <Image
            style={styles.curvedImage1}
            contentFit="cover"
            source={require("../assets/curved--image1.png")}
          />
        </View>
      </View>
      <Pressable
        style={[
          styles.namebackgroundSizenorSta2,
          styles.namebackgroundPosition,
        ]}
        onPress={() => navigation.navigate("A22VidBack")}
      >
        <View style={styles.curvedLayout}>
          <Image
            style={styles.curvedImage1}
            contentFit="cover"
            source={require("../assets/curved--image1.png")}
          />
        </View>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  sizenorFlexBox: {
    justifyContent: "flex-end",
    width: 138,
    position: "absolute",
    alignItems: "center",
  },
  frameFlexBox1: {
    flexDirection: "row",
    alignItems: "center",
  },
  vectorIconPosition1: {
    zIndex: 1,
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  vectorIconPosition: {
    zIndex: 2,
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  groupIconLayout: {
    zIndex: 3,
    height: "35.13%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  gingSpaceBlock: {
    marginTop: 10,
    flexDirection: "row",
  },
  gingTypo: {
    textAlign: "center",
    fontWeight: "600",
    lineHeight: 33,
    fontSize: FontSize.size_11xl,
    fontFamily: FontFamily.sFProDisplay,
  },
  sizebigLayout: {
    paddingVertical: Padding.p_11xl,
    paddingHorizontal: Padding.p_10xl,
    height: 343,
    width: 258,
    backgroundColor: Color.colorGray_500,
    borderRadius: Border.br_202xl,
    top: 55,
    justifyContent: "flex-end",
    alignItems: "center",
    position: "absolute",
  },
  curvedRefreshLayout: {
    height: 200,
    width: 200,
  },
  btULiTypo: {
    color: Color.blue2,
    textAlign: "center",
    fontFamily: FontFamily.sFProDisplay,
    fontWeight: "600",
    lineHeight: 33,
    fontSize: FontSize.size_11xl,
  },
  namenhcPosition: {
    left: 210,
    justifyContent: "flex-end",
    alignItems: "center",
    width: 138,
    position: "absolute",
  },
  curvedRefresh1Layout: {
    height: 80,
    width: 80,
  },
  nameplayPosition1: {
    top: 453,
    alignItems: "center",
    position: "absolute",
  },
  nameplayPosition: {
    top: 700,
    alignItems: "center",
    position: "absolute",
  },
  hngLayout: {
    marginTop: 40,
    height: 170,
    width: 170,
    borderColor: Color.white,
    borderWidth: 8,
    borderStyle: "solid",
    borderRadius: Border.br_101xl,
    flexDirection: "row",
  },
  groupLayout: {
    width: 18,
    backgroundColor: Color.white,
    top: 0,
    height: 72,
    position: "absolute",
  },
  namebackgroundPosition: {
    paddingBottom: Padding.p_3xs,
    paddingRight: Padding.p_3xs,
    paddingTop: Padding.p_3xs,
    paddingLeft: Padding.p_xl,
    borderRadius: Border.br_101xl,
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
    position: "absolute",
  },
  curvedLayout: {
    height: 100,
    width: 100,
    backgroundColor: Color.colorGray_400,
    borderRadius: Border.br_101xl,
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
  },
  groupIcon: {
    width: "100%",
    zIndex: 0,
    maxHeight: "100%",
    maxWidth: "100%",
    flex: 1,
    alignSelf: "stretch",
    overflow: "hidden",
  },
  vectorIcon: {
    height: "28.82%",
    width: "27.76%",
    top: "17.5%",
    right: "55.13%",
    bottom: "53.68%",
    left: "17.11%",
  },
  vectorIcon1: {
    height: "30.39%",
    width: "31.32%",
    top: "53.03%",
    right: "16.84%",
    bottom: "16.58%",
    left: "51.84%",
  },
  groupIcon1: {
    width: "35.13%",
    top: "32.5%",
    right: "32.37%",
    bottom: "32.37%",
    left: "32.5%",
  },
  frame: {
    width: 76,
    height: 76,
  },
  gingCaS: {
    color: Color.white,
    textAlign: "center",
    fontWeight: "600",
    lineHeight: 33,
    fontSize: FontSize.size_11xl,
  },
  gingCaSGcWrapper: {
    alignItems: "center",
  },
  namegingCsGcSizenorS: {
    height: 144,
    left: 20,
    justifyContent: "flex-end",
    width: 138,
    position: "absolute",
    top: 524,
  },
  groupIcon2: {
    height: 199,
    width: 200,
    zIndex: 0,
  },
  vectorIcon2: {
    height: "26.87%",
    width: "25.9%",
    top: "18.37%",
    right: "56.1%",
    bottom: "54.76%",
    left: "18%",
  },
  vectorIcon3: {
    height: "28.59%",
    width: "29.45%",
    top: "53.9%",
    right: "17.8%",
    bottom: "17.51%",
    left: "52.75%",
  },
  groupIcon3: {
    width: "35.1%",
    top: "32.46%",
    right: "32.45%",
    bottom: "32.41%",
    left: "32.45%",
  },
  gingCaSGcContainer: {
    marginTop: 20,
    justifyContent: "center",
    alignSelf: "stretch",
    flexDirection: "row",
  },
  namegingCsGcSizebigS: {
    left: 51,
  },
  namenhcDoSizebigStatu: {
    left: 388,
  },
  curvedRefresh: {
    overflow: "hidden",
  },
  btULi: {
    width: 127,
    height: 54,
  },
  namebtULiSizebigSt: {
    left: 710,
  },
  namektThcSizebigStatu: {
    left: 1047,
  },
  gingCaS2: {
    color: Color.colorTomato_100,
    fontWeight: "600",
    lineHeight: 33,
    fontSize: FontSize.size_11xl,
    textAlign: "center",
  },
  gingCaSGcFrame: {
    height: 54,
    alignItems: "center",
  },
  namegingCsGcSizenorS1: {
    top: 771,
    height: 144,
    left: 20,
    justifyContent: "flex-end",
    width: 138,
    position: "absolute",
  },
  bQuaNhc1: {
    display: "flex",
    width: 122,
    height: 54,
    justifyContent: "center",
    color: Color.white,
    textAlign: "center",
    fontWeight: "600",
    lineHeight: 33,
    fontSize: FontSize.size_11xl,
    alignItems: "center",
  },
  namenhcDoSizenorStatu: {
    top: 771,
  },
  curvedRefresh1: {
    overflow: "hidden",
  },
  btULiContainer: {
    height: 54,
    justifyContent: "center",
  },
  namebtULiSizenorSt: {
    left: 626,
    top: 771,
    justifyContent: "flex-end",
    width: 138,
    position: "absolute",
  },
  namektThcSizenorStatu: {
    left: 800,
    top: 771,
    justifyContent: "flex-end",
    width: 138,
    position: "absolute",
  },
  namenhcDoSizenorStatu1: {
    top: 524,
  },
  iuHngKaraplayoffChild: {
    backgroundColor: Color.colorTomato_100,
    borderColor: Color.black,
    borderWidth: 8,
    borderStyle: "solid",
    borderRadius: Border.br_101xl,
    flex: 1,
    alignSelf: "stretch",
  },
  nameplaySizebigStatusof: {
    left: 384,
  },
  nhnTip1: {
    color: Color.colorGray_600,
    fontWeight: "600",
    lineHeight: 33,
    fontSize: FontSize.size_11xl,
    textAlign: "center",
  },
  nameplaySizenorStatusof: {
    left: 667,
  },
  groupChild: {
    left: 0,
  },
  groupItem: {
    left: 31,
  },
  rectangleParent: {
    width: 49,
    height: 72,
  },
  iuHngKaraplayoff2: {
    backgroundColor: Color.black,
    justifyContent: "center",
    alignItems: "center",
  },
  nameplaySizenorStatuson: {
    left: 384,
  },
  nameplaySizebigStatuson: {
    left: 1067,
  },
  phngNn: {
    fontSize: FontSize.bold_size,
    lineHeight: 48,
    fontWeight: "800",
    color: Color.black,
    textAlign: "left",
    fontFamily: FontFamily.sFProDisplay,
  },
  curvedImage1: {
    width: 82,
    height: 82,
  },
  curvedImage1Wrapper: {
    marginLeft: 25,
  },
  namebackgroundSizenorSta: {
    top: 1134,
    backgroundColor: "rgba(255, 255, 255, 0.77)",
    right: 1033,
    paddingBottom: Padding.p_3xs,
    paddingRight: Padding.p_3xs,
    paddingTop: Padding.p_3xs,
    paddingLeft: Padding.p_xl,
  },
  namebackgroundSizenorSta1: {
    top: 1309,
    right: 1033,
    paddingBottom: Padding.p_3xs,
    paddingRight: Padding.p_3xs,
    paddingTop: Padding.p_3xs,
    paddingLeft: Padding.p_xl,
  },
  namebackgroundSizenorSta2: {
    top: 1461,
    right: 1028,
  },
  buttonIuHngKara: {
    borderRadius: Border.br_8xs,
    borderStyle: "dashed",
    borderColor: Color.colorBlueviolet,
    borderWidth: 1,
    width: 1441,
    height: 1708,
    overflow: "hidden",
  },
});

export default ButtonIuHngKara;
