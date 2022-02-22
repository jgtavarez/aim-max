import { Route, Routes, Navigate } from 'react-router-dom';
import { ReactionTime } from './pages';

export const ExercisesModule = () => {
    return (
        <div>
            <Routes>
                <Route path="reaction-time" element={<ReactionTime />} />

                <Route path="*" element={<Navigate to="/home" replace />} />
            </Routes>
        </div>
    )
}

export default ExercisesModule

