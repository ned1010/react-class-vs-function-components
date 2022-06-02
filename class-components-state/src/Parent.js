import React from "react";
import { Child } from "./Child";
import "./styles.css";

export class Parent extends React.Component {
  constructor(props) {
    super(props);

    this.state = { name: "Nidup" };
    /*this binds the newly created method to 
    the current instance of the component */
    this.changeName = this.changeName.bind(this);
  }

  changeName(newName) {
    this.setState({
      name: newName
    });
  }
  render() {
    return (
      <div className="App">
        <h1>Hello CodeSandbox</h1>
        <h2>Start editing to see some magic happen!</h2>
        <h3>This is your {this.state.name} </h3>
        <Child onAddName={this.changeName} />
      </div>
    );
  }
}
