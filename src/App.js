import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';

import Tabbar from "./components/Tabbar";

export default function App() {
  return (
    <View style={styles.container}>
      <Tabbar />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#9400d3",
    justifyContent: "flex-end",
  },
});
