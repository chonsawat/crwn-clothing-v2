import { useState, createContext } from "react";

export const CardContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => null,
});

export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const value = {
    isCartOpen,
    setIsCartOpen,
  };
  return <CardContext.Provider value={value}>{children}</CardContext.Provider>;
};
