import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import {Provider} from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

ReactDOM.render(
  <Provider>
    <MuiThemeProvider>
        <App />
    </MuiThemeProvider>
  </Provider>,
   document.getElementById('root')
   );
registerServiceWorker();