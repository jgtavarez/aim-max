import { lazy, LazyExoticComponent } from 'react';

type JSXComponent = () => JSX.Element;

interface Route {
    path: string;
    to: string;
    component: LazyExoticComponent<JSXComponent> | JSXComponent;
    text: string;
}

const MainModule = lazy(() => import(/* webpackChunkName: "main_module"*/ '../main/layout/MainModule'))

export const routes: Route[] = [
    {
        path: '/*',
        to: '/',
        component: MainModule,
        text: 'MainModule'
    }
]