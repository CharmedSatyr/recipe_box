import React from 'react';
import ReactDOM from 'react-dom';

import sass from './styles/styles.scss';
import Bootstrap from './bootstrap/dist/css/bootstrap.css';

import Header from './components/Header.jsx';
import BigBox from './components/BigBox.jsx';

class Display extends React.Component {
    render() {
        return (
            <div>
                <Header/>
                <BigBox/>
            </div>
        )
    }
}

ReactDOM.render(
    <Display/>, document.getElementById('app'));
