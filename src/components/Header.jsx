import React, { Component } from 'react';
import {Button} from 'react-bootstrap';

class Header extends React.Component {
    render() {
        return (
            <div className='navbar'>
                <div className='container-fluid'>
                <span className='RecipeBox'>Recipe Box</span>
                    <Button onClick={this.props.handleClickAdd}>Add Recipe</Button>
                </div>
            </div>
        )
    }
}

export default Header;
