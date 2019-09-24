import React, { Component } from "react";
// import Form from "react-bootstrap/Form";

export default class AddFood extends Component {
  render() {
    return (
      <div>
        <form>
          <label>Name:</label>
          <input type="text" name="name" value={[this.state.foodList.name]} />

          <label>Calories:</label>
          <input
            type="text"
            name="calories"
            value={this.state.foodList.calories}
          />

          <label>quantity</label>
          <input type="text" name="calories" value="lll" />
          <button>Submit</button>
        </form>
        ;
      </div>
    );
  }
}
