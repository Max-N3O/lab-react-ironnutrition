import React, { Component } from 'react';
import 'bulma/css/bulma.css';


class FoodBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quantity: 1
    }
  }
  

  addToTodaysFood() {
    // this.props.foods.quantity = this.state.quantity
    this.props.addToFoodList(this.props.foods.name, this.state.quantity)
  }

  render() {
    return (
      <div className="box">
        <article className="media">
          <div className="media-left">
            <figure className="image is-64x64">
              <img src={this.props.foods.image} />
            </figure>
          </div>
          <div className="media-content">
            <div className="content">
              <p>
                <strong>{this.props.foods.name}</strong> <br />
                <small>{this.props.foods.calories} calories</small>
              </p>
            </div>
          </div>
          <div className="media-right">
            <div className="field has-addons">
              <div className="control">
                <input
                  className="input"
                  type="number"
                  value={this.state.quantity}
                  onChange={(e) => this.setState({quantity: e.target.value})}
                  min="0"
                />
              </div>
              <div className="control">
                <button className="button is-info" onClick={e => this.addToTodaysFood(e)} >+</button>
              </div>
            </div>
          </div>
        </article>
      </div>
    );
  }
}

export default FoodBox;