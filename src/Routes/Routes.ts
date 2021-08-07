import { FC } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import Home from 'Pages/Home/Home';
import Landing from 'Components/Landing/Landing';

interface Route {
    title: string;
    path: string;
    exact?: boolean;
    component: FC<RouteComponentProps>;
}

type RouteRecord = Record<'Home' | 'Request', Route>;

const Routes: RouteRecord = {
    Home: {
        title: 'Build a Better You.',
        path: '/',
        exact: true,
        component: Home,
    },
    Request: {
        title: 'Feature Requests.',
        path: '/request/:feature',
        component: Landing,
    },
};

export default Routes;
