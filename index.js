const {createSrite, createStore} = require("redux")


// defining constants
const INCREMENT = 'INCRIMENT'
const DECREMENT = 'DECRIMENT'
const ADD_USER = 'ADD_USER'

// state
const initialCounterState = {
    count: 0,

}

const initialUsersState = {
    users: [
        { name: 'CR7' }
    ]
}

// action --- Object (type and payload)

// INCRIMENT COUNTER
const incrementCounterAction = () => {
    return {
        type: INCREMENT,
    }
}

incrementCounterAction()

// DECREMENT COUNTER
const decrementCounterAction = () => {
    return {
        type: DECREMENT,
    }
}

decrementCounterAction()

//action for user 
const addUserAction = (/*user*/) => {
    return {
        type: ADD_USER,
        payload: { name: 'CR7' }
        // payload: user
    }
}

decrementCounterAction()

// create reducer for counter
const counterReducer = (state = initialCounterState, action) => {

    switch (action.type) {
        case INCREMENT:
            return {
                ...state,
                count: state.count + 1
            }

        case DECREMENT:
            return {
                ...state,
                count: state.count - 1
            }

        default:
            state;
    }
}


// create redux store
const store = createStore(counterReducer)

store.subscribe(()=>{
    console.log(store.getState());
})

// duspatch action
store.dispatch(incrementCounterAction())
store.dispatch(incrementCounterAction())
store.dispatch(incrementCounterAction())
store.dispatch(decrementCounterAction())




// -------- note -------------
// 1. state
// 2. dispatch action
// 3. reducer (reducer is a pure function, it handle all of our logic based on action type.)
// 4. store --- (three method of store: 1. getStore() , 2. dispatch() , 3. subscribe() )