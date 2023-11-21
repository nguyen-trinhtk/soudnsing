import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Padding, Color, FontFamily, Border, FontSize } from "../GlobalStyles";

const HuongDanThuAm = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.huongDanThuAm}>
      <View style={[styles.property1off, styles.property1onSpaceBlock]}>
        <View style={[styles.buttonIuHngKara, styles.buttonLayout]}>
          <View style={[styles.frame, styles.frameFlexBox]}>
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
              source={require("../assets/vector6.png")}
            />
            <Image
              style={[styles.groupIcon1, styles.groupIconLayout]}
              contentFit="cover"
              source={require("../assets/group5.png")}
            />
          </View>
          <View style={[styles.gingCaSGcWrapper, styles.wrapperSpaceBlock]}>
            <Text style={styles.gingCaS}>{`Giọng ca
sĩ gốc`}</Text>
          </View>
        </View>
        <View style={[styles.buttonIuHngKara1, styles.buttonLayout]}>
          <Image
            style={styles.curvedRefreshLayout}
            contentFit="cover"
            source={require("../assets/broken--hourglass3.png")}
          />
          <View style={[styles.bQuaNhcDoWrapper, styles.wrapperSpaceBlock]}>
            <Text style={styles.bQuaNhc}>{`Bỏ qua
nhạc dạo`}</Text>
          </View>
        </View>
        <View style={styles.buttonIuHngKara2}>
          <Text style={styles.gingCaS}>Nhấn để tiếp tục</Text>
          <View style={styles.hngLayout}>
            <View style={styles.iuHngKaraplayoffChild} />
          </View>
        </View>
        <View style={[styles.buttonIuHngKara1, styles.buttonLayout]}>
          <Image
            style={[styles.curvedRefresh, styles.curvedRefreshLayout]}
            contentFit="cover"
            source={require("../assets/curved--refresh2.png")}
          />
          <View style={[styles.btULiWrapper, styles.wrapperSpaceBlock]}>
            <Text style={styles.gingCaS}>Bắt đầu lại</Text>
          </View>
        </View>
        <View style={[styles.buttonIuHngKara1, styles.buttonLayout]}>
          <Image
            style={styles.curvedRefreshLayout}
            contentFit="cover"
            source={require("../assets/curved--checkcircle2.png")}
          />
          <View style={[styles.btULiWrapper, styles.wrapperSpaceBlock]}>
            <Text style={styles.gingCaS}>Kết thúc</Text>
          </View>
        </View>
      </View>
      <View style={styles.property1default}>
        <View style={styles.property1defaultChild} />
        <View
          style={[styles.buttonIuHngKaraParent, styles.buttonParentFlexBox]}
        >
          <View style={[styles.buttonIuHngKara, styles.buttonLayout]}>
            <View style={[styles.frame, styles.frameFlexBox]}>
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
            <View style={[styles.gingCaSGcWrapper, styles.wrapperSpaceBlock]}>
              <Text style={styles.gingCaS}>{`Giọng ca
sĩ gốc`}</Text>
            </View>
          </View>
          <View style={[styles.buttonIuHngKara1, styles.buttonLayout]}>
            <Image
              style={styles.curvedRefreshLayout}
              contentFit="cover"
              source={require("../assets/broken--hourglass3.png")}
            />
            <View style={[styles.bQuaNhcDoWrapper, styles.wrapperSpaceBlock]}>
              <Text style={styles.bQuaNhc}>{`Bỏ qua
nhạc dạo`}</Text>
            </View>
          </View>
          <View style={styles.buttonIuHngKara2}>
            <Text style={[styles.nhnTip1, styles.bQuaTypo]}>
              Nhấn để tiếp tục
            </Text>
            <View style={styles.hngLayout}>
              <View style={styles.iuHngKaraplayoffChild} />
            </View>
          </View>
          <View style={[styles.buttonIuHngKara1, styles.buttonLayout]}>
            <Image
              style={[styles.curvedRefresh, styles.curvedRefreshLayout]}
              contentFit="cover"
              source={require("../assets/curved--refresh2.png")}
            />
            <View style={[styles.btULiWrapper, styles.wrapperSpaceBlock]}>
              <Text style={styles.gingCaS}>Bắt đầu lại</Text>
            </View>
          </View>
          <View style={[styles.buttonIuHngKara1, styles.buttonLayout]}>
            <Image
              style={styles.curvedRefreshLayout}
              contentFit="cover"
              source={require("../assets/curved--checkcircle2.png")}
            />
            <View style={[styles.btULiWrapper, styles.wrapperSpaceBlock]}>
              <Text style={styles.gingCaS}>Kết thúc</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={[styles.property1gt1Gc, styles.property1gt1GcPosition]}>
        <View style={[styles.htCngGingCaSGcWrapper, styles.wrapperPosition1]}>
          <Text style={[styles.htCngGing, styles.bQuaNhc3Typo]}>{`Hát cùng
GIỌNG CA SĨ GỐC`}</Text>
        </View>
        <Pressable
          style={[styles.bQuaWrapper, styles.quaPosition]}
          onPress={() => navigation.navigate("A21KaraokeMicro")}
        >
          <Text style={[styles.bQua, styles.bQuaTypo]}>Bỏ qua</Text>
        </Pressable>
        <Pressable
          style={[styles.buttonIuHngKaraGroup, styles.frameViewFlexBox]}
          onPress={() => navigation.navigate("A21KaraokeMicro")}
        >
          <View style={styles.buttonIuHngKara10}>
            <View style={[styles.frame2, styles.frameFlexBox]}>
              <Image
                style={styles.groupIcon4}
                contentFit="cover"
                source={require("../assets/group21.png")}
              />
              <Image
                style={[styles.vectorIcon4, styles.vectorIconPosition1]}
                contentFit="cover"
                source={require("../assets/vector21.png")}
              />
              <Image
                style={[styles.vectorIcon5, styles.vectorIconPosition]}
                contentFit="cover"
                source={require("../assets/vector31.png")}
              />
              <Image
                style={[styles.groupIcon5, styles.groupIconLayout]}
                contentFit="cover"
                source={require("../assets/group31.png")}
              />
            </View>
            <View style={styles.gingCaSGcFrame}>
              <Text style={styles.btULi4Typo}>{`Giọng ca
sĩ gốc`}</Text>
            </View>
          </View>
          <View
            style={[styles.buttonIuHngKaraContainer, styles.buttonFlexBox1]}
          >
            <View style={[styles.buttonIuHngKara11, styles.buttonFlexBox]}>
              <Image
                style={styles.curvedRefreshLayout}
                contentFit="cover"
                source={require("../assets/broken--hourglass.png")}
              />
              <View style={[styles.bQuaNhcDoWrapper, styles.wrapperSpaceBlock]}>
                <Text style={styles.bQuaNhc}>{`Bỏ qua
nhạc dạo`}</Text>
              </View>
            </View>
            <View style={styles.buttonFlexBox}>
              <Text style={[styles.nhnTip1, styles.bQuaTypo]}>
                Nhấn để tiếp tục
              </Text>
              <View style={styles.hngLayout}>
                <View style={styles.iuHngKaraplayoffChild} />
              </View>
            </View>
            <View style={[styles.buttonIuHngKara11, styles.buttonFlexBox]}>
              <Image
                style={[styles.curvedRefresh, styles.curvedRefreshLayout]}
                contentFit="cover"
                source={require("../assets/curved--refresh.png")}
              />
              <View style={[styles.btULiWrapper, styles.wrapperSpaceBlock]}>
                <Text style={styles.gingCaS}>Bắt đầu lại</Text>
              </View>
            </View>
            <View style={[styles.buttonIuHngKara11, styles.buttonFlexBox]}>
              <Image
                style={styles.curvedRefreshLayout}
                contentFit="cover"
                source={require("../assets/curved--checkcircle.png")}
              />
              <View style={[styles.btULiWrapper, styles.wrapperSpaceBlock]}>
                <Text style={styles.gingCaS}>Kết thúc</Text>
              </View>
            </View>
          </View>
        </Pressable>
      </View>
      <View style={[styles.property1gt2NhcDo, styles.property1gt4EndPosition]}>
        <View style={[styles.bQuaNhcDoVoDngUTWrapper, styles.wrapperPosition]}>
          <Text style={[styles.bQuaNhc3, styles.bQuaNhc3Typo]}>{`Bỏ qua nhạc dạo
VÀO DÒNG ĐẦU TIÊN`}</Text>
        </View>
        <View style={[styles.frameView, styles.frameViewFlexBox]}>
          <View style={[styles.buttonIuHngKara, styles.buttonLayout]}>
            <View style={[styles.frame, styles.frameFlexBox]}>
              <Image
                style={styles.groupIcon}
                contentFit="cover"
                source={require("../assets/group7.png")}
              />
              <Image
                style={[styles.vectorIcon, styles.vectorIconPosition1]}
                contentFit="cover"
                source={require("../assets/vector8.png")}
              />
              <Image
                style={[styles.vectorIcon1, styles.vectorIconPosition]}
                contentFit="cover"
                source={require("../assets/vector9.png")}
              />
              <Image
                style={[styles.groupIcon1, styles.groupIconLayout]}
                contentFit="cover"
                source={require("../assets/group8.png")}
              />
            </View>
            <View style={[styles.gingCaSGcWrapper, styles.wrapperSpaceBlock]}>
              <Text style={styles.gingCaS}>{`Giọng ca
sĩ gốc`}</Text>
            </View>
          </View>
          <View style={styles.buttonIuHngKara10}>
            <Image
              style={styles.curvedRefresh4Layout}
              contentFit="cover"
              source={require("../assets/broken--hourglass5.png")}
            />
            <View style={styles.gingCaSGcFrame}>
              <Text style={styles.btULi4Typo}>{`Bỏ qua
Nhạc dạo`}</Text>
            </View>
          </View>
          <View style={[styles.buttonIuHngKaraParent1, styles.buttonFlexBox1]}>
            <View style={styles.buttonFlexBox}>
              <Text style={[styles.nhnTip1, styles.bQuaTypo]}>
                Nhấn để tiếp tục
              </Text>
              <View style={styles.hngLayout}>
                <View style={styles.iuHngKaraplayoffChild} />
              </View>
            </View>
            <View style={[styles.buttonIuHngKara11, styles.buttonFlexBox]}>
              <Image
                style={[styles.curvedRefresh, styles.curvedRefreshLayout]}
                contentFit="cover"
                source={require("../assets/curved--refresh.png")}
              />
              <View style={[styles.btULiWrapper, styles.wrapperSpaceBlock]}>
                <Text style={styles.gingCaS}>Bắt đầu lại</Text>
              </View>
            </View>
            <View style={[styles.buttonIuHngKara11, styles.buttonFlexBox]}>
              <Image
                style={styles.curvedRefreshLayout}
                contentFit="cover"
                source={require("../assets/curved--checkcircle.png")}
              />
              <View style={[styles.btULiWrapper, styles.wrapperSpaceBlock]}>
                <Text style={styles.gingCaS}>Kết thúc</Text>
              </View>
            </View>
          </View>
        </View>
        <Pressable
          style={[styles.bQuaContainer, styles.quaPosition]}
          onPress={() => navigation.navigate("A21KaraokeMicro")}
        >
          <Text style={[styles.bQua, styles.bQuaTypo]}>Bỏ qua</Text>
        </Pressable>
      </View>
      <View style={[styles.property1gt3HtLi, styles.property1gt1GcPosition]}>
        <View style={[styles.htLiTUWrapper, styles.wrapperPosition1]}>
          <Text style={[styles.htLiT, styles.htLiTTypo]}>HÁT LẠI TỪ ĐẦU</Text>
        </View>
        <View style={[styles.buttonIuHngKaraGroup, styles.frameViewFlexBox]}>
          <View style={[styles.buttonIuHngKara, styles.buttonLayout]}>
            <View style={[styles.frame, styles.frameFlexBox]}>
              <Image
                style={styles.groupIcon}
                contentFit="cover"
                source={require("../assets/group7.png")}
              />
              <Image
                style={[styles.vectorIcon, styles.vectorIconPosition1]}
                contentFit="cover"
                source={require("../assets/vector8.png")}
              />
              <Image
                style={[styles.vectorIcon1, styles.vectorIconPosition]}
                contentFit="cover"
                source={require("../assets/vector10.png")}
              />
              <Image
                style={[styles.groupIcon1, styles.groupIconLayout]}
                contentFit="cover"
                source={require("../assets/group8.png")}
              />
            </View>
            <View style={[styles.gingCaSGcWrapper, styles.wrapperSpaceBlock]}>
              <Text style={styles.gingCaS}>{`Giọng ca
sĩ gốc`}</Text>
            </View>
          </View>
          <View style={[styles.buttonIuHngKara1, styles.buttonLayout]}>
            <Image
              style={styles.curvedRefreshLayout}
              contentFit="cover"
              source={require("../assets/broken--hourglass.png")}
            />
            <View style={[styles.bQuaNhcDoWrapper, styles.wrapperSpaceBlock]}>
              <Text style={styles.bQuaNhc}>{`Bỏ qua
nhạc dạo`}</Text>
            </View>
          </View>
          <View style={styles.buttonFlexBox}>
            <Text style={[styles.nhnTip1, styles.bQuaTypo]}>
              Nhấn để tiếp tục
            </Text>
            <View style={styles.hngLayout}>
              <View style={styles.iuHngKaraplayoffChild} />
            </View>
          </View>
          <View style={styles.buttonIuHngKara10}>
            <Image
              style={[styles.curvedRefresh4, styles.curvedRefresh4Layout]}
              contentFit="cover"
              source={require("../assets/curved--refresh5.png")}
            />
            <View style={styles.gingCaSGcFrame}>
              <Text style={[styles.btULi4, styles.btULi4Typo]}>
                Bắt đầu lại
              </Text>
            </View>
          </View>
          <View style={[styles.buttonIuHngKara11, styles.buttonFlexBox]}>
            <Image
              style={styles.curvedRefreshLayout}
              contentFit="cover"
              source={require("../assets/curved--checkcircle.png")}
            />
            <View style={[styles.btULiWrapper, styles.wrapperSpaceBlock]}>
              <Text style={styles.gingCaS}>Kết thúc</Text>
            </View>
          </View>
        </View>
        <Pressable
          style={[styles.bQuaWrapper, styles.quaPosition]}
          onPress={() => navigation.navigate("A21KaraokeMicro")}
        >
          <Text style={[styles.bQua, styles.bQuaTypo]}>Bỏ qua</Text>
        </Pressable>
      </View>
      <Pressable
        style={[styles.property1gt4End, styles.property1gt4EndPosition]}
        onPress={() => navigation.navigate("A21aPlay")}
      >
        <View style={[styles.honThnhBnThuWrapper, styles.wrapperPosition]}>
          <Text style={[styles.honThnhBn, styles.htLiTTypo]}>
            HOÀN THÀNH BẢN THU
          </Text>
        </View>
        <View style={[styles.frameView, styles.frameViewFlexBox]}>
          <View style={[styles.buttonIuHngKara, styles.buttonLayout]}>
            <View style={[styles.frame, styles.frameFlexBox]}>
              <Image
                style={styles.groupIcon}
                contentFit="cover"
                source={require("../assets/group7.png")}
              />
              <Image
                style={[styles.vectorIcon, styles.vectorIconPosition1]}
                contentFit="cover"
                source={require("../assets/vector8.png")}
              />
              <Image
                style={[styles.vectorIcon1, styles.vectorIconPosition]}
                contentFit="cover"
                source={require("../assets/vector10.png")}
              />
              <Image
                style={[styles.groupIcon1, styles.groupIconLayout]}
                contentFit="cover"
                source={require("../assets/group8.png")}
              />
            </View>
            <View style={[styles.gingCaSGcWrapper, styles.wrapperSpaceBlock]}>
              <Text style={styles.gingCaS}>{`Giọng ca
sĩ gốc`}</Text>
            </View>
          </View>
          <View style={[styles.buttonIuHngKara1, styles.buttonLayout]}>
            <Image
              style={styles.curvedRefreshLayout}
              contentFit="cover"
              source={require("../assets/broken--hourglass41.png")}
            />
            <View style={[styles.bQuaNhcDoWrapper, styles.wrapperSpaceBlock]}>
              <Text style={styles.bQuaNhc}>{`Bỏ qua
nhạc dạo`}</Text>
            </View>
          </View>
          <View style={styles.buttonFlexBox}>
            <Text style={[styles.nhnTip1, styles.bQuaTypo]}>
              Nhấn để tiếp tục
            </Text>
            <View style={styles.hngLayout}>
              <View style={styles.iuHngKaraplayoffChild} />
            </View>
          </View>
          <View style={[styles.buttonIuHngKara, styles.buttonLayout]}>
            <View style={[styles.frame, styles.frameFlexBox]}>
              <Image
                style={styles.groupIcon}
                contentFit="cover"
                source={require("../assets/group9.png")}
              />
              <Image
                style={[styles.vectorIcon, styles.vectorIconPosition1]}
                contentFit="cover"
                source={require("../assets/vector12.png")}
              />
              <Image
                style={[styles.vectorIcon1, styles.vectorIconPosition]}
                contentFit="cover"
                source={require("../assets/vector13.png")}
              />
              <Image
                style={[styles.groupIcon1, styles.groupIconLayout]}
                contentFit="cover"
                source={require("../assets/group10.png")}
              />
            </View>
            <View style={[styles.gingCaSGcWrapper, styles.wrapperSpaceBlock]}>
              <Text style={styles.gingCaS}>{`Giọng ca
sĩ gốc`}</Text>
            </View>
          </View>
          <View style={styles.buttonIuHngKara10}>
            <Image
              style={styles.curvedRefresh4Layout}
              contentFit="cover"
              source={require("../assets/curved--checkcircle3.png")}
            />
            <View style={styles.gingCaSGcFrame}>
              <Text style={[styles.btULi4, styles.btULi4Typo]}>Kết thúc</Text>
            </View>
          </View>
        </View>
        <Pressable
          style={[styles.bQuaContainer, styles.quaPosition]}
          onPress={() => navigation.navigate("A21KaraokeMicro")}
        >
          <Text style={[styles.bQua, styles.bQuaTypo]}>Bỏ qua</Text>
        </Pressable>
      </Pressable>
      <View style={[styles.property1on, styles.property1onSpaceBlock]}>
        <View style={styles.buttonParentFlexBox}>
          <View style={[styles.buttonIuHngKara, styles.buttonLayout]}>
            <View style={[styles.frame, styles.frameFlexBox]}>
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
                source={require("../assets/vector6.png")}
              />
              <Image
                style={[styles.groupIcon1, styles.groupIconLayout]}
                contentFit="cover"
                source={require("../assets/group5.png")}
              />
            </View>
            <View style={[styles.gingCaSGcWrapper, styles.wrapperSpaceBlock]}>
              <Text style={styles.gingCaS}>{`Giọng ca
sĩ gốc`}</Text>
            </View>
          </View>
          <View style={[styles.buttonIuHngKara1, styles.buttonLayout]}>
            <Image
              style={styles.curvedRefreshLayout}
              contentFit="cover"
              source={require("../assets/broken--hourglass3.png")}
            />
            <View style={[styles.bQuaNhcDoWrapper, styles.wrapperSpaceBlock]}>
              <Text style={styles.bQuaNhc}>{`Bỏ qua
nhạc dạo`}</Text>
            </View>
          </View>
          <View style={styles.buttonIuHngKara2}>
            <Text style={[styles.nhnTip1, styles.bQuaTypo]}>
              Nhấn để tiếp tục
            </Text>
            <View style={[styles.iuHngKaraplayoff6, styles.hngLayout]}>
              <View style={styles.rectangleParent}>
                <View style={[styles.groupChild, styles.groupLayout]} />
                <View style={[styles.groupItem, styles.groupLayout]} />
              </View>
            </View>
          </View>
          <View style={[styles.buttonIuHngKara1, styles.buttonLayout]}>
            <Image
              style={[styles.curvedRefresh, styles.curvedRefreshLayout]}
              contentFit="cover"
              source={require("../assets/curved--refresh2.png")}
            />
            <View style={[styles.btULiWrapper, styles.wrapperSpaceBlock]}>
              <Text style={styles.gingCaS}>Bắt đầu lại</Text>
            </View>
          </View>
          <View style={[styles.buttonIuHngKara1, styles.buttonLayout]}>
            <Image
              style={styles.curvedRefreshLayout}
              contentFit="cover"
              source={require("../assets/curved--checkcircle2.png")}
            />
            <View style={[styles.btULiWrapper, styles.wrapperSpaceBlock]}>
              <Text style={styles.gingCaS}>Kết thúc</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  property1onSpaceBlock: {
    paddingBottom: Padding.p_31xl,
    paddingTop: Padding.p_3xs,
    paddingHorizontal: Padding.p_81xl,
    width: 1194,
    position: "absolute",
    justifyContent: "space-between",
    alignItems: "flex-end",
    flexDirection: "row",
    backgroundColor: Color.black,
    overflow: "hidden",
  },
  buttonLayout: {
    width: 138,
    justifyContent: "flex-end",
  },
  frameFlexBox: {
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
  wrapperSpaceBlock: {
    marginTop: 10,
    flexDirection: "row",
  },
  curvedRefreshLayout: {
    height: 80,
    width: 80,
  },
  buttonParentFlexBox: {
    width: 994,
    justifyContent: "space-between",
    alignItems: "flex-end",
    flexDirection: "row",
  },
  bQuaTypo: {
    fontFamily: FontFamily.sFProDisplay,
    fontWeight: "600",
    textAlign: "center",
  },
  property1gt1GcPosition: {
    backgroundColor: Color.colorGray_400,
    top: 197,
    height: 853,
    width: 1194,
    position: "absolute",
    overflow: "hidden",
  },
  wrapperPosition1: {
    padding: Padding.p_11xl,
    borderRadius: Border.br_xl,
    left: "50%",
    top: 243,
    flexDirection: "row",
    position: "absolute",
  },
  bQuaNhc3Typo: {
    fontWeight: "800",
    lineHeight: 84,
    fontSize: FontSize.size_51xl,
    color: Color.white,
    fontFamily: FontFamily.sFProDisplay,
  },
  quaPosition: {
    backgroundColor: Color.colorGray_300,
    marginLeft: 361.5,
    padding: Padding.p_11xl,
    borderRadius: Border.br_xl,
    left: "50%",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    position: "absolute",
  },
  frameViewFlexBox: {
    left: 100,
    width: 994,
    justifyContent: "space-between",
    alignItems: "flex-end",
    flexDirection: "row",
    position: "absolute",
  },
  buttonFlexBox1: {
    justifyContent: "space-between",
    alignItems: "flex-end",
    flexDirection: "row",
  },
  buttonFlexBox: {
    opacity: 0.3,
    alignItems: "center",
  },
  property1gt4EndPosition: {
    top: 1134,
    backgroundColor: Color.colorGray_400,
    height: 853,
    width: 1194,
    position: "absolute",
    overflow: "hidden",
  },
  wrapperPosition: {
    top: 247,
    padding: Padding.p_11xl,
    borderRadius: Border.br_xl,
    left: "50%",
    flexDirection: "row",
    position: "absolute",
  },
  htLiTTypo: {
    height: 133,
    fontWeight: "800",
    lineHeight: 84,
    fontSize: FontSize.size_51xl,
    display: "flex",
    color: Color.white,
    fontFamily: FontFamily.sFProDisplay,
    alignItems: "flex-end",
  },
  curvedRefresh4Layout: {
    height: 200,
    width: 200,
  },
  btULi4Typo: {
    color: Color.blue2,
    textAlign: "center",
    fontFamily: FontFamily.sFProDisplay,
    fontWeight: "600",
    lineHeight: 33,
    fontSize: FontSize.size_11xl,
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
    alignItems: "center",
  },
  gingCaS: {
    textAlign: "center",
    color: Color.white,
    fontFamily: FontFamily.sFProDisplay,
    fontWeight: "600",
    lineHeight: 33,
    fontSize: FontSize.size_11xl,
  },
  gingCaSGcWrapper: {
    alignItems: "center",
  },
  buttonIuHngKara: {
    height: 144,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  bQuaNhc: {
    width: 122,
    justifyContent: "center",
    display: "flex",
    height: 54,
    textAlign: "center",
    color: Color.white,
    fontFamily: FontFamily.sFProDisplay,
    fontWeight: "600",
    lineHeight: 33,
    fontSize: FontSize.size_11xl,
    alignItems: "center",
  },
  bQuaNhcDoWrapper: {
    height: 54,
    alignItems: "center",
  },
  buttonIuHngKara1: {
    justifyContent: "flex-end",
    alignItems: "center",
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
  buttonIuHngKara2: {
    alignItems: "center",
  },
  curvedRefresh: {
    overflow: "hidden",
  },
  btULiWrapper: {
    justifyContent: "center",
    height: 54,
  },
  property1off: {
    bottom: 480,
    left: 20,
  },
  property1defaultChild: {
    flex: 1,
    alignSelf: "stretch",
  },
  nhnTip1: {
    color: Color.colorGray_600,
    textAlign: "center",
    lineHeight: 33,
    fontSize: FontSize.size_11xl,
    fontWeight: "600",
  },
  buttonIuHngKaraParent: {
    height: 194,
  },
  property1default: {
    top: 2010,
    paddingBottom: Padding.p_41xl,
    height: 853,
    left: 1405,
    alignItems: "center",
    width: 1194,
    backgroundColor: Color.black,
    position: "absolute",
    overflow: "hidden",
  },
  htCngGing: {
    textAlign: "center",
  },
  htCngGingCaSGcWrapper: {
    marginLeft: -507,
    justifyContent: "center",
    alignItems: "center",
  },
  bQua: {
    fontSize: FontSize.bold_size,
    lineHeight: 48,
    color: Color.black,
    textAlign: "center",
  },
  bQuaWrapper: {
    top: 180,
  },
  groupIcon4: {
    height: 199,
    width: 200,
    zIndex: 0,
  },
  vectorIcon4: {
    height: "26.87%",
    width: "25.9%",
    top: "18.37%",
    right: "56.1%",
    bottom: "54.76%",
    left: "18%",
  },
  vectorIcon5: {
    height: "28.59%",
    width: "29.45%",
    top: "53.9%",
    right: "17.8%",
    bottom: "17.51%",
    left: "52.75%",
  },
  groupIcon5: {
    width: "35.1%",
    top: "32.46%",
    right: "32.45%",
    bottom: "32.41%",
    left: "32.45%",
  },
  frame2: {
    alignItems: "center",
  },
  gingCaSGcFrame: {
    marginTop: 20,
    justifyContent: "center",
    alignSelf: "stretch",
    flexDirection: "row",
  },
  buttonIuHngKara10: {
    borderRadius: Border.br_202xl,
    backgroundColor: Color.colorGray_500,
    width: 258,
    height: 343,
    paddingHorizontal: Padding.p_10xl,
    paddingVertical: Padding.p_11xl,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  buttonIuHngKara11: {
    justifyContent: "flex-end",
    width: 138,
  },
  buttonIuHngKaraContainer: {
    width: 710,
    paddingBottom: Padding.p_11xl,
  },
  buttonIuHngKaraGroup: {
    top: 465,
  },
  property1gt1Gc: {
    left: 30,
  },
  bQuaNhc3: {
    textAlign: "left",
  },
  bQuaNhcDoVoDngUTWrapper: {
    marginLeft: -333,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonIuHngKaraParent1: {
    width: 546,
  },
  frameView: {
    top: 469,
  },
  bQuaContainer: {
    top: 184,
  },
  property1gt2NhcDo: {
    left: 30,
  },
  htLiT: {
    textAlign: "right",
    width: 692,
  },
  htLiTUWrapper: {
    marginLeft: -359,
    width: 680,
    justifyContent: "flex-end",
    alignItems: "flex-end",
  },
  curvedRefresh4: {
    overflow: "hidden",
  },
  btULi4: {
    width: 127,
    height: 54,
  },
  property1gt3HtLi: {
    left: 1405,
  },
  honThnhBn: {
    width: 830,
    justifyContent: "center",
    textAlign: "center",
  },
  honThnhBnThuWrapper: {
    marginLeft: -369,
    justifyContent: "flex-end",
    alignItems: "flex-end",
  },
  property1gt4End: {
    left: 1405,
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
  iuHngKaraplayoff6: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Color.black,
    marginTop: 40,
    height: 170,
    width: 170,
    borderColor: Color.white,
  },
  property1on: {
    bottom: 102,
    left: 0,
  },
  huongDanThuAm: {
    borderRadius: Border.br_8xs,
    borderStyle: "dashed",
    borderColor: Color.colorBlueviolet,
    borderWidth: 1,
    width: 2823,
    height: 2918,
    overflow: "hidden",
  },
});

export default HuongDanThuAm;
