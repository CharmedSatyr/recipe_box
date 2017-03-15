import React, {Component} from 'react';

class Footer extends React.Component {
    render() {
        return (
            <div className='container-fluid'>
                <footer className='footer'>
                    <div className='ftext'>
                        Designed and built by&nbsp;
                        <a href='https://CharmedSatyr.com'>CharmedSatyr</a>&nbsp; to complete&nbsp;
                        <a href='https://freecodecamp.com' target='_blank'>freeCodeCamp</a>'s&nbsp;
                        <a href='https://www.freecodecamp.com/challenges/build-a-recipe-box' target='_blank'>Build a Recipe Box</a>&nbsp; challenge. Code licensed under&nbsp;
                        <a href='https://github.com/CharmedSatyr/recipe_box/blob/master/LICENSE' target='_blank'>GPL-3.0</a>.
                    </div>
                </footer>
            </div>
        )
    }
}

export default Footer;
