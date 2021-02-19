import React, { Component } from "react";
// import {CHANGE_NAME} from '../service/constants';

export default class Counter extends Component {
  constructor(props) {
    console.log("props counter:", props);
    super(props);
  }

  render() {
    console.log("props.counter:", this.props.counter);
    // const {name,handle}=this.props
    return (
      <div>
        <h1>Welcome to Home</h1>
        <h1>counter:{this.props.counter}</h1>

        <button
          onClick={() => {
            this.props.handleIncrement();
          }}
        >
          INCREMENT
        </button>
        <button
          onClick={() => {
            this.props.handleDecrement();
          }}
        >
          DECREMENT
        </button>
        <button
          onClick={() => {
            this.props.handleReset();
          }}
        >
          RESET
        </button>
      </div>
    );
  }
}
