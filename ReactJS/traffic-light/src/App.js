import React, { Component } from 'react'
import './App.css'
import TrafficLight from './components/TrafficLight'

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <TrafficLight/>
      </div>
    )
  }
}

