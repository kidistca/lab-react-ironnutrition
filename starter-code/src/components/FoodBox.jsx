import React, { Component } from "react";
import FoodBox from "../foods.json";
import Card from "react-bootstrap/Card";
import CardDeck from "react-bootstrap/CardDeck";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
// import AddFood from "AddFood";

export default class FoodCards extends Component {
  constructor(props) {
    super(props);
    // this.state = {

    // }
  }
  render() {
    // const foods = this.state.foodList;
    // const food = this.props.foods;
    // console.log(foods);
    return (
      <CardDeck>
        <Container>
          <Card>
            <Col>
              {/* {this.props.foods.map(food => ( */}
              <div>
                <Col>
                  <img
                    src={this.props.foods.image}
                    width="100px"
                    height="100px"
                  />
                </Col>

                <Col>
                  <Row>
                    <p>
                      <strong>{this.props.foods.name}</strong> <br />
                      <small>{this.props.foods.calories}</small>
                    </p>
                  </Row>
                </Col>

                <Col>
                  <Row>
                    <input
                      className="input"
                      type="number"
                      value={this.props.foods.quantity}
                    />
                  </Row>
                </Col>

                <Row>
                  <button variant="primary">+</button>
                </Row>
              </div>
              {/* ))} */}
            </Col>
          </Card>
        </Container>
      </CardDeck>
    );
  }
}
