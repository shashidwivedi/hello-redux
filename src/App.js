import React, { useState } from "react";
import HelloWorld from "./HelloWorld";
import reducer from "./reducers";
import { createStore } from "redux";

const initialState = { tech: "React " };
const store = createStore(reducer, initialState);

class App extends React.Component {
  render() {
    return <div>
      <HelloWorld tech={store.getState().tech} />
    </div>
  }
}

export default App;
