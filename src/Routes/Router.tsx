import React, { FC } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Page from '../Components/Page/Page';
import Routes from './Routes';

const Router: FC = () => {
    return (
        <BrowserRouter>
            <Switch>
                {Object.values(Routes).map(({ component: Component, exact, path, title }) => (
                    <Route
                        key={path}
                        path={path}
                        exact={exact}
                        render={(props) => (
                            <Page title={title}>
                                <Component {...props} />
                            </Page>
                        )}
                    />
                ))}
                <Redirect to={Routes.Home.path} />
            </Switch>
        </BrowserRouter>
    );
};

export default Router;
