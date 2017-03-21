import React, {Component} from 'react';
import {Button} from 'react-bootstrap';
import marked from 'marked';

class View extends React.Component {
    render() {
        return (
            <div className='view'>
                <h3 className='titles'>
                    <strong>
                        <h3>
                            <strong>
                                {this.props.view_recipe_name}
                            </strong>
                        </h3>
                    </strong>
                </h3>
                <h4 className='titles'>
                    <h4>
                        {this.props.view_description}
                    </h4>
                </h4>
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
