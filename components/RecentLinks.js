import * as React from "react";
import { View, Text } from "react-native";
import { mainStyles as styles } from "../styles/mainStyles";

export function RecentLinks() {
  return (
    <>
      <View style={styles.title}>
        <Text style={styles.text}>{"RecentLinks page"}</Text>
      </View>
    </>
  );
}
