import React from 'react';
import Game from './game';

export default class App extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      guessedNumbers: [],
      correctNumber: null,
      userGuess: null
    }
  }

  printSomething() {
    console.log('test')
  }

  render() {
    return (
    <div className='app'>
      <a>WHAT?</a>
      <a>+NEW GAME</a>
      <h1 className='title'>HOT OR COLD?</h1>
      <Game />
    </div>
    )
  }
}