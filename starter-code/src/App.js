import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import "bulma/css/bulma.css";
import foods from "./foods.json";
import Form from './components/Form';
import FoodBox from './components/FoodBox';
import FoodList from './components/FoodList';


class App extends Component {
  constructor(props) {
    super(props);
    // console.log(foods);
    this.state = {
      listFoods: foods,
      displayForm: false,
      name: "",
      numberOfCalories: "",
      imageUrl: "",
      quantity: "",
      search: '',
      todaysList: [],
      foodListForToday: []
    };
  }
  addFood() {
    this.setState({ displayForm: true });
  }
  handleChange(event) {
    let { name, value } = event.target;
    this.setState({[name]: value});
  }

  handleFormSubmit = (event) => {
    event.preventDefault();
    console.log('handleFormSubmit');
    // this.props.addNewFood(this.state.name, this.state.numberOfCalories, this.state.imageUrl);
    this.addNewFood(this.state.name, this.state.numberOfCalories, this.state.imageUrl);
    this.setState({     
      name: '',
      numberOfCalories: '',
      imageUrl: ''
    })     
  }

  addNewFood(x,y,z) {
    // console.log("Before: " + this.state.listFoods);
    this.state.listFoods.push({"name": x, "calories": y, "image": z, "quantity": 0});
    // console.log("After: " + this.state.listFoods)
    this.setState({listFoods: this.state.listFoods, displayForm: false})
  }

  // calculateCalories(quantity, calories) {
  //   quantity * calories
  // }

  addToFoodList(name,quantity) {
    const newListFoods = this.state.listFoods.map(elt => {
      if (elt.name === name) {
        console.log("name: " + name);
        console.log("quantity before: " + elt.quantity);
        elt.quantity = quantity
        console.log("quantity after: " + elt.quantity);
      }
      return elt;
    });
    // console.log("newListFoods: " + newListFoods);
    // console.log("newListFoods[0]: " + newListFoods[0]);
    // console.log("newListFoods[0].name: " + newListFoods[0].name);
    this.setState({todaysList: newListFoods.filter(elt => {return elt.quantity > 0})})
  }

  // searchText(elt) {
  //     return elt.name.includes(this.state.search)
  // }

  render() {
    return (
     <div className="container">
      <h1 className="App-title">IronNutrition</h1>

     <div className="columns">
      <div className="column">
          <div className="searchbar">
            <input
              type="text"
              placeholder="Search.."
              name="search"
              onChange={(e) => this.setState({search: e.target.value})}/>
          </div> 

        <button className="button" onClick={this.addFood.bind(this)}>
          Add food
        </button>

        {/* {this.state.displayForm ? <Form /> : ""} */}
        {this.state.displayForm ? (
          <Form
            name={this.state.name}
            numberOfCalories={this.state.numberOfCalories}
            imageUrl={this.state.imageUrl}
            onChange={this.handleChange.bind(this)}
            handleFormSubmit={this.handleFormSubmit.bind(this)}
          />
        ) : (
          ""
        )}

        {this.state.listFoods.filter(elt => {return elt.name.includes(this.state.search)}).map(elt => {
          return <FoodBox
          foods={elt}
          addToFoodList={this.addToFoodList.bind(this)}
          />;
        })}
        

        

      </div>
        <div className="column">
          <h2>Today's Foods</h2>
          <ul>
            {this.state.todaysList.map(elt => {
              return <FoodList
              foods={elt}
              />
            })}
          
          </ul>

          <p>Total:</p>
        </div>
      </div>
      </div>
    );
  }
}

export default App;
