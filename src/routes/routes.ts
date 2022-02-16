import { lazy, LazyExoticComponent } from 'react';

type JSXComponent = () => JSX.Element;

interface Route {
    path: string;
    to: string;
    component: LazyExoticComponent<JSXComponent> | JSXComponent;
    text: string;
}

const MainModule = lazy(() => import(/* webpackChunkName: "main_module"*/ '../main/MainModule'))
const GuidesModule = lazy(() => import(/* webpackChunkName: "guides_module"*/ '../guides/GuidesModule'))

export const routes: Route[] = [
    {
        path: '/*',
        to: '/',
        component: MainModule,
        text: 'MainModule'
    },
    {
        path: '/guides/*',
        to: '/guides',
        component: GuidesModule,
        text: 'GuidesModule'
    },
]