const { createStore } = require("redux")

//--------- productReducer ----------

// products constants
const GET_PRODUCTS = 'GET_PRODUCTS'
const ADD_PRODUCT = 'ADD_PRODUCT'


// product state
const initialProductReducer = {
    products: ['sugur', 'salt'],
    numberOfProducts: 2,
}

// product actions
const getProducts = () => {
    return {
        type: GET_PRODUCTS,
    }
}

const addProduct = (product) => {
    return {
        type: ADD_PRODUCT,
        payload: product,
    }
}

// productReducer
const productReducer = (state = initialProductReducer, action) => {
    switch (action.type) {
        case GET_PRODUCTS:

            return {
                ...state,
            };

        case ADD_PRODUCT:

            return {
                products: [...state.products, action.payload],
                numberOfProducts: state.numberOfProducts + 1,
            };

        default:
            state;
    }
}

//-------- cartReducer ------------

// cart constants
const GET_CART_ITEMS = 'GET_CART_ITEMS'
const ADD_CART_ITEM = 'ADD_CART_ITEM'

// Cart state
const initialCartState = {
    cart: ['sugur'],
    numberOfProducts: 1,
}

// cart actions
const getCart = () => {
    return {
        type: GET_CART_ITEMS,
    }
}

const addCart = (product) => {
    return {
        type: ADD_CART_ITEM,
        payload: product,
    }
}



// store
const store = createStore(productReducer)
store.subscribe(() => {
    console.log(store.getState());
})

store.dispatch(getProducts())
store.dispatch(addProduct('pen'))