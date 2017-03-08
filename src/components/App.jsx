import React from 'react';

import Header from './Header.jsx';
import BigBox from './BigBox.jsx';
import LittleBox from './LittleBox.jsx';

const toast = <LittleBox recipe_name = 'toast' ingredients = 'bread, butter, fire' img = 'http://www.freeclipartpictures.com/clipart/clip-art/pictures/toast.jpg' />;
const cheeseburger = <LittleBox recipe_name = 'cheeseburger' ingredients = 'bread, meat, cheese, veg' img = 'http://5tim.com/wp-content/uploads/2011/05/hamburger.jpg' />;

let recipe = [toast, cheeseburger];


class App extends React.Component {
    constructor() {
        super();
        this.state = {
            show: recipe
        }
    }
    componentWillMount() {

    }
    Add() {
        console.log('Add');
        recipe.push(<LittleBox/>);
        this.setState({show: recipe});
    }
    render() {
        return (
            <div>
                <Header handleClick={this.Add.bind(this)}/>
                <BigBox show={this.state.show}/>
            </div>
        )
    }
}

export default App;
