import { Link } from "expo-router";
import { Button, Text, View } from "react-native";

export default function About() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>This is the about screen</Text>
      <Link href={"/"}>Go to the Home Screen</Link>
    </View>
  );
}
