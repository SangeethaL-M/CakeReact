import { createContext, useState, useEffect } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  // Initialize state directly from localStorage
  const [cartItems, setCartItems] = useState(() => {
    const savedCart = localStorage.getItem('cart');
    return savedCart ? JSON.parse(savedCart) : [];
  });

  const updateQuantity = (id, delta) => {
  setCartItems((prev) =>
    prev.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + delta } : item
    )
    .filter((item) => item.quantity > 0) // Removes item if quantity is 0 or less
  );
};
  // Save to localStorage whenever cart changes
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (product) => {
  console.log("Adding product:", product); // Check if this logs the product
  setCartItems((prev) => {
    const isExisting = prev.find((item) => item.id === product.id);
    if (isExisting) {
      return prev.map((item) => 
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      );
    }
    return [...prev, { ...product, quantity: 1 }];
  });
  alert(`${product.name} added to cart!`);
};

  return (
    <CartContext.Provider value={{ cartItems, addToCart,updateQuantity }}>
      {children}
    </CartContext.Provider>
  );
};