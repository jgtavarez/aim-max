import { Suspense } from 'react';
import { BrowserRouter, Navigate } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import { routes } from './routes';

export const Navigation = () => {
    return (
        <Suspense fallback={<span>Loading...</span>}>
            <BrowserRouter>
                    <Routes>
                        {
                            routes.map(({ to, path, component: Component, text }) => (
                                <Route key={path} path={path} element={<Component />} />
                            ))
                        }

                        <Route path="/*" element={<Navigate to={routes[0].to} replace />} />
                    </Routes>
            </BrowserRouter>
        </Suspense>
    )
};
