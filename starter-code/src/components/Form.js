import React, { Component } from 'react';
import 'bulma/css/bulma.css';

class Form extends Component {
  constructor(props) {
    super(props);
  }



  handleChange(e) {
    this.props.onChange(e);
  }

  handleFormSubmit(e) {
    this.props.handleFormSubmit(e);
    console.log("handleFormSubmit from Form")
  }


  render() {
    return (
      <div>
        <form onSubmit={e => this.handleFormSubmit(e)}>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            onChange={(e) => this.handleChange(e)}
          />
          <label>Number of calories:</label>
          <input
            type="text"
            name="numberOfCalories"
            onChange={e => this.handleChange(e)}
          />
          <label>Image URL:</label>
          <input
            type="url"
            name="imageUrl"
            onChange={e => this.handleChange(e)}
          />

          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default Form;