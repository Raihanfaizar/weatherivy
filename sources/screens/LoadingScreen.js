import * as React from "react";
import { StyleSheet, View, ActivityIndicator } from "react-native";

export default function LoadingScreen() {
  return (
    <View style={styles.component}>
      <ActivityIndicator color="#1d4ed8" />
    </View>
  );
}

const styles = StyleSheet.create({
  component: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});