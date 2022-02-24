import { useState, useContext } from 'react';
import { getRandomSeconds } from '../helpers/time';
import { exercisesContext } from '../ExercisesModule';

export interface State {
    green: boolean;
}

export const useReactionTime = () => {

    const MIN_TIME: number = 380;

    const { gameOptions, handleStart, handleScore, handleFeedback, handleTime } = useContext(exercisesContext)


    const [state, setState] = useState<State>({
        green: false,
    })

    const startGame = () => {
        handleStart()

        const second = getRandomSeconds(1000, 5000)

        setTimeout(() => {
            setState(prev => ({
                ...prev,
                green: true,
            }));
            handleTime()
        }, second);
    }

    const click = () => {
        if (gameOptions.start === false || gameOptions.finish === true) {
            return
        }

        if (state.green) {
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