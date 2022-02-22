import { useState } from 'react';

export interface State {
    start: boolean;
    actualTime: number;
    score: number;
    feedback: string;
    finish: boolean;
}

export const useExercises = () => {

    const [gameOptions, setGameOptions] = useState<State>({
        start: false,
        actualTime: 0,
        score: 0,
        feedback: '',
        finish: false
    })

    const handleStart = () => {
        setGameOptions(prev => ({
            ...prev,
            start: true
        }));
    }

    const handleScore = (score: number) => {
        setGameOptions(prev => ({
            ...prev,
            score: score,
            finish: true
        }));
    }

    const handleFeedback = (feedback: string) => {
        setGameOptions(prev => ({
            ...prev,
            feedback: feedback
        }));
    }

    const handleTime = () => {
        setGameOptions(prev => ({
            ...prev,
            actualTime: new Date().getTime()
        }));
    }

    return {
        gameOptions,
        handleStart,
        handleScore,
        handleFeedback,
        handleTime
    }

}