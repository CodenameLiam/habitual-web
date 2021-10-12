import { FC } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import Home from 'Pages/Home/Home';
import CommingSoon from 'Components/ComingSoon/CommingSoon';
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
        component: Support,
    },
    Login: {
        title: 'Login.',
        path: '/login',
        component: CommingSoon,
    },
    Privacy: {
        title: 'Privacy Policy.',
        path: '/privacy-policy',
        component: PrivacyPolicy,
    },
};

export default Routes;
