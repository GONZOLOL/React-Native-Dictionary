import * as React from "react";
import { useNavigation } from "@react-navigation/native";
import { TextInput, Text } from "react-native";
import { mainStyles as styles } from "../styles/mainStyles";
import { useState } from "react";

export function Home() {
  const navigation = useNavigation();
  const [text, setText] = useState("");

  return (
    <>
      <Text style={[styles.text, styles.title]}>Home page</Text>
      <TextInput
        style={{ height: 40 }}
        placeholder="Type here to search a word..."
        onChangeText={(newText) => setText(newText)}
        defaultValue={text}
      />
    </>
  );
}
