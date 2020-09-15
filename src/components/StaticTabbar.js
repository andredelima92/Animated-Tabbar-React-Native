import React from "react";
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

  const handleButton = (index) => {
    const tabWidth = width / tabs.length;

    Animated.spring(animatedValue, {
      toValue: -width + tabWidth * index,
      useNativeDriver: true,
    }).start();
  };

  return (
    <View style={styles.container}>
      {tabs.map(({ name }, index) => (
        <TouchableWithoutFeedback
          key={index}
          onPress={() => handleButton(index)}
        >
          <View style={styles.tab}>
            <Icon size={25} name={name} />
          </View>
        </TouchableWithoutFeedback>
      ))}
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
});
