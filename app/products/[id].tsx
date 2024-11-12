import { View, Text, Button } from "react-native";
import { useLocalSearchParams, router } from "expo-router";
import { products } from "@/constants/productData";

export default function ProductDetails() {
  const { id } = useLocalSearchParams<{ id: string }>(); // Capture `id` from the URL
  const product = products.find((item) => item.id === id); // Find the product by `id`

  if (!product) {
    return (
      <View style={{ padding: 20 }}>
        <Text>Product not found!</Text>
        <Button title="Go Back" onPress={() => router.back()} />
      </View>
    );
  }

  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 24 }}>{product.name}</Text>
      <Text style={{ marginVertical: 10 }}>{product.description}</Text>
      <Button title="Go Back" onPress={() => router.back()} />
    </View>
  );
}
