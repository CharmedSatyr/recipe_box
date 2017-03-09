import React from 'react';
import ReactDOM from 'react-dom';

import sass from './styles/styles.scss';
import Bootstrap from './bootstrap/dist/css/bootstrap.css';
//import BootstrapJS from './bootstrap/dist/js/bootstrap.min.jsx'; //Requires jQuery

import App from './components/App.jsx';

ReactDOM.render(
    <App/>, document.getElementById('app'));
