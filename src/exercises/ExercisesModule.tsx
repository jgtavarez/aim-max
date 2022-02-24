import { createContext } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import * as Pages from './pages';
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
                    <Route path="reaction-time" element={<Pages.ReactionTime />} />
                    <Route path="search-number" element={<Pages.SearchNumber />} />
                    <Route path="find-impostor" element={<Pages.FindImpostor />} />
                    <Route path="search-color" element={<Pages.SearchColor />} />
                    <Route path="color-text" element={<Pages.ColorText />} />
                    <Route path="capture-color" element={<Pages.CaptureColor />} />
                    <Route path="shape-change" element={<Pages.ShapeChange />} />
                    <Route path="sound-reaction" element={<Pages.SoundReaction />} />
                    <Route path="schulte-table" element={<Pages.SchulteTable />} />
                    <Route path="visual-memory" element={<Pages.VisualMemory />} />
                    <Route path="traffic-lights" element={<Pages.TrafficLights />} />
                    <Route path="press-key" element={<Pages.PressKey />} />
                    <Route path="target-shoot" element={<Pages.TargetShoot />} />

                    <Route path="*" element={<Navigate to="/home" replace />} />
                </Routes>
            </div>
        </Provider>
    )
}

export default ExercisesModule

