import { useState, useContext } from 'react';
import { exercisesContext } from '../ExercisesModule';
import { getRandomSeconds } from '../helpers/time';

export interface State {
    correct: number;
    x: number;
    y: number;
}

export const useTargetShoot = () => {

    const MIN_TIME: number = 7950;
    const MAX_CORRECT: number = 14;

    const { gameOptions, handleStart, handleScore, handleFeedback, handleTime } = useContext(exercisesContext)

    const [state, setState] = useState<State>({
        correct: 0,
        x: 490,
        y: 290
    })

    const startGame = () => {
        handleStart('target-shoot')
        handleTime()
    }

    const click = () => {
        if (gameOptions.start === false || gameOptions.finish === true) {
            return
        }

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
            x: getRandomSeconds(1, 950),
            y: getRandomSeconds(1, 550)
        }));
    }

    return {
        state,
        startGame,
        click
    }

}