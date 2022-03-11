import { useState, useContext } from 'react';
import { exercisesContext } from '../ExercisesModule';
import { getRandomNumbers } from '../helpers/numbers';

export interface State {
    correct: number;
    numbers: number[];
}

export const useCaptureColor = () => {

    const MIN_TIME: number = 4075;
    const MAX_CORRECT: number = 8;

    const { gameOptions, handleStart, handleScore, handleFeedback, handleTime } = useContext(exercisesContext)

    const [state, setState] = useState<State>({
        correct: 0,
        numbers: getRandomNumbers(9, 0, 9),
    })

    const startGame = () => {
        handleStart('capture-color')
        handleTime()
    }

    const click = (numberClicked: number) => {
        if (gameOptions.start === false || gameOptions.finish === true) {
            return
        }

        if (numberClicked === state.numbers[state.correct]) {
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
            }));
        }
    }

    return {
        state,
        startGame,
        click
    }

}