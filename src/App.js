import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import DisplaySimpson from './DisplaySimpson';

const sampleSimpson = {
  character: 'Homer Simpson',
  image: 'https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FHomerSimpson.png?1497567511939',
  quote: 'Facts are meaningless. You could use facts to prove anything thats even remotely true.'
  }

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
     quote: sampleSimpson
    };
    this.getQuote = this.getQuote.bind(this);
  }

  getQuote() {
    // Send the request
    axios.get('https://quests.wilders.dev/simpsons-quotes/quotes')
      // Extract the DATA from the received response
      .then(response => response.data)
      // Use this data to update the state
      .then(data => {
        this.setState({
          quote: data[0],
        });
    });
  }
  render() {
  return (
    <div className="App">
      <DisplaySimpson quote={this.state.quote} />
  <button type="button" onClick={this.getQuote}>Get quote</button>
    </div>
  );
}}

export default App;
