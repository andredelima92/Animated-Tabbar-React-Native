import React from "react";
import {
  SafeAreaView,
  Dimensions,
  StyleSheet,
  Animated,
  View,
} from "react-native";
import Svg, { Path } from "react-native-svg";
import * as shape from "d3-shape";
import Icon from "react-native-vector-icons/FontAwesome";

// import { Container } from './styles';

export default function Tabbar() {
  const { width } = Dimensions.get("window");
  const height = 84;

  const AnimatedSvg = Animated.createAnimatedComponent(Svg);

  const tabs = [
    { name: "cc-visa" },
    { name: "cc-mastercard" },
    { name: "cc-amex" },
    { name: "cc-paypal" },
  ];

  const tabWidth = width / tabs.length;

  const left = shape
    .line()
    .x((d) => d.x)
    .y((d) => d.y)([
    { x: 0, y: 0 },
    { x: width, y: 0 },
  ]);

  const right = shape
    .line()
    .x((d) => d.x)
    .y((d) => d.y)([
    { x: width + tabWidth, y: 0 },
    { x: width * 2, y: height },
    { x: 0, y: height },
    { x: 0, y: 0 },
  ]);

  const tab = shape
    .line()
    .x((d) => d.x)
    .y((d) => d.y)
    .curve(shape.curveBasis)([
    { x: width, y: 0 },
    { x: width + 5, y: 0 },
    { x: width + 10, y: 10 },
    { x: width + 15, y: height },
    { x: width + tabWidth - 15, y: height },
    { x: width + tabWidth - 10, y: 10 },
    { x: width + tabWidth - 5, y: 0 },
    { x: width + tabWidth, y: 0 },
  ]);

  const d = `${left} ${tab} ${right}`;

  return (
    <>
      <View {...{ width, height }}>
        <AnimatedSvg width={width * 2} {...{ height }}>
          <Path {...{ d }} fill="white" />
        </AnimatedSvg>
        <View style={StyleSheet.absoluteFill}>

        </View>
      </View>
      <SafeAreaView style={styles.safeArea} />
    </>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: "#fff",
  },
});
