// context/CartContext.tsx

"use client";

import { createContext, useContext, useState, ReactNode } from "react";

// Define the product type
type Product = {
  _id: string;
  name: string;
  price: number;
  image: string;
  quantity: number;
};

interface CartContextType {
  cart: Product[];
  addToCart: (product: Product) => void;
  removeFromCart: (productId: string) => void;
  clearCart: () => void;
  checkout: () => void;  // Checkout function added here
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cart, setCart] = useState<Product[]>([]);

  const addToCart = (product: Product) => {
    setCart((prevCart) => {
      const existingProduct = prevCart.find((item) => item._id === product._id);
      if (existingProduct) {
        return prevCart.map((item) =>
          item._id === product._id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  };

  const removeFromCart = (productId: string) => {
    setCart((prevCart) => prevCart.filter((product) => product._id !== productId));
  };

  const clearCart = () => {
    setCart([]);
  };

  // Checkout function: clears the cart and logs the order
  const checkout = () => {
    if (cart.length === 0) {
      console.log("Your cart is empty!");
      return;
    }

    // Simulate an order submission (Replace with actual API call if needed)
    console.log("Checkout successful! Order details:", cart);
    setCart([]);  // Clear the cart after checkout
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart, checkout }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = (): CartContextType => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
