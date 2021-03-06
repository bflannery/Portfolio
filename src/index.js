import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './config/serviceWorker';
import { createBrowserHistory } from "history";
import { ThemeProvider } from '@material-ui/core/styles';
import { Router } from "react-router-dom";
// Theme
import theme from './theme';

const history = createBrowserHistory();

ReactDOM.render(
    <ThemeProvider theme={theme}>
        <Router history={history}>
            <App />
        </Router>
    </ThemeProvider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
