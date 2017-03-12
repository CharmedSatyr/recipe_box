import React, {Component} from 'react';
import {Button} from 'react-bootstrap';
import marked from 'marked';

//                    <img src={this.props.view_img}/>
class View extends React.Component {
    render() {
        return (
            <div className='view'>
                <h1>
                    <span className='titles' dangerouslySetInnerHTML={{
                        __html: marked(this.props.view_recipe_name)
                    }}/>
                </h1>
                <h3>
                    <span className='titles' dangerouslySetInnerHTML={{
                        __html: marked(this.props.view_description)
                    }}/>
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
                <Button onClick={this.props.handleClose}>Close</Button>
            </div>
        )
    }
}

export default View;
