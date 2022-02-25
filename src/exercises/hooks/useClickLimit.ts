import { useState, useContext, useEffect } from 'react';
import { exercisesContext } from '../ExercisesModule';

export interface State {
    click: number;
    time: number;
}

export const useClickLimit = () => {

    const MIN_CLICKS: number = 65;

    const { gameOptions, handleStart, handleScore, handleFeedback, handleTime } = useContext(exercisesContext)


    const [state, setState] = useState<State>({
        click: 0,
        time: 10,
    })

    const startGame = () => {
        handleStart()
        time()
    }

    useEffect(() => {
        if (gameOptions.start) {
            time()
        }
    }, [state.time])

    const time = () => {
        if (state.time > 0) {
            setTimeout(function () {
                setState(prev => ({
                    ...prev,
                    time: prev.time - 1
                }));
            }, 1000);
        }
    }

    const click = () => {
        if (gameOptions.start === false || gameOptions.finish === true) {
            return
        }

        if (state.time === 0) {

            handleScore(state.click)

            if (state.click >= MIN_CLICKS) {
                handleFeedback("Approved Test")
            } else {
                handleFeedback(`Test failed. Clicks must be higher than ${MIN_CLICKS}`)
            }

            return
        }

        setState(prev => ({
            ...prev,
            click: prev.click + 1
        }));
    }

    return {
        state,
        startGame,
        click
    }

}