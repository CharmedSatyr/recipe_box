import React, {Component} from 'react';
import {Button} from 'react-bootstrap';
import marked from 'marked';

class LittleBox extends React.Component {
    render() {
        var pic = {
            backgroundImage: 'url(' + this.props.img + ')'
        }
        return (
            <span>
                <div className='col-xs-4'>
                    <div id='bg_food' style={pic}/>
                    <div className='littlebox'>
                        <div onClick={this.props.handleClickView}>
                            <h3>
                                <strong>
                                    <h3>
                                        <strong>
                                            {this.props.recipe_name}
                                        </strong>
                                    </h3>
                                </strong>
                            </h3>
                            <h4>
                                <h4>
                                    {this.props.description}
                                </h4>
                            </h4>
                            <img src={this.props.img}/>
                            <br/>
                        </div>
                    </div>
                </div>
            </span>
        )
    }
}

export default LittleBox;
