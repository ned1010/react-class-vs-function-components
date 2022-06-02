import React, { useState } from "react";
import Child from "./Child";

import "./styles.css";

export default function Parent() {
  const [name, setName] = useState("Nidup");

  function addName(name) {
    setName(name);
  }

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <h3>Hello this your {name}</h3>
      <Child changeName={addName} />
    </div>
  );
}
