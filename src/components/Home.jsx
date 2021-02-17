import React, { Component } from "react";
// import {CHANGE_NAME} from '../service/constants';

export default class Home extends Component {
  constructor(props) {
    console.log("props:", props);
    console.log("props.name:", props.name);
    super(props);
  }

  render() {
    // console.log("props.name:", this.props.name);
    // const {name,handle}=this.props
    return (
      <div>
<div className="cont">
<h1>name:{this.props.name}</h1>
        {/* <h1>age:{this.props.age}</h1> */}
        {/* <h1>Addres:{this.props.address}</h1> */}
</div>
        <h1>Welcome to Home</h1>
        
        <h1>name:{this.props.counter}</h1>
     
        <button
          onClick={() => {
            this.props.changedata("arslan")
            // this.props.changedata({name:"arslan",age:25,address:"lahore"});
          }}
        >
          Change Data
        </button>
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
