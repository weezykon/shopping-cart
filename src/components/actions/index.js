export const addToCart = (id) => {
    return {
        type: 'ADD_TO_CART',
        id
    };
};

export const removeItem = (id) => {
    return {
        type: 'REMOVE',
        id
    };
};

export const addQuantity = (id) => {
    return {
        type: 'ADD_QTY',
        id
    };
};

export const subtractQuantity = (id) => {
    return {
        type: 'SUB_QTY',
        id
    };
};
