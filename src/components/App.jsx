import React from 'react';

import Header from './Header.jsx';
import LittleBox from './LittleBox.jsx';
import PopUp from './PopUp.jsx';

const toast = {
    recipe_name: 'toast',
    ingredients: 'bread, butter, fire',
    img: 'http://www.freeclipartpictures.com/clipart/clip-art/pictures/toast.jpg'
}

const cheeseburger = {
    recipe_name: 'cheeseburger',
    ingredients: 'bread, meat, cheese, veg',
    img: 'http://5tim.com/wp-content/uploads/2011/05/hamburger.jpg'
}

const dummy = {
    recipe_name: '',
    ingredients: '',
    img: ''
}

let recipes = [];

class App extends React.Component {

    constructor() {
        super();
        this.state = {
            data: recipes = [toast, cheeseburger]
        }
    }
    add() {
        console.log('Add');
        //document.getElementById('popup').write(<PopUp/>);
        recipes.push(dummy);
        this.setState({data: recipes});
    }
    delete(index) {
        console.log('Delete');
        recipes.splice(index, 1);
        this.setState({data: recipes});
        //The `this` argument at the end of this.state.data.map() is required binding
    }
    edit() {
        console.log('Edit');
    }
    render() {
        return (
            <div>
                <div id='popup'/>
                <Header handleClickAdd={this.add.bind(this)}/>
                <div className='row'>
                    <div className='col-xs-10 col-xs-offset-1 well bigbox'>
                        <h1>Recipe Box</h1>
                        <div className='row'>
                            {this.state.data.map(function(item, index) {
                                return (<LittleBox key={index} recipe_name={item.recipe_name} ingredients={item.ingredients} img={item.img} handleClickEdit={console.log('edit')} handleClickDel={this.delete.bind(this, index)}/>)
                            }, this)}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
