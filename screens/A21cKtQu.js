import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import { FontSize, FontFamily, Color, Padding, Border } from "../GlobalStyles";

const A21cKtQu = () => {
  return (
    <View style={styles.a21cKtQu}>
      <View style={styles.frameParent}>
        <View style={styles.trNhCaBnCCiThParent}>
          <Text style={styles.trNhCaContainer}>
            <Text style={styles.trNhCa}>{`TRÍ NHỚ CỦA BẠN ĐÃ ĐƯỢC CẢI THIỆN!
`}</Text>
            <Text style={styles.ngTiVTypo}>
              Hãy duy trì ca hát để luyện tập nhé!
            </Text>
          </Text>
          <View style={styles.playKtQuParent}>
            <View style={[styles.playKtQu, styles.playKtQuLayout]}>
              <Image
                style={styles.playKtQuChild}
                contentFit="cover"
                source={require("../assets/rectangle-39564.png")}
              />
              <View style={[styles.beat39549, styles.playKtQuLayout]} />
              <Image
                style={styles.playKtQuItem}
                contentFit="cover"
                source={require("../assets/rectangle-39565.png")}
              />
              <View style={styles.gc2} />
            </View>
            <View style={styles.frameGroup}>
              <View style={styles.bnCTChtLmCaSParent}>
                <Text style={[styles.bnCT, styles.bnCTFlexBox]}>
                  Bạn có tố chất làm ca sĩ!
                </Text>
                <Text style={[styles.text, styles.textTypo]}>“</Text>
                <Text style={[styles.text1, styles.textTypo]}>“</Text>
              </View>
              <View style={styles.frameContainer}>
                <View style={styles.frameView}>
                  <View style={[styles.aWrapper, styles.wrapperLayout]}>
                    <Text style={[styles.a, styles.aTypo]}>A</Text>
                  </View>
                  <View
                    style={[styles.duotoneStar1Parent, styles.parentFlexBox]}
                  >
                    <Image
                      style={styles.duotoneStar1}
                      contentFit="cover"
                      source={require("../assets/duotone--star18.png")}
                    />
                    <Image
                      style={styles.duotoneStar1}
                      contentFit="cover"
                      source={require("../assets/duotone--star18.png")}
                    />
                    <Image
                      style={styles.duotoneStar1}
                      contentFit="cover"
                      source={require("../assets/duotone--star18.png")}
                    />
                  </View>
                </View>
                <View style={[styles.imWrapper, styles.wrapperLayout]}>
                  <Text style={[styles.im, styles.aTypo]}>239 điểm</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={[styles.frameParent1, styles.parentFlexBox]}>
          <View style={[styles.chLuKtQuWrapper, styles.wrapperFlexBox]}>
            <Text style={[styles.chLuKt, styles.ngTiVTypo]}>
              Chỉ lưu kết quả
            </Text>
          </View>
          <View style={[styles.ngTiVLuKtQuWrapper, styles.wrapperFlexBox]}>
            <Text style={[styles.ngTiV, styles.ngTiVTypo]}>
              Đăng tải và lưu kết quả
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  playKtQuLayout: {
    width: 582,
    position: "absolute",
  },
  bnCTFlexBox: {
    display: "flex",
    alignItems: "center",
  },
  textTypo: {
    lineHeight: 55,
    fontSize: FontSize.size_31xl,
    textAlign: "left",
    fontStyle: "italic",
    fontFamily: FontFamily.sFProDisplay,
    color: Color.white,
    position: "absolute",
  },
  wrapperLayout: {
    padding: Padding.p_3xs,
    borderRadius: Border.br_4xl,
    height: 80,
    justifyContent: "center",
    alignItems: "center",
  },
  aTypo: {
    lineHeight: 66,
    fontSize: FontSize.size_41xl,
    fontFamily: FontFamily.sFProDisplay,
    fontWeight: "600",
    textAlign: "center",
  },
  parentFlexBox: {
    flexDirection: "row",
    position: "absolute",
  },
  wrapperFlexBox: {
    padding: Padding.p_16xl,
    borderRadius: Border.br_2xl,
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
  },
  ngTiVTypo: {
    lineHeight: 44,
    fontSize: FontSize.black_size,
    fontFamily: FontFamily.sFProDisplay,
  },
  trNhCa: {
    fontSize: FontSize.nold_size,
    lineHeight: 64,
    fontFamily: FontFamily.sFProDisplay,
    fontWeight: "600",
  },
  trNhCaContainer: {
    textAlign: "center",
    color: Color.white,
  },
  playKtQuChild: {
    marginLeft: -291,
    width: 738,
    height: 441,
    left: "50%",
    top: 0,
    position: "absolute",
  },
  beat39549: {
    bottom: 0,
    height: 160,
    left: 0,
  },
  playKtQuItem: {
    marginTop: -173.5,
    marginLeft: -245,
    top: "50%",
    width: 491,
    height: 491,
    left: "50%",
    position: "absolute",
  },
  gc2: {
    top: 23,
    width: 75,
    height: 75,
    left: 0,
    position: "absolute",
  },
  playKtQu: {
    marginLeft: -474.5,
    borderRadius: Border.br_11xl,
    shadowColor: "rgba(255, 255, 255, 0.51)",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowRadius: 15,
    elevation: 15,
    shadowOpacity: 1,
    height: 347,
    left: "50%",
    top: 0,
    overflow: "hidden",
  },
  bnCT: {
    top: 6,
    left: 31,
    fontSize: FontSize.size_5xl,
    lineHeight: 26,
    width: 263,
    height: 93,
    textAlign: "left",
    fontStyle: "italic",
    display: "flex",
    fontFamily: FontFamily.sFProDisplay,
    color: Color.white,
    position: "absolute",
  },
  text: {
    top: 22,
    left: 8,
    width: 21,
    height: 31,
    display: "flex",
    alignItems: "center",
  },
  text1: {
    top: 64,
    left: 279,
  },
  bnCTChtLmCaSParent: {
    borderRadius: Border.br_xl,
    borderColor: Color.white,
    borderWidth: 1,
    width: 316,
    height: 104,
    borderStyle: "solid",
  },
  a: {
    color: Color.black,
  },
  aWrapper: {
    backgroundColor: Color.lightYellow,
    width: 80,
    left: 0,
    top: 0,
    position: "absolute",
  },
  duotoneStar1: {
    width: 64,
    height: 64,
  },
  duotoneStar1Parent: {
    top: 8,
    left: 87,
  },
  frameView: {
    height: 80,
    alignSelf: "stretch",
  },
  im: {
    color: Color.lightYellow,
    alignSelf: "stretch",
    lineHeight: 66,
    fontSize: FontSize.size_41xl,
  },
  imWrapper: {
    marginTop: 24,
  },
  frameContainer: {
    borderRadius: Border.br_15xl,
    backgroundColor: Color.lightBlue,
    padding: Padding.p_xl,
    marginTop: 24,
    justifyContent: "center",
  },
  frameGroup: {
    left: 633,
    top: 0,
    position: "absolute",
  },
  playKtQuParent: {
    width: 949,
    height: 352,
    marginTop: 55,
  },
  trNhCaBnCCiThParent: {
    top: 147,
    left: 123,
    alignItems: "center",
    position: "absolute",
  },
  chLuKt: {
    color: Color.mainYellow,
    fontWeight: "600",
    fontSize: FontSize.black_size,
    textAlign: "center",
  },
  chLuKtQuWrapper: {
    backgroundColor: Color.black,
    borderColor: Color.mainYellow,
    borderWidth: 3,
    justifyContent: "center",
    borderStyle: "solid",
  },
  ngTiV: {
    fontWeight: "600",
    fontSize: FontSize.black_size,
    textAlign: "center",
    color: Color.white,
  },
  ngTiVLuKtQuWrapper: {
    backgroundColor: Color.mainYellow,
    justifyContent: "space-between",
    marginLeft: 40,
  },
  frameParent1: {
    marginLeft: -489,
    top: 694,
    width: 979,
    left: "50%",
  },
  frameParent: {
    width: 1194,
    height: 853,
    left: 0,
    top: 0,
    position: "absolute",
  },
  a21cKtQu: {
    backgroundColor: Color.colorGray_200,
    width: "100%",
    height: 855,
    overflow: "hidden",
    flex: 1,
  },
});

export default A21cKtQu;
