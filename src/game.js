import React from 'react';

export default function Game(props) {
  const getInput = function(event) {
    console.log(this.textInput.value());
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
        <p>test</p>
      </div>
      <form className="card add-form" onSubmit={(e) => onSubmit(e)}>
          <input
              type="text"
              // ref={input => this.textInput = input}
              // aria-label={label}
          />
          <button>Add</button>
      </form>
      {/* <button onClick={()=> getInput()}>Guess</button> */}
      <div className='guessCount'>
        <p>Guess#0</p>
      </div>
      <div className='arrayTiles'>

      </div>
    </div>
  )

}