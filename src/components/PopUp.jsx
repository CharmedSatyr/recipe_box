import React from 'react';
import {Button} from 'react-bootstrap';

class PopUp extends React.Component {
    render() {
        return (
            <div className='popup'>
                <form method="" action="">
                    <div className="row">
                        <div className="col-xs-3 col-xs-offset-1">
                            Recipe Name
                        </div>
                        <input id="recipeName" type="text" name="recipeName" className="col-xs-4"/>
                    </div>
                    <div className="row">
                        <div className="col-xs-3 col-xs-offset-1">
                            Recipe URL
                        </div>
                        <input id="recipeURL" type="text" name="recipeURL" className="col-xs-4"/>
                    </div>
                    <div className="row">
                        <div className="col-xs-3 col-xs-offset-1">
                            Photo URL
                        </div>
                        <input id="photoURL" type="text" name="photoURL" className="col-xs-4"/>
                    </div>
                    <div className="row">
                        <div className="col-xs-3 col-xs-offset-1">
                            Ingredients
                        </div>
                        <textarea id="ingredients" type="text" name="ingredients" className="col-xs-4"/>
                    </div>
                    <br/>
                    <input id="Save" type="Save" value="Save" className="btn btn-default"/>
                </form>
            </div>
        )
    }
}

export default PopUp;
