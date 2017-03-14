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
                                    <span className='titles' dangerouslySetInnerHTML={{
                                        __html: marked(this.props.recipe_name)
                                    }}/>
                                </strong>
                            </h3>
                            <h4>
                                <span className='titles' dangerouslySetInnerHTML={{
                                    __html: marked(this.props.description)
                                }}/>
                            </h4>
                            <img src={this.props.img || 'http://img.clipartall.com/download-this-image-as-food-clipart-600_465.png'}/>
                            <br/>
                        </div>
                    </div>
                </div>
            </span>
        )
    }
}

export default LittleBox;
