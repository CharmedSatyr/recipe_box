import React from 'react';

import Header from './Header.jsx';
import LittleBox from './LittleBox.jsx';
import PopUp from './PopUp.jsx';

function Recipe(recipe_name, ingredients, directions, img) {
    this.recipe_name = recipe_name;
    this.ingredients = ingredients;
    this.directions = directions;
    this.img = img;
}

let recipes = [];

const toast = new Recipe('Toast', 'bread, butter, fire', 'Put them together.', 'http://www.freeclipartpictures.com/clipart/clip-art/pictures/toast.jpg');
const cheeseburger = new Recipe('Cheeseburger', 'bread, meat, cheese, veg', 'Put them together.', 'http://5tim.com/wp-content/uploads/2011/05/hamburger.jpg');
const dummy = new Recipe('Recipe', 'Ingredients', 'Directions', 'http://img.clipartall.com/download-this-image-as-food-clipart-600_465.png');

class App extends React.Component {

    constructor() {
        super();

        const stored = localStorage.getItem('recipe_larder');

        if (stored) {
            recipes = JSON.parse(stored);
        } else {
            recipes = [toast, cheeseburger];
        }

        this.state = {
            data: recipes,
            recipe_name: dummy.recipe_name,
            ingredients: dummy.ingredients,
            directions: dummy.directions,
            img: dummy.img,
            PopUpClassName: 'hide',
            editClassName: 'hide',
            submitClassName: '',
            i: 0
        }
    }
    //Open a blank PopUp
    handleAdd() {
        this.setState({PopUpClassName: ''});
    }
    //Delete a LittleBox
    handleDelete(index) {
        recipes.splice(index, 1);
        this.setState({data: recipes});
        this.saveToLocal();
        //The `this` argument at the end of this.state.data.map() is required binding
    }
    //Edit a PopUp's contents - this basically prefills a PopUp with the contents of the LittleBox clicked
    handleEdit(index) {
        this.setState({PopUpClassName: '', editClassName: 'edit', submitClassName: 'hide'});
        document.forms['PopUp'].recipe_name.value = recipes[index].recipe_name;
        document.forms['PopUp'].ingredients.value = recipes[index].ingredients;
        document.forms['PopUp'].directions.value = recipes[index].directions;
        document.forms['PopUp'].img.value = recipes[index].img;
        this.setState({i: index});
        //The `this` argument at the end of this.state.data.map() is required binding
    }
    //Close a PopUp
    handleClose(event) {
        this.setState({PopUpClassName: 'hide'});
        document.forms['PopUp'].reset();
        event.preventDefault();
    }
    //Handles input in a PopUp
    handleInputChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        }); //Not sure why this needs []
    }
    //Submit new recipe
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
        this.saveToLocal();
        document.forms['PopUp'].reset();
        event.preventDefault();
    }
    //Save edits to a recipe in a PopUp
    handleSubmitEdit(event) {
        recipes.splice((this.state.i), 1, new Recipe(document.forms['PopUp'].recipe_name.value, document.forms['PopUp'].ingredients.value, document.forms['PopUp'].directions.value, document.forms['PopUp'].img.value));
        this.saveToLocal();
        this.setState({PopUpClassName: 'hide', editClassName: 'hide', submitClassName: ''});
        document.forms['PopUp'].reset();
        event.preventDefault();
    }
    //Add recipes to local cache so they will be saved until the browser cache is emptied
    saveToLocal() {
        localStorage.setItem('recipe_larder', JSON.stringify(this.state.data));
    }
    render() {
        return (
            <div>
                <Header handleClickAdd={this.handleAdd.bind(this)}/>
                <div id='popup' className={this.state.PopUpClassName}>
                    <PopUp editClassName={this.state.editClassName} submitClassName={this.state.submitClassName} handleClose={this.handleClose.bind(this)} handleInputChange={this.handleInputChange.bind(this)} handleSubmit={this.handleSubmit.bind(this)} handleSubmitEdit={this.handleSubmitEdit.bind(this)}/>
                </div>
                <div className='row'>
                    <div className='col-xs-10 col-xs-offset-1 well bigbox'>
                        <h1>Recipe Box</h1>
                        <div className='row'>
                            {this.state.data.map(function(item, index) {
                                return (<LittleBox key={index} recipe_name={item.recipe_name} ingredients={item.ingredients} directions={item.directions} img={item.img} handleClickEdit={this.handleEdit.bind(this, index)} handleClickDel={this.handleDelete.bind(this, index)}/>)
                            }, this)}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default App;
