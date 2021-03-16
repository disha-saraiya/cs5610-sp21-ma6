import React from 'react';
import './Dice.css'


function Dice(props){
    return(
            <div className = "container">
            <div className = "dice">{props.currentNumber}</div> 
            </div>        
        )
}

export default Dice; 