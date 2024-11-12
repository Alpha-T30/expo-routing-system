import { View, Text } from "react-native";
import React from "react";
import { Link } from "expo-router";

const Settings = () => {
  return (
    <View>
      <Text>Setting Index Screen</Text>
      <Link href={"/"}> Go to the main home screen</Link>
    </View>
  );
};

export default Settings;
