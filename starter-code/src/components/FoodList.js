import React, { Component } from 'react';
import 'bulma/css/bulma.css';

class FoodList extends Component {
  constructor(props) {
    super(props);
  }
  calculateCalories(quantity, calories) {
    return quantity * calories
  }

  render() {
    return (
        <li>{this.props.foods.quantity} {this.props.foods.name} = {this.calculateCalories(parseInt(this.props.foods.quantity), parseInt(this.props.foods.calories))} calories</li>
    )}
}

export default FoodList