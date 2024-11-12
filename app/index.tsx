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
      <Link href={"/about"}>Go to the About Screen</Link>
      <Link href={"/settings"}>Go to the Setting Screen</Link>
      <Link href={"/settings/options"}>Go to the Setting Options</Link>
      <Link href={"/products"}>Go to the Products</Link>
    </View>
  );
}
