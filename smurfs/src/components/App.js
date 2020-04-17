import React, { Component } from "react";
import "./App.css";
import Form from "./Form";
import { connect } from "react-redux";
import { getCharacters } from "../actions";

class App extends Component {

  // componentDidMount(props) {
  //   props.getCharacters(props);
  // }

  render() {
    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <h2>Welcome to your state management version of Smurfs!</h2>
        <Form />
      </div>
    );
  }
}



export default connect(null, {getCharacters})(App);
