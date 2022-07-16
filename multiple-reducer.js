const { createStore } = require("redux")


// products constants
const GET_PRODUCTS = 'GET_PRODUCTS'
const ADD_PRODUCT = 'ADD_PRODUCT'

//--------- productReducer ----------

// action
const initialProductReducer = {
    products: ['sugur', 'salt'],
    numberOfProducts: 2,
}

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


// store
const store = createStore(productReducer)
store.subscribe(() => {
    console.log(store.getState());
})

store.dispatch(getProducts())
store.dispatch(addProduct('pen'))