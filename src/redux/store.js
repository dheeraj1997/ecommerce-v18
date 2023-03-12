import {applyMiddleware, compose, createStore} from "redux";
import rootReducer from "./reducers";
import createSagaMiddleware from 'redux-saga';
import rootSaga from "./sagas/rootSaga";

const sagaMiddleware = createSagaMiddleware();
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const enhancer = composeEnhancer(applyMiddleware(sagaMiddleware))


const store = createStore(rootReducer, enhancer);
sagaMiddleware.run(rootSaga);
export default store;
