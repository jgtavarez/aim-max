import { Route, Routes, Navigate } from 'react-router-dom';
import { Navbar } from '../components/Navbar';
import { Home, Exercises, Leaderboard, Skills } from '../pages';

export const MainModule = () => {
    return (
        <div>
            <Navbar />

            <Routes>
                <Route path="home" element={<Home />} />
                <Route path="exercises" element={<Exercises />} />
                <Route path="leaderboard" element={<Leaderboard />} />
                <Route path="skills" element={<Skills />} />

                <Route path="*" element={<Navigate to="home" replace />} />
            </Routes>
        </div>
    )
};

export default MainModule;
