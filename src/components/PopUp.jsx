import React, {Component} from 'react';
import {Button} from 'react-bootstrap';

class PopUp extends React.Component {
    render() {
        return (
            <form name='PopUp'>
            <h4>Style your recipe using <a href='https://charmedsatyr.com/sites/0012-markdown-previewer/build/index.html' target='_blank'>GitHub-flavored Markdown Language</a></h4>
                <label>
                    Name:
                    <br/>
                    <input name='recipe_name' type='text' value={this.props.recipe_name} onChange={this.props.handleInputChange}/>
                </label>
                <br/>
                <label>
                    Description:
                    <br/>
                    <input name="description" type="text" value={this.props.description} onChange={this.props.handleInputChange}/>
                </label>
                <br/>
                <label>
                    Ingredients:
                    <br/>
                    <textarea name="ingredients" type="text" rows='5' value={this.props.ingredients} onChange={this.props.handleInputChange}/>
                </label>
                <br/>
                <label>
                    Directions:
                    <br/>
                    <textarea name="directions" type="text" rows='5' value={this.props.directions} onChange={this.props.handleInputChange}/>
                </label>
                <br/>
                <label>
                    Image URL:
                    <br/>
                    <input name='img' type='url' value={this.props.img} onChange={this.props.handleInputChange}/>
                </label>
                <br/>
                <Button onClick={this.props.handleClose}>Close</Button>
                <Button className={this.props.submitClassName} type="submit" onClick={this.props.handleSubmit}>Save</Button>
                <Button className={this.props.editClassName} type="submit" onClick={this.props.handleSubmitEdit}>Save</Button>
            </form>
        );
    }
}

export default PopUp;
