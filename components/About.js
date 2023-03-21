import * as React from "react";
import { useNavigation } from "@react-navigation/native";
import { View, Text } from "react-native";
import { mainStyles as styles } from "../styles/mainStyles";

export function About() {
  const navigation = useNavigation();

  return (
    <>
      <View style={styles.title}>
        <Text style={styles.text}>{"About page"}</Text>
      </View>
    </>
  );
}
