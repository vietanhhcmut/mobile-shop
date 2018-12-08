import React from 'react';

export default React.createContext({
    cart: [],
    addToCart: false,
    totalPrice: 0,
    handleAddToCart: () => {},
    handleChangeQuantity: () => {},
    handleDeleteCartItem: () => {},
    handleGetCart: () => {}
});