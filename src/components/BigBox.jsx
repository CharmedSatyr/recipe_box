import React from 'react';
import LittleBox from './LittleBox.jsx'

class BigBox extends React.Component {
    render() {
        return (
            <div className='row'>
                <div className='col-xs-10 col-xs-offset-1 well bigbox'>
                    <h1>Hello</h1>
                    <LittleBox/>
                </div>
            </div>
        )
    }
}

export default BigBox;
