import { View, Text, Button } from "react-native";
import { Link, router } from "expo-router";
import { products } from "@/constants/productData";

export default function ProductsScreen() {
  return (
    <View style={{ padding: 20 }}>
      {products.map((product) => (
        <View key={product.id} style={{ marginBottom: 10 }}>
          <Text>{product.name}</Text>
          <Link
            href={{
              pathname: "/products/[id]",
              params: { id: product.id },
            }}
          >
            View With Link
          </Link>
          <Button
            title="View With Button"
            onPress={() =>
              router.push({
                pathname: "/products/[id]",
                params: { id: product.id },
              })
            }
          ></Button>
        </View>
      ))}
    </View>
  );
}
