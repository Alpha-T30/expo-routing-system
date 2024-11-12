import { Stack, Tabs } from "expo-router";

export default function TabsLayout() {
  return (
    <Tabs>
      <Tabs.Screen name="index"></Tabs.Screen>
      <Tabs.Screen
        name="products"
        options={{ headerShown: false }}
      ></Tabs.Screen>
      <Tabs.Screen name="about"></Tabs.Screen>
    </Tabs>
  );
}
