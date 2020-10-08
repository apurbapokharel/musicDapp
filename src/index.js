// import React from 'react';
// import ReactDOM from 'react-dom';
// import AudioPlayer from './AudioPlayer';


// ReactDOM.render(
//   <React.StrictMode>
//     <AudioPlayer />
//   </React.StrictMode>,
//   document.getElementById('root')
// );


import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import PlayerState from './context/PlayerState';
import store from './store/store'

import './index.css';
import App from './components/App';

import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  // <React.StrictMode>
    <Provider store={store}>
      {/* <PlayerState> */}
        <App />
      {/* </PlayerState> */}
    </Provider>
  // </React.StrictMode>,
  ,
  document.getElementById('root')
);

serviceWorker.unregister();
