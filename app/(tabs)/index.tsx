import { Link } from "expo-router";
import { Button, Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Link href={"/settings"}>Go to the Setting Screen</Link>
      <Link href={"/settings/options"}>Go to the Setting Options</Link>
    </View>
  );
}
