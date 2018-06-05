import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import {Provider} from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import store from './store';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {grey900} from 'material-ui/styles/colors';

const muiTheme = getMuiTheme({
  palette: {
    textColor: grey900,
  
  },
  appBar: {
    height: 50,
  },
  fontFamily: 'Times New Roman',
});

ReactDOM.render(
  <Provider store={store}>
    <MuiThemeProvider muiTheme={muiTheme}>
        <App />
    </MuiThemeProvider>
  </Provider>,
   document.getElementById('root')
   );
registerServiceWorker();