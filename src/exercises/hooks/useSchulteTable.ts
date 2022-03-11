import { useState, useContext } from 'react';
import { exercisesContext } from '../ExercisesModule';
import { getRandomNumbers } from '../helpers/numbers';

export interface State {
    correct: number;
    find: number;
    numbers: number[];
}

export const useSchulteTable = () => {

    const MIN_TIME: number = 8950;
    const MAX_CORRECT: number = 15;

    const { gameOptions, handleStart, handleScore, handleFeedback, handleTime } = useContext(exercisesContext)

    const [state, setState] = useState<State>({
        correct: 0,
        find: 1,
        numbers: getRandomNumbers(16, 1, 16),
    })

    const startGame = () => {
        handleStart('schulte-table')
        handleTime()
    }

    const click = (numberClicked: number) => {
        if (gameOptions.start === false || gameOptions.finish === true) {
            return
        }

        if (numberClicked === state.find) {
            if (state.correct === MAX_CORRECT) {
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

            setState(prev => ({
                ...prev,
                correct: state.correct + 1,
                find: prev.find+1,
            }));
        }
    }

    return {
        state,
        startGame,
        click
    }

}