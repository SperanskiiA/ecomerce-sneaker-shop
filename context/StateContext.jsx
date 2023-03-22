import React, { createContext, useContext, useState, useEffect } from 'react';
import { toast } from 'react-hot-toast';

const Context = createContext();

export const StateContext = ({ children }) => {
  const [showCart, setShowCart] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalQuantities, setTotalQuantities] = useState(0);
  const [qty, setQty] = useState(1);

  let foundProduct;
  let index;
  //   const showCartHandler = () => setShowCart(!showCart);

  const onAdding = (product, quantity) => {
    const checkProductInCart = cartItems?.find(
      (item) => item._id === product._id
    );

    setTotalPrice(
      (prevTotalPrice) => prevTotalPrice + product.price * quantity
    );
    setTotalQuantities((prevTotalQuantity) => prevTotalQuantity + quantity);

    if (checkProductInCart) {
      const updatedCartItems = cartItems.map((item) => {
        if (item._id === product._id)
          return { ...item, quantity: item.quantity + quantity };
      });
      setCartItems(updatedCartItems);
      toast.success(`${qty} ${product.name} added to the cart`);
    } else {
      product.quantity = quantity;
      setCartItems([...cartItems, { ...product }]);
    }
  };

  const toggleCartItemsQty = (id, value) => {
    foundProduct = cartItems.find((item) => item._id === id);
    index = cartItems.findIndex((product) => product._id === id);
    const newCartItem = cartItems.filter((item) => item._id !== id);

    if (value === 'inc') {
      setCartItems([
        ...cartItems.slice(0, index),
        { ...foundProduct, quantity: foundProduct.quantity + 1 },
        ...cartItems.slice(index + 1, cartItems.length),
      ]);
      // setCartItems([
      //   { ...foundProduct, quantity: foundProduct.quantity + 1 },
      //   ...newCartItem,
      // ]);
      setTotalPrice((prev) => prev + foundProduct.price);
      setTotalQuantities((prev) => prev + 1);
    } else if (value === 'dec') {
      if (foundProduct.quantity > 1) {
        setCartItems([
          ...cartItems.slice(0, index),
          { ...foundProduct, quantity: foundProduct.quantity - 1 },
          ...cartItems.slice(index + 1, cartItems.length),
        ]);
        // setCartItems([
        //   ...newCartItem,
        //   { ...foundProduct, quantity: foundProduct.quantity - 1 },
        // ]);
        setTotalPrice((prev) => prev - foundProduct.price);
        setTotalQuantities((prev) => prev - 1);
      }
    }
  };

  const onRemove = (product) => {
    foundProduct = cartItems.find((item) => item._id === product._id);

    const newCartItem = cartItems.filter((item) => item._id !== product._id);

    setTotalPrice((prev) => prev - foundProduct.price * foundProduct.quantity);
    setTotalQuantities((prev) => prev - foundProduct.quantity);
    setCartItems(newCartItem);
  };

  const incQty = () => {
    setQty((prev) => prev + 1);
  };
  const decQty = () => {
    setQty((prev) => {
      if (prev - 1 < 1) return prev;
      return prev - 1;
    });
  };

  return (
    <Context.Provider
      value={{
        showCart,
        cartItems,
        totalPrice,
        totalQuantities,
        qty,
        incQty,
        decQty,
        onAdding,
        setShowCart,
        toggleCartItemsQty,
        onRemove,
        setCartItems,
        setTotalQuantities,
        setTotalPrice,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export const useStateContext = () => {
  return useContext(Context);
};
