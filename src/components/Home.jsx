import React, { Component } from "react";
// import {CHANGE_NAME} from '../service/constants';
let m = 30;
const n = 40;
export default class Home extends Component {
  constructor(props) {
    super(props);
  }
  m = 44;
  n = 77;
  render() {
    console.log("m,n: props.counter in home", m, n, this.props);
    // const {name,handle}=this.props
    return (
      <div>
        <h1>Welcome to Home</h1>
        <h1>Counter:{this.props.counter}</h1>

        <button
          onClick={() => {
            this.props.increment();
          }}
        >
          Increment
        </button>
        <button
          onClick={() => {
            this.props.decrement();
          }}
        >
          Decrement
        </button>
        <button
          onClick={() => {
            this.props.reset();
          }}
        >
          Reset
        </button>
      </div>
    );
  }
}
