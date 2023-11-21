import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";
import { Padding, Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const Lyric = () => {
  return (
    <View style={styles.lyric}>
      <View style={[styles.property11, styles.propertySpaceBlock]}>
        <View style={styles.countParentFlexBox}>
          <View style={[styles.lyricWord, styles.lyricSpaceBlock]}>
            <Image
              style={styles.lyricChildLayout}
              contentFit="cover"
              source={require("../assets/ellipse-42.png")}
            />
            <Text style={[styles.em, styles.emTypo]}>3</Text>
          </View>
          <View style={[styles.lyricWord, styles.lyricSpaceBlock]}>
            <Image
              style={styles.lyricChildLayout}
              contentFit="cover"
              source={require("../assets/ellipse-42.png")}
            />
            <Text style={[styles.em, styles.emTypo]}>3</Text>
          </View>
          <View style={[styles.lyricWord, styles.lyricSpaceBlock]}>
            <Image
              style={styles.lyricChildLayout}
              contentFit="cover"
              source={require("../assets/ellipse-42.png")}
            />
            <Text style={[styles.em, styles.emTypo]}>3</Text>
          </View>
          <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
            <Image
              style={[styles.ellipseIcon, styles.lyricChildLayout]}
              contentFit="cover"
              source={require("../assets/ellipse-43.png")}
            />
            <Text style={[styles.em3, styles.em3Typo]}>3</Text>
          </View>
          <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
            <Image
              style={[styles.ellipseIcon, styles.lyricChildLayout]}
              contentFit="cover"
              source={require("../assets/ellipse-43.png")}
            />
            <Text style={[styles.em3, styles.em3Typo]}>2</Text>
          </View>
          <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
            <Image
              style={[styles.ellipseIcon, styles.lyricChildLayout]}
              contentFit="cover"
              source={require("../assets/ellipse-43.png")}
            />
            <Text style={[styles.em3, styles.em3Typo]}>1</Text>
          </View>
        </View>
        <View style={styles.frameParent}>
          <View style={styles.countParentFlexBox}>
            <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
              <Image
                style={styles.lyricChildLayout}
                contentFit="cover"
                source={require("../assets/ellipse-43.png")}
              />
              <Text style={[styles.em6, styles.em3Typo]}>Em</Text>
            </View>
            <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
              <Image
                style={styles.lyricChildLayout}
                contentFit="cover"
                source={require("../assets/ellipse-43.png")}
              />
              <Text style={[styles.em6, styles.em3Typo]}>nghe</Text>
            </View>
            <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
              <Image
                style={styles.lyricChildLayout}
                contentFit="cover"
                source={require("../assets/ellipse-43.png")}
              />
              <Text style={[styles.em6, styles.em3Typo]}>{`gì `}</Text>
            </View>
            <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
              <Image
                style={styles.lyricChildLayout}
                contentFit="cover"
                source={require("../assets/ellipse-43.png")}
              />
              <Text style={[styles.em6, styles.em3Typo]}>không</Text>
            </View>
            <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
              <Image
                style={styles.lyricChildLayout}
                contentFit="cover"
                source={require("../assets/ellipse-43.png")}
              />
              <Text style={[styles.em6, styles.em3Typo]}>hỡi</Text>
            </View>
            <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
              <Image
                style={styles.lyricChildLayout}
                contentFit="cover"
                source={require("../assets/ellipse-43.png")}
              />
              <Text style={[styles.em6, styles.em3Typo]}>em</Text>
            </View>
          </View>
          <View style={styles.lyricFlexBox}>
            <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
              <Image
                style={styles.lyricChildLayout}
                contentFit="cover"
                source={require("../assets/ellipse-43.png")}
              />
              <Text style={[styles.em6, styles.em3Typo]}>Con</Text>
            </View>
            <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
              <Image
                style={styles.lyricChildLayout}
                contentFit="cover"
                source={require("../assets/ellipse-43.png")}
              />
              <Text style={[styles.em6, styles.em3Typo]}>chim</Text>
            </View>
            <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
              <Image
                style={styles.lyricChildLayout}
                contentFit="cover"
                source={require("../assets/ellipse-43.png")}
              />
              <Text style={[styles.em6, styles.em3Typo]}>{`nó `}</Text>
            </View>
            <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
              <Image
                style={styles.lyricChildLayout}
                contentFit="cover"
                source={require("../assets/ellipse-43.png")}
              />
              <Text style={[styles.em6, styles.em3Typo]}>hót</Text>
            </View>
            <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
              <Image
                style={styles.lyricChildLayout}
                contentFit="cover"
                source={require("../assets/ellipse-43.png")}
              />
              <Text style={[styles.em6, styles.em3Typo]}>vang</Text>
            </View>
            <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
              <Image
                style={styles.lyricChildLayout}
                contentFit="cover"
                source={require("../assets/ellipse-43.png")}
              />
              <Text style={[styles.em6, styles.em3Typo]}>đầu</Text>
            </View>
            <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
              <Image
                style={styles.lyricChildLayout}
                contentFit="cover"
                source={require("../assets/ellipse-43.png")}
              />
              <Text style={[styles.em6, styles.em3Typo]}>hè</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={[styles.property112, styles.propertyPosition3]}>
        <View style={styles.countParentFlexBox}>
          <View style={[styles.lyricWord19, styles.lyricSpaceBlock]}>
            <Image
              style={styles.lyricChildLayout}
              contentFit="cover"
              source={require("../assets/ellipse-44.png")}
            />
            <Text style={[styles.em, styles.emTypo]}>3</Text>
          </View>
          <View style={[styles.lyricWord, styles.lyricSpaceBlock]}>
            <Image
              style={styles.lyricChildLayout}
              contentFit="cover"
              source={require("../assets/ellipse-42.png")}
            />
            <Text style={[styles.em, styles.emTypo]}>3</Text>
          </View>
          <View style={[styles.lyricWord, styles.lyricSpaceBlock]}>
            <Image
              style={styles.lyricChildLayout}
              contentFit="cover"
              source={require("../assets/ellipse-42.png")}
            />
            <Text style={[styles.em, styles.emTypo]}>3</Text>
          </View>
          <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
            <Image
              style={[styles.ellipseIcon, styles.lyricChildLayout]}
              contentFit="cover"
              source={require("../assets/ellipse-43.png")}
            />
            <Text style={[styles.em3, styles.em3Typo]}>3</Text>
          </View>
          <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
            <Image
              style={[styles.ellipseIcon, styles.lyricChildLayout]}
              contentFit="cover"
              source={require("../assets/ellipse-43.png")}
            />
            <Text style={[styles.em3, styles.em3Typo]}>2</Text>
          </View>
          <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
            <Image
              style={[styles.ellipseIcon, styles.lyricChildLayout]}
              contentFit="cover"
              source={require("../assets/ellipse-43.png")}
            />
            <Text style={[styles.em3, styles.em3Typo]}>1</Text>
          </View>
        </View>
        <View style={styles.frameParent}>
          <View style={styles.countParentFlexBox}>
            <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
              <Image
                style={styles.lyricChildLayout}
                contentFit="cover"
                source={require("../assets/ellipse-43.png")}
              />
              <Text style={[styles.em6, styles.em3Typo]}>Em</Text>
            </View>
            <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
              <Image
                style={styles.lyricChildLayout}
                contentFit="cover"
                source={require("../assets/ellipse-43.png")}
              />
              <Text style={[styles.em6, styles.em3Typo]}>nghe</Text>
            </View>
            <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
              <Image
                style={styles.lyricChildLayout}
                contentFit="cover"
                source={require("../assets/ellipse-43.png")}
              />
              <Text style={[styles.em6, styles.em3Typo]}>{`gì `}</Text>
            </View>
            <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
              <Image
                style={styles.lyricChildLayout}
                contentFit="cover"
                source={require("../assets/ellipse-43.png")}
              />
              <Text style={[styles.em6, styles.em3Typo]}>không</Text>
            </View>
            <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
              <Image
                style={styles.lyricChildLayout}
                contentFit="cover"
                source={require("../assets/ellipse-43.png")}
              />
              <Text style={[styles.em6, styles.em3Typo]}>hỡi</Text>
            </View>
            <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
              <Image
                style={styles.lyricChildLayout}
                contentFit="cover"
                source={require("../assets/ellipse-43.png")}
              />
              <Text style={[styles.em6, styles.em3Typo]}>em</Text>
            </View>
          </View>
          <View style={styles.lyricFlexBox}>
            <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
              <Image
                style={styles.lyricChildLayout}
                contentFit="cover"
                source={require("../assets/ellipse-43.png")}
              />
              <Text style={[styles.em6, styles.em3Typo]}>Con</Text>
            </View>
            <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
              <Image
                style={styles.lyricChildLayout}
                contentFit="cover"
                source={require("../assets/ellipse-43.png")}
              />
              <Text style={[styles.em6, styles.em3Typo]}>chim</Text>
            </View>
            <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
              <Image
                style={styles.lyricChildLayout}
                contentFit="cover"
                source={require("../assets/ellipse-43.png")}
              />
              <Text style={[styles.em6, styles.em3Typo]}>{`nó `}</Text>
            </View>
            <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
              <Image
                style={styles.lyricChildLayout}
                contentFit="cover"
                source={require("../assets/ellipse-43.png")}
              />
              <Text style={[styles.em6, styles.em3Typo]}>hót</Text>
            </View>
            <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
              <Image
                style={styles.lyricChildLayout}
                contentFit="cover"
                source={require("../assets/ellipse-43.png")}
              />
              <Text style={[styles.em6, styles.em3Typo]}>vang</Text>
            </View>
            <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
              <Image
                style={styles.lyricChildLayout}
                contentFit="cover"
                source={require("../assets/ellipse-43.png")}
              />
              <Text style={[styles.em6, styles.em3Typo]}>đầu</Text>
            </View>
            <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
              <Image
                style={styles.lyricChildLayout}
                contentFit="cover"
                source={require("../assets/ellipse-43.png")}
              />
              <Text style={[styles.em6, styles.em3Typo]}>hè</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={[styles.property114, styles.propertyPosition3]}>
        <View style={styles.countParentFlexBox}>
          <View style={[styles.lyricWord19, styles.lyricSpaceBlock]}>
            <Image
              style={styles.lyricChildLayout}
              contentFit="cover"
              source={require("../assets/ellipse-44.png")}
            />
            <Text style={[styles.em, styles.emTypo]}>3</Text>
          </View>
          <View style={[styles.lyricWord19, styles.lyricSpaceBlock]}>
            <Image
              style={styles.lyricChildLayout}
              contentFit="cover"
              source={require("../assets/ellipse-44.png")}
            />
            <Text style={[styles.em, styles.emTypo]}>3</Text>
          </View>
          <View style={[styles.lyricWord19, styles.lyricSpaceBlock]}>
            <Image
              style={styles.lyricChildLayout}
              contentFit="cover"
              source={require("../assets/ellipse-44.png")}
            />
            <Text style={[styles.em, styles.emTypo]}>3</Text>
          </View>
          <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
            <Image
              style={[styles.ellipseIcon, styles.lyricChildLayout]}
              contentFit="cover"
              source={require("../assets/ellipse-43.png")}
            />
            <Text style={[styles.em3, styles.em3Typo]}>3</Text>
          </View>
          <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
            <Image
              style={[styles.ellipseIcon, styles.lyricChildLayout]}
              contentFit="cover"
              source={require("../assets/ellipse-43.png")}
            />
            <Text style={[styles.em3, styles.em3Typo]}>2</Text>
          </View>
          <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
            <Image
              style={[styles.ellipseIcon, styles.lyricChildLayout]}
              contentFit="cover"
              source={require("../assets/ellipse-43.png")}
            />
            <Text style={[styles.em3, styles.em3Typo]}>1</Text>
          </View>
        </View>
        <View style={styles.frameParent}>
          <View style={styles.countParentFlexBox}>
            <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
              <Image
                style={styles.lyricChildLayout}
                contentFit="cover"
                source={require("../assets/ellipse-43.png")}
              />
              <Text style={[styles.em6, styles.em3Typo]}>Em</Text>
            </View>
            <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
              <Image
                style={styles.lyricChildLayout}
                contentFit="cover"
                source={require("../assets/ellipse-43.png")}
              />
              <Text style={[styles.em6, styles.em3Typo]}>nghe</Text>
            </View>
            <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
              <Image
                style={styles.lyricChildLayout}
                contentFit="cover"
                source={require("../assets/ellipse-43.png")}
              />
              <Text style={[styles.em6, styles.em3Typo]}>{`gì `}</Text>
            </View>
            <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
              <Image
                style={styles.lyricChildLayout}
                contentFit="cover"
                source={require("../assets/ellipse-43.png")}
              />
              <Text style={[styles.em6, styles.em3Typo]}>không</Text>
            </View>
            <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
              <Image
                style={styles.lyricChildLayout}
                contentFit="cover"
                source={require("../assets/ellipse-43.png")}
              />
              <Text style={[styles.em6, styles.em3Typo]}>hỡi</Text>
            </View>
            <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
              <Image
                style={styles.lyricChildLayout}
                contentFit="cover"
                source={require("../assets/ellipse-43.png")}
              />
              <Text style={[styles.em6, styles.em3Typo]}>em</Text>
            </View>
          </View>
          <View style={styles.lyricFlexBox}>
            <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
              <Image
                style={styles.lyricChildLayout}
                contentFit="cover"
                source={require("../assets/ellipse-43.png")}
              />
              <Text style={[styles.em6, styles.em3Typo]}>Con</Text>
            </View>
            <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
              <Image
                style={styles.lyricChildLayout}
                contentFit="cover"
                source={require("../assets/ellipse-43.png")}
              />
              <Text style={[styles.em6, styles.em3Typo]}>chim</Text>
            </View>
            <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
              <Image
                style={styles.lyricChildLayout}
                contentFit="cover"
                source={require("../assets/ellipse-43.png")}
              />
              <Text style={[styles.em6, styles.em3Typo]}>{`nó `}</Text>
            </View>
            <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
              <Image
                style={styles.lyricChildLayout}
                contentFit="cover"
                source={require("../assets/ellipse-43.png")}
              />
              <Text style={[styles.em6, styles.em3Typo]}>hót</Text>
            </View>
            <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
              <Image
                style={styles.lyricChildLayout}
                contentFit="cover"
                source={require("../assets/ellipse-43.png")}
              />
              <Text style={[styles.em6, styles.em3Typo]}>vang</Text>
            </View>
            <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
              <Image
                style={styles.lyricChildLayout}
                contentFit="cover"
                source={require("../assets/ellipse-43.png")}
              />
              <Text style={[styles.em6, styles.em3Typo]}>đầu</Text>
            </View>
            <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
              <Image
                style={styles.lyricChildLayout}
                contentFit="cover"
                source={require("../assets/ellipse-43.png")}
              />
              <Text style={[styles.em6, styles.em3Typo]}>hè</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={[styles.property116, styles.propertyPosition3]}>
        <View style={styles.countParentFlexBox}>
          <View style={[styles.lyricWord19, styles.lyricSpaceBlock]}>
            <Image
              style={styles.lyricChildLayout}
              contentFit="cover"
              source={require("../assets/ellipse-44.png")}
            />
            <Text style={[styles.em, styles.emTypo]}>3</Text>
          </View>
          <View style={[styles.lyricWord19, styles.lyricSpaceBlock]}>
            <Image
              style={styles.lyricChildLayout}
              contentFit="cover"
              source={require("../assets/ellipse-44.png")}
            />
            <Text style={[styles.em, styles.emTypo]}>3</Text>
          </View>
          <View style={[styles.lyricWord19, styles.lyricSpaceBlock]}>
            <Image
              style={styles.lyricChildLayout}
              contentFit="cover"
              source={require("../assets/ellipse-44.png")}
            />
            <Text style={[styles.em, styles.emTypo]}>3</Text>
          </View>
          <View style={styles.lyricSpaceBlock}>
            <Image
              style={[styles.ellipseIcon, styles.lyricChildLayout]}
              contentFit="cover"
              source={require("../assets/ellipse-44.png")}
            />
            <Text style={[styles.em60, styles.em3Layout]}>3</Text>
          </View>
          <View style={styles.lyricSpaceBlock}>
            <Image
              style={[styles.ellipseIcon, styles.lyricChildLayout]}
              contentFit="cover"
              source={require("../assets/ellipse-43.png")}
            />
            <Text style={[styles.em60, styles.em3Layout]}>2</Text>
          </View>
          <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
            <Image
              style={[styles.ellipseIcon, styles.lyricChildLayout]}
              contentFit="cover"
              source={require("../assets/ellipse-43.png")}
            />
            <Text style={[styles.em3, styles.em3Typo]}>1</Text>
          </View>
        </View>
        <View style={styles.frameParent}>
          <View style={styles.countParentFlexBox}>
            <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
              <Image
                style={styles.lyricChildLayout}
                contentFit="cover"
                source={require("../assets/ellipse-43.png")}
              />
              <Text style={[styles.em6, styles.em3Typo]}>Em</Text>
            </View>
            <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
              <Image
                style={styles.lyricChildLayout}
                contentFit="cover"
                source={require("../assets/ellipse-43.png")}
              />
              <Text style={[styles.em6, styles.em3Typo]}>nghe</Text>
            </View>
            <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
              <Image
                style={styles.lyricChildLayout}
                contentFit="cover"
                source={require("../assets/ellipse-43.png")}
              />
              <Text style={[styles.em6, styles.em3Typo]}>{`gì `}</Text>
            </View>
            <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
              <Image
                style={styles.lyricChildLayout}
                contentFit="cover"
                source={require("../assets/ellipse-43.png")}
              />
              <Text style={[styles.em6, styles.em3Typo]}>không</Text>
            </View>
            <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
              <Image
                style={styles.lyricChildLayout}
                contentFit="cover"
                source={require("../assets/ellipse-43.png")}
              />
              <Text style={[styles.em6, styles.em3Typo]}>hỡi</Text>
            </View>
            <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
              <Image
                style={styles.lyricChildLayout}
                contentFit="cover"
                source={require("../assets/ellipse-43.png")}
              />
              <Text style={[styles.em6, styles.em3Typo]}>em</Text>
            </View>
          </View>
          <View style={styles.lyricFlexBox}>
            <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
              <Image
                style={styles.lyricChildLayout}
                contentFit="cover"
                source={require("../assets/ellipse-43.png")}
              />
              <Text style={[styles.em6, styles.em3Typo]}>Con</Text>
            </View>
            <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
              <Image
                style={styles.lyricChildLayout}
                contentFit="cover"
                source={require("../assets/ellipse-43.png")}
              />
              <Text style={[styles.em6, styles.em3Typo]}>chim</Text>
            </View>
            <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
              <Image
                style={styles.lyricChildLayout}
                contentFit="cover"
                source={require("../assets/ellipse-43.png")}
              />
              <Text style={[styles.em6, styles.em3Typo]}>{`nó `}</Text>
            </View>
            <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
              <Image
                style={styles.lyricChildLayout}
                contentFit="cover"
                source={require("../assets/ellipse-43.png")}
              />
              <Text style={[styles.em6, styles.em3Typo]}>hót</Text>
            </View>
            <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
              <Image
                style={styles.lyricChildLayout}
                contentFit="cover"
                source={require("../assets/ellipse-43.png")}
              />
              <Text style={[styles.em6, styles.em3Typo]}>vang</Text>
            </View>
            <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
              <Image
                style={styles.lyricChildLayout}
                contentFit="cover"
                source={require("../assets/ellipse-43.png")}
              />
              <Text style={[styles.em6, styles.em3Typo]}>đầu</Text>
            </View>
            <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
              <Image
                style={styles.lyricChildLayout}
                contentFit="cover"
                source={require("../assets/ellipse-43.png")}
              />
              <Text style={[styles.em6, styles.em3Typo]}>hè</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={[styles.property113, styles.propertyPosition2]}>
        <View style={styles.countParentFlexBox}>
          <View style={[styles.lyricWord19, styles.lyricSpaceBlock]}>
            <Image
              style={styles.lyricChildLayout}
              contentFit="cover"
              source={require("../assets/ellipse-44.png")}
            />
            <Text style={[styles.em, styles.emTypo]}>3</Text>
          </View>
          <View style={[styles.lyricWord19, styles.lyricSpaceBlock]}>
            <Image
              style={styles.lyricChildLayout}
              contentFit="cover"
              source={require("../assets/ellipse-44.png")}
            />
            <Text style={[styles.em, styles.emTypo]}>3</Text>
          </View>
          <View style={[styles.lyricWord, styles.lyricSpaceBlock]}>
            <Image
              style={styles.lyricChildLayout}
              contentFit="cover"
              source={require("../assets/ellipse-42.png")}
            />
            <Text style={[styles.em, styles.emTypo]}>3</Text>
          </View>
          <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
            <Image
              style={[styles.ellipseIcon, styles.lyricChildLayout]}
              contentFit="cover"
              source={require("../assets/ellipse-43.png")}
            />
            <Text style={[styles.em3, styles.em3Typo]}>3</Text>
          </View>
          <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
            <Image
              style={[styles.ellipseIcon, styles.lyricChildLayout]}
              contentFit="cover"
              source={require("../assets/ellipse-43.png")}
            />
            <Text style={[styles.em3, styles.em3Typo]}>2</Text>
          </View>
          <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
            <Image
              style={[styles.ellipseIcon, styles.lyricChildLayout]}
              contentFit="cover"
              source={require("../assets/ellipse-43.png")}
            />
            <Text style={[styles.em3, styles.em3Typo]}>1</Text>
          </View>
        </View>
        <View style={styles.frameParent}>
          <View style={styles.countParentFlexBox}>
            <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
              <Image
                style={styles.lyricChildLayout}
                contentFit="cover"
                source={require("../assets/ellipse-43.png")}
              />
              <Text style={[styles.em6, styles.em3Typo]}>Em</Text>
            </View>
            <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
              <Image
                style={styles.lyricChildLayout}
                contentFit="cover"
                source={require("../assets/ellipse-43.png")}
              />
              <Text style={[styles.em6, styles.em3Typo]}>nghe</Text>
            </View>
            <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
              <Image
                style={styles.lyricChildLayout}
                contentFit="cover"
                source={require("../assets/ellipse-43.png")}
              />
              <Text style={[styles.em6, styles.em3Typo]}>{`gì `}</Text>
            </View>
            <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
              <Image
                style={styles.lyricChildLayout}
                contentFit="cover"
                source={require("../assets/ellipse-43.png")}
              />
              <Text style={[styles.em6, styles.em3Typo]}>không</Text>
            </View>
            <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
              <Image
                style={styles.lyricChildLayout}
                contentFit="cover"
                source={require("../assets/ellipse-43.png")}
              />
              <Text style={[styles.em6, styles.em3Typo]}>hỡi</Text>
            </View>
            <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
              <Image
                style={styles.lyricChildLayout}
                contentFit="cover"
                source={require("../assets/ellipse-43.png")}
              />
              <Text style={[styles.em6, styles.em3Typo]}>em</Text>
            </View>
          </View>
          <View style={styles.lyricFlexBox}>
            <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
              <Image
                style={styles.lyricChildLayout}
                contentFit="cover"
                source={require("../assets/ellipse-43.png")}
              />
              <Text style={[styles.em6, styles.em3Typo]}>Con</Text>
            </View>
            <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
              <Image
                style={styles.lyricChildLayout}
                contentFit="cover"
                source={require("../assets/ellipse-43.png")}
              />
              <Text style={[styles.em6, styles.em3Typo]}>chim</Text>
            </View>
            <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
              <Image
                style={styles.lyricChildLayout}
                contentFit="cover"
                source={require("../assets/ellipse-43.png")}
              />
              <Text style={[styles.em6, styles.em3Typo]}>{`nó `}</Text>
            </View>
            <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
              <Image
                style={styles.lyricChildLayout}
                contentFit="cover"
                source={require("../assets/ellipse-43.png")}
              />
              <Text style={[styles.em6, styles.em3Typo]}>hót</Text>
            </View>
            <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
              <Image
                style={styles.lyricChildLayout}
                contentFit="cover"
                source={require("../assets/ellipse-43.png")}
              />
              <Text style={[styles.em6, styles.em3Typo]}>vang</Text>
            </View>
            <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
              <Image
                style={styles.lyricChildLayout}
                contentFit="cover"
                source={require("../assets/ellipse-43.png")}
              />
              <Text style={[styles.em6, styles.em3Typo]}>đầu</Text>
            </View>
            <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
              <Image
                style={styles.lyricChildLayout}
                contentFit="cover"
                source={require("../assets/ellipse-43.png")}
              />
              <Text style={[styles.em6, styles.em3Typo]}>hè</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={[styles.property115, styles.propertyPosition2]}>
        <View style={styles.countParentFlexBox}>
          <View style={[styles.lyricWord19, styles.lyricSpaceBlock]}>
            <Image
              style={styles.lyricChildLayout}
              contentFit="cover"
              source={require("../assets/ellipse-44.png")}
            />
            <Text style={[styles.em, styles.emTypo]}>3</Text>
          </View>
          <View style={[styles.lyricWord19, styles.lyricSpaceBlock]}>
            <Image
              style={styles.lyricChildLayout}
              contentFit="cover"
              source={require("../assets/ellipse-44.png")}
            />
            <Text style={[styles.em, styles.emTypo]}>3</Text>
          </View>
          <View style={[styles.lyricWord19, styles.lyricSpaceBlock]}>
            <Image
              style={styles.lyricChildLayout}
              contentFit="cover"
              source={require("../assets/ellipse-44.png")}
            />
            <Text style={[styles.em, styles.emTypo]}>3</Text>
          </View>
          <View style={styles.lyricSpaceBlock}>
            <Image
              style={[styles.ellipseIcon, styles.lyricChildLayout]}
              contentFit="cover"
              source={require("../assets/ellipse-44.png")}
            />
            <Text style={[styles.em60, styles.em3Layout]}>3</Text>
          </View>
          <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
            <Image
              style={[styles.ellipseIcon, styles.lyricChildLayout]}
              contentFit="cover"
              source={require("../assets/ellipse-43.png")}
            />
            <Text style={[styles.em3, styles.em3Typo]}>2</Text>
          </View>
          <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
            <Image
              style={[styles.ellipseIcon, styles.lyricChildLayout]}
              contentFit="cover"
              source={require("../assets/ellipse-43.png")}
            />
            <Text style={[styles.em3, styles.em3Typo]}>1</Text>
          </View>
        </View>
        <View style={styles.frameParent}>
          <View style={styles.countParentFlexBox}>
            <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
              <Image
                style={styles.lyricChildLayout}
                contentFit="cover"
                source={require("../assets/ellipse-43.png")}
              />
              <Text style={[styles.em6, styles.em3Typo]}>Em</Text>
            </View>
            <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
              <Image
                style={styles.lyricChildLayout}
                contentFit="cover"
                source={require("../assets/ellipse-43.png")}
              />
              <Text style={[styles.em6, styles.em3Typo]}>nghe</Text>
            </View>
            <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
              <Image
                style={styles.lyricChildLayout}
                contentFit="cover"
                source={require("../assets/ellipse-43.png")}
              />
              <Text style={[styles.em6, styles.em3Typo]}>{`gì `}</Text>
            </View>
            <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
              <Image
                style={styles.lyricChildLayout}
                contentFit="cover"
                source={require("../assets/ellipse-43.png")}
              />
              <Text style={[styles.em6, styles.em3Typo]}>không</Text>
            </View>
            <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
              <Image
                style={styles.lyricChildLayout}
                contentFit="cover"
                source={require("../assets/ellipse-43.png")}
              />
              <Text style={[styles.em6, styles.em3Typo]}>hỡi</Text>
            </View>
            <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
              <Image
                style={styles.lyricChildLayout}
                contentFit="cover"
                source={require("../assets/ellipse-43.png")}
              />
              <Text style={[styles.em6, styles.em3Typo]}>em</Text>
            </View>
          </View>
          <View style={styles.lyricFlexBox}>
            <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
              <Image
                style={styles.lyricChildLayout}
                contentFit="cover"
                source={require("../assets/ellipse-43.png")}
              />
              <Text style={[styles.em6, styles.em3Typo]}>Con</Text>
            </View>
            <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
              <Image
                style={styles.lyricChildLayout}
                contentFit="cover"
                source={require("../assets/ellipse-43.png")}
              />
              <Text style={[styles.em6, styles.em3Typo]}>chim</Text>
            </View>
            <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
              <Image
                style={styles.lyricChildLayout}
                contentFit="cover"
                source={require("../assets/ellipse-43.png")}
              />
              <Text style={[styles.em6, styles.em3Typo]}>{`nó `}</Text>
            </View>
            <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
              <Image
                style={styles.lyricChildLayout}
                contentFit="cover"
                source={require("../assets/ellipse-43.png")}
              />
              <Text style={[styles.em6, styles.em3Typo]}>hót</Text>
            </View>
            <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
              <Image
                style={styles.lyricChildLayout}
                contentFit="cover"
                source={require("../assets/ellipse-43.png")}
              />
              <Text style={[styles.em6, styles.em3Typo]}>vang</Text>
            </View>
            <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
              <Image
                style={styles.lyricChildLayout}
                contentFit="cover"
                source={require("../assets/ellipse-43.png")}
              />
              <Text style={[styles.em6, styles.em3Typo]}>đầu</Text>
            </View>
            <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
              <Image
                style={styles.lyricChildLayout}
                contentFit="cover"
                source={require("../assets/ellipse-43.png")}
              />
              <Text style={[styles.em6, styles.em3Typo]}>hè</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={[styles.property117, styles.propertyPosition2]}>
        <View style={styles.countParentFlexBox}>
          <View style={[styles.lyricWord19, styles.lyricSpaceBlock]}>
            <Image
              style={styles.lyricChildLayout}
              contentFit="cover"
              source={require("../assets/ellipse-44.png")}
            />
            <Text style={[styles.em, styles.emTypo]}>3</Text>
          </View>
          <View style={[styles.lyricWord19, styles.lyricSpaceBlock]}>
            <Image
              style={styles.lyricChildLayout}
              contentFit="cover"
              source={require("../assets/ellipse-44.png")}
            />
            <Text style={[styles.em, styles.emTypo]}>3</Text>
          </View>
          <View style={[styles.lyricWord19, styles.lyricSpaceBlock]}>
            <Image
              style={styles.lyricChildLayout}
              contentFit="cover"
              source={require("../assets/ellipse-44.png")}
            />
            <Text style={[styles.em, styles.emTypo]}>3</Text>
          </View>
          <View style={styles.lyricSpaceBlock}>
            <Image
              style={[styles.ellipseIcon, styles.lyricChildLayout]}
              contentFit="cover"
              source={require("../assets/ellipse-44.png")}
            />
            <Text style={[styles.em60, styles.em3Layout]}>3</Text>
          </View>
          <View style={styles.lyricSpaceBlock}>
            <Image
              style={[styles.ellipseIcon, styles.lyricChildLayout]}
              contentFit="cover"
              source={require("../assets/ellipse-43.png")}
            />
            <Text style={[styles.em60, styles.em3Layout]}>2</Text>
          </View>
          <View style={styles.lyricSpaceBlock}>
            <Image
              style={[styles.lyricWordChild116, styles.lyricChildLayout]}
              contentFit="cover"
              source={require("../assets/ellipse-43.png")}
            />
            <Text style={[styles.em60, styles.em3Layout]}>1</Text>
          </View>
        </View>
        <View style={styles.frameParent}>
          <View style={styles.countParentFlexBox}>
            <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
              <Image
                style={styles.lyricChildLayout}
                contentFit="cover"
                source={require("../assets/ellipse-43.png")}
              />
              <Text style={[styles.em6, styles.em3Typo]}>Em</Text>
            </View>
            <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
              <Image
                style={styles.lyricChildLayout}
                contentFit="cover"
                source={require("../assets/ellipse-43.png")}
              />
              <Text style={[styles.em6, styles.em3Typo]}>nghe</Text>
            </View>
            <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
              <Image
                style={styles.lyricChildLayout}
                contentFit="cover"
                source={require("../assets/ellipse-43.png")}
              />
              <Text style={[styles.em6, styles.em3Typo]}>{`gì `}</Text>
            </View>
            <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
              <Image
                style={styles.lyricChildLayout}
                contentFit="cover"
                source={require("../assets/ellipse-43.png")}
              />
              <Text style={[styles.em6, styles.em3Typo]}>không</Text>
            </View>
            <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
              <Image
                style={styles.lyricChildLayout}
                contentFit="cover"
                source={require("../assets/ellipse-43.png")}
              />
              <Text style={[styles.em6, styles.em3Typo]}>hỡi</Text>
            </View>
            <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
              <Image
                style={styles.lyricChildLayout}
                contentFit="cover"
                source={require("../assets/ellipse-43.png")}
              />
              <Text style={[styles.em6, styles.em3Typo]}>em</Text>
            </View>
          </View>
          <View style={styles.lyricFlexBox}>
            <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
              <Image
                style={styles.lyricChildLayout}
                contentFit="cover"
                source={require("../assets/ellipse-43.png")}
              />
              <Text style={[styles.em6, styles.em3Typo]}>Con</Text>
            </View>
            <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
              <Image
                style={styles.lyricChildLayout}
                contentFit="cover"
                source={require("../assets/ellipse-43.png")}
              />
              <Text style={[styles.em6, styles.em3Typo]}>chim</Text>
            </View>
            <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
              <Image
                style={styles.lyricChildLayout}
                contentFit="cover"
                source={require("../assets/ellipse-43.png")}
              />
              <Text style={[styles.em6, styles.em3Typo]}>{`nó `}</Text>
            </View>
            <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
              <Image
                style={styles.lyricChildLayout}
                contentFit="cover"
                source={require("../assets/ellipse-43.png")}
              />
              <Text style={[styles.em6, styles.em3Typo]}>hót</Text>
            </View>
            <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
              <Image
                style={styles.lyricChildLayout}
                contentFit="cover"
                source={require("../assets/ellipse-43.png")}
              />
              <Text style={[styles.em6, styles.em3Typo]}>vang</Text>
            </View>
            <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
              <Image
                style={styles.lyricChildLayout}
                contentFit="cover"
                source={require("../assets/ellipse-43.png")}
              />
              <Text style={[styles.em6, styles.em3Typo]}>đầu</Text>
            </View>
            <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
              <Image
                style={styles.lyricChildLayout}
                contentFit="cover"
                source={require("../assets/ellipse-43.png")}
              />
              <Text style={[styles.em6, styles.em3Typo]}>hè</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={[styles.property12, styles.propertySpaceBlock]}>
        <View style={[styles.count7, styles.countParentFlexBox]}>
          <View style={[styles.lyricWord, styles.lyricSpaceBlock]}>
            <Image
              style={styles.lyricChildLayout}
              contentFit="cover"
              source={require("../assets/ellipse-42.png")}
            />
            <Text style={[styles.em, styles.emTypo]}>3</Text>
          </View>
          <View style={[styles.lyricWord, styles.lyricSpaceBlock]}>
            <Image
              style={styles.lyricChildLayout}
              contentFit="cover"
              source={require("../assets/ellipse-42.png")}
            />
            <Text style={[styles.em, styles.emTypo]}>3</Text>
          </View>
          <View style={[styles.lyricWord, styles.lyricSpaceBlock]}>
            <Image
              style={styles.lyricChildLayout}
              contentFit="cover"
              source={require("../assets/ellipse-42.png")}
            />
            <Text style={[styles.em, styles.emTypo]}>3</Text>
          </View>
          <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
            <Image
              style={[styles.ellipseIcon, styles.lyricChildLayout]}
              contentFit="cover"
              source={require("../assets/ellipse-43.png")}
            />
            <Text style={[styles.em3, styles.em3Typo]}>3</Text>
          </View>
          <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
            <Image
              style={[styles.ellipseIcon, styles.lyricChildLayout]}
              contentFit="cover"
              source={require("../assets/ellipse-43.png")}
            />
            <Text style={[styles.em3, styles.em3Typo]}>2</Text>
          </View>
          <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
            <Image
              style={[styles.ellipseIcon, styles.lyricChildLayout]}
              contentFit="cover"
              source={require("../assets/ellipse-43.png")}
            />
            <Text style={[styles.em3, styles.em3Typo]}>1</Text>
          </View>
        </View>
        <View style={styles.frameParent}>
          <View style={styles.countParentFlexBox}>
            <View style={styles.lyricSpaceBlock}>
              <Image
                style={styles.lyricChildLayout}
                contentFit="cover"
                source={require("../assets/ellipse-41.png")}
              />
              <Text style={[styles.em139, styles.emTypo]}>Em</Text>
            </View>
            <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
              <Image
                style={styles.lyricChildLayout}
                contentFit="cover"
                source={require("../assets/ellipse-43.png")}
              />
              <Text style={[styles.em6, styles.em3Typo]}>nghe</Text>
            </View>
            <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
              <Image
                style={styles.lyricChildLayout}
                contentFit="cover"
                source={require("../assets/ellipse-43.png")}
              />
              <Text style={[styles.em6, styles.em3Typo]}>{`gì `}</Text>
            </View>
            <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
              <Image
                style={styles.lyricChildLayout}
                contentFit="cover"
                source={require("../assets/ellipse-43.png")}
              />
              <Text style={[styles.em6, styles.em3Typo]}>không</Text>
            </View>
            <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
              <Image
                style={styles.lyricChildLayout}
                contentFit="cover"
                source={require("../assets/ellipse-43.png")}
              />
              <Text style={[styles.em6, styles.em3Typo]}>hỡi</Text>
            </View>
            <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
              <Image
                style={styles.lyricChildLayout}
                contentFit="cover"
                source={require("../assets/ellipse-43.png")}
              />
              <Text style={[styles.em6, styles.em3Typo]}>em</Text>
            </View>
          </View>
          <View style={styles.lyricFlexBox}>
            <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
              <Image
                style={styles.lyricChildLayout}
                contentFit="cover"
                source={require("../assets/ellipse-43.png")}
              />
              <Text style={[styles.em6, styles.em3Typo]}>Con</Text>
            </View>
            <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
              <Image
                style={styles.lyricChildLayout}
                contentFit="cover"
                source={require("../assets/ellipse-43.png")}
              />
              <Text style={[styles.em6, styles.em3Typo]}>chim</Text>
            </View>
            <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
              <Image
                style={styles.lyricChildLayout}
                contentFit="cover"
                source={require("../assets/ellipse-43.png")}
              />
              <Text style={[styles.em6, styles.em3Typo]}>{`nó `}</Text>
            </View>
            <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
              <Image
                style={styles.lyricChildLayout}
                contentFit="cover"
                source={require("../assets/ellipse-43.png")}
              />
              <Text style={[styles.em6, styles.em3Typo]}>hót</Text>
            </View>
            <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
              <Image
                style={styles.lyricChildLayout}
                contentFit="cover"
                source={require("../assets/ellipse-43.png")}
              />
              <Text style={[styles.em6, styles.em3Typo]}>vang</Text>
            </View>
            <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
              <Image
                style={styles.lyricChildLayout}
                contentFit="cover"
                source={require("../assets/ellipse-43.png")}
              />
              <Text style={[styles.em6, styles.em3Typo]}>đầu</Text>
            </View>
            <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
              <Image
                style={styles.lyricChildLayout}
                contentFit="cover"
                source={require("../assets/ellipse-43.png")}
              />
              <Text style={[styles.em6, styles.em3Typo]}>hè</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={[styles.property13, styles.propertySpaceBlock]}>
        <View style={[styles.count7, styles.countParentFlexBox]}>
          <View style={[styles.lyricWord, styles.lyricSpaceBlock]}>
            <Image
              style={styles.lyricChildLayout}
              contentFit="cover"
              source={require("../assets/ellipse-42.png")}
            />
            <Text style={[styles.em, styles.emTypo]}>3</Text>
          </View>
          <View style={[styles.lyricWord, styles.lyricSpaceBlock]}>
            <Image
              style={styles.lyricChildLayout}
              contentFit="cover"
              source={require("../assets/ellipse-42.png")}
            />
            <Text style={[styles.em, styles.emTypo]}>3</Text>
          </View>
          <View style={[styles.lyricWord, styles.lyricSpaceBlock]}>
            <Image
              style={styles.lyricChildLayout}
              contentFit="cover"
              source={require("../assets/ellipse-42.png")}
            />
            <Text style={[styles.em, styles.emTypo]}>3</Text>
          </View>
          <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
            <Image
              style={[styles.ellipseIcon, styles.lyricChildLayout]}
              contentFit="cover"
              source={require("../assets/ellipse-43.png")}
            />
            <Text style={[styles.em3, styles.em3Typo]}>3</Text>
          </View>
          <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
            <Image
              style={[styles.ellipseIcon, styles.lyricChildLayout]}
              contentFit="cover"
              source={require("../assets/ellipse-43.png")}
            />
            <Text style={[styles.em3, styles.em3Typo]}>2</Text>
          </View>
          <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
            <Image
              style={[styles.ellipseIcon, styles.lyricChildLayout]}
              contentFit="cover"
              source={require("../assets/ellipse-43.png")}
            />
            <Text style={[styles.em3, styles.em3Typo]}>1</Text>
          </View>
        </View>
        <View style={styles.frameParent}>
          <View style={styles.countParentFlexBox}>
            <View style={styles.lyricSpaceBlock}>
              <Image
                style={styles.lyricChildLayout}
                contentFit="cover"
                source={require("../assets/ellipse-43.png")}
              />
              <Text style={[styles.em139, styles.emTypo]}>Em</Text>
            </View>
            <View style={styles.lyricSpaceBlock}>
              <Image
                style={styles.lyricChildLayout}
                contentFit="cover"
                source={require("../assets/ellipse-44.png")}
              />
              <Text style={[styles.em139, styles.emTypo]}>nghe</Text>
            </View>
            <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
              <Image
                style={styles.lyricChildLayout}
                contentFit="cover"
                source={require("../assets/ellipse-43.png")}
              />
              <Text style={[styles.em6, styles.em3Typo]}>{`gì `}</Text>
            </View>
            <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
              <Image
                style={styles.lyricChildLayout}
                contentFit="cover"
                source={require("../assets/ellipse-43.png")}
              />
              <Text style={[styles.em6, styles.em3Typo]}>không</Text>
            </View>
            <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
              <Image
                style={styles.lyricChildLayout}
                contentFit="cover"
                source={require("../assets/ellipse-43.png")}
              />
              <Text style={[styles.em6, styles.em3Typo]}>hỡi</Text>
            </View>
            <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
              <Image
                style={styles.lyricChildLayout}
                contentFit="cover"
                source={require("../assets/ellipse-43.png")}
              />
              <Text style={[styles.em6, styles.em3Typo]}>em</Text>
            </View>
          </View>
          <View style={styles.lyricFlexBox}>
            <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
              <Image
                style={styles.lyricChildLayout}
                contentFit="cover"
                source={require("../assets/ellipse-43.png")}
              />
              <Text style={[styles.em6, styles.em3Typo]}>Con</Text>
            </View>
            <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
              <Image
                style={styles.lyricChildLayout}
                contentFit="cover"
                source={require("../assets/ellipse-43.png")}
              />
              <Text style={[styles.em6, styles.em3Typo]}>chim</Text>
            </View>
            <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
              <Image
                style={styles.lyricChildLayout}
                contentFit="cover"
                source={require("../assets/ellipse-43.png")}
              />
              <Text style={[styles.em6, styles.em3Typo]}>{`nó `}</Text>
            </View>
            <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
              <Image
                style={styles.lyricChildLayout}
                contentFit="cover"
                source={require("../assets/ellipse-43.png")}
              />
              <Text style={[styles.em6, styles.em3Typo]}>hót</Text>
            </View>
            <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
              <Image
                style={styles.lyricChildLayout}
                contentFit="cover"
                source={require("../assets/ellipse-43.png")}
              />
              <Text style={[styles.em6, styles.em3Typo]}>vang</Text>
            </View>
            <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
              <Image
                style={styles.lyricChildLayout}
                contentFit="cover"
                source={require("../assets/ellipse-43.png")}
              />
              <Text style={[styles.em6, styles.em3Typo]}>đầu</Text>
            </View>
            <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
              <Image
                style={styles.lyricChildLayout}
                contentFit="cover"
                source={require("../assets/ellipse-43.png")}
              />
              <Text style={[styles.em6, styles.em3Typo]}>hè</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={[styles.property15, styles.propertySpaceBlock]}>
        <View style={[styles.count7, styles.countParentFlexBox]}>
          <View style={[styles.lyricWord, styles.lyricSpaceBlock]}>
            <Image
              style={styles.lyricChildLayout}
              contentFit="cover"
              source={require("../assets/ellipse-42.png")}
            />
            <Text style={[styles.em, styles.emTypo]}>3</Text>
          </View>
          <View style={[styles.lyricWord, styles.lyricSpaceBlock]}>
            <Image
              style={styles.lyricChildLayout}
              contentFit="cover"
              source={require("../assets/ellipse-42.png")}
            />
            <Text style={[styles.em, styles.emTypo]}>3</Text>
          </View>
          <View style={[styles.lyricWord, styles.lyricSpaceBlock]}>
            <Image
              style={styles.lyricChildLayout}
              contentFit="cover"
              source={require("../assets/ellipse-42.png")}
            />
            <Text style={[styles.em, styles.emTypo]}>3</Text>
          </View>
          <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
            <Image
              style={[styles.ellipseIcon, styles.lyricChildLayout]}
              contentFit="cover"
              source={require("../assets/ellipse-43.png")}
            />
            <Text style={[styles.em3, styles.em3Typo]}>3</Text>
          </View>
          <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
            <Image
              style={[styles.ellipseIcon, styles.lyricChildLayout]}
              contentFit="cover"
              source={require("../assets/ellipse-43.png")}
            />
            <Text style={[styles.em3, styles.em3Typo]}>2</Text>
          </View>
          <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
            <Image
              style={[styles.ellipseIcon, styles.lyricChildLayout]}
              contentFit="cover"
              source={require("../assets/ellipse-43.png")}
            />
            <Text style={[styles.em3, styles.em3Typo]}>1</Text>
          </View>
        </View>
        <View style={styles.frameParent}>
          <View style={styles.countParentFlexBox}>
            <View style={styles.lyricSpaceBlock}>
              <Image
                style={styles.lyricChildLayout}
                contentFit="cover"
                source={require("../assets/ellipse-43.png")}
              />
              <Text style={[styles.em139, styles.emTypo]}>Em</Text>
            </View>
            <View style={styles.lyricSpaceBlock}>
              <Image
                style={styles.lyricChildLayout}
                contentFit="cover"
                source={require("../assets/ellipse-43.png")}
              />
              <Text style={[styles.em139, styles.emTypo]}>nghe</Text>
            </View>
            <View style={styles.lyricSpaceBlock}>
              <Image
                style={styles.lyricChildLayout}
                contentFit="cover"
                source={require("../assets/ellipse-43.png")}
              />
              <Text style={[styles.em139, styles.emTypo]}>{`gì `}</Text>
            </View>
            <View style={styles.lyricSpaceBlock}>
              <Image
                style={styles.lyricChildLayout}
                contentFit="cover"
                source={require("../assets/ellipse-41.png")}
              />
              <Text style={[styles.em139, styles.emTypo]}>không</Text>
            </View>
            <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
              <Image
                style={styles.lyricChildLayout}
                contentFit="cover"
                source={require("../assets/ellipse-43.png")}
              />
              <Text style={[styles.em6, styles.em3Typo]}>hỡi</Text>
            </View>
            <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
              <Image
                style={styles.lyricChildLayout}
                contentFit="cover"
                source={require("../assets/ellipse-43.png")}
              />
              <Text style={[styles.em6, styles.em3Typo]}>em</Text>
            </View>
          </View>
          <View style={styles.lyricFlexBox}>
            <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
              <Image
                style={styles.lyricChildLayout}
                contentFit="cover"
                source={require("../assets/ellipse-43.png")}
              />
              <Text style={[styles.em6, styles.em3Typo]}>Con</Text>
            </View>
            <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
              <Image
                style={styles.lyricChildLayout}
                contentFit="cover"
                source={require("../assets/ellipse-43.png")}
              />
              <Text style={[styles.em6, styles.em3Typo]}>chim</Text>
            </View>
            <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
              <Image
                style={styles.lyricChildLayout}
                contentFit="cover"
                source={require("../assets/ellipse-43.png")}
              />
              <Text style={[styles.em6, styles.em3Typo]}>{`nó `}</Text>
            </View>
            <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
              <Image
                style={styles.lyricChildLayout}
                contentFit="cover"
                source={require("../assets/ellipse-43.png")}
              />
              <Text style={[styles.em6, styles.em3Typo]}>hót</Text>
            </View>
            <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
              <Image
                style={styles.lyricChildLayout}
                contentFit="cover"
                source={require("../assets/ellipse-43.png")}
              />
              <Text style={[styles.em6, styles.em3Typo]}>vang</Text>
            </View>
            <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
              <Image
                style={styles.lyricChildLayout}
                contentFit="cover"
                source={require("../assets/ellipse-43.png")}
              />
              <Text style={[styles.em6, styles.em3Typo]}>đầu</Text>
            </View>
            <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
              <Image
                style={styles.lyricChildLayout}
                contentFit="cover"
                source={require("../assets/ellipse-43.png")}
              />
              <Text style={[styles.em6, styles.em3Typo]}>hè</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={[styles.property16, styles.propertySpaceBlock]}>
        <View style={[styles.count7, styles.countParentFlexBox]}>
          <View style={[styles.lyricWord, styles.lyricSpaceBlock]}>
            <Image
              style={styles.lyricChildLayout}
              contentFit="cover"
              source={require("../assets/ellipse-42.png")}
            />
            <Text style={[styles.em, styles.emTypo]}>3</Text>
          </View>
          <View style={[styles.lyricWord, styles.lyricSpaceBlock]}>
            <Image
              style={styles.lyricChildLayout}
              contentFit="cover"
              source={require("../assets/ellipse-42.png")}
            />
            <Text style={[styles.em, styles.emTypo]}>3</Text>
          </View>
          <View style={[styles.lyricWord, styles.lyricSpaceBlock]}>
            <Image
              style={styles.lyricChildLayout}
              contentFit="cover"
              source={require("../assets/ellipse-42.png")}
            />
            <Text style={[styles.em, styles.emTypo]}>3</Text>
          </View>
          <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
            <Image
              style={[styles.ellipseIcon, styles.lyricChildLayout]}
              contentFit="cover"
              source={require("../assets/ellipse-43.png")}
            />
            <Text style={[styles.em3, styles.em3Typo]}>3</Text>
          </View>
          <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
            <Image
              style={[styles.ellipseIcon, styles.lyricChildLayout]}
              contentFit="cover"
              source={require("../assets/ellipse-43.png")}
            />
            <Text style={[styles.em3, styles.em3Typo]}>2</Text>
          </View>
          <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
            <Image
              style={[styles.ellipseIcon, styles.lyricChildLayout]}
              contentFit="cover"
              source={require("../assets/ellipse-43.png")}
            />
            <Text style={[styles.em3, styles.em3Typo]}>1</Text>
          </View>
        </View>
        <View style={styles.frameParent}>
          <View style={styles.countParentFlexBox}>
            <View style={styles.lyricSpaceBlock}>
              <Image
                style={styles.lyricChildLayout}
                contentFit="cover"
                source={require("../assets/ellipse-43.png")}
              />
              <Text style={[styles.em139, styles.emTypo]}>Em</Text>
            </View>
            <View style={styles.lyricSpaceBlock}>
              <Image
                style={styles.lyricChildLayout}
                contentFit="cover"
                source={require("../assets/ellipse-43.png")}
              />
              <Text style={[styles.em139, styles.emTypo]}>nghe</Text>
            </View>
            <View style={styles.lyricSpaceBlock}>
              <Image
                style={styles.lyricChildLayout}
                contentFit="cover"
                source={require("../assets/ellipse-43.png")}
              />
              <Text style={[styles.em139, styles.emTypo]}>{`gì `}</Text>
            </View>
            <View style={styles.lyricSpaceBlock}>
              <Image
                style={styles.lyricChildLayout}
                contentFit="cover"
                source={require("../assets/ellipse-43.png")}
              />
              <Text style={[styles.em139, styles.emTypo]}>không</Text>
            </View>
            <View style={styles.lyricSpaceBlock}>
              <Image
                style={styles.lyricChildLayout}
                contentFit="cover"
                source={require("../assets/ellipse-44.png")}
              />
              <Text style={[styles.em139, styles.emTypo]}>hỡi</Text>
            </View>
            <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
              <Image
                style={styles.lyricChildLayout}
                contentFit="cover"
                source={require("../assets/ellipse-43.png")}
              />
              <Text style={[styles.em6, styles.em3Typo]}>em</Text>
            </View>
          </View>
          <View style={styles.lyricFlexBox}>
            <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
              <Image
                style={styles.lyricChildLayout}
                contentFit="cover"
                source={require("../assets/ellipse-43.png")}
              />
              <Text style={[styles.em6, styles.em3Typo]}>Con</Text>
            </View>
            <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
              <Image
                style={styles.lyricChildLayout}
                contentFit="cover"
                source={require("../assets/ellipse-43.png")}
              />
              <Text style={[styles.em6, styles.em3Typo]}>chim</Text>
            </View>
            <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
              <Image
                style={styles.lyricChildLayout}
                contentFit="cover"
                source={require("../assets/ellipse-43.png")}
              />
              <Text style={[styles.em6, styles.em3Typo]}>{`nó `}</Text>
            </View>
            <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
              <Image
                style={styles.lyricChildLayout}
                contentFit="cover"
                source={require("../assets/ellipse-43.png")}
              />
              <Text style={[styles.em6, styles.em3Typo]}>hót</Text>
            </View>
            <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
              <Image
                style={styles.lyricChildLayout}
                contentFit="cover"
                source={require("../assets/ellipse-43.png")}
              />
              <Text style={[styles.em6, styles.em3Typo]}>vang</Text>
            </View>
            <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
              <Image
                style={styles.lyricChildLayout}
                contentFit="cover"
                source={require("../assets/ellipse-43.png")}
              />
              <Text style={[styles.em6, styles.em3Typo]}>đầu</Text>
            </View>
            <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
              <Image
                style={styles.lyricChildLayout}
                contentFit="cover"
                source={require("../assets/ellipse-43.png")}
              />
              <Text style={[styles.em6, styles.em3Typo]}>hè</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={[styles.property17, styles.propertySpaceBlock]}>
        <View style={[styles.count7, styles.countParentFlexBox]}>
          <View style={[styles.lyricWord, styles.lyricSpaceBlock]}>
            <Image
              style={styles.lyricChildLayout}
              contentFit="cover"
              source={require("../assets/ellipse-42.png")}
            />
            <Text style={[styles.em, styles.emTypo]}>3</Text>
          </View>
          <View style={[styles.lyricWord, styles.lyricSpaceBlock]}>
            <Image
              style={styles.lyricChildLayout}
              contentFit="cover"
              source={require("../assets/ellipse-42.png")}
            />
            <Text style={[styles.em, styles.emTypo]}>3</Text>
          </View>
          <View style={[styles.lyricWord, styles.lyricSpaceBlock]}>
            <Image
              style={styles.lyricChildLayout}
              contentFit="cover"
              source={require("../assets/ellipse-42.png")}
            />
            <Text style={[styles.em, styles.emTypo]}>3</Text>
          </View>
          <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
            <Image
              style={[styles.ellipseIcon, styles.lyricChildLayout]}
              contentFit="cover"
              source={require("../assets/ellipse-43.png")}
            />
            <Text style={[styles.em3, styles.em3Typo]}>3</Text>
          </View>
          <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
            <Image
              style={[styles.ellipseIcon, styles.lyricChildLayout]}
              contentFit="cover"
              source={require("../assets/ellipse-43.png")}
            />
            <Text style={[styles.em3, styles.em3Typo]}>2</Text>
          </View>
          <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
            <Image
              style={[styles.ellipseIcon, styles.lyricChildLayout]}
              contentFit="cover"
              source={require("../assets/ellipse-43.png")}
            />
            <Text style={[styles.em3, styles.em3Typo]}>1</Text>
          </View>
        </View>
        <View style={styles.frameParent}>
          <View style={styles.countParentFlexBox}>
            <View style={styles.lyricSpaceBlock}>
              <Image
                style={styles.lyricChildLayout}
                contentFit="cover"
                source={require("../assets/ellipse-43.png")}
              />
              <Text style={[styles.em139, styles.emTypo]}>Em</Text>
            </View>
            <View style={styles.lyricSpaceBlock}>
              <Image
                style={styles.lyricChildLayout}
                contentFit="cover"
                source={require("../assets/ellipse-43.png")}
              />
              <Text style={[styles.em139, styles.emTypo]}>nghe</Text>
            </View>
            <View style={styles.lyricSpaceBlock}>
              <Image
                style={styles.lyricChildLayout}
                contentFit="cover"
                source={require("../assets/ellipse-43.png")}
              />
              <Text style={[styles.em139, styles.emTypo]}>{`gì `}</Text>
            </View>
            <View style={styles.lyricSpaceBlock}>
              <Image
                style={styles.lyricChildLayout}
                contentFit="cover"
                source={require("../assets/ellipse-43.png")}
              />
              <Text style={[styles.em139, styles.emTypo]}>không</Text>
            </View>
            <View style={styles.lyricSpaceBlock}>
              <Image
                style={styles.lyricChildLayout}
                contentFit="cover"
                source={require("../assets/ellipse-43.png")}
              />
              <Text style={[styles.em139, styles.emTypo]}>hỡi</Text>
            </View>
            <View style={styles.lyricSpaceBlock}>
              <Image
                style={styles.lyricChildLayout}
                contentFit="cover"
                source={require("../assets/ellipse-41.png")}
              />
              <Text style={[styles.em139, styles.emTypo]}>em</Text>
            </View>
          </View>
          <View style={styles.lyricFlexBox}>
            <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
              <Image
                style={styles.lyricChildLayout}
                contentFit="cover"
                source={require("../assets/ellipse-43.png")}
              />
              <Text style={[styles.em6, styles.em3Typo]}>Con</Text>
            </View>
            <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
              <Image
                style={styles.lyricChildLayout}
                contentFit="cover"
                source={require("../assets/ellipse-43.png")}
              />
              <Text style={[styles.em6, styles.em3Typo]}>chim</Text>
            </View>
            <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
              <Image
                style={styles.lyricChildLayout}
                contentFit="cover"
                source={require("../assets/ellipse-43.png")}
              />
              <Text style={[styles.em6, styles.em3Typo]}>{`nó `}</Text>
            </View>
            <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
              <Image
                style={styles.lyricChildLayout}
                contentFit="cover"
                source={require("../assets/ellipse-43.png")}
              />
              <Text style={[styles.em6, styles.em3Typo]}>hót</Text>
            </View>
            <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
              <Image
                style={styles.lyricChildLayout}
                contentFit="cover"
                source={require("../assets/ellipse-43.png")}
              />
              <Text style={[styles.em6, styles.em3Typo]}>vang</Text>
            </View>
            <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
              <Image
                style={styles.lyricChildLayout}
                contentFit="cover"
                source={require("../assets/ellipse-43.png")}
              />
              <Text style={[styles.em6, styles.em3Typo]}>đầu</Text>
            </View>
            <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
              <Image
                style={styles.lyricChildLayout}
                contentFit="cover"
                source={require("../assets/ellipse-43.png")}
              />
              <Text style={[styles.em6, styles.em3Typo]}>hè</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={[styles.property18, styles.propertySpaceBlock]}>
        <View style={[styles.count7, styles.countParentFlexBox]}>
          <View style={[styles.lyricWord, styles.lyricSpaceBlock]}>
            <Image
              style={styles.lyricChildLayout}
              contentFit="cover"
              source={require("../assets/ellipse-42.png")}
            />
            <Text style={[styles.em, styles.emTypo]}>3</Text>
          </View>
          <View style={[styles.lyricWord, styles.lyricSpaceBlock]}>
            <Image
              style={styles.lyricChildLayout}
              contentFit="cover"
              source={require("../assets/ellipse-42.png")}
            />
            <Text style={[styles.em, styles.emTypo]}>3</Text>
          </View>
          <View style={[styles.lyricWord, styles.lyricSpaceBlock]}>
            <Image
              style={styles.lyricChildLayout}
              contentFit="cover"
              source={require("../assets/ellipse-42.png")}
            />
            <Text style={[styles.em, styles.emTypo]}>3</Text>
          </View>
          <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
            <Image
              style={[styles.ellipseIcon, styles.lyricChildLayout]}
              contentFit="cover"
              source={require("../assets/ellipse-43.png")}
            />
            <Text style={[styles.em3, styles.em3Typo]}>3</Text>
          </View>
          <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
            <Image
              style={[styles.ellipseIcon, styles.lyricChildLayout]}
              contentFit="cover"
              source={require("../assets/ellipse-43.png")}
            />
            <Text style={[styles.em3, styles.em3Typo]}>2</Text>
          </View>
          <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
            <Image
              style={[styles.ellipseIcon, styles.lyricChildLayout]}
              contentFit="cover"
              source={require("../assets/ellipse-43.png")}
            />
            <Text style={[styles.em3, styles.em3Typo]}>1</Text>
          </View>
        </View>
        <View style={styles.frameParent}>
          <View style={styles.countParentFlexBox}>
            <View style={styles.lyricSpaceBlock}>
              <Image
                style={styles.lyricChildLayout}
                contentFit="cover"
                source={require("../assets/ellipse-43.png")}
              />
              <Text style={[styles.em139, styles.emTypo]}>Em</Text>
            </View>
            <View style={styles.lyricSpaceBlock}>
              <Image
                style={styles.lyricChildLayout}
                contentFit="cover"
                source={require("../assets/ellipse-43.png")}
              />
              <Text style={[styles.em139, styles.emTypo]}>nghe</Text>
            </View>
            <View style={styles.lyricSpaceBlock}>
              <Image
                style={styles.lyricChildLayout}
                contentFit="cover"
                source={require("../assets/ellipse-43.png")}
              />
              <Text style={[styles.em139, styles.emTypo]}>{`gì `}</Text>
            </View>
            <View style={styles.lyricSpaceBlock}>
              <Image
                style={styles.lyricChildLayout}
                contentFit="cover"
                source={require("../assets/ellipse-43.png")}
              />
              <Text style={[styles.em139, styles.emTypo]}>không</Text>
            </View>
            <View style={styles.lyricSpaceBlock}>
              <Image
                style={styles.lyricChildLayout}
                contentFit="cover"
                source={require("../assets/ellipse-43.png")}
              />
              <Text style={[styles.em139, styles.emTypo]}>hỡi</Text>
            </View>
            <View style={styles.lyricSpaceBlock}>
              <Image
                style={styles.lyricChildLayout}
                contentFit="cover"
                source={require("../assets/ellipse-43.png")}
              />
              <Text style={[styles.em139, styles.emTypo]}>em</Text>
            </View>
          </View>
          <View style={styles.lyricFlexBox}>
            <View style={styles.lyricSpaceBlock}>
              <Image
                style={styles.lyricChildLayout}
                contentFit="cover"
                source={require("../assets/ellipse-44.png")}
              />
              <Text style={[styles.em139, styles.emTypo]}>Con</Text>
            </View>
            <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
              <Image
                style={styles.lyricChildLayout}
                contentFit="cover"
                source={require("../assets/ellipse-43.png")}
              />
              <Text style={[styles.em6, styles.em3Typo]}>chim</Text>
            </View>
            <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
              <Image
                style={styles.lyricChildLayout}
                contentFit="cover"
                source={require("../assets/ellipse-43.png")}
              />
              <Text style={[styles.em6, styles.em3Typo]}>{`nó `}</Text>
            </View>
            <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
              <Image
                style={styles.lyricChildLayout}
                contentFit="cover"
                source={require("../assets/ellipse-43.png")}
              />
              <Text style={[styles.em6, styles.em3Typo]}>hót</Text>
            </View>
            <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
              <Image
                style={styles.lyricChildLayout}
                contentFit="cover"
                source={require("../assets/ellipse-43.png")}
              />
              <Text style={[styles.em6, styles.em3Typo]}>vang</Text>
            </View>
            <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
              <Image
                style={styles.lyricChildLayout}
                contentFit="cover"
                source={require("../assets/ellipse-43.png")}
              />
              <Text style={[styles.em6, styles.em3Typo]}>đầu</Text>
            </View>
            <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
              <Image
                style={styles.lyricChildLayout}
                contentFit="cover"
                source={require("../assets/ellipse-43.png")}
              />
              <Text style={[styles.em6, styles.em3Typo]}>hè</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={[styles.property19, styles.propertySpaceBlock]}>
        <View style={[styles.count7, styles.countParentFlexBox]}>
          <View style={[styles.lyricWord, styles.lyricSpaceBlock]}>
            <Image
              style={styles.lyricChildLayout}
              contentFit="cover"
              source={require("../assets/ellipse-42.png")}
            />
            <Text style={[styles.em, styles.emTypo]}>3</Text>
          </View>
          <View style={[styles.lyricWord, styles.lyricSpaceBlock]}>
            <Image
              style={styles.lyricChildLayout}
              contentFit="cover"
              source={require("../assets/ellipse-42.png")}
            />
            <Text style={[styles.em, styles.emTypo]}>3</Text>
          </View>
          <View style={[styles.lyricWord, styles.lyricSpaceBlock]}>
            <Image
              style={styles.lyricChildLayout}
              contentFit="cover"
              source={require("../assets/ellipse-42.png")}
            />
            <Text style={[styles.em, styles.emTypo]}>3</Text>
          </View>
          <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
            <Image
              style={[styles.ellipseIcon, styles.lyricChildLayout]}
              contentFit="cover"
              source={require("../assets/ellipse-43.png")}
            />
            <Text style={[styles.em3, styles.em3Typo]}>3</Text>
          </View>
          <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
            <Image
              style={[styles.ellipseIcon, styles.lyricChildLayout]}
              contentFit="cover"
              source={require("../assets/ellipse-43.png")}
            />
            <Text style={[styles.em3, styles.em3Typo]}>2</Text>
          </View>
          <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
            <Image
              style={[styles.ellipseIcon, styles.lyricChildLayout]}
              contentFit="cover"
              source={require("../assets/ellipse-43.png")}
            />
            <Text style={[styles.em3, styles.em3Typo]}>1</Text>
          </View>
        </View>
        <View style={[styles.lyricWordParent23, styles.countParentFlexBox]}>
          <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
            <Image
              style={styles.lyricChildLayout}
              contentFit="cover"
              source={require("../assets/ellipse-43.png")}
            />
            <Text style={[styles.em6, styles.em3Typo]}>Em</Text>
          </View>
          <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
            <Image
              style={styles.lyricChildLayout}
              contentFit="cover"
              source={require("../assets/ellipse-43.png")}
            />
            <Text style={[styles.em6, styles.em3Typo]}>thấy</Text>
          </View>
          <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
            <Image
              style={styles.lyricChildLayout}
              contentFit="cover"
              source={require("../assets/ellipse-43.png")}
            />
            <Text style={[styles.em6, styles.em3Typo]}>{`gì `}</Text>
          </View>
          <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
            <Image
              style={styles.lyricChildLayout}
              contentFit="cover"
              source={require("../assets/ellipse-43.png")}
            />
            <Text style={[styles.em6, styles.em3Typo]}>không</Text>
          </View>
          <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
            <Image
              style={styles.lyricChildLayout}
              contentFit="cover"
              source={require("../assets/ellipse-43.png")}
            />
            <Text style={[styles.em6, styles.em3Typo]}>hỡi</Text>
          </View>
          <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
            <Image
              style={styles.lyricChildLayout}
              contentFit="cover"
              source={require("../assets/ellipse-43.png")}
            />
            <Text style={[styles.em6, styles.em3Typo]}>em</Text>
          </View>
        </View>
        <View style={styles.property19Inner}>
          <View style={styles.lyricParentFlexBox}>
            <View style={styles.lyricSpaceBlock}>
              <Image
                style={styles.lyricChildLayout}
                contentFit="cover"
                source={require("../assets/ellipse-43.png")}
              />
              <Text style={[styles.em139, styles.emTypo]}>Con</Text>
            </View>
            <View style={styles.lyricSpaceBlock}>
              <Image
                style={styles.lyricChildLayout}
                contentFit="cover"
                source={require("../assets/ellipse-44.png")}
              />
              <Text style={[styles.em139, styles.emTypo]}>chim</Text>
            </View>
            <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
              <Image
                style={styles.lyricChildLayout}
                contentFit="cover"
                source={require("../assets/ellipse-43.png")}
              />
              <Text style={[styles.em6, styles.em3Typo]}>{`nó `}</Text>
            </View>
            <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
              <Image
                style={styles.lyricChildLayout}
                contentFit="cover"
                source={require("../assets/ellipse-43.png")}
              />
              <Text style={[styles.em6, styles.em3Typo]}>hót</Text>
            </View>
            <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
              <Image
                style={styles.lyricChildLayout}
                contentFit="cover"
                source={require("../assets/ellipse-43.png")}
              />
              <Text style={[styles.em6, styles.em3Typo]}>vang</Text>
            </View>
            <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
              <Image
                style={styles.lyricChildLayout}
                contentFit="cover"
                source={require("../assets/ellipse-43.png")}
              />
              <Text style={[styles.em6, styles.em3Typo]}>đầu</Text>
            </View>
            <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
              <Image
                style={styles.lyricChildLayout}
                contentFit="cover"
                source={require("../assets/ellipse-43.png")}
              />
              <Text style={[styles.em6, styles.em3Typo]}>hè</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={[styles.property110, styles.propertySpaceBlock]}>
        <View style={[styles.count7, styles.countParentFlexBox]}>
          <View style={[styles.lyricWord, styles.lyricSpaceBlock]}>
            <Image
              style={styles.lyricChildLayout}
              contentFit="cover"
              source={require("../assets/ellipse-42.png")}
            />
            <Text style={[styles.em, styles.emTypo]}>3</Text>
          </View>
          <View style={[styles.lyricWord, styles.lyricSpaceBlock]}>
            <Image
              style={styles.lyricChildLayout}
              contentFit="cover"
              source={require("../assets/ellipse-42.png")}
            />
            <Text style={[styles.em, styles.emTypo]}>3</Text>
          </View>
          <View style={[styles.lyricWord, styles.lyricSpaceBlock]}>
            <Image
              style={styles.lyricChildLayout}
              contentFit="cover"
              source={require("../assets/ellipse-42.png")}
            />
            <Text style={[styles.em, styles.emTypo]}>3</Text>
          </View>
          <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
            <Image
              style={[styles.ellipseIcon, styles.lyricChildLayout]}
              contentFit="cover"
              source={require("../assets/ellipse-43.png")}
            />
            <Text style={[styles.em3, styles.em3Typo]}>3</Text>
          </View>
          <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
            <Image
              style={[styles.ellipseIcon, styles.lyricChildLayout]}
              contentFit="cover"
              source={require("../assets/ellipse-43.png")}
            />
            <Text style={[styles.em3, styles.em3Typo]}>2</Text>
          </View>
          <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
            <Image
              style={[styles.ellipseIcon, styles.lyricChildLayout]}
              contentFit="cover"
              source={require("../assets/ellipse-43.png")}
            />
            <Text style={[styles.em3, styles.em3Typo]}>1</Text>
          </View>
        </View>
        <View style={styles.frameParent}>
          <View style={[styles.lyricWordParent25, styles.countParentFlexBox]}>
            <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
              <Image
                style={styles.lyricChildLayout}
                contentFit="cover"
                source={require("../assets/ellipse-43.png")}
              />
              <Text style={[styles.em6, styles.em3Typo]}>Em</Text>
            </View>
            <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
              <Image
                style={styles.lyricChildLayout}
                contentFit="cover"
                source={require("../assets/ellipse-43.png")}
              />
              <Text style={[styles.em6, styles.em3Typo]}>thấy</Text>
            </View>
            <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
              <Image
                style={styles.lyricChildLayout}
                contentFit="cover"
                source={require("../assets/ellipse-43.png")}
              />
              <Text style={[styles.em6, styles.em3Typo]}>{`gì `}</Text>
            </View>
            <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
              <Image
                style={styles.lyricChildLayout}
                contentFit="cover"
                source={require("../assets/ellipse-43.png")}
              />
              <Text style={[styles.em6, styles.em3Typo]}>không</Text>
            </View>
            <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
              <Image
                style={styles.lyricChildLayout}
                contentFit="cover"
                source={require("../assets/ellipse-43.png")}
              />
              <Text style={[styles.em6, styles.em3Typo]}>hỡi</Text>
            </View>
            <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
              <Image
                style={styles.lyricChildLayout}
                contentFit="cover"
                source={require("../assets/ellipse-43.png")}
              />
              <Text style={[styles.em6, styles.em3Typo]}>em</Text>
            </View>
          </View>
          <View style={styles.lyricFlexBox}>
            <View style={styles.lyricSpaceBlock}>
              <Image
                style={styles.lyricChildLayout}
                contentFit="cover"
                source={require("../assets/ellipse-43.png")}
              />
              <Text style={[styles.em139, styles.emTypo]}>Con</Text>
            </View>
            <View style={styles.lyricSpaceBlock}>
              <Image
                style={styles.lyricChildLayout}
                contentFit="cover"
                source={require("../assets/ellipse-43.png")}
              />
              <Text style={[styles.em139, styles.emTypo]}>chim</Text>
            </View>
            <View style={styles.lyricSpaceBlock}>
              <Image
                style={styles.lyricChildLayout}
                contentFit="cover"
                source={require("../assets/ellipse-41.png")}
              />
              <Text style={[styles.em139, styles.emTypo]}>{`nó `}</Text>
            </View>
            <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
              <Image
                style={styles.lyricChildLayout}
                contentFit="cover"
                source={require("../assets/ellipse-43.png")}
              />
              <Text style={[styles.em6, styles.em3Typo]}>hót</Text>
            </View>
            <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
              <Image
                style={styles.lyricChildLayout}
                contentFit="cover"
                source={require("../assets/ellipse-43.png")}
              />
              <Text style={[styles.em6, styles.em3Typo]}>vang</Text>
            </View>
            <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
              <Image
                style={styles.lyricChildLayout}
                contentFit="cover"
                source={require("../assets/ellipse-43.png")}
              />
              <Text style={[styles.em6, styles.em3Typo]}>đầu</Text>
            </View>
            <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
              <Image
                style={styles.lyricChildLayout}
                contentFit="cover"
                source={require("../assets/ellipse-43.png")}
              />
              <Text style={[styles.em6, styles.em3Typo]}>hè</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={[styles.property111, styles.propertySpaceBlock]}>
        <View style={[styles.count7, styles.countParentFlexBox]}>
          <View style={[styles.lyricWord, styles.lyricSpaceBlock]}>
            <Image
              style={styles.lyricChildLayout}
              contentFit="cover"
              source={require("../assets/ellipse-42.png")}
            />
            <Text style={[styles.em, styles.emTypo]}>3</Text>
          </View>
          <View style={[styles.lyricWord, styles.lyricSpaceBlock]}>
            <Image
              style={styles.lyricChildLayout}
              contentFit="cover"
              source={require("../assets/ellipse-42.png")}
            />
            <Text style={[styles.em, styles.emTypo]}>3</Text>
          </View>
          <View style={[styles.lyricWord, styles.lyricSpaceBlock]}>
            <Image
              style={styles.lyricChildLayout}
              contentFit="cover"
              source={require("../assets/ellipse-42.png")}
            />
            <Text style={[styles.em, styles.emTypo]}>3</Text>
          </View>
          <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
            <Image
              style={[styles.ellipseIcon, styles.lyricChildLayout]}
              contentFit="cover"
              source={require("../assets/ellipse-43.png")}
            />
            <Text style={[styles.em3, styles.em3Typo]}>3</Text>
          </View>
          <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
            <Image
              style={[styles.ellipseIcon, styles.lyricChildLayout]}
              contentFit="cover"
              source={require("../assets/ellipse-43.png")}
            />
            <Text style={[styles.em3, styles.em3Typo]}>2</Text>
          </View>
          <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
            <Image
              style={[styles.ellipseIcon, styles.lyricChildLayout]}
              contentFit="cover"
              source={require("../assets/ellipse-43.png")}
            />
            <Text style={[styles.em3, styles.em3Typo]}>1</Text>
          </View>
        </View>
        <View style={styles.frameParent}>
          <View style={[styles.lyricWordParent25, styles.countParentFlexBox]}>
            <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
              <Image
                style={styles.lyricChildLayout}
                contentFit="cover"
                source={require("../assets/ellipse-43.png")}
              />
              <Text style={[styles.em6, styles.em3Typo]}>Em</Text>
            </View>
            <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
              <Image
                style={styles.lyricChildLayout}
                contentFit="cover"
                source={require("../assets/ellipse-43.png")}
              />
              <Text style={[styles.em6, styles.em3Typo]}>thấy</Text>
            </View>
            <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
              <Image
                style={styles.lyricChildLayout}
                contentFit="cover"
                source={require("../assets/ellipse-43.png")}
              />
              <Text style={[styles.em6, styles.em3Typo]}>{`gì `}</Text>
            </View>
            <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
              <Image
                style={styles.lyricChildLayout}
                contentFit="cover"
                source={require("../assets/ellipse-43.png")}
              />
              <Text style={[styles.em6, styles.em3Typo]}>không</Text>
            </View>
            <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
              <Image
                style={styles.lyricChildLayout}
                contentFit="cover"
                source={require("../assets/ellipse-43.png")}
              />
              <Text style={[styles.em6, styles.em3Typo]}>hỡi</Text>
            </View>
            <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
              <Image
                style={styles.lyricChildLayout}
                contentFit="cover"
                source={require("../assets/ellipse-43.png")}
              />
              <Text style={[styles.em6, styles.em3Typo]}>em</Text>
            </View>
          </View>
          <View style={styles.lyricFlexBox}>
            <View style={styles.lyricSpaceBlock}>
              <Image
                style={styles.lyricChildLayout}
                contentFit="cover"
                source={require("../assets/ellipse-43.png")}
              />
              <Text style={[styles.em139, styles.emTypo]}>Con</Text>
            </View>
            <View style={styles.lyricSpaceBlock}>
              <Image
                style={styles.lyricChildLayout}
                contentFit="cover"
                source={require("../assets/ellipse-43.png")}
              />
              <Text style={[styles.em139, styles.emTypo]}>chim</Text>
            </View>
            <View style={styles.lyricSpaceBlock}>
              <Image
                style={styles.lyricChildLayout}
                contentFit="cover"
                source={require("../assets/ellipse-41.png")}
              />
              <Text style={[styles.em139, styles.emTypo]}>{`nó `}</Text>
            </View>
            <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
              <Image
                style={styles.lyricChildLayout}
                contentFit="cover"
                source={require("../assets/ellipse-43.png")}
              />
              <Text style={[styles.em6, styles.em3Typo]}>hót</Text>
            </View>
            <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
              <Image
                style={styles.lyricChildLayout}
                contentFit="cover"
                source={require("../assets/ellipse-43.png")}
              />
              <Text style={[styles.em6, styles.em3Typo]}>vang</Text>
            </View>
            <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
              <Image
                style={styles.lyricChildLayout}
                contentFit="cover"
                source={require("../assets/ellipse-43.png")}
              />
              <Text style={[styles.em6, styles.em3Typo]}>đầu</Text>
            </View>
            <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
              <Image
                style={styles.lyricChildLayout}
                contentFit="cover"
                source={require("../assets/ellipse-43.png")}
              />
              <Text style={[styles.em6, styles.em3Typo]}>hè</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={[styles.property1121, styles.propertySpaceBlock]}>
        <View style={[styles.count7, styles.countParentFlexBox]}>
          <View style={[styles.lyricWord, styles.lyricSpaceBlock]}>
            <Image
              style={styles.lyricChildLayout}
              contentFit="cover"
              source={require("../assets/ellipse-42.png")}
            />
            <Text style={[styles.em, styles.emTypo]}>3</Text>
          </View>
          <View style={[styles.lyricWord, styles.lyricSpaceBlock]}>
            <Image
              style={styles.lyricChildLayout}
              contentFit="cover"
              source={require("../assets/ellipse-42.png")}
            />
            <Text style={[styles.em, styles.emTypo]}>3</Text>
          </View>
          <View style={[styles.lyricWord, styles.lyricSpaceBlock]}>
            <Image
              style={styles.lyricChildLayout}
              contentFit="cover"
              source={require("../assets/ellipse-42.png")}
            />
            <Text style={[styles.em, styles.emTypo]}>3</Text>
          </View>
          <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
            <Image
              style={[styles.ellipseIcon, styles.lyricChildLayout]}
              contentFit="cover"
              source={require("../assets/ellipse-43.png")}
            />
            <Text style={[styles.em3, styles.em3Typo]}>3</Text>
          </View>
          <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
            <Image
              style={[styles.ellipseIcon, styles.lyricChildLayout]}
              contentFit="cover"
              source={require("../assets/ellipse-43.png")}
            />
            <Text style={[styles.em3, styles.em3Typo]}>2</Text>
          </View>
          <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
            <Image
              style={[styles.ellipseIcon, styles.lyricChildLayout]}
              contentFit="cover"
              source={require("../assets/ellipse-43.png")}
            />
            <Text style={[styles.em3, styles.em3Typo]}>1</Text>
          </View>
        </View>
        <View style={styles.property19Inner}>
          <View style={[styles.lyricWordParent25, styles.countParentFlexBox]}>
            <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
              <Image
                style={styles.lyricChildLayout}
                contentFit="cover"
                source={require("../assets/ellipse-43.png")}
              />
              <Text style={[styles.em6, styles.em3Typo]}>Em</Text>
            </View>
            <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
              <Image
                style={styles.lyricChildLayout}
                contentFit="cover"
                source={require("../assets/ellipse-43.png")}
              />
              <Text style={[styles.em6, styles.em3Typo]}>thấy</Text>
            </View>
            <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
              <Image
                style={styles.lyricChildLayout}
                contentFit="cover"
                source={require("../assets/ellipse-43.png")}
              />
              <Text style={[styles.em6, styles.em3Typo]}>{`gì `}</Text>
            </View>
            <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
              <Image
                style={styles.lyricChildLayout}
                contentFit="cover"
                source={require("../assets/ellipse-43.png")}
              />
              <Text style={[styles.em6, styles.em3Typo]}>không</Text>
            </View>
            <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
              <Image
                style={styles.lyricChildLayout}
                contentFit="cover"
                source={require("../assets/ellipse-43.png")}
              />
              <Text style={[styles.em6, styles.em3Typo]}>hỡi</Text>
            </View>
            <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
              <Image
                style={styles.lyricChildLayout}
                contentFit="cover"
                source={require("../assets/ellipse-43.png")}
              />
              <Text style={[styles.em6, styles.em3Typo]}>em</Text>
            </View>
          </View>
          <View style={styles.lyricFlexBox}>
            <View style={styles.lyricSpaceBlock}>
              <Image
                style={styles.lyricChildLayout}
                contentFit="cover"
                source={require("../assets/ellipse-43.png")}
              />
              <Text style={[styles.em139, styles.emTypo]}>Con</Text>
            </View>
            <View style={styles.lyricSpaceBlock}>
              <Image
                style={styles.lyricChildLayout}
                contentFit="cover"
                source={require("../assets/ellipse-43.png")}
              />
              <Text style={[styles.em139, styles.emTypo]}>chim</Text>
            </View>
            <View style={styles.lyricSpaceBlock}>
              <Image
                style={styles.lyricChildLayout}
                contentFit="cover"
                source={require("../assets/ellipse-43.png")}
              />
              <Text style={[styles.em139, styles.emTypo]}>{`nó `}</Text>
            </View>
            <View style={styles.lyricSpaceBlock}>
              <Image
                style={styles.lyricChildLayout}
                contentFit="cover"
                source={require("../assets/ellipse-41.png")}
              />
              <Text style={[styles.em139, styles.emTypo]}>hót</Text>
            </View>
            <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
              <Image
                style={styles.lyricChildLayout}
                contentFit="cover"
                source={require("../assets/ellipse-43.png")}
              />
              <Text style={[styles.em6, styles.em3Typo]}>vang</Text>
            </View>
            <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
              <Image
                style={styles.lyricChildLayout}
                contentFit="cover"
                source={require("../assets/ellipse-43.png")}
              />
              <Text style={[styles.em6, styles.em3Typo]}>đầu</Text>
            </View>
            <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
              <Image
                style={styles.lyricChildLayout}
                contentFit="cover"
                source={require("../assets/ellipse-43.png")}
              />
              <Text style={[styles.em6, styles.em3Typo]}>hè</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={[styles.property1131, styles.propertySpaceBlock]}>
        <View style={[styles.count7, styles.countParentFlexBox]}>
          <View style={[styles.lyricWord, styles.lyricSpaceBlock]}>
            <Image
              style={styles.lyricChildLayout}
              contentFit="cover"
              source={require("../assets/ellipse-42.png")}
            />
            <Text style={[styles.em, styles.emTypo]}>3</Text>
          </View>
          <View style={[styles.lyricWord, styles.lyricSpaceBlock]}>
            <Image
              style={styles.lyricChildLayout}
              contentFit="cover"
              source={require("../assets/ellipse-42.png")}
            />
            <Text style={[styles.em, styles.emTypo]}>3</Text>
          </View>
          <View style={[styles.lyricWord, styles.lyricSpaceBlock]}>
            <Image
              style={styles.lyricChildLayout}
              contentFit="cover"
              source={require("../assets/ellipse-42.png")}
            />
            <Text style={[styles.em, styles.emTypo]}>3</Text>
          </View>
          <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
            <Image
              style={[styles.ellipseIcon, styles.lyricChildLayout]}
              contentFit="cover"
              source={require("../assets/ellipse-43.png")}
            />
            <Text style={[styles.em3, styles.em3Typo]}>3</Text>
          </View>
          <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
            <Image
              style={[styles.ellipseIcon, styles.lyricChildLayout]}
              contentFit="cover"
              source={require("../assets/ellipse-43.png")}
            />
            <Text style={[styles.em3, styles.em3Typo]}>2</Text>
          </View>
          <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
            <Image
              style={[styles.ellipseIcon, styles.lyricChildLayout]}
              contentFit="cover"
              source={require("../assets/ellipse-43.png")}
            />
            <Text style={[styles.em3, styles.em3Typo]}>1</Text>
          </View>
        </View>
        <View style={styles.frameParent}>
          <View style={[styles.lyricWordParent25, styles.countParentFlexBox]}>
            <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
              <Image
                style={styles.lyricChildLayout}
                contentFit="cover"
                source={require("../assets/ellipse-43.png")}
              />
              <Text style={[styles.em6, styles.em3Typo]}>Em</Text>
            </View>
            <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
              <Image
                style={styles.lyricChildLayout}
                contentFit="cover"
                source={require("../assets/ellipse-43.png")}
              />
              <Text style={[styles.em6, styles.em3Typo]}>thấy</Text>
            </View>
            <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
              <Image
                style={styles.lyricChildLayout}
                contentFit="cover"
                source={require("../assets/ellipse-43.png")}
              />
              <Text style={[styles.em6, styles.em3Typo]}>{`gì `}</Text>
            </View>
            <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
              <Image
                style={styles.lyricChildLayout}
                contentFit="cover"
                source={require("../assets/ellipse-43.png")}
              />
              <Text style={[styles.em6, styles.em3Typo]}>không</Text>
            </View>
            <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
              <Image
                style={styles.lyricChildLayout}
                contentFit="cover"
                source={require("../assets/ellipse-43.png")}
              />
              <Text style={[styles.em6, styles.em3Typo]}>hỡi</Text>
            </View>
            <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
              <Image
                style={styles.lyricChildLayout}
                contentFit="cover"
                source={require("../assets/ellipse-43.png")}
              />
              <Text style={[styles.em6, styles.em3Typo]}>em</Text>
            </View>
          </View>
          <View style={styles.lyricFlexBox}>
            <View style={styles.lyricSpaceBlock}>
              <Image
                style={styles.lyricChildLayout}
                contentFit="cover"
                source={require("../assets/ellipse-43.png")}
              />
              <Text style={[styles.em139, styles.emTypo]}>Con</Text>
            </View>
            <View style={styles.lyricSpaceBlock}>
              <Image
                style={styles.lyricChildLayout}
                contentFit="cover"
                source={require("../assets/ellipse-43.png")}
              />
              <Text style={[styles.em139, styles.emTypo]}>chim</Text>
            </View>
            <View style={styles.lyricSpaceBlock}>
              <Image
                style={styles.lyricChildLayout}
                contentFit="cover"
                source={require("../assets/ellipse-43.png")}
              />
              <Text style={[styles.em139, styles.emTypo]}>{`nó `}</Text>
            </View>
            <View style={styles.lyricSpaceBlock}>
              <Image
                style={styles.lyricChildLayout}
                contentFit="cover"
                source={require("../assets/ellipse-43.png")}
              />
              <Text style={[styles.em139, styles.emTypo]}>hót</Text>
            </View>
            <View style={styles.lyricSpaceBlock}>
              <Image
                style={styles.lyricChildLayout}
                contentFit="cover"
                source={require("../assets/ellipse-44.png")}
              />
              <Text style={[styles.em139, styles.emTypo]}>vang</Text>
            </View>
            <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
              <Image
                style={styles.lyricChildLayout}
                contentFit="cover"
                source={require("../assets/ellipse-43.png")}
              />
              <Text style={[styles.em6, styles.em3Typo]}>đầu</Text>
            </View>
            <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
              <Image
                style={styles.lyricChildLayout}
                contentFit="cover"
                source={require("../assets/ellipse-43.png")}
              />
              <Text style={[styles.em6, styles.em3Typo]}>hè</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={[styles.property1141, styles.propertySpaceBlock]}>
        <View style={[styles.count7, styles.countParentFlexBox]}>
          <View style={[styles.lyricWord, styles.lyricSpaceBlock]}>
            <Image
              style={styles.lyricChildLayout}
              contentFit="cover"
              source={require("../assets/ellipse-42.png")}
            />
            <Text style={[styles.em, styles.emTypo]}>3</Text>
          </View>
          <View style={[styles.lyricWord, styles.lyricSpaceBlock]}>
            <Image
              style={styles.lyricChildLayout}
              contentFit="cover"
              source={require("../assets/ellipse-42.png")}
            />
            <Text style={[styles.em, styles.emTypo]}>3</Text>
          </View>
          <View style={[styles.lyricWord, styles.lyricSpaceBlock]}>
            <Image
              style={styles.lyricChildLayout}
              contentFit="cover"
              source={require("../assets/ellipse-42.png")}
            />
            <Text style={[styles.em, styles.emTypo]}>3</Text>
          </View>
          <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
            <Image
              style={[styles.ellipseIcon, styles.lyricChildLayout]}
              contentFit="cover"
              source={require("../assets/ellipse-43.png")}
            />
            <Text style={[styles.em3, styles.em3Typo]}>3</Text>
          </View>
          <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
            <Image
              style={[styles.ellipseIcon, styles.lyricChildLayout]}
              contentFit="cover"
              source={require("../assets/ellipse-43.png")}
            />
            <Text style={[styles.em3, styles.em3Typo]}>2</Text>
          </View>
          <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
            <Image
              style={[styles.ellipseIcon, styles.lyricChildLayout]}
              contentFit="cover"
              source={require("../assets/ellipse-43.png")}
            />
            <Text style={[styles.em3, styles.em3Typo]}>1</Text>
          </View>
        </View>
        <View style={styles.frameParent}>
          <View style={styles.countParentFlexBox}>
            <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
              <Image
                style={styles.lyricChildLayout}
                contentFit="cover"
                source={require("../assets/ellipse-43.png")}
              />
              <Text style={[styles.em6, styles.em3Typo]}>Em</Text>
            </View>
            <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
              <Image
                style={styles.lyricChildLayout}
                contentFit="cover"
                source={require("../assets/ellipse-43.png")}
              />
              <Text style={[styles.em6, styles.em3Typo]}>thấy</Text>
            </View>
            <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
              <Image
                style={styles.lyricChildLayout}
                contentFit="cover"
                source={require("../assets/ellipse-43.png")}
              />
              <Text style={[styles.em6, styles.em3Typo]}>{`gì `}</Text>
            </View>
            <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
              <Image
                style={styles.lyricChildLayout}
                contentFit="cover"
                source={require("../assets/ellipse-43.png")}
              />
              <Text style={[styles.em6, styles.em3Typo]}>không</Text>
            </View>
            <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
              <Image
                style={styles.lyricChildLayout}
                contentFit="cover"
                source={require("../assets/ellipse-43.png")}
              />
              <Text style={[styles.em6, styles.em3Typo]}>hỡi</Text>
            </View>
            <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
              <Image
                style={styles.lyricChildLayout}
                contentFit="cover"
                source={require("../assets/ellipse-43.png")}
              />
              <Text style={[styles.em6, styles.em3Typo]}>em</Text>
            </View>
          </View>
          <View style={styles.lyricFlexBox}>
            <View style={styles.lyricSpaceBlock}>
              <Image
                style={styles.lyricChildLayout}
                contentFit="cover"
                source={require("../assets/ellipse-43.png")}
              />
              <Text style={[styles.em139, styles.emTypo]}>Con</Text>
            </View>
            <View style={styles.lyricSpaceBlock}>
              <Image
                style={styles.lyricChildLayout}
                contentFit="cover"
                source={require("../assets/ellipse-43.png")}
              />
              <Text style={[styles.em139, styles.emTypo]}>chim</Text>
            </View>
            <View style={styles.lyricSpaceBlock}>
              <Image
                style={styles.lyricChildLayout}
                contentFit="cover"
                source={require("../assets/ellipse-43.png")}
              />
              <Text style={[styles.em139, styles.emTypo]}>{`nó `}</Text>
            </View>
            <View style={styles.lyricSpaceBlock}>
              <Image
                style={styles.lyricChildLayout}
                contentFit="cover"
                source={require("../assets/ellipse-43.png")}
              />
              <Text style={[styles.em139, styles.emTypo]}>hót</Text>
            </View>
            <View style={styles.lyricSpaceBlock}>
              <Image
                style={styles.lyricChildLayout}
                contentFit="cover"
                source={require("../assets/ellipse-43.png")}
              />
              <Text style={[styles.em139, styles.emTypo]}>vang</Text>
            </View>
            <View style={styles.lyricSpaceBlock}>
              <Image
                style={styles.lyricChildLayout}
                contentFit="cover"
                source={require("../assets/ellipse-44.png")}
              />
              <Text style={[styles.em139, styles.emTypo]}>đầu</Text>
            </View>
            <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
              <Image
                style={styles.lyricChildLayout}
                contentFit="cover"
                source={require("../assets/ellipse-43.png")}
              />
              <Text style={[styles.em6, styles.em3Typo]}>hè</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={[styles.property1151, styles.propertySpaceBlock]}>
        <View style={[styles.count7, styles.countParentFlexBox]}>
          <View style={[styles.lyricWord, styles.lyricSpaceBlock]}>
            <Image
              style={styles.lyricChildLayout}
              contentFit="cover"
              source={require("../assets/ellipse-42.png")}
            />
            <Text style={[styles.em, styles.emTypo]}>3</Text>
          </View>
          <View style={[styles.lyricWord, styles.lyricSpaceBlock]}>
            <Image
              style={styles.lyricChildLayout}
              contentFit="cover"
              source={require("../assets/ellipse-42.png")}
            />
            <Text style={[styles.em, styles.emTypo]}>3</Text>
          </View>
          <View style={[styles.lyricWord, styles.lyricSpaceBlock]}>
            <Image
              style={styles.lyricChildLayout}
              contentFit="cover"
              source={require("../assets/ellipse-42.png")}
            />
            <Text style={[styles.em, styles.emTypo]}>3</Text>
          </View>
          <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
            <Image
              style={[styles.ellipseIcon, styles.lyricChildLayout]}
              contentFit="cover"
              source={require("../assets/ellipse-43.png")}
            />
            <Text style={[styles.em3, styles.em3Typo]}>3</Text>
          </View>
          <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
            <Image
              style={[styles.ellipseIcon, styles.lyricChildLayout]}
              contentFit="cover"
              source={require("../assets/ellipse-43.png")}
            />
            <Text style={[styles.em3, styles.em3Typo]}>2</Text>
          </View>
          <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
            <Image
              style={[styles.ellipseIcon, styles.lyricChildLayout]}
              contentFit="cover"
              source={require("../assets/ellipse-43.png")}
            />
            <Text style={[styles.em3, styles.em3Typo]}>1</Text>
          </View>
        </View>
        <View style={[styles.lyricWordParent35, styles.countParentFlexBox]}>
          <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
            <Image
              style={styles.lyricChildLayout}
              contentFit="cover"
              source={require("../assets/ellipse-43.png")}
            />
            <Text style={[styles.em6, styles.em3Typo]}>Em</Text>
          </View>
          <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
            <Image
              style={styles.lyricChildLayout}
              contentFit="cover"
              source={require("../assets/ellipse-43.png")}
            />
            <Text style={[styles.em6, styles.em3Typo]}>thấy</Text>
          </View>
          <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
            <Image
              style={styles.lyricChildLayout}
              contentFit="cover"
              source={require("../assets/ellipse-43.png")}
            />
            <Text style={[styles.em6, styles.em3Typo]}>{`gì `}</Text>
          </View>
          <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
            <Image
              style={styles.lyricChildLayout}
              contentFit="cover"
              source={require("../assets/ellipse-43.png")}
            />
            <Text style={[styles.em6, styles.em3Typo]}>không</Text>
          </View>
          <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
            <Image
              style={styles.lyricChildLayout}
              contentFit="cover"
              source={require("../assets/ellipse-43.png")}
            />
            <Text style={[styles.em6, styles.em3Typo]}>hỡi</Text>
          </View>
          <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
            <Image
              style={styles.lyricChildLayout}
              contentFit="cover"
              source={require("../assets/ellipse-43.png")}
            />
            <Text style={[styles.em6, styles.em3Typo]}>em</Text>
          </View>
        </View>
        <View style={styles.property19Inner}>
          <View style={styles.lyricParentFlexBox}>
            <View style={styles.lyricSpaceBlock}>
              <Image
                style={styles.lyricChildLayout}
                contentFit="cover"
                source={require("../assets/ellipse-43.png")}
              />
              <Text style={[styles.em139, styles.emTypo]}>Con</Text>
            </View>
            <View style={styles.lyricSpaceBlock}>
              <Image
                style={styles.lyricChildLayout}
                contentFit="cover"
                source={require("../assets/ellipse-43.png")}
              />
              <Text style={[styles.em139, styles.emTypo]}>chim</Text>
            </View>
            <View style={styles.lyricSpaceBlock}>
              <Image
                style={styles.lyricChildLayout}
                contentFit="cover"
                source={require("../assets/ellipse-43.png")}
              />
              <Text style={[styles.em139, styles.emTypo]}>{`nó `}</Text>
            </View>
            <View style={styles.lyricSpaceBlock}>
              <Image
                style={styles.lyricChildLayout}
                contentFit="cover"
                source={require("../assets/ellipse-43.png")}
              />
              <Text style={[styles.em139, styles.emTypo]}>hót</Text>
            </View>
            <View style={styles.lyricSpaceBlock}>
              <Image
                style={styles.lyricChildLayout}
                contentFit="cover"
                source={require("../assets/ellipse-43.png")}
              />
              <Text style={[styles.em139, styles.emTypo]}>vang</Text>
            </View>
            <View style={styles.lyricSpaceBlock}>
              <Image
                style={styles.lyricChildLayout}
                contentFit="cover"
                source={require("../assets/ellipse-43.png")}
              />
              <Text style={[styles.em139, styles.emTypo]}>đầu</Text>
            </View>
            <View style={styles.lyricSpaceBlock}>
              <Image
                style={styles.lyricChildLayout}
                contentFit="cover"
                source={require("../assets/ellipse-41.png")}
              />
              <Text style={[styles.em139, styles.emTypo]}>hè</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={[styles.property1161, styles.propertySpaceBlock]}>
        <View style={[styles.count7, styles.countParentFlexBox]}>
          <View style={[styles.lyricWord, styles.lyricSpaceBlock]}>
            <Image
              style={styles.lyricChildLayout}
              contentFit="cover"
              source={require("../assets/ellipse-42.png")}
            />
            <Text style={[styles.em, styles.emTypo]}>3</Text>
          </View>
          <View style={[styles.lyricWord, styles.lyricSpaceBlock]}>
            <Image
              style={styles.lyricChildLayout}
              contentFit="cover"
              source={require("../assets/ellipse-42.png")}
            />
            <Text style={[styles.em, styles.emTypo]}>3</Text>
          </View>
          <View style={[styles.lyricWord, styles.lyricSpaceBlock]}>
            <Image
              style={styles.lyricChildLayout}
              contentFit="cover"
              source={require("../assets/ellipse-42.png")}
            />
            <Text style={[styles.em, styles.emTypo]}>3</Text>
          </View>
          <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
            <Image
              style={[styles.ellipseIcon, styles.lyricChildLayout]}
              contentFit="cover"
              source={require("../assets/ellipse-43.png")}
            />
            <Text style={[styles.em3, styles.em3Typo]}>3</Text>
          </View>
          <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
            <Image
              style={[styles.ellipseIcon, styles.lyricChildLayout]}
              contentFit="cover"
              source={require("../assets/ellipse-43.png")}
            />
            <Text style={[styles.em3, styles.em3Typo]}>2</Text>
          </View>
          <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
            <Image
              style={[styles.ellipseIcon, styles.lyricChildLayout]}
              contentFit="cover"
              source={require("../assets/ellipse-43.png")}
            />
            <Text style={[styles.em3, styles.em3Typo]}>1</Text>
          </View>
        </View>
        <View style={styles.frameParent}>
          <View style={styles.countParentFlexBox}>
            <View style={styles.lyricSpaceBlock}>
              <Image
                style={styles.lyricChildLayout}
                contentFit="cover"
                source={require("../assets/ellipse-41.png")}
              />
              <Text style={[styles.em139, styles.emTypo]}>Em</Text>
            </View>
            <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
              <Image
                style={styles.lyricChildLayout}
                contentFit="cover"
                source={require("../assets/ellipse-43.png")}
              />
              <Text style={[styles.em6, styles.em3Typo]}>thấy</Text>
            </View>
            <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
              <Image
                style={styles.lyricChildLayout}
                contentFit="cover"
                source={require("../assets/ellipse-43.png")}
              />
              <Text style={[styles.em6, styles.em3Typo]}>{`gì `}</Text>
            </View>
            <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
              <Image
                style={styles.lyricChildLayout}
                contentFit="cover"
                source={require("../assets/ellipse-43.png")}
              />
              <Text style={[styles.em6, styles.em3Typo]}>không</Text>
            </View>
            <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
              <Image
                style={styles.lyricChildLayout}
                contentFit="cover"
                source={require("../assets/ellipse-43.png")}
              />
              <Text style={[styles.em6, styles.em3Typo]}>hỡi</Text>
            </View>
            <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
              <Image
                style={styles.lyricChildLayout}
                contentFit="cover"
                source={require("../assets/ellipse-43.png")}
              />
              <Text style={[styles.em6, styles.em3Typo]}>em</Text>
            </View>
          </View>
          <View style={styles.lyricFlexBox}>
            <View style={styles.lyricSpaceBlock}>
              <Image
                style={styles.lyricChildLayout}
                contentFit="cover"
                source={require("../assets/ellipse-43.png")}
              />
              <Text style={[styles.em139, styles.emTypo]}>Con</Text>
            </View>
            <View style={styles.lyricSpaceBlock}>
              <Image
                style={styles.lyricChildLayout}
                contentFit="cover"
                source={require("../assets/ellipse-43.png")}
              />
              <Text style={[styles.em139, styles.emTypo]}>chim</Text>
            </View>
            <View style={styles.lyricSpaceBlock}>
              <Image
                style={styles.lyricChildLayout}
                contentFit="cover"
                source={require("../assets/ellipse-43.png")}
              />
              <Text style={[styles.em139, styles.emTypo]}>{`nó `}</Text>
            </View>
            <View style={styles.lyricSpaceBlock}>
              <Image
                style={styles.lyricChildLayout}
                contentFit="cover"
                source={require("../assets/ellipse-43.png")}
              />
              <Text style={[styles.em139, styles.emTypo]}>hót</Text>
            </View>
            <View style={styles.lyricSpaceBlock}>
              <Image
                style={styles.lyricChildLayout}
                contentFit="cover"
                source={require("../assets/ellipse-43.png")}
              />
              <Text style={[styles.em139, styles.emTypo]}>vang</Text>
            </View>
            <View style={styles.lyricSpaceBlock}>
              <Image
                style={styles.lyricChildLayout}
                contentFit="cover"
                source={require("../assets/ellipse-43.png")}
              />
              <Text style={[styles.em139, styles.emTypo]}>đầu</Text>
            </View>
            <View style={styles.lyricSpaceBlock}>
              <Image
                style={styles.lyricChildLayout}
                contentFit="cover"
                source={require("../assets/ellipse-43.png")}
              />
              <Text style={[styles.em139, styles.emTypo]}>hè</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={[styles.property1171, styles.propertySpaceBlock]}>
        <View style={[styles.count7, styles.countParentFlexBox]}>
          <View style={[styles.lyricWord, styles.lyricSpaceBlock]}>
            <Image
              style={styles.lyricChildLayout}
              contentFit="cover"
              source={require("../assets/ellipse-42.png")}
            />
            <Text style={[styles.em, styles.emTypo]}>3</Text>
          </View>
          <View style={[styles.lyricWord, styles.lyricSpaceBlock]}>
            <Image
              style={styles.lyricChildLayout}
              contentFit="cover"
              source={require("../assets/ellipse-42.png")}
            />
            <Text style={[styles.em, styles.emTypo]}>3</Text>
          </View>
          <View style={[styles.lyricWord, styles.lyricSpaceBlock]}>
            <Image
              style={styles.lyricChildLayout}
              contentFit="cover"
              source={require("../assets/ellipse-42.png")}
            />
            <Text style={[styles.em, styles.emTypo]}>3</Text>
          </View>
          <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
            <Image
              style={[styles.ellipseIcon, styles.lyricChildLayout]}
              contentFit="cover"
              source={require("../assets/ellipse-43.png")}
            />
            <Text style={[styles.em3, styles.em3Typo]}>3</Text>
          </View>
          <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
            <Image
              style={[styles.ellipseIcon, styles.lyricChildLayout]}
              contentFit="cover"
              source={require("../assets/ellipse-43.png")}
            />
            <Text style={[styles.em3, styles.em3Typo]}>2</Text>
          </View>
          <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
            <Image
              style={[styles.ellipseIcon, styles.lyricChildLayout]}
              contentFit="cover"
              source={require("../assets/ellipse-43.png")}
            />
            <Text style={[styles.em3, styles.em3Typo]}>1</Text>
          </View>
        </View>
        <View style={styles.frameParent}>
          <View style={styles.countParentFlexBox}>
            <View style={styles.lyricSpaceBlock}>
              <Image
                style={styles.lyricChildLayout}
                contentFit="cover"
                source={require("../assets/ellipse-43.png")}
              />
              <Text style={[styles.em139, styles.emTypo]}>Em</Text>
            </View>
            <View style={styles.lyricSpaceBlock}>
              <Image
                style={styles.lyricChildLayout}
                contentFit="cover"
                source={require("../assets/ellipse-44.png")}
              />
              <Text style={[styles.em139, styles.emTypo]}>thấy</Text>
            </View>
            <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
              <Image
                style={styles.lyricChildLayout}
                contentFit="cover"
                source={require("../assets/ellipse-43.png")}
              />
              <Text style={[styles.em6, styles.em3Typo]}>{`gì `}</Text>
            </View>
            <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
              <Image
                style={styles.lyricChildLayout}
                contentFit="cover"
                source={require("../assets/ellipse-43.png")}
              />
              <Text style={[styles.em6, styles.em3Typo]}>không</Text>
            </View>
            <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
              <Image
                style={styles.lyricChildLayout}
                contentFit="cover"
                source={require("../assets/ellipse-43.png")}
              />
              <Text style={[styles.em6, styles.em3Typo]}>hỡi</Text>
            </View>
            <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
              <Image
                style={styles.lyricChildLayout}
                contentFit="cover"
                source={require("../assets/ellipse-43.png")}
              />
              <Text style={[styles.em6, styles.em3Typo]}>em</Text>
            </View>
          </View>
          <View style={[styles.lyricWordParent40, styles.lyricFlexBox]}>
            <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
              <Image
                style={styles.lyricChildLayout}
                contentFit="cover"
                source={require("../assets/ellipse-43.png")}
              />
              <Text style={[styles.em6, styles.em3Typo]}>Con</Text>
            </View>
            <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
              <Image
                style={styles.lyricChildLayout}
                contentFit="cover"
                source={require("../assets/ellipse-43.png")}
              />
              <Text style={[styles.em6, styles.em3Typo]}>chim</Text>
            </View>
            <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
              <Image
                style={styles.lyricChildLayout}
                contentFit="cover"
                source={require("../assets/ellipse-43.png")}
              />
              <Text style={[styles.em6, styles.em3Typo]}>{`nó `}</Text>
            </View>
            <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
              <Image
                style={styles.lyricChildLayout}
                contentFit="cover"
                source={require("../assets/ellipse-43.png")}
              />
              <Text style={[styles.em6, styles.em3Typo]}>múa</Text>
            </View>
            <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
              <Image
                style={styles.lyricChildLayout}
                contentFit="cover"
                source={require("../assets/ellipse-43.png")}
              />
              <Text style={[styles.em6, styles.em3Typo]}>trên</Text>
            </View>
            <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
              <Image
                style={styles.lyricChildLayout}
                contentFit="cover"
                source={require("../assets/ellipse-43.png")}
              />
              <Text style={[styles.em6, styles.em3Typo]}>{`cành `}</Text>
            </View>
            <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
              <Image
                style={styles.lyricChildLayout}
                contentFit="cover"
                source={require("../assets/ellipse-43.png")}
              />
              <Text style={[styles.em6, styles.em3Typo]}>tre</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={[styles.property118, styles.propertySpaceBlock]}>
        <View style={[styles.count7, styles.countParentFlexBox]}>
          <View style={[styles.lyricWord, styles.lyricSpaceBlock]}>
            <Image
              style={styles.lyricChildLayout}
              contentFit="cover"
              source={require("../assets/ellipse-42.png")}
            />
            <Text style={[styles.em, styles.emTypo]}>3</Text>
          </View>
          <View style={[styles.lyricWord, styles.lyricSpaceBlock]}>
            <Image
              style={styles.lyricChildLayout}
              contentFit="cover"
              source={require("../assets/ellipse-42.png")}
            />
            <Text style={[styles.em, styles.emTypo]}>3</Text>
          </View>
          <View style={[styles.lyricWord, styles.lyricSpaceBlock]}>
            <Image
              style={styles.lyricChildLayout}
              contentFit="cover"
              source={require("../assets/ellipse-42.png")}
            />
            <Text style={[styles.em, styles.emTypo]}>3</Text>
          </View>
          <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
            <Image
              style={[styles.ellipseIcon, styles.lyricChildLayout]}
              contentFit="cover"
              source={require("../assets/ellipse-43.png")}
            />
            <Text style={[styles.em3, styles.em3Typo]}>3</Text>
          </View>
          <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
            <Image
              style={[styles.ellipseIcon, styles.lyricChildLayout]}
              contentFit="cover"
              source={require("../assets/ellipse-43.png")}
            />
            <Text style={[styles.em3, styles.em3Typo]}>2</Text>
          </View>
          <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
            <Image
              style={[styles.ellipseIcon, styles.lyricChildLayout]}
              contentFit="cover"
              source={require("../assets/ellipse-43.png")}
            />
            <Text style={[styles.em3, styles.em3Typo]}>1</Text>
          </View>
        </View>
        <View style={styles.property19Inner}>
          <View style={styles.countParentFlexBox}>
            <View style={styles.lyricSpaceBlock}>
              <Image
                style={styles.lyricChildLayout}
                contentFit="cover"
                source={require("../assets/ellipse-43.png")}
              />
              <Text style={[styles.em139, styles.emTypo]}>Em</Text>
            </View>
            <View style={styles.lyricSpaceBlock}>
              <Image
                style={styles.lyricChildLayout}
                contentFit="cover"
                source={require("../assets/ellipse-43.png")}
              />
              <Text style={[styles.em139, styles.emTypo]}>thấy</Text>
            </View>
            <View style={styles.lyricSpaceBlock}>
              <Image
                style={styles.lyricChildLayout}
                contentFit="cover"
                source={require("../assets/ellipse-41.png")}
              />
              <Text style={[styles.em139, styles.emTypo]}>{`gì `}</Text>
            </View>
            <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
              <Image
                style={styles.lyricChildLayout}
                contentFit="cover"
                source={require("../assets/ellipse-43.png")}
              />
              <Text style={[styles.em6, styles.em3Typo]}>không</Text>
            </View>
            <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
              <Image
                style={styles.lyricChildLayout}
                contentFit="cover"
                source={require("../assets/ellipse-43.png")}
              />
              <Text style={[styles.em6, styles.em3Typo]}>hỡi</Text>
            </View>
            <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
              <Image
                style={styles.lyricChildLayout}
                contentFit="cover"
                source={require("../assets/ellipse-43.png")}
              />
              <Text style={[styles.em6, styles.em3Typo]}>em</Text>
            </View>
          </View>
          <View style={[styles.lyricWordParent40, styles.lyricFlexBox]}>
            <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
              <Image
                style={styles.lyricChildLayout}
                contentFit="cover"
                source={require("../assets/ellipse-43.png")}
              />
              <Text style={[styles.em6, styles.em3Typo]}>Con</Text>
            </View>
            <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
              <Image
                style={styles.lyricChildLayout}
                contentFit="cover"
                source={require("../assets/ellipse-43.png")}
              />
              <Text style={[styles.em6, styles.em3Typo]}>chim</Text>
            </View>
            <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
              <Image
                style={styles.lyricChildLayout}
                contentFit="cover"
                source={require("../assets/ellipse-43.png")}
              />
              <Text style={[styles.em6, styles.em3Typo]}>{`nó `}</Text>
            </View>
            <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
              <Image
                style={styles.lyricChildLayout}
                contentFit="cover"
                source={require("../assets/ellipse-43.png")}
              />
              <Text style={[styles.em6, styles.em3Typo]}>múa</Text>
            </View>
            <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
              <Image
                style={styles.lyricChildLayout}
                contentFit="cover"
                source={require("../assets/ellipse-43.png")}
              />
              <Text style={[styles.em6, styles.em3Typo]}>trên</Text>
            </View>
            <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
              <Image
                style={styles.lyricChildLayout}
                contentFit="cover"
                source={require("../assets/ellipse-43.png")}
              />
              <Text style={[styles.em6, styles.em3Typo]}>{`cành `}</Text>
            </View>
            <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
              <Image
                style={styles.lyricChildLayout}
                contentFit="cover"
                source={require("../assets/ellipse-43.png")}
              />
              <Text style={[styles.em6, styles.em3Typo]}>tre</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={[styles.property119, styles.propertySpaceBlock]}>
        <View style={[styles.count7, styles.countParentFlexBox]}>
          <View style={[styles.lyricWord, styles.lyricSpaceBlock]}>
            <Image
              style={styles.lyricChildLayout}
              contentFit="cover"
              source={require("../assets/ellipse-42.png")}
            />
            <Text style={[styles.em, styles.emTypo]}>3</Text>
          </View>
          <View style={[styles.lyricWord, styles.lyricSpaceBlock]}>
            <Image
              style={styles.lyricChildLayout}
              contentFit="cover"
              source={require("../assets/ellipse-42.png")}
            />
            <Text style={[styles.em, styles.emTypo]}>3</Text>
          </View>
          <View style={[styles.lyricWord, styles.lyricSpaceBlock]}>
            <Image
              style={styles.lyricChildLayout}
              contentFit="cover"
              source={require("../assets/ellipse-42.png")}
            />
            <Text style={[styles.em, styles.emTypo]}>3</Text>
          </View>
          <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
            <Image
              style={[styles.ellipseIcon, styles.lyricChildLayout]}
              contentFit="cover"
              source={require("../assets/ellipse-43.png")}
            />
            <Text style={[styles.em3, styles.em3Typo]}>3</Text>
          </View>
          <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
            <Image
              style={[styles.ellipseIcon, styles.lyricChildLayout]}
              contentFit="cover"
              source={require("../assets/ellipse-43.png")}
            />
            <Text style={[styles.em3, styles.em3Typo]}>2</Text>
          </View>
          <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
            <Image
              style={[styles.ellipseIcon, styles.lyricChildLayout]}
              contentFit="cover"
              source={require("../assets/ellipse-43.png")}
            />
            <Text style={[styles.em3, styles.em3Typo]}>1</Text>
          </View>
        </View>
        <View style={styles.property19Inner}>
          <View style={styles.countParentFlexBox}>
            <View style={styles.lyricSpaceBlock}>
              <Image
                style={styles.lyricChildLayout}
                contentFit="cover"
                source={require("../assets/ellipse-43.png")}
              />
              <Text style={[styles.em139, styles.emTypo]}>Em</Text>
            </View>
            <View style={styles.lyricSpaceBlock}>
              <Image
                style={styles.lyricChildLayout}
                contentFit="cover"
                source={require("../assets/ellipse-43.png")}
              />
              <Text style={[styles.em139, styles.emTypo]}>thấy</Text>
            </View>
            <View style={styles.lyricSpaceBlock}>
              <Image
                style={styles.lyricChildLayout}
                contentFit="cover"
                source={require("../assets/ellipse-43.png")}
              />
              <Text style={[styles.em139, styles.emTypo]}>{`gì `}</Text>
            </View>
            <View style={styles.lyricSpaceBlock}>
              <Image
                style={styles.lyricChildLayout}
                contentFit="cover"
                source={require("../assets/ellipse-41.png")}
              />
              <Text style={[styles.em139, styles.emTypo]}>không</Text>
            </View>
            <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
              <Image
                style={styles.lyricChildLayout}
                contentFit="cover"
                source={require("../assets/ellipse-43.png")}
              />
              <Text style={[styles.em6, styles.em3Typo]}>hỡi</Text>
            </View>
            <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
              <Image
                style={styles.lyricChildLayout}
                contentFit="cover"
                source={require("../assets/ellipse-43.png")}
              />
              <Text style={[styles.em6, styles.em3Typo]}>em</Text>
            </View>
          </View>
          <View style={styles.lyricFlexBox}>
            <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
              <Image
                style={styles.lyricChildLayout}
                contentFit="cover"
                source={require("../assets/ellipse-43.png")}
              />
              <Text style={[styles.em6, styles.em3Typo]}>Con</Text>
            </View>
            <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
              <Image
                style={styles.lyricChildLayout}
                contentFit="cover"
                source={require("../assets/ellipse-43.png")}
              />
              <Text style={[styles.em6, styles.em3Typo]}>chim</Text>
            </View>
            <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
              <Image
                style={styles.lyricChildLayout}
                contentFit="cover"
                source={require("../assets/ellipse-43.png")}
              />
              <Text style={[styles.em6, styles.em3Typo]}>{`nó `}</Text>
            </View>
            <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
              <Image
                style={styles.lyricChildLayout}
                contentFit="cover"
                source={require("../assets/ellipse-43.png")}
              />
              <Text style={[styles.em6, styles.em3Typo]}>múa</Text>
            </View>
            <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
              <Image
                style={styles.lyricChildLayout}
                contentFit="cover"
                source={require("../assets/ellipse-43.png")}
              />
              <Text style={[styles.em6, styles.em3Typo]}>trên</Text>
            </View>
            <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
              <Image
                style={styles.lyricChildLayout}
                contentFit="cover"
                source={require("../assets/ellipse-43.png")}
              />
              <Text style={[styles.em6, styles.em3Typo]}>{`cành `}</Text>
            </View>
            <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
              <Image
                style={styles.lyricChildLayout}
                contentFit="cover"
                source={require("../assets/ellipse-43.png")}
              />
              <Text style={[styles.em6, styles.em3Typo]}>tre</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={[styles.property120, styles.propertySpaceBlock]}>
        <View style={[styles.count7, styles.countParentFlexBox]}>
          <View style={[styles.lyricWord, styles.lyricSpaceBlock]}>
            <Image
              style={styles.lyricChildLayout}
              contentFit="cover"
              source={require("../assets/ellipse-42.png")}
            />
            <Text style={[styles.em, styles.emTypo]}>3</Text>
          </View>
          <View style={[styles.lyricWord, styles.lyricSpaceBlock]}>
            <Image
              style={styles.lyricChildLayout}
              contentFit="cover"
              source={require("../assets/ellipse-42.png")}
            />
            <Text style={[styles.em, styles.emTypo]}>3</Text>
          </View>
          <View style={[styles.lyricWord, styles.lyricSpaceBlock]}>
            <Image
              style={styles.lyricChildLayout}
              contentFit="cover"
              source={require("../assets/ellipse-42.png")}
            />
            <Text style={[styles.em, styles.emTypo]}>3</Text>
          </View>
          <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
            <Image
              style={[styles.ellipseIcon, styles.lyricChildLayout]}
              contentFit="cover"
              source={require("../assets/ellipse-43.png")}
            />
            <Text style={[styles.em3, styles.em3Typo]}>3</Text>
          </View>
          <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
            <Image
              style={[styles.ellipseIcon, styles.lyricChildLayout]}
              contentFit="cover"
              source={require("../assets/ellipse-43.png")}
            />
            <Text style={[styles.em3, styles.em3Typo]}>2</Text>
          </View>
          <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
            <Image
              style={[styles.ellipseIcon, styles.lyricChildLayout]}
              contentFit="cover"
              source={require("../assets/ellipse-43.png")}
            />
            <Text style={[styles.em3, styles.em3Typo]}>1</Text>
          </View>
        </View>
        <View style={styles.frameParent}>
          <View style={styles.countParentFlexBox}>
            <View style={styles.lyricSpaceBlock}>
              <Image
                style={styles.lyricChildLayout}
                contentFit="cover"
                source={require("../assets/ellipse-43.png")}
              />
              <Text style={[styles.em139, styles.emTypo]}>Em</Text>
            </View>
            <View style={styles.lyricSpaceBlock}>
              <Image
                style={styles.lyricChildLayout}
                contentFit="cover"
                source={require("../assets/ellipse-43.png")}
              />
              <Text style={[styles.em139, styles.emTypo]}>thấy</Text>
            </View>
            <View style={styles.lyricSpaceBlock}>
              <Image
                style={styles.lyricChildLayout}
                contentFit="cover"
                source={require("../assets/ellipse-43.png")}
              />
              <Text style={[styles.em139, styles.emTypo]}>{`gì `}</Text>
            </View>
            <View style={styles.lyricSpaceBlock}>
              <Image
                style={styles.lyricChildLayout}
                contentFit="cover"
                source={require("../assets/ellipse-43.png")}
              />
              <Text style={[styles.em139, styles.emTypo]}>không</Text>
            </View>
            <View style={styles.lyricSpaceBlock}>
              <Image
                style={styles.lyricChildLayout}
                contentFit="cover"
                source={require("../assets/ellipse-44.png")}
              />
              <Text style={[styles.em139, styles.emTypo]}>hỡi</Text>
            </View>
            <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
              <Image
                style={styles.lyricChildLayout}
                contentFit="cover"
                source={require("../assets/ellipse-43.png")}
              />
              <Text style={[styles.em6, styles.em3Typo]}>em</Text>
            </View>
          </View>
          <View style={styles.lyricFlexBox}>
            <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
              <Image
                style={styles.lyricChildLayout}
                contentFit="cover"
                source={require("../assets/ellipse-43.png")}
              />
              <Text style={[styles.em6, styles.em3Typo]}>Con</Text>
            </View>
            <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
              <Image
                style={styles.lyricChildLayout}
                contentFit="cover"
                source={require("../assets/ellipse-43.png")}
              />
              <Text style={[styles.em6, styles.em3Typo]}>chim</Text>
            </View>
            <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
              <Image
                style={styles.lyricChildLayout}
                contentFit="cover"
                source={require("../assets/ellipse-43.png")}
              />
              <Text style={[styles.em6, styles.em3Typo]}>{`nó `}</Text>
            </View>
            <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
              <Image
                style={styles.lyricChildLayout}
                contentFit="cover"
                source={require("../assets/ellipse-43.png")}
              />
              <Text style={[styles.em6, styles.em3Typo]}>múa</Text>
            </View>
            <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
              <Image
                style={styles.lyricChildLayout}
                contentFit="cover"
                source={require("../assets/ellipse-43.png")}
              />
              <Text style={[styles.em6, styles.em3Typo]}>trên</Text>
            </View>
            <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
              <Image
                style={styles.lyricChildLayout}
                contentFit="cover"
                source={require("../assets/ellipse-43.png")}
              />
              <Text style={[styles.em6, styles.em3Typo]}>{`cành `}</Text>
            </View>
            <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
              <Image
                style={styles.lyricChildLayout}
                contentFit="cover"
                source={require("../assets/ellipse-43.png")}
              />
              <Text style={[styles.em6, styles.em3Typo]}>tre</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={[styles.property121, styles.propertySpaceBlock]}>
        <View style={[styles.count7, styles.countParentFlexBox]}>
          <View style={[styles.lyricWord, styles.lyricSpaceBlock]}>
            <Image
              style={styles.lyricChildLayout}
              contentFit="cover"
              source={require("../assets/ellipse-42.png")}
            />
            <Text style={[styles.em, styles.emTypo]}>3</Text>
          </View>
          <View style={[styles.lyricWord, styles.lyricSpaceBlock]}>
            <Image
              style={styles.lyricChildLayout}
              contentFit="cover"
              source={require("../assets/ellipse-42.png")}
            />
            <Text style={[styles.em, styles.emTypo]}>3</Text>
          </View>
          <View style={[styles.lyricWord, styles.lyricSpaceBlock]}>
            <Image
              style={styles.lyricChildLayout}
              contentFit="cover"
              source={require("../assets/ellipse-42.png")}
            />
            <Text style={[styles.em, styles.emTypo]}>3</Text>
          </View>
          <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
            <Image
              style={[styles.ellipseIcon, styles.lyricChildLayout]}
              contentFit="cover"
              source={require("../assets/ellipse-43.png")}
            />
            <Text style={[styles.em3, styles.em3Typo]}>3</Text>
          </View>
          <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
            <Image
              style={[styles.ellipseIcon, styles.lyricChildLayout]}
              contentFit="cover"
              source={require("../assets/ellipse-43.png")}
            />
            <Text style={[styles.em3, styles.em3Typo]}>2</Text>
          </View>
          <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
            <Image
              style={[styles.ellipseIcon, styles.lyricChildLayout]}
              contentFit="cover"
              source={require("../assets/ellipse-43.png")}
            />
            <Text style={[styles.em3, styles.em3Typo]}>1</Text>
          </View>
        </View>
        <View style={styles.frameParent}>
          <View style={styles.countParentFlexBox}>
            <View style={styles.lyricSpaceBlock}>
              <Image
                style={styles.lyricChildLayout}
                contentFit="cover"
                source={require("../assets/ellipse-43.png")}
              />
              <Text style={[styles.em139, styles.emTypo]}>Em</Text>
            </View>
            <View style={styles.lyricSpaceBlock}>
              <Image
                style={styles.lyricChildLayout}
                contentFit="cover"
                source={require("../assets/ellipse-43.png")}
              />
              <Text style={[styles.em139, styles.emTypo]}>thấy</Text>
            </View>
            <View style={styles.lyricSpaceBlock}>
              <Image
                style={styles.lyricChildLayout}
                contentFit="cover"
                source={require("../assets/ellipse-43.png")}
              />
              <Text style={[styles.em139, styles.emTypo]}>{`gì `}</Text>
            </View>
            <View style={styles.lyricSpaceBlock}>
              <Image
                style={styles.lyricChildLayout}
                contentFit="cover"
                source={require("../assets/ellipse-43.png")}
              />
              <Text style={[styles.em139, styles.emTypo]}>không</Text>
            </View>
            <View style={styles.lyricSpaceBlock}>
              <Image
                style={styles.lyricChildLayout}
                contentFit="cover"
                source={require("../assets/ellipse-43.png")}
              />
              <Text style={[styles.em139, styles.emTypo]}>hỡi</Text>
            </View>
            <View style={styles.lyricSpaceBlock}>
              <Image
                style={styles.lyricChildLayout}
                contentFit="cover"
                source={require("../assets/ellipse-43.png")}
              />
              <Text style={[styles.em139, styles.emTypo]}>em</Text>
            </View>
          </View>
          <View style={styles.lyricFlexBox}>
            <View style={styles.lyricSpaceBlock}>
              <Image
                style={styles.lyricChildLayout}
                contentFit="cover"
                source={require("../assets/ellipse-44.png")}
              />
              <Text style={[styles.em139, styles.emTypo]}>Con</Text>
            </View>
            <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
              <Image
                style={styles.lyricChildLayout}
                contentFit="cover"
                source={require("../assets/ellipse-43.png")}
              />
              <Text style={[styles.em6, styles.em3Typo]}>chim</Text>
            </View>
            <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
              <Image
                style={styles.lyricChildLayout}
                contentFit="cover"
                source={require("../assets/ellipse-43.png")}
              />
              <Text style={[styles.em6, styles.em3Typo]}>{`nó `}</Text>
            </View>
            <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
              <Image
                style={styles.lyricChildLayout}
                contentFit="cover"
                source={require("../assets/ellipse-43.png")}
              />
              <Text style={[styles.em6, styles.em3Typo]}>múa</Text>
            </View>
            <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
              <Image
                style={styles.lyricChildLayout}
                contentFit="cover"
                source={require("../assets/ellipse-43.png")}
              />
              <Text style={[styles.em6, styles.em3Typo]}>trên</Text>
            </View>
            <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
              <Image
                style={styles.lyricChildLayout}
                contentFit="cover"
                source={require("../assets/ellipse-43.png")}
              />
              <Text style={[styles.em6, styles.em3Typo]}>{`cành `}</Text>
            </View>
            <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
              <Image
                style={styles.lyricChildLayout}
                contentFit="cover"
                source={require("../assets/ellipse-43.png")}
              />
              <Text style={[styles.em6, styles.em3Typo]}>tre</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={[styles.property122, styles.propertySpaceBlock]}>
        <View style={[styles.count7, styles.countParentFlexBox]}>
          <View style={[styles.lyricWord, styles.lyricSpaceBlock]}>
            <Image
              style={styles.lyricChildLayout}
              contentFit="cover"
              source={require("../assets/ellipse-42.png")}
            />
            <Text style={[styles.em, styles.emTypo]}>3</Text>
          </View>
          <View style={[styles.lyricWord, styles.lyricSpaceBlock]}>
            <Image
              style={styles.lyricChildLayout}
              contentFit="cover"
              source={require("../assets/ellipse-42.png")}
            />
            <Text style={[styles.em, styles.emTypo]}>3</Text>
          </View>
          <View style={[styles.lyricWord, styles.lyricSpaceBlock]}>
            <Image
              style={styles.lyricChildLayout}
              contentFit="cover"
              source={require("../assets/ellipse-42.png")}
            />
            <Text style={[styles.em, styles.emTypo]}>3</Text>
          </View>
          <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
            <Image
              style={[styles.ellipseIcon, styles.lyricChildLayout]}
              contentFit="cover"
              source={require("../assets/ellipse-43.png")}
            />
            <Text style={[styles.em3, styles.em3Typo]}>3</Text>
          </View>
          <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
            <Image
              style={[styles.ellipseIcon, styles.lyricChildLayout]}
              contentFit="cover"
              source={require("../assets/ellipse-43.png")}
            />
            <Text style={[styles.em3, styles.em3Typo]}>2</Text>
          </View>
          <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
            <Image
              style={[styles.ellipseIcon, styles.lyricChildLayout]}
              contentFit="cover"
              source={require("../assets/ellipse-43.png")}
            />
            <Text style={[styles.em3, styles.em3Typo]}>1</Text>
          </View>
        </View>
        <View style={styles.frameParent}>
          <View style={styles.countParentFlexBox}>
            <View style={styles.lyricSpaceBlock}>
              <Image
                style={styles.lyricChildLayout}
                contentFit="cover"
                source={require("../assets/ellipse-43.png")}
              />
              <Text style={[styles.em139, styles.emTypo]}>Em</Text>
            </View>
            <View style={styles.lyricSpaceBlock}>
              <Image
                style={styles.lyricChildLayout}
                contentFit="cover"
                source={require("../assets/ellipse-43.png")}
              />
              <Text style={[styles.em139, styles.emTypo]}>thấy</Text>
            </View>
            <View style={styles.lyricSpaceBlock}>
              <Image
                style={styles.lyricChildLayout}
                contentFit="cover"
                source={require("../assets/ellipse-43.png")}
              />
              <Text style={[styles.em139, styles.emTypo]}>{`gì `}</Text>
            </View>
            <View style={styles.lyricSpaceBlock}>
              <Image
                style={styles.lyricChildLayout}
                contentFit="cover"
                source={require("../assets/ellipse-43.png")}
              />
              <Text style={[styles.em139, styles.emTypo]}>không</Text>
            </View>
            <View style={styles.lyricSpaceBlock}>
              <Image
                style={styles.lyricChildLayout}
                contentFit="cover"
                source={require("../assets/ellipse-43.png")}
              />
              <Text style={[styles.em139, styles.emTypo]}>hỡi</Text>
            </View>
            <View style={styles.lyricSpaceBlock}>
              <Image
                style={styles.lyricChildLayout}
                contentFit="cover"
                source={require("../assets/ellipse-43.png")}
              />
              <Text style={[styles.em139, styles.emTypo]}>em</Text>
            </View>
          </View>
          <View style={styles.lyricFlexBox}>
            <View style={styles.lyricSpaceBlock}>
              <Image
                style={styles.lyricChildLayout}
                contentFit="cover"
                source={require("../assets/ellipse-43.png")}
              />
              <Text style={[styles.em139, styles.emTypo]}>Con</Text>
            </View>
            <View style={styles.lyricSpaceBlock}>
              <Image
                style={styles.lyricChildLayout}
                contentFit="cover"
                source={require("../assets/ellipse-44.png")}
              />
              <Text style={[styles.em139, styles.emTypo]}>chim</Text>
            </View>
            <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
              <Image
                style={styles.lyricChildLayout}
                contentFit="cover"
                source={require("../assets/ellipse-43.png")}
              />
              <Text style={[styles.em6, styles.em3Typo]}>{`nó `}</Text>
            </View>
            <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
              <Image
                style={styles.lyricChildLayout}
                contentFit="cover"
                source={require("../assets/ellipse-43.png")}
              />
              <Text style={[styles.em6, styles.em3Typo]}>múa</Text>
            </View>
            <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
              <Image
                style={styles.lyricChildLayout}
                contentFit="cover"
                source={require("../assets/ellipse-43.png")}
              />
              <Text style={[styles.em6, styles.em3Typo]}>trên</Text>
            </View>
            <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
              <Image
                style={styles.lyricChildLayout}
                contentFit="cover"
                source={require("../assets/ellipse-43.png")}
              />
              <Text style={[styles.em6, styles.em3Typo]}>{`cành `}</Text>
            </View>
            <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
              <Image
                style={styles.lyricChildLayout}
                contentFit="cover"
                source={require("../assets/ellipse-43.png")}
              />
              <Text style={[styles.em6, styles.em3Typo]}>tre</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={[styles.property123, styles.propertySpaceBlock]}>
        <View style={[styles.count7, styles.countParentFlexBox]}>
          <View style={[styles.lyricWord, styles.lyricSpaceBlock]}>
            <Image
              style={styles.lyricChildLayout}
              contentFit="cover"
              source={require("../assets/ellipse-42.png")}
            />
            <Text style={[styles.em, styles.emTypo]}>3</Text>
          </View>
          <View style={[styles.lyricWord, styles.lyricSpaceBlock]}>
            <Image
              style={styles.lyricChildLayout}
              contentFit="cover"
              source={require("../assets/ellipse-42.png")}
            />
            <Text style={[styles.em, styles.emTypo]}>3</Text>
          </View>
          <View style={[styles.lyricWord, styles.lyricSpaceBlock]}>
            <Image
              style={styles.lyricChildLayout}
              contentFit="cover"
              source={require("../assets/ellipse-42.png")}
            />
            <Text style={[styles.em, styles.emTypo]}>3</Text>
          </View>
          <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
            <Image
              style={[styles.ellipseIcon, styles.lyricChildLayout]}
              contentFit="cover"
              source={require("../assets/ellipse-43.png")}
            />
            <Text style={[styles.em3, styles.em3Typo]}>3</Text>
          </View>
          <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
            <Image
              style={[styles.ellipseIcon, styles.lyricChildLayout]}
              contentFit="cover"
              source={require("../assets/ellipse-43.png")}
            />
            <Text style={[styles.em3, styles.em3Typo]}>2</Text>
          </View>
          <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
            <Image
              style={[styles.ellipseIcon, styles.lyricChildLayout]}
              contentFit="cover"
              source={require("../assets/ellipse-43.png")}
            />
            <Text style={[styles.em3, styles.em3Typo]}>1</Text>
          </View>
        </View>
        <View style={[styles.lyricWordParent23, styles.countParentFlexBox]}>
          <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
            <Image
              style={styles.lyricChildLayout}
              contentFit="cover"
              source={require("../assets/ellipse-43.png")}
            />
            <Text style={[styles.em6, styles.em3Typo]}>Hót</Text>
          </View>
          <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
            <Image
              style={styles.lyricChildLayout}
              contentFit="cover"
              source={require("../assets/ellipse-43.png")}
            />
            <Text style={[styles.em6, styles.em3Typo]}>đi</Text>
          </View>
          <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
            <Image
              style={styles.lyricChildLayout}
              contentFit="cover"
              source={require("../assets/ellipse-43.png")}
            />
            <Text style={[styles.em6, styles.em3Typo]}>{`chim `}</Text>
          </View>
          <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
            <Image
              style={styles.lyricChildLayout}
              contentFit="cover"
              source={require("../assets/ellipse-43.png")}
            />
            <Text style={[styles.em6, styles.em3Typo]}>,</Text>
          </View>
          <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
            <Image
              style={styles.lyricChildLayout}
              contentFit="cover"
              source={require("../assets/ellipse-43.png")}
            />
            <Text style={[styles.em6, styles.em3Typo]}>hót</Text>
          </View>
          <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
            <Image
              style={styles.lyricChildLayout}
              contentFit="cover"
              source={require("../assets/ellipse-43.png")}
            />
            <Text style={[styles.em6, styles.em3Typo]}>đi</Text>
          </View>
          <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
            <Image
              style={styles.lyricChildLayout}
              contentFit="cover"
              source={require("../assets/ellipse-43.png")}
            />
            <Text style={[styles.em6, styles.em3Typo]}>chim</Text>
          </View>
        </View>
        <View style={styles.property19Inner}>
          <View style={styles.lyricParentFlexBox}>
            <View style={styles.lyricSpaceBlock}>
              <Image
                style={styles.lyricChildLayout}
                contentFit="cover"
                source={require("../assets/ellipse-43.png")}
              />
              <Text style={[styles.em139, styles.emTypo]}>Con</Text>
            </View>
            <View style={styles.lyricSpaceBlock}>
              <Image
                style={styles.lyricChildLayout}
                contentFit="cover"
                source={require("../assets/ellipse-43.png")}
              />
              <Text style={[styles.em139, styles.emTypo]}>chim</Text>
            </View>
            <View style={styles.lyricSpaceBlock}>
              <Image
                style={styles.lyricChildLayout}
                contentFit="cover"
                source={require("../assets/ellipse-41.png")}
              />
              <Text style={[styles.em139, styles.emTypo]}>{`nó `}</Text>
            </View>
            <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
              <Image
                style={styles.lyricChildLayout}
                contentFit="cover"
                source={require("../assets/ellipse-43.png")}
              />
              <Text style={[styles.em6, styles.em3Typo]}>múa</Text>
            </View>
            <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
              <Image
                style={styles.lyricChildLayout}
                contentFit="cover"
                source={require("../assets/ellipse-43.png")}
              />
              <Text style={[styles.em6, styles.em3Typo]}>trên</Text>
            </View>
            <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
              <Image
                style={styles.lyricChildLayout}
                contentFit="cover"
                source={require("../assets/ellipse-43.png")}
              />
              <Text style={[styles.em6, styles.em3Typo]}>{`cành `}</Text>
            </View>
            <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
              <Image
                style={styles.lyricChildLayout}
                contentFit="cover"
                source={require("../assets/ellipse-43.png")}
              />
              <Text style={[styles.em6, styles.em3Typo]}>tre</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={[styles.property124, styles.propertySpaceBlock]}>
        <View style={[styles.count7, styles.countParentFlexBox]}>
          <View style={[styles.lyricWord, styles.lyricSpaceBlock]}>
            <Image
              style={styles.lyricChildLayout}
              contentFit="cover"
              source={require("../assets/ellipse-42.png")}
            />
            <Text style={[styles.em, styles.emTypo]}>3</Text>
          </View>
          <View style={[styles.lyricWord, styles.lyricSpaceBlock]}>
            <Image
              style={styles.lyricChildLayout}
              contentFit="cover"
              source={require("../assets/ellipse-42.png")}
            />
            <Text style={[styles.em, styles.emTypo]}>3</Text>
          </View>
          <View style={[styles.lyricWord, styles.lyricSpaceBlock]}>
            <Image
              style={styles.lyricChildLayout}
              contentFit="cover"
              source={require("../assets/ellipse-42.png")}
            />
            <Text style={[styles.em, styles.emTypo]}>3</Text>
          </View>
          <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
            <Image
              style={[styles.ellipseIcon, styles.lyricChildLayout]}
              contentFit="cover"
              source={require("../assets/ellipse-43.png")}
            />
            <Text style={[styles.em3, styles.em3Typo]}>3</Text>
          </View>
          <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
            <Image
              style={[styles.ellipseIcon, styles.lyricChildLayout]}
              contentFit="cover"
              source={require("../assets/ellipse-43.png")}
            />
            <Text style={[styles.em3, styles.em3Typo]}>2</Text>
          </View>
          <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
            <Image
              style={[styles.ellipseIcon, styles.lyricChildLayout]}
              contentFit="cover"
              source={require("../assets/ellipse-43.png")}
            />
            <Text style={[styles.em3, styles.em3Typo]}>1</Text>
          </View>
        </View>
        <View style={[styles.lyricWordParent23, styles.countParentFlexBox]}>
          <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
            <Image
              style={styles.lyricChildLayout}
              contentFit="cover"
              source={require("../assets/ellipse-43.png")}
            />
            <Text style={[styles.em6, styles.em3Typo]}>Hót</Text>
          </View>
          <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
            <Image
              style={styles.lyricChildLayout}
              contentFit="cover"
              source={require("../assets/ellipse-43.png")}
            />
            <Text style={[styles.em6, styles.em3Typo]}>đi</Text>
          </View>
          <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
            <Image
              style={styles.lyricChildLayout}
              contentFit="cover"
              source={require("../assets/ellipse-43.png")}
            />
            <Text style={[styles.em6, styles.em3Typo]}>{`chim `}</Text>
          </View>
          <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
            <Image
              style={styles.lyricChildLayout}
              contentFit="cover"
              source={require("../assets/ellipse-43.png")}
            />
            <Text style={[styles.em6, styles.em3Typo]}>,</Text>
          </View>
          <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
            <Image
              style={styles.lyricChildLayout}
              contentFit="cover"
              source={require("../assets/ellipse-43.png")}
            />
            <Text style={[styles.em6, styles.em3Typo]}>hót</Text>
          </View>
          <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
            <Image
              style={styles.lyricChildLayout}
              contentFit="cover"
              source={require("../assets/ellipse-43.png")}
            />
            <Text style={[styles.em6, styles.em3Typo]}>đi</Text>
          </View>
          <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
            <Image
              style={styles.lyricChildLayout}
              contentFit="cover"
              source={require("../assets/ellipse-43.png")}
            />
            <Text style={[styles.em6, styles.em3Typo]}>chim</Text>
          </View>
        </View>
        <View style={styles.property19Inner}>
          <View style={styles.lyricParentFlexBox}>
            <View style={styles.lyricSpaceBlock}>
              <Image
                style={styles.lyricChildLayout}
                contentFit="cover"
                source={require("../assets/ellipse-43.png")}
              />
              <Text style={[styles.em139, styles.emTypo]}>Con</Text>
            </View>
            <View style={styles.lyricSpaceBlock}>
              <Image
                style={styles.lyricChildLayout}
                contentFit="cover"
                source={require("../assets/ellipse-43.png")}
              />
              <Text style={[styles.em139, styles.emTypo]}>chim</Text>
            </View>
            <View style={styles.lyricSpaceBlock}>
              <Image
                style={styles.lyricChildLayout}
                contentFit="cover"
                source={require("../assets/ellipse-43.png")}
              />
              <Text style={[styles.em139, styles.emTypo]}>{`nó `}</Text>
            </View>
            <View style={styles.lyricSpaceBlock}>
              <Image
                style={styles.lyricChildLayout}
                contentFit="cover"
                source={require("../assets/ellipse-41.png")}
              />
              <Text style={[styles.em139, styles.emTypo]}>múa</Text>
            </View>
            <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
              <Image
                style={styles.lyricChildLayout}
                contentFit="cover"
                source={require("../assets/ellipse-43.png")}
              />
              <Text style={[styles.em6, styles.em3Typo]}>trên</Text>
            </View>
            <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
              <Image
                style={styles.lyricChildLayout}
                contentFit="cover"
                source={require("../assets/ellipse-43.png")}
              />
              <Text style={[styles.em6, styles.em3Typo]}>{`cành `}</Text>
            </View>
            <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
              <Image
                style={styles.lyricChildLayout}
                contentFit="cover"
                source={require("../assets/ellipse-43.png")}
              />
              <Text style={[styles.em6, styles.em3Typo]}>tre</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={[styles.property125, styles.propertySpaceBlock]}>
        <View style={[styles.count7, styles.countParentFlexBox]}>
          <View style={[styles.lyricWord, styles.lyricSpaceBlock]}>
            <Image
              style={styles.lyricChildLayout}
              contentFit="cover"
              source={require("../assets/ellipse-42.png")}
            />
            <Text style={[styles.em, styles.emTypo]}>3</Text>
          </View>
          <View style={[styles.lyricWord, styles.lyricSpaceBlock]}>
            <Image
              style={styles.lyricChildLayout}
              contentFit="cover"
              source={require("../assets/ellipse-42.png")}
            />
            <Text style={[styles.em, styles.emTypo]}>3</Text>
          </View>
          <View style={[styles.lyricWord, styles.lyricSpaceBlock]}>
            <Image
              style={styles.lyricChildLayout}
              contentFit="cover"
              source={require("../assets/ellipse-42.png")}
            />
            <Text style={[styles.em, styles.emTypo]}>3</Text>
          </View>
          <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
            <Image
              style={[styles.ellipseIcon, styles.lyricChildLayout]}
              contentFit="cover"
              source={require("../assets/ellipse-43.png")}
            />
            <Text style={[styles.em3, styles.em3Typo]}>3</Text>
          </View>
          <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
            <Image
              style={[styles.ellipseIcon, styles.lyricChildLayout]}
              contentFit="cover"
              source={require("../assets/ellipse-43.png")}
            />
            <Text style={[styles.em3, styles.em3Typo]}>2</Text>
          </View>
          <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
            <Image
              style={[styles.ellipseIcon, styles.lyricChildLayout]}
              contentFit="cover"
              source={require("../assets/ellipse-43.png")}
            />
            <Text style={[styles.em3, styles.em3Typo]}>1</Text>
          </View>
        </View>
        <View style={[styles.lyricWordParent35, styles.countParentFlexBox]}>
          <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
            <Image
              style={styles.lyricChildLayout}
              contentFit="cover"
              source={require("../assets/ellipse-43.png")}
            />
            <Text style={[styles.em6, styles.em3Typo]}>Hót</Text>
          </View>
          <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
            <Image
              style={styles.lyricChildLayout}
              contentFit="cover"
              source={require("../assets/ellipse-43.png")}
            />
            <Text style={[styles.em6, styles.em3Typo]}>đi</Text>
          </View>
          <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
            <Image
              style={styles.lyricChildLayout}
              contentFit="cover"
              source={require("../assets/ellipse-43.png")}
            />
            <Text style={[styles.em6, styles.em3Typo]}>{`chim `}</Text>
          </View>
          <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
            <Image
              style={styles.lyricChildLayout}
              contentFit="cover"
              source={require("../assets/ellipse-43.png")}
            />
            <Text style={[styles.em6, styles.em3Typo]}>,</Text>
          </View>
          <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
            <Image
              style={styles.lyricChildLayout}
              contentFit="cover"
              source={require("../assets/ellipse-43.png")}
            />
            <Text style={[styles.em6, styles.em3Typo]}>hót</Text>
          </View>
          <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
            <Image
              style={styles.lyricChildLayout}
              contentFit="cover"
              source={require("../assets/ellipse-43.png")}
            />
            <Text style={[styles.em6, styles.em3Typo]}>đi</Text>
          </View>
          <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
            <Image
              style={styles.lyricChildLayout}
              contentFit="cover"
              source={require("../assets/ellipse-43.png")}
            />
            <Text style={[styles.em6, styles.em3Typo]}>chim</Text>
          </View>
        </View>
        <View style={styles.property19Inner}>
          <View style={styles.lyricParentFlexBox}>
            <View style={styles.lyricSpaceBlock}>
              <Image
                style={styles.lyricChildLayout}
                contentFit="cover"
                source={require("../assets/ellipse-43.png")}
              />
              <Text style={[styles.em139, styles.emTypo]}>Con</Text>
            </View>
            <View style={styles.lyricSpaceBlock}>
              <Image
                style={styles.lyricChildLayout}
                contentFit="cover"
                source={require("../assets/ellipse-43.png")}
              />
              <Text style={[styles.em139, styles.emTypo]}>chim</Text>
            </View>
            <View style={styles.lyricSpaceBlock}>
              <Image
                style={styles.lyricChildLayout}
                contentFit="cover"
                source={require("../assets/ellipse-43.png")}
              />
              <Text style={[styles.em139, styles.emTypo]}>{`nó `}</Text>
            </View>
            <View style={styles.lyricSpaceBlock}>
              <Image
                style={styles.lyricChildLayout}
                contentFit="cover"
                source={require("../assets/ellipse-43.png")}
              />
              <Text style={[styles.em139, styles.emTypo]}>múa</Text>
            </View>
            <View style={styles.lyricSpaceBlock}>
              <Image
                style={styles.lyricChildLayout}
                contentFit="cover"
                source={require("../assets/ellipse-41.png")}
              />
              <Text style={[styles.em139, styles.emTypo]}>trên</Text>
            </View>
            <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
              <Image
                style={styles.lyricChildLayout}
                contentFit="cover"
                source={require("../assets/ellipse-43.png")}
              />
              <Text style={[styles.em6, styles.em3Typo]}>{`cành `}</Text>
            </View>
            <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
              <Image
                style={styles.lyricChildLayout}
                contentFit="cover"
                source={require("../assets/ellipse-43.png")}
              />
              <Text style={[styles.em6, styles.em3Typo]}>tre</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={[styles.property126, styles.propertySpaceBlock]}>
        <View style={[styles.count7, styles.countParentFlexBox]}>
          <View style={[styles.lyricWord, styles.lyricSpaceBlock]}>
            <Image
              style={styles.lyricChildLayout}
              contentFit="cover"
              source={require("../assets/ellipse-42.png")}
            />
            <Text style={[styles.em, styles.emTypo]}>3</Text>
          </View>
          <View style={[styles.lyricWord, styles.lyricSpaceBlock]}>
            <Image
              style={styles.lyricChildLayout}
              contentFit="cover"
              source={require("../assets/ellipse-42.png")}
            />
            <Text style={[styles.em, styles.emTypo]}>3</Text>
          </View>
          <View style={[styles.lyricWord, styles.lyricSpaceBlock]}>
            <Image
              style={styles.lyricChildLayout}
              contentFit="cover"
              source={require("../assets/ellipse-42.png")}
            />
            <Text style={[styles.em, styles.emTypo]}>3</Text>
          </View>
          <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
            <Image
              style={[styles.ellipseIcon, styles.lyricChildLayout]}
              contentFit="cover"
              source={require("../assets/ellipse-43.png")}
            />
            <Text style={[styles.em3, styles.em3Typo]}>3</Text>
          </View>
          <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
            <Image
              style={[styles.ellipseIcon, styles.lyricChildLayout]}
              contentFit="cover"
              source={require("../assets/ellipse-43.png")}
            />
            <Text style={[styles.em3, styles.em3Typo]}>2</Text>
          </View>
          <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
            <Image
              style={[styles.ellipseIcon, styles.lyricChildLayout]}
              contentFit="cover"
              source={require("../assets/ellipse-43.png")}
            />
            <Text style={[styles.em3, styles.em3Typo]}>1</Text>
          </View>
        </View>
        <View style={styles.frameParent}>
          <View style={styles.countParentFlexBox}>
            <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
              <Image
                style={styles.lyricChildLayout}
                contentFit="cover"
                source={require("../assets/ellipse-43.png")}
              />
              <Text style={[styles.em6, styles.em3Typo]}>Hót</Text>
            </View>
            <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
              <Image
                style={styles.lyricChildLayout}
                contentFit="cover"
                source={require("../assets/ellipse-43.png")}
              />
              <Text style={[styles.em6, styles.em3Typo]}>đi</Text>
            </View>
            <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
              <Image
                style={styles.lyricChildLayout}
                contentFit="cover"
                source={require("../assets/ellipse-43.png")}
              />
              <Text style={[styles.em6, styles.em3Typo]}>{`chim `}</Text>
            </View>
            <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
              <Image
                style={styles.lyricChildLayout}
                contentFit="cover"
                source={require("../assets/ellipse-43.png")}
              />
              <Text style={[styles.em6, styles.em3Typo]}>,</Text>
            </View>
            <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
              <Image
                style={styles.lyricChildLayout}
                contentFit="cover"
                source={require("../assets/ellipse-43.png")}
              />
              <Text style={[styles.em6, styles.em3Typo]}>hót</Text>
            </View>
            <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
              <Image
                style={styles.lyricChildLayout}
                contentFit="cover"
                source={require("../assets/ellipse-43.png")}
              />
              <Text style={[styles.em6, styles.em3Typo]}>đi</Text>
            </View>
            <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
              <Image
                style={styles.lyricChildLayout}
                contentFit="cover"
                source={require("../assets/ellipse-43.png")}
              />
              <Text style={[styles.em6, styles.em3Typo]}>chim</Text>
            </View>
          </View>
          <View style={styles.lyricFlexBox}>
            <View style={styles.lyricSpaceBlock}>
              <Image
                style={styles.lyricChildLayout}
                contentFit="cover"
                source={require("../assets/ellipse-43.png")}
              />
              <Text style={[styles.em139, styles.emTypo]}>Con</Text>
            </View>
            <View style={styles.lyricSpaceBlock}>
              <Image
                style={styles.lyricChildLayout}
                contentFit="cover"
                source={require("../assets/ellipse-43.png")}
              />
              <Text style={[styles.em139, styles.emTypo]}>chim</Text>
            </View>
            <View style={styles.lyricSpaceBlock}>
              <Image
                style={styles.lyricChildLayout}
                contentFit="cover"
                source={require("../assets/ellipse-43.png")}
              />
              <Text style={[styles.em139, styles.emTypo]}>{`nó `}</Text>
            </View>
            <View style={styles.lyricSpaceBlock}>
              <Image
                style={styles.lyricChildLayout}
                contentFit="cover"
                source={require("../assets/ellipse-43.png")}
              />
              <Text style={[styles.em139, styles.emTypo]}>múa</Text>
            </View>
            <View style={styles.lyricSpaceBlock}>
              <Image
                style={styles.lyricChildLayout}
                contentFit="cover"
                source={require("../assets/ellipse-43.png")}
              />
              <Text style={[styles.em139, styles.emTypo]}>trên</Text>
            </View>
            <View style={styles.lyricSpaceBlock}>
              <Image
                style={styles.lyricChildLayout}
                contentFit="cover"
                source={require("../assets/ellipse-41.png")}
              />
              <Text style={[styles.em139, styles.emTypo]}>{`cành `}</Text>
            </View>
            <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
              <Image
                style={styles.lyricChildLayout}
                contentFit="cover"
                source={require("../assets/ellipse-43.png")}
              />
              <Text style={[styles.em6, styles.em3Typo]}>tre</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={[styles.property127, styles.propertySpaceBlock]}>
        <View style={[styles.count7, styles.countParentFlexBox]}>
          <View style={[styles.lyricWord, styles.lyricSpaceBlock]}>
            <Image
              style={styles.lyricChildLayout}
              contentFit="cover"
              source={require("../assets/ellipse-42.png")}
            />
            <Text style={[styles.em, styles.emTypo]}>3</Text>
          </View>
          <View style={[styles.lyricWord, styles.lyricSpaceBlock]}>
            <Image
              style={styles.lyricChildLayout}
              contentFit="cover"
              source={require("../assets/ellipse-42.png")}
            />
            <Text style={[styles.em, styles.emTypo]}>3</Text>
          </View>
          <View style={[styles.lyricWord, styles.lyricSpaceBlock]}>
            <Image
              style={styles.lyricChildLayout}
              contentFit="cover"
              source={require("../assets/ellipse-42.png")}
            />
            <Text style={[styles.em, styles.emTypo]}>3</Text>
          </View>
          <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
            <Image
              style={[styles.ellipseIcon, styles.lyricChildLayout]}
              contentFit="cover"
              source={require("../assets/ellipse-43.png")}
            />
            <Text style={[styles.em3, styles.em3Typo]}>3</Text>
          </View>
          <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
            <Image
              style={[styles.ellipseIcon, styles.lyricChildLayout]}
              contentFit="cover"
              source={require("../assets/ellipse-43.png")}
            />
            <Text style={[styles.em3, styles.em3Typo]}>2</Text>
          </View>
          <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
            <Image
              style={[styles.ellipseIcon, styles.lyricChildLayout]}
              contentFit="cover"
              source={require("../assets/ellipse-43.png")}
            />
            <Text style={[styles.em3, styles.em3Typo]}>1</Text>
          </View>
        </View>
        <View style={styles.frameParent}>
          <View style={styles.countParentFlexBox}>
            <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
              <Image
                style={styles.lyricChildLayout}
                contentFit="cover"
                source={require("../assets/ellipse-43.png")}
              />
              <Text style={[styles.em6, styles.em3Typo]}>Hót</Text>
            </View>
            <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
              <Image
                style={styles.lyricChildLayout}
                contentFit="cover"
                source={require("../assets/ellipse-43.png")}
              />
              <Text style={[styles.em6, styles.em3Typo]}>đi</Text>
            </View>
            <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
              <Image
                style={styles.lyricChildLayout}
                contentFit="cover"
                source={require("../assets/ellipse-43.png")}
              />
              <Text style={[styles.em6, styles.em3Typo]}>{`chim `}</Text>
            </View>
            <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
              <Image
                style={styles.lyricChildLayout}
                contentFit="cover"
                source={require("../assets/ellipse-43.png")}
              />
              <Text style={[styles.em6, styles.em3Typo]}>,</Text>
            </View>
            <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
              <Image
                style={styles.lyricChildLayout}
                contentFit="cover"
                source={require("../assets/ellipse-43.png")}
              />
              <Text style={[styles.em6, styles.em3Typo]}>hót</Text>
            </View>
            <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
              <Image
                style={styles.lyricChildLayout}
                contentFit="cover"
                source={require("../assets/ellipse-43.png")}
              />
              <Text style={[styles.em6, styles.em3Typo]}>đi</Text>
            </View>
            <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
              <Image
                style={styles.lyricChildLayout}
                contentFit="cover"
                source={require("../assets/ellipse-43.png")}
              />
              <Text style={[styles.em6, styles.em3Typo]}>chim</Text>
            </View>
          </View>
          <View style={styles.lyricFlexBox}>
            <View style={styles.lyricSpaceBlock}>
              <Image
                style={styles.lyricChildLayout}
                contentFit="cover"
                source={require("../assets/ellipse-43.png")}
              />
              <Text style={[styles.em139, styles.emTypo]}>Con</Text>
            </View>
            <View style={styles.lyricSpaceBlock}>
              <Image
                style={styles.lyricChildLayout}
                contentFit="cover"
                source={require("../assets/ellipse-43.png")}
              />
              <Text style={[styles.em139, styles.emTypo]}>chim</Text>
            </View>
            <View style={styles.lyricSpaceBlock}>
              <Image
                style={styles.lyricChildLayout}
                contentFit="cover"
                source={require("../assets/ellipse-43.png")}
              />
              <Text style={[styles.em139, styles.emTypo]}>{`nó `}</Text>
            </View>
            <View style={styles.lyricSpaceBlock}>
              <Image
                style={styles.lyricChildLayout}
                contentFit="cover"
                source={require("../assets/ellipse-43.png")}
              />
              <Text style={[styles.em139, styles.emTypo]}>múa</Text>
            </View>
            <View style={styles.lyricSpaceBlock}>
              <Image
                style={styles.lyricChildLayout}
                contentFit="cover"
                source={require("../assets/ellipse-43.png")}
              />
              <Text style={[styles.em139, styles.emTypo]}>trên</Text>
            </View>
            <View style={styles.lyricSpaceBlock}>
              <Image
                style={styles.lyricChildLayout}
                contentFit="cover"
                source={require("../assets/ellipse-43.png")}
              />
              <Text style={[styles.em139, styles.emTypo]}>{`cành `}</Text>
            </View>
            <View style={styles.lyricSpaceBlock}>
              <Image
                style={styles.lyricChildLayout}
                contentFit="cover"
                source={require("../assets/ellipse-41.png")}
              />
              <Text style={[styles.em139, styles.emTypo]}>tre</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={[styles.property128, styles.propertySpaceBlock]}>
        <View style={[styles.count7, styles.countParentFlexBox]}>
          <View style={[styles.lyricWord, styles.lyricSpaceBlock]}>
            <Image
              style={styles.lyricChildLayout}
              contentFit="cover"
              source={require("../assets/ellipse-42.png")}
            />
            <Text style={[styles.em, styles.emTypo]}>3</Text>
          </View>
          <View style={[styles.lyricWord, styles.lyricSpaceBlock]}>
            <Image
              style={styles.lyricChildLayout}
              contentFit="cover"
              source={require("../assets/ellipse-42.png")}
            />
            <Text style={[styles.em, styles.emTypo]}>3</Text>
          </View>
          <View style={[styles.lyricWord, styles.lyricSpaceBlock]}>
            <Image
              style={styles.lyricChildLayout}
              contentFit="cover"
              source={require("../assets/ellipse-42.png")}
            />
            <Text style={[styles.em, styles.emTypo]}>3</Text>
          </View>
          <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
            <Image
              style={[styles.ellipseIcon, styles.lyricChildLayout]}
              contentFit="cover"
              source={require("../assets/ellipse-43.png")}
            />
            <Text style={[styles.em3, styles.em3Typo]}>3</Text>
          </View>
          <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
            <Image
              style={[styles.ellipseIcon, styles.lyricChildLayout]}
              contentFit="cover"
              source={require("../assets/ellipse-43.png")}
            />
            <Text style={[styles.em3, styles.em3Typo]}>2</Text>
          </View>
          <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
            <Image
              style={[styles.ellipseIcon, styles.lyricChildLayout]}
              contentFit="cover"
              source={require("../assets/ellipse-43.png")}
            />
            <Text style={[styles.em3, styles.em3Typo]}>1</Text>
          </View>
        </View>
        <View style={styles.frameParent}>
          <View style={styles.countParentFlexBox}>
            <View style={styles.lyricSpaceBlock}>
              <Image
                style={styles.lyricChildLayout}
                contentFit="cover"
                source={require("../assets/ellipse-44.png")}
              />
              <Text style={[styles.em139, styles.emTypo]}>Hót</Text>
            </View>
            <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
              <Image
                style={styles.lyricChildLayout}
                contentFit="cover"
                source={require("../assets/ellipse-43.png")}
              />
              <Text style={[styles.em6, styles.em3Typo]}>đi</Text>
            </View>
            <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
              <Image
                style={styles.lyricChildLayout}
                contentFit="cover"
                source={require("../assets/ellipse-43.png")}
              />
              <Text style={[styles.em6, styles.em3Typo]}>{`chim `}</Text>
            </View>
            <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
              <Image
                style={styles.lyricChildLayout}
                contentFit="cover"
                source={require("../assets/ellipse-43.png")}
              />
              <Text style={[styles.em6, styles.em3Typo]}>,</Text>
            </View>
            <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
              <Image
                style={styles.lyricChildLayout}
                contentFit="cover"
                source={require("../assets/ellipse-43.png")}
              />
              <Text style={[styles.em6, styles.em3Typo]}>hót</Text>
            </View>
            <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
              <Image
                style={styles.lyricChildLayout}
                contentFit="cover"
                source={require("../assets/ellipse-43.png")}
              />
              <Text style={[styles.em6, styles.em3Typo]}>đi</Text>
            </View>
            <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
              <Image
                style={styles.lyricChildLayout}
                contentFit="cover"
                source={require("../assets/ellipse-43.png")}
              />
              <Text style={[styles.em6, styles.em3Typo]}>chim</Text>
            </View>
          </View>
          <View style={styles.lyricFlexBox}>
            <View style={styles.lyricSpaceBlock}>
              <Image
                style={styles.lyricChildLayout}
                contentFit="cover"
                source={require("../assets/ellipse-43.png")}
              />
              <Text style={[styles.em139, styles.emTypo]}>Con</Text>
            </View>
            <View style={styles.lyricSpaceBlock}>
              <Image
                style={styles.lyricChildLayout}
                contentFit="cover"
                source={require("../assets/ellipse-43.png")}
              />
              <Text style={[styles.em139, styles.emTypo]}>chim</Text>
            </View>
            <View style={styles.lyricSpaceBlock}>
              <Image
                style={styles.lyricChildLayout}
                contentFit="cover"
                source={require("../assets/ellipse-43.png")}
              />
              <Text style={[styles.em139, styles.emTypo]}>{`nó `}</Text>
            </View>
            <View style={styles.lyricSpaceBlock}>
              <Image
                style={styles.lyricChildLayout}
                contentFit="cover"
                source={require("../assets/ellipse-43.png")}
              />
              <Text style={[styles.em139, styles.emTypo]}>múa</Text>
            </View>
            <View style={styles.lyricSpaceBlock}>
              <Image
                style={styles.lyricChildLayout}
                contentFit="cover"
                source={require("../assets/ellipse-43.png")}
              />
              <Text style={[styles.em139, styles.emTypo]}>trên</Text>
            </View>
            <View style={styles.lyricSpaceBlock}>
              <Image
                style={styles.lyricChildLayout}
                contentFit="cover"
                source={require("../assets/ellipse-43.png")}
              />
              <Text style={[styles.em139, styles.emTypo]}>{`cành `}</Text>
            </View>
            <View style={styles.lyricSpaceBlock}>
              <Image
                style={styles.lyricChildLayout}
                contentFit="cover"
                source={require("../assets/ellipse-43.png")}
              />
              <Text style={[styles.em139, styles.emTypo]}>tre</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={[styles.property129, styles.propertyPosition1]}>
        <View style={[styles.count7, styles.countParentFlexBox]}>
          <View style={[styles.lyricWord, styles.lyricSpaceBlock]}>
            <Image
              style={styles.lyricChildLayout}
              contentFit="cover"
              source={require("../assets/ellipse-42.png")}
            />
            <Text style={[styles.em, styles.emTypo]}>3</Text>
          </View>
          <View style={[styles.lyricWord, styles.lyricSpaceBlock]}>
            <Image
              style={styles.lyricChildLayout}
              contentFit="cover"
              source={require("../assets/ellipse-42.png")}
            />
            <Text style={[styles.em, styles.emTypo]}>3</Text>
          </View>
          <View style={[styles.lyricWord, styles.lyricSpaceBlock]}>
            <Image
              style={styles.lyricChildLayout}
              contentFit="cover"
              source={require("../assets/ellipse-42.png")}
            />
            <Text style={[styles.em, styles.emTypo]}>3</Text>
          </View>
          <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
            <Image
              style={[styles.ellipseIcon, styles.lyricChildLayout]}
              contentFit="cover"
              source={require("../assets/ellipse-43.png")}
            />
            <Text style={[styles.em3, styles.em3Typo]}>3</Text>
          </View>
          <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
            <Image
              style={[styles.ellipseIcon, styles.lyricChildLayout]}
              contentFit="cover"
              source={require("../assets/ellipse-43.png")}
            />
            <Text style={[styles.em3, styles.em3Typo]}>2</Text>
          </View>
          <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
            <Image
              style={[styles.ellipseIcon, styles.lyricChildLayout]}
              contentFit="cover"
              source={require("../assets/ellipse-43.png")}
            />
            <Text style={[styles.em3, styles.em3Typo]}>1</Text>
          </View>
        </View>
        <View style={styles.frameParent}>
          <View style={styles.countParentFlexBox}>
            <View style={styles.lyricSpaceBlock}>
              <Image
                style={styles.lyricChildLayout}
                contentFit="cover"
                source={require("../assets/ellipse-43.png")}
              />
              <Text style={[styles.em139, styles.emTypo]}>Hót</Text>
            </View>
            <View style={styles.lyricSpaceBlock}>
              <Image
                style={styles.lyricChildLayout}
                contentFit="cover"
                source={require("../assets/ellipse-44.png")}
              />
              <Text style={[styles.em139, styles.emTypo]}>đi</Text>
            </View>
            <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
              <Image
                style={styles.lyricChildLayout}
                contentFit="cover"
                source={require("../assets/ellipse-43.png")}
              />
              <Text style={[styles.em6, styles.em3Typo]}>{`chim `}</Text>
            </View>
            <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
              <Image
                style={styles.lyricChildLayout}
                contentFit="cover"
                source={require("../assets/ellipse-43.png")}
              />
              <Text style={[styles.em6, styles.em3Typo]}>,</Text>
            </View>
            <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
              <Image
                style={styles.lyricChildLayout}
                contentFit="cover"
                source={require("../assets/ellipse-43.png")}
              />
              <Text style={[styles.em6, styles.em3Typo]}>hót</Text>
            </View>
            <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
              <Image
                style={styles.lyricChildLayout}
                contentFit="cover"
                source={require("../assets/ellipse-43.png")}
              />
              <Text style={[styles.em6, styles.em3Typo]}>đi</Text>
            </View>
            <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
              <Image
                style={styles.lyricChildLayout}
                contentFit="cover"
                source={require("../assets/ellipse-43.png")}
              />
              <Text style={[styles.em6, styles.em3Typo]}>chim</Text>
            </View>
          </View>
          <View style={[styles.lyricWordParent40, styles.lyricFlexBox]}>
            <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
              <Image
                style={styles.lyricChildLayout}
                contentFit="cover"
                source={require("../assets/ellipse-43.png")}
              />
              <Text style={[styles.em6, styles.em3Typo]}>Hót</Text>
            </View>
            <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
              <Image
                style={styles.lyricChildLayout}
                contentFit="cover"
                source={require("../assets/ellipse-43.png")}
              />
              <Text style={[styles.em6, styles.em3Typo]}>cho</Text>
            </View>
            <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
              <Image
                style={styles.lyricChildLayout}
                contentFit="cover"
                source={require("../assets/ellipse-43.png")}
              />
              <Text style={[styles.em6, styles.em3Typo]}>{`mặt `}</Text>
            </View>
            <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
              <Image
                style={styles.lyricChildLayout}
                contentFit="cover"
                source={require("../assets/ellipse-43.png")}
              />
              <Text style={[styles.em6, styles.em3Typo]}>trời</Text>
            </View>
            <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
              <Image
                style={styles.lyricChildLayout}
                contentFit="cover"
                source={require("../assets/ellipse-43.png")}
              />
              <Text style={[styles.em6, styles.em3Typo]}>hồng</Text>
            </View>
            <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
              <Image
                style={styles.lyricChildLayout}
                contentFit="cover"
                source={require("../assets/ellipse-43.png")}
              />
              <Text style={[styles.em6, styles.em3Typo]}>{`quê `}</Text>
            </View>
            <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
              <Image
                style={styles.lyricChildLayout}
                contentFit="cover"
                source={require("../assets/ellipse-43.png")}
              />
              <Text style={[styles.em6, styles.em3Typo]}>ta</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={[styles.property130, styles.propertyPosition1]}>
        <View style={[styles.count7, styles.countParentFlexBox]}>
          <View style={[styles.lyricWord, styles.lyricSpaceBlock]}>
            <Image
              style={styles.lyricChildLayout}
              contentFit="cover"
              source={require("../assets/ellipse-42.png")}
            />
            <Text style={[styles.em, styles.emTypo]}>3</Text>
          </View>
          <View style={[styles.lyricWord, styles.lyricSpaceBlock]}>
            <Image
              style={styles.lyricChildLayout}
              contentFit="cover"
              source={require("../assets/ellipse-42.png")}
            />
            <Text style={[styles.em, styles.emTypo]}>3</Text>
          </View>
          <View style={[styles.lyricWord, styles.lyricSpaceBlock]}>
            <Image
              style={styles.lyricChildLayout}
              contentFit="cover"
              source={require("../assets/ellipse-42.png")}
            />
            <Text style={[styles.em, styles.emTypo]}>3</Text>
          </View>
          <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
            <Image
              style={[styles.ellipseIcon, styles.lyricChildLayout]}
              contentFit="cover"
              source={require("../assets/ellipse-43.png")}
            />
            <Text style={[styles.em3, styles.em3Typo]}>3</Text>
          </View>
          <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
            <Image
              style={[styles.ellipseIcon, styles.lyricChildLayout]}
              contentFit="cover"
              source={require("../assets/ellipse-43.png")}
            />
            <Text style={[styles.em3, styles.em3Typo]}>2</Text>
          </View>
          <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
            <Image
              style={[styles.ellipseIcon, styles.lyricChildLayout]}
              contentFit="cover"
              source={require("../assets/ellipse-43.png")}
            />
            <Text style={[styles.em3, styles.em3Typo]}>1</Text>
          </View>
        </View>
        <View style={styles.frameParent}>
          <View style={styles.countParentFlexBox}>
            <View style={styles.lyricSpaceBlock}>
              <Image
                style={styles.lyricChildLayout}
                contentFit="cover"
                source={require("../assets/ellipse-43.png")}
              />
              <Text style={[styles.em139, styles.emTypo]}>Hót</Text>
            </View>
            <View style={styles.lyricSpaceBlock}>
              <Image
                style={styles.lyricChildLayout}
                contentFit="cover"
                source={require("../assets/ellipse-43.png")}
              />
              <Text style={[styles.em139, styles.emTypo]}>đi</Text>
            </View>
            <View style={styles.lyricSpaceBlock}>
              <Image
                style={styles.lyricChildLayout}
                contentFit="cover"
                source={require("../assets/ellipse-44.png")}
              />
              <Text style={[styles.em139, styles.emTypo]}>{`chim `}</Text>
            </View>
            <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
              <Image
                style={styles.lyricChildLayout}
                contentFit="cover"
                source={require("../assets/ellipse-43.png")}
              />
              <Text style={[styles.em6, styles.em3Typo]}>,</Text>
            </View>
            <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
              <Image
                style={styles.lyricChildLayout}
                contentFit="cover"
                source={require("../assets/ellipse-43.png")}
              />
              <Text style={[styles.em6, styles.em3Typo]}>hót</Text>
            </View>
            <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
              <Image
                style={styles.lyricChildLayout}
                contentFit="cover"
                source={require("../assets/ellipse-43.png")}
              />
              <Text style={[styles.em6, styles.em3Typo]}>đi</Text>
            </View>
            <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
              <Image
                style={styles.lyricChildLayout}
                contentFit="cover"
                source={require("../assets/ellipse-43.png")}
              />
              <Text style={[styles.em6, styles.em3Typo]}>chim</Text>
            </View>
          </View>
          <View style={[styles.lyricWordParent40, styles.lyricFlexBox]}>
            <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
              <Image
                style={styles.lyricChildLayout}
                contentFit="cover"
                source={require("../assets/ellipse-43.png")}
              />
              <Text style={[styles.em6, styles.em3Typo]}>Hót</Text>
            </View>
            <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
              <Image
                style={styles.lyricChildLayout}
                contentFit="cover"
                source={require("../assets/ellipse-43.png")}
              />
              <Text style={[styles.em6, styles.em3Typo]}>cho</Text>
            </View>
            <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
              <Image
                style={styles.lyricChildLayout}
                contentFit="cover"
                source={require("../assets/ellipse-43.png")}
              />
              <Text style={[styles.em6, styles.em3Typo]}>{`mặt `}</Text>
            </View>
            <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
              <Image
                style={styles.lyricChildLayout}
                contentFit="cover"
                source={require("../assets/ellipse-43.png")}
              />
              <Text style={[styles.em6, styles.em3Typo]}>trời</Text>
            </View>
            <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
              <Image
                style={styles.lyricChildLayout}
                contentFit="cover"
                source={require("../assets/ellipse-43.png")}
              />
              <Text style={[styles.em6, styles.em3Typo]}>hồng</Text>
            </View>
            <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
              <Image
                style={styles.lyricChildLayout}
                contentFit="cover"
                source={require("../assets/ellipse-43.png")}
              />
              <Text style={[styles.em6, styles.em3Typo]}>{`quê `}</Text>
            </View>
            <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
              <Image
                style={styles.lyricChildLayout}
                contentFit="cover"
                source={require("../assets/ellipse-43.png")}
              />
              <Text style={[styles.em6, styles.em3Typo]}>ta</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={[styles.property131, styles.propertyPosition1]}>
        <View style={[styles.count7, styles.countParentFlexBox]}>
          <View style={[styles.lyricWord, styles.lyricSpaceBlock]}>
            <Image
              style={styles.lyricChildLayout}
              contentFit="cover"
              source={require("../assets/ellipse-42.png")}
            />
            <Text style={[styles.em, styles.emTypo]}>3</Text>
          </View>
          <View style={[styles.lyricWord, styles.lyricSpaceBlock]}>
            <Image
              style={styles.lyricChildLayout}
              contentFit="cover"
              source={require("../assets/ellipse-42.png")}
            />
            <Text style={[styles.em, styles.emTypo]}>3</Text>
          </View>
          <View style={[styles.lyricWord, styles.lyricSpaceBlock]}>
            <Image
              style={styles.lyricChildLayout}
              contentFit="cover"
              source={require("../assets/ellipse-42.png")}
            />
            <Text style={[styles.em, styles.emTypo]}>3</Text>
          </View>
          <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
            <Image
              style={[styles.ellipseIcon, styles.lyricChildLayout]}
              contentFit="cover"
              source={require("../assets/ellipse-43.png")}
            />
            <Text style={[styles.em3, styles.em3Typo]}>3</Text>
          </View>
          <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
            <Image
              style={[styles.ellipseIcon, styles.lyricChildLayout]}
              contentFit="cover"
              source={require("../assets/ellipse-43.png")}
            />
            <Text style={[styles.em3, styles.em3Typo]}>2</Text>
          </View>
          <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
            <Image
              style={[styles.ellipseIcon, styles.lyricChildLayout]}
              contentFit="cover"
              source={require("../assets/ellipse-43.png")}
            />
            <Text style={[styles.em3, styles.em3Typo]}>1</Text>
          </View>
        </View>
        <View style={styles.frameParent}>
          <View style={styles.countParentFlexBox}>
            <View style={styles.lyricSpaceBlock}>
              <Image
                style={styles.lyricChildLayout}
                contentFit="cover"
                source={require("../assets/ellipse-43.png")}
              />
              <Text style={[styles.em139, styles.emTypo]}>Hót</Text>
            </View>
            <View style={styles.lyricSpaceBlock}>
              <Image
                style={styles.lyricChildLayout}
                contentFit="cover"
                source={require("../assets/ellipse-43.png")}
              />
              <Text style={[styles.em139, styles.emTypo]}>đi</Text>
            </View>
            <View style={styles.lyricSpaceBlock}>
              <Image
                style={styles.lyricChildLayout}
                contentFit="cover"
                source={require("../assets/ellipse-43.png")}
              />
              <Text style={[styles.em139, styles.emTypo]}>{`chim `}</Text>
            </View>
            <View style={styles.lyricSpaceBlock}>
              <Image
                style={styles.lyricChildLayout}
                contentFit="cover"
                source={require("../assets/ellipse-43.png")}
              />
              <Text style={[styles.em139, styles.emTypo]}>,</Text>
            </View>
            <View style={styles.lyricSpaceBlock}>
              <Image
                style={styles.lyricChildLayout}
                contentFit="cover"
                source={require("../assets/ellipse-41.png")}
              />
              <Text style={[styles.em139, styles.emTypo]}>hót</Text>
            </View>
            <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
              <Image
                style={styles.lyricChildLayout}
                contentFit="cover"
                source={require("../assets/ellipse-43.png")}
              />
              <Text style={[styles.em6, styles.em3Typo]}>đi</Text>
            </View>
            <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
              <Image
                style={styles.lyricChildLayout}
                contentFit="cover"
                source={require("../assets/ellipse-43.png")}
              />
              <Text style={[styles.em6, styles.em3Typo]}>chim</Text>
            </View>
          </View>
          <View style={styles.lyricFlexBox}>
            <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
              <Image
                style={styles.lyricChildLayout}
                contentFit="cover"
                source={require("../assets/ellipse-43.png")}
              />
              <Text style={[styles.em6, styles.em3Typo]}>Hót</Text>
            </View>
            <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
              <Image
                style={styles.lyricChildLayout}
                contentFit="cover"
                source={require("../assets/ellipse-43.png")}
              />
              <Text style={[styles.em6, styles.em3Typo]}>cho</Text>
            </View>
            <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
              <Image
                style={styles.lyricChildLayout}
                contentFit="cover"
                source={require("../assets/ellipse-43.png")}
              />
              <Text style={[styles.em6, styles.em3Typo]}>{`mặt `}</Text>
            </View>
            <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
              <Image
                style={styles.lyricChildLayout}
                contentFit="cover"
                source={require("../assets/ellipse-43.png")}
              />
              <Text style={[styles.em6, styles.em3Typo]}>trời</Text>
            </View>
            <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
              <Image
                style={styles.lyricChildLayout}
                contentFit="cover"
                source={require("../assets/ellipse-43.png")}
              />
              <Text style={[styles.em6, styles.em3Typo]}>hồng</Text>
            </View>
            <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
              <Image
                style={styles.lyricChildLayout}
                contentFit="cover"
                source={require("../assets/ellipse-43.png")}
              />
              <Text style={[styles.em6, styles.em3Typo]}>{`quê `}</Text>
            </View>
            <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
              <Image
                style={styles.lyricChildLayout}
                contentFit="cover"
                source={require("../assets/ellipse-43.png")}
              />
              <Text style={[styles.em6, styles.em3Typo]}>ta</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={[styles.property132, styles.propertyPosition1]}>
        <View style={[styles.count7, styles.countParentFlexBox]}>
          <View style={[styles.lyricWord, styles.lyricSpaceBlock]}>
            <Image
              style={styles.lyricChildLayout}
              contentFit="cover"
              source={require("../assets/ellipse-42.png")}
            />
            <Text style={[styles.em, styles.emTypo]}>3</Text>
          </View>
          <View style={[styles.lyricWord, styles.lyricSpaceBlock]}>
            <Image
              style={styles.lyricChildLayout}
              contentFit="cover"
              source={require("../assets/ellipse-42.png")}
            />
            <Text style={[styles.em, styles.emTypo]}>3</Text>
          </View>
          <View style={[styles.lyricWord, styles.lyricSpaceBlock]}>
            <Image
              style={styles.lyricChildLayout}
              contentFit="cover"
              source={require("../assets/ellipse-42.png")}
            />
            <Text style={[styles.em, styles.emTypo]}>3</Text>
          </View>
          <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
            <Image
              style={[styles.ellipseIcon, styles.lyricChildLayout]}
              contentFit="cover"
              source={require("../assets/ellipse-43.png")}
            />
            <Text style={[styles.em3, styles.em3Typo]}>3</Text>
          </View>
          <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
            <Image
              style={[styles.ellipseIcon, styles.lyricChildLayout]}
              contentFit="cover"
              source={require("../assets/ellipse-43.png")}
            />
            <Text style={[styles.em3, styles.em3Typo]}>2</Text>
          </View>
          <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
            <Image
              style={[styles.ellipseIcon, styles.lyricChildLayout]}
              contentFit="cover"
              source={require("../assets/ellipse-43.png")}
            />
            <Text style={[styles.em3, styles.em3Typo]}>1</Text>
          </View>
        </View>
        <View style={styles.frameParent}>
          <View style={styles.countParentFlexBox}>
            <View style={styles.lyricSpaceBlock}>
              <Image
                style={styles.lyricChildLayout}
                contentFit="cover"
                source={require("../assets/ellipse-43.png")}
              />
              <Text style={[styles.em139, styles.emTypo]}>Hót</Text>
            </View>
            <View style={styles.lyricSpaceBlock}>
              <Image
                style={styles.lyricChildLayout}
                contentFit="cover"
                source={require("../assets/ellipse-43.png")}
              />
              <Text style={[styles.em139, styles.emTypo]}>đi</Text>
            </View>
            <View style={styles.lyricSpaceBlock}>
              <Image
                style={styles.lyricChildLayout}
                contentFit="cover"
                source={require("../assets/ellipse-43.png")}
              />
              <Text style={[styles.em139, styles.emTypo]}>{`chim `}</Text>
            </View>
            <View style={styles.lyricSpaceBlock}>
              <Image
                style={styles.lyricChildLayout}
                contentFit="cover"
                source={require("../assets/ellipse-43.png")}
              />
              <Text style={[styles.em139, styles.emTypo]}>,</Text>
            </View>
            <View style={styles.lyricSpaceBlock}>
              <Image
                style={styles.lyricChildLayout}
                contentFit="cover"
                source={require("../assets/ellipse-43.png")}
              />
              <Text style={[styles.em139, styles.emTypo]}>hót</Text>
            </View>
            <View style={styles.lyricSpaceBlock}>
              <Image
                style={styles.lyricChildLayout}
                contentFit="cover"
                source={require("../assets/ellipse-44.png")}
              />
              <Text style={[styles.em139, styles.emTypo]}>đi</Text>
            </View>
            <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
              <Image
                style={styles.lyricChildLayout}
                contentFit="cover"
                source={require("../assets/ellipse-43.png")}
              />
              <Text style={[styles.em6, styles.em3Typo]}>chim</Text>
            </View>
          </View>
          <View style={styles.lyricFlexBox}>
            <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
              <Image
                style={styles.lyricChildLayout}
                contentFit="cover"
                source={require("../assets/ellipse-43.png")}
              />
              <Text style={[styles.em6, styles.em3Typo]}>Hót</Text>
            </View>
            <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
              <Image
                style={styles.lyricChildLayout}
                contentFit="cover"
                source={require("../assets/ellipse-43.png")}
              />
              <Text style={[styles.em6, styles.em3Typo]}>cho</Text>
            </View>
            <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
              <Image
                style={styles.lyricChildLayout}
                contentFit="cover"
                source={require("../assets/ellipse-43.png")}
              />
              <Text style={[styles.em6, styles.em3Typo]}>{`mặt `}</Text>
            </View>
            <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
              <Image
                style={styles.lyricChildLayout}
                contentFit="cover"
                source={require("../assets/ellipse-43.png")}
              />
              <Text style={[styles.em6, styles.em3Typo]}>trời</Text>
            </View>
            <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
              <Image
                style={styles.lyricChildLayout}
                contentFit="cover"
                source={require("../assets/ellipse-43.png")}
              />
              <Text style={[styles.em6, styles.em3Typo]}>hồng</Text>
            </View>
            <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
              <Image
                style={styles.lyricChildLayout}
                contentFit="cover"
                source={require("../assets/ellipse-43.png")}
              />
              <Text style={[styles.em6, styles.em3Typo]}>{`quê `}</Text>
            </View>
            <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
              <Image
                style={styles.lyricChildLayout}
                contentFit="cover"
                source={require("../assets/ellipse-43.png")}
              />
              <Text style={[styles.em6, styles.em3Typo]}>ta</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={[styles.property133, styles.propertyPosition1]}>
        <View style={[styles.count7, styles.countParentFlexBox]}>
          <View style={[styles.lyricWord, styles.lyricSpaceBlock]}>
            <Image
              style={styles.lyricChildLayout}
              contentFit="cover"
              source={require("../assets/ellipse-42.png")}
            />
            <Text style={[styles.em, styles.emTypo]}>3</Text>
          </View>
          <View style={[styles.lyricWord, styles.lyricSpaceBlock]}>
            <Image
              style={styles.lyricChildLayout}
              contentFit="cover"
              source={require("../assets/ellipse-42.png")}
            />
            <Text style={[styles.em, styles.emTypo]}>3</Text>
          </View>
          <View style={[styles.lyricWord, styles.lyricSpaceBlock]}>
            <Image
              style={styles.lyricChildLayout}
              contentFit="cover"
              source={require("../assets/ellipse-42.png")}
            />
            <Text style={[styles.em, styles.emTypo]}>3</Text>
          </View>
          <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
            <Image
              style={[styles.ellipseIcon, styles.lyricChildLayout]}
              contentFit="cover"
              source={require("../assets/ellipse-43.png")}
            />
            <Text style={[styles.em3, styles.em3Typo]}>3</Text>
          </View>
          <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
            <Image
              style={[styles.ellipseIcon, styles.lyricChildLayout]}
              contentFit="cover"
              source={require("../assets/ellipse-43.png")}
            />
            <Text style={[styles.em3, styles.em3Typo]}>2</Text>
          </View>
          <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
            <Image
              style={[styles.ellipseIcon, styles.lyricChildLayout]}
              contentFit="cover"
              source={require("../assets/ellipse-43.png")}
            />
            <Text style={[styles.em3, styles.em3Typo]}>1</Text>
          </View>
        </View>
        <View style={styles.frameParent}>
          <View style={styles.countParentFlexBox}>
            <View style={styles.lyricSpaceBlock}>
              <Image
                style={styles.lyricChildLayout}
                contentFit="cover"
                source={require("../assets/ellipse-43.png")}
              />
              <Text style={[styles.em139, styles.emTypo]}>Hót</Text>
            </View>
            <View style={styles.lyricSpaceBlock}>
              <Image
                style={styles.lyricChildLayout}
                contentFit="cover"
                source={require("../assets/ellipse-43.png")}
              />
              <Text style={[styles.em139, styles.emTypo]}>đi</Text>
            </View>
            <View style={styles.lyricSpaceBlock}>
              <Image
                style={styles.lyricChildLayout}
                contentFit="cover"
                source={require("../assets/ellipse-43.png")}
              />
              <Text style={[styles.em139, styles.emTypo]}>{`chim `}</Text>
            </View>
            <View style={styles.lyricSpaceBlock}>
              <Image
                style={styles.lyricChildLayout}
                contentFit="cover"
                source={require("../assets/ellipse-43.png")}
              />
              <Text style={[styles.em139, styles.emTypo]}>,</Text>
            </View>
            <View style={styles.lyricSpaceBlock}>
              <Image
                style={styles.lyricChildLayout}
                contentFit="cover"
                source={require("../assets/ellipse-43.png")}
              />
              <Text style={[styles.em139, styles.emTypo]}>hót</Text>
            </View>
            <View style={styles.lyricSpaceBlock}>
              <Image
                style={styles.lyricChildLayout}
                contentFit="cover"
                source={require("../assets/ellipse-43.png")}
              />
              <Text style={[styles.em139, styles.emTypo]}>đi</Text>
            </View>
            <View style={styles.lyricSpaceBlock}>
              <Image
                style={styles.lyricChildLayout}
                contentFit="cover"
                source={require("../assets/ellipse-44.png")}
              />
              <Text style={[styles.em139, styles.emTypo]}>chim</Text>
            </View>
          </View>
          <View style={styles.lyricFlexBox}>
            <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
              <Image
                style={styles.lyricChildLayout}
                contentFit="cover"
                source={require("../assets/ellipse-43.png")}
              />
              <Text style={[styles.em6, styles.em3Typo]}>Hót</Text>
            </View>
            <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
              <Image
                style={styles.lyricChildLayout}
                contentFit="cover"
                source={require("../assets/ellipse-43.png")}
              />
              <Text style={[styles.em6, styles.em3Typo]}>cho</Text>
            </View>
            <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
              <Image
                style={styles.lyricChildLayout}
                contentFit="cover"
                source={require("../assets/ellipse-43.png")}
              />
              <Text style={[styles.em6, styles.em3Typo]}>{`mặt `}</Text>
            </View>
            <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
              <Image
                style={styles.lyricChildLayout}
                contentFit="cover"
                source={require("../assets/ellipse-43.png")}
              />
              <Text style={[styles.em6, styles.em3Typo]}>trời</Text>
            </View>
            <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
              <Image
                style={styles.lyricChildLayout}
                contentFit="cover"
                source={require("../assets/ellipse-43.png")}
              />
              <Text style={[styles.em6, styles.em3Typo]}>hồng</Text>
            </View>
            <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
              <Image
                style={styles.lyricChildLayout}
                contentFit="cover"
                source={require("../assets/ellipse-43.png")}
              />
              <Text style={[styles.em6, styles.em3Typo]}>{`quê `}</Text>
            </View>
            <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
              <Image
                style={styles.lyricChildLayout}
                contentFit="cover"
                source={require("../assets/ellipse-43.png")}
              />
              <Text style={[styles.em6, styles.em3Typo]}>ta</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={[styles.property134, styles.propertyPosition1]}>
        <View style={[styles.count7, styles.countParentFlexBox]}>
          <View style={[styles.lyricWord, styles.lyricSpaceBlock]}>
            <Image
              style={styles.lyricChildLayout}
              contentFit="cover"
              source={require("../assets/ellipse-42.png")}
            />
            <Text style={[styles.em, styles.emTypo]}>3</Text>
          </View>
          <View style={[styles.lyricWord, styles.lyricSpaceBlock]}>
            <Image
              style={styles.lyricChildLayout}
              contentFit="cover"
              source={require("../assets/ellipse-42.png")}
            />
            <Text style={[styles.em, styles.emTypo]}>3</Text>
          </View>
          <View style={[styles.lyricWord, styles.lyricSpaceBlock]}>
            <Image
              style={styles.lyricChildLayout}
              contentFit="cover"
              source={require("../assets/ellipse-42.png")}
            />
            <Text style={[styles.em, styles.emTypo]}>3</Text>
          </View>
          <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
            <Image
              style={[styles.ellipseIcon, styles.lyricChildLayout]}
              contentFit="cover"
              source={require("../assets/ellipse-43.png")}
            />
            <Text style={[styles.em3, styles.em3Typo]}>3</Text>
          </View>
          <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
            <Image
              style={[styles.ellipseIcon, styles.lyricChildLayout]}
              contentFit="cover"
              source={require("../assets/ellipse-43.png")}
            />
            <Text style={[styles.em3, styles.em3Typo]}>2</Text>
          </View>
          <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
            <Image
              style={[styles.ellipseIcon, styles.lyricChildLayout]}
              contentFit="cover"
              source={require("../assets/ellipse-43.png")}
            />
            <Text style={[styles.em3, styles.em3Typo]}>1</Text>
          </View>
        </View>
        <View style={styles.frameParent}>
          <View style={styles.countParentFlexBox}>
            <View style={styles.lyricSpaceBlock}>
              <Image
                style={styles.lyricChildLayout}
                contentFit="cover"
                source={require("../assets/ellipse-43.png")}
              />
              <Text style={[styles.em139, styles.emTypo]}>Hót</Text>
            </View>
            <View style={styles.lyricSpaceBlock}>
              <Image
                style={styles.lyricChildLayout}
                contentFit="cover"
                source={require("../assets/ellipse-43.png")}
              />
              <Text style={[styles.em139, styles.emTypo]}>đi</Text>
            </View>
            <View style={styles.lyricSpaceBlock}>
              <Image
                style={styles.lyricChildLayout}
                contentFit="cover"
                source={require("../assets/ellipse-43.png")}
              />
              <Text style={[styles.em139, styles.emTypo]}>{`chim `}</Text>
            </View>
            <View style={styles.lyricSpaceBlock}>
              <Image
                style={styles.lyricChildLayout}
                contentFit="cover"
                source={require("../assets/ellipse-43.png")}
              />
              <Text style={[styles.em139, styles.emTypo]}>,</Text>
            </View>
            <View style={styles.lyricSpaceBlock}>
              <Image
                style={styles.lyricChildLayout}
                contentFit="cover"
                source={require("../assets/ellipse-43.png")}
              />
              <Text style={[styles.em139, styles.emTypo]}>hót</Text>
            </View>
            <View style={styles.lyricSpaceBlock}>
              <Image
                style={styles.lyricChildLayout}
                contentFit="cover"
                source={require("../assets/ellipse-43.png")}
              />
              <Text style={[styles.em139, styles.emTypo]}>đi</Text>
            </View>
            <View style={styles.lyricSpaceBlock}>
              <Image
                style={styles.lyricChildLayout}
                contentFit="cover"
                source={require("../assets/ellipse-43.png")}
              />
              <Text style={[styles.em139, styles.emTypo]}>chim</Text>
            </View>
          </View>
          <View style={styles.lyricFlexBox}>
            <View style={styles.lyricSpaceBlock}>
              <Image
                style={styles.lyricChildLayout}
                contentFit="cover"
                source={require("../assets/ellipse-44.png")}
              />
              <Text style={[styles.em139, styles.emTypo]}>Hót</Text>
            </View>
            <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
              <Image
                style={styles.lyricChildLayout}
                contentFit="cover"
                source={require("../assets/ellipse-43.png")}
              />
              <Text style={[styles.em6, styles.em3Typo]}>cho</Text>
            </View>
            <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
              <Image
                style={styles.lyricChildLayout}
                contentFit="cover"
                source={require("../assets/ellipse-43.png")}
              />
              <Text style={[styles.em6, styles.em3Typo]}>{`mặt `}</Text>
            </View>
            <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
              <Image
                style={styles.lyricChildLayout}
                contentFit="cover"
                source={require("../assets/ellipse-43.png")}
              />
              <Text style={[styles.em6, styles.em3Typo]}>trời</Text>
            </View>
            <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
              <Image
                style={styles.lyricChildLayout}
                contentFit="cover"
                source={require("../assets/ellipse-43.png")}
              />
              <Text style={[styles.em6, styles.em3Typo]}>hồng</Text>
            </View>
            <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
              <Image
                style={styles.lyricChildLayout}
                contentFit="cover"
                source={require("../assets/ellipse-43.png")}
              />
              <Text style={[styles.em6, styles.em3Typo]}>{`quê `}</Text>
            </View>
            <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
              <Image
                style={styles.lyricChildLayout}
                contentFit="cover"
                source={require("../assets/ellipse-43.png")}
              />
              <Text style={[styles.em6, styles.em3Typo]}>ta</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={[styles.property135, styles.propertyPosition1]}>
        <View style={[styles.count7, styles.countParentFlexBox]}>
          <View style={[styles.lyricWord, styles.lyricSpaceBlock]}>
            <Image
              style={styles.lyricChildLayout}
              contentFit="cover"
              source={require("../assets/ellipse-42.png")}
            />
            <Text style={[styles.em, styles.emTypo]}>3</Text>
          </View>
          <View style={[styles.lyricWord, styles.lyricSpaceBlock]}>
            <Image
              style={styles.lyricChildLayout}
              contentFit="cover"
              source={require("../assets/ellipse-42.png")}
            />
            <Text style={[styles.em, styles.emTypo]}>3</Text>
          </View>
          <View style={[styles.lyricWord, styles.lyricSpaceBlock]}>
            <Image
              style={styles.lyricChildLayout}
              contentFit="cover"
              source={require("../assets/ellipse-42.png")}
            />
            <Text style={[styles.em, styles.emTypo]}>3</Text>
          </View>
          <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
            <Image
              style={[styles.ellipseIcon, styles.lyricChildLayout]}
              contentFit="cover"
              source={require("../assets/ellipse-43.png")}
            />
            <Text style={[styles.em3, styles.em3Typo]}>3</Text>
          </View>
          <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
            <Image
              style={[styles.ellipseIcon, styles.lyricChildLayout]}
              contentFit="cover"
              source={require("../assets/ellipse-43.png")}
            />
            <Text style={[styles.em3, styles.em3Typo]}>2</Text>
          </View>
          <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
            <Image
              style={[styles.ellipseIcon, styles.lyricChildLayout]}
              contentFit="cover"
              source={require("../assets/ellipse-43.png")}
            />
            <Text style={[styles.em3, styles.em3Typo]}>1</Text>
          </View>
        </View>
        <View style={[styles.lyricWordParent23, styles.countParentFlexBox]}>
          <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
            <Image
              style={styles.lyricChildLayout}
              contentFit="cover"
              source={require("../assets/ellipse-43.png")}
            />
            <Text style={[styles.em6, styles.em3Typo]}>Hót</Text>
          </View>
          <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
            <Image
              style={styles.lyricChildLayout}
              contentFit="cover"
              source={require("../assets/ellipse-43.png")}
            />
            <Text style={[styles.em6, styles.em3Typo]}>đi</Text>
          </View>
          <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
            <Image
              style={styles.lyricChildLayout}
              contentFit="cover"
              source={require("../assets/ellipse-43.png")}
            />
            <Text style={[styles.em6, styles.em3Typo]}>{`chim `}</Text>
          </View>
          <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
            <Image
              style={styles.lyricChildLayout}
              contentFit="cover"
              source={require("../assets/ellipse-43.png")}
            />
            <Text style={[styles.em6, styles.em3Typo]}>,</Text>
          </View>
          <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
            <Image
              style={styles.lyricChildLayout}
              contentFit="cover"
              source={require("../assets/ellipse-43.png")}
            />
            <Text style={[styles.em6, styles.em3Typo]}>hót</Text>
          </View>
          <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
            <Image
              style={styles.lyricChildLayout}
              contentFit="cover"
              source={require("../assets/ellipse-43.png")}
            />
            <Text style={[styles.em6, styles.em3Typo]}>đi</Text>
          </View>
          <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
            <Image
              style={styles.lyricChildLayout}
              contentFit="cover"
              source={require("../assets/ellipse-43.png")}
            />
            <Text style={[styles.em6, styles.em3Typo]}>chim</Text>
          </View>
        </View>
        <View style={styles.property19Inner}>
          <View style={styles.lyricParentFlexBox}>
            <View style={styles.lyricSpaceBlock}>
              <Image
                style={styles.lyricChildLayout}
                contentFit="cover"
                source={require("../assets/ellipse-43.png")}
              />
              <Text style={[styles.em139, styles.emTypo]}>Hót</Text>
            </View>
            <View style={styles.lyricSpaceBlock}>
              <Image
                style={styles.lyricChildLayout}
                contentFit="cover"
                source={require("../assets/ellipse-44.png")}
              />
              <Text style={[styles.em139, styles.emTypo]}>cho</Text>
            </View>
            <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
              <Image
                style={styles.lyricChildLayout}
                contentFit="cover"
                source={require("../assets/ellipse-43.png")}
              />
              <Text style={[styles.em6, styles.em3Typo]}>{`mặt `}</Text>
            </View>
            <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
              <Image
                style={styles.lyricChildLayout}
                contentFit="cover"
                source={require("../assets/ellipse-43.png")}
              />
              <Text style={[styles.em6, styles.em3Typo]}>trời</Text>
            </View>
            <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
              <Image
                style={styles.lyricChildLayout}
                contentFit="cover"
                source={require("../assets/ellipse-43.png")}
              />
              <Text style={[styles.em6, styles.em3Typo]}>hồng</Text>
            </View>
            <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
              <Image
                style={styles.lyricChildLayout}
                contentFit="cover"
                source={require("../assets/ellipse-43.png")}
              />
              <Text style={[styles.em6, styles.em3Typo]}>{`quê `}</Text>
            </View>
            <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
              <Image
                style={styles.lyricChildLayout}
                contentFit="cover"
                source={require("../assets/ellipse-43.png")}
              />
              <Text style={[styles.em6, styles.em3Typo]}>ta</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={[styles.property136, styles.propertyPosition1]}>
        <View style={[styles.count7, styles.countParentFlexBox]}>
          <View style={[styles.lyricWord, styles.lyricSpaceBlock]}>
            <Image
              style={styles.lyricChildLayout}
              contentFit="cover"
              source={require("../assets/ellipse-42.png")}
            />
            <Text style={[styles.em, styles.emTypo]}>3</Text>
          </View>
          <View style={[styles.lyricWord, styles.lyricSpaceBlock]}>
            <Image
              style={styles.lyricChildLayout}
              contentFit="cover"
              source={require("../assets/ellipse-42.png")}
            />
            <Text style={[styles.em, styles.emTypo]}>3</Text>
          </View>
          <View style={[styles.lyricWord, styles.lyricSpaceBlock]}>
            <Image
              style={styles.lyricChildLayout}
              contentFit="cover"
              source={require("../assets/ellipse-42.png")}
            />
            <Text style={[styles.em, styles.emTypo]}>3</Text>
          </View>
          <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
            <Image
              style={[styles.ellipseIcon, styles.lyricChildLayout]}
              contentFit="cover"
              source={require("../assets/ellipse-43.png")}
            />
            <Text style={[styles.em3, styles.em3Typo]}>3</Text>
          </View>
          <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
            <Image
              style={[styles.ellipseIcon, styles.lyricChildLayout]}
              contentFit="cover"
              source={require("../assets/ellipse-43.png")}
            />
            <Text style={[styles.em3, styles.em3Typo]}>2</Text>
          </View>
          <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
            <Image
              style={[styles.ellipseIcon, styles.lyricChildLayout]}
              contentFit="cover"
              source={require("../assets/ellipse-43.png")}
            />
            <Text style={[styles.em3, styles.em3Typo]}>1</Text>
          </View>
        </View>
        <View style={[styles.lyricWordParent23, styles.countParentFlexBox]}>
          <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
            <Image
              style={styles.lyricChildLayout}
              contentFit="cover"
              source={require("../assets/ellipse-43.png")}
            />
            <Text style={[styles.em6, styles.em3Typo]}>Hót</Text>
          </View>
          <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
            <Image
              style={styles.lyricChildLayout}
              contentFit="cover"
              source={require("../assets/ellipse-43.png")}
            />
            <Text style={[styles.em6, styles.em3Typo]}>đi</Text>
          </View>
          <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
            <Image
              style={styles.lyricChildLayout}
              contentFit="cover"
              source={require("../assets/ellipse-43.png")}
            />
            <Text style={[styles.em6, styles.em3Typo]}>{`chim `}</Text>
          </View>
          <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
            <Image
              style={styles.lyricChildLayout}
              contentFit="cover"
              source={require("../assets/ellipse-43.png")}
            />
            <Text style={[styles.em6, styles.em3Typo]}>,</Text>
          </View>
          <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
            <Image
              style={styles.lyricChildLayout}
              contentFit="cover"
              source={require("../assets/ellipse-43.png")}
            />
            <Text style={[styles.em6, styles.em3Typo]}>hót</Text>
          </View>
          <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
            <Image
              style={styles.lyricChildLayout}
              contentFit="cover"
              source={require("../assets/ellipse-43.png")}
            />
            <Text style={[styles.em6, styles.em3Typo]}>đi</Text>
          </View>
          <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
            <Image
              style={styles.lyricChildLayout}
              contentFit="cover"
              source={require("../assets/ellipse-43.png")}
            />
            <Text style={[styles.em6, styles.em3Typo]}>chim</Text>
          </View>
        </View>
        <View style={styles.property19Inner}>
          <View style={styles.lyricParentFlexBox}>
            <View style={styles.lyricSpaceBlock}>
              <Image
                style={styles.lyricChildLayout}
                contentFit="cover"
                source={require("../assets/ellipse-43.png")}
              />
              <Text style={[styles.em139, styles.emTypo]}>Hót</Text>
            </View>
            <View style={styles.lyricSpaceBlock}>
              <Image
                style={styles.lyricChildLayout}
                contentFit="cover"
                source={require("../assets/ellipse-43.png")}
              />
              <Text style={[styles.em139, styles.emTypo]}>cho</Text>
            </View>
            <View style={styles.lyricSpaceBlock}>
              <Image
                style={styles.lyricChildLayout}
                contentFit="cover"
                source={require("../assets/ellipse-44.png")}
              />
              <Text style={[styles.em139, styles.emTypo]}>{`mặt `}</Text>
            </View>
            <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
              <Image
                style={styles.lyricChildLayout}
                contentFit="cover"
                source={require("../assets/ellipse-43.png")}
              />
              <Text style={[styles.em6, styles.em3Typo]}>trời</Text>
            </View>
            <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
              <Image
                style={styles.lyricChildLayout}
                contentFit="cover"
                source={require("../assets/ellipse-43.png")}
              />
              <Text style={[styles.em6, styles.em3Typo]}>hồng</Text>
            </View>
            <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
              <Image
                style={styles.lyricChildLayout}
                contentFit="cover"
                source={require("../assets/ellipse-43.png")}
              />
              <Text style={[styles.em6, styles.em3Typo]}>{`quê `}</Text>
            </View>
            <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
              <Image
                style={styles.lyricChildLayout}
                contentFit="cover"
                source={require("../assets/ellipse-43.png")}
              />
              <Text style={[styles.em6, styles.em3Typo]}>ta</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={[styles.property137, styles.propertyPosition1]}>
        <View style={[styles.count7, styles.countParentFlexBox]}>
          <View style={[styles.lyricWord, styles.lyricSpaceBlock]}>
            <Image
              style={styles.lyricChildLayout}
              contentFit="cover"
              source={require("../assets/ellipse-42.png")}
            />
            <Text style={[styles.em, styles.emTypo]}>3</Text>
          </View>
          <View style={[styles.lyricWord, styles.lyricSpaceBlock]}>
            <Image
              style={styles.lyricChildLayout}
              contentFit="cover"
              source={require("../assets/ellipse-42.png")}
            />
            <Text style={[styles.em, styles.emTypo]}>3</Text>
          </View>
          <View style={[styles.lyricWord, styles.lyricSpaceBlock]}>
            <Image
              style={styles.lyricChildLayout}
              contentFit="cover"
              source={require("../assets/ellipse-42.png")}
            />
            <Text style={[styles.em, styles.emTypo]}>3</Text>
          </View>
          <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
            <Image
              style={[styles.ellipseIcon, styles.lyricChildLayout]}
              contentFit="cover"
              source={require("../assets/ellipse-43.png")}
            />
            <Text style={[styles.em3, styles.em3Typo]}>3</Text>
          </View>
          <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
            <Image
              style={[styles.ellipseIcon, styles.lyricChildLayout]}
              contentFit="cover"
              source={require("../assets/ellipse-43.png")}
            />
            <Text style={[styles.em3, styles.em3Typo]}>2</Text>
          </View>
          <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
            <Image
              style={[styles.ellipseIcon, styles.lyricChildLayout]}
              contentFit="cover"
              source={require("../assets/ellipse-43.png")}
            />
            <Text style={[styles.em3, styles.em3Typo]}>1</Text>
          </View>
        </View>
        <View style={[styles.lyricWordParent35, styles.countParentFlexBox]}>
          <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
            <Image
              style={styles.lyricChildLayout}
              contentFit="cover"
              source={require("../assets/ellipse-43.png")}
            />
            <Text style={[styles.em6, styles.em3Typo]}>Hót</Text>
          </View>
          <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
            <Image
              style={styles.lyricChildLayout}
              contentFit="cover"
              source={require("../assets/ellipse-43.png")}
            />
            <Text style={[styles.em6, styles.em3Typo]}>đi</Text>
          </View>
          <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
            <Image
              style={styles.lyricChildLayout}
              contentFit="cover"
              source={require("../assets/ellipse-43.png")}
            />
            <Text style={[styles.em6, styles.em3Typo]}>{`chim `}</Text>
          </View>
          <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
            <Image
              style={styles.lyricChildLayout}
              contentFit="cover"
              source={require("../assets/ellipse-43.png")}
            />
            <Text style={[styles.em6, styles.em3Typo]}>,</Text>
          </View>
          <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
            <Image
              style={styles.lyricChildLayout}
              contentFit="cover"
              source={require("../assets/ellipse-43.png")}
            />
            <Text style={[styles.em6, styles.em3Typo]}>hót</Text>
          </View>
          <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
            <Image
              style={styles.lyricChildLayout}
              contentFit="cover"
              source={require("../assets/ellipse-43.png")}
            />
            <Text style={[styles.em6, styles.em3Typo]}>đi</Text>
          </View>
          <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
            <Image
              style={styles.lyricChildLayout}
              contentFit="cover"
              source={require("../assets/ellipse-43.png")}
            />
            <Text style={[styles.em6, styles.em3Typo]}>chim</Text>
          </View>
        </View>
        <View style={styles.property19Inner}>
          <View style={styles.lyricParentFlexBox}>
            <View style={styles.lyricSpaceBlock}>
              <Image
                style={styles.lyricChildLayout}
                contentFit="cover"
                source={require("../assets/ellipse-43.png")}
              />
              <Text style={[styles.em139, styles.emTypo]}>Hót</Text>
            </View>
            <View style={styles.lyricSpaceBlock}>
              <Image
                style={styles.lyricChildLayout}
                contentFit="cover"
                source={require("../assets/ellipse-43.png")}
              />
              <Text style={[styles.em139, styles.emTypo]}>cho</Text>
            </View>
            <View style={styles.lyricSpaceBlock}>
              <Image
                style={styles.lyricChildLayout}
                contentFit="cover"
                source={require("../assets/ellipse-43.png")}
              />
              <Text style={[styles.em139, styles.emTypo]}>{`mặt `}</Text>
            </View>
            <View style={styles.lyricSpaceBlock}>
              <Image
                style={styles.lyricChildLayout}
                contentFit="cover"
                source={require("../assets/ellipse-41.png")}
              />
              <Text style={[styles.em139, styles.emTypo]}>trời</Text>
            </View>
            <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
              <Image
                style={styles.lyricChildLayout}
                contentFit="cover"
                source={require("../assets/ellipse-43.png")}
              />
              <Text style={[styles.em6, styles.em3Typo]}>hồng</Text>
            </View>
            <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
              <Image
                style={styles.lyricChildLayout}
                contentFit="cover"
                source={require("../assets/ellipse-43.png")}
              />
              <Text style={[styles.em6, styles.em3Typo]}>{`quê `}</Text>
            </View>
            <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
              <Image
                style={styles.lyricChildLayout}
                contentFit="cover"
                source={require("../assets/ellipse-43.png")}
              />
              <Text style={[styles.em6, styles.em3Typo]}>ta</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={[styles.property138, styles.propertyPosition1]}>
        <View style={[styles.count7, styles.countParentFlexBox]}>
          <View style={[styles.lyricWord, styles.lyricSpaceBlock]}>
            <Image
              style={styles.lyricChildLayout}
              contentFit="cover"
              source={require("../assets/ellipse-42.png")}
            />
            <Text style={[styles.em, styles.emTypo]}>3</Text>
          </View>
          <View style={[styles.lyricWord, styles.lyricSpaceBlock]}>
            <Image
              style={styles.lyricChildLayout}
              contentFit="cover"
              source={require("../assets/ellipse-42.png")}
            />
            <Text style={[styles.em, styles.emTypo]}>3</Text>
          </View>
          <View style={[styles.lyricWord, styles.lyricSpaceBlock]}>
            <Image
              style={styles.lyricChildLayout}
              contentFit="cover"
              source={require("../assets/ellipse-42.png")}
            />
            <Text style={[styles.em, styles.emTypo]}>3</Text>
          </View>
          <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
            <Image
              style={[styles.ellipseIcon, styles.lyricChildLayout]}
              contentFit="cover"
              source={require("../assets/ellipse-43.png")}
            />
            <Text style={[styles.em3, styles.em3Typo]}>3</Text>
          </View>
          <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
            <Image
              style={[styles.ellipseIcon, styles.lyricChildLayout]}
              contentFit="cover"
              source={require("../assets/ellipse-43.png")}
            />
            <Text style={[styles.em3, styles.em3Typo]}>2</Text>
          </View>
          <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
            <Image
              style={[styles.ellipseIcon, styles.lyricChildLayout]}
              contentFit="cover"
              source={require("../assets/ellipse-43.png")}
            />
            <Text style={[styles.em3, styles.em3Typo]}>1</Text>
          </View>
        </View>
        <View style={[styles.lyricWordParent35, styles.countParentFlexBox]}>
          <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
            <Image
              style={styles.lyricChildLayout}
              contentFit="cover"
              source={require("../assets/ellipse-43.png")}
            />
            <Text style={[styles.em6, styles.em3Typo]}>Hót</Text>
          </View>
          <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
            <Image
              style={styles.lyricChildLayout}
              contentFit="cover"
              source={require("../assets/ellipse-43.png")}
            />
            <Text style={[styles.em6, styles.em3Typo]}>đi</Text>
          </View>
          <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
            <Image
              style={styles.lyricChildLayout}
              contentFit="cover"
              source={require("../assets/ellipse-43.png")}
            />
            <Text style={[styles.em6, styles.em3Typo]}>{`chim `}</Text>
          </View>
          <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
            <Image
              style={styles.lyricChildLayout}
              contentFit="cover"
              source={require("../assets/ellipse-43.png")}
            />
            <Text style={[styles.em6, styles.em3Typo]}>,</Text>
          </View>
          <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
            <Image
              style={styles.lyricChildLayout}
              contentFit="cover"
              source={require("../assets/ellipse-43.png")}
            />
            <Text style={[styles.em6, styles.em3Typo]}>hót</Text>
          </View>
          <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
            <Image
              style={styles.lyricChildLayout}
              contentFit="cover"
              source={require("../assets/ellipse-43.png")}
            />
            <Text style={[styles.em6, styles.em3Typo]}>đi</Text>
          </View>
          <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
            <Image
              style={styles.lyricChildLayout}
              contentFit="cover"
              source={require("../assets/ellipse-43.png")}
            />
            <Text style={[styles.em6, styles.em3Typo]}>chim</Text>
          </View>
        </View>
        <View style={styles.property19Inner}>
          <View style={styles.lyricParentFlexBox}>
            <View style={styles.lyricSpaceBlock}>
              <Image
                style={styles.lyricChildLayout}
                contentFit="cover"
                source={require("../assets/ellipse-43.png")}
              />
              <Text style={[styles.em139, styles.emTypo]}>Hót</Text>
            </View>
            <View style={styles.lyricSpaceBlock}>
              <Image
                style={styles.lyricChildLayout}
                contentFit="cover"
                source={require("../assets/ellipse-43.png")}
              />
              <Text style={[styles.em139, styles.emTypo]}>cho</Text>
            </View>
            <View style={styles.lyricSpaceBlock}>
              <Image
                style={styles.lyricChildLayout}
                contentFit="cover"
                source={require("../assets/ellipse-43.png")}
              />
              <Text style={[styles.em139, styles.emTypo]}>{`mặt `}</Text>
            </View>
            <View style={styles.lyricSpaceBlock}>
              <Image
                style={styles.lyricChildLayout}
                contentFit="cover"
                source={require("../assets/ellipse-43.png")}
              />
              <Text style={[styles.em139, styles.emTypo]}>trời</Text>
            </View>
            <View style={styles.lyricSpaceBlock}>
              <Image
                style={styles.lyricChildLayout}
                contentFit="cover"
                source={require("../assets/ellipse-41.png")}
              />
              <Text style={[styles.em139, styles.emTypo]}>hồng</Text>
            </View>
            <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
              <Image
                style={styles.lyricChildLayout}
                contentFit="cover"
                source={require("../assets/ellipse-43.png")}
              />
              <Text style={[styles.em6, styles.em3Typo]}>{`quê `}</Text>
            </View>
            <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
              <Image
                style={styles.lyricChildLayout}
                contentFit="cover"
                source={require("../assets/ellipse-43.png")}
              />
              <Text style={[styles.em6, styles.em3Typo]}>ta</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={[styles.property139, styles.propertyPosition1]}>
        <View style={[styles.count7, styles.countParentFlexBox]}>
          <View style={[styles.lyricWord, styles.lyricSpaceBlock]}>
            <Image
              style={styles.lyricChildLayout}
              contentFit="cover"
              source={require("../assets/ellipse-42.png")}
            />
            <Text style={[styles.em, styles.emTypo]}>3</Text>
          </View>
          <View style={[styles.lyricWord, styles.lyricSpaceBlock]}>
            <Image
              style={styles.lyricChildLayout}
              contentFit="cover"
              source={require("../assets/ellipse-42.png")}
            />
            <Text style={[styles.em, styles.emTypo]}>3</Text>
          </View>
          <View style={[styles.lyricWord, styles.lyricSpaceBlock]}>
            <Image
              style={styles.lyricChildLayout}
              contentFit="cover"
              source={require("../assets/ellipse-42.png")}
            />
            <Text style={[styles.em, styles.emTypo]}>3</Text>
          </View>
          <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
            <Image
              style={[styles.ellipseIcon, styles.lyricChildLayout]}
              contentFit="cover"
              source={require("../assets/ellipse-43.png")}
            />
            <Text style={[styles.em3, styles.em3Typo]}>3</Text>
          </View>
          <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
            <Image
              style={[styles.ellipseIcon, styles.lyricChildLayout]}
              contentFit="cover"
              source={require("../assets/ellipse-43.png")}
            />
            <Text style={[styles.em3, styles.em3Typo]}>2</Text>
          </View>
          <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
            <Image
              style={[styles.ellipseIcon, styles.lyricChildLayout]}
              contentFit="cover"
              source={require("../assets/ellipse-43.png")}
            />
            <Text style={[styles.em3, styles.em3Typo]}>1</Text>
          </View>
        </View>
        <View style={[styles.lyricWordParent35, styles.countParentFlexBox]}>
          <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
            <Image
              style={styles.lyricChildLayout}
              contentFit="cover"
              source={require("../assets/ellipse-43.png")}
            />
            <Text style={[styles.em6, styles.em3Typo]}>Hót</Text>
          </View>
          <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
            <Image
              style={styles.lyricChildLayout}
              contentFit="cover"
              source={require("../assets/ellipse-43.png")}
            />
            <Text style={[styles.em6, styles.em3Typo]}>đi</Text>
          </View>
          <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
            <Image
              style={styles.lyricChildLayout}
              contentFit="cover"
              source={require("../assets/ellipse-43.png")}
            />
            <Text style={[styles.em6, styles.em3Typo]}>{`chim `}</Text>
          </View>
          <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
            <Image
              style={styles.lyricChildLayout}
              contentFit="cover"
              source={require("../assets/ellipse-43.png")}
            />
            <Text style={[styles.em6, styles.em3Typo]}>,</Text>
          </View>
          <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
            <Image
              style={styles.lyricChildLayout}
              contentFit="cover"
              source={require("../assets/ellipse-43.png")}
            />
            <Text style={[styles.em6, styles.em3Typo]}>hót</Text>
          </View>
          <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
            <Image
              style={styles.lyricChildLayout}
              contentFit="cover"
              source={require("../assets/ellipse-43.png")}
            />
            <Text style={[styles.em6, styles.em3Typo]}>đi</Text>
          </View>
          <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
            <Image
              style={styles.lyricChildLayout}
              contentFit="cover"
              source={require("../assets/ellipse-43.png")}
            />
            <Text style={[styles.em6, styles.em3Typo]}>chim</Text>
          </View>
        </View>
        <View style={styles.property19Inner}>
          <View style={styles.lyricParentFlexBox}>
            <View style={styles.lyricSpaceBlock}>
              <Image
                style={styles.lyricChildLayout}
                contentFit="cover"
                source={require("../assets/ellipse-43.png")}
              />
              <Text style={[styles.em139, styles.emTypo]}>Hót</Text>
            </View>
            <View style={styles.lyricSpaceBlock}>
              <Image
                style={styles.lyricChildLayout}
                contentFit="cover"
                source={require("../assets/ellipse-43.png")}
              />
              <Text style={[styles.em139, styles.emTypo]}>cho</Text>
            </View>
            <View style={styles.lyricSpaceBlock}>
              <Image
                style={styles.lyricChildLayout}
                contentFit="cover"
                source={require("../assets/ellipse-43.png")}
              />
              <Text style={[styles.em139, styles.emTypo]}>{`mặt `}</Text>
            </View>
            <View style={styles.lyricSpaceBlock}>
              <Image
                style={styles.lyricChildLayout}
                contentFit="cover"
                source={require("../assets/ellipse-43.png")}
              />
              <Text style={[styles.em139, styles.emTypo]}>trời</Text>
            </View>
            <View style={styles.lyricSpaceBlock}>
              <Image
                style={styles.lyricChildLayout}
                contentFit="cover"
                source={require("../assets/ellipse-43.png")}
              />
              <Text style={[styles.em139, styles.emTypo]}>hồng</Text>
            </View>
            <View style={styles.lyricSpaceBlock}>
              <Image
                style={styles.lyricChildLayout}
                contentFit="cover"
                source={require("../assets/ellipse-41.png")}
              />
              <Text style={[styles.em139, styles.emTypo]}>{`quê `}</Text>
            </View>
            <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
              <Image
                style={styles.lyricChildLayout}
                contentFit="cover"
                source={require("../assets/ellipse-43.png")}
              />
              <Text style={[styles.em6, styles.em3Typo]}>ta</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={[styles.property140, styles.propertyPosition1]}>
        <View style={[styles.count7, styles.countParentFlexBox]}>
          <View style={[styles.lyricWord, styles.lyricSpaceBlock]}>
            <Image
              style={styles.lyricChildLayout}
              contentFit="cover"
              source={require("../assets/ellipse-42.png")}
            />
            <Text style={[styles.em, styles.emTypo]}>3</Text>
          </View>
          <View style={[styles.lyricWord, styles.lyricSpaceBlock]}>
            <Image
              style={styles.lyricChildLayout}
              contentFit="cover"
              source={require("../assets/ellipse-42.png")}
            />
            <Text style={[styles.em, styles.emTypo]}>3</Text>
          </View>
          <View style={[styles.lyricWord, styles.lyricSpaceBlock]}>
            <Image
              style={styles.lyricChildLayout}
              contentFit="cover"
              source={require("../assets/ellipse-42.png")}
            />
            <Text style={[styles.em, styles.emTypo]}>3</Text>
          </View>
          <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
            <Image
              style={[styles.ellipseIcon, styles.lyricChildLayout]}
              contentFit="cover"
              source={require("../assets/ellipse-43.png")}
            />
            <Text style={[styles.em3, styles.em3Typo]}>3</Text>
          </View>
          <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
            <Image
              style={[styles.ellipseIcon, styles.lyricChildLayout]}
              contentFit="cover"
              source={require("../assets/ellipse-43.png")}
            />
            <Text style={[styles.em3, styles.em3Typo]}>2</Text>
          </View>
          <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
            <Image
              style={[styles.ellipseIcon, styles.lyricChildLayout]}
              contentFit="cover"
              source={require("../assets/ellipse-43.png")}
            />
            <Text style={[styles.em3, styles.em3Typo]}>1</Text>
          </View>
        </View>
        <View style={[styles.lyricWordParent35, styles.countParentFlexBox]}>
          <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
            <Image
              style={styles.lyricChildLayout}
              contentFit="cover"
              source={require("../assets/ellipse-43.png")}
            />
            <Text style={[styles.em6, styles.em3Typo]}>Hót</Text>
          </View>
          <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
            <Image
              style={styles.lyricChildLayout}
              contentFit="cover"
              source={require("../assets/ellipse-43.png")}
            />
            <Text style={[styles.em6, styles.em3Typo]}>đi</Text>
          </View>
          <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
            <Image
              style={styles.lyricChildLayout}
              contentFit="cover"
              source={require("../assets/ellipse-43.png")}
            />
            <Text style={[styles.em6, styles.em3Typo]}>{`chim `}</Text>
          </View>
          <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
            <Image
              style={styles.lyricChildLayout}
              contentFit="cover"
              source={require("../assets/ellipse-43.png")}
            />
            <Text style={[styles.em6, styles.em3Typo]}>,</Text>
          </View>
          <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
            <Image
              style={styles.lyricChildLayout}
              contentFit="cover"
              source={require("../assets/ellipse-43.png")}
            />
            <Text style={[styles.em6, styles.em3Typo]}>hót</Text>
          </View>
          <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
            <Image
              style={styles.lyricChildLayout}
              contentFit="cover"
              source={require("../assets/ellipse-43.png")}
            />
            <Text style={[styles.em6, styles.em3Typo]}>đi</Text>
          </View>
          <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
            <Image
              style={styles.lyricChildLayout}
              contentFit="cover"
              source={require("../assets/ellipse-43.png")}
            />
            <Text style={[styles.em6, styles.em3Typo]}>chim</Text>
          </View>
        </View>
        <View style={styles.property19Inner}>
          <View style={styles.lyricParentFlexBox}>
            <View style={styles.lyricSpaceBlock}>
              <Image
                style={styles.lyricChildLayout}
                contentFit="cover"
                source={require("../assets/ellipse-43.png")}
              />
              <Text style={[styles.em139, styles.emTypo]}>Hót</Text>
            </View>
            <View style={styles.lyricSpaceBlock}>
              <Image
                style={styles.lyricChildLayout}
                contentFit="cover"
                source={require("../assets/ellipse-43.png")}
              />
              <Text style={[styles.em139, styles.emTypo]}>cho</Text>
            </View>
            <View style={styles.lyricSpaceBlock}>
              <Image
                style={styles.lyricChildLayout}
                contentFit="cover"
                source={require("../assets/ellipse-43.png")}
              />
              <Text style={[styles.em139, styles.emTypo]}>{`mặt `}</Text>
            </View>
            <View style={styles.lyricSpaceBlock}>
              <Image
                style={styles.lyricChildLayout}
                contentFit="cover"
                source={require("../assets/ellipse-43.png")}
              />
              <Text style={[styles.em139, styles.emTypo]}>trời</Text>
            </View>
            <View style={styles.lyricSpaceBlock}>
              <Image
                style={styles.lyricChildLayout}
                contentFit="cover"
                source={require("../assets/ellipse-43.png")}
              />
              <Text style={[styles.em139, styles.emTypo]}>hồng</Text>
            </View>
            <View style={styles.lyricSpaceBlock}>
              <Image
                style={styles.lyricChildLayout}
                contentFit="cover"
                source={require("../assets/ellipse-43.png")}
              />
              <Text style={[styles.em139, styles.emTypo]}>{`quê `}</Text>
            </View>
            <View style={styles.lyricSpaceBlock}>
              <Image
                style={styles.lyricChildLayout}
                contentFit="cover"
                source={require("../assets/ellipse-41.png")}
              />
              <Text style={[styles.em139, styles.emTypo]}>ta</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={[styles.property141, styles.propertyPosition1]}>
        <View style={[styles.count7, styles.countParentFlexBox]}>
          <View style={[styles.lyricWord, styles.lyricSpaceBlock]}>
            <Image
              style={styles.lyricChildLayout}
              contentFit="cover"
              source={require("../assets/ellipse-42.png")}
            />
            <Text style={[styles.em, styles.emTypo]}>3</Text>
          </View>
          <View style={[styles.lyricWord, styles.lyricSpaceBlock]}>
            <Image
              style={styles.lyricChildLayout}
              contentFit="cover"
              source={require("../assets/ellipse-42.png")}
            />
            <Text style={[styles.em, styles.emTypo]}>3</Text>
          </View>
          <View style={[styles.lyricWord, styles.lyricSpaceBlock]}>
            <Image
              style={styles.lyricChildLayout}
              contentFit="cover"
              source={require("../assets/ellipse-42.png")}
            />
            <Text style={[styles.em, styles.emTypo]}>3</Text>
          </View>
          <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
            <Image
              style={[styles.ellipseIcon, styles.lyricChildLayout]}
              contentFit="cover"
              source={require("../assets/ellipse-43.png")}
            />
            <Text style={[styles.em3, styles.em3Typo]}>3</Text>
          </View>
          <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
            <Image
              style={[styles.ellipseIcon, styles.lyricChildLayout]}
              contentFit="cover"
              source={require("../assets/ellipse-43.png")}
            />
            <Text style={[styles.em3, styles.em3Typo]}>2</Text>
          </View>
          <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
            <Image
              style={[styles.ellipseIcon, styles.lyricChildLayout]}
              contentFit="cover"
              source={require("../assets/ellipse-43.png")}
            />
            <Text style={[styles.em3, styles.em3Typo]}>1</Text>
          </View>
        </View>
        <View style={[styles.lyricWordParent35, styles.countParentFlexBox]}>
          <View style={styles.lyricSpaceBlock}>
            <Image
              style={styles.lyricChildLayout}
              contentFit="cover"
              source={require("../assets/ellipse-44.png")}
            />
            <Text style={[styles.em139, styles.emTypo]}>Hót</Text>
          </View>
          <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
            <Image
              style={styles.lyricChildLayout}
              contentFit="cover"
              source={require("../assets/ellipse-43.png")}
            />
            <Text style={[styles.em6, styles.em3Typo]}>đi</Text>
          </View>
          <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
            <Image
              style={styles.lyricChildLayout}
              contentFit="cover"
              source={require("../assets/ellipse-43.png")}
            />
            <Text style={[styles.em6, styles.em3Typo]}>{`chim `}</Text>
          </View>
          <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
            <Image
              style={styles.lyricChildLayout}
              contentFit="cover"
              source={require("../assets/ellipse-43.png")}
            />
            <Text style={[styles.em6, styles.em3Typo]}>,</Text>
          </View>
          <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
            <Image
              style={styles.lyricChildLayout}
              contentFit="cover"
              source={require("../assets/ellipse-43.png")}
            />
            <Text style={[styles.em6, styles.em3Typo]}>hót</Text>
          </View>
          <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
            <Image
              style={styles.lyricChildLayout}
              contentFit="cover"
              source={require("../assets/ellipse-43.png")}
            />
            <Text style={[styles.em6, styles.em3Typo]}>đi</Text>
          </View>
          <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
            <Image
              style={styles.lyricChildLayout}
              contentFit="cover"
              source={require("../assets/ellipse-43.png")}
            />
            <Text style={[styles.em6, styles.em3Typo]}>chim</Text>
          </View>
        </View>
        <View style={styles.property19Inner}>
          <View style={styles.lyricParentFlexBox}>
            <View style={styles.lyricSpaceBlock}>
              <Image
                style={styles.lyricChildLayout}
                contentFit="cover"
                source={require("../assets/ellipse-43.png")}
              />
              <Text style={[styles.em139, styles.emTypo]}>Hót</Text>
            </View>
            <View style={styles.lyricSpaceBlock}>
              <Image
                style={styles.lyricChildLayout}
                contentFit="cover"
                source={require("../assets/ellipse-43.png")}
              />
              <Text style={[styles.em139, styles.emTypo]}>cho</Text>
            </View>
            <View style={styles.lyricSpaceBlock}>
              <Image
                style={styles.lyricChildLayout}
                contentFit="cover"
                source={require("../assets/ellipse-43.png")}
              />
              <Text style={[styles.em139, styles.emTypo]}>{`mặt `}</Text>
            </View>
            <View style={styles.lyricSpaceBlock}>
              <Image
                style={styles.lyricChildLayout}
                contentFit="cover"
                source={require("../assets/ellipse-43.png")}
              />
              <Text style={[styles.em139, styles.emTypo]}>trời</Text>
            </View>
            <View style={styles.lyricSpaceBlock}>
              <Image
                style={styles.lyricChildLayout}
                contentFit="cover"
                source={require("../assets/ellipse-43.png")}
              />
              <Text style={[styles.em139, styles.emTypo]}>hồng</Text>
            </View>
            <View style={styles.lyricSpaceBlock}>
              <Image
                style={styles.lyricChildLayout}
                contentFit="cover"
                source={require("../assets/ellipse-43.png")}
              />
              <Text style={[styles.em139, styles.emTypo]}>{`quê `}</Text>
            </View>
            <View style={styles.lyricSpaceBlock}>
              <Image
                style={styles.lyricChildLayout}
                contentFit="cover"
                source={require("../assets/ellipse-43.png")}
              />
              <Text style={[styles.em139, styles.emTypo]}>ta</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={[styles.property142, styles.propertyPosition1]}>
        <View style={[styles.count7, styles.countParentFlexBox]}>
          <View style={[styles.lyricWord, styles.lyricSpaceBlock]}>
            <Image
              style={styles.lyricChildLayout}
              contentFit="cover"
              source={require("../assets/ellipse-42.png")}
            />
            <Text style={[styles.em, styles.emTypo]}>3</Text>
          </View>
          <View style={[styles.lyricWord, styles.lyricSpaceBlock]}>
            <Image
              style={styles.lyricChildLayout}
              contentFit="cover"
              source={require("../assets/ellipse-42.png")}
            />
            <Text style={[styles.em, styles.emTypo]}>3</Text>
          </View>
          <View style={[styles.lyricWord, styles.lyricSpaceBlock]}>
            <Image
              style={styles.lyricChildLayout}
              contentFit="cover"
              source={require("../assets/ellipse-42.png")}
            />
            <Text style={[styles.em, styles.emTypo]}>3</Text>
          </View>
          <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
            <Image
              style={[styles.ellipseIcon, styles.lyricChildLayout]}
              contentFit="cover"
              source={require("../assets/ellipse-43.png")}
            />
            <Text style={[styles.em3, styles.em3Typo]}>3</Text>
          </View>
          <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
            <Image
              style={[styles.ellipseIcon, styles.lyricChildLayout]}
              contentFit="cover"
              source={require("../assets/ellipse-43.png")}
            />
            <Text style={[styles.em3, styles.em3Typo]}>2</Text>
          </View>
          <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
            <Image
              style={[styles.ellipseIcon, styles.lyricChildLayout]}
              contentFit="cover"
              source={require("../assets/ellipse-43.png")}
            />
            <Text style={[styles.em3, styles.em3Typo]}>1</Text>
          </View>
        </View>
        <View style={[styles.lyricWordParent35, styles.countParentFlexBox]}>
          <View style={styles.lyricSpaceBlock}>
            <Image
              style={styles.lyricChildLayout}
              contentFit="cover"
              source={require("../assets/ellipse-43.png")}
            />
            <Text style={[styles.em139, styles.emTypo]}>Hót</Text>
          </View>
          <View style={styles.lyricSpaceBlock}>
            <Image
              style={styles.lyricChildLayout}
              contentFit="cover"
              source={require("../assets/ellipse-44.png")}
            />
            <Text style={[styles.em139, styles.emTypo]}>đi</Text>
          </View>
          <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
            <Image
              style={styles.lyricChildLayout}
              contentFit="cover"
              source={require("../assets/ellipse-43.png")}
            />
            <Text style={[styles.em6, styles.em3Typo]}>{`chim `}</Text>
          </View>
          <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
            <Image
              style={styles.lyricChildLayout}
              contentFit="cover"
              source={require("../assets/ellipse-43.png")}
            />
            <Text style={[styles.em6, styles.em3Typo]}>,</Text>
          </View>
          <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
            <Image
              style={styles.lyricChildLayout}
              contentFit="cover"
              source={require("../assets/ellipse-43.png")}
            />
            <Text style={[styles.em6, styles.em3Typo]}>hót</Text>
          </View>
          <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
            <Image
              style={styles.lyricChildLayout}
              contentFit="cover"
              source={require("../assets/ellipse-43.png")}
            />
            <Text style={[styles.em6, styles.em3Typo]}>đi</Text>
          </View>
          <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
            <Image
              style={styles.lyricChildLayout}
              contentFit="cover"
              source={require("../assets/ellipse-43.png")}
            />
            <Text style={[styles.em6, styles.em3Typo]}>chim</Text>
          </View>
        </View>
        <View style={[styles.lyricWordParent90, styles.lyricParentFlexBox]}>
          <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
            <Image
              style={styles.lyricChildLayout}
              contentFit="cover"
              source={require("../assets/ellipse-43.png")}
            />
            <Text style={[styles.em6, styles.em3Typo]}>Hót</Text>
          </View>
          <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
            <Image
              style={styles.lyricChildLayout}
              contentFit="cover"
              source={require("../assets/ellipse-43.png")}
            />
            <Text style={[styles.em6, styles.em3Typo]}>cho</Text>
          </View>
          <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
            <Image
              style={styles.lyricChildLayout}
              contentFit="cover"
              source={require("../assets/ellipse-43.png")}
            />
            <Text style={[styles.em6, styles.em3Typo]}>đời</Text>
          </View>
          <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
            <Image
              style={styles.lyricChildLayout}
              contentFit="cover"
              source={require("../assets/ellipse-43.png")}
            />
            <Text style={[styles.em6, styles.em3Typo]}>nhọc</Text>
          </View>
          <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
            <Image
              style={styles.lyricChildLayout}
              contentFit="cover"
              source={require("../assets/ellipse-43.png")}
            />
            <Text style={[styles.em6, styles.em3Typo]}>nhằn</Text>
          </View>
          <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
            <Image
              style={styles.lyricChildLayout}
              contentFit="cover"
              source={require("../assets/ellipse-43.png")}
            />
            <Text style={[styles.em6, styles.em3Typo]}>{`trôi `}</Text>
          </View>
          <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
            <Image
              style={styles.lyricChildLayout}
              contentFit="cover"
              source={require("../assets/ellipse-43.png")}
            />
            <Text style={[styles.em6, styles.em3Typo]}>xa</Text>
          </View>
        </View>
      </View>
      <View style={[styles.property143, styles.propertyPosition]}>
        <View style={[styles.count7, styles.countParentFlexBox]}>
          <View style={[styles.lyricWord, styles.lyricSpaceBlock]}>
            <Image
              style={styles.lyricChildLayout}
              contentFit="cover"
              source={require("../assets/ellipse-42.png")}
            />
            <Text style={[styles.em, styles.emTypo]}>3</Text>
          </View>
          <View style={[styles.lyricWord, styles.lyricSpaceBlock]}>
            <Image
              style={styles.lyricChildLayout}
              contentFit="cover"
              source={require("../assets/ellipse-42.png")}
            />
            <Text style={[styles.em, styles.emTypo]}>3</Text>
          </View>
          <View style={[styles.lyricWord, styles.lyricSpaceBlock]}>
            <Image
              style={styles.lyricChildLayout}
              contentFit="cover"
              source={require("../assets/ellipse-42.png")}
            />
            <Text style={[styles.em, styles.emTypo]}>3</Text>
          </View>
          <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
            <Image
              style={[styles.ellipseIcon, styles.lyricChildLayout]}
              contentFit="cover"
              source={require("../assets/ellipse-43.png")}
            />
            <Text style={[styles.em3, styles.em3Typo]}>3</Text>
          </View>
          <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
            <Image
              style={[styles.ellipseIcon, styles.lyricChildLayout]}
              contentFit="cover"
              source={require("../assets/ellipse-43.png")}
            />
            <Text style={[styles.em3, styles.em3Typo]}>2</Text>
          </View>
          <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
            <Image
              style={[styles.ellipseIcon, styles.lyricChildLayout]}
              contentFit="cover"
              source={require("../assets/ellipse-43.png")}
            />
            <Text style={[styles.em3, styles.em3Typo]}>1</Text>
          </View>
        </View>
        <View style={[styles.lyricWordParent35, styles.countParentFlexBox]}>
          <View style={styles.lyricSpaceBlock}>
            <Image
              style={styles.lyricChildLayout}
              contentFit="cover"
              source={require("../assets/ellipse-43.png")}
            />
            <Text style={[styles.em139, styles.emTypo]}>Hót</Text>
          </View>
          <View style={styles.lyricSpaceBlock}>
            <Image
              style={styles.lyricChildLayout}
              contentFit="cover"
              source={require("../assets/ellipse-43.png")}
            />
            <Text style={[styles.em139, styles.emTypo]}>đi</Text>
          </View>
          <View style={styles.lyricSpaceBlock}>
            <Image
              style={styles.lyricChildLayout}
              contentFit="cover"
              source={require("../assets/ellipse-44.png")}
            />
            <Text style={[styles.em139, styles.emTypo]}>{`chim `}</Text>
          </View>
          <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
            <Image
              style={styles.lyricChildLayout}
              contentFit="cover"
              source={require("../assets/ellipse-43.png")}
            />
            <Text style={[styles.em6, styles.em3Typo]}>,</Text>
          </View>
          <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
            <Image
              style={styles.lyricChildLayout}
              contentFit="cover"
              source={require("../assets/ellipse-43.png")}
            />
            <Text style={[styles.em6, styles.em3Typo]}>hót</Text>
          </View>
          <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
            <Image
              style={styles.lyricChildLayout}
              contentFit="cover"
              source={require("../assets/ellipse-43.png")}
            />
            <Text style={[styles.em6, styles.em3Typo]}>đi</Text>
          </View>
          <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
            <Image
              style={styles.lyricChildLayout}
              contentFit="cover"
              source={require("../assets/ellipse-43.png")}
            />
            <Text style={[styles.em6, styles.em3Typo]}>chim</Text>
          </View>
        </View>
        <View style={[styles.lyricWordParent92, styles.lyricParentFlexBox]}>
          <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
            <Image
              style={styles.lyricChildLayout}
              contentFit="cover"
              source={require("../assets/ellipse-43.png")}
            />
            <Text style={[styles.em6, styles.em3Typo]}>Hót</Text>
          </View>
          <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
            <Image
              style={styles.lyricChildLayout}
              contentFit="cover"
              source={require("../assets/ellipse-43.png")}
            />
            <Text style={[styles.em6, styles.em3Typo]}>cho</Text>
          </View>
          <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
            <Image
              style={styles.lyricChildLayout}
              contentFit="cover"
              source={require("../assets/ellipse-43.png")}
            />
            <Text style={[styles.em6, styles.em3Typo]}>đời</Text>
          </View>
          <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
            <Image
              style={styles.lyricChildLayout}
              contentFit="cover"
              source={require("../assets/ellipse-43.png")}
            />
            <Text style={[styles.em6, styles.em3Typo]}>nhọc</Text>
          </View>
          <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
            <Image
              style={styles.lyricChildLayout}
              contentFit="cover"
              source={require("../assets/ellipse-43.png")}
            />
            <Text style={[styles.em6, styles.em3Typo]}>nhằn</Text>
          </View>
          <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
            <Image
              style={styles.lyricChildLayout}
              contentFit="cover"
              source={require("../assets/ellipse-43.png")}
            />
            <Text style={[styles.em6, styles.em3Typo]}>{`trôi `}</Text>
          </View>
          <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
            <Image
              style={styles.lyricChildLayout}
              contentFit="cover"
              source={require("../assets/ellipse-43.png")}
            />
            <Text style={[styles.em6, styles.em3Typo]}>xa</Text>
          </View>
        </View>
      </View>
      <View style={[styles.property144, styles.propertyPosition]}>
        <View style={[styles.count7, styles.countParentFlexBox]}>
          <View style={[styles.lyricWord, styles.lyricSpaceBlock]}>
            <Image
              style={styles.lyricChildLayout}
              contentFit="cover"
              source={require("../assets/ellipse-42.png")}
            />
            <Text style={[styles.em, styles.emTypo]}>3</Text>
          </View>
          <View style={[styles.lyricWord, styles.lyricSpaceBlock]}>
            <Image
              style={styles.lyricChildLayout}
              contentFit="cover"
              source={require("../assets/ellipse-42.png")}
            />
            <Text style={[styles.em, styles.emTypo]}>3</Text>
          </View>
          <View style={[styles.lyricWord, styles.lyricSpaceBlock]}>
            <Image
              style={styles.lyricChildLayout}
              contentFit="cover"
              source={require("../assets/ellipse-42.png")}
            />
            <Text style={[styles.em, styles.emTypo]}>3</Text>
          </View>
          <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
            <Image
              style={[styles.ellipseIcon, styles.lyricChildLayout]}
              contentFit="cover"
              source={require("../assets/ellipse-43.png")}
            />
            <Text style={[styles.em3, styles.em3Typo]}>3</Text>
          </View>
          <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
            <Image
              style={[styles.ellipseIcon, styles.lyricChildLayout]}
              contentFit="cover"
              source={require("../assets/ellipse-43.png")}
            />
            <Text style={[styles.em3, styles.em3Typo]}>2</Text>
          </View>
          <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
            <Image
              style={[styles.ellipseIcon, styles.lyricChildLayout]}
              contentFit="cover"
              source={require("../assets/ellipse-43.png")}
            />
            <Text style={[styles.em3, styles.em3Typo]}>1</Text>
          </View>
        </View>
        <View style={[styles.lyricWordParent35, styles.countParentFlexBox]}>
          <View style={styles.lyricSpaceBlock}>
            <Image
              style={styles.lyricChildLayout}
              contentFit="cover"
              source={require("../assets/ellipse-43.png")}
            />
            <Text style={[styles.em139, styles.emTypo]}>Hót</Text>
          </View>
          <View style={styles.lyricSpaceBlock}>
            <Image
              style={styles.lyricChildLayout}
              contentFit="cover"
              source={require("../assets/ellipse-43.png")}
            />
            <Text style={[styles.em139, styles.emTypo]}>đi</Text>
          </View>
          <View style={styles.lyricSpaceBlock}>
            <Image
              style={styles.lyricChildLayout}
              contentFit="cover"
              source={require("../assets/ellipse-43.png")}
            />
            <Text style={[styles.em139, styles.emTypo]}>{`chim `}</Text>
          </View>
          <View style={styles.lyricSpaceBlock}>
            <Image
              style={styles.lyricChildLayout}
              contentFit="cover"
              source={require("../assets/ellipse-43.png")}
            />
            <Text style={[styles.em139, styles.emTypo]}>,</Text>
          </View>
          <View style={styles.lyricSpaceBlock}>
            <Image
              style={styles.lyricChildLayout}
              contentFit="cover"
              source={require("../assets/ellipse-41.png")}
            />
            <Text style={[styles.em139, styles.emTypo]}>hót</Text>
          </View>
          <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
            <Image
              style={styles.lyricChildLayout}
              contentFit="cover"
              source={require("../assets/ellipse-43.png")}
            />
            <Text style={[styles.em6, styles.em3Typo]}>đi</Text>
          </View>
          <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
            <Image
              style={styles.lyricChildLayout}
              contentFit="cover"
              source={require("../assets/ellipse-43.png")}
            />
            <Text style={[styles.em6, styles.em3Typo]}>chim</Text>
          </View>
        </View>
        <View style={[styles.lyricWordParent92, styles.lyricParentFlexBox]}>
          <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
            <Image
              style={styles.lyricChildLayout}
              contentFit="cover"
              source={require("../assets/ellipse-43.png")}
            />
            <Text style={[styles.em6, styles.em3Typo]}>Hót</Text>
          </View>
          <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
            <Image
              style={styles.lyricChildLayout}
              contentFit="cover"
              source={require("../assets/ellipse-43.png")}
            />
            <Text style={[styles.em6, styles.em3Typo]}>cho</Text>
          </View>
          <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
            <Image
              style={styles.lyricChildLayout}
              contentFit="cover"
              source={require("../assets/ellipse-43.png")}
            />
            <Text style={[styles.em6, styles.em3Typo]}>đời</Text>
          </View>
          <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
            <Image
              style={styles.lyricChildLayout}
              contentFit="cover"
              source={require("../assets/ellipse-43.png")}
            />
            <Text style={[styles.em6, styles.em3Typo]}>nhọc</Text>
          </View>
          <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
            <Image
              style={styles.lyricChildLayout}
              contentFit="cover"
              source={require("../assets/ellipse-43.png")}
            />
            <Text style={[styles.em6, styles.em3Typo]}>nhằn</Text>
          </View>
          <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
            <Image
              style={styles.lyricChildLayout}
              contentFit="cover"
              source={require("../assets/ellipse-43.png")}
            />
            <Text style={[styles.em6, styles.em3Typo]}>{`trôi `}</Text>
          </View>
          <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
            <Image
              style={styles.lyricChildLayout}
              contentFit="cover"
              source={require("../assets/ellipse-43.png")}
            />
            <Text style={[styles.em6, styles.em3Typo]}>xa</Text>
          </View>
        </View>
      </View>
      <View style={[styles.property145, styles.propertyPosition]}>
        <View style={[styles.count7, styles.countParentFlexBox]}>
          <View style={[styles.lyricWord, styles.lyricSpaceBlock]}>
            <Image
              style={styles.lyricChildLayout}
              contentFit="cover"
              source={require("../assets/ellipse-42.png")}
            />
            <Text style={[styles.em, styles.emTypo]}>3</Text>
          </View>
          <View style={[styles.lyricWord, styles.lyricSpaceBlock]}>
            <Image
              style={styles.lyricChildLayout}
              contentFit="cover"
              source={require("../assets/ellipse-42.png")}
            />
            <Text style={[styles.em, styles.emTypo]}>3</Text>
          </View>
          <View style={[styles.lyricWord, styles.lyricSpaceBlock]}>
            <Image
              style={styles.lyricChildLayout}
              contentFit="cover"
              source={require("../assets/ellipse-42.png")}
            />
            <Text style={[styles.em, styles.emTypo]}>3</Text>
          </View>
          <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
            <Image
              style={[styles.ellipseIcon, styles.lyricChildLayout]}
              contentFit="cover"
              source={require("../assets/ellipse-43.png")}
            />
            <Text style={[styles.em3, styles.em3Typo]}>3</Text>
          </View>
          <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
            <Image
              style={[styles.ellipseIcon, styles.lyricChildLayout]}
              contentFit="cover"
              source={require("../assets/ellipse-43.png")}
            />
            <Text style={[styles.em3, styles.em3Typo]}>2</Text>
          </View>
          <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
            <Image
              style={[styles.ellipseIcon, styles.lyricChildLayout]}
              contentFit="cover"
              source={require("../assets/ellipse-43.png")}
            />
            <Text style={[styles.em3, styles.em3Typo]}>1</Text>
          </View>
        </View>
        <View style={[styles.lyricWordParent35, styles.countParentFlexBox]}>
          <View style={styles.lyricSpaceBlock}>
            <Image
              style={styles.lyricChildLayout}
              contentFit="cover"
              source={require("../assets/ellipse-43.png")}
            />
            <Text style={[styles.em139, styles.emTypo]}>Hót</Text>
          </View>
          <View style={styles.lyricSpaceBlock}>
            <Image
              style={styles.lyricChildLayout}
              contentFit="cover"
              source={require("../assets/ellipse-43.png")}
            />
            <Text style={[styles.em139, styles.emTypo]}>đi</Text>
          </View>
          <View style={styles.lyricSpaceBlock}>
            <Image
              style={styles.lyricChildLayout}
              contentFit="cover"
              source={require("../assets/ellipse-43.png")}
            />
            <Text style={[styles.em139, styles.emTypo]}>{`chim `}</Text>
          </View>
          <View style={styles.lyricSpaceBlock}>
            <Image
              style={styles.lyricChildLayout}
              contentFit="cover"
              source={require("../assets/ellipse-43.png")}
            />
            <Text style={[styles.em139, styles.emTypo]}>,</Text>
          </View>
          <View style={styles.lyricSpaceBlock}>
            <Image
              style={styles.lyricChildLayout}
              contentFit="cover"
              source={require("../assets/ellipse-43.png")}
            />
            <Text style={[styles.em139, styles.emTypo]}>hót</Text>
          </View>
          <View style={styles.lyricSpaceBlock}>
            <Image
              style={styles.lyricChildLayout}
              contentFit="cover"
              source={require("../assets/ellipse-44.png")}
            />
            <Text style={[styles.em139, styles.emTypo]}>đi</Text>
          </View>
          <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
            <Image
              style={styles.lyricChildLayout}
              contentFit="cover"
              source={require("../assets/ellipse-43.png")}
            />
            <Text style={[styles.em6, styles.em3Typo]}>chim</Text>
          </View>
        </View>
        <View style={[styles.lyricWordParent92, styles.lyricParentFlexBox]}>
          <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
            <Image
              style={styles.lyricChildLayout}
              contentFit="cover"
              source={require("../assets/ellipse-43.png")}
            />
            <Text style={[styles.em6, styles.em3Typo]}>Hót</Text>
          </View>
          <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
            <Image
              style={styles.lyricChildLayout}
              contentFit="cover"
              source={require("../assets/ellipse-43.png")}
            />
            <Text style={[styles.em6, styles.em3Typo]}>cho</Text>
          </View>
          <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
            <Image
              style={styles.lyricChildLayout}
              contentFit="cover"
              source={require("../assets/ellipse-43.png")}
            />
            <Text style={[styles.em6, styles.em3Typo]}>đời</Text>
          </View>
          <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
            <Image
              style={styles.lyricChildLayout}
              contentFit="cover"
              source={require("../assets/ellipse-43.png")}
            />
            <Text style={[styles.em6, styles.em3Typo]}>nhọc</Text>
          </View>
          <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
            <Image
              style={styles.lyricChildLayout}
              contentFit="cover"
              source={require("../assets/ellipse-43.png")}
            />
            <Text style={[styles.em6, styles.em3Typo]}>nhằn</Text>
          </View>
          <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
            <Image
              style={styles.lyricChildLayout}
              contentFit="cover"
              source={require("../assets/ellipse-43.png")}
            />
            <Text style={[styles.em6, styles.em3Typo]}>{`trôi `}</Text>
          </View>
          <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
            <Image
              style={styles.lyricChildLayout}
              contentFit="cover"
              source={require("../assets/ellipse-43.png")}
            />
            <Text style={[styles.em6, styles.em3Typo]}>xa</Text>
          </View>
        </View>
      </View>
      <View style={[styles.property146, styles.propertyPosition]}>
        <View style={[styles.count7, styles.countParentFlexBox]}>
          <View style={[styles.lyricWord, styles.lyricSpaceBlock]}>
            <Image
              style={styles.lyricChildLayout}
              contentFit="cover"
              source={require("../assets/ellipse-42.png")}
            />
            <Text style={[styles.em, styles.emTypo]}>3</Text>
          </View>
          <View style={[styles.lyricWord, styles.lyricSpaceBlock]}>
            <Image
              style={styles.lyricChildLayout}
              contentFit="cover"
              source={require("../assets/ellipse-42.png")}
            />
            <Text style={[styles.em, styles.emTypo]}>3</Text>
          </View>
          <View style={[styles.lyricWord, styles.lyricSpaceBlock]}>
            <Image
              style={styles.lyricChildLayout}
              contentFit="cover"
              source={require("../assets/ellipse-42.png")}
            />
            <Text style={[styles.em, styles.emTypo]}>3</Text>
          </View>
          <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
            <Image
              style={[styles.ellipseIcon, styles.lyricChildLayout]}
              contentFit="cover"
              source={require("../assets/ellipse-43.png")}
            />
            <Text style={[styles.em3, styles.em3Typo]}>3</Text>
          </View>
          <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
            <Image
              style={[styles.ellipseIcon, styles.lyricChildLayout]}
              contentFit="cover"
              source={require("../assets/ellipse-43.png")}
            />
            <Text style={[styles.em3, styles.em3Typo]}>2</Text>
          </View>
          <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
            <Image
              style={[styles.ellipseIcon, styles.lyricChildLayout]}
              contentFit="cover"
              source={require("../assets/ellipse-43.png")}
            />
            <Text style={[styles.em3, styles.em3Typo]}>1</Text>
          </View>
        </View>
        <View style={[styles.lyricWordParent35, styles.countParentFlexBox]}>
          <View style={styles.lyricSpaceBlock}>
            <Image
              style={styles.lyricChildLayout}
              contentFit="cover"
              source={require("../assets/ellipse-43.png")}
            />
            <Text style={[styles.em139, styles.emTypo]}>Hót</Text>
          </View>
          <View style={styles.lyricSpaceBlock}>
            <Image
              style={styles.lyricChildLayout}
              contentFit="cover"
              source={require("../assets/ellipse-43.png")}
            />
            <Text style={[styles.em139, styles.emTypo]}>đi</Text>
          </View>
          <View style={styles.lyricSpaceBlock}>
            <Image
              style={styles.lyricChildLayout}
              contentFit="cover"
              source={require("../assets/ellipse-43.png")}
            />
            <Text style={[styles.em139, styles.emTypo]}>{`chim `}</Text>
          </View>
          <View style={styles.lyricSpaceBlock}>
            <Image
              style={styles.lyricChildLayout}
              contentFit="cover"
              source={require("../assets/ellipse-43.png")}
            />
            <Text style={[styles.em139, styles.emTypo]}>,</Text>
          </View>
          <View style={styles.lyricSpaceBlock}>
            <Image
              style={styles.lyricChildLayout}
              contentFit="cover"
              source={require("../assets/ellipse-43.png")}
            />
            <Text style={[styles.em139, styles.emTypo]}>hót</Text>
          </View>
          <View style={styles.lyricSpaceBlock}>
            <Image
              style={styles.lyricChildLayout}
              contentFit="cover"
              source={require("../assets/ellipse-43.png")}
            />
            <Text style={[styles.em139, styles.emTypo]}>đi</Text>
          </View>
          <View style={styles.lyricSpaceBlock}>
            <Image
              style={styles.lyricChildLayout}
              contentFit="cover"
              source={require("../assets/ellipse-43.png")}
            />
            <Text style={[styles.em139, styles.emTypo]}>chim</Text>
          </View>
        </View>
        <View style={[styles.lyricWordParent92, styles.lyricParentFlexBox]}>
          <View style={styles.lyricSpaceBlock}>
            <Image
              style={styles.lyricChildLayout}
              contentFit="cover"
              source={require("../assets/ellipse-44.png")}
            />
            <Text style={[styles.em139, styles.emTypo]}>Hót</Text>
          </View>
          <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
            <Image
              style={styles.lyricChildLayout}
              contentFit="cover"
              source={require("../assets/ellipse-43.png")}
            />
            <Text style={[styles.em6, styles.em3Typo]}>cho</Text>
          </View>
          <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
            <Image
              style={styles.lyricChildLayout}
              contentFit="cover"
              source={require("../assets/ellipse-43.png")}
            />
            <Text style={[styles.em6, styles.em3Typo]}>đời</Text>
          </View>
          <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
            <Image
              style={styles.lyricChildLayout}
              contentFit="cover"
              source={require("../assets/ellipse-43.png")}
            />
            <Text style={[styles.em6, styles.em3Typo]}>nhọc</Text>
          </View>
          <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
            <Image
              style={styles.lyricChildLayout}
              contentFit="cover"
              source={require("../assets/ellipse-43.png")}
            />
            <Text style={[styles.em6, styles.em3Typo]}>nhằn</Text>
          </View>
          <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
            <Image
              style={styles.lyricChildLayout}
              contentFit="cover"
              source={require("../assets/ellipse-43.png")}
            />
            <Text style={[styles.em6, styles.em3Typo]}>{`trôi `}</Text>
          </View>
          <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
            <Image
              style={styles.lyricChildLayout}
              contentFit="cover"
              source={require("../assets/ellipse-43.png")}
            />
            <Text style={[styles.em6, styles.em3Typo]}>xa</Text>
          </View>
        </View>
      </View>
      <View style={[styles.property147, styles.propertyPosition]}>
        <View style={[styles.count7, styles.countParentFlexBox]}>
          <View style={[styles.lyricWord, styles.lyricSpaceBlock]}>
            <Image
              style={styles.lyricChildLayout}
              contentFit="cover"
              source={require("../assets/ellipse-42.png")}
            />
            <Text style={[styles.em, styles.emTypo]}>3</Text>
          </View>
          <View style={[styles.lyricWord, styles.lyricSpaceBlock]}>
            <Image
              style={styles.lyricChildLayout}
              contentFit="cover"
              source={require("../assets/ellipse-42.png")}
            />
            <Text style={[styles.em, styles.emTypo]}>3</Text>
          </View>
          <View style={[styles.lyricWord, styles.lyricSpaceBlock]}>
            <Image
              style={styles.lyricChildLayout}
              contentFit="cover"
              source={require("../assets/ellipse-42.png")}
            />
            <Text style={[styles.em, styles.emTypo]}>3</Text>
          </View>
          <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
            <Image
              style={[styles.ellipseIcon, styles.lyricChildLayout]}
              contentFit="cover"
              source={require("../assets/ellipse-43.png")}
            />
            <Text style={[styles.em3, styles.em3Typo]}>3</Text>
          </View>
          <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
            <Image
              style={[styles.ellipseIcon, styles.lyricChildLayout]}
              contentFit="cover"
              source={require("../assets/ellipse-43.png")}
            />
            <Text style={[styles.em3, styles.em3Typo]}>2</Text>
          </View>
          <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
            <Image
              style={[styles.ellipseIcon, styles.lyricChildLayout]}
              contentFit="cover"
              source={require("../assets/ellipse-43.png")}
            />
            <Text style={[styles.em3, styles.em3Typo]}>1</Text>
          </View>
        </View>
        <View style={[styles.lyricWordParent35, styles.countParentFlexBox]}>
          <View style={styles.lyricSpaceBlock}>
            <Image
              style={styles.lyricChildLayout}
              contentFit="cover"
              source={require("../assets/ellipse-43.png")}
            />
            <Text style={[styles.em139, styles.emTypo]}>Hót</Text>
          </View>
          <View style={styles.lyricSpaceBlock}>
            <Image
              style={styles.lyricChildLayout}
              contentFit="cover"
              source={require("../assets/ellipse-43.png")}
            />
            <Text style={[styles.em139, styles.emTypo]}>đi</Text>
          </View>
          <View style={styles.lyricSpaceBlock}>
            <Image
              style={styles.lyricChildLayout}
              contentFit="cover"
              source={require("../assets/ellipse-43.png")}
            />
            <Text style={[styles.em139, styles.emTypo]}>{`chim `}</Text>
          </View>
          <View style={styles.lyricSpaceBlock}>
            <Image
              style={styles.lyricChildLayout}
              contentFit="cover"
              source={require("../assets/ellipse-43.png")}
            />
            <Text style={[styles.em139, styles.emTypo]}>,</Text>
          </View>
          <View style={styles.lyricSpaceBlock}>
            <Image
              style={styles.lyricChildLayout}
              contentFit="cover"
              source={require("../assets/ellipse-43.png")}
            />
            <Text style={[styles.em139, styles.emTypo]}>hót</Text>
          </View>
          <View style={styles.lyricSpaceBlock}>
            <Image
              style={styles.lyricChildLayout}
              contentFit="cover"
              source={require("../assets/ellipse-43.png")}
            />
            <Text style={[styles.em139, styles.emTypo]}>đi</Text>
          </View>
          <View style={styles.lyricSpaceBlock}>
            <Image
              style={styles.lyricChildLayout}
              contentFit="cover"
              source={require("../assets/ellipse-43.png")}
            />
            <Text style={[styles.em139, styles.emTypo]}>chim</Text>
          </View>
        </View>
        <View style={[styles.lyricWordParent92, styles.lyricParentFlexBox]}>
          <View style={styles.lyricSpaceBlock}>
            <Image
              style={styles.lyricChildLayout}
              contentFit="cover"
              source={require("../assets/ellipse-43.png")}
            />
            <Text style={[styles.em139, styles.emTypo]}>Hót</Text>
          </View>
          <View style={styles.lyricSpaceBlock}>
            <Image
              style={styles.lyricChildLayout}
              contentFit="cover"
              source={require("../assets/ellipse-44.png")}
            />
            <Text style={[styles.em139, styles.emTypo]}>cho</Text>
          </View>
          <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
            <Image
              style={styles.lyricChildLayout}
              contentFit="cover"
              source={require("../assets/ellipse-43.png")}
            />
            <Text style={[styles.em6, styles.em3Typo]}>đời</Text>
          </View>
          <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
            <Image
              style={styles.lyricChildLayout}
              contentFit="cover"
              source={require("../assets/ellipse-43.png")}
            />
            <Text style={[styles.em6, styles.em3Typo]}>nhọc</Text>
          </View>
          <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
            <Image
              style={styles.lyricChildLayout}
              contentFit="cover"
              source={require("../assets/ellipse-43.png")}
            />
            <Text style={[styles.em6, styles.em3Typo]}>nhằn</Text>
          </View>
          <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
            <Image
              style={styles.lyricChildLayout}
              contentFit="cover"
              source={require("../assets/ellipse-43.png")}
            />
            <Text style={[styles.em6, styles.em3Typo]}>{`trôi `}</Text>
          </View>
          <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
            <Image
              style={styles.lyricChildLayout}
              contentFit="cover"
              source={require("../assets/ellipse-43.png")}
            />
            <Text style={[styles.em6, styles.em3Typo]}>xa</Text>
          </View>
        </View>
      </View>
      <View style={[styles.property148, styles.propertyPosition]}>
        <View style={[styles.count7, styles.countParentFlexBox]}>
          <View style={[styles.lyricWord, styles.lyricSpaceBlock]}>
            <Image
              style={styles.lyricChildLayout}
              contentFit="cover"
              source={require("../assets/ellipse-42.png")}
            />
            <Text style={[styles.em, styles.emTypo]}>3</Text>
          </View>
          <View style={[styles.lyricWord, styles.lyricSpaceBlock]}>
            <Image
              style={styles.lyricChildLayout}
              contentFit="cover"
              source={require("../assets/ellipse-42.png")}
            />
            <Text style={[styles.em, styles.emTypo]}>3</Text>
          </View>
          <View style={[styles.lyricWord, styles.lyricSpaceBlock]}>
            <Image
              style={styles.lyricChildLayout}
              contentFit="cover"
              source={require("../assets/ellipse-42.png")}
            />
            <Text style={[styles.em, styles.emTypo]}>3</Text>
          </View>
          <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
            <Image
              style={[styles.ellipseIcon, styles.lyricChildLayout]}
              contentFit="cover"
              source={require("../assets/ellipse-43.png")}
            />
            <Text style={[styles.em3, styles.em3Typo]}>3</Text>
          </View>
          <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
            <Image
              style={[styles.ellipseIcon, styles.lyricChildLayout]}
              contentFit="cover"
              source={require("../assets/ellipse-43.png")}
            />
            <Text style={[styles.em3, styles.em3Typo]}>2</Text>
          </View>
          <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
            <Image
              style={[styles.ellipseIcon, styles.lyricChildLayout]}
              contentFit="cover"
              source={require("../assets/ellipse-43.png")}
            />
            <Text style={[styles.em3, styles.em3Typo]}>1</Text>
          </View>
        </View>
        <View style={[styles.lyricWordParent35, styles.countParentFlexBox]}>
          <View style={styles.lyricSpaceBlock}>
            <Image
              style={styles.lyricChildLayout}
              contentFit="cover"
              source={require("../assets/ellipse-43.png")}
            />
            <Text style={[styles.em139, styles.emTypo]}>Hót</Text>
          </View>
          <View style={styles.lyricSpaceBlock}>
            <Image
              style={styles.lyricChildLayout}
              contentFit="cover"
              source={require("../assets/ellipse-43.png")}
            />
            <Text style={[styles.em139, styles.emTypo]}>đi</Text>
          </View>
          <View style={styles.lyricSpaceBlock}>
            <Image
              style={styles.lyricChildLayout}
              contentFit="cover"
              source={require("../assets/ellipse-43.png")}
            />
            <Text style={[styles.em139, styles.emTypo]}>{`chim `}</Text>
          </View>
          <View style={styles.lyricSpaceBlock}>
            <Image
              style={styles.lyricChildLayout}
              contentFit="cover"
              source={require("../assets/ellipse-43.png")}
            />
            <Text style={[styles.em139, styles.emTypo]}>,</Text>
          </View>
          <View style={styles.lyricSpaceBlock}>
            <Image
              style={styles.lyricChildLayout}
              contentFit="cover"
              source={require("../assets/ellipse-43.png")}
            />
            <Text style={[styles.em139, styles.emTypo]}>hót</Text>
          </View>
          <View style={styles.lyricSpaceBlock}>
            <Image
              style={styles.lyricChildLayout}
              contentFit="cover"
              source={require("../assets/ellipse-43.png")}
            />
            <Text style={[styles.em139, styles.emTypo]}>đi</Text>
          </View>
          <View style={styles.lyricSpaceBlock}>
            <Image
              style={styles.lyricChildLayout}
              contentFit="cover"
              source={require("../assets/ellipse-43.png")}
            />
            <Text style={[styles.em139, styles.emTypo]}>chim</Text>
          </View>
        </View>
        <View style={[styles.lyricWordParent92, styles.lyricParentFlexBox]}>
          <View style={styles.lyricSpaceBlock}>
            <Image
              style={styles.lyricChildLayout}
              contentFit="cover"
              source={require("../assets/ellipse-43.png")}
            />
            <Text style={[styles.em139, styles.emTypo]}>Hót</Text>
          </View>
          <View style={styles.lyricSpaceBlock}>
            <Image
              style={styles.lyricChildLayout}
              contentFit="cover"
              source={require("../assets/ellipse-43.png")}
            />
            <Text style={[styles.em139, styles.emTypo]}>cho</Text>
          </View>
          <View style={styles.lyricSpaceBlock}>
            <Image
              style={styles.lyricChildLayout}
              contentFit="cover"
              source={require("../assets/ellipse-41.png")}
            />
            <Text style={[styles.em139, styles.emTypo]}>đời</Text>
          </View>
          <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
            <Image
              style={styles.lyricChildLayout}
              contentFit="cover"
              source={require("../assets/ellipse-43.png")}
            />
            <Text style={[styles.em6, styles.em3Typo]}>nhọc</Text>
          </View>
          <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
            <Image
              style={styles.lyricChildLayout}
              contentFit="cover"
              source={require("../assets/ellipse-43.png")}
            />
            <Text style={[styles.em6, styles.em3Typo]}>nhằn</Text>
          </View>
          <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
            <Image
              style={styles.lyricChildLayout}
              contentFit="cover"
              source={require("../assets/ellipse-43.png")}
            />
            <Text style={[styles.em6, styles.em3Typo]}>{`trôi `}</Text>
          </View>
          <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
            <Image
              style={styles.lyricChildLayout}
              contentFit="cover"
              source={require("../assets/ellipse-43.png")}
            />
            <Text style={[styles.em6, styles.em3Typo]}>xa</Text>
          </View>
        </View>
      </View>
      <View style={[styles.property149, styles.propertyPosition]}>
        <View style={[styles.count7, styles.countParentFlexBox]}>
          <View style={[styles.lyricWord, styles.lyricSpaceBlock]}>
            <Image
              style={styles.lyricChildLayout}
              contentFit="cover"
              source={require("../assets/ellipse-42.png")}
            />
            <Text style={[styles.em, styles.emTypo]}>3</Text>
          </View>
          <View style={[styles.lyricWord, styles.lyricSpaceBlock]}>
            <Image
              style={styles.lyricChildLayout}
              contentFit="cover"
              source={require("../assets/ellipse-42.png")}
            />
            <Text style={[styles.em, styles.emTypo]}>3</Text>
          </View>
          <View style={[styles.lyricWord, styles.lyricSpaceBlock]}>
            <Image
              style={styles.lyricChildLayout}
              contentFit="cover"
              source={require("../assets/ellipse-42.png")}
            />
            <Text style={[styles.em, styles.emTypo]}>3</Text>
          </View>
          <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
            <Image
              style={[styles.ellipseIcon, styles.lyricChildLayout]}
              contentFit="cover"
              source={require("../assets/ellipse-43.png")}
            />
            <Text style={[styles.em3, styles.em3Typo]}>3</Text>
          </View>
          <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
            <Image
              style={[styles.ellipseIcon, styles.lyricChildLayout]}
              contentFit="cover"
              source={require("../assets/ellipse-43.png")}
            />
            <Text style={[styles.em3, styles.em3Typo]}>2</Text>
          </View>
          <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
            <Image
              style={[styles.ellipseIcon, styles.lyricChildLayout]}
              contentFit="cover"
              source={require("../assets/ellipse-43.png")}
            />
            <Text style={[styles.em3, styles.em3Typo]}>1</Text>
          </View>
        </View>
        <View style={[styles.lyricWordParent35, styles.countParentFlexBox]}>
          <View style={styles.lyricSpaceBlock}>
            <Image
              style={styles.lyricChildLayout}
              contentFit="cover"
              source={require("../assets/ellipse-43.png")}
            />
            <Text style={[styles.em139, styles.emTypo]}>Hót</Text>
          </View>
          <View style={styles.lyricSpaceBlock}>
            <Image
              style={styles.lyricChildLayout}
              contentFit="cover"
              source={require("../assets/ellipse-43.png")}
            />
            <Text style={[styles.em139, styles.emTypo]}>đi</Text>
          </View>
          <View style={styles.lyricSpaceBlock}>
            <Image
              style={styles.lyricChildLayout}
              contentFit="cover"
              source={require("../assets/ellipse-43.png")}
            />
            <Text style={[styles.em139, styles.emTypo]}>{`chim `}</Text>
          </View>
          <View style={styles.lyricSpaceBlock}>
            <Image
              style={styles.lyricChildLayout}
              contentFit="cover"
              source={require("../assets/ellipse-43.png")}
            />
            <Text style={[styles.em139, styles.emTypo]}>,</Text>
          </View>
          <View style={styles.lyricSpaceBlock}>
            <Image
              style={styles.lyricChildLayout}
              contentFit="cover"
              source={require("../assets/ellipse-43.png")}
            />
            <Text style={[styles.em139, styles.emTypo]}>hót</Text>
          </View>
          <View style={styles.lyricSpaceBlock}>
            <Image
              style={styles.lyricChildLayout}
              contentFit="cover"
              source={require("../assets/ellipse-43.png")}
            />
            <Text style={[styles.em139, styles.emTypo]}>đi</Text>
          </View>
          <View style={styles.lyricSpaceBlock}>
            <Image
              style={styles.lyricChildLayout}
              contentFit="cover"
              source={require("../assets/ellipse-43.png")}
            />
            <Text style={[styles.em139, styles.emTypo]}>chim</Text>
          </View>
        </View>
        <View style={[styles.lyricWordParent92, styles.lyricParentFlexBox]}>
          <View style={styles.lyricSpaceBlock}>
            <Image
              style={styles.lyricChildLayout}
              contentFit="cover"
              source={require("../assets/ellipse-43.png")}
            />
            <Text style={[styles.em139, styles.emTypo]}>Hót</Text>
          </View>
          <View style={styles.lyricSpaceBlock}>
            <Image
              style={styles.lyricChildLayout}
              contentFit="cover"
              source={require("../assets/ellipse-43.png")}
            />
            <Text style={[styles.em139, styles.emTypo]}>cho</Text>
          </View>
          <View style={styles.lyricSpaceBlock}>
            <Image
              style={styles.lyricChildLayout}
              contentFit="cover"
              source={require("../assets/ellipse-43.png")}
            />
            <Text style={[styles.em139, styles.emTypo]}>đời</Text>
          </View>
          <View style={styles.lyricSpaceBlock}>
            <Image
              style={styles.lyricChildLayout}
              contentFit="cover"
              source={require("../assets/ellipse-44.png")}
            />
            <Text style={[styles.em139, styles.emTypo]}>nhọc</Text>
          </View>
          <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
            <Image
              style={styles.lyricChildLayout}
              contentFit="cover"
              source={require("../assets/ellipse-43.png")}
            />
            <Text style={[styles.em6, styles.em3Typo]}>nhằn</Text>
          </View>
          <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
            <Image
              style={styles.lyricChildLayout}
              contentFit="cover"
              source={require("../assets/ellipse-43.png")}
            />
            <Text style={[styles.em6, styles.em3Typo]}>{`trôi `}</Text>
          </View>
          <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
            <Image
              style={styles.lyricChildLayout}
              contentFit="cover"
              source={require("../assets/ellipse-43.png")}
            />
            <Text style={[styles.em6, styles.em3Typo]}>xa</Text>
          </View>
        </View>
      </View>
      <View style={[styles.property150, styles.propertyPosition]}>
        <View style={[styles.count7, styles.countParentFlexBox]}>
          <View style={[styles.lyricWord, styles.lyricSpaceBlock]}>
            <Image
              style={styles.lyricChildLayout}
              contentFit="cover"
              source={require("../assets/ellipse-42.png")}
            />
            <Text style={[styles.em, styles.emTypo]}>3</Text>
          </View>
          <View style={[styles.lyricWord, styles.lyricSpaceBlock]}>
            <Image
              style={styles.lyricChildLayout}
              contentFit="cover"
              source={require("../assets/ellipse-42.png")}
            />
            <Text style={[styles.em, styles.emTypo]}>3</Text>
          </View>
          <View style={[styles.lyricWord, styles.lyricSpaceBlock]}>
            <Image
              style={styles.lyricChildLayout}
              contentFit="cover"
              source={require("../assets/ellipse-42.png")}
            />
            <Text style={[styles.em, styles.emTypo]}>3</Text>
          </View>
          <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
            <Image
              style={[styles.ellipseIcon, styles.lyricChildLayout]}
              contentFit="cover"
              source={require("../assets/ellipse-43.png")}
            />
            <Text style={[styles.em3, styles.em3Typo]}>3</Text>
          </View>
          <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
            <Image
              style={[styles.ellipseIcon, styles.lyricChildLayout]}
              contentFit="cover"
              source={require("../assets/ellipse-43.png")}
            />
            <Text style={[styles.em3, styles.em3Typo]}>2</Text>
          </View>
          <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
            <Image
              style={[styles.ellipseIcon, styles.lyricChildLayout]}
              contentFit="cover"
              source={require("../assets/ellipse-43.png")}
            />
            <Text style={[styles.em3, styles.em3Typo]}>1</Text>
          </View>
        </View>
        <View style={[styles.lyricWordParent35, styles.countParentFlexBox]}>
          <View style={styles.lyricSpaceBlock}>
            <Image
              style={styles.lyricChildLayout}
              contentFit="cover"
              source={require("../assets/ellipse-43.png")}
            />
            <Text style={[styles.em139, styles.emTypo]}>Hót</Text>
          </View>
          <View style={styles.lyricSpaceBlock}>
            <Image
              style={styles.lyricChildLayout}
              contentFit="cover"
              source={require("../assets/ellipse-43.png")}
            />
            <Text style={[styles.em139, styles.emTypo]}>đi</Text>
          </View>
          <View style={styles.lyricSpaceBlock}>
            <Image
              style={styles.lyricChildLayout}
              contentFit="cover"
              source={require("../assets/ellipse-43.png")}
            />
            <Text style={[styles.em139, styles.emTypo]}>{`chim `}</Text>
          </View>
          <View style={styles.lyricSpaceBlock}>
            <Image
              style={styles.lyricChildLayout}
              contentFit="cover"
              source={require("../assets/ellipse-43.png")}
            />
            <Text style={[styles.em139, styles.emTypo]}>,</Text>
          </View>
          <View style={styles.lyricSpaceBlock}>
            <Image
              style={styles.lyricChildLayout}
              contentFit="cover"
              source={require("../assets/ellipse-43.png")}
            />
            <Text style={[styles.em139, styles.emTypo]}>hót</Text>
          </View>
          <View style={styles.lyricSpaceBlock}>
            <Image
              style={styles.lyricChildLayout}
              contentFit="cover"
              source={require("../assets/ellipse-43.png")}
            />
            <Text style={[styles.em139, styles.emTypo]}>đi</Text>
          </View>
          <View style={styles.lyricSpaceBlock}>
            <Image
              style={styles.lyricChildLayout}
              contentFit="cover"
              source={require("../assets/ellipse-43.png")}
            />
            <Text style={[styles.em139, styles.emTypo]}>chim</Text>
          </View>
        </View>
        <View style={[styles.lyricWordParent92, styles.lyricParentFlexBox]}>
          <View style={styles.lyricSpaceBlock}>
            <Image
              style={styles.lyricChildLayout}
              contentFit="cover"
              source={require("../assets/ellipse-43.png")}
            />
            <Text style={[styles.em139, styles.emTypo]}>Hót</Text>
          </View>
          <View style={styles.lyricSpaceBlock}>
            <Image
              style={styles.lyricChildLayout}
              contentFit="cover"
              source={require("../assets/ellipse-43.png")}
            />
            <Text style={[styles.em139, styles.emTypo]}>cho</Text>
          </View>
          <View style={styles.lyricSpaceBlock}>
            <Image
              style={styles.lyricChildLayout}
              contentFit="cover"
              source={require("../assets/ellipse-43.png")}
            />
            <Text style={[styles.em139, styles.emTypo]}>đời</Text>
          </View>
          <View style={styles.lyricSpaceBlock}>
            <Image
              style={styles.lyricChildLayout}
              contentFit="cover"
              source={require("../assets/ellipse-43.png")}
            />
            <Text style={[styles.em139, styles.emTypo]}>nhọc</Text>
          </View>
          <View style={styles.lyricSpaceBlock}>
            <Image
              style={styles.lyricChildLayout}
              contentFit="cover"
              source={require("../assets/ellipse-41.png")}
            />
            <Text style={[styles.em139, styles.emTypo]}>nhằn</Text>
          </View>
          <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
            <Image
              style={styles.lyricChildLayout}
              contentFit="cover"
              source={require("../assets/ellipse-43.png")}
            />
            <Text style={[styles.em6, styles.em3Typo]}>{`trôi `}</Text>
          </View>
          <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
            <Image
              style={styles.lyricChildLayout}
              contentFit="cover"
              source={require("../assets/ellipse-43.png")}
            />
            <Text style={[styles.em6, styles.em3Typo]}>xa</Text>
          </View>
        </View>
      </View>
      <View style={[styles.property151, styles.propertyPosition]}>
        <View style={[styles.count7, styles.countParentFlexBox]}>
          <View style={[styles.lyricWord, styles.lyricSpaceBlock]}>
            <Image
              style={styles.lyricChildLayout}
              contentFit="cover"
              source={require("../assets/ellipse-42.png")}
            />
            <Text style={[styles.em, styles.emTypo]}>3</Text>
          </View>
          <View style={[styles.lyricWord, styles.lyricSpaceBlock]}>
            <Image
              style={styles.lyricChildLayout}
              contentFit="cover"
              source={require("../assets/ellipse-42.png")}
            />
            <Text style={[styles.em, styles.emTypo]}>3</Text>
          </View>
          <View style={[styles.lyricWord, styles.lyricSpaceBlock]}>
            <Image
              style={styles.lyricChildLayout}
              contentFit="cover"
              source={require("../assets/ellipse-42.png")}
            />
            <Text style={[styles.em, styles.emTypo]}>3</Text>
          </View>
          <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
            <Image
              style={[styles.ellipseIcon, styles.lyricChildLayout]}
              contentFit="cover"
              source={require("../assets/ellipse-43.png")}
            />
            <Text style={[styles.em3, styles.em3Typo]}>3</Text>
          </View>
          <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
            <Image
              style={[styles.ellipseIcon, styles.lyricChildLayout]}
              contentFit="cover"
              source={require("../assets/ellipse-43.png")}
            />
            <Text style={[styles.em3, styles.em3Typo]}>2</Text>
          </View>
          <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
            <Image
              style={[styles.ellipseIcon, styles.lyricChildLayout]}
              contentFit="cover"
              source={require("../assets/ellipse-43.png")}
            />
            <Text style={[styles.em3, styles.em3Typo]}>1</Text>
          </View>
        </View>
        <View style={[styles.lyricWordParent35, styles.countParentFlexBox]}>
          <View style={styles.lyricSpaceBlock}>
            <Image
              style={styles.lyricChildLayout}
              contentFit="cover"
              source={require("../assets/ellipse-43.png")}
            />
            <Text style={[styles.em139, styles.emTypo]}>Hót</Text>
          </View>
          <View style={styles.lyricSpaceBlock}>
            <Image
              style={styles.lyricChildLayout}
              contentFit="cover"
              source={require("../assets/ellipse-43.png")}
            />
            <Text style={[styles.em139, styles.emTypo]}>đi</Text>
          </View>
          <View style={styles.lyricSpaceBlock}>
            <Image
              style={styles.lyricChildLayout}
              contentFit="cover"
              source={require("../assets/ellipse-43.png")}
            />
            <Text style={[styles.em139, styles.emTypo]}>{`chim `}</Text>
          </View>
          <View style={styles.lyricSpaceBlock}>
            <Image
              style={styles.lyricChildLayout}
              contentFit="cover"
              source={require("../assets/ellipse-43.png")}
            />
            <Text style={[styles.em139, styles.emTypo]}>,</Text>
          </View>
          <View style={styles.lyricSpaceBlock}>
            <Image
              style={styles.lyricChildLayout}
              contentFit="cover"
              source={require("../assets/ellipse-43.png")}
            />
            <Text style={[styles.em139, styles.emTypo]}>hót</Text>
          </View>
          <View style={styles.lyricSpaceBlock}>
            <Image
              style={styles.lyricChildLayout}
              contentFit="cover"
              source={require("../assets/ellipse-43.png")}
            />
            <Text style={[styles.em139, styles.emTypo]}>đi</Text>
          </View>
          <View style={styles.lyricSpaceBlock}>
            <Image
              style={styles.lyricChildLayout}
              contentFit="cover"
              source={require("../assets/ellipse-43.png")}
            />
            <Text style={[styles.em139, styles.emTypo]}>chim</Text>
          </View>
        </View>
        <View style={[styles.lyricWordParent92, styles.lyricParentFlexBox]}>
          <View style={styles.lyricSpaceBlock}>
            <Image
              style={styles.lyricChildLayout}
              contentFit="cover"
              source={require("../assets/ellipse-43.png")}
            />
            <Text style={[styles.em139, styles.emTypo]}>Hót</Text>
          </View>
          <View style={styles.lyricSpaceBlock}>
            <Image
              style={styles.lyricChildLayout}
              contentFit="cover"
              source={require("../assets/ellipse-43.png")}
            />
            <Text style={[styles.em139, styles.emTypo]}>cho</Text>
          </View>
          <View style={styles.lyricSpaceBlock}>
            <Image
              style={styles.lyricChildLayout}
              contentFit="cover"
              source={require("../assets/ellipse-43.png")}
            />
            <Text style={[styles.em139, styles.emTypo]}>đời</Text>
          </View>
          <View style={styles.lyricSpaceBlock}>
            <Image
              style={styles.lyricChildLayout}
              contentFit="cover"
              source={require("../assets/ellipse-43.png")}
            />
            <Text style={[styles.em139, styles.emTypo]}>nhọc</Text>
          </View>
          <View style={styles.lyricSpaceBlock}>
            <Image
              style={styles.lyricChildLayout}
              contentFit="cover"
              source={require("../assets/ellipse-43.png")}
            />
            <Text style={[styles.em139, styles.emTypo]}>nhằn</Text>
          </View>
          <View style={styles.lyricSpaceBlock}>
            <Image
              style={styles.lyricChildLayout}
              contentFit="cover"
              source={require("../assets/ellipse-44.png")}
            />
            <Text style={[styles.em139, styles.emTypo]}>{`trôi `}</Text>
          </View>
          <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
            <Image
              style={styles.lyricChildLayout}
              contentFit="cover"
              source={require("../assets/ellipse-43.png")}
            />
            <Text style={[styles.em6, styles.em3Typo]}>xa</Text>
          </View>
        </View>
      </View>
      <View style={[styles.property152, styles.propertyPosition]}>
        <View style={[styles.count7, styles.countParentFlexBox]}>
          <View style={[styles.lyricWord, styles.lyricSpaceBlock]}>
            <Image
              style={styles.lyricChildLayout}
              contentFit="cover"
              source={require("../assets/ellipse-42.png")}
            />
            <Text style={[styles.em, styles.emTypo]}>3</Text>
          </View>
          <View style={[styles.lyricWord, styles.lyricSpaceBlock]}>
            <Image
              style={styles.lyricChildLayout}
              contentFit="cover"
              source={require("../assets/ellipse-42.png")}
            />
            <Text style={[styles.em, styles.emTypo]}>3</Text>
          </View>
          <View style={[styles.lyricWord, styles.lyricSpaceBlock]}>
            <Image
              style={styles.lyricChildLayout}
              contentFit="cover"
              source={require("../assets/ellipse-42.png")}
            />
            <Text style={[styles.em, styles.emTypo]}>3</Text>
          </View>
          <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
            <Image
              style={[styles.ellipseIcon, styles.lyricChildLayout]}
              contentFit="cover"
              source={require("../assets/ellipse-43.png")}
            />
            <Text style={[styles.em3, styles.em3Typo]}>3</Text>
          </View>
          <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
            <Image
              style={[styles.ellipseIcon, styles.lyricChildLayout]}
              contentFit="cover"
              source={require("../assets/ellipse-43.png")}
            />
            <Text style={[styles.em3, styles.em3Typo]}>2</Text>
          </View>
          <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
            <Image
              style={[styles.ellipseIcon, styles.lyricChildLayout]}
              contentFit="cover"
              source={require("../assets/ellipse-43.png")}
            />
            <Text style={[styles.em3, styles.em3Typo]}>1</Text>
          </View>
        </View>
        <View style={[styles.lyricWordParent35, styles.countParentFlexBox]}>
          <View style={styles.lyricSpaceBlock}>
            <Image
              style={styles.lyricChildLayout}
              contentFit="cover"
              source={require("../assets/ellipse-43.png")}
            />
            <Text style={[styles.em139, styles.emTypo]}>Hót</Text>
          </View>
          <View style={styles.lyricSpaceBlock}>
            <Image
              style={styles.lyricChildLayout}
              contentFit="cover"
              source={require("../assets/ellipse-43.png")}
            />
            <Text style={[styles.em139, styles.emTypo]}>đi</Text>
          </View>
          <View style={styles.lyricSpaceBlock}>
            <Image
              style={styles.lyricChildLayout}
              contentFit="cover"
              source={require("../assets/ellipse-43.png")}
            />
            <Text style={[styles.em139, styles.emTypo]}>{`chim `}</Text>
          </View>
          <View style={styles.lyricSpaceBlock}>
            <Image
              style={styles.lyricChildLayout}
              contentFit="cover"
              source={require("../assets/ellipse-43.png")}
            />
            <Text style={[styles.em139, styles.emTypo]}>,</Text>
          </View>
          <View style={styles.lyricSpaceBlock}>
            <Image
              style={styles.lyricChildLayout}
              contentFit="cover"
              source={require("../assets/ellipse-43.png")}
            />
            <Text style={[styles.em139, styles.emTypo]}>hót</Text>
          </View>
          <View style={styles.lyricSpaceBlock}>
            <Image
              style={styles.lyricChildLayout}
              contentFit="cover"
              source={require("../assets/ellipse-43.png")}
            />
            <Text style={[styles.em139, styles.emTypo]}>đi</Text>
          </View>
          <View style={styles.lyricSpaceBlock}>
            <Image
              style={styles.lyricChildLayout}
              contentFit="cover"
              source={require("../assets/ellipse-43.png")}
            />
            <Text style={[styles.em139, styles.emTypo]}>chim</Text>
          </View>
        </View>
        <View style={[styles.lyricWordParent92, styles.lyricParentFlexBox]}>
          <View style={styles.lyricSpaceBlock}>
            <Image
              style={styles.lyricChildLayout}
              contentFit="cover"
              source={require("../assets/ellipse-43.png")}
            />
            <Text style={[styles.em139, styles.emTypo]}>Hót</Text>
          </View>
          <View style={styles.lyricSpaceBlock}>
            <Image
              style={styles.lyricChildLayout}
              contentFit="cover"
              source={require("../assets/ellipse-43.png")}
            />
            <Text style={[styles.em139, styles.emTypo]}>cho</Text>
          </View>
          <View style={styles.lyricSpaceBlock}>
            <Image
              style={styles.lyricChildLayout}
              contentFit="cover"
              source={require("../assets/ellipse-43.png")}
            />
            <Text style={[styles.em139, styles.emTypo]}>đời</Text>
          </View>
          <View style={styles.lyricSpaceBlock}>
            <Image
              style={styles.lyricChildLayout}
              contentFit="cover"
              source={require("../assets/ellipse-43.png")}
            />
            <Text style={[styles.em139, styles.emTypo]}>nhọc</Text>
          </View>
          <View style={styles.lyricSpaceBlock}>
            <Image
              style={styles.lyricChildLayout}
              contentFit="cover"
              source={require("../assets/ellipse-43.png")}
            />
            <Text style={[styles.em139, styles.emTypo]}>nhằn</Text>
          </View>
          <View style={styles.lyricSpaceBlock}>
            <Image
              style={styles.lyricChildLayout}
              contentFit="cover"
              source={require("../assets/ellipse-43.png")}
            />
            <Text style={[styles.em139, styles.emTypo]}>{`trôi `}</Text>
          </View>
          <View style={styles.lyricSpaceBlock}>
            <Image
              style={styles.lyricChildLayout}
              contentFit="cover"
              source={require("../assets/ellipse-44.png")}
            />
            <Text style={[styles.em139, styles.emTypo]}>xa</Text>
          </View>
        </View>
      </View>
      <View style={[styles.property14, styles.propertySpaceBlock]}>
        <View style={[styles.count7, styles.countParentFlexBox]}>
          <View style={[styles.lyricWord, styles.lyricSpaceBlock]}>
            <Image
              style={styles.lyricChildLayout}
              contentFit="cover"
              source={require("../assets/ellipse-42.png")}
            />
            <Text style={[styles.em, styles.emTypo]}>3</Text>
          </View>
          <View style={[styles.lyricWord, styles.lyricSpaceBlock]}>
            <Image
              style={styles.lyricChildLayout}
              contentFit="cover"
              source={require("../assets/ellipse-42.png")}
            />
            <Text style={[styles.em, styles.emTypo]}>3</Text>
          </View>
          <View style={[styles.lyricWord, styles.lyricSpaceBlock]}>
            <Image
              style={styles.lyricChildLayout}
              contentFit="cover"
              source={require("../assets/ellipse-42.png")}
            />
            <Text style={[styles.em, styles.emTypo]}>3</Text>
          </View>
          <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
            <Image
              style={[styles.ellipseIcon, styles.lyricChildLayout]}
              contentFit="cover"
              source={require("../assets/ellipse-43.png")}
            />
            <Text style={[styles.em3, styles.em3Typo]}>3</Text>
          </View>
          <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
            <Image
              style={[styles.ellipseIcon, styles.lyricChildLayout]}
              contentFit="cover"
              source={require("../assets/ellipse-43.png")}
            />
            <Text style={[styles.em3, styles.em3Typo]}>2</Text>
          </View>
          <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
            <Image
              style={[styles.ellipseIcon, styles.lyricChildLayout]}
              contentFit="cover"
              source={require("../assets/ellipse-43.png")}
            />
            <Text style={[styles.em3, styles.em3Typo]}>1</Text>
          </View>
        </View>
        <View style={styles.frameParent}>
          <View style={styles.countParentFlexBox}>
            <View style={styles.lyricSpaceBlock}>
              <Image
                style={styles.lyricChildLayout}
                contentFit="cover"
                source={require("../assets/ellipse-43.png")}
              />
              <Text style={[styles.em139, styles.emTypo]}>Em</Text>
            </View>
            <View style={styles.lyricSpaceBlock}>
              <Image
                style={styles.lyricChildLayout}
                contentFit="cover"
                source={require("../assets/ellipse-43.png")}
              />
              <Text style={[styles.em139, styles.emTypo]}>nghe</Text>
            </View>
            <View style={styles.lyricSpaceBlock}>
              <Image
                style={styles.lyricChildLayout}
                contentFit="cover"
                source={require("../assets/ellipse-41.png")}
              />
              <Text style={[styles.em139, styles.emTypo]}>{`gì `}</Text>
            </View>
            <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
              <Image
                style={styles.lyricChildLayout}
                contentFit="cover"
                source={require("../assets/ellipse-43.png")}
              />
              <Text style={[styles.em6, styles.em3Typo]}>không</Text>
            </View>
            <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
              <Image
                style={styles.lyricChildLayout}
                contentFit="cover"
                source={require("../assets/ellipse-43.png")}
              />
              <Text style={[styles.em6, styles.em3Typo]}>hỡi</Text>
            </View>
            <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
              <Image
                style={styles.lyricChildLayout}
                contentFit="cover"
                source={require("../assets/ellipse-43.png")}
              />
              <Text style={[styles.em6, styles.em3Typo]}>em</Text>
            </View>
          </View>
          <View style={styles.lyricFlexBox}>
            <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
              <Image
                style={styles.lyricChildLayout}
                contentFit="cover"
                source={require("../assets/ellipse-43.png")}
              />
              <Text style={[styles.em6, styles.em3Typo]}>Con</Text>
            </View>
            <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
              <Image
                style={styles.lyricChildLayout}
                contentFit="cover"
                source={require("../assets/ellipse-43.png")}
              />
              <Text style={[styles.em6, styles.em3Typo]}>chim</Text>
            </View>
            <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
              <Image
                style={styles.lyricChildLayout}
                contentFit="cover"
                source={require("../assets/ellipse-43.png")}
              />
              <Text style={[styles.em6, styles.em3Typo]}>{`nó `}</Text>
            </View>
            <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
              <Image
                style={styles.lyricChildLayout}
                contentFit="cover"
                source={require("../assets/ellipse-43.png")}
              />
              <Text style={[styles.em6, styles.em3Typo]}>hót</Text>
            </View>
            <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
              <Image
                style={styles.lyricChildLayout}
                contentFit="cover"
                source={require("../assets/ellipse-43.png")}
              />
              <Text style={[styles.em6, styles.em3Typo]}>vang</Text>
            </View>
            <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
              <Image
                style={styles.lyricChildLayout}
                contentFit="cover"
                source={require("../assets/ellipse-43.png")}
              />
              <Text style={[styles.em6, styles.em3Typo]}>đầu</Text>
            </View>
            <View style={[styles.lyricWord3, styles.lyricSpaceBlock]}>
              <Image
                style={styles.lyricChildLayout}
                contentFit="cover"
                source={require("../assets/ellipse-43.png")}
              />
              <Text style={[styles.em6, styles.em3Typo]}>hè</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  propertySpaceBlock: {
    paddingVertical: 0,
    paddingHorizontal: Padding.p_41xl,
    width: 1037,
    position: "absolute",
    justifyContent: "flex-end",
  },
  lyricSpaceBlock: {
    padding: Padding.p_3xs,
    alignItems: "center",
  },
  emTypo: {
    marginTop: 32,
    textAlign: "center",
    color: Color.oran2,
    fontFamily: FontFamily.sFProDisplay,
    fontWeight: "800",
  },
  lyricChildLayout: {
    height: 33,
    width: 33,
  },
  em3Typo: {
    color: Color.white,
    marginTop: 32,
    textAlign: "center",
    fontFamily: FontFamily.sFProDisplay,
  },
  propertyPosition3: {
    left: 1221,
    paddingVertical: 0,
    paddingHorizontal: Padding.p_41xl,
    justifyContent: "flex-end",
    width: 1037,
    position: "absolute",
  },
  em3Layout: {
    lineHeight: 208,
    fontSize: FontSize.size_81xl,
  },
  propertyPosition2: {
    left: 2390,
    paddingVertical: 0,
    paddingHorizontal: Padding.p_41xl,
    justifyContent: "flex-end",
    width: 1037,
    position: "absolute",
  },
  countParentFlexBox: {
    justifyContent: "center",
    alignItems: "flex-end",
    flexDirection: "row",
  },
  lyricFlexBox: {
    marginTop: 50,
    alignItems: "flex-end",
    flexDirection: "row",
  },
  propertyPosition1: {
    left: 30,
    paddingVertical: 0,
    paddingHorizontal: Padding.p_41xl,
    justifyContent: "flex-end",
    width: 1037,
    position: "absolute",
  },
  lyricParentFlexBox: {
    alignItems: "flex-end",
    flexDirection: "row",
  },
  propertyPosition: {
    left: 40,
    paddingVertical: 0,
    paddingHorizontal: Padding.p_41xl,
    justifyContent: "flex-end",
    width: 1037,
    position: "absolute",
  },
  em: {
    display: "none",
    lineHeight: 104,
    fontSize: FontSize.size_31xl,
    marginTop: 32,
    textAlign: "center",
    color: Color.oran2,
    fontFamily: FontFamily.sFProDisplay,
  },
  lyricWord: {
    opacity: 0.5,
    justifyContent: "flex-end",
  },
  ellipseIcon: {
    display: "none",
  },
  em3: {
    fontWeight: "500",
    lineHeight: 208,
    fontSize: FontSize.size_81xl,
  },
  lyricWord3: {
    opacity: 0.5,
  },
  em6: {
    fontWeight: "800",
    color: Color.white,
    lineHeight: 104,
    fontSize: FontSize.size_31xl,
  },
  frameParent: {
    marginTop: 40,
    justifyContent: "flex-end",
  },
  property11: {
    left: 20,
    paddingHorizontal: Padding.p_41xl,
    width: 1037,
    position: "absolute",
    top: 20,
  },
  lyricWord19: {
    justifyContent: "flex-end",
  },
  property112: {
    top: 20,
  },
  property114: {
    top: 603,
  },
  em60: {
    marginTop: 32,
    textAlign: "center",
    color: Color.oran2,
    fontFamily: FontFamily.sFProDisplay,
    fontWeight: "800",
  },
  property116: {
    top: 1191,
  },
  property113: {
    top: 20,
  },
  property115: {
    top: 603,
  },
  lyricWordChild116: {
    opacity: 0,
    display: "none",
  },
  property117: {
    top: 1191,
  },
  count7: {
    display: "none",
  },
  em139: {
    lineHeight: 104,
    fontSize: FontSize.size_31xl,
    marginTop: 32,
    textAlign: "center",
    color: Color.oran2,
    fontFamily: FontFamily.sFProDisplay,
  },
  property12: {
    top: 537,
    left: 20,
    paddingHorizontal: Padding.p_41xl,
    width: 1037,
    position: "absolute",
  },
  property13: {
    top: 859,
    left: 20,
    paddingHorizontal: Padding.p_41xl,
    width: 1037,
    position: "absolute",
  },
  property15: {
    top: 1503,
    left: 20,
    paddingHorizontal: Padding.p_41xl,
    width: 1037,
    position: "absolute",
  },
  property16: {
    top: 1825,
    left: 20,
    paddingHorizontal: Padding.p_41xl,
    width: 1037,
    position: "absolute",
  },
  property17: {
    top: 2147,
    left: 20,
    paddingHorizontal: Padding.p_41xl,
    width: 1037,
    position: "absolute",
  },
  property18: {
    top: 2469,
    left: 20,
    paddingHorizontal: Padding.p_41xl,
    width: 1037,
    position: "absolute",
  },
  lyricWordParent23: {
    marginTop: 40,
    opacity: 0.5,
  },
  property19Inner: {
    marginTop: 40,
    alignItems: "center",
    justifyContent: "flex-end",
  },
  property19: {
    top: 2791,
    left: 20,
    paddingHorizontal: Padding.p_41xl,
    width: 1037,
    position: "absolute",
  },
  lyricWordParent25: {
    opacity: 0.5,
  },
  property110: {
    top: 3113,
    left: 20,
    paddingHorizontal: Padding.p_41xl,
    width: 1037,
    position: "absolute",
  },
  property111: {
    top: 3435,
    left: 20,
    paddingHorizontal: Padding.p_41xl,
    width: 1037,
    position: "absolute",
  },
  property1121: {
    top: 3757,
    left: 20,
    paddingHorizontal: Padding.p_41xl,
    width: 1037,
    position: "absolute",
  },
  property1131: {
    top: 4079,
    left: 20,
    paddingHorizontal: Padding.p_41xl,
    width: 1037,
    position: "absolute",
  },
  property1141: {
    top: 4401,
    left: 20,
    paddingHorizontal: Padding.p_41xl,
    width: 1037,
    position: "absolute",
  },
  lyricWordParent35: {
    marginTop: 40,
  },
  property1151: {
    top: 4723,
    left: 20,
    paddingHorizontal: Padding.p_41xl,
    width: 1037,
    position: "absolute",
  },
  property1161: {
    top: 5045,
    left: 20,
    paddingHorizontal: Padding.p_41xl,
    width: 1037,
    position: "absolute",
  },
  lyricWordParent40: {
    opacity: 0.5,
  },
  property1171: {
    top: 5367,
    left: 20,
    paddingHorizontal: Padding.p_41xl,
    width: 1037,
    position: "absolute",
  },
  property118: {
    top: 5689,
    left: 20,
    paddingHorizontal: Padding.p_41xl,
    width: 1037,
    position: "absolute",
  },
  property119: {
    top: 6011,
    left: 20,
    paddingHorizontal: Padding.p_41xl,
    width: 1037,
    position: "absolute",
  },
  property120: {
    top: 6333,
    left: 20,
    paddingHorizontal: Padding.p_41xl,
    width: 1037,
    position: "absolute",
  },
  property121: {
    top: 6655,
    left: 20,
    paddingHorizontal: Padding.p_41xl,
    width: 1037,
    position: "absolute",
  },
  property122: {
    top: 6977,
    left: 20,
    paddingHorizontal: Padding.p_41xl,
    width: 1037,
    position: "absolute",
  },
  property123: {
    top: 7299,
    left: 20,
    paddingHorizontal: Padding.p_41xl,
    width: 1037,
    position: "absolute",
  },
  property124: {
    top: 7621,
    left: 20,
    paddingHorizontal: Padding.p_41xl,
    width: 1037,
    position: "absolute",
  },
  property125: {
    top: 7943,
    left: 20,
    paddingHorizontal: Padding.p_41xl,
    width: 1037,
    position: "absolute",
  },
  property126: {
    top: 8265,
    left: 20,
    paddingHorizontal: Padding.p_41xl,
    width: 1037,
    position: "absolute",
  },
  property127: {
    top: 8587,
    left: 20,
    paddingHorizontal: Padding.p_41xl,
    width: 1037,
    position: "absolute",
  },
  property128: {
    top: 8944,
    left: -3,
    paddingHorizontal: Padding.p_41xl,
    width: 1037,
    position: "absolute",
  },
  property129: {
    top: 9301,
  },
  property130: {
    top: 9623,
  },
  property131: {
    top: 9945,
  },
  property132: {
    top: 10267,
  },
  property133: {
    top: 10589,
  },
  property134: {
    top: 10911,
  },
  property135: {
    top: 11233,
  },
  property136: {
    top: 11545,
  },
  property137: {
    top: 11857,
  },
  property138: {
    top: 12169,
  },
  property139: {
    top: 12481,
  },
  property140: {
    top: 12793,
  },
  property141: {
    top: 13105,
  },
  lyricWordParent90: {
    marginTop: 40,
    opacity: 0.5,
  },
  property142: {
    top: 13417,
  },
  lyricWordParent92: {
    marginTop: 40,
  },
  property143: {
    top: 13748,
  },
  property144: {
    top: 14060,
  },
  property145: {
    top: 14372,
  },
  property146: {
    top: 14684,
  },
  property147: {
    top: 14996,
  },
  property148: {
    top: 15308,
  },
  property149: {
    top: 15620,
  },
  property150: {
    top: 15932,
  },
  property151: {
    top: 16244,
  },
  property152: {
    top: 16556,
  },
  property14: {
    top: 1181,
    left: 20,
    paddingHorizontal: Padding.p_41xl,
    width: 1037,
    position: "absolute",
  },
  lyric: {
    borderRadius: Border.br_8xs,
    backgroundColor: Color.black,
    borderStyle: "dashed",
    borderColor: Color.colorBlueviolet,
    borderWidth: 1,
    width: 4340,
    height: 17704,
    overflow: "hidden",
  },
});

export default Lyric;
