import React, { Component } from "react";
// import {CHANGE_NAME} from '../service/constants';

export default class Home extends Component {
  constructor(props) {
    console.log("testing props:", props);
    console.log("testing  props.name:", props);
    super(props);
  }

  render() {
    // console.log("props.name:", this.props.name);
    // const {name,handle}=this.props
    return (
      <div>
        <div className="cont">
          <h1>Testing</h1>
          <h1>name:{this.props.data.name}</h1>
          <h1>age:{this.props.data.age}</h1>
          <h1>Addres:{this.props.data.address}</h1>
        </div>
      </div>
    );
  }
}
