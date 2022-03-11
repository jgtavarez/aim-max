import { useState } from 'react';

export interface State {
    start: boolean;
    exercise: string;
    actualTime: number;
    score: number;
    feedback: string;
    finish: boolean;
    saveScore: boolean;
    saveScoreSuccessful: boolean;
}

export const useExercises = () => {

    const [gameOptions, setGameOptions] = useState<State>({
        start: false,
        exercise: '',
        actualTime: 0,
        score: 0,
        feedback: '',
        finish: false,
        saveScore: false,
        saveScoreSuccessful: false
    })

    const handleStart = (exercise: string) => {
        setGameOptions(prev => ({
            ...prev,
            start: true,
            exercise
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

    const openSaveScore = () => {
        setGameOptions(prev => ({
            ...prev,
            saveScore: true
        }));
    }

    const closeSaveScore = () => {
        setGameOptions(prev => ({
            ...prev,
            saveScore: false
        }));
    }

    const handlesaveScoreSuccessful = (saveScoreSuccessful: boolean) => {
        setGameOptions(prev => ({
            ...prev,
            saveScoreSuccessful
        }));
    }

    return {
        gameOptions,
        handleStart,
        handleScore,
        handleFeedback,
        handleTime,
        openSaveScore,
        closeSaveScore,
        handlesaveScoreSuccessful
    }

}