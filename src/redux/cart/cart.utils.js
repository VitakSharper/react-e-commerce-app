export const addItemToCart = (cartItems, cartItemToAdd) => {
    const existingCartItem = cartItems.find(c => c.id === cartItemToAdd.id);

    if (existingCartItem) {
        return cartItems.map(c =>
            c.id === cartItemToAdd.id
                ? {...c, quantity: c.quantity + 1}
                : c
        )
    }
    return [...cartItems, {...cartItemToAdd, quantity: 1}]
};


export const clearItemFromCart = (cartItems, cartItemToClear) => {
    const existingCartItem = cartItems.find(c => c.id === cartItemToClear.id);

    if (existingCartItem) {
        return cartItems.filter(c => c.id !== cartItemToClear.id)
    }

    return [...cartItems]
};
