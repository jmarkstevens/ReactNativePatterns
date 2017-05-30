import React from 'react';

import {Provider} from 'react-redux';

import AppCtrl from './components/app.ctrl';
import AppStore from './store/App.Store';

const MainApp = () => {
  return <Provider store={AppStore}><AppCtrl /></Provider>;
};

export default MainApp;
