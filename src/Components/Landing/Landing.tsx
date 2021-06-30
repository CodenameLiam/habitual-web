import React, { FC } from 'react';
import FlipText from '../FlipText/FlipText';
import * as Styles from './Landing.styles';

const Landing: FC = () => {
    return (
        <Styles.Section>
            <Styles.Title>Habitual</Styles.Title>
            <Styles.SubTitle>
                <FlipText>The Habit Tracking App</FlipText>
            </Styles.SubTitle>
        </Styles.Section>
    );
};

export default Landing;
