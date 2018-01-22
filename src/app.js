import React from 'react';
import Game from './game';
import NumberTile from './numbertile';

export default class App extends React.Component {
  constructor (props) {
    super(props);
    this.setParentState = this.setParentState.bind(this);
    this.printState = this.printState.bind(this);

    this.state = {
      guessedNumbers: [],
      correctNumber: this.genRandNumber(),
      userGuess: null,
      info: 'hello'
    }
  }
  //this function
  componentDidUpdate() {
    console.log('I UPDATED! ');
  }

  genRandNumber() {
    return Math.floor(Math.random() * (101)) ;
  }

  setParentState(input) {
    console.log(this);
    this.setState(input);
  }

  reset() {
    this.setCorrectNumber();
    this.setState({guessedNumbers: []});
  }

  isInputCorrect() {
    console.log('This ran! i checked.');
    console.log(typeof(Number(this.state.userGuess)));
    console.log(typeof(this.state.correctNumber));
    if (Number(this.state.userGuess) === this.state.correctNumber) {
      console.log('YOU WON AT LIFE.');
      this.setState({info: 'YOU WON'});
      this.reset();
    }

    else if (Math.abs(this.state.correctNumber - this.state.userGuess) <= 30) {
        this.setState({info: 'Fireman!'});
    }

    else if(Math.abs(this.state.correctNumber - this.state.userGuess) >= 30) {
      this.setState({info: 'Captain Cold'});
    }

  }

//changes guessedNumbers & userGuess
  changeGuess = () => {
    this.setState({
      userGuess: this.state.input,
      guessedNumbers: [...this.state.guessedNumbers, this.state.input]
    }, this.isInputCorrect);
    // console.log('guess ran!');
  }

  //for resetting correctNumber when we win
  setCorrectNumber() {
    let newRandNumber = this.genRandNumber();
    this.setState({correctNumber: newRandNumber});
    console.log('This ran!');
  }

  printSomething() {
    console.log('test')
  }

  addThisToState(e) {
    console.log(e)
  }

  printState(){
    console.log("This ran!!!");
    //console.log(e);
    console.log(this);
    console.log(this.state);
    //this.state
  }
//how do i set state in a stateless function

  render() {

    let arrOfTiles = this.state.guessedNumbers.map((tile) => {
      return <NumberTile  key={tile} number={tile} />
    });

    return (
    <div className='app'>
      <a>WHAT?</a>
      <a>+NEW GAME</a>
      <h1 className='title'>HOT OR COLD?</h1>
      <p> {this.state.correctNumber} </p>
      <button onClick={() => this.printState()}>PRINT</button>
      <Game info={this.state.info} setParentState={this.setParentState} changeGuess={this.changeGuess} />
      <div>
      {arrOfTiles}
      </div>
    </div>
    )
  }
}
