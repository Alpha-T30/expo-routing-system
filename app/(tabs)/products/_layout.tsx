import { Stack } from "expo-router";

export default function ProductsLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          title: "Product List",
          headerShown: true,
        }}
      />

      <Stack.Screen
        name="[id]"
        options={{
          title: "Product Details",
          headerShown: true,
        }}
      />
    </Stack>
  );
}
