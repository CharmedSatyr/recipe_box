import React, {Component} from 'react';
import {Button} from 'react-bootstrap';
import marked from 'marked';

class View extends React.Component {
    render() {
        return (
            <div className='view'>
                <h1>
                    <strong>
                        <span className='titles' dangerouslySetInnerHTML={{
                            __html: marked(this.props.view_recipe_name)
                        }}/>
                    </strong>
                </h1>
                <h3>
                    <strong>
                        <span className='titles' dangerouslySetInnerHTML={{
                            __html: marked(this.props.view_description)
                        }}/>
                    </strong>
                </h3>
                <div>
                    <span dangerouslySetInnerHTML={{
                        __html: marked(this.props.view_ingredients)
                    }}/>
                </div>
                <div>
                    <span dangerouslySetInnerHTML={{
                        __html: marked(this.props.view_directions)
                    }}/>
                </div>
                <br/>
                <Button className='btn btn-danger' onClick={this.props.handleDelete}>Delete</Button>
                <div className='right-float'>
                    <Button onClick={this.props.handleEdit}>Edit</Button>
                    <Button onClick={this.props.handleClose}>Close</Button>
                </div>
            </div>
        )
    }
}

export default View;
