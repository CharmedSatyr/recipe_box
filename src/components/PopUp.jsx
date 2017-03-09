import React from 'react';
import {Button} from 'react-bootstrap';

class PopUp extends React.Component {
    render() {
        return (
            <form name='AddPopUp'>
                <label>
                    Name:
                    <br/>
                    <input name='recipe_name' type='text' value={this.props.recipe_name} onChange={this.props.handleInputChange}/>
                </label>
                <br/>
                <label>
                    Ingredients:
                    <br/>
                    <textarea name="ingredients" type="text" value={this.props.ingredients} onChange={this.props.handleInputChange}/>
                </label>
                <br/>
                <label>
                    Directions:
                    <br/>
                    <textarea name="directions" type="text" value={this.props.directions} onChange={this.props.handleInputChange}/>
                </label>
                <br/>
                <label>
                    Image URL:
                    <br/>
                    <input name='img' type='url' value={this.props.img} onChange={this.props.handleInputChange}/>
                </label>
                <br/>
                <input type="submit" value="Submit" onClick={this.props.handleSubmit}/>
            </form>
        );
    }
}

export default PopUp;
