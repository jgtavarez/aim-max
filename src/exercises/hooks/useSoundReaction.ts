import { useState, useContext } from 'react';
import { getRandomSeconds } from '../helpers/time';
import { exercisesContext } from '../ExercisesModule';
const audio = require("../assets/sound.mp3");

export interface State {
    sound: boolean;
}

export const useSoundReaction = () => {

    const MIN_TIME: number = 440;

    const { gameOptions, handleStart, handleScore, handleFeedback, handleTime } = useContext(exercisesContext)


    const [state, setState] = useState<State>({
        sound: false,
    })

    const startGame = () => {
        handleStart()

        const second = getRandomSeconds(1000, 6000)

        setTimeout(() => {
            setState(prev => ({
                ...prev,
                sound: true,
            }));
            new Audio(audio).play()
            handleTime()
        }, second);
    }

    const click = () => {
        if (gameOptions.start === false || gameOptions.finish === true) {
            return
        }

        if (state.sound) {
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
        startGame,
        click
    }

}