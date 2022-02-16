import {createStore, compose, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import { Reducer } from '../reducer/reducer';

    
 const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

    export const store = createStore(
        Reducer,
        composeEnhancers(
            applyMiddleware(thunk)
        )
    )