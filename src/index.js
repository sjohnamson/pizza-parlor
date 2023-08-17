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
    return state
}


const reduxStore = createStore(
    combineReducers({
        cart
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
