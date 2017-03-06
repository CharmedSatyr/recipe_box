import React from 'react';
import ReactDOM from 'react-dom';

import sass from './styles/styles.scss';


import Hello from './components/hello.jsx';
import World from './components/world.jsx';

class Display extends React.Component {
    render() {
        return (
          <div>
            <Hello/>
            <World/>
          </div>
        )
    }
}

ReactDOM.render(
    <Display/>, document.getElementById('app'));
