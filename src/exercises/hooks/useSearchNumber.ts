import { useState, useContext } from 'react';
import { exercisesContext } from '../ExercisesModule';
import { getRandomNumbers } from '../helpers/numbers';

export interface State {
    correct: number;
    find: number;
    numbers: number[];
}

export const useSearchNumber = () => {

    const MIN_TIME: number = 4870;
    const MAX_CORRECT: number = 4;

    const { gameOptions, handleStart, handleScore, handleFeedback, handleTime } = useContext(exercisesContext)

    const [state, setState] = useState<State>({
        correct: 0,
        find: getRandomNumbers(9, 1, 9)[0],
        numbers: getRandomNumbers(9, 1, 9),
    })

    const startGame = () => {
        handleStart('search-number')
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
                find: getRandomNumbers(9, 1, 9)[0],
                numbers: getRandomNumbers(9, 1, 9),
            }));
        }
    }

    return {
        state,
        startGame,
        click
    }

}