import React, { useEffect } from "react";
import {
  View,
  StyleSheet,
  TouchableWithoutFeedback,
  Animated,
  Dimensions,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

// import { Container } from './styles';
export const tabHeight = 84;

export const StaticTabbar = ({ tabs, animatedValue }) => {
  const { width } = Dimensions.get("window");
  const tabWidth = width / tabs.length;
  let values = [];

  values = tabs.map((tab, index) => new Animated.Value(index === 0 ? 1 : 0));

  const handleButton = (index) => {
    Animated.sequence([
      ...values.map((value) =>
        Animated.timing(value, {
          toValue: 0,
          duration: 100,
          useNativeDriver: true,
        })
      ),
      Animated.parallel([
        Animated.spring(values[index], {
          toValue: 1,
          useNativeDriver: true,
        }),
        Animated.spring(animatedValue, {
          toValue: -width + tabWidth * index,
          useNativeDriver: true,
        }),
      ]),
    ]).start();
  };

  return (
    <View style={styles.container}>
      {tabs.map(({ name }, index) => {
        const activeValue = values[index];

        const opacity = animatedValue.interpolate({
          inputRange: [
            -width + tabWidth * (index - 1),
            -width + tabWidth * index,
            -width + tabWidth * (index + 1),
          ],
          outputRange: [1, 0, 1],
          extrapolate: "clamp",
        });

        const translateY = activeValue.interpolate({
          inputRange: [0, 1],
          outputRange: [tabHeight, 0],
        });

        return (
          <React.Fragment key={index}>
            <TouchableWithoutFeedback onPress={() => handleButton(index)}>
              <Animated.View style={[styles.tab, { opacity }]}>
                <Icon size={25} name={name} />
              </Animated.View>
            </TouchableWithoutFeedback>
            <Animated.View
              style={{
                position: "absolute",
                top: -8,
                width: tabWidth,
                left: tabWidth * index,
                height: tabHeight,
                justifyContent: "center",
                alignItems: "center",
                transform: [{ translateY }],
              }}
            >
              <View style={styles.circle}>
                <Icon size={35} name={name} />
              </View>
            </Animated.View>
          </React.Fragment>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
  tab: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    height: tabHeight,
  },
  circle: {
    width: 60,
    height: 60,
    borderRadius: 40,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },
});
