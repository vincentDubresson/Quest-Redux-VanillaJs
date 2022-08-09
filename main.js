const incrementAction = {
    type: 'INCREMENT'
}

const decrementAction = {
    type: 'DECREMENT'
}

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

// STORE
const { createStore } = Redux;
const store = createStore(counterReducer);



/* console.log(counterReducer(0, incrementAction));
console.log(counterReducer(4, decrementAction));
console.log(5); */