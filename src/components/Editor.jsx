import React, {Component} from 'react';
import {Button} from 'react-bootstrap';

class Editor extends React.Component {
    render() {
        return (
            <div className='container-fluid'>
                <form name='Editor'>
                    <label>
                        <h4>
                            <strong>Name:</strong>
                        </h4>
                    </label>
                    <br/>
                    <input name='recipe_name' type='text' value={this.props.recipe_name} onChange={this.props.handleInputChange}/>
                    <br/>
                    <label>
                        Description:
                    </label>
                    <br/>
                    <input name="description" type="text" value={this.props.description} onChange={this.props.handleInputChange}/>

                    <br/>
                    <label>
                        Ingredients<a href='https://charmedsatyr.com/sites/0012-markdown-previewer/build/index.html' target='_blank'>*</a>:
                    </label>
                    <br/>
                    <textarea name="ingredients" type="text" rows='2' value={this.props.ingredients} onChange={this.props.handleInputChange}/>
                    <br/>
                    <label>
                        Directions<a href='https://charmedsatyr.com/sites/0012-markdown-previewer/build/index.html' target='_blank'>*</a>:
                    </label>
                    <br/>
                    <textarea name="directions" type="text" rows='3' value={this.props.directions} onChange={this.props.handleInputChange}/>
                    <br/>
                    <label>
                        Image URL (e.g., https://www.example.com/photo.jpg):
                    </label>
                    <br/>
                    <input name='img' type='url' value={this.props.img} onChange={this.props.handleInputChange}/>
                    <h5>*Supports styling with&nbsp;
                        <a href='https://charmedsatyr.com/sites/0012-markdown-previewer/build/index.html' target='_blank'>GitHub-flavored Markdown Language</a>
                    </h5>
                    <br/>
                    <Button id={this.props.deleteID} className='left btn btn-danger' onClick={this.props.handleDelete}>Delete</Button>
                    <span id='right'>
                        <Button className={this.props.submitClassName} type="submit" onClick={this.props.handleSubmit}>Save</Button>
                        <Button className={this.props.editClassName} type="submit" onClick={this.props.handleSubmitEdit}>Save</Button>
                        <Button onClick={this.props.handleClose}>Close</Button>
                    </span>
                </form>
            </div>
        );
    }
}

export default Editor;
