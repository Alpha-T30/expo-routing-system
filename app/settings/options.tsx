import { View, Text } from "react-native";
import React from "react";
import { Link } from "expo-router";

const Options = () => {
  return (
    <View>
      <Text>Options</Text>
      <Link href={"/"}>Go to main screen</Link>
    </View>
  );
};

export default Options;
