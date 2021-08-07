import React, { Fragment } from 'react';
import Landing from 'Components/Landing/Landing';
import Section from 'Components/Section/Section';
import { Theme } from 'Styles/Colours';

const Home = () => {
    return (
        <Fragment>
            <Landing />
            <Section colour={Theme.light.text} background={Theme.light.card} direction='left' />
            <Section
                colour={Theme.light.text}
                background={Theme.light.background}
                direction='right'
            />
        </Fragment>
    );
};

export default Home;
