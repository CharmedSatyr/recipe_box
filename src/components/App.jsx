import React, {Component} from 'react';

import Header from './Header.jsx';
import Editor from './Editor.jsx';
import LittleBox from './LittleBox.jsx';
import View from './View.jsx';
import Footer from './Footer.jsx';

function Recipe(recipe_name, description, ingredients, directions, img) {
    this.recipe_name = recipe_name;
    this.description = description;
    this.ingredients = ingredients;
    this.directions = directions;
    this.img = img;
}

let recipes = [];

//Pajeon recipe
const pajeon_recipe_name = '### **Pajeon**';
const pajeon_description = '#### Korean Green Onion Pancakes';
const pajeon_ingredients = '*To make 1 rectangular pancake of about 6×7 inches:*\n* 1 handful of wild green onions or about 10 stalks of normal green onion\n* 1/2 cup flour\n* 1/2 cup water\n* 1 tsp. soybean paste\n* 1/2 tsp. sugar\n* 3 Tbsp. vegetable oil\n* Optional: Seafood, e.g., chopped squid, mussels or fresh oysters'
const pajeon_directions = '1. Clean, wash, and drain the onions. Cut them into 5 inch long pieces.\n2. Make a batter by mixing the flour, water, soybean paste, and sugar in a bowl. Mix well until the batter is smooth.\n3. Place a non-stick pan on the stove and heat it to medium-high.\n4. Add the vegetable oil to the heated pan.\n5. Arrange the green onions on the pan in the shape of a rectangle.\n* Tip: If you want to add seafood to your pancakes, top the green onions with it now, before pouring on the batter.\n6. Pour the batter over the ingredients evenly.\n7. While the pancake is cooking, be attentive and gently press it into it into a nice shape with your spatula.\n8. After a few minutes, when the bottom of the pancake turns crispy and golden brown, turn the pancake over.\n9. Cook the pancake a few more minutes until both sides are crispy and golden brown. You may flip or turn it as necessary.\n10. Transfer your pajeon to a serving plate and serve hot with sauce.\n\nSauce:\nMix these ingredients in a small bowl:\n2 tbs soy sauce, 1 tbs vinegar, 1 ts sugar or honey, chopped onion, chopped green or red chili peppers, and 1 ts roasted sesame seeds.\n\n\n*Recipe adapted from [Maangchi.com](https://www.maangchi.com/recipe/pajeon)*'

import pajeon_img from '../img/pajeoncloseup.jpg';
//const pajeon_img = 'src/img/pajeoncloseup.jpg';

//Apple sweet potato soup recipe
const aspsoup_recipe_name = '### **Apple Sweet Potato Soup**';
const aspsoup_description = '#### Smoky, Sweet, Autumn Treat';
const aspsoup_ingredients = '* 2 Tbsp. olive oil (or ghee)\n* 1 yellow onion (or medium white, diced)\n* 1/2 tsp. sea salt\n* 1/4 tsp. black pepper\n* 4 garlic cloves (minced)\n* 2 pounds sweet potatoes (peeled and cut into 1 inch cubes)\n* 2 gala apples (cored, peeled and chopped into 1 inch chunks)\n* 4 cups vegetable broth\n* 2 chipotles in adobo (canned, roughly chopped)\n* 1 gala apple (cored and finely chopped)\n* 2 scallions (thinly sliced)\n* ground chipotle chile pepper\n* smoked paprika\n\n*For serving (optional):* \n* 1 gala apple, cored and finely chopped\n* 2 scallions, thinly sliced\n* ground chipotle powder or ground smoke paprika'
const aspsoup_directions = '1. Heat the oil in a large pot over medium heat. Add the onion, sea salt, and black pepper and cook, stirring occasionally, until tender, 6 to 8 minutes. Add the garlic and cook an additional 1 minute.\n2. Add in the sweet potatoes, apple, broth, and chipotle pepper. Bring to simmer and cook, covered, until the potatoes are tender, about 12 to 15 minutes.\n3. Working in batches, transfer the mixture to a blender and puree until smooth, adding more broth or water, if necessary, to reach the desired consistency. Alternatively, use a handheld immersion blender right in the pot. Add the soup back to the pot and season with salt and pepper.\n4. Serve the soup topped with apples, scallions, a pinch of smoked paprika or ground chipotle.\n\nNote:\nIf you aren\'t one for heat, replace the chipotle in adobo with 2 teaspoons smoked paprika\n\n\n*Recipe adapted from [Yummly.co](http://www.yummly.co/#recipe/Smoky-Sweet-Potato-and-Apple-Soup-1887924)*';

import aspsoup_img from '../img/aspsoup.jpg';
//const aspsoup_img = 'src/img/aspsoup.jpg';

