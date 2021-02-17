import React, { Component } from "react";
// import {CHANGE_NAME} from '../service/constants';

export default class Home extends Component {
  constructor(props) {
    console.log("props:", props);
    super(props);
  }

  render() {
    console.log("props.name:", this.props.name);
    // const {name,handle}=this.props
    return (
      <div>
        <h1>Welcome to Home</h1>
        <h1>name:{this.props.name}</h1>
        {/* <h1>Addres:{this.props.myaddress}</h1> */}
        <button
          onClick={() => {
            this.props.handleChangeName("wali is here");
          }}
        >
          Add To Cart
        </button>
      </div>
    );
  }
}
