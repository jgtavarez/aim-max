import { Home, Exercises, Leaderboard, Skills } from '../main/pages';

interface Route {
    to: string,
    path: string,
    component: any,
    text: string
}

export const routes: Route[] = [
    {
        to: '/home',
        path: 'home',
        component: Home,
        text: 'Home'
    },
    {
        to: '/exercises',
        path: 'exercises',
        component: Exercises,
        text: 'Exercises'
    },
    {
        to: '/leaderboard',
        path: 'leaderboard',
        component: Leaderboard,
        text: 'Leaderboard'
    },
    {
        to: '/skills',
        path: 'skills',
        component: Skills,
        text: 'Skills'
    },
]