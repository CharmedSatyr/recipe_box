import React from 'react';
import {Button} from 'react-bootstrap';

class Header extends React.Component {
    render() {
        return (
            <div className='navbar'>
                <div className='container-fluid'>
                    <Button onClick={this.props.handleClick}>Add Recipe</Button>
                </div>
            </div>
        )
    }
}

export default Header;
