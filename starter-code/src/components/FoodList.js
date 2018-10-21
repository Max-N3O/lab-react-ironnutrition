import React, { Component } from 'react';
import 'bulma/css/bulma.css';

class FoodList extends Component {
  constructor(props) {
    super(props);
  }
  // calculateCalories() {
  //   numberOfCalories = {this.props.foods.quantity} * {this.props.foods.calories}
  // }
  render() {
    return (
        <li>{this.props.foods.quantity} {this.props.foods.name} = {this.props.foods.quantity} * {this.props.foods.calories} calories</li>
    )}
}

export default FoodList