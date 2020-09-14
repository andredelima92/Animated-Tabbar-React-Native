import React from "react";
import { SafeAreaView, Dimensions } from "react-native";
import Svg from "react-native-svg";
import * as shape from "d3-shape";
// import { Container } from './styles';

const Tabbar = () => {
  const { width } = Dimensions.get("window");
  const height = 64;
  const { Path } = Svg;
  
  const tabs = [
    {name: 'cc-visa'},
    {name: 'cc-mastercard'},
    {name: 'cc-amex'},
    {name: 'cc-paypal'},
  ]

  //.curve(shape.curveBasics)
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

  const d = `${left} ${tab} ${right}`;

  return (
    <>
      <Svg>
        <Path {...{ d }} />
      </Svg>
      <SafeAreaView />
    </>
  );
};

export default Tabbar;
