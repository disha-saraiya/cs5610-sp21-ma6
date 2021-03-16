import React from 'react';

import {useSelector, useDispatch} from 'react-redux'; 
import {rollDice, clearDice} from './actions'; 
import Dice from './Dice.js'; 


function App() {

  const diceSum = useSelector(state => state.dice); 
  const dispatch = useDispatch(); 

    return (
    
    // requirement - one container

    <div className="App">
      <button onClick = {() => dispatch(rollDice())}> Roll Dice </button>
      <button onClick = {() => dispatch(clearDice())}> Clear Dice </button>

      {/* The state diceSum has two components - the current sum of the dice, and the diceRolls array that contains all the rolls of the dice.  */}
      <h2> Sum : {diceSum.sum} </h2>

      {/*Using the map function to map the array of dice rolls into a Dice component */}
      {/* Also used a random key to get rid of the key warning.  */}

      {diceSum.diceRolls.map((e) => {
        return <Dice currentNumber = {e}  key = { 100* Math.random() }/>
      })}
    </div>
  );
}

export default App;
