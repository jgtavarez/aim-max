import { useState, useContext, useEffect } from 'react';
import { exercisesContext } from '../ExercisesModule';
import { getRandomColors } from '../helpers/strings';

export interface State {
    color: string;
    text: string;
}

export const useColorText = () => {

    const MIN_TIME: number = 990;

    const { gameOptions, handleStart, handleScore, handleFeedback, handleTime } = useContext(exercisesContext)

    const [state, setState] = useState<State>({
        color: getRandomColors()[0],
        text: getRandomColors()[0]
    })

    const startGame = () => {
        handleStart('color-text')
        check()
    }

    useEffect(() => {
        if (gameOptions.start) {
            check()
        }
    }, [state])


    const check = () => {

        if (state.color === state.text) {
            handleTime()
        } else {
            setTimeout(function () {
                setState(prev => ({
                    ...prev,
                    color: getRandomColors()[0],
                    text: getRandomColors()[0]
                }));
            }, 1500);
        }
    }

    const click = () => {
        if (gameOptions.start === false || gameOptions.finish === true) {
            return
        }

        if (state.color === state.text) {
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

    return {
        state,
        startGame,
        click
    }

}