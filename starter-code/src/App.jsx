import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import FoodBox from "./components/FoodBox";
import Container from "react-bootstrap/Container";
import foods from "./foods.json";

class App extends Component {
  constructor() {
    super();
    this.state = {
      foodList: foods,
      newFood: {
        name: "",
        calories: "",
        quantity: 0
      },
      addState: false
    };
    this.addNewFood = this.addNewFood.bind(this);
    this.addName = this.addName.bind(this);
    this.addCalories = this.addCalories.bind(this);
    this.addQuantity = this.addQuantity.bind(this);
    this.showForm = this.showForm.bind(this);
    this.search = this.search.bind(this);
  }
  showForm() {
    this.setState({
      addState: true
    });
  }
  addNewFood() {
    this.setState({
      foodList: [...this.state.foodList, this.state.newFood],
      addState: false
    });
  }
  addName(event) {
    this.setState({
      newFood: { ...this.state.newFood, name: event.target.value }
    });
  }
  addCalories(event) {
    this.setState({
      newFood: { ...this.state.newFood, calories: event.target.value }
    });
  }
  addQuantity(event) {
    this.setState({
      newFood: { ...this.state.newFood, quantity: event.target.value }
    });
  }
  search(event) {
    this.setState({
      foodList: [...this.state.foodList].filter(food =>
        food.name.includes(event.target.value)
      )
    });
  }

  render() {
    const foods = this.state.foodList;
    return (
      <div>
        <div>
          <input
            type="text"
            value={this.state.foodList.name}
            onChange={this.search}
          />
        </div>
        {foods.map((Onefood, key) => (
          <FoodBox foods={Onefood} key={key} />
        ))}
        {this.state.addState && (
          <Container>
            <form>
              <div>
                <label htmlFor="name">Name: </label>
                <input
                  type="text"
                  name="name"
                  value={this.state.foodList.name}
                  onChange={this.addName}
                />
              </div>
              <div>
                <label htmlFor="calories">Calories: </label>
                <input
                  type="text"
                  name="calories"
                  value={this.state.foodList.calories}
                  onChange={this.addCalories}
                />
              </div>
              <div>
                <label htmlFor="quantity">Quantity: </label>
                <input
                  type="number"
                  name="quantity"
                  value={this.state.foodList.quantity}
                  onChange={this.addQuantity}
                />
              </div>
            </form>
            <button onClick={this.addNewFood}>Add new</button>
          </Container>
        )}

        <button onClick={this.showForm}>Show form</button>
      </div>
    );
  }
}

export default App;
