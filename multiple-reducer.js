
//--------- productReducer ----------

// products constants
const GET_PRODUCTS = 'GET_PRODUCTS'
const ADD_PRODUCTS = 'ADD_PRODUCTS'



const initialProductReducer = {
    products: ['sugur', 'salt'],
    numberofProducts: 2,
}

const getProducts = () => {
    return {
        type: GET_PRODUCTS,
    }
}

const addProducts = (product) => {
    return {
        type: ADD_PRODUCTS,
        payload: product,
    }
}



//-------- cartReducer ------------