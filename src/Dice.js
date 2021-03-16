import React from 'react';
import './Dice.css'


function Dice(props){
    return(
            <div className = "container">
            {/* Props contain the current number in the diceRolls array, which is the latest number that has been rolled.  */}
            <div className = "dice">{props.currentNumber}</div> 
            </div>        
        )
}

export default Dice; 