import { useState, useContext, useEffect } from 'react';
import { getRandomSeconds } from '../helpers/time';
import { exercisesContext } from '../ExercisesModule';

export interface State {
    lightIndex: number;
    times: number[];
}

export const useTrafficLights = () => {

    const MIN_TIME: number = 350;

    const { gameOptions, handleStart, handleScore, handleFeedback, handleTime } = useContext(exercisesContext)


    const [state, setState] = useState<State>({
        lightIndex: 0,
        times: [1000, 1000, 1000, getRandomSeconds(2000, 6000)],
    })

    const startGame = () => {
        handleStart('traffic-lights')
        nextLight()
    }

    useEffect(() => {
        if (gameOptions.start) {
            nextLight()
        }
    }, [state])

    const nextLight = () => {
        if (state.lightIndex === 4) {
            handleTime()
        } else {
            setTimeout(() => {
                setState(prev => ({
                    ...prev,
                    lightIndex: prev.lightIndex + 1
                }));
                handleTime()
            }, state.times[state.lightIndex]);
        }
    }

    const click = () => {
        if (gameOptions.start === false || gameOptions.finish === true) {
            return
        }

        if (state.lightIndex === 4) {
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