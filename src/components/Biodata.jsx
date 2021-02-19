import React, { Component } from "react";
// import {CHANGE_NAME} from '../service/constants';

export default class Home extends Component {
  constructor(props) {
    console.log("props:", props);
    // console.log("props.data.name:", props.data.name);
    super(props);
  }

  render() {

    return (
      <div>
        <div className="cont">
          <h1>name:{this.props.data.name}</h1>
          {/* <h1>age:{this.props.data.age}</h1> */}
          {/* <h1>Addres:{this.props.data.address}</h1> */}
          <button
            onClick={() => {
              // this.props.changedata("arslan")
              this.props.changedata({
                name: "arslan",
                age: 25,
                address: "lahore",
              });
            }}
          >
            Change Data
          </button>
        </div>
       
      </div>
    );
  }
}
