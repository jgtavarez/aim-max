import { Route, Routes, Navigate } from 'react-router-dom';
import { Guides, GuidesGame } from './pages';

export const GuidesModule = () => {
    return (
        <Routes>
            <Route path="" element={<Guides />} />
            <Route path="/:game" element={<GuidesGame />} />

            <Route path="*" element={<Navigate to="home" replace />} />
        </Routes>
    )
}

export default GuidesModule