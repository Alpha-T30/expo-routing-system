// app/data/productsData.ts
export interface Product {
  id: string;
  name: string;
  description: string;
  price: string;
}

export const products: Product[] = [
  {
    id: "1",
    name: "Product 1",
    description: "This is the first product",
    price: "$10",
  },
  {
    id: "2",
    name: "Product 2",
    description: "This is the second product",
    price: "$20",
  },
  {
    id: "3",
    name: "Product 3",
    description: "This is the third product",
    price: "$30",
  },
];
