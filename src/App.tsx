import { FC } from 'react';

/* Theming */
import GlobalStyles from './Styles/Global';
import { Global } from '@emotion/react';
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
