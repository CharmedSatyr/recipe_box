import React from 'react';

import Header from './Header.jsx';
import LittleBox from './LittleBox.jsx';
import PopUp from './PopUp.jsx';

let recipes = [];
/*
http://images.wisegeek.com/two-cute-lambs.jpg
*/
function Recipe(recipe_name, ingredients, directions, img) {
    this.recipe_name = recipe_name;
    this.ingredients = ingredients;
    this.directions = directions;
    this.img = img;
}

let toast = new Recipe('Toast', 'bread, butter, fire', 'Put them together.', 'http://www.freeclipartpictures.com/clipart/clip-art/pictures/toast.jpg');
let cheeseburger = new Recipe('Cheeseburger', 'bread, meat, cheese, veg', 'Put them together.', 'http://5tim.com/wp-content/uploads/2011/05/hamburger.jpg');
let dummy = new Recipe('Recipe', 'Ingredients', 'Directions', 'http://img.clipartall.com/download-this-image-as-food-clipart-600_465.png');

class App extends React.Component {

    constructor() {
        super();
        this.state = {
            data: recipes = [
                toast, cheeseburger
            ],
            recipe_name: dummy.recipe_name,
            ingredients: dummy.ingredients,
            directions: dummy.directions,
            img: dummy.img,
            PopUpClassName: 'hide'
        }
    }
    add() {
        this.setState({PopUpClassName: ''});
    }
    handleSubmit(event) {
        recipes.push(new Recipe(this.state.recipe_name, this.state.ingredients, this.state.directions, this.state.img));
        this.setState({
            data: recipes,
            recipe_name: dummy.recipe_name,
            ingredients: dummy.ingredients,
            directions: dummy.directions,
            img: dummy.img,
            PopUpClassName: 'hide'
        });
        document.forms['AddPopUp'].reset()
        event.preventDefault();
    }
    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox'
            ? target.checked
            : target.value;
        const name = target.name;

        this.setState({[name]: value});
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
                <Header handleClickAdd={this.add.bind(this)}/>
                <div id='popup' className={this.state.PopUpClassName}>
                    <PopUp handleInputChange={this.handleInputChange.bind(this)} handleSubmit={this.handleSubmit.bind(this)}/>
                </div>
                <div className='row'>
                    <div className='col-xs-10 col-xs-offset-1 well bigbox'>
                        <h1>Recipe Box</h1>
                        <div className='row'>
                            {this.state.data.map(function(item, index) {
                                return (<LittleBox key={index} recipe_name={item.recipe_name} ingredients={item.ingredients} directions={item.directions} img={item.img} handleClickEdit={console.log('edit')} handleClickDel={this.delete.bind(this, index)}/>)
                            }, this)}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default App;
