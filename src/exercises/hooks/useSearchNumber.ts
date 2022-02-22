import { useState, useContext } from 'react';
import { exercisesContext } from '../ExercisesModule';
import { getRandomNumbers } from '../helpers/numbers';

export const useSearchNumber = () => {

    const MIN_TIME: number = 4870;
    const MAX_CORRECT: number = 4;

    const { gameOptions, handleStart, handleScore, handleFeedback, handleTime } = useContext(exercisesContext)

    const [state, setState] = useState({
        correct: 0,
        find: getRandomNumbers()[0],
        numbers: getRandomNumbers(),
    })

    const startGame = () => {
        handleStart()
        handleTime()
    }

    const click = (numberClicked: number) => {
        if (gameOptions.start === false || gameOptions.finish === true) {
            return
        }

        if(state.correct===MAX_CORRECT){
            let date2 = new Date().getTime()
            let score = (date2 - gameOptions.actualTime)

            handleScore(score)

            if (score <= MIN_TIME) {
                handleFeedback("Approved Test")
            } else {
                handleFeedback(`Test failed. Time must be less than ${MIN_TIME} ms`)
            }

            return
        }

        if (numberClicked === state.find) {
            setState(prev => ({
                ...prev,
                correct: state.correct+1,
                find: getRandomNumbers()[0],
                numbers: getRandomNumbers(),
            }));
        }
    }

    return {
        state,
        startGame,
        click
    }

}