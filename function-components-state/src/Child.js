import React from "react";

export default function Child(props) {
  function handleChange(event) {
    event.preventDefault();
    props.changeName(event.target.value);
    console.log("got clicked");
  }

  return (
    <div>
      <select onClick={handleChange}>
        <option value="Nidup">Nidup</option>
        <option value="Sonam">Sonam</option>
        <option value="Thinley">Thinley </option>
      </select>
    </div>
  );
}
