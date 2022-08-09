if (document.getElementById('counter-render')) {

    const counter = document.getElementById('counter-render');
    const incrementButton = document.getElementById('button-increment');
    const decrementButton = document.getElementById('button-decrement');
    const incrementByTenButton = document.getElementById('button-increment-10');
    const decrementByTenButton = document.getElementById('button-decrement-10');
    const resetButton = document.getElementById('reset');
    
    // Creation of 2 const objects used in counterReducer function
    const incrementAction = {
        type: 'INCREMENT'
    }
    
    const decrementAction = {
        type: 'DECREMENT'
    }

    const incrementByTenAction = {
        type: 'INCREMENT10'
    }
    
    const decrementByTenAction = {
        type: 'DECREMENT10'
    }
    const resetAction = {
        type: 'RESET'
    }
    
    // Creation of a function used to increment or decrement the state
    const initialState = 0;
    const counterReducer = (state = initialState, action) => {
        switch (action.type) {
            case 'INCREMENT':
                return state + 1;
            case 'DECREMENT':
                return state - 1;
            case 'INCREMENT10':
                return state + 10;
            case 'DECREMENT10':
                return state - 10;
            case 'RESET':
                return 0;
            default:
                return state;
        }
    }
    
    
    // Creation of a store with Redux
    const { createStore } = Redux;
    const store = createStore(counterReducer);
    
    // Creation of a function used to display statement
    const render = () => {
        counter.innerText = store.getState();
    }
    render();
    store.subscribe(render);

    // Using DOM for logic setup

    // Functions to increment or decrement the counter
    incrementButton.addEventListener('click', () => {
        store.dispatch(incrementAction);
    });

    decrementButton.addEventListener('click', () => {
        store.dispatch(decrementAction);
    })

    incrementByTenButton.addEventListener('click', () => {
        store.dispatch(incrementByTenAction);
    });

    decrementByTenButton.addEventListener('click', () => {
        store.dispatch(decrementByTenAction);
    });

    resetButton.addEventListener('click', () => {
        store.dispatch(resetAction);
    });

}

