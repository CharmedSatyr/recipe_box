import React from 'react';
import {Button} from 'react-bootstrap';

class Header extends React.Component {
    render() {
        return (
            <div className='navbar'>
                <div className='container-fluid'>
                    <div className='navbar-header'>
                        <a className='navbar-brand cs' href='https://charmedsatyr.com'>
                            <img alt='CharmedSatyr logo' src='/src/img/S.png'/>
                        </a>
                        <a className='navbar-brand g' href='#'>
                            <img alt='GitHub logo' src='/src/img/G.png'/>
                        </a>
                        <a className='navbar-brand t' href='#'>
                            <img alt='Twitter logo' src='/src/img/T.png'/>
                        </a>
                    </div>
                    <Button>Add Recipe</Button>
                </div>
            </div>
        )
    }
}

export default Header;
