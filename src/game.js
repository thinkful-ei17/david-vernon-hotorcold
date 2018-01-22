import React from 'react';

export default function Game(props) {
  const getInput = function(event) {

    console.log();
  }
  const onSubmit = function(event) {
    console.log('anything');
    event.preventDefault();
    const text = this.textInput.value.trim();
    console.log(text);
    // TODO: Add the card or list
    this.textInput.value = '';
  }

  return (
    <div className='game'>

      <div className='hotOrCold'>
        <p>{props.info}</p>
      </div>
      <input onChange={(e)=> props.setParentState( {input: e.target.value})} className='TheInput' type='number' placeholder='put boring text in here'></input>
      <button onClick={()=> props.changeGuess()}>Guess</button>
      <div className='guessCount'>
        <p>Guess#0</p>
      </div>
    </div>
  )

}