//Bhakarwadi recipe
const bhakarwadi_recipe_name = '### **Bhakarwadi**';
const bhakarwadi_description = '#### Spicy Indian Snack';
const bhakarwadi_ingredients = '**Dough**\n\n* 1 cup besan (Bengal gram flour)\n* 1/4 cup all-purpose flour (maida)\n* 1/4 tsp. salt\n* 1/4 tsp. turmeric (haldi)\n* 1/8 tsp. asafetida (hing)\n* 3 Tbsp. oil (canola or vegetable oil)\n* 1/4 cup water\n\n**Spice Mix**\n\n* 4 Tbsp. coconut powder\n* 2 Tbsp. sesame seeds\n* 3 tsp. fennel seeds (saunf)\n* 2 tsp. coriander seeds or powder (dhania)\n* 1 tsp. cumin seeds (jeera)\n* 1 tsp. red chili powder (adjust to taste)\n* 1/2 tsp. garam masala\n* 1/8 tsp. asafetida (hing)\n* 1 tsp. salt\n* 2 Tbsp. sugar\n* 1 Tbsp. lemon juice\n\n**Preparation**\n\n* 2 Tbsp. all-purpose flour (for rolling)\n* 2 Tbsp. besan (for batter)\n* Oil for frying';
const bhakarwadi_directions = '**Dough**\n\n1. Mix all the ingredients together except water, besan, all-purpose flour, salt, turmeric, asafetida, and oil, add the water as needed to make firm dough. Lightly oil the dough, cover the dough and set aside for at least 15 minutes.\n\n**Spice Filling**\n\n1. Mix all the ingredients for spice mix except sugar and lemon juice, coconut powder, sesame seeds, fennel seeds, coriander, cumin seeds, chili powder, garam masala, asafetida, and salt.\n2. Grind the spices to a coarse powder, coffee grinder or spice grinder works the best.\n3. Take the spice mix in a bowl and add the sugar and lemon juice, mix it well set aside.\n\n**Making Bhakarwadi**\n\n1. Mix besan with about 3 tablespoons of water to make a thin batter. Set aside.\n2. Knead the dough for a minute before rolling, make it into ball. Lightly floured the rolling surface and flatten the dough ball. Roll into about 12-13 inch diameter.\n3. Spread the filling evenly over leaving about 1/4” border all around, and press the filling lightly slightly pressing.\n4. Roll the sheet gently, but firmly until you have a nice firm log. Roll the log gently 6-7 times this helps keeping together, and press lightly.\n5. With a sharp knife slice the both ends about 1 inch long then slice the log into 3/4 inch thick, this should make about 14 -16 Bhakarwadi.\n6. Heat at least one inch of oil in a frying pan over medium high heat. To test, put a small piece of dough into the oil; dough should sizzle and come up slowly, but not change color.\n7. Dip them in the batter from both sides one at a time and drop them slowly into the hot oil. Fry the Bhakarwadi until both sides are golden brown, turning occasionally. Each batch will take 7-8 minutes to cook.\n8. Bhakarwadi are ready to serve.\n\n\n*Recipe adapted from [Manjula\sKitchen.com](https://www.manjulaskitchen.com/bhakarwadi-spicy-indian-snack/ target="_blank")*';

import bhakarwadi_img from '../img/bhakarwadi.jpg';
//const bhakarwadi_img = 'src/img/bhakarwadi.jpg';

//Dummy recipes
const pajeon = new Recipe(pajeon_recipe_name, pajeon_description, pajeon_ingredients, pajeon_directions, pajeon_img);
const aspsoup = new Recipe(aspsoup_recipe_name, aspsoup_description, aspsoup_ingredients, aspsoup_directions, aspsoup_img);
const bhakarwadi = new Recipe(bhakarwadi_recipe_name, bhakarwadi_description, bhakarwadi_ingredients, bhakarwadi_directions, bhakarwadi_img);

import dummy_img from '../img/dummy_img.jpg';

const dummy = new Recipe('Add Recipe Name', 'Add Description', 'Add Ingredients', 'Add Directions', dummy_img);

class App extends React.Component {

