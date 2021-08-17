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
        <AppContainer id='app'>
            <Global styles={GlobalStyles} />
            <Router />
        </AppContainer>
    );
};

export default App;
