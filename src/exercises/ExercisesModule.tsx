import { createContext } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import { ReactionTime, SearchNumber } from './pages';
import { useExercises } from './hooks/useExercises';
import { State as useExercisesState } from './hooks/useExercises';

interface exercisesContext {
    gameOptions: useExercisesState;
    handleStart: () => void;
    handleScore: (score: number) => void;
    handleFeedback: (feedback: string) => void;
    handleTime: () => void;
}

export const exercisesContext = createContext({} as exercisesContext);
const { Provider } = exercisesContext;

export const ExercisesModule = () => {

    const { gameOptions, handleStart, handleScore, handleFeedback, handleTime } = useExercises()

    return (
        <Provider value={{ gameOptions, handleStart, handleScore, handleFeedback, handleTime }}>
            <div>
                <Routes>
                    <Route path="reaction-time" element={<ReactionTime />} />
                    <Route path="search-number" element={<SearchNumber />} />

                    <Route path="*" element={<Navigate to="/home" replace />} />
                </Routes>
            </div>
        </Provider>
    )
}

export default ExercisesModule

