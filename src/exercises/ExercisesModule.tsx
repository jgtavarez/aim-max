import { Route, Routes, Navigate } from 'react-router-dom';
import { ReactionTime } from './pages';

export const ExercisesModule = () => {
    return (
        <Routes>
            <Route path="reaction-time" element={<ReactionTime />} />

            <Route path="*" element={<Navigate to="/home" replace />} />
        </Routes>
    )
}

export default ExercisesModule

