import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import { createStore } from 'redux';
import reducer from './reducers';
import devToolsEnhancer from 'remote-redux-devtools';


const store = createStore(
  reducer,
  devToolsEnhancer()
);

ReactDOM.render(
  <App store = {store} />,
  document.getElementById('root')
);
registerServiceWorker();
