import React, { Component } from "react";
// import {CHANGE_NAME} from '../service/constants';

export default class Home extends Component {
  constructor(props) {
    console.log("props:", props);
    super(props);
  }

  render() {
    console.log("props.user.name:", this.props.user.name);
    // const {name,handle}=this.props
    return (
      <div>
        <h1>Welcome to Home</h1>
        <h1>name:{this.props.user.name}</h1>
        <h1>age:{this.props.user.age}</h1>
        <h1>addres:{this.props.user.address}</h1>
        {/* <h1>Addres:{this.props.myaddress}</h1> */}
        <button
          onClick={() => {
            this.props.handleChangeName({name:"wali is here",age:34,address:"user lhr"});
          }}
        >
          Add To Cart
        </button>
      </div>
    );
  }
}
