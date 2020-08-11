import React, { Component } from "react";
import "./styles.css";

export default class FunctionalsetState extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
      name: "Duc"
    };
  }
  increaseCount() {
    this.setState(({ count, name }) => {
      return { count: count + 1, name: name + " Mad" };
    });
  }
  render() {
    return (
      <div className="App">
        <h1>Hello CodeSandbox</h1>
        <h2>Start editing to see some magic happen!</h2>
        <h2>{this.state.count}</h2>
        <h2>{this.state.name}</h2>
        <button onClick={() => this.increaseCount()}>Increase</button>
      </div>
    );
  }
}