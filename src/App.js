import React from 'react';

import {useSelector, useDispatch} from 'react-redux'; 
import {rollDice, clearDice} from './actions'; 
import Dice from './Dice.js'; 


function App() {

  const diceSum = useSelector(state => state.dice); 
  const dispatch = useDispatch(); 

  const onRollDiceClick = () => {
    console.log(diceSum.diceRolls);
    dispatch(rollDice()); 
  }

  let index = diceSum.diceRolls.length -1 ; 

  let currentNumber = diceSum.diceRolls[index];


    return (
    <div className="App">
      <button onClick = {() => onRollDiceClick()}> Roll Dice </button>
      <button onClick = {() => dispatch(clearDice())}> Clear Dice </button>
      <h2> Sum : {diceSum.sum} </h2>
      {/* Sending the dice the last element in the diceRolls array i.e the most current number drawn.  */}
      <Dice currentNumber = {currentNumber} />
    </div>
  );
}

export default App;
