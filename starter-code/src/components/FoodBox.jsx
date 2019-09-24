import React, { Component } from "react";
import foods from "../foods.json";
import Card from "react-bootstrap/Card";
import CardDeck from "react-bootstrap/CardDeck";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
// import AddFood from "AddFood";

export default class FoodCards extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Container>
        <img src={this.props.foods.image} width="100px" height="100px" />
        <strong>{this.props.foods.name} </strong>
        <span>{this.props.foods.calories}</span>
        <input
          className="input"
          type="number"
          value={this.props.foods.quantity}
        />
        <button variant="primary">+</button>
      </Container>
    );
  }
}
