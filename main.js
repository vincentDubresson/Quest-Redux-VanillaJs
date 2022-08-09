// Creation of 2 const objects used in counterReducer function
const incrementAction = {
    type: 'INCREMENT'
}

const decrementAction = {
    type: 'DECREMENT'
}

// Creation of a function used to increment or decrement the state
const initialState = 0;
const counterReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return state + 1;
        case 'DECREMENT':
            return state - 1;
        default:
            return state;
    }
}


// Creation of a store with Redux
const { createStore } = Redux;
const store = createStore(counterReducer);

// Creation of a function used to display statement
const render = () => {
    return console.log(store.getState());
}

store.subscribe(render);
store.dispatch(incrementAction);
store.dispatch(decrementAction);
