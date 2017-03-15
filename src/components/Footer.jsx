import React, {Component} from 'react';
import G from '../img/G.png';
//style='height: 24px'
class Footer extends React.Component {
    render() {
        return (
            <div className='container-fluid'>
                <footer className='footer'>
                    Designed and built by&nbsp;
                    <a href='https://CharmedSatyr.com'>CharmedSatyr</a>
                    <a href='https://github.com/CharmedSatyr/recipe_box/' target='_blank'>
                        <img src={G}/>
                    </a>
                    to complete&nbsp;
                    <a href='https://freecodecamp.com' target='_blank'>freeCodeCamp</a>'s&nbsp;
                    <a href='https://www.freecodecamp.com/challenges/build-a-recipe-box' target='_blank'>Build a Recipe Box</a>&nbsp; challenge. Code licensed under&nbsp;
                    <a href='https://github.com/CharmedSatyr/recipe_box/blob/master/LICENSE' target='_blank'>GPL-3.0</a>.&nbsp;
                    <strong>Clearing your browser's cache will delete any saved recipes.</strong>
                </footer>
            </div>
        )
    }
}

export default Footer;
