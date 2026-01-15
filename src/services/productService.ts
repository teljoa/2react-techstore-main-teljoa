import type { Product, CartItem } from "../types";

const API_URL = "http://localhost:3000";

export const getProducts = async (): Promise<Product[]> => {
  // TODO: Implementar llamada a la API (GET /products)
  const response= await fetch(`${API_URL}/products`);
  if(!response.ok) throw new Error();
  const responsejson= await response.json();
  return responsejson.results as Product[]; // Placeholder
};

export const createOrder = async (order: CartItem): Promise<void> => {
  // TODO: Implementar llamada a la API (POST /orders)
  const response= await fetch(`${API_URL}/orders`);
  if(!response.ok) throw new Error();
  const imprement = order;
  const responsejson= await response.json();
  responsejson.results.push(imprement);
};