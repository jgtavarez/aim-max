import { useState, useContext } from 'react';
import { exercisesContext } from '../ExercisesModule';
import { getRandomNumbers } from '../helpers/numbers';

export interface State {
    correct: number;
    lines: number[];
}

export const useLongestLine = () => {

    const MIN_TIME: number = 6100;
    const MAX_CORRECT: number = 9;

    const { gameOptions, handleStart, handleScore, handleFeedback, handleTime } = useContext(exercisesContext)

    const [state, setState] = useState<State>({
        correct: 0,
        lines: getRandomNumbers(5, 1, 5),
    })

    const startGame = () => {
        handleStart()
        handleTime()
    }

    const click = (lineClickedIndex: number) => {
        if (gameOptions.start === false || gameOptions.finish === true) {
            return
        }

        if (lineClickedIndex === 5) {
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
                correct: prev.correct + 1,
                lines: getRandomNumbers(5, 1, 5),
            }));
        }

    }

    return {
        state,
        startGame,
        click
    }

}