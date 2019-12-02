import {createStore, applyMiddleware, compose} from "redux";
import logger from 'redux-logger';

import rootReducer from './root-reducer';

const composeEnhancers =
    typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
            // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
        }) : compose;

const middlewares = [logger];

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(...middlewares)));

export default store;
