import * as React from "react";
import { TextInput, View } from "react-native";
import Logo from "../media/logo.svg";
import { mainStyles as styles } from "../styles/mainStyles";

export function Home() {
  return (
    <>
      <View style={styles.header}>
        <Logo width="20%" height="20%" />
        <TextInput
          style={{ height: 40 }}
          placeholder="Type here to search a word..."
        />
      </View>
    </>
  );
}
