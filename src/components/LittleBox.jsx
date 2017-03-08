import React from 'react';
import {Button} from 'react-bootstrap';

class LittleBox extends React.Component {
    render() {
        return (
                <div className='col-xs-4 littlebox'>
                    <h2>{this.props.recipe_name || 'Recipe'}</h2>
                    <p>{this.props.ingredients || 'Ingredients'}</p>
                    <img src={this.props.img || 'http://img.clipartall.com/download-this-image-as-food-clipart-600_465.png'}/>
                    <br/>
                    <Button className='edit'>Edit</Button>
                    <Button className='delete'>Delete</Button>
                </div>
        )
    }
}

export default LittleBox;
