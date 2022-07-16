const { createStore, combineReducers } = require("redux")

//--------- productReducer ----------

// products constants
const GET_PRODUCTS = 'GET_PRODUCTS'
const ADD_PRODUCT = 'ADD_PRODUCT'


// product state
const initialProductState = {
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
const productReducer = (state = initialProductState, action) => {
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
           return state;
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


// cartReducer
const cartReducer = (state = initialCartState, action) => {
    switch (action.type) {
        case GET_CART_ITEMS:

            return {
                ...state,
            };

        case ADD_CART_ITEM:

            return {
                cart: [...state.cart, action.payload],
                numberOfProducts: state.numberOfProducts + 1,
            };

        default:
           return state;
    }
}



// store
const rootReducer = combineReducers({
    productR: productReducer,
    cartR: cartReducer,
})

const store = createStore(rootReducer)
store.subscribe(() => {
    console.log(store.getState());
})

// for product
store.dispatch(getProducts())
store.dispatch(addProduct('pen'))

// for cart
store.dispatch(getCart())
store.dispatch(addCart('pen'))