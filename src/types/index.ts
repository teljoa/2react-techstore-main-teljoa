// TODO: Define la interfaz Product basándote en db.json
export interface Product {
  // Rellena esto

  id: string;
  name: string;
  price: number;
  stock: number;
  image: string
}

// TODO: Define la interfaz CartItem (Extiende de Product e incluye quantity)
export interface CartItem {
  // Rellena esto

  product: Product;
  quantity: number;
}