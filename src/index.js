import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App/App';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';

const cart = (state = [], action) => {
    if(action.type === "REMOVE_PIZZA"){
        console.log("cart has revieced REMOVE_PIZZA payload")
        return state.filter(state => state !== action.payload);
    }
    if(action.type === "ADD_PIZZA"){
        console.log("cart has recieved ADD_PIZZA payload", action.payload)
        return [...state, action.payload]
    }
    if(action.type === 'CLEAR_ORDER'){
        return []
    }
    return state
}

const cartTotal = (state = 0, action) => {
    if (action.type === "ADD_COST") {
        console.log('in add cost', action.payload)
        return state + Number(action.payload)
    }
    if (action.type === "REMOVE_COST") {
        return state - Number(action.payload)
    }
    return state
}




const reduxStore = createStore(
    combineReducers({
        cart,
        cartTotal
        // reducers go here
    }),
    applyMiddleware(logger)
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Provider store={reduxStore}>
            <App />
        </Provider>
    </React.StrictMode>
);
