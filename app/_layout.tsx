import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />

      <Stack.Screen name="login" options={{ title: "LogIn Screen" }} />
      <Stack.Screen
        name="settings"
        options={{ headerShown: false }}
      ></Stack.Screen>
    </Stack>
  );
}
