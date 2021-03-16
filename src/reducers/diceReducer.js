// Requirement - atleast one reducer

export default function DiceReducer(state = {
    sum: 0, 
    diceRolls: []
} , action){

    //Reference for generating random number : https://stackoverflow.com/questions/1527803/generating-random-whole-numbers-in-javascript-in-a-specific-range
    //Here, generating a random number between 1(inclusive) and 7(exclusive)
    const random = Math.floor(Math.random() * (7 - 1) + 1);


    if(action.type === 'CLEAR_DICE'){
        return {
            sum: 0, 
            diceRolls: []
        }
    }else if(action.type === 'ROLL_DICE'){
        return{
            ...state, 
            sum: state.sum + random, 
            diceRolls : [...state.diceRolls, random],
        }
        
    }
    return state

} 