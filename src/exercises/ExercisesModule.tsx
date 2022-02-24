import { createContext } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import { ReactionTime, SearchNumber, FindImpostor, SearchColor, ColorText, CaptureColor, ShapeChange, SoundReaction, SchulteTable, VisualMemory } from './pages';
import { useExercises } from './hooks/useExercises';
import { State as useExercisesState } from './hooks/useExercises';
import './styles/styles.css';
import './animations/animations.css';

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
                    <Route path="find-impostor" element={<FindImpostor />} />
                    <Route path="search-color" element={<SearchColor />} />
                    <Route path="color-text" element={<ColorText />} />
                    <Route path="capture-color" element={<CaptureColor />} />
                    <Route path="shape-change" element={<ShapeChange />} />
                    <Route path="sound-reaction" element={<SoundReaction />} />
                    <Route path="schulte-table" element={<SchulteTable />} />
                    <Route path="visual-memory" element={<VisualMemory />} />

                    <Route path="*" element={<Navigate to="/home" replace />} />
                </Routes>
            </div>
        </Provider>
    )
}

export default ExercisesModule

