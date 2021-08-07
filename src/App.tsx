import React, { FC } from 'react';
import Landing from './Components/Landing/Landing';
import Section from './Components/Section/Section';

/* Theming */
import GlobalStyles from './Styles/Global';
import { Global } from '@emotion/react';
import { Theme } from './Styles/Colours';
import { AppContainer } from './Styles/Containers';

/* Firebase */
import { initializeApp } from 'firebase/app';
import firebaseConfig from './Services/FirebaseService';
import Router from './Routes/Router';
initializeApp(firebaseConfig);

const App: FC = () => {
    return (
        <AppContainer>
            <Global styles={GlobalStyles} />
            <Router />
            {/* <Landing />
            <Section colour={Theme.light.text} background={Theme.light.card} direction='left' />
            <Section
                colour={Theme.light.text}
                background={Theme.light.background}
                direction='right'
            /> */}
        </AppContainer>
    );
};

export default App;
