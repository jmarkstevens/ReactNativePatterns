import {createStore, applyMiddleware} from 'redux';
import createLogger from 'redux-logger';

let middleware = [];

const useLogger = 1;
const loggerMiddleware = createLogger();
if (useLogger) middleware.push(loggerMiddleware);

const initialAppState = {
  currentPage: 'home',
};

function handleAction(state = initialAppState, action) {
  let _appState = Object.assign({}, state);
  switch (action.type) {
    case 'AppNavMenuAction': _appState.currentPage = action.newPage; return _appState;
    default: return state;
  }
}

const store = createStore(handleAction, applyMiddleware(...middleware));

export default store;
