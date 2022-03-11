import { useState, useContext } from 'react';
import { exercisesContext } from '../ExercisesModule';
import { getRandomSeconds } from '../helpers/time';
const audio = require("../assets/correct.mp3");

export interface State {
    correct: number;
    key: number;
}

export const usePressKey = () => {

    const MIN_TIME: number = 7160;
    const MAX_CORRECT: number = 14;

    const { gameOptions, handleStart, handleScore, handleFeedback, handleTime } = useContext(exercisesContext)

    const [state, setState] = useState<State>({
        correct: 0,
        key: getRandomSeconds(37, 40)
    })

    const startGame = () => {
        handleStart('press-key')
        handleTime()
    }

    const click = (event: any) => {
        if (gameOptions.start === false || gameOptions.finish === true) {
            return
        }

        if (event.keyCode === state.key) {

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
                key: getRandomSeconds(37, 40)
            }));
            new Audio(audio).play()


        }
    }

    return {
        state,
        startGame,
        click
    }

}