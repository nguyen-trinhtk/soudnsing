import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Border, FontFamily, FontSize, Color, Padding } from "../GlobalStyles";

const A1KaraDetail = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.a1KaraDetail}>
      <View style={styles.frameParent}>
        <View style={[styles.rectangleWrapper, styles.cardInnerFlexBox]}>
          <Image
            style={[styles.frameChild, styles.frameChildLayout]}
            contentFit="cover"
            source={require("../assets/rectangle-395312.png")}
          />
        </View>
        <View style={styles.frameGroup}>
          <View style={styles.thngQuVitNamParent}>
            <Text
              style={[styles.thngQuVit, styles.thanhTypo]}
              numberOfLines={1}
            >
              Thương quá Việt Nam
            </Text>
            <Text style={[styles.quangLinh, styles.quangLinhSpaceBlock]}>
              Quang Linh
            </Text>
            <View style={[styles.frameContainer, styles.quangLinhSpaceBlock]}>
              <View style={styles.aParent}>
                <Text style={[styles.a, styles.aTypo]}>A</Text>
                <View style={styles.aParent}>
                  <Image
                    style={styles.duotoneStar1}
                    contentFit="cover"
                    source={require("../assets/duotone--star14.png")}
                  />
                  <Image
                    style={styles.duotoneStar11}
                    contentFit="cover"
                    source={require("../assets/duotone--star15.png")}
                  />
                  <Image
                    style={styles.duotoneStar1}
                    contentFit="cover"
                    source={require("../assets/duotone--star14.png")}
                  />
                </View>
              </View>
              <View style={[styles.frameWrapper, styles.wrapperFrameFlexBox]}>
                <View style={styles.aParent}>
                  <Image
                    style={[styles.brokenHeadphones, styles.curvedHeartLayout]}
                    contentFit="cover"
                    source={require("../assets/broken--headphones3.png")}
                  />
                  <Text style={[styles.text, styles.aTypo]}>239</Text>
                </View>
              </View>
              <View style={[styles.frameWrapper, styles.wrapperFrameFlexBox]}>
                <View style={styles.aParent}>
                  <Image
                    style={styles.curvedHeartLayout}
                    contentFit="cover"
                    source={require("../assets/curved--heart3.png")}
                  />
                  <Text style={[styles.text, styles.aTypo]}>34</Text>
                </View>
              </View>
            </View>
          </View>
          <Pressable
            style={[styles.htLiWrapper, styles.htLiWrapperFlexBox]}
            onPress={() => navigation.navigate("A21KaraokeMicro")}
          >
            <Text style={styles.htLiTypo}>Hát lại</Text>
          </Pressable>
        </View>
      </View>
      <View style={[styles.frameParent1, styles.frameParentPosition]}>
        <View style={[styles.songCaCngNhauParent, styles.parentFlexBox]}>
          <Text style={[styles.songCaCng, styles.songTypo]}>
            Song ca cùng nhau
          </Text>
          <Text style={[styles.xemTtC, styles.no3Typo]}>Xem tất cả</Text>
        </View>
        <View style={styles.cardParent}>
          <View style={styles.cardLayout}>
            <View style={[styles.cardInner, styles.cardInnerFlexBox]}>
              <Image
                style={[styles.frameChild, styles.frameChildLayout]}
                contentFit="cover"
                source={require("../assets/rectangle-39531.png")}
              />
            </View>
            <View style={styles.parentSpaceBlock}>
              <Text
                style={[styles.thanhHng, styles.thanhTypo]}
                numberOfLines={1}
              >
                Thanh Hằng
              </Text>
              <Text style={[styles.im, styles.imTypo]}>13467 điểm</Text>
            </View>
            <View style={[styles.frameParent2, styles.parentSpaceBlock]}>
              <View style={styles.aParent}>
                <Text style={styles.imTypo}>A</Text>
                <View style={styles.aParent}>
                  <Image
                    style={styles.duotoneStar13Layout}
                    contentFit="cover"
                    source={require("../assets/duotone--star12.png")}
                  />
                  <Image
                    style={styles.duotoneStar13Layout}
                    contentFit="cover"
                    source={require("../assets/duotone--star12.png")}
                  />
                  <Image
                    style={styles.duotoneStar13Layout}
                    contentFit="cover"
                    source={require("../assets/duotone--star12.png")}
                  />
                </View>
              </View>
              <View style={styles.wrapperFrameFlexBox}>
                <View style={styles.aParent}>
                  <Image
                    style={[
                      styles.brokenHeadphones1,
                      styles.duotoneStar13Layout,
                    ]}
                    contentFit="cover"
                    source={require("../assets/broken--headphones2.png")}
                  />
                  <Text style={[styles.text2, styles.imTypo]}>1200</Text>
                </View>
              </View>
              <View style={styles.wrapperFrameFlexBox}>
                <View style={styles.aParent}>
                  <Image
                    style={styles.duotoneStar13Layout}
                    contentFit="cover"
                    source={require("../assets/curved--heart2.png")}
                  />
                  <Text style={[styles.text2, styles.imTypo]}>77</Text>
                </View>
              </View>
            </View>
            <View style={[styles.songCaWrapper, styles.parentSpaceBlock]}>
              <Text style={[styles.songCa, styles.songTypo]} numberOfLines={2}>
                Song ca
              </Text>
            </View>
          </View>
          <View style={[styles.frameParent3, styles.cardLayout]}>
            <View style={[styles.cardInner, styles.cardInnerFlexBox]}>
              <Image
                style={[styles.frameChild, styles.frameChildLayout]}
                contentFit="cover"
                source={require("../assets/rectangle-395313.png")}
              />
            </View>
            <View style={styles.parentSpaceBlock}>
              <Text
                style={[styles.thanhHng, styles.thanhTypo]}
                numberOfLines={1}
              >
                Trung Đức Mai
              </Text>
              <Text style={[styles.im, styles.imTypo]}>8702 điểm</Text>
            </View>
            <View style={[styles.frameParent2, styles.parentSpaceBlock]}>
              <View style={styles.aParent}>
                <Text style={styles.imTypo}>B</Text>
                <View style={styles.aParent}>
                  <Image
                    style={styles.duotoneStar13Layout}
                    contentFit="cover"
                    source={require("../assets/duotone--star12.png")}
                  />
                  <Image
                    style={styles.duotoneStar13Layout}
                    contentFit="cover"
                    source={require("../assets/duotone--star12.png")}
                  />
                  <Image
                    style={styles.duotoneStar13Layout}
                    contentFit="cover"
                    source={require("../assets/duotone--star16.png")}
                  />
                </View>
              </View>
              <View style={styles.wrapperFrameFlexBox}>
                <View style={styles.aParent}>
                  <Image
                    style={[
                      styles.brokenHeadphones1,
                      styles.duotoneStar13Layout,
                    ]}
                    contentFit="cover"
                    source={require("../assets/broken--headphones4.png")}
                  />
                  <Text style={[styles.text2, styles.imTypo]}>201</Text>
                </View>
              </View>
              <View style={styles.wrapperFrameFlexBox}>
                <View style={styles.aParent}>
                  <Image
                    style={styles.duotoneStar13Layout}
                    contentFit="cover"
                    source={require("../assets/curved--heart2.png")}
                  />
                  <Text style={[styles.text2, styles.imTypo]}>31</Text>
                </View>
              </View>
            </View>
            <View style={[styles.songCaWrapper, styles.parentSpaceBlock]}>
              <Text style={[styles.songCa, styles.songTypo]} numberOfLines={2}>
                Song ca
              </Text>
            </View>
          </View>
          <View style={[styles.frameParent3, styles.cardLayout]}>
            <View style={[styles.cardInner, styles.cardInnerFlexBox]}>
              <Image
                style={[styles.frameChild, styles.frameChildLayout]}
                contentFit="cover"
                source={require("../assets/rectangle-395314.png")}
              />
            </View>
            <View style={styles.parentSpaceBlock}>
              <Text
                style={[styles.thanhHng, styles.thanhTypo]}
                numberOfLines={1}
              >
                Huyn Minn
              </Text>
              <Text style={[styles.im, styles.imTypo]}>10008 điểm</Text>
            </View>
            <View style={[styles.frameParent2, styles.parentSpaceBlock]}>
              <View style={styles.aParent}>
                <Text style={styles.imTypo}>A</Text>
                <View style={styles.aParent}>
                  <Image
                    style={styles.duotoneStar13Layout}
                    contentFit="cover"
                    source={require("../assets/duotone--star12.png")}
                  />
                  <Image
                    style={styles.duotoneStar13Layout}
                    contentFit="cover"
                    source={require("../assets/duotone--star12.png")}
                  />
                  <Image
                    style={styles.duotoneStar13Layout}
                    contentFit="cover"
                    source={require("../assets/duotone--star12.png")}
                  />
                </View>
              </View>
              <View style={styles.wrapperFrameFlexBox}>
                <View style={styles.aParent}>
                  <Image
                    style={[
                      styles.brokenHeadphones1,
                      styles.duotoneStar13Layout,
                    ]}
                    contentFit="cover"
                    source={require("../assets/broken--headphones2.png")}
                  />
                  <Text style={[styles.text2, styles.imTypo]}>567</Text>
                </View>
              </View>
              <View style={styles.wrapperFrameFlexBox}>
                <View style={styles.aParent}>
                  <Image
                    style={styles.duotoneStar13Layout}
                    contentFit="cover"
                    source={require("../assets/curved--heart2.png")}
                  />
                  <Text style={[styles.text2, styles.imTypo]}>89</Text>
                </View>
              </View>
            </View>
            <View style={[styles.songCaWrapper, styles.parentSpaceBlock]}>
              <Text style={[styles.songCa, styles.songTypo]} numberOfLines={2}>
                Song ca
              </Text>
            </View>
          </View>
          <View style={[styles.frameParent3, styles.cardLayout]}>
            <View style={[styles.cardInner, styles.cardInnerFlexBox]}>
              <Image
                style={[styles.frameChild, styles.frameChildLayout]}
                contentFit="cover"
                source={require("../assets/rectangle-395315.png")}
              />
            </View>
            <View style={styles.parentSpaceBlock}>
              <Text
                style={[styles.thanhHng, styles.thanhTypo]}
                numberOfLines={1}
              >
                Mỹ Tâm Đặng
              </Text>
              <Text style={[styles.im, styles.imTypo]}>3454 điểm</Text>
            </View>
            <View style={[styles.frameParent2, styles.parentSpaceBlock]}>
              <View style={styles.aParent}>
                <Text style={styles.imTypo}>C</Text>
                <View style={styles.aParent}>
                  <Image
                    style={styles.duotoneStar13Layout}
                    contentFit="cover"
                    source={require("../assets/duotone--star12.png")}
                  />
                  <Image
                    style={styles.duotoneStar13Layout}
                    contentFit="cover"
                    source={require("../assets/duotone--star16.png")}
                  />
                  <Image
                    style={styles.duotoneStar13Layout}
                    contentFit="cover"
                    source={require("../assets/duotone--star16.png")}
                  />
                </View>
              </View>
              <View style={styles.wrapperFrameFlexBox}>
                <View style={styles.aParent}>
                  <Image
                    style={[
                      styles.brokenHeadphones1,
                      styles.duotoneStar13Layout,
                    ]}
                    contentFit="cover"
                    source={require("../assets/broken--headphones2.png")}
                  />
                  <Text style={[styles.text2, styles.imTypo]}>22</Text>
                </View>
              </View>
              <View style={styles.wrapperFrameFlexBox}>
                <View style={styles.aParent}>
                  <Image
                    style={styles.duotoneStar13Layout}
                    contentFit="cover"
                    source={require("../assets/curved--heart2.png")}
                  />
                  <Text style={[styles.text2, styles.imTypo]}>1</Text>
                </View>
              </View>
            </View>
            <View style={[styles.songCaWrapper, styles.parentSpaceBlock]}>
              <Text style={[styles.songCa, styles.songTypo]} numberOfLines={2}>
                Song ca
              </Text>
            </View>
          </View>
          <View style={[styles.frameParent3, styles.cardLayout]}>
            <View style={[styles.cardInner, styles.cardInnerFlexBox]}>
              <Image
                style={[styles.frameChild, styles.frameChildLayout]}
                contentFit="cover"
                source={require("../assets/rectangle-395316.png")}
              />
            </View>
            <View style={styles.parentSpaceBlock}>
              <Text
                style={[styles.thanhHng, styles.thanhTypo]}
                numberOfLines={1}
              >
                Việt Kiều
              </Text>
              <Text style={[styles.im, styles.imTypo]}>12467 điểm</Text>
            </View>
            <View style={[styles.frameParent2, styles.parentSpaceBlock]}>
              <View style={styles.aParent}>
                <Text style={styles.imTypo}>A</Text>
                <View style={styles.aParent}>
                  <Image
                    style={styles.duotoneStar13Layout}
                    contentFit="cover"
                    source={require("../assets/duotone--star12.png")}
                  />
                  <Image
                    style={styles.duotoneStar13Layout}
                    contentFit="cover"
                    source={require("../assets/duotone--star12.png")}
                  />
                  <Image
                    style={styles.duotoneStar13Layout}
                    contentFit="cover"
                    source={require("../assets/duotone--star12.png")}
                  />
                </View>
              </View>
              <View style={styles.wrapperFrameFlexBox}>
                <View style={styles.aParent}>
                  <Image
                    style={[
                      styles.brokenHeadphones1,
                      styles.duotoneStar13Layout,
                    ]}
                    contentFit="cover"
                    source={require("../assets/broken--headphones2.png")}
                  />
                  <Text style={[styles.text2, styles.imTypo]}>1500</Text>
                </View>
              </View>
              <View style={styles.wrapperFrameFlexBox}>
                <View style={styles.aParent}>
                  <Image
                    style={styles.duotoneStar13Layout}
                    contentFit="cover"
                    source={require("../assets/curved--heart2.png")}
                  />
                  <Text style={[styles.text2, styles.imTypo]}>54</Text>
                </View>
              </View>
            </View>
            <View style={[styles.songCaWrapper, styles.parentSpaceBlock]}>
              <Text style={[styles.songCa, styles.songTypo]} numberOfLines={2}>
                Song ca
              </Text>
            </View>
          </View>
          <View style={[styles.frameParent3, styles.cardLayout]}>
            <View style={[styles.cardInner, styles.cardInnerFlexBox]}>
              <Image
                style={[styles.frameChild, styles.frameChildLayout]}
                contentFit="cover"
                source={require("../assets/rectangle-395317.png")}
              />
            </View>
            <View style={styles.parentSpaceBlock}>
              <Text
                style={[styles.thanhHng, styles.thanhTypo]}
                numberOfLines={1}
              >
                Chí Trung
              </Text>
              <Text style={[styles.im, styles.imTypo]}>8122 điểm</Text>
            </View>
            <View style={[styles.frameParent2, styles.parentSpaceBlock]}>
              <View style={styles.aParent}>
                <Text style={styles.imTypo}>B</Text>
                <View style={styles.aParent}>
                  <Image
                    style={styles.duotoneStar13Layout}
                    contentFit="cover"
                    source={require("../assets/duotone--star12.png")}
                  />
                  <Image
                    style={styles.duotoneStar13Layout}
                    contentFit="cover"
                    source={require("../assets/duotone--star12.png")}
                  />
                  <Image
                    style={styles.duotoneStar13Layout}
                    contentFit="cover"
                    source={require("../assets/duotone--star16.png")}
                  />
                </View>
              </View>
              <View style={styles.wrapperFrameFlexBox}>
                <View style={styles.aParent}>
                  <Image
                    style={[
                      styles.brokenHeadphones1,
                      styles.duotoneStar13Layout,
                    ]}
                    contentFit="cover"
                    source={require("../assets/broken--headphones4.png")}
                  />
                  <Text style={[styles.text2, styles.imTypo]}>765</Text>
                </View>
              </View>
              <View style={styles.wrapperFrameFlexBox}>
                <View style={styles.aParent}>
                  <Image
                    style={styles.duotoneStar13Layout}
                    contentFit="cover"
                    source={require("../assets/curved--heart2.png")}
                  />
                  <Text style={[styles.text2, styles.imTypo]}>21</Text>
                </View>
              </View>
            </View>
            <View style={[styles.songCaWrapper, styles.parentSpaceBlock]}>
              <Text style={[styles.songCa, styles.songTypo]} numberOfLines={2}>
                Song ca
              </Text>
            </View>
          </View>
        </View>
      </View>
      <View style={[styles.frameParent13, styles.frameParentPosition]}>
        <View style={[styles.songCaCngNhauParent, styles.parentFlexBox]}>
          <Text style={[styles.songCaCng, styles.songTypo]}>Xếp hạng</Text>
          <Text style={[styles.xemTtC, styles.no3Typo]}>Xem tất cả</Text>
        </View>
        <View style={styles.xpHngGroup}>
          <View style={styles.hngLayout}>
            <View style={[styles.wrapper, styles.wrapperLayout]}>
              <Text style={[styles.text14, styles.songTypo]}>01</Text>
            </View>
            <View style={styles.maskGroupParent}>
              <Image
                style={[styles.maskGroupIcon, styles.frameChildLayout]}
                contentFit="cover"
                source={require("../assets/mask-group.png")}
              />
              <View style={[styles.thanhHngGroup, styles.htLiWrapperFlexBox]}>
                <Text style={[styles.thanhHng1, styles.thanhTypo]}>
                  Thanh Hằng
                </Text>
                <View style={styles.frameParent14}>
                  <View style={styles.aParent}>
                    <Text style={styles.htLiTypo}>A</Text>
                    <View style={styles.aParent}>
                      <Image
                        style={styles.duotoneStar121}
                        contentFit="cover"
                        source={require("../assets/duotone--star1.png")}
                      />
                      <Image
                        style={styles.duotoneStar122Layout}
                        contentFit="cover"
                        source={require("../assets/duotone--star11.png")}
                      />
                      <Image
                        style={styles.duotoneStar121}
                        contentFit="cover"
                        source={require("../assets/duotone--star1.png")}
                      />
                    </View>
                  </View>
                  <View style={styles.frameParent15}>
                    <View style={styles.aParent}>
                      <View style={styles.aParent}>
                        <Image
                          style={[
                            styles.brokenHeadphones7,
                            styles.duotoneStar122Layout,
                          ]}
                          contentFit="cover"
                          source={require("../assets/broken--headphones.png")}
                        />
                        <Text style={[styles.text15, styles.htLiTypo]}>
                          1200
                        </Text>
                      </View>
                    </View>
                    <View
                      style={[
                        styles.frameWrapper14,
                        styles.wrapperFrameFlexBox,
                      ]}
                    >
                      <View style={styles.aParent}>
                        <Image
                          style={styles.duotoneStar122Layout}
                          contentFit="cover"
                          source={require("../assets/curved--heart.png")}
                        />
                        <Text style={[styles.text15, styles.htLiTypo]}>77</Text>
                      </View>
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </View>
          <View style={[styles.xpHng2, styles.hngLayout]}>
            <View style={[styles.container, styles.wrapperLayout]}>
              <Text style={[styles.text14, styles.songTypo]}>02</Text>
            </View>
            <View style={styles.maskGroupParent}>
              <Image
                style={[styles.maskGroupIcon, styles.frameChildLayout]}
                contentFit="cover"
                source={require("../assets/mask-group1.png")}
              />
              <View style={[styles.thanhHngGroup, styles.htLiWrapperFlexBox]}>
                <Text style={[styles.thanhHng1, styles.thanhTypo]}>
                  Việt Kiều
                </Text>
                <View style={styles.frameParent14}>
                  <View style={styles.aParent}>
                    <Text style={styles.htLiTypo}>A</Text>
                    <View style={styles.aParent}>
                      <Image
                        style={styles.duotoneStar121}
                        contentFit="cover"
                        source={require("../assets/duotone--star1.png")}
                      />
                      <Image
                        style={styles.duotoneStar122Layout}
                        contentFit="cover"
                        source={require("../assets/duotone--star11.png")}
                      />
                      <Image
                        style={styles.duotoneStar121}
                        contentFit="cover"
                        source={require("../assets/duotone--star1.png")}
                      />
                    </View>
                  </View>
                  <View style={styles.frameParent15}>
                    <View style={styles.aParent}>
                      <View style={styles.aParent}>
                        <Image
                          style={[
                            styles.brokenHeadphones7,
                            styles.duotoneStar122Layout,
                          ]}
                          contentFit="cover"
                          source={require("../assets/broken--headphones.png")}
                        />
                        <Text style={[styles.text15, styles.htLiTypo]}>
                          1200
                        </Text>
                      </View>
                    </View>
                    <View
                      style={[
                        styles.frameWrapper14,
                        styles.wrapperFrameFlexBox,
                      ]}
                    >
                      <View style={styles.aParent}>
                        <Image
                          style={styles.duotoneStar122Layout}
                          contentFit="cover"
                          source={require("../assets/curved--heart.png")}
                        />
                        <Text style={[styles.text15, styles.htLiTypo]}>77</Text>
                      </View>
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </View>
          <View style={[styles.xpHng2, styles.hngLayout]}>
            <View style={[styles.frame, styles.frameBg]}>
              <Text style={[styles.text14, styles.songTypo]}>03</Text>
            </View>
            <View style={styles.maskGroupParent}>
              <Image
                style={[styles.maskGroupIcon, styles.frameChildLayout]}
                contentFit="cover"
                source={require("../assets/mask-group2.png")}
              />
              <View style={[styles.thanhHngGroup, styles.htLiWrapperFlexBox]}>
                <Text style={[styles.thanhHng3, styles.thanhTypo]}>
                  (Bạn) Trần Tiến
                </Text>
                <View style={styles.frameParent14}>
                  <View style={styles.aParent}>
                    <Text style={styles.htLiTypo}>A</Text>
                    <View style={styles.aParent}>
                      <Image
                        style={styles.duotoneStar121}
                        contentFit="cover"
                        source={require("../assets/duotone--star1.png")}
                      />
                      <Image
                        style={styles.duotoneStar122Layout}
                        contentFit="cover"
                        source={require("../assets/duotone--star11.png")}
                      />
                      <Image
                        style={styles.duotoneStar121}
                        contentFit="cover"
                        source={require("../assets/duotone--star1.png")}
                      />
                    </View>
                  </View>
                  <View style={styles.frameParent15}>
                    <View style={styles.aParent}>
                      <View style={styles.aParent}>
                        <Image
                          style={[
                            styles.brokenHeadphones7,
                            styles.duotoneStar122Layout,
                          ]}
                          contentFit="cover"
                          source={require("../assets/broken--headphones.png")}
                        />
                        <Text style={[styles.text15, styles.htLiTypo]}>
                          1200
                        </Text>
                      </View>
                    </View>
                    <View
                      style={[
                        styles.frameWrapper14,
                        styles.wrapperFrameFlexBox,
                      ]}
                    >
                      <View style={styles.aParent}>
                        <Image
                          style={styles.duotoneStar122Layout}
                          contentFit="cover"
                          source={require("../assets/curved--heart.png")}
                        />
                        <Text style={[styles.text15, styles.htLiTypo]}>77</Text>
                      </View>
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </View>
          <View style={[styles.xpHng2, styles.hngLayout]}>
            <View style={[styles.wrapper1, styles.wrapperLayout]}>
              <Text style={[styles.text23, styles.songTypo]}>04</Text>
            </View>
            <View style={styles.maskGroupParent}>
              <Image
                style={[styles.maskGroupIcon, styles.frameChildLayout]}
                contentFit="cover"
                source={require("../assets/mask-group3.png")}
              />
              <View style={[styles.thanhHngGroup, styles.htLiWrapperFlexBox]}>
                <Text style={[styles.thanhHng1, styles.thanhTypo]}>
                  Thanh Hằng
                </Text>
                <View style={styles.frameParent14}>
                  <View style={styles.aParent}>
                    <Text style={styles.htLiTypo}>A</Text>
                    <View style={styles.aParent}>
                      <Image
                        style={styles.duotoneStar121}
                        contentFit="cover"
                        source={require("../assets/duotone--star1.png")}
                      />
                      <Image
                        style={styles.duotoneStar122Layout}
                        contentFit="cover"
                        source={require("../assets/duotone--star11.png")}
                      />
                      <Image
                        style={styles.duotoneStar121}
                        contentFit="cover"
                        source={require("../assets/duotone--star1.png")}
                      />
                    </View>
                  </View>
                  <View style={styles.frameParent15}>
                    <View style={styles.aParent}>
                      <View style={styles.aParent}>
                        <Image
                          style={[
                            styles.brokenHeadphones7,
                            styles.duotoneStar122Layout,
                          ]}
                          contentFit="cover"
                          source={require("../assets/broken--headphones.png")}
                        />
                        <Text style={[styles.text15, styles.htLiTypo]}>
                          1200
                        </Text>
                      </View>
                    </View>
                    <View
                      style={[
                        styles.frameWrapper14,
                        styles.wrapperFrameFlexBox,
                      ]}
                    >
                      <View style={styles.aParent}>
                        <Image
                          style={styles.duotoneStar122Layout}
                          contentFit="cover"
                          source={require("../assets/curved--heart.png")}
                        />
                        <Text style={[styles.text15, styles.htLiTypo]}>77</Text>
                      </View>
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </View>
          <View style={[styles.xpHng2, styles.hngLayout]}>
            <View style={[styles.wrapper1, styles.wrapperLayout]}>
              <Text style={[styles.text23, styles.songTypo]}>05</Text>
            </View>
            <View style={styles.maskGroupParent}>
              <Image
                style={[styles.maskGroupIcon, styles.frameChildLayout]}
                contentFit="cover"
                source={require("../assets/mask-group4.png")}
              />
              <View style={[styles.thanhHngGroup, styles.htLiWrapperFlexBox]}>
                <Text style={[styles.thanhHng1, styles.thanhTypo]}>
                  Mỹ Hằng
                </Text>
                <View style={styles.frameParent14}>
                  <View style={styles.aParent}>
                    <Text style={styles.htLiTypo}>A</Text>
                    <View style={styles.aParent}>
                      <Image
                        style={styles.duotoneStar121}
                        contentFit="cover"
                        source={require("../assets/duotone--star1.png")}
                      />
                      <Image
                        style={styles.duotoneStar122Layout}
                        contentFit="cover"
                        source={require("../assets/duotone--star11.png")}
                      />
                      <Image
                        style={styles.duotoneStar121}
                        contentFit="cover"
                        source={require("../assets/duotone--star1.png")}
                      />
                    </View>
                  </View>
                  <View style={styles.frameParent15}>
                    <View style={styles.aParent}>
                      <View style={styles.aParent}>
                        <Image
                          style={[
                            styles.brokenHeadphones7,
                            styles.duotoneStar122Layout,
                          ]}
                          contentFit="cover"
                          source={require("../assets/broken--headphones.png")}
                        />
                        <Text style={[styles.text15, styles.htLiTypo]}>
                          1200
                        </Text>
                      </View>
                    </View>
                    <View
                      style={[
                        styles.frameWrapper14,
                        styles.wrapperFrameFlexBox,
                      ]}
                    >
                      <View style={styles.aParent}>
                        <Image
                          style={styles.duotoneStar122Layout}
                          contentFit="cover"
                          source={require("../assets/curved--heart.png")}
                        />
                        <Text style={[styles.text15, styles.htLiTypo]}>77</Text>
                      </View>
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </View>
          <View style={[styles.xpHng2, styles.hngLayout]}>
            <View style={[styles.wrapper1, styles.wrapperLayout]}>
              <Text style={[styles.text23, styles.songTypo]}>06</Text>
            </View>
            <View style={styles.maskGroupParent}>
              <Image
                style={[styles.maskGroupIcon, styles.frameChildLayout]}
                contentFit="cover"
                source={require("../assets/mask-group5.png")}
              />
              <View style={[styles.thanhHngGroup, styles.htLiWrapperFlexBox]}>
                <Text style={[styles.thanhHng1, styles.thanhTypo]}>
                  Trung Đức Mai
                </Text>
                <View style={styles.frameParent14}>
                  <View style={styles.aParent}>
                    <Text style={styles.htLiTypo}>A</Text>
                    <View style={styles.aParent}>
                      <Image
                        style={styles.duotoneStar121}
                        contentFit="cover"
                        source={require("../assets/duotone--star1.png")}
                      />
                      <Image
                        style={styles.duotoneStar122Layout}
                        contentFit="cover"
                        source={require("../assets/duotone--star11.png")}
                      />
                      <Image
                        style={styles.duotoneStar121}
                        contentFit="cover"
                        source={require("../assets/duotone--star1.png")}
                      />
                    </View>
                  </View>
                  <View style={styles.frameParent15}>
                    <View style={styles.aParent}>
                      <View style={styles.aParent}>
                        <Image
                          style={[
                            styles.brokenHeadphones7,
                            styles.duotoneStar122Layout,
                          ]}
                          contentFit="cover"
                          source={require("../assets/broken--headphones.png")}
                        />
                        <Text style={[styles.text15, styles.htLiTypo]}>
                          1200
                        </Text>
                      </View>
                    </View>
                    <View
                      style={[
                        styles.frameWrapper14,
                        styles.wrapperFrameFlexBox,
                      ]}
                    >
                      <View style={styles.aParent}>
                        <Image
                          style={styles.duotoneStar122Layout}
                          contentFit="cover"
                          source={require("../assets/curved--heart.png")}
                        />
                        <Text style={[styles.text15, styles.htLiTypo]}>77</Text>
                      </View>
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={[styles.frameParent26, styles.no3WrapperSpaceBlock]}>
        <View style={styles.parentFlexBox}>
          <Text style={[styles.imSCaContainer, styles.thanhTypo]}>
            <Text style={styles.imSCa}>Điểm số của bạn:</Text>
            <Text style={styles.text32}>{` `}</Text>
            <Text style={styles.text33}>10345</Text>
          </Text>
          <Text style={[styles.xpHng3Container, styles.no3Typo]}>
            <Text style={styles.imSCa}>Xếp hạng</Text>
            <Text style={styles.text33}> 3</Text>
          </Text>
        </View>
        <View style={styles.rectangleParent}>
          <View style={styles.rectangleView} />
          <View style={[styles.frameParent27, styles.no3WrapperPosition]}>
            <View style={[styles.no3Wrapper, styles.no3WrapperPosition]}>
              <Text style={[styles.no3, styles.no3Typo]}>No 3</Text>
            </View>
            <Image
              style={[styles.frameChild4, styles.frameChildPosition]}
              contentFit="cover"
              source={require("../assets/rectangle-39538.png")}
            />
          </View>
        </View>
      </View>
      <View style={[styles.rectangleGroup, styles.frameChildPosition]}>
        <View style={[styles.frameChild5, styles.frameChildPosition]} />
        <View style={[styles.nav, styles.navPosition]}>
          <View style={[styles.navChild, styles.navPosition]} />
          <View style={styles.curvedMenuHamburgerWrapper}>
            <Image
              style={styles.curvedMenuHamburger}
              contentFit="cover"
              source={require("../assets/curved--menuhamburger1.png")}
            />
          </View>
        </View>
        <View style={styles.frameWrapper25}>
          <View style={styles.curvedChevronLeftParent}>
            <Pressable
              style={styles.curvedChevronLeft}
              onPress={() => navigation.goBack()}
            >
              <Image
                style={styles.icon}
                contentFit="cover"
                source={require("../assets/curved--chevronleft1.png")}
              />
            </Pressable>
            <Text
              style={[styles.thngQuVit1, styles.thanhTypo]}
              numberOfLines={1}
            >
              Thương quá Việt Nam
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardInnerFlexBox: {
    borderRadius: Border.br_3xs,
    overflow: "hidden",
    alignSelf: "stretch",
    flexDirection: "row",
  },
  frameChildLayout: {
    maxHeight: "100%",
    alignSelf: "stretch",
  },
  thanhTypo: {
    textAlign: "left",
    fontWeight: "700",
  },
  quangLinhSpaceBlock: {
    marginTop: 18,
    alignSelf: "stretch",
  },
  aTypo: {
    fontFamily: FontFamily.nunitoRegular,
    lineHeight: 36,
    fontSize: FontSize.size_11xl,
    textAlign: "left",
  },
  wrapperFrameFlexBox: {
    justifyContent: "flex-end",
    flexDirection: "row",
  },
  curvedHeartLayout: {
    height: 30,
    width: 31,
  },
  htLiWrapperFlexBox: {
    justifyContent: "center",
    alignSelf: "stretch",
  },
  frameParentPosition: {
    left: 60,
    width: 1134,
    position: "absolute",
  },
  parentFlexBox: {
    alignItems: "flex-end",
    justifyContent: "space-between",
    alignSelf: "stretch",
    flexDirection: "row",
  },
  songTypo: {
    textAlign: "center",
    fontWeight: "700",
  },
  no3Typo: {
    textAlign: "right",
    fontFamily: FontFamily.sFProDisplay,
  },
  imTypo: {
    lineHeight: 29,
    fontSize: FontSize.size_5xl,
    fontFamily: FontFamily.nunitoRegular,
    textAlign: "left",
    color: Color.white,
  },
  parentSpaceBlock: {
    marginTop: 19,
    alignSelf: "stretch",
  },
  duotoneStar13Layout: {
    height: 24,
    width: 24,
  },
  cardLayout: {
    padding: Padding.p_sm,
    width: 289,
    backgroundColor: Color.pink,
    borderRadius: Border.br_sm,
  },
  wrapperLayout: {
    padding: Padding.p_xl,
    borderRadius: Border.br_101xl,
    width: 100,
    justifyContent: "center",
  },
  duotoneStar122Layout: {
    width: 52,
    height: 52,
  },
  htLiTypo: {
    lineHeight: 48,
    fontSize: FontSize.black_size,
    fontFamily: FontFamily.nunitoRegular,
    textAlign: "left",
    color: Color.white,
  },
  hngLayout: {
    height: 150,
    width: 1080,
    alignItems: "center",
    flexDirection: "row",
  },
  frameBg: {
    backgroundColor: Color.colorDarkgoldenrod,
    alignItems: "center",
  },
  no3WrapperSpaceBlock: {
    paddingVertical: Padding.p_3xs,
    paddingHorizontal: Padding.p_xl,
  },
  no3WrapperPosition: {
    right: 0,
    top: "50%",
    position: "absolute",
  },
  frameChildPosition: {
    top: 0,
    left: 0,
    position: "absolute",
  },
  navPosition: {
    width: 157,
    top: 0,
    left: 0,
    position: "absolute",
  },
  frameChild: {
    maxWidth: "100%",
    overflow: "hidden",
    width: "100%",
    flex: 1,
  },
  rectangleWrapper: {
    width: 300,
    overflow: "hidden",
  },
  thngQuVit: {
    color: Color.white,
    fontFamily: FontFamily.bold,
    overflow: "hidden",
    alignSelf: "stretch",
    lineHeight: 60,
    fontSize: FontSize.size_31xl,
  },
  quangLinh: {
    color: Color.colorDarkgray_100,
    fontFamily: FontFamily.nunitoRegular,
    lineHeight: 36,
    fontSize: FontSize.size_11xl,
    textAlign: "left",
  },
  a: {
    color: Color.white,
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
  brokenHeadphones: {
    overflow: "hidden",
  },
  text: {
    marginLeft: 6,
    color: Color.white,
  },
  frameWrapper: {
    marginLeft: 104,
  },
  frameContainer: {
    height: 55,
    flexDirection: "row",
  },
  thngQuVitNamParent: {
    alignSelf: "stretch",
  },
  htLiWrapper: {
    backgroundColor: Color.mainYellow,
    paddingHorizontal: Padding.p_3xs,
    paddingVertical: Padding.p_xl,
    borderRadius: Border.br_xl,
    alignItems: "center",
  },
  frameGroup: {
    marginLeft: 40,
    justifyContent: "space-between",
    alignSelf: "stretch",
    flex: 1,
  },
  frameParent: {
    top: 168,
    left: 59,
    width: 1075,
    height: 300,
    flexDirection: "row",
    position: "absolute",
  },
  songCaCng: {
    fontFamily: FontFamily.sFProDisplay,
    color: Color.white,
    lineHeight: 60,
    fontSize: FontSize.size_31xl,
  },
  xemTtC: {
    fontSize: FontSize.size_17xl,
    lineHeight: 43,
    color: Color.colorDarkgray_200,
    textAlign: "right",
    fontWeight: "700",
  },
  songCaCngNhauParent: {
    paddingRight: Padding.p_41xl,
  },
  cardInner: {
    height: 190,
    overflow: "hidden",
  },
  thanhHng: {
    fontSize: FontSize.size_16xl,
    lineHeight: 42,
    color: Color.white,
    fontFamily: FontFamily.bold,
    overflow: "hidden",
    alignSelf: "stretch",
  },
  im: {
    marginTop: 14,
    alignSelf: "stretch",
  },
  brokenHeadphones1: {
    overflow: "hidden",
  },
  text2: {
    marginLeft: 6,
  },
  frameParent2: {
    justifyContent: "space-between",
    flexDirection: "row",
  },
  songCa: {
    fontSize: FontSize.size_13xl,
    lineHeight: 38,
    color: Color.white,
    fontFamily: FontFamily.bold,
    overflow: "hidden",
    alignSelf: "stretch",
  },
  songCaWrapper: {
    backgroundColor: Color.blue2,
    paddingHorizontal: 0,
    paddingVertical: Padding.p_base,
    borderRadius: Border.br_xl,
  },
  frameParent3: {
    marginLeft: 44,
  },
  cardParent: {
    marginTop: 40,
    width: 1134,
    flexDirection: "row",
  },
  frameParent1: {
    top: 768,
    width: 1134,
  },
  text14: {
    color: Color.black,
    fontFamily: FontFamily.sFProDisplay,
    lineHeight: 60,
    fontSize: FontSize.size_31xl,
  },
  wrapper: {
    backgroundColor: Color.yelStar,
    alignItems: "center",
  },
  maskGroupIcon: {
    width: 150,
  },
  thanhHng1: {
    fontFamily: FontFamily.sFProDisplay,
    color: Color.white,
    lineHeight: 60,
    fontSize: FontSize.size_31xl,
  },
  duotoneStar121: {
    width: 53,
    height: 52,
  },
  brokenHeadphones7: {
    overflow: "hidden",
  },
  text15: {
    marginLeft: 6,
  },
  frameWrapper14: {
    marginLeft: 60,
    alignItems: "center",
  },
  frameParent15: {
    flexDirection: "row",
  },
  frameParent14: {
    marginTop: 15,
    justifyContent: "space-between",
    alignSelf: "stretch",
    flexDirection: "row",
  },
  thanhHngGroup: {
    marginLeft: 26,
    flex: 1,
  },
  maskGroupParent: {
    marginLeft: 44,
    alignItems: "center",
    alignSelf: "stretch",
    flexDirection: "row",
    flex: 1,
  },
  container: {
    backgroundColor: Color.grey3,
    alignItems: "center",
  },
  xpHng2: {
    marginTop: 60,
  },
  frame: {
    borderStyle: "solid",
    borderColor: Color.blue1,
    borderWidth: 6,
    padding: Padding.p_xl,
    borderRadius: Border.br_101xl,
    width: 100,
    justifyContent: "center",
  },
  thanhHng3: {
    color: Color.blue1,
    fontFamily: FontFamily.sFProDisplay,
    lineHeight: 60,
    fontSize: FontSize.size_31xl,
  },
  text23: {
    color: Color.grey3,
    fontFamily: FontFamily.sFProDisplay,
    lineHeight: 60,
    fontSize: FontSize.size_31xl,
  },
  wrapper1: {
    alignItems: "center",
  },
  xpHngGroup: {
    marginTop: 40,
  },
  frameParent13: {
    top: 1387,
    width: 1134,
  },
  imSCa: {
    fontSize: FontSize.size_11xl,
  },
  text32: {
    fontSize: FontSize.size_31xl,
  },
  text33: {
    fontSize: FontSize.black_size,
  },
  imSCaContainer: {
    fontFamily: FontFamily.sFProDisplay,
    color: Color.white,
    flex: 1,
  },
  xpHng3Container: {
    color: Color.white,
    textAlign: "right",
    fontWeight: "700",
  },
  rectangleView: {
    marginTop: -12,
    borderRadius: Border.br_11xl,
    backgroundColor: Color.lightYellow,
    width: 1002,
    left: 0,
    top: "50%",
    height: 24,
    position: "absolute",
  },
  no3: {
    fontWeight: "800",
    lineHeight: 36,
    textAlign: "right",
    fontSize: FontSize.size_11xl,
    color: Color.white,
    flex: 1,
  },
  no3Wrapper: {
    marginTop: -28,
    borderTopRightRadius: Border.br_xl,
    borderBottomRightRadius: Border.br_xl,
    width: 147,
    paddingVertical: Padding.p_3xs,
    paddingHorizontal: Padding.p_xl,
    backgroundColor: Color.colorDarkgoldenrod,
    alignItems: "center",
    justifyContent: "flex-end",
    flexDirection: "row",
  },
  frameChild4: {
    borderRadius: Border.br_53xl,
    width: 88,
    height: 88,
  },
  frameParent27: {
    marginTop: -44,
    width: 198,
    height: 88,
  },
  rectangleParent: {
    height: 90,
    marginTop: 10,
    alignSelf: "stretch",
  },
  frameParent26: {
    top: 528,
    left: 55,
    backgroundColor: Color.colorDarkslategray_100,
    width: 1079,
    borderRadius: Border.br_xl,
    position: "absolute",
  },
  frameChild5: {
    backgroundColor: Color.colorGray_100,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    width: 1194,
    height: 130,
  },
  navChild: {
    backgroundColor: Color.lightBlue,
    height: 130,
  },
  curvedMenuHamburger: {
    height: 100,
    width: 100,
  },
  curvedMenuHamburgerWrapper: {
    marginTop: -54,
    marginLeft: -49.5,
    left: "50%",
    top: "50%",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
  },
  nav: {
    height: 168,
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  curvedChevronLeft: {
    width: 60,
    height: 60,
  },
  thngQuVit1: {
    width: 735,
    color: Color.white,
    fontFamily: FontFamily.bold,
    overflow: "hidden",
    alignSelf: "stretch",
    lineHeight: 60,
    fontSize: FontSize.size_31xl,
  },
  curvedChevronLeftParent: {
    flexDirection: "row",
    flex: 1,
  },
  frameWrapper25: {
    top: 41,
    left: 252,
    width: 943,
    alignItems: "center",
    flexDirection: "row",
    position: "absolute",
  },
  rectangleGroup: {
    width: 1195,
    height: 168,
  },
  a1KaraDetail: {
    backgroundColor: Color.black,
    height: 834,
    width: "100%",
    flex: 1,
  },
});

export default A1KaraDetail;
