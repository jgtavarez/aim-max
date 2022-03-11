import { useState, useContext } from 'react';
import { exercisesContext } from '../ExercisesModule';
import { getRandomColors } from '../helpers/strings';

export interface State {
    correct: number;
    find: string;
    colors: string[];
}

export const useSearchColor = () => {

    const MIN_TIME: number = 4380;
    const MAX_CORRECT: number = 4;

    const { gameOptions, handleStart, handleScore, handleFeedback, handleTime } = useContext(exercisesContext)

    const [state, setState] = useState<State>({
        correct: 0,
        find: getRandomColors()[0],
        colors: getRandomColors()
    })

    const startGame = () => {
        handleStart('search-color')
        handleTime()
    }

    const click = (colorClicked: string) => {
        if (gameOptions.start === false || gameOptions.finish === true) {
            return
        }

        if (colorClicked === state.find) {
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
                find: getRandomColors()[0],
                colors: getRandomColors()
            }));
        }
    }

    return {
        state,
        startGame,
        click
    }

}