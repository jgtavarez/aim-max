import { Route, Routes, Navigate } from 'react-router-dom';
import { Home, Exercises, Leaderboard, Skills } from './pages';
import { Navbar } from '../shared/components/navbar';
import { Footer } from '../shared/components/footer';
import { links, medias } from '../shared/data/data';
import './styles/styles.css'

export const MainModule = () => {
    return (
        <div>
            <Navbar>
                {
                    links.map(({ to, text }) => (
                        <Navbar.Link key={to} to={to} text={text} />
                    ))
                }
            </Navbar>

            <Routes>
                <Route path="home" element={<Home />} />
                <Route path="exercises" element={<Exercises />} />
                <Route path="leaderboard" element={<Leaderboard />} />
                <Route path="skills" element={<Skills />} />

                <Route path="*" element={<Navigate to="/home" replace />} />
            </Routes>

            <Footer>
                {
                    medias.map(({ icon, href }) => (
                        <Footer.Media key={icon} icon={icon} href={href} />
                    ))
                }
            </Footer>
        </div>
    )
};

export default MainModule;
