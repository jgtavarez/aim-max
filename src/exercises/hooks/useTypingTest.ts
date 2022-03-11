import { useState, useContext } from 'react';
import { exercisesContext } from '../ExercisesModule';
import { getSplitWords } from '../helpers/strings';

export interface State {
    attempt: number;
    incorrect: number[];
    correct: number[];
    words: string[];
    value: string
}

export const useTypingTest = () => {

    const MIN_TIME: number = 120000;
    const MIN_AVERAGE: number = 70;
    const MAX_CORRECT: number = 90;

    const { gameOptions, handleStart, handleScore, handleFeedback, handleTime } = useContext(exercisesContext)

    const [state, setState] = useState<State>({
        attempt: 0,
        incorrect: [],
        correct: [],
        words: getSplitWords(),
        value: ''
    })

    const startGame = () => {
        handleStart('typing-test')
        handleTime()
    }

    const uptade = (event: any) => {
        setState(prev => ({
            ...prev,
            value: event.target.value
        }));

    }

    const enter = (event: any) => {
        if (gameOptions.start === false || gameOptions.finish === true) {
            return
        }

        if (event.keyCode === 32) {
            

            if (event.target.value.trim() === state.words[state.attempt]) {
                setState(prev => ({
                    ...prev,
                    correct: [...prev.correct, state.attempt]
                }));
            } else {
                setState(prev => ({
                    ...prev,
                    incorrect: [...prev.incorrect, state.attempt]
                }));
            }

            setState(prev => ({
                ...prev,
                attempt: state.attempt + 1,
                value: ''
            }));

            if (state.attempt === MAX_CORRECT) {
                let date2 = new Date().getTime()
                let score = (date2 - gameOptions.actualTime)
                let average = Math.round((state.correct.length/91)*100)

                handleScore(score)

                if (score <= MIN_TIME && average>=MIN_AVERAGE) {
                    handleFeedback("Approved Test")
                } else {
                    handleFeedback(`Test failed. Time must be less than ${MIN_TIME} ms and precision higher than ${MIN_AVERAGE}%`)
                }

                return
            }

        }
    }

    return {
        state,
        startGame,
        enter,
        uptade,
        gameOptions
    }

}