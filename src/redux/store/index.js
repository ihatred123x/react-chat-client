import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from '../reducer';
import { forbiddenWordsMiddleware } from '../middlewares';
import thunk from 'redux-thunk';

const storeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    rootReducer,
    storeEnhancers(applyMiddleware(forbiddenWordsMiddleware, thunk)));

export default store;