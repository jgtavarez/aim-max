import { useState, useContext } from 'react';
import { exercisesContext } from '../ExercisesModule';
import { getRandomNumbers } from '../helpers/numbers';

export interface State {
    impostors: number[];
    correct: number;
}

export const useFindImpostor = () => {

    const MIN_TIME: number = 2800;
    const MAX_CORRECT: number = 1;

    const { gameOptions, handleStart, handleScore, handleFeedback, handleTime } = useContext(exercisesContext)

    const [state, setState] = useState<State>({
        correct: 0,
        impostors: getRandomNumbers(2, 0, 15),
    })

    const startGame = () => {
        handleStart('find-impostor')
        handleTime()
    }

    const click = (boxClickedIndex: number) => {
        if (gameOptions.start === false || gameOptions.finish === true) {
            return
        }
        
        if (state.impostors.includes(boxClickedIndex)) {
            setState(prev => ({
                ...prev,
                correct: prev.correct + 1,
                impostors: updatedImpostor(state.impostors, boxClickedIndex)
            }));

            if (state.correct === MAX_CORRECT) {
                let date2 = new Date().getTime()
                let score = (date2 - gameOptions.actualTime)
    
                handleScore(score)
    
                if (score <= MIN_TIME) {
                    handleFeedback("Approved Test")
                } else {
                    handleFeedback(`Test failed. Time must be less than ${MIN_TIME} ms`)
                }
            }
        }
        
    }

    const updatedImpostor = (array: number[], value: number) => {
        let index = array.indexOf(value)
        return array.splice(index, 1)
    }

    return {
        state,
        startGame,
        click
    }

}