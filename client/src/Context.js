import React from 'react';

export default React.createContext({
    cart: [],
    addToCart: false,
    handleAddToCart: () => {},
    handleChangeQuantity: () => {}
});