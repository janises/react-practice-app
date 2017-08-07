import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import {Switch, Route} from "react-router-dom";
import Header from "./Header/Header";
import RonSwanson from "./RonSwanson/RonSwanson";
import Landing from "./Landing/Landing";
import TicTacToe from "./TicTacToe/TicTacToe";
import Canvas from "./Canvas/Canvas";

class App extends Component {
  render() {
    return (
      <div className="App">
       <Header />
        <Switch>
          <Route component={Landing} exact path="/" />
          <Route component={RonSwanson} path="/ronswanson"/>
          <Route component={TicTacToe} path="/tictactoe"/>
          <Route component={Canvas} path="/canvas" />
        </Switch>
      </div>
    );
  }
}

export default App;
