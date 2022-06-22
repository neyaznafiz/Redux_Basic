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
        payload: {name: 'CR7'}
        // payload: user
    }
}

decrementCounterAction()


// 1. state
// 2. dispatch action
// 3. reducer
// 4. store