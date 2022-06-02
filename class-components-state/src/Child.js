import React from "react";

export class Child extends React.Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    event.preventDefault();
    this.props.onAddName(event.target.value);
  }
  render() {
    return (
      <div>
        <select onClick={this.handleChange}>
          <option value="Nidup"> Nidup </option>
          <option value="Sonam"> Sonam </option>
          <option value="Thinley"> Thinley </option>
        </select>
      </div>
    );
  }
}
