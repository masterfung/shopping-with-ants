export const addItemToCart = (cartItems, cartItemToAdd) => {
  const existingCartItem = cartItems.find(cartItem => cartItem.id === cartItemToAdd.id);

  if (existingCartItem) {
    return cartItems.map(cartItem => 
      cartItem.id === cartItemToAdd.id 
      ? { ...cartItem, quantity: cartItem.quantity + 1 }
      : cartItem
    );
  }

  return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
};

export const decrementItemQuantityFromCart = (cartItems, cartItemToDecrement) => {
  const existingCartItem = cartItems.find(cartItem => cartItem.id === cartItemToDecrement.id);

  if (existingCartItem.quantity > 1) {
    return cartItems.map(cartItem => 
      cartItem.id === cartItemToDecrement.id 
      ? { ...cartItem, quantity: cartItem.quantity - 1}
      : cartItem
    );
  }

  return cartItems.filter(cartItem => cartItem.id !== cartItemToDecrement.id);
};

export const incrementItemQuantityFromCart = (cartItems, cartItemToIncrement) => {
  const existingCartItem = cartItems.find(cartItem => cartItem.id === cartItemToIncrement.id);

  if (existingCartItem) {
    return cartItems.map(cartItem => 
      cartItem.id === cartItemToIncrement.id 
      ? { ...cartItem, quantity: cartItem.quantity + 1}
      : cartItem
    );
  }
}