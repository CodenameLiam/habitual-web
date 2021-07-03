import { Global } from '@emotion/react';
import React, { FC } from 'react';
import GlobalStyles from './Styles/Global';
import Landing from './Components/Landing/Landing';
import Section from './Components/Section/Section';
import { Container } from './Styles/Containers';
import { Theme } from './Styles/Colours';

const App: FC = () => {
    return (
        <Container>
            <Global styles={GlobalStyles} />
            <Landing />
            <Section colour={Theme.light.text} background={Theme.light.card} />
        </Container>
    );
};

export default App;
