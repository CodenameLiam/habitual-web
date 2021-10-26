import { FC } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import Home from 'Pages/Home/Home';
import ComingSoon from 'Components/ComingSoon/CommingSoon';
import PrivacyPolicy from 'Pages/Privacy/PrivacyPolicy';
import Support from 'Pages/Support/Support';

interface Route {
    title: string;
    path: string;
    exact?: boolean;
    component: FC<RouteComponentProps>;
}

type RouteRecord = Record<string, Route>;

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
        component: ComingSoon,
    },
    Request: {
        title: 'Feature Requests.',
        path: '/request/:feature',
        component: ComingSoon,
    },
    Support: {
        title: 'Support.',
        path: '/support',
        component: Support,
    },
    Login: {
        title: 'Login.',
        path: '/login',
        component: ComingSoon,
    },
    Privacy: {
        title: 'Privacy Policy.',
        path: '/privacy-policy',
        component: PrivacyPolicy,
    },
};

export default Routes;
