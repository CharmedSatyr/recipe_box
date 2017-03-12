import React, {Component} from 'react';
import {Button} from 'react-bootstrap';
import marked from 'marked';

var styles = {
  background: 'src/img/bhakarwadi.jpg'
}

class LittleBox extends React.Component {
    render() {
        return (
            <div className='col-xs-4'>
                <div className=' littlebox'>
                    <h3>
                        <span className='titles' dangerouslySetInnerHTML={{
                            __html: marked(this.props.recipe_name)
                        }}/>
                    </h3>
                    <h4>
                        <span className='titles' dangerouslySetInnerHTML={{
                            __html: marked(this.props.description)
                        }}/>
                    </h4>
                    <img src={this.props.img || 'http://img.clipartall.com/download-this-image-as-food-clipart-600_465.png'}/>
                    <br/>
                    <Button onClick={this.props.handleClickView}>View</Button>
                    <Button onClick={this.props.handleClickEdit} className='edit'>Edit</Button>
                    <Button onClick={this.props.handleClickDel} className='delete'>Delete</Button>
                </div>
            </div>
        )
    }
}

export default LittleBox;
