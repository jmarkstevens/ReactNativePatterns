import {createStore, applyMiddleware} from 'redux';
import thunkMiddleware from 'redux-thunk';
import {apiGetFetchData, apiSetFetchData, apiGetFetchThunkData, apiSetFetchThunkData, apiGetXMLHttpData, apiSetXMLHttpData} from './api.Actions';
import createLogger from 'redux-logger';

let middleware = [thunkMiddleware];

const useLogger = 1;
const loggerMiddleware = createLogger();
if (useLogger) middleware.push(loggerMiddleware);

const initState = {
  'fetchData': {
    'Description': 'Fetch data set',
    'setDateTime': 'not set yet'
  },
  'fetchThunkData': {
    'Description': 'Fetch thunk data set',
    'setDateTime': 'not set yet'
  },
  'XMLHttpData': {
    'Description': 'XMLHttpRequest data set',
    'setDateTime': 'not set yet'
  }
};

function handleData(state = initState, action) {
  switch (action.type) {
    case 'GetFetchDataDone': return Object.assign({}, state, {fetchData: action.payload});
    case 'GetFetchThunkDataDone': return Object.assign({}, state, {fetchThunkData: action.payload});
    case 'GetXMLHttpDataDone': return Object.assign({}, state, {XMLHttpData: action.payload});
    default: return state;
  }
}

const store = createStore(handleData, applyMiddleware(...middleware));

function runFetch() {
  const newFetchData = {
    'Description': 'Fetch data set',
    'setDateTime': new Date().toLocaleString()
  };

  apiSetFetchData(newFetchData).then(() => {
    apiGetFetchData().then((response) => response.json()).then((data) => {
      store.dispatch({type: 'GetFetchDataDone', payload: data});
      console.log('GetFetchDataDone: ', data);
    });
  });
}

function runFetchThunk() {
  const newFetchThunkData = {
    'Description': 'Fetch thunk data set',
    'setDateTime': new Date().toLocaleString()
  };

  apiSetFetchThunkData(newFetchThunkData).then(() => { store.dispatch(apiGetFetchThunkData()); });
}

function runXMLHttp() {
  const newXMLHttpData = {
    'Description': 'XMLHttpRequest data set',
    'setDateTime': new Date().toLocaleString()
  };

  apiSetXMLHttpData(newXMLHttpData, () => {
    apiGetXMLHttpData((data) => { store.dispatch({type: 'GetXMLHttpDataDone', payload: data}); });
  });
}

setTimeout(runFetch, 1000);
setTimeout(runFetchThunk, 2000);
setTimeout(runXMLHttp, 3000);

export default store;
