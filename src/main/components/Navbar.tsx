import { NavLink } from "react-router-dom";

export const Navbar = () => {
    return (
        <div>
            <nav>
                <ul>
                    <li>
                        <NavLink to='home'>Home</NavLink>
                    </li>
                    <li>
                        <NavLink to='exercises'>Exercises</NavLink>
                    </li>
                    <li>
                        <NavLink to='leaderboard'>Leaderboard</NavLink>
                    </li>
                    <li>
                        <NavLink to='skills'>Skills</NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    );
};
