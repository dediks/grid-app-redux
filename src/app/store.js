import { applyMiddleware, combineReducers, createStore, compose } from 'redux';
import gridReducer from '../features/Grid/reducer';
import thunk from 'redux-thunk';

let rootReducers = combineReducers({
  grid: gridReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
let store = createStore(rootReducers, composeEnhancers(applyMiddleware(thunk)));

export default store;
