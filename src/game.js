import React from 'react';

export default function Game(props) {
  return (
    <button onClick={()=> props.printSomething()}>button</button>
  )

}