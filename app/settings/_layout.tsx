import { Stack } from "expo-router";

export default function SettingLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{ title: "Setting Home" }}
      ></Stack.Screen>
      <Stack.Screen
        name="options"
        options={{ title: "Setting Options" }}
      ></Stack.Screen>
    </Stack>
  );
}