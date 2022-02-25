import { useState, useContext, useEffect } from 'react';
import { exercisesContext } from '../ExercisesModule';
import { getRandomShapes } from '../helpers/strings';

export interface State {
    static: string;
    dynamic: string;
}

export const useShapeChange = () => {

    const MIN_TIME: number = 530;

    const { gameOptions, handleStart, handleScore, handleFeedback, handleTime } = useContext(exercisesContext)

    const [state, setState] = useState<State>({
        static: getRandomShapes()[0],
        dynamic: getRandomShapes()[0]
    })

    const startGame = () => {
        handleStart()
        check()
    }

    useEffect(() => {
        if (gameOptions.start) {
            check()
        }
    }, [state])


    const check = () => {

        if (state.static === state.dynamic) {
            handleTime()
        } else {
            setTimeout(function () {
                setState(prev => ({
                    ...prev,
                    dynamic: getRandomShapes()[0]
                }));
            }, 1500);
        }
    }

    const click = () => {
        if (gameOptions.start === false || gameOptions.finish === true) {
            return
        }

        if (state.static === state.dynamic) {
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