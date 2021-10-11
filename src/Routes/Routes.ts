import { FC } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import Home from 'Pages/Home/Home';
import CommingSoon from 'Components/ComingSoon/CommingSoon';

interface Route {
    title: string;
    path: string;
    exact?: boolean;
    component: FC<RouteComponentProps>;
}

type RouteRecord = Record<'Home' | 'RequestHome' | 'Request' | 'Support' | 'Login', Route>;

const Routes: RouteRecord = {
    Home: {
        title: 'Build a Better You.',
        path: '/',
        exact: true,
        component: Home,
    },
    RequestHome: {
        title: 'Feature Requests.',
        path: '/request',
        component: CommingSoon,
    },
    Request: {
        title: 'Feature Requests.',
        path: '/request/:feature',
        component: CommingSoon,
    },
    Support: {
        title: 'Support.',
        path: '/support',
        component: CommingSoon,
    },
    Login: {
        title: 'Login.',
        path: '/login',
        component: CommingSoon,
    },
};

export default Routes;
