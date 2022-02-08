import { BrowserRouter, Navigate, NavLink } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import { routes } from './routes';

export const Navigation = () => {
    return (
        <BrowserRouter>
            <div>
                <div>
                    <nav>
                        <ul>
                            {
                                routes.map(({ to, path, text }) => (
                                    <li key={path}>
                                        <NavLink to={to}>{text}</NavLink>
                                    </li>
                                ))
                            }
                        </ul>
                    </nav>
                </div>

                <Routes>
                    {
                        routes.map(({ to, path, component: Component, text }) => (
                            <Route key={path} path={path} element={<Component />} />
                        ))
                    }

                    <Route path="/*" element={<Navigate to={routes[0].to} replace />} />
                </Routes>
            </div>
        </BrowserRouter>
    )
};
