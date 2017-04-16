import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';
import './index.css';


import Root from './components/Root/Root';
import configureStore from './redux/store/configureStore';

const store = configureStore();

ReactDOM.render(
  <Root store={store}>
    <App />
  </Root>,
  document.getElementById('root')
);