    constructor() {
        super();
        const stored = localStorage.getItem('recipe_larder');
        if (stored) {
            recipes = JSON.parse(stored);
        } else {
            recipes = [pajeon, aspsoup, bhakarwadi];
        }
        this.state = {
            data: recipes,
            recipe_name: dummy.recipe_name,
            description: dummy.description,
            ingredients: dummy.ingredients,
            directions: dummy.directions,
            img: dummy.img,
            EditorClassName: 'hide',
            editClassName: 'hide',
            submitClassName: '',
            viewClassName: 'hide',
            deleteID: '',
            i: 0
        }
    }
    //Open a blank Editor
    handleAdd() {
        document.forms['Editor'].reset();
        this.setState({
            recipe_name: dummy.recipe_name,
            description: dummy.description,
            ingredients: dummy.ingredients,
            directions: dummy.directions,
            img: dummy.img,
            EditorClassName: '',
            viewClassName: 'hide',
            editClassName: 'hide',
            submitClassName: '',
            deleteID: 'hide'
        });
        window.scrollTo(0,0);
    }
    //Delete a LittleBox
    handleDelete() {
        recipes.splice(this.state.i, 1);
        this.setState({data: recipes, EditorClassName: 'hide', viewClassName: 'hide'});
        this.saveToLocal();
        document.forms['Editor'].reset();
    }
    //Edit a Editor's contents - this basically prefills a Editor with the contents of the LittleBox clicked
    handleEdit() {
        this.setState({EditorClassName: '', editClassName: 'edit', submitClassName: 'hide', viewClassName: 'hide'});
        document.forms['Editor'].recipe_name.value = recipes[this.state.i].recipe_name;
        document.forms['Editor'].description.value = recipes[this.state.i].description;
        document.forms['Editor'].ingredients.value = recipes[this.state.i].ingredients;
        document.forms['Editor'].directions.value = recipes[this.state.i].directions;
        document.forms['Editor'].img.value = recipes[this.state.i].img;
    }
    //Close a Editor
    handleClose(event) {
        this.setState({EditorClassName: 'hide', viewClassName: 'hide', deleteID: ''});
        document.forms['Editor'].reset();
        event.preventDefault();
    }
    //Handles input in a Editor
    handleInputChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        }); //Not sure why this needs []
    }
    //Submit new recipe
    handleSubmit(event) {
        recipes.push(new Recipe(this.state.recipe_name, this.state.description, this.state.ingredients, this.state.directions, this.state.img));
        this.setState({
            data: recipes,
            recipe_name: dummy.recipe_name,
            description: dummy.description,
            ingredients: dummy.ingredients,
            directions: dummy.directions,
            img: dummy.img,
            EditorClassName: 'hide',
            deleteID: ''
        });
        this.saveToLocal();
        document.forms['Editor'].reset();
        event.preventDefault();
    }
    //Save edits to a recipe in a Editor
    handleSubmitEdit(event) {
        const d = document.forms['Editor'];
        recipes.splice((this.state.i), 1, new Recipe(d.recipe_name.value, d.description.value, d.ingredients.value, d.directions.value, d.img.value));
        //this.saveToLocal();
        this.setState({EditorClassName: 'hide', editClassName: 'hide', submitClassName: '', deleteID: ''});
        document.forms['Editor'].reset();
        event.preventDefault();
    }
    //View the recipe
    handleView(index) {
        this.setState({
            recipe_name: recipes[index].recipe_name,
            description: recipes[index].description,
            ingredients: '**Ingredients:** \n\n' + recipes[index].ingredients,
            directions: '**Directions:** \n\n' + recipes[index].directions,
            img: recipes[index].img,
            viewClassName: '',
            i: index,
            EditorClassName: 'hide',

        });
        window.scrollTo(0,0);
    }
    //Add recipes to local cache so they will be saved until the browser cache is emptied
    saveToLocal() {
        localStorage.setItem('recipe_larder', JSON.stringify(this.state.data));
    }
    render() {
        return (
            <div>
                <div className={this.state.viewClassName}>
                    <View view_recipe_name={this.state.recipe_name} view_description={this.state.description} view_ingredients={this.state.ingredients} view_directions={this.state.directions} view_img={this.state.img} handleEdit={this.handleEdit.bind(this)} handleClose={this.handleClose.bind(this)} handleDelete={this.handleDelete.bind(this)}/>
                </div>
                <div id='Editor' className={this.state.EditorClassName}>
                    <Editor deleteID={this.state.deleteID} editClassName={this.state.editClassName} submitClassName={this.state.submitClassName} handleDelete={this.handleDelete.bind(this)} handleClose={this.handleClose.bind(this)} handleInputChange={this.handleInputChange.bind(this)} handleSubmit={this.handleSubmit.bind(this)} handleSubmitEdit={this.handleSubmitEdit.bind(this)}/>
                </div>

                <Header handleClickAdd={this.handleAdd.bind(this)}/>
                <div className='row'>
                    <div className='col-xs-10 col-xs-offset-1 bigbox'>
                        <div className='row'>
                            {this.state.data.map(function(item, index) {
                                //The `if` statement is a hacked way to get spacing between rows to appear correctly.
                                if (index % 3 !== 0 || index === 0) {
                                    return (<LittleBox key={index} recipe_name={item.recipe_name} description={item.description} ingredients={item.ingredients} directions={item.directions} img={item.img} handleClickView={this.handleView.bind(this, index)}/>);
                                } else {
                                    return (
                                        <span>
                                            <div className='row'/>
                                            <LittleBox key={index} recipe_name={item.recipe_name} description={item.description} ingredients={item.ingredients} directions={item.directions} img={item.img} handleClickView={this.handleView.bind(this, index)}/>
                                        </span>
                                    );
                                }
                            }, this)}
                        </div>
                    </div>
                </div>
                <Footer/>
            </div>
        )
    }
}

export default App;
