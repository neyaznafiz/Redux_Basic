// state - count:0
// action - increment, decrement, reset
// reducer
// store

const { createStore } = require("redux")

// variables
// const INCREMENT = 'INCREMENT'
// const INCREMENT_BY_VALUE = 'INCREMENT_BY_VALUE'
// const DECREMENT = 'DECREMENT'
// const RESET = 'RESET'

// const initialState = {
//     count: 0
// }


// const addUser = () => {
//     return {
//         type: ADD_USER
//     }
// }

// const incrementCounterAction = () => {
//     return {
//         type: INCREMENT
//     }
// }

// const decrementCounterAction = () => {
//     return {
//         type: DECREMENT
//     }
// }

// const resetCounterAction = () => {
//     return {
//         type: RESET
//     }
// }

// // using payload
// const incrementCounterByValue = (value) => {
//     return {
//         type: INCREMENT_BY_VALUE,
//         payload: value
//     }
// }


// creating reducer
// const counterReducer = (state = initialState, action) => {
//     switch (action.type) {
//         case INCREMENT:
//             return {
//                 ...state,
//                 count: state.count + 1
//             }

//         case DECREMENT:
//             return {
//                 ...state,
//                 count: state.count - 1
//             }

//         case RESET:
//             return {
//                 ...state,
//                 count: 0
//             }


//         // reducer for payload method
//         case INCREMENT_BY_VALUE:
//             return {
//                 ...state,
//                 count: state.count + action.payload
//             }

//         default:
//             state
//     }
// }


// store
// const store = createStore(counterReducer)

// store.subscribe(() => {
//     console.log(store.getState())
// })

// store.dispatch(incrementCounterAction())
// store.dispatch(incrementCounterAction())
// store.dispatch(incrementCounterAction())
// store.dispatch(decrementCounterAction())
// store.dispatch(resetCounterAction())
// store.dispatch(incrementCounterAction())

// for by value
// store.dispatch(incrementCounterByValue(5))
// store.dispatch(incrementCounterByValue(10))


// ----------------------------------------------------------------------------


const ADD_USER = 'ADD_USER'

const initialState = {
    users: ['Neyaz'],
    count: 1
}


const addUser = (user) => {
    return {
        type: ADD_USER,
        payload: user
    }
}

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_USER:
            return {
                users: [...state.users, action.payload],
                count: state.count + 1
            }

        default:
            state
    }
}

const store = createStore(userReducer)

store.subscribe(() => {
    console.log(store.getState())
})

store.dispatch(addUser('Mobalik'))
store.dispatch(addUser('Nafiz'))