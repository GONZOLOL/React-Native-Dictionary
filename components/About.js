import * as React from "react";
import { View, Text } from "react-native";
import { mainStyles as styles } from "../styles/mainStyles";

export function About() {
  return (
    <>
      <View style={styles.title}>
        <Text style={styles.text}>{"About page"}</Text>
      </View>
    </>
  );
}
