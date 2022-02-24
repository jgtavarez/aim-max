import { useState, useContext } from 'react';
import { exercisesContext } from '../ExercisesModule';
import { getRandomNumbers } from '../helpers/numbers';

export interface State {
    correct: number;
    show: boolean;
    found: number[];
    memory: number[];
}

export const useVisualMemory = () => {

    const MIN_TIME: number = 8150;
    const MAX_CORRECT: number = 14;

    const { gameOptions, handleStart, handleScore, handleFeedback, handleTime } = useContext(exercisesContext)

    const [state, setState] = useState<State>({
        correct: 0,
        show: true,
        found: [],
        memory: getRandomNumbers(5, 0, 25),
    })

    const startGame = () => {
        handleStart()
        handleTime()

        barajar()
    }

    const barajar = () => {
        setTimeout(() => {
            setState(prev => ({
                ...prev,
                show: !prev.show
            }));
        }, 1000);
    }

    const click = (boxClickedIndex: number) => {
        if (gameOptions.start === false || gameOptions.finish === true) {
            return
        }

        if (state.memory.includes(boxClickedIndex) && !state.found.includes(boxClickedIndex) && !state.show) {
            setState(prev => ({
                ...prev,
                correct: prev.correct + 1,
                found: [...prev.found, boxClickedIndex]
            }));

            if (state.correct === 4 || state.correct === 9) {
                setState(prev => ({
                    ...prev,
                    show: true,
                    found: [],
                    memory: getRandomNumbers(5, 0, 25),
                }));

                barajar()
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
            }
        }

    }

    return {
        state,
        startGame,
        click,
        gameOptions
    }

}