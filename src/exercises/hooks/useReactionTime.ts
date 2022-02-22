import { useState } from 'react';
import { getRandomSeconds } from '../helpers/time';

export const useReactionTime = () => {

    const MIN_TIME: number = 380;

    const [gameOptions, setGameOptions] = useState({
        start: false,
        green: false,
        actualTime: 0,
        score: 0,
        feedback: '',
        finish: false
    })

    const startGame = () => {
        setGameOptions(prev => ({
            ...prev,
            start: true
        }));

        const second = getRandomSeconds(5000, 1000)

        setTimeout(() => {
            setGameOptions(prev => ({
                ...prev,
                green: true,
                actualTime: new Date().getTime()
            }));
        }, second);
    }

    const click = () => {
        if(gameOptions.start===false || gameOptions.finish===true){
            return
        }

        if (gameOptions.green) {
            let date2 = new Date().getTime()
            let score = (date2 - gameOptions.actualTime)

            setGameOptions(prev => ({
                ...prev,
                score: score,
                finish: true
            }));

            if (score <= MIN_TIME) {
                setGameOptions(prev => ({
                    ...prev,
                    feedback: "Approved Test"
                }));
            } else {
                setGameOptions(prev => ({
                    ...prev,
                    feedback: `Test failed. Time must be less than ${MIN_TIME} ms`
                }));
            }
        }else{
            setGameOptions(prev => ({
                ...prev,
                score: 999,
                feedback: `Too soon!`,
                finish: true
            }));
        }
    }

    return {
        gameOptions,
        startGame,
        click
    }

}